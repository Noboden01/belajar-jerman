// ============================================================
// Deutsch Flashcards v2.0 — Full app logic
// Matches index.html v2 (tabs, SRS, artikel, typing, challenge)
// ============================================================

// ---------- Constants ----------
const SRS_INTERVALS = [1, 3, 7, 14, 30, 60, 120];
const STORAGE_KEYS = { cards: 'df_cards_v1', user: 'df_user_v1', settings: 'df_settings_v1' };
const DAILY_GOAL = 20;

// ---------- Utility ----------
function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}
function cardKey(card) { return `${card.front}|${card.back}`; }
function today() { return new Date().toDateString(); }
function normalize(s) {
    return (s || '').toLowerCase().trim()
        .replace(/[.,!?;:„"„"']/g, '')
        .replace(/\s+/g, ' ');
}

// ---------- Storage ----------
let cardsState = {};
let userState = { streak: 0, longestStreak: 0, lastStudyDate: '', goalToday: 0, goalDate: '', highScore: 0 };
let settings = { autoAudio: true, reverseMode: false };

function loadAll() {
    try {
        cardsState = JSON.parse(localStorage.getItem(STORAGE_KEYS.cards) || '{}');
        const u = JSON.parse(localStorage.getItem(STORAGE_KEYS.user) || 'null');
        if (u) userState = { ...userState, ...u };
        const s = JSON.parse(localStorage.getItem(STORAGE_KEYS.settings) || 'null');
        if (s) settings = { ...settings, ...s };
    } catch (e) { console.warn('Load error', e); }
}
function saveCards() { localStorage.setItem(STORAGE_KEYS.cards, JSON.stringify(cardsState)); }
function saveUser() { localStorage.setItem(STORAGE_KEYS.user, JSON.stringify(userState)); }
function saveSettings() { localStorage.setItem(STORAGE_KEYS.settings, JSON.stringify(settings)); }

// ---------- SRS ----------
function getCardState(card) {
    const k = cardKey(card);
    if (!cardsState[k]) cardsState[k] = { level: 0, correct: 0, wrong: 0, nextReview: 0, bookmarked: false };
    return cardsState[k];
}
function updateSRS(card, isCorrect) {
    const st = getCardState(card);
    if (isCorrect) { st.correct++; st.level = Math.min(st.level + 1, SRS_INTERVALS.length - 1); }
    else { st.wrong++; st.level = Math.max(0, st.level - 1); }
    st.nextReview = Date.now() + SRS_INTERVALS[st.level] * 86400000;
    saveCards();
}

// ---------- Streak & Goal ----------
function updateStreak() {
    const t = today();
    if (userState.lastStudyDate === t) return;
    const y = new Date(Date.now() - 86400000).toDateString();
    userState.streak = (userState.lastStudyDate === y) ? userState.streak + 1 : 1;
    userState.longestStreak = Math.max(userState.longestStreak, userState.streak);
    userState.lastStudyDate = t;
    userState.goalToday = 0;
    userState.goalDate = t;
    saveUser();
    renderStreak();
}
function incrementGoal() {
    const t = today();
    if (userState.goalDate !== t) { userState.goalToday = 0; userState.goalDate = t; }
    userState.goalToday++;
    saveUser();
    renderStreak();
}
function renderStreak() {
    const s = document.getElementById('streak-count');
    const g = document.getElementById('goal-count');
    const t = document.getElementById('goal-target');
    if (s) s.innerText = userState.streak || 0;
    if (g) g.innerText = userState.goalDate === today() ? (userState.goalToday || 0) : 0;
    if (t) t.innerText = DAILY_GOAL;
}

// ---------- State ----------
let currentDeck = [];
let fullDeck = [];
let currentIndex = 0;
let correctCount = 0;
let mode = 'flashcard';
let reviewMistakesOnly = false;
let bookmarksOnly = false;

// ---------- DOM helper ----------
const $ = id => document.getElementById(id);

// ---------- Init ----------
function initializeApp() {
    if (typeof rawDeck === 'undefined' || !Array.isArray(rawDeck)) {
        alert("Error: File 'kosakata.js' tidak terdeteksi!");
        return;
    }
    loadAll();
    renderStreak();

    const cats = [...new Set(rawDeck.map(i => i.cat))].sort();
    const filterSelect = $('category-filter');
    cats.forEach(c => {
        const opt = document.createElement('option');
        opt.value = c; opt.innerText = c.toUpperCase();
        filterSelect.appendChild(opt);
    });

    const savedLevel = localStorage.getItem('df_filter_level');
    const savedCat = localStorage.getItem('df_filter_cat');
    if (savedLevel) $('level-filter').value = savedLevel;
    if (savedCat) $('category-filter').value = savedCat;

    // Restore settings UI
    $('btn-reverse').classList.toggle('active', settings.reverseMode);
    if (!settings.autoAudio) {
        $('audio-icon').className = 'fa-solid fa-volume-xmark';
        $('audio-status').innerText = 'Off';
        $('audio-toggle-btn').style.opacity = '0.6';
    }

    bindEvents();
    filterDeck();
    initArtikel();
    initTyping();
    initChallenge();
    updateMistakeCount();

    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('sw.js').catch(() => {});
    }
}

// ---------- Event Bindings ----------
function bindEvents() {
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', () => switchTab(btn.dataset.tab));
    });

    $('level-filter').addEventListener('change', () => {
        localStorage.setItem('df_filter_level', $('level-filter').value);
        filterDeck();
    });
    $('category-filter').addEventListener('change', () => {
        localStorage.setItem('df_filter_cat', $('category-filter').value);
        filterDeck();
    });

    const flashcardWrapper = $('flashcard-wrapper');
    flashcardWrapper.addEventListener('click', flipCard);

    $('btn-wrong').addEventListener('click', e => { e.stopPropagation(); markCard(false); });
    $('btn-correct').addEventListener('click', e => { e.stopPropagation(); markCard(true); });
    $('next-btn').addEventListener('click', nextCard);
    $('btn-shuffle').addEventListener('click', shuffleCurrentDeck);
    $('btn-reset').addEventListener('click', resetProgress);
    $('speak-btn').addEventListener('click', e => { e.stopPropagation(); speakGerman(); });
    $('audio-toggle-btn').addEventListener('click', toggleAutoAudio);
    $('bookmark-front').addEventListener('click', e => { e.stopPropagation(); toggleBookmark(); });
    $('bookmark-back').addEventListener('click', e => { e.stopPropagation(); toggleBookmark(); });

    $('btn-reverse').addEventListener('click', toggleReverse);
    $('btn-review-mistakes').addEventListener('click', toggleReviewMistakes);
    $('btn-bookmarks').addEventListener('click', toggleBookmarks);
    $('btn-progress').addEventListener('click', showProgressModal);
    $('modal-close').addEventListener('click', () => $('progress-modal').classList.remove('show'));
    $('progress-modal').addEventListener('click', e => {
        if (e.target === $('progress-modal')) $('progress-modal').classList.remove('show');
    });

    $('search-input').addEventListener('input', renderWordList);

    document.addEventListener('keydown', handleKeydown);

    // Swipe
    let touchX = 0, touchY = 0;
    flashcardWrapper.addEventListener('touchstart', e => {
        touchX = e.touches[0].clientX; touchY = e.touches[0].clientY;
    }, { passive: true });
    flashcardWrapper.addEventListener('touchend', e => {
        if (mode !== 'flashcard') return;
        const dx = e.changedTouches[0].clientX - touchX;
        const dy = e.changedTouches[0].clientY - touchY;
        if (Math.abs(dx) < 60 || Math.abs(dy) > Math.abs(dx)) return;
        if (!$('action-controls').classList.contains('hidden')) {
            markCard(dx > 0);
        }
    });

    // Artikel
    document.querySelectorAll('.artikel-btn').forEach(btn => {
        btn.addEventListener('click', () => answerArtikel(btn.dataset.article));
    });
    $('artikel-next').addEventListener('click', nextArtikel);

    // Typing
    $('typing-check').addEventListener('click', checkTyping);
    $('typing-skip').addEventListener('click', skipTyping);
    $('typing-input').addEventListener('keydown', e => {
        if (e.key === 'Enter') checkTyping();
    });

    // Challenge
    $('challenge-start').addEventListener('click', startChallenge);
    $('challenge-correct').addEventListener('click', () => challengeAnswer(true));
    $('challenge-wrong').addEventListener('click', () => challengeAnswer(false));
}

function handleKeydown(e) {
    if (mode !== 'flashcard') return;
    if (e.target.tagName === 'INPUT') return;
    const actionControls = $('action-controls');
    if (e.code === 'Space') { e.preventDefault(); flipCard(); }
    else if (e.code === 'ArrowLeft' && !actionControls.classList.contains('hidden')) markCard(false);
    else if (e.code === 'ArrowRight') {
        if (!actionControls.classList.contains('hidden')) markCard(true);
        else if (!$('next-btn').classList.contains('hidden')) nextCard();
    }
}

// ---------- Tab Switch ----------
function switchTab(tab) {
    mode = tab;
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.toggle('active', b.dataset.tab === tab));
    document.querySelectorAll('.tab-panel').forEach(p => p.classList.toggle('active', p.id === `tab-${tab}`));
    if (tab === 'list') renderWordList();
    if (tab === 'artikel' && !artikelState.current) nextArtikel();
    if (tab === 'typing' && !typingState.current) nextTyping();
}

// ---------- Flashcard ----------
function getFilteredPool() {
    let pool = [...rawDeck];
    const lv = $('level-filter').value;
    const cat = $('category-filter').value;
    if (lv !== 'all') pool = pool.filter(c => c.level === lv);
    if (cat !== 'all') pool = pool.filter(c => c.cat === cat);
    return pool;
}

function filterDeck() {
    fullDeck = getFilteredPool();
    rebuildCurrentDeck();
}

function rebuildCurrentDeck() {
    let deck = [...fullDeck];
    if (reviewMistakesOnly) deck = deck.filter(c => getCardState(c).wrong > 0);
    if (bookmarksOnly) deck = deck.filter(c => getCardState(c).bookmarked);
    currentDeck = shuffle(deck);
    currentIndex = 0;
    correctCount = 0;
    $('score-correct').innerText = 0;
    updateCardData();
    updateMistakeCount();
}

function shuffleCurrentDeck() {
    currentDeck = shuffle(currentDeck);
    currentIndex = 0;
    updateCardData();
}

function resetProgress() {
    if (!confirm('Reset semua progress, bookmark, dan statistik?')) return;
    cardsState = {};
    userState.streak = 0; userState.goalToday = 0;
    saveCards(); saveUser(); renderStreak();
    currentIndex = 0; correctCount = 0;
    rebuildCurrentDeck();
}

function flipCard() {
    if (currentDeck.length === 0) return;
    const cardEl = $('card');
    cardEl.classList.toggle('flipped');
    if (cardEl.classList.contains('flipped') && settings.autoAudio) speakGerman();
}

function updateCardData() {
    const cardEl = $('card');
    const actionControls = $('action-controls');
    const nextBtn = $('next-btn');

    if (currentDeck.length === 0) {
        $('front-text').innerText = reviewMistakesOnly ? "Tidak ada kartu salah 🎉" : (bookmarksOnly ? "Belum ada favorit ⭐" : "Kosakata tidak ditemukan");
        $('back-text').innerText = "-";
        $('back-example').innerText = "Coba ubah filter atau matikan filter aktif.";
        $('current-idx').innerText = "0 / 0";
        $('progress-bar').style.width = "0%";
        return;
    }
    const c = currentDeck[currentIndex];
    const st = getCardState(c);
    const frontText = settings.reverseMode ? c.back : c.front;
    const backText = settings.reverseMode ? c.front : c.back;

    $('card-level').innerText = c.level;
    $('card-level-back').innerText = c.level;
    $('card-category').innerText = c.cat;
    $('card-category-back').innerText = c.cat;
    $('front-text').innerText = frontText;
    $('back-text').innerText = backText;
    $('back-example').innerText = "Beispiel: " + c.example;

    const bmClass = st.bookmarked ? 'fa-solid fa-star' : 'fa-regular fa-star';
    const bmActive = st.bookmarked ? 'active' : '';
    $('bookmark-front').className = 'bookmark-btn ' + bmActive;
    $('bookmark-back').className = 'bookmark-btn ' + bmActive;
    $('bookmark-front').innerHTML = `<i class="${bmClass}"></i>`;
    $('bookmark-back').innerHTML = `<i class="${bmClass}"></i>`;

    $('current-idx').innerText = `${currentIndex + 1} / ${currentDeck.length}`;
    $('progress-bar').style.width = `${((currentIndex + 1) / currentDeck.length) * 100}%`;

    cardEl.classList.remove('flipped');
    actionControls.classList.remove('hidden');
    nextBtn.classList.add('hidden');
}

function markCard(isCorrect) {
    if (currentDeck.length === 0) return;
    const card = currentDeck[currentIndex];
    updateSRS(card, isCorrect);
    if (isCorrect) { correctCount++; $('score-correct').innerText = correctCount; }
    updateStreak();
    incrementGoal();
    updateMistakeCount();

    const cardEl = $('card');
    if (!cardEl.classList.contains('flipped')) {
        cardEl.classList.add('flipped');
        if (settings.autoAudio) speakGerman();
    }
    $('action-controls').classList.add('hidden');
    $('next-btn').classList.remove('hidden');
}

function nextCard() {
    currentIndex++;
    if (currentIndex >= currentDeck.length) {
        if (window.confetti) window.confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 } });
        setTimeout(() => {
            alert(`🎉 Sesi selesai!\nAnda benar ${correctCount} dari ${currentDeck.length}.`);
        }, 300);
        currentIndex = 0; correctCount = 0;
        $('score-correct').innerText = 0;
        currentDeck = shuffle(currentDeck);
    }
    updateCardData();
}

function toggleBookmark() {
    if (currentDeck.length === 0) return;
    const st = getCardState(currentDeck[currentIndex]);
    st.bookmarked = !st.bookmarked;
    saveCards();
    updateCardData();
}

function toggleReviewMistakes() {
    reviewMistakesOnly = !reviewMistakesOnly;
    if (reviewMistakesOnly) bookmarksOnly = false;
    $('btn-review-mistakes').classList.toggle('active', reviewMistakesOnly);
    $('btn-bookmarks').classList.toggle('active', bookmarksOnly);
    rebuildCurrentDeck();
}

function toggleBookmarks() {
    bookmarksOnly = !bookmarksOnly;
    if (bookmarksOnly) reviewMistakesOnly = false;
    $('btn-bookmarks').classList.toggle('active', bookmarksOnly);
    $('btn-review-mistakes').classList.toggle('active', reviewMistakesOnly);
    rebuildCurrentDeck();
}

function toggleReverse() {
    settings.reverseMode = !settings.reverseMode;
    saveSettings();
    $('btn-reverse').classList.toggle('active', settings.reverseMode);
    updateCardData();
}

function toggleAutoAudio() {
    settings.autoAudio = !settings.autoAudio;
    saveSettings();
    const icon = $('audio-icon'), status = $('audio-status');
    if (settings.autoAudio) { icon.className = 'fa-solid fa-volume-high'; status.innerText = 'On'; $('audio-toggle-btn').style.opacity = '1'; }
    else { icon.className = 'fa-solid fa-volume-xmark'; status.innerText = 'Off'; $('audio-toggle-btn').style.opacity = '0.6'; }
}

function updateMistakeCount() {
    const n = Object.values(cardsState).filter(s => s.wrong > 0 && s.level < 4).length;
    const el = $('mistake-count');
    if (el) el.innerText = n;
}

// ---------- Audio ----------
function speakGerman() {
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    const c = currentDeck[currentIndex];
    if (!c) return;
    const u = new SpeechSynthesisUtterance(c.back);
    u.lang = 'de-DE';
    u.rate = 0.9;
    window.speechSynthesis.speak(u);
}

// ---------- Word List ----------
function renderWordList() {
    const q = normalize($('search-input').value);
    const pool = getFilteredPool();
    const filtered = q ? pool.filter(c => normalize(c.front).includes(q) || normalize(c.back).includes(q)) : pool;
    const container = $('word-list');
    if (filtered.length === 0) {
        container.innerHTML = '<div style="text-align:center;color:var(--text-muted);padding:40px 20px;">Tidak ada hasil</div>';
        return;
    }
    container.innerHTML = filtered.slice(0, 300).map(c => {
        const st = getCardState(c);
        const star = st.bookmarked ? '⭐ ' : '';
        return `<div class="word-item" data-key="${cardKey(c)}">
            <div class="word-item-front"><span>${star}${c.front}</span><span class="level-badge">${c.level}</span></div>
            <div class="word-item-back">→ ${c.back}</div>
            <div class="word-example-mini">${c.example}</div>
        </div>`;
    }).join('');
    container.querySelectorAll('.word-item').forEach(item => {
        item.addEventListener('click', () => item.classList.toggle('revealed'));
    });
}

// ---------- Artikel Trainer ----------
let artikelState = { current: null, answered: false };
let artikelDeck = [];

function initArtikel() {
    artikelDeck = rawDeck.filter(c => /^(der|die|das)\s/i.test(c.back));
}

function nextArtikel() {
    if (artikelDeck.length === 0) return;
    const pool = shuffle(artikelDeck).slice(0, 20);
    artikelState.current = pool[0];
    artikelState.answered = false;
    const match = artikelState.current.back.match(/^(der|die|das)\s+(.+)$/i);
    $('artikel-word').innerText = match ? match[2] : artikelState.current.back;
    document.querySelectorAll('.artikel-btn').forEach(b => {
        b.className = 'artikel-btn';
        b.disabled = false;
    });
    $('artikel-feedback').classList.add('hidden');
    $('artikel-next').style.display = 'none';
}

function answerArtikel(choice) {
    if (!artikelState.current || artikelState.answered) return;
    artikelState.answered = true;
    const m = artikelState.current.back.match(/^(der|die|das)/i);
    const correct = m[1].toLowerCase();
    const isCorrect = choice.toLowerCase() === correct;

    document.querySelectorAll('.artikel-btn').forEach(b => {
        b.disabled = true;
        if (b.dataset.article === correct) b.classList.add('correct');
        else if (b.dataset.article === choice && !isCorrect) b.classList.add('wrong');
    });

    const fb = $('artikel-feedback');
    fb.classList.remove('hidden');
    fb.className = 'artikel-feedback ' + (isCorrect ? 'correct' : 'wrong');
    fb.innerText = isCorrect ? `✅ Richtig! ${artikelState.current.back}` : `❌ Salah. Yang benar: ${artikelState.current.back}`;

    updateSRS(artikelState.current, isCorrect);
    updateStreak();
    incrementGoal();

    $('artikel-next').style.display = 'block';
}

// ---------- Typing Mode ----------
let typingState = { current: null, answered: false };
let typingDeck = [];

function initTyping() { typingDeck = []; }

function nextTyping() {
    if (!typingDeck.length) typingDeck = shuffle(getFilteredPool());
    if (!typingDeck.length) return;
    typingState.current = typingDeck.pop();
    typingState.answered = false;
    $('typing-front').innerText = typingState.current.front;
    const input = $('typing-input');
    input.value = '';
    input.className = 'typing-input';
    input.disabled = false;
    $('typing-feedback').innerText = '';
    $('typing-feedback').className = 'typing-feedback';
    $('typing-hint').innerText = '';
    setTimeout(() => input.focus(), 100);
}

function checkTyping() {
    if (!typingState.current || typingState.answered) return;
    const input = $('typing-input');
    const answer = normalize(input.value);
    if (!answer) return;
    typingState.answered = true;
    const correct = normalize(typingState.current.back);
    const isCorrect = answer === correct;

    input.classList.add(isCorrect ? 'correct' : 'wrong');
    input.disabled = true;
    const fb = $('typing-feedback');
    fb.className = 'typing-feedback ' + (isCorrect ? 'correct' : 'wrong');
    fb.innerText = isCorrect ? '✅ Richtig!' : `❌ Salah. Jawaban: ${typingState.current.back}`;
    $('typing-hint').innerText = typingState.current.example;

    updateSRS(typingState.current, isCorrect);
    updateStreak();
    incrementGoal();

    setTimeout(nextTyping, 2000);
}

function skipTyping() {
    if (!typingState.current || typingState.answered) return;
    typingState.answered = true;
    $('typing-input').disabled = true;
    $('typing-feedback').innerText = `Jawaban: ${typingState.current.back}`;
    $('typing-feedback').className = 'typing-feedback';
    setTimeout(nextTyping, 1500);
}

// ---------- Challenge Mode ----------
let challengeState = { active: false, timeLeft: 60, score: 0, current: null, timer: null };

function initChallenge() {
    $('challenge-high').innerText = userState.highScore || 0;
}

function startChallenge() {
    challengeState.active = true;
    challengeState.timeLeft = 60;
    challengeState.score = 0;
    $('challenge-score').innerText = 0;
    $('challenge-timer').innerText = 60;
    $('challenge-timer').classList.remove('danger');
    $('challenge-buttons').style.display = 'flex';
    $('challenge-start').style.display = 'none';
    nextChallengeCard();
    challengeState.timer = setInterval(() => {
        challengeState.timeLeft--;
        $('challenge-timer').innerText = challengeState.timeLeft;
        $('challenge-timer').classList.toggle('danger', challengeState.timeLeft <= 10);
        if (challengeState.timeLeft <= 0) endChallenge();
    }, 1000);
}

function nextChallengeCard() {
    if (!challengeState.active) return;
    const pool = getFilteredPool();
    if (!pool.length) return;
    challengeState.current = pool[Math.floor(Math.random() * pool.length)];
    $('challenge-word').innerText = challengeState.current.front;
    $('challenge-answer').innerText = '→ ' + challengeState.current.back;
}
function challengeAnswer(isCorrect) {
    if (!challengeState.active || !challengeState.current) return;
    if (isCorrect) {
        challengeState.score++;
        $('challenge-score').innerText = challengeState.score;
    }
    nextChallengeCard();
}

function endChallenge() {
    clearInterval(challengeState.timer);
    challengeState.active = false;
    $('challenge-timer').classList.remove('danger');
    $('challenge-buttons').style.display = 'none';
    $('challenge-start').style.display = 'block';
    $('challenge-start').innerHTML = '<i class="fa-solid fa-play"></i> Main Lagi';
    const finalScore = challengeState.score;
    if (finalScore > (userState.highScore || 0)) {
        userState.highScore = finalScore;
        saveUser();
        $('challenge-high').innerText = finalScore;
        if (window.confetti) window.confetti({ particleCount: 200, spread: 90, origin: { y: 0.5 } });
    }
    $('challenge-word').innerText = `Selesai! Skor: ${finalScore}`;
    $('challenge-answer').innerText = '';
    updateStreak();
    incrementGoal();
}
// ---------- Progress Modal ----------
function showProgressModal() {
    const list = $('progress-list');
    const cats = [...new Set(rawDeck.map(i => i.cat))].sort();
    list.innerHTML = cats.map(cat => {
        const cards = rawDeck.filter(i => i.cat === cat);
        const mastered = cards.filter(c => {
            const s = cardsState[cardKey(c)];
            return s && s.level >= 4;
        }).length;
        const pct = cards.length ? Math.round((mastered / cards.length) * 100) : 0;
        return `<div class="progress-cat">
            <div class="progress-cat-header"><span>${cat}</span><span>${mastered}/${cards.length} (${pct}%)</span></div>
            <div class="progress-cat-bar"><div class="progress-cat-fill" style="width: ${pct}%"></div></div>
        </div>`;
    }).join('');
    $('progress-modal').classList.add('show');
}

// ---------- Start ----------
window.addEventListener('load', initializeApp);