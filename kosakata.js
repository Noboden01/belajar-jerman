// Cleaned kosakata.js — 1202 unique entries
const rawDeck = [
    {
        "level": "A1",
        "cat": "Alltag & Begrüßung",
        "front": "Halo",
        "back": "Hallo",
        "example": "Hallo, wie geht es dir?"
    },
    {
        "level": "A1",
        "cat": "Alltag & Begrüßung",
        "front": "Selamat pagi",
        "back": "Guten Morgen",
        "example": "Guten Morgen, Frau Schmidt!"
    },
    {
        "level": "A1",
        "cat": "Alltag & Begrüßung",
        "front": "Selamat siang",
        "back": "Guten Tag",
        "example": "Guten Tag, wie kann ich helfen?"
    },
    {
        "level": "A1",
        "cat": "Alltag & Begrüßung",
        "front": "Selamat sore",
        "back": "Guten Abend",
        "example": "Guten Abend, schön dich zu sehen."
    },
    {
        "level": "A1",
        "cat": "Alltag & Begrüßung",
        "front": "Selamat malam (perpisahan)",
        "back": "Gute Nacht",
        "example": "Gute Nacht und schlaf gut!"
    },
    {
        "level": "A1",
        "cat": "Alltag & Begrüßung",
        "front": "Sampai jumpa",
        "back": "Tschüss",
        "example": "Tschüss, bis morgen!"
    },
    {
        "level": "A1",
        "cat": "Alltag & Begrüßung",
        "front": "Sampai jumpa lagi",
        "back": "Auf Wiedersehen",
        "example": "Auf Wiedersehen! Bis zum nächsten Mal."
    },
    {
        "level": "A1",
        "cat": "Alltag & Begrüßung",
        "front": "Sampai nanti",
        "back": "Bis später",
        "example": "Tschüss! Bis später!"
    },
    {
        "level": "A1",
        "cat": "Alltag & Begrüßung",
        "front": "Sampai besok",
        "back": "Bis morgen",
        "example": "Guten Abend! Bis morgen in der Schule."
    },
    {
        "level": "A1",
        "cat": "Alltag & Begrüßung",
        "front": "Terima kasih",
        "back": "Danke",
        "example": "Danke für deine Hilfe."
    },
    {
        "level": "A1",
        "cat": "Alltag & Begrüßung",
        "front": "Terima kasih banyak",
        "back": "Vielen Dank",
        "example": "Vielen Dank für deine Hilfe."
    },
    {
        "level": "A1",
        "cat": "Alltag & Begrüßung",
        "front": "Sama-sama / Silakan",
        "back": "Bitte schön",
        "example": "Danke sehr! – Bitte schön!"
    },
    {
        "level": "A1",
        "cat": "Alltag & Begrüßung",
        "front": "Tolong",
        "back": "Bitte",
        "example": "Bitte helfen Sie mir."
    },
    {
        "level": "A1",
        "cat": "Alltag & Begrüßung",
        "front": "Permisi / Maaf",
        "back": "Entschuldigung",
        "example": "Entschuldigung, wo ist die Toilette?"
    },
    {
        "level": "A1",
        "cat": "Alltag & Begrüßung",
        "front": "Maafkan saya",
        "back": "Verzeihung",
        "example": "Verzeihung, ich bin zu spät."
    },
    {
        "level": "A1",
        "cat": "Alltag & Begrüßung",
        "front": "Nama saya ...",
        "back": "Ich heiße ...",
        "example": "Ich heiße Maria und komme aus Indonesien."
    },
    {
        "level": "A1",
        "cat": "Alltag & Begrüßung",
        "front": "Selamat datang",
        "back": "Willkommen",
        "example": "Herzlich willkommen in Deutschland!"
    },
    {
        "level": "A1",
        "cat": "Alltag & Begrüßung",
        "front": "Senang berkenalan",
        "back": "Freut mich",
        "example": "Freut mich, Sie kennenzulernen!"
    },
    {
        "level": "A1",
        "cat": "Alltag & Begrüßung",
        "front": "Apa kabar? (Formal)",
        "back": "Wie geht es Ihnen?",
        "example": "Guten Tag, Herr Müller! Wie geht es Ihnen?"
    },
    {
        "level": "A1",
        "cat": "Alltag & Begrüßung",
        "front": "Apa kabar? (Informal)",
        "back": "Wie geht's dir?",
        "example": "Hallo Anna! Wie geht's dir?"
    },
    {
        "level": "A1",
        "cat": "Alltag & Begrüßung",
        "front": "Baik-baik saja",
        "back": "Mir geht es gut",
        "example": "Danke, mir geht es sehr gut."
    },
    {
        "level": "A1",
        "cat": "Alltag & Begrüßung",
        "front": "Siapa nama Anda?",
        "back": "Wie heißen Sie?",
        "example": "Entschuldigung, wie heißen Sie?"
    },
    {
        "level": "A1",
        "cat": "Alltag & Begrüßung",
        "front": "Dari mana Anda berasal?",
        "back": "Woher kommen Sie?",
        "example": "Woher kommen Sie? Ich komme aus Japan."
    },
    {
        "level": "A1",
        "cat": "Alltag & Begrüßung",
        "front": "Saya tinggal di ...",
        "back": "Ich wohne in ...",
        "example": "Ich wohne in Berlin."
    },
    {
        "level": "A1",
        "cat": "Alltag & Begrüßung",
        "front": "Berapa umur Anda?",
        "back": "Wie alt sind Sie?",
        "example": "Wie alt sind Sie? Ich bin 25 Jahre alt."
    },
    {
        "level": "A1",
        "cat": "Alltag & Begrüßung",
        "front": "Saya mengerti",
        "back": "Ich verstehe",
        "example": "Ich verstehe das Problem jetzt."
    },
    {
        "level": "A1",
        "cat": "Alltag & Begrüßung",
        "front": "Saya tidak mengerti",
        "back": "Ich verstehe nicht",
        "example": "Entschuldigung, das verstehe ich leider nicht."
    },
    {
        "level": "A1",
        "cat": "Alltag & Begrüßung",
        "front": "Bisa bicara lebih pelan?",
        "back": "Sprechen Sie bitte langsamer",
        "example": "Sprechen Sie bitte etwas langsamer."
    },
    {
        "level": "A1",
        "cat": "Alltag & Begrüßung",
        "front": "Bisa ulang lagi?",
        "back": "Können Sie das wiederholen?",
        "example": "Können Sie das bitte wiederholen?"
    },
    {
        "level": "A1",
        "cat": "Alltag & Begrüßung",
        "front": "Ya",
        "back": "ja",
        "example": "Ja, ich komme morgen."
    },
    {
        "level": "A1",
        "cat": "Alltag & Begrüßung",
        "front": "Tidak",
        "back": "nein",
        "example": "Nein, das ist nicht richtig."
    },
    {
        "level": "A1",
        "cat": "Alltag & Begrüßung",
        "front": "Mungkin",
        "back": "vielleicht",
        "example": "Vielleicht gehe ich heute ins Kino."
    },
    {
        "level": "A1",
        "cat": "Alltag & Begrüßung",
        "front": "Tentu saja",
        "back": "natürlich",
        "example": "Natürlich helfe ich dir gerne."
    },
    {
        "level": "A1",
        "cat": "Alltag & Begrüßung",
        "front": "Saya berasal dari Indonesia",
        "back": "Ich komme aus Indonesien",
        "example": "Ich komme aus Indonesien, aber ich wohne in Berlin."
    },
    {
        "level": "A1",
        "cat": "Alltag & Begrüßung",
        "front": "Saya tidak bisa bahasa Jerman",
        "back": "Ich spreche kein Deutsch",
        "example": "Entschuldigung, ich spreche kein Deutsch."
    },
    {
        "level": "A1",
        "cat": "Alltag & Begrüßung",
        "front": "Tolong bantu saya",
        "back": "Helfen Sie mir bitte",
        "example": "Helfen Sie mir bitte, ich habe mich verlaufen."
    },
    {
        "level": "A1",
        "cat": "Alltag & Begrüßung",
        "front": "Tidak masalah",
        "back": "Kein Problem",
        "example": "Kein Problem, ich mache das gern."
    },
    {
        "level": "A1",
        "cat": "Alltag & Begrüßung",
        "front": "Tentu",
        "back": "Sicher",
        "example": "Sicher, das können wir machen."
    },
    {
        "level": "A1",
        "cat": "Alltag & Begrüßung",
        "front": "Saya setuju",
        "back": "Ich stimme zu",
        "example": "Ich stimme dir zu, das ist eine gute Idee."
    },
    {
        "level": "A1",
        "cat": "Alltag & Begrüßung",
        "front": "Saya tidak setuju",
        "back": "Ich stimme nicht zu",
        "example": "Ich stimme nicht zu, das ist zu teuer."
    },
    {
        "level": "A1",
        "cat": "Alltag & Begrüßung",
        "front": "Siapa",
        "back": "wer",
        "example": "Wer ist das?"
    },
    {
        "level": "A1",
        "cat": "Alltag & Begrüßung",
        "front": "Apa",
        "back": "was",
        "example": "Was machen Sie?"
    },
    {
        "level": "A1",
        "cat": "Alltag & Begrüßung",
        "front": "Di mana",
        "back": "wo",
        "example": "Wo wohnst du?"
    },
    {
        "level": "A1",
        "cat": "Alltag & Begrüßung",
        "front": "Dari mana",
        "back": "woher",
        "example": "Woher kommst du?"
    },
    {
        "level": "A1",
        "cat": "Alltag & Begrüßung",
        "front": "Ke mana",
        "back": "wohin",
        "example": "Wohin gehst du?"
    },
    {
        "level": "A1",
        "cat": "Alltag & Begrüßung",
        "front": "Mengapa",
        "back": "warum",
        "example": "Warum lernst du Deutsch?"
    },
    {
        "level": "A1",
        "cat": "Alltag & Begrüßung",
        "front": "Kapan",
        "back": "wann",
        "example": "Wann kommt der Bus?"
    },
    {
        "level": "A1",
        "cat": "Alltag & Begrüßung",
        "front": "Bagaimana",
        "back": "wie",
        "example": "Wie geht es dir?"
    },
    {
        "level": "A1",
        "cat": "Alltag & Begrüßung",
        "front": "Di sini",
        "back": "hier",
        "example": "Ich bin hier."
    },
    {
        "level": "A1",
        "cat": "Alltag & Begrüßung",
        "front": "Di sana",
        "back": "dort",
        "example": "Das Buch liegt dort."
    },
    {
        "level": "A1",
        "cat": "Zahlen & Mengen",
        "front": "Nol",
        "back": "null",
        "example": "Null Grad ist kalt."
    },
    {
        "level": "A1",
        "cat": "Zahlen & Mengen",
        "front": "Satu",
        "back": "eins",
        "example": "Ich habe nur eins."
    },
    {
        "level": "A1",
        "cat": "Zahlen & Mengen",
        "front": "Dua",
        "back": "zwei",
        "example": "Ich möchte zwei Brötchen."
    },
    {
        "level": "A1",
        "cat": "Zahlen & Mengen",
        "front": "Tiga",
        "back": "drei",
        "example": "Wir sind drei Personen."
    },
    {
        "level": "A1",
        "cat": "Zahlen & Mengen",
        "front": "Empat",
        "back": "vier",
        "example": "Das Zimmer hat vier Wände."
    },
    {
        "level": "A1",
        "cat": "Zahlen & Mengen",
        "front": "Lima",
        "back": "fünf",
        "example": "Ich brauche fünf Minuten."
    },
    {
        "level": "A1",
        "cat": "Zahlen & Mengen",
        "front": "Enam",
        "back": "sechs",
        "example": "Ich stehe um sechs Uhr auf."
    },
    {
        "level": "A1",
        "cat": "Zahlen & Mengen",
        "front": "Tujuh",
        "back": "sieben",
        "example": "Die Woche hat sieben Tage."
    },
    {
        "level": "A1",
        "cat": "Zahlen & Mengen",
        "front": "Delapan",
        "back": "acht",
        "example": "Ich arbeite acht Stunden."
    },
    {
        "level": "A1",
        "cat": "Zahlen & Mengen",
        "front": "Sembilan",
        "back": "neun",
        "example": "Der Kurs beginnt um neun Uhr."
    },
    {
        "level": "A1",
        "cat": "Zahlen & Mengen",
        "front": "Sepuluh",
        "back": "zehn",
        "example": "Das kostet zehn Euro."
    },
    {
        "level": "A1",
        "cat": "Zahlen & Mengen",
        "front": "Sebelas",
        "back": "elf",
        "example": "Es ist elf Uhr."
    },
    {
        "level": "A1",
        "cat": "Zahlen & Mengen",
        "front": "Dua belas",
        "back": "zwölf",
        "example": "Das Jahr hat zwölf Monate."
    },
    {
        "level": "A1",
        "cat": "Zahlen & Mengen",
        "front": "Dua puluh",
        "back": "zwanzig",
        "example": "Ich bin zwanzig Jahre alt."
    },
    {
        "level": "A1",
        "cat": "Zahlen & Mengen",
        "front": "Tiga puluh",
        "back": "dreißig",
        "example": "Der Monat hat dreißig Tage."
    },
    {
        "level": "A1",
        "cat": "Zahlen & Mengen",
        "front": "Lima puluh",
        "back": "fünfzig",
        "example": "Das kostet fünfzig Euro."
    },
    {
        "level": "A1",
        "cat": "Zahlen & Mengen",
        "front": "Seratus",
        "back": "hundert",
        "example": "Das Buch hat hundert Seiten."
    },
    {
        "level": "A1",
        "cat": "Zahlen & Mengen",
        "front": "Seribu",
        "back": "tausend",
        "example": "Die Stadt hat tausend Einwohner."
    },
    {
        "level": "A1",
        "cat": "Zahlen & Mengen",
        "front": "Pertama",
        "back": "der Erste",
        "example": "Er ist der Erste in der Klasse."
    },
    {
        "level": "A1",
        "cat": "Zahlen & Mengen",
        "front": "Kedua",
        "back": "der Zweite",
        "example": "Der Zweite kommt später."
    },
    {
        "level": "A1",
        "cat": "Zahlen & Mengen",
        "front": "Ketiga",
        "back": "der Dritte",
        "example": "Der Dritte Platz ist auch gut."
    },
    {
        "level": "A1",
        "cat": "Zahlen & Mengen",
        "front": "Setengah",
        "back": "halb",
        "example": "Ich möchte ein halbes Kilo."
    },
    {
        "level": "A1",
        "cat": "Zahlen & Mengen",
        "front": "Seperempat",
        "back": "ein Viertel",
        "example": "Ein Viertel der Klasse ist krank."
    },
    {
        "level": "A1",
        "cat": "Zahlen & Mengen",
        "front": "Banyak",
        "back": "viel",
        "example": "Ich habe viel Arbeit."
    },
    {
        "level": "A1",
        "cat": "Zahlen & Mengen",
        "front": "Sedikit",
        "back": "wenig",
        "example": "Ich habe wenig Zeit."
    },
    {
        "level": "A1",
        "cat": "Zahlen & Mengen",
        "front": "Semua",
        "back": "alle",
        "example": "Alle sind da."
    },
    {
        "level": "A1",
        "cat": "Zahlen & Mengen",
        "front": "Beberapa",
        "back": "einige",
        "example": "Einige Leute warten draußen."
    },
    {
        "level": "A1",
        "cat": "Zahlen & Mengen",
        "front": "Cukup",
        "back": "genug",
        "example": "Das ist genug für heute."
    },
    {
        "level": "A1",
        "cat": "Zahlen & Mengen",
        "front": "Lebih",
        "back": "mehr",
        "example": "Ich möchte mehr Wasser."
    },
    {
        "level": "A1",
        "cat": "Zahlen & Mengen",
        "front": "Kurang",
        "back": "weniger",
        "example": "Ich brauche weniger Zucker."
    },
    {
        "level": "A1",
        "cat": "Farben",
        "front": "Merah",
        "back": "rot",
        "example": "Die Rose ist rot."
    },
    {
        "level": "A1",
        "cat": "Farben",
        "front": "Biru",
        "back": "blau",
        "example": "Der Himmel ist blau."
    },
    {
        "level": "A1",
        "cat": "Farben",
        "front": "Hijau",
        "back": "grün",
        "example": "Das Gras ist grün."
    },
    {
        "level": "A1",
        "cat": "Farben",
        "front": "Kuning",
        "back": "gelb",
        "example": "Die Sonne ist gelb."
    },
    {
        "level": "A1",
        "cat": "Farben",
        "front": "Hitam",
        "back": "schwarz",
        "example": "Die Katze ist schwarz."
    },
    {
        "level": "A1",
        "cat": "Farben",
        "front": "Putih",
        "back": "weiß",
        "example": "Der Schnee ist weiß."
    },
    {
        "level": "A1",
        "cat": "Farben",
        "front": "Abu-abu",
        "back": "grau",
        "example": "Der Himmel ist heute grau."
    },
    {
        "level": "A1",
        "cat": "Farben",
        "front": "Cokelat",
        "back": "braun",
        "example": "Die Schuhe sind braun."
    },
    {
        "level": "A1",
        "cat": "Farben",
        "front": "Oranye",
        "back": "orange",
        "example": "Die Orange ist orange."
    },
    {
        "level": "A1",
        "cat": "Farben",
        "front": "Ungu",
        "back": "lila",
        "example": "Das Kleid ist lila."
    },
    {
        "level": "A1",
        "cat": "Farben",
        "front": "Merah muda",
        "back": "rosa",
        "example": "Die Blume ist rosa."
    },
    {
        "level": "A1",
        "cat": "Farben",
        "front": "Biru muda",
        "back": "hellblau",
        "example": "Das Hemd ist hellblau."
    },
    {
        "level": "A1",
        "cat": "Farben",
        "front": "Biru tua",
        "back": "dunkelblau",
        "example": "Die Jacke ist dunkelblau."
    },
    {
        "level": "A1",
        "cat": "Farben",
        "front": "Emas",
        "back": "golden",
        "example": "Der Ring ist golden."
    },
    {
        "level": "A1",
        "cat": "Farben",
        "front": "Perak",
        "back": "silbern",
        "example": "Das Besteck ist silbern."
    },
    {
        "level": "A1",
        "cat": "Familie & Freunde",
        "front": "Keluarga",
        "back": "die Familie",
        "example": "Meine Familie ist groß."
    },
    {
        "level": "A1",
        "cat": "Familie & Freunde",
        "front": "Orang tua",
        "back": "die Eltern",
        "example": "Meine Eltern wohnen in Deutschland."
    },
    {
        "level": "A1",
        "cat": "Familie & Freunde",
        "front": "Ayah",
        "back": "der Vater",
        "example": "Mein Vater ist Lehrer."
    },
    {
        "level": "A1",
        "cat": "Familie & Freunde",
        "front": "Ibu",
        "back": "die Mutter",
        "example": "Meine Mutter kocht gern."
    },
    {
        "level": "A1",
        "cat": "Familie & Freunde",
        "front": "Anak laki-laki",
        "back": "der Sohn",
        "example": "Ihr Sohn geht in die Schule."
    },
    {
        "level": "A1",
        "cat": "Familie & Freunde",
        "front": "Anak perempuan",
        "back": "die Tochter",
        "example": "Unsere Tochter studiert."
    },
    {
        "level": "A1",
        "cat": "Familie & Freunde",
        "front": "Saudara laki-laki",
        "back": "der Bruder",
        "example": "Mein Bruder wohnt in Berlin."
    },
    {
        "level": "A1",
        "cat": "Familie & Freunde",
        "front": "Saudara perempuan",
        "back": "die Schwester",
        "example": "Ich habe eine Schwester."
    },
    {
        "level": "A1",
        "cat": "Familie & Freunde",
        "front": "Kakek",
        "back": "der Opa",
        "example": "Opa liest gern Zeitungen."
    },
    {
        "level": "A1",
        "cat": "Familie & Freunde",
        "front": "Nenek",
        "back": "die Oma",
        "example": "Oma backt Kuchen."
    },
    {
        "level": "A1",
        "cat": "Familie & Freunde",
        "front": "Suami",
        "back": "der Ehemann",
        "example": "Ihr Ehemann arbeitet viel."
    },
    {
        "level": "A1",
        "cat": "Familie & Freunde",
        "front": "Istri",
        "back": "die Ehefrau",
        "example": "Seine Ehefrau ist Ärztin."
    },
    {
        "level": "A1",
        "cat": "Familie & Freunde",
        "front": "Teman",
        "back": "der Freund",
        "example": "Mein Freund kommt heute."
    },
    {
        "level": "A1",
        "cat": "Familie & Freunde",
        "front": "Teman (perempuan)",
        "back": "die Freundin",
        "example": "Meine Freundin ist nett."
    },
    {
        "level": "A1",
        "cat": "Familie & Freunde",
        "front": "Bayi",
        "back": "das Baby",
        "example": "Das Baby schläft ruhig."
    },
    {
        "level": "A1",
        "cat": "Familie & Freunde",
        "front": "Anak",
        "back": "das Kind",
        "example": "Das Kind spielt draußen."
    },
    {
        "level": "A1",
        "cat": "Familie & Freunde",
        "front": "Sepupu",
        "back": "der Cousin",
        "example": "Mein Cousin wohnt in Hamburg."
    },
    {
        "level": "A1",
        "cat": "Familie & Freunde",
        "front": "Sepupu (perempuan)",
        "back": "die Cousine",
        "example": "Meine Cousine kommt zu Besuch."
    },
    {
        "level": "A1",
        "cat": "Familie & Freunde",
        "front": "Paman",
        "back": "der Onkel",
        "example": "Mein Onkel ist Arzt."
    },
    {
        "level": "A1",
        "cat": "Familie & Freunde",
        "front": "Bibi",
        "back": "die Tante",
        "example": "Meine Tante backt gern."
    },
    {
        "level": "A1",
        "cat": "Familie & Freunde",
        "front": "Keponakan laki-laki",
        "back": "der Neffe",
        "example": "Mein Neffe ist fünf Jahre alt."
    },
    {
        "level": "A1",
        "cat": "Familie & Freunde",
        "front": "Keponakan perempuan",
        "back": "die Nichte",
        "example": "Meine Nichte lernt Klavier."
    },
    {
        "level": "A1",
        "cat": "Familie & Freunde",
        "front": "Tamu",
        "back": "der Gast",
        "example": "Wir haben heute Gäste."
    },
    {
        "level": "A1",
        "cat": "Familie & Freunde",
        "front": "Tetangga",
        "back": "der Nachbar",
        "example": "Mein Nachbar ist freundlich."
    },
    {
        "level": "A1",
        "cat": "Familie & Freunde",
        "front": "Pasangan",
        "back": "der Partner",
        "example": "Sie lebt mit ihrem Partner zusammen."
    },
    {
        "level": "A1",
        "cat": "Wohnen & Haus",
        "front": "Rumah",
        "back": "das Haus",
        "example": "Das Haus ist sehr groß."
    },
    {
        "level": "A1",
        "cat": "Wohnen & Haus",
        "front": "Apartemen",
        "back": "die Wohnung",
        "example": "Die Wohnung hat drei Zimmer."
    },
    {
        "level": "A1",
        "cat": "Wohnen & Haus",
        "front": "Kamar",
        "back": "das Zimmer",
        "example": "Das Zimmer ist hell."
    },
    {
        "level": "A1",
        "cat": "Wohnen & Haus",
        "front": "Dapur",
        "back": "die Küche",
        "example": "Wir kochen in der Küche."
    },
    {
        "level": "A1",
        "cat": "Wohnen & Haus",
        "front": "Kamar mandi",
        "back": "das Bad",
        "example": "Das Bad ist sauber."
    },
    {
        "level": "A1",
        "cat": "Wohnen & Haus",
        "front": "Kamar tidur",
        "back": "das Schlafzimmer",
        "example": "Das Bett steht im Schlafzimmer."
    },
    {
        "level": "A1",
        "cat": "Wohnen & Haus",
        "front": "Ruang tamu",
        "back": "das Wohnzimmer",
        "example": "Wir sitzen im Wohnzimmer."
    },
    {
        "level": "A1",
        "cat": "Wohnen & Haus",
        "front": "Balkon",
        "back": "der Balkon",
        "example": "Der Balkon hat viele Blumen."
    },
    {
        "level": "A1",
        "cat": "Wohnen & Haus",
        "front": "Taman",
        "back": "der Garten",
        "example": "Der Garten ist grün."
    },
    {
        "level": "A1",
        "cat": "Wohnen & Haus",
        "front": "Garasi",
        "back": "die Garage",
        "example": "Das Auto steht in der Garage."
    },
    {
        "level": "A1",
        "cat": "Wohnen & Haus",
        "front": "Meja",
        "back": "der Tisch",
        "example": "Das Essen steht auf dem Tisch."
    },
    {
        "level": "A1",
        "cat": "Wohnen & Haus",
        "front": "Kursi",
        "back": "der Stuhl",
        "example": "Der Stuhl ist bequem."
    },
    {
        "level": "A1",
        "cat": "Wohnen & Haus",
        "front": "Lemari",
        "back": "der Schrank",
        "example": "Die Kleidung ist im Schrank."
    },
    {
        "level": "A1",
        "cat": "Wohnen & Haus",
        "front": "Tempat tidur",
        "back": "das Bett",
        "example": "Ich gehe ins Bett."
    },
    {
        "level": "A1",
        "cat": "Wohnen & Haus",
        "front": "Sofa",
        "back": "das Sofa",
        "example": "Das Sofa ist neu."
    },
    {
        "level": "A1",
        "cat": "Wohnen & Haus",
        "front": "Lampu",
        "back": "die Lampe",
        "example": "Die Lampe ist hell."
    },
    {
        "level": "A1",
        "cat": "Wohnen & Haus",
        "front": "Pintu",
        "back": "die Tür",
        "example": "Bitte schließen Sie die Tür."
    },
    {
        "level": "A1",
        "cat": "Wohnen & Haus",
        "front": "Jendela",
        "back": "das Fenster",
        "example": "Öffne das Fenster."
    },
    {
        "level": "A1",
        "cat": "Wohnen & Haus",
        "front": "Kunci",
        "back": "der Schlüssel",
        "example": "Wo ist mein Schlüssel?"
    },
    {
        "level": "A1",
        "cat": "Wohnen & Haus",
        "front": "Gedung",
        "back": "das Gebäude",
        "example": "Das Gebäude ist alt."
    },
    {
        "level": "A1",
        "cat": "Wohnen & Haus",
        "front": "Kulkas",
        "back": "der Kühlschrank",
        "example": "Die Milch ist im Kühlschrank."
    },
    {
        "level": "A1",
        "cat": "Wohnen & Haus",
        "front": "Kompor",
        "back": "der Herd",
        "example": "Der Herd ist an."
    },
    {
        "level": "A1",
        "cat": "Wohnen & Haus",
        "front": "Mesin cuci",
        "back": "die Waschmaschine",
        "example": "Die Waschmaschine läuft."
    },
    {
        "level": "A1",
        "cat": "Wohnen & Haus",
        "front": "Piring",
        "back": "der Teller",
        "example": "Der Teller ist leer."
    },
    {
        "level": "A1",
        "cat": "Wohnen & Haus",
        "front": "Gelas",
        "back": "das Glas",
        "example": "Ein Glas Wasser, bitte."
    },
    {
        "level": "A1",
        "cat": "Wohnen & Haus",
        "front": "Pisau",
        "back": "das Messer",
        "example": "Das Messer ist scharf."
    },
    {
        "level": "A1",
        "cat": "Wohnen & Haus",
        "front": "Garpu",
        "back": "die Gabel",
        "example": "Die Gabel liegt links."
    },
    {
        "level": "A1",
        "cat": "Wohnen & Haus",
        "front": "Sendok",
        "back": "der Löffel",
        "example": "Ich brauche einen Löffel."
    },
    {
        "level": "A1",
        "cat": "Wohnen & Haus",
        "front": "Cangkir",
        "back": "die Tasse",
        "example": "Die Tasse ist voll."
    },
    {
        "level": "A1",
        "cat": "Wohnen & Haus",
        "front": "Sapu",
        "back": "der Besen",
        "example": "Wo ist der Besen?"
    },
    {
        "level": "A1",
        "cat": "Zeit & Datum",
        "front": "Hari",
        "back": "der Tag",
        "example": "Schönen Tag noch!"
    },
    {
        "level": "A1",
        "cat": "Zeit & Datum",
        "front": "Minggu",
        "back": "die Woche",
        "example": "Nächste Woche fahre ich weg."
    },
    {
        "level": "A1",
        "cat": "Zeit & Datum",
        "front": "Bulan",
        "back": "der Monat",
        "example": "Der Monat Mai ist schön."
    },
    {
        "level": "A1",
        "cat": "Zeit & Datum",
        "front": "Tahun",
        "back": "das Jahr",
        "example": "Frohes neues Jahr!"
    },
    {
        "level": "A1",
        "cat": "Zeit & Datum",
        "front": "Jam",
        "back": "die Stunde",
        "example": "Der Kurs dauert eine Stunde."
    },
    {
        "level": "A1",
        "cat": "Zeit & Datum",
        "front": "Menit",
        "back": "die Minute",
        "example": "Warte eine Minute."
    },
    {
        "level": "A1",
        "cat": "Zeit & Datum",
        "front": "Detik",
        "back": "die Sekunde",
        "example": "Eine Sekunde bitte."
    },
    {
        "level": "A1",
        "cat": "Zeit & Datum",
        "front": "Pagi",
        "back": "der Morgen",
        "example": "Am Morgen trinke ich Kaffee."
    },
    {
        "level": "A1",
        "cat": "Zeit & Datum",
        "front": "Siang",
        "back": "der Mittag",
        "example": "Zu Mittag esse ich Brot."
    },
    {
        "level": "A1",
        "cat": "Zeit & Datum",
        "front": "Sore",
        "back": "der Nachmittag",
        "example": "Am Nachmittag lerne ich."
    },
    {
        "level": "A1",
        "cat": "Zeit & Datum",
        "front": "Malam",
        "back": "der Abend",
        "example": "Guten Abend!"
    },
    {
        "level": "A1",
        "cat": "Zeit & Datum",
        "front": "Malam (gelap)",
        "back": "die Nacht",
        "example": "In der Nacht ist es ruhig."
    },
    {
        "level": "A1",
        "cat": "Zeit & Datum",
        "front": "Senin",
        "back": "der Montag",
        "example": "Am Montag beginnt die Schule."
    },
    {
        "level": "A1",
        "cat": "Zeit & Datum",
        "front": "Selasa",
        "back": "der Dienstag",
        "example": "Dienstag habe ich Zeit."
    },
    {
        "level": "A1",
        "cat": "Zeit & Datum",
        "front": "Rabu",
        "back": "der Mittwoch",
        "example": "Mittwoch ist die Mitte der Woche."
    },
    {
        "level": "A1",
        "cat": "Zeit & Datum",
        "front": "Kamis",
        "back": "der Donnerstag",
        "example": "Donnerstag gehe ich zum Sport."
    },
    {
        "level": "A1",
        "cat": "Zeit & Datum",
        "front": "Jumat",
        "back": "der Freitag",
        "example": "Am Freitag haben wir frei."
    },
    {
        "level": "A1",
        "cat": "Zeit & Datum",
        "front": "Sabtu",
        "back": "der Samstag",
        "example": "Samstag kaufe ich ein."
    },
    {
        "level": "A1",
        "cat": "Zeit & Datum",
        "front": "Minggu (hari)",
        "back": "der Sonntag",
        "example": "Sonntag ruhe ich mich aus."
    },
    {
        "level": "A1",
        "cat": "Zeit & Datum",
        "front": "Hari ini",
        "back": "heute",
        "example": "Heute ist das Wetter schön."
    },
    {
        "level": "A1",
        "cat": "Zeit & Datum",
        "front": "Besok",
        "back": "morgen",
        "example": "Morgen fahre ich nach Berlin."
    },
    {
        "level": "A1",
        "cat": "Zeit & Datum",
        "front": "Kemarin",
        "back": "gestern",
        "example": "Gestern war ich zu Hause."
    },
    {
        "level": "A1",
        "cat": "Zeit & Datum",
        "front": "Sekarang",
        "back": "jetzt",
        "example": "Jetzt müssen wir gehen."
    },
    {
        "level": "A1",
        "cat": "Zeit & Datum",
        "front": "Musim panas",
        "back": "der Sommer",
        "example": "Im Sommer ist es warm."
    },
    {
        "level": "A1",
        "cat": "Zeit & Datum",
        "front": "Musim dingin",
        "back": "der Winter",
        "example": "Im Winter schneit es oft."
    },
    {
        "level": "A1",
        "cat": "Zeit & Datum",
        "front": "Musim semi",
        "back": "der Frühling",
        "example": "Im Frühling blühen Blumen."
    },
    {
        "level": "A1",
        "cat": "Zeit & Datum",
        "front": "Musim gugur",
        "back": "der Herbst",
        "example": "Im Herbst fallen die Blätter."
    },
    {
        "level": "A1",
        "cat": "Gesundheit & Körper",
        "front": "Kepala",
        "back": "der Kopf",
        "example": "Mein Kopf tut weh."
    },
    {
        "level": "A1",
        "cat": "Gesundheit & Körper",
        "front": "Mata",
        "back": "das Auge",
        "example": "Meine Augen sind braun."
    },
    {
        "level": "A1",
        "cat": "Gesundheit & Körper",
        "front": "Telinga",
        "back": "das Ohr",
        "example": "Das Ohr tut weh."
    },
    {
        "level": "A1",
        "cat": "Gesundheit & Körper",
        "front": "Hidung",
        "back": "die Nase",
        "example": "Die Nase ist rot."
    },
    {
        "level": "A1",
        "cat": "Gesundheit & Körper",
        "front": "Mulut",
        "back": "der Mund",
        "example": "Öffne den Mund."
    },
    {
        "level": "A1",
        "cat": "Gesundheit & Körper",
        "front": "Tangan",
        "back": "die Hand",
        "example": "Wasche deine Hände."
    },
    {
        "level": "A1",
        "cat": "Gesundheit & Körper",
        "front": "Kaki",
        "back": "der Fuß",
        "example": "Mein Fuß schmerzt."
    },
    {
        "level": "A1",
        "cat": "Gesundheit & Körper",
        "front": "Perut",
        "back": "der Bauch",
        "example": "Ich habe Bauchschmerzen."
    },
    {
        "level": "A1",
        "cat": "Gesundheit & Körper",
        "front": "Punggung",
        "back": "der Rücken",
        "example": "Der Rücken tut weh."
    },
    {
        "level": "A1",
        "cat": "Gesundheit & Körper",
        "front": "Rambut",
        "back": "das Haar",
        "example": "Ihr Haar ist lang."
    },
    {
        "level": "A1",
        "cat": "Gesundheit & Körper",
        "front": "Leher",
        "back": "der Hals",
        "example": "Mein Hals tut weh."
    },
    {
        "level": "A1",
        "cat": "Gesundheit & Körper",
        "front": "Gigi",
        "back": "der Zahn",
        "example": "Der Zahn ist weiß."
    },
    {
        "level": "A1",
        "cat": "Gesundheit & Körper",
        "front": "Jari",
        "back": "der Finger",
        "example": "Der Finger blutet."
    },
    {
        "level": "A1",
        "cat": "Gesundheit & Körper",
        "front": "Lutut",
        "back": "das Knie",
        "example": "Mein Knie ist verletzt."
    },
    {
        "level": "A1",
        "cat": "Gesundheit & Körper",
        "front": "Jantung",
        "back": "das Herz",
        "example": "Das Herz schlägt schnell."
    },
    {
        "level": "A1",
        "cat": "Gesundheit & Körper",
        "front": "Dokter",
        "back": "der Arzt",
        "example": "Der Arzt hilft dem Patienten."
    },
    {
        "level": "A1",
        "cat": "Gesundheit & Körper",
        "front": "Rumah sakit",
        "back": "das Krankenhaus",
        "example": "Er ist im Krankenhaus."
    },
    {
        "level": "A1",
        "cat": "Gesundheit & Körper",
        "front": "Sakit",
        "back": "krank",
        "example": "Er ist heute krank."
    },
    {
        "level": "A1",
        "cat": "Gesundheit & Körper",
        "front": "Sehat",
        "back": "gesund",
        "example": "Obst macht gesund."
    },
    {
        "level": "A1",
        "cat": "Reisen & Verkehr",
        "front": "Stasiun",
        "back": "der Bahnhof",
        "example": "Der Zug steht am Bahnhof."
    },
    {
        "level": "A1",
        "cat": "Reisen & Verkehr",
        "front": "Bandara",
        "back": "der Flughafen",
        "example": "Wir fahren zum Flughafen."
    },
    {
        "level": "A1",
        "cat": "Reisen & Verkehr",
        "front": "Bus",
        "back": "der Bus",
        "example": "Der Bus kommt pünktlich."
    },
    {
        "level": "A1",
        "cat": "Reisen & Verkehr",
        "front": "Kereta",
        "back": "der Zug",
        "example": "Der Zug fährt nach Hamburg."
    },
    {
        "level": "A1",
        "cat": "Reisen & Verkehr",
        "front": "Mobil",
        "back": "das Auto",
        "example": "Das Auto ist neu."
    },
    {
        "level": "A1",
        "cat": "Reisen & Verkehr",
        "front": "Sepeda",
        "back": "das Fahrrad",
        "example": "Ich fahre mit dem Fahrrad."
    },
    {
        "level": "A1",
        "cat": "Reisen & Verkehr",
        "front": "Jalan",
        "back": "die Straße",
        "example": "Die Straße ist breit."
    },
    {
        "level": "A1",
        "cat": "Reisen & Verkehr",
        "front": "Kota",
        "back": "die Stadt",
        "example": "Die Stadt ist sehr belebt."
    },
    {
        "level": "A1",
        "cat": "Reisen & Verkehr",
        "front": "Negara",
        "back": "das Land",
        "example": "Deutschland ist ein schönes Land."
    },
    {
        "level": "A1",
        "cat": "Reisen & Verkehr",
        "front": "Motor",
        "back": "das Motorrad",
        "example": "Er fährt Motorrad."
    },
    {
        "level": "A1",
        "cat": "Reisen & Verkehr",
        "front": "Pesawat",
        "back": "das Flugzeug",
        "example": "Das Flugzeug landet."
    },
    {
        "level": "A1",
        "cat": "Reisen & Verkehr",
        "front": "Kapal",
        "back": "das Schiff",
        "example": "Das Schiff fährt über das Meer."
    },
    {
        "level": "A1",
        "cat": "Reisen & Verkehr",
        "front": "Taksi",
        "back": "das Taxi",
        "example": "Wir nehmen ein Taxi."
    },
    {
        "level": "A1",
        "cat": "Reisen & Verkehr",
        "front": "Halte bus",
        "back": "die Bushaltestelle",
        "example": "Die Bushaltestelle ist dort."
    },
    {
        "level": "A1",
        "cat": "Reisen & Verkehr",
        "front": "Tiket",
        "back": "die Fahrkarte",
        "example": "Ich kaufe eine Fahrkarte."
    },
    {
        "level": "A1",
        "cat": "Reisen & Verkehr",
        "front": "Peta",
        "back": "die Karte",
        "example": "Hast du eine Karte?"
    },
    {
        "level": "A1",
        "cat": "Reisen & Verkehr",
        "front": "Jembatan",
        "back": "die Brücke",
        "example": "Die Brücke ist alt."
    },
    {
        "level": "A1",
        "cat": "Reisen & Verkehr",
        "front": "Taman kota",
        "back": "der Park",
        "example": "Wir gehen in den Park."
    },
    {
        "level": "A1",
        "cat": "Reisen & Verkehr",
        "front": "Toko",
        "back": "das Geschäft",
        "example": "Das Geschäft öffnet um 9 Uhr."
    },
    {
        "level": "A1",
        "cat": "Reisen & Verkehr",
        "front": "Restoran",
        "back": "das Restaurant",
        "example": "Das Restaurant ist voll."
    },
    {
        "level": "A1",
        "cat": "Essen & Trinken",
        "front": "Sarapan pagi",
        "back": "das Frühstück",
        "example": "Zum Frühstück esse ich Brot."
    },
    {
        "level": "A1",
        "cat": "Essen & Trinken",
        "front": "Makan siang",
        "back": "das Mittagessen",
        "example": "Um 12 Uhr machen wir Mittagessen."
    },
    {
        "level": "A1",
        "cat": "Essen & Trinken",
        "front": "Makan malam",
        "back": "das Abendessen",
        "example": "Das Abendessen ist um 19 Uhr."
    },
    {
        "level": "A1",
        "cat": "Essen & Trinken",
        "front": "Air mineral",
        "back": "das Mineralwasser",
        "example": "Ich hätte gerne eine Flasche Mineralwasser."
    },
    {
        "level": "A1",
        "cat": "Essen & Trinken",
        "front": "Kopi dengan susu",
        "back": "der Milchkaffee",
        "example": "Trinkst du Milchkaffee?"
    },
    {
        "level": "A1",
        "cat": "Essen & Trinken",
        "front": "Kopi",
        "back": "der Kaffee",
        "example": "Ich trinke Kaffee am Morgen."
    },
    {
        "level": "A1",
        "cat": "Essen & Trinken",
        "front": "Teh",
        "back": "der Tee",
        "example": "Ich trinke gern Tee."
    },
    {
        "level": "A1",
        "cat": "Essen & Trinken",
        "front": "Susu",
        "back": "die Milch",
        "example": "Die Milch ist im Kühlschrank."
    },
    {
        "level": "A1",
        "cat": "Essen & Trinken",
        "front": "Roti",
        "back": "das Brot",
        "example": "Ich esse Brot zum Frühstück."
    },
    {
        "level": "A1",
        "cat": "Essen & Trinken",
        "front": "Keju",
        "back": "der Käse",
        "example": "Der Käse schmeckt gut."
    },
    {
        "level": "A1",
        "cat": "Essen & Trinken",
        "front": "Telur",
        "back": "das Ei",
        "example": "Ich möchte ein Ei."
    },
    {
        "level": "A1",
        "cat": "Essen & Trinken",
        "front": "Nasi",
        "back": "der Reis",
        "example": "Reis ist ein Grundnahrungsmittel."
    },
    {
        "level": "A1",
        "cat": "Essen & Trinken",
        "front": "Ayam",
        "back": "das Hähnchen",
        "example": "Das Hähnchen ist lecker."
    },
    {
        "level": "A1",
        "cat": "Essen & Trinken",
        "front": "Ikan",
        "back": "der Fisch",
        "example": "Freitags essen wir Fisch."
    },
    {
        "level": "A1",
        "cat": "Essen & Trinken",
        "front": "Daging",
        "back": "das Fleisch",
        "example": "Das Fleisch ist frisch."
    },
    {
        "level": "A1",
        "cat": "Essen & Trinken",
        "front": "Sup",
        "back": "die Suppe",
        "example": "Die Suppe ist heiß."
    },
    {
        "level": "A1",
        "cat": "Essen & Trinken",
        "front": "Kue",
        "back": "der Kuchen",
        "example": "Möchtest du ein Stück Kuchen?"
    },
    {
        "level": "A1",
        "cat": "Essen & Trinken",
        "front": "Jus",
        "back": "der Saft",
        "example": "Ein Glas Orangensaft, bitte."
    },
    {
        "level": "A1",
        "cat": "Essen & Trinken",
        "front": "Buah",
        "back": "das Obst",
        "example": "Obst ist gesund."
    },
    {
        "level": "A1",
        "cat": "Essen & Trinken",
        "front": "Sayur",
        "back": "das Gemüse",
        "example": "Ich kaufe frisches Gemüse."
    },
    {
        "level": "A1",
        "cat": "Essen & Trinken",
        "front": "Apel",
        "back": "der Apfel",
        "example": "Der Apfel ist rot."
    },
    {
        "level": "A1",
        "cat": "Essen & Trinken",
        "front": "Pisang",
        "back": "die Banane",
        "example": "Die Banane ist gelb."
    },
    {
        "level": "A1",
        "cat": "Essen & Trinken",
        "front": "Jeruk",
        "back": "die Orange",
        "example": "Die Orange ist süß."
    },
    {
        "level": "A1",
        "cat": "Essen & Trinken",
        "front": "Anggur",
        "back": "die Traube",
        "example": "Die Trauben sind reif."
    },
    {
        "level": "A1",
        "cat": "Essen & Trinken",
        "front": "Tomat",
        "back": "die Tomate",
        "example": "Die Tomate ist frisch."
    },
    {
        "level": "A1",
        "cat": "Essen & Trinken",
        "front": "Kentang",
        "back": "die Kartoffel",
        "example": "Die Kartoffel ist gekocht."
    },
    {
        "level": "A1",
        "cat": "Essen & Trinken",
        "front": "Bawang",
        "back": "die Zwiebel",
        "example": "Die Zwiebel riecht stark."
    },
    {
        "level": "A1",
        "cat": "Essen & Trinken",
        "front": "Garam",
        "back": "das Salz",
        "example": "Gib mir bitte das Salz."
    },
    {
        "level": "A1",
        "cat": "Essen & Trinken",
        "front": "Gula",
        "back": "der Zucker",
        "example": "Ich nehme Zucker im Kaffee."
    },
    {
        "level": "A1",
        "cat": "Essen & Trinken",
        "front": "Rasa lapar",
        "back": "der Hunger",
        "example": "Ich habe großen Hunger."
    },
    {
        "level": "A1",
        "cat": "Essen & Trinken",
        "front": "Rasa haus",
        "back": "der Durst",
        "example": "Bei diesem Wetter habe ich viel Durst."
    },
    {
        "level": "A1",
        "cat": "Essen & Trinken",
        "front": "Buku menu",
        "back": "die Speisekarte",
        "example": "Bringen Sie uns die Speisekarte."
    },
    {
        "level": "A1",
        "cat": "Einkaufen",
        "front": "Berapa harganya?",
        "back": "Was kostet das?",
        "example": "Entschuldigung, was kostet das Buch?"
    },
    {
        "level": "A1",
        "cat": "Einkaufen",
        "front": "Uang kembalian",
        "back": "das Rückgeld",
        "example": "Hier ist Ihr Rückgeld."
    },
    {
        "level": "A1",
        "cat": "Einkaufen",
        "front": "Struk belanja",
        "back": "der Kassenbon",
        "example": "Brauchen Sie einen Kassenbon?"
    },
    {
        "level": "A1",
        "cat": "Einkaufen",
        "front": "Keranjang belanja",
        "back": "der Einkaufswagen",
        "example": "Hol bitte einen Einkaufswagen."
    },
    {
        "level": "A1",
        "cat": "Einkaufen",
        "front": "Murah",
        "back": "günstig",
        "example": "Dieses T-Shirt ist sehr günstig."
    },
    {
        "level": "A1",
        "cat": "Einkaufen",
        "front": "Mahal",
        "back": "teuer",
        "example": "Das Auto ist mir zu teuer."
    },
    {
        "level": "A1",
        "cat": "Einkaufen",
        "front": "Membayar dengan kartu",
        "back": "mit Karte bezahlen",
        "example": "Kann man hier mit Karte bezahlen?"
    },
    {
        "level": "A1",
        "cat": "Einkaufen",
        "front": "Uang tunai",
        "back": "das Bargeld",
        "example": "Ich habe kein Bargeld dabei."
    },
    {
        "level": "A1",
        "cat": "Einkaufen",
        "front": "Diskon",
        "back": "das Angebot",
        "example": "Äpfel sind diese Woche im Angebot."
    },
    {
        "level": "A1",
        "cat": "Einkaufen",
        "front": "Supermarket",
        "back": "der Supermarkt",
        "example": "Ich gehe in den Supermarkt."
    },
    {
        "level": "A1",
        "cat": "Einkaufen",
        "front": "Pasar",
        "back": "der Markt",
        "example": "Auf dem Markt kaufe ich Obst."
    },
    {
        "level": "A1",
        "cat": "Einkaufen",
        "front": "Kasir",
        "back": "die Kasse",
        "example": "Bitte zahlen Sie an der Kasse."
    },
    {
        "level": "A1",
        "cat": "Einkaufen",
        "front": "Plastik",
        "back": "die Tüte",
        "example": "Möchten Sie eine Tüte?"
    },
    {
        "level": "A1",
        "cat": "Einkaufen",
        "front": "Buka",
        "back": "öffnen",
        "example": "Der Laden ist bis 20 Uhr geöffnet."
    },
    {
        "level": "A1",
        "cat": "Einkaufen",
        "front": "Tutup",
        "back": "schließen",
        "example": "Der Laden schließt um 20 Uhr."
    },
    {
        "level": "A1",
        "cat": "Einkaufen",
        "front": "Antrean",
        "back": "die Warteschlange",
        "example": "Die Warteschlange ist lang."
    },
    {
        "level": "A1",
        "cat": "Kleidung",
        "front": "Baju",
        "back": "das Hemd",
        "example": "Das Hemd ist weiß."
    },
    {
        "level": "A1",
        "cat": "Kleidung",
        "front": "Kaus",
        "back": "das T-Shirt",
        "example": "Ich trage ein blaues T-Shirt."
    },
    {
        "level": "A1",
        "cat": "Kleidung",
        "front": "Celana",
        "back": "die Hose",
        "example": "Die Hose ist zu lang."
    },
    {
        "level": "A1",
        "cat": "Kleidung",
        "front": "Rok",
        "back": "der Rock",
        "example": "Der Rock ist schön."
    },
    {
        "level": "A1",
        "cat": "Kleidung",
        "front": "Jaket",
        "back": "die Jacke",
        "example": "Nimm eine Jacke mit, es ist kalt."
    },
    {
        "level": "A1",
        "cat": "Kleidung",
        "front": "Sepatu",
        "back": "der Schuh",
        "example": "Die Schuhe sind neu."
    },
    {
        "level": "A1",
        "cat": "Kleidung",
        "front": "Kaos kaki",
        "back": "die Socke",
        "example": "Wo sind meine Socken?"
    },
    {
        "level": "A1",
        "cat": "Kleidung",
        "front": "Topi",
        "back": "der Hut",
        "example": "Er trägt einen Hut."
    },
    {
        "level": "A1",
        "cat": "Kleidung",
        "front": "Syal",
        "back": "der Schal",
        "example": "Der Schal ist warm."
    },
    {
        "level": "A1",
        "cat": "Kleidung",
        "front": "Sarung tangan",
        "back": "der Handschuh",
        "example": "Im Winter brauche ich Handschuhe."
    },
    {
        "level": "A1",
        "cat": "Kleidung",
        "front": "Gaun",
        "back": "das Kleid",
        "example": "Das Kleid ist elegant."
    },
    {
        "level": "A1",
        "cat": "Kleidung",
        "front": "Dasi",
        "back": "die Krawatte",
        "example": "Die Krawatte ist blau."
    },
    {
        "level": "A1",
        "cat": "Kleidung",
        "front": "Sabuk",
        "back": "der Gürtel",
        "example": "Der Gürtel ist aus Leder."
    },
    {
        "level": "A1",
        "cat": "Kleidung",
        "front": "Dompet",
        "back": "die Geldbörse",
        "example": "Meine Geldbörse ist weg."
    },
    {
        "level": "A1",
        "cat": "Kleidung",
        "front": "Tas",
        "back": "die Tasche",
        "example": "Die Tasche ist schwer."
    },
    {
        "level": "A1",
        "cat": "Wetter & Jahreszeiten",
        "front": "Cuaca",
        "back": "das Wetter",
        "example": "Das Wetter ist heute schön."
    },
    {
        "level": "A1",
        "cat": "Wetter & Jahreszeiten",
        "front": "Matahari",
        "back": "die Sonne",
        "example": "Die Sonne scheint heute."
    },
    {
        "level": "A1",
        "cat": "Wetter & Jahreszeiten",
        "front": "Hujan",
        "back": "der Regen",
        "example": "Der Regen hört gleich auf."
    },
    {
        "level": "A1",
        "cat": "Wetter & Jahreszeiten",
        "front": "Salju",
        "back": "der Schnee",
        "example": "Im Winter fällt Schnee."
    },
    {
        "level": "A1",
        "cat": "Wetter & Jahreszeiten",
        "front": "Angin",
        "back": "der Wind",
        "example": "Der Wind bläst stark."
    },
    {
        "level": "A1",
        "cat": "Wetter & Jahreszeiten",
        "front": "Awan",
        "back": "die Wolke",
        "example": "Am Himmel ist keine Wolke."
    },
    {
        "level": "A1",
        "cat": "Wetter & Jahreszeiten",
        "front": "Badai",
        "back": "der Sturm",
        "example": "Ein Sturm kommt auf."
    },
    {
        "level": "A1",
        "cat": "Wetter & Jahreszeiten",
        "front": "Petir",
        "back": "der Blitz",
        "example": "Der Blitz war hell."
    },
    {
        "level": "A1",
        "cat": "Wetter & Jahreszeiten",
        "front": "Guntur",
        "back": "der Donner",
        "example": "Der Donner war laut."
    },
    {
        "level": "A1",
        "cat": "Wetter & Jahreszeiten",
        "front": "Berkabut",
        "back": "neblig",
        "example": "Am Morgen ist es neblig."
    },
    {
        "level": "A1",
        "cat": "Wetter & Jahreszeiten",
        "front": "Berawan",
        "back": "bewölkt",
        "example": "Heute ist es bewölkt."
    },
    {
        "level": "A1",
        "cat": "Wetter & Jahreszeiten",
        "front": "Cerah",
        "back": "sonnig",
        "example": "Morgen wird es sonnig."
    },
    {
        "level": "A1",
        "cat": "Wetter & Jahreszeiten",
        "front": "Hujan deras",
        "back": "der Regenschauer",
        "example": "Ein Regenschauer kommt."
    },
    {
        "level": "A1",
        "cat": "Wetter & Jahreszeiten",
        "front": "Suhu",
        "back": "die Temperatur",
        "example": "Die Temperatur sinkt."
    },
    {
        "level": "A1",
        "cat": "Wetter & Jahreszeiten",
        "front": "Derajat",
        "back": "das Grad",
        "example": "Es sind 20 Grad."
    },
    {
        "level": "A1",
        "cat": "Wetter & Jahreszeiten",
        "front": "Panas",
        "back": "heiß",
        "example": "Der Kaffee ist heiß."
    },
    {
        "level": "A1",
        "cat": "Wetter & Jahreszeiten",
        "front": "Dingin",
        "back": "kalt",
        "example": "Im Winter ist es kalt."
    },
    {
        "level": "A1",
        "cat": "Wetter & Jahreszeiten",
        "front": "Hangat",
        "back": "warm",
        "example": "Das Wasser ist warm."
    },
    {
        "level": "A1",
        "cat": "Wetter & Jahreszeiten",
        "front": "Bintang",
        "back": "der Stern",
        "example": "Die Sterne leuchten hell."
    },
    {
        "level": "A1",
        "cat": "Wetter & Jahreszeiten",
        "front": "Bulan (langit)",
        "back": "der Mond",
        "example": "Der Mond scheint hell."
    },
    {
        "level": "A1",
        "cat": "Adjektive & Adverbien",
        "front": "Besar",
        "back": "groß",
        "example": "Das Haus ist sehr groß."
    },
    {
        "level": "A1",
        "cat": "Adjektive & Adverbien",
        "front": "Kecil",
        "back": "klein",
        "example": "Die Katze ist klein."
    },
    {
        "level": "A1",
        "cat": "Adjektive & Adverbien",
        "front": "Bagus / Baik",
        "back": "gut",
        "example": "Das Essen ist gut."
    },
    {
        "level": "A1",
        "cat": "Adjektive & Adverbien",
        "front": "Buruk / Jelek",
        "back": "schlecht",
        "example": "Das Wetter ist schlecht."
    },
    {
        "level": "A1",
        "cat": "Adjektive & Adverbien",
        "front": "Baru",
        "back": "neu",
        "example": "Das Auto ist neu."
    },
    {
        "level": "A1",
        "cat": "Adjektive & Adverbien",
        "front": "Tua / Lama",
        "back": "alt",
        "example": "Das Buch ist sehr alt."
    },
    {
        "level": "A1",
        "cat": "Adjektive & Adverbien",
        "front": "Cepat",
        "back": "schnell",
        "example": "Er fährt sehr schnell."
    },
    {
        "level": "A1",
        "cat": "Adjektive & Adverbien",
        "front": "Lambat",
        "back": "langsam",
        "example": "Sprechen Sie bitte langsam."
    },
    {
        "level": "A1",
        "cat": "Adjektive & Adverbien",
        "front": "Mudah",
        "back": "einfach",
        "example": "Deutsch lernen ist einfach."
    },
    {
        "level": "A1",
        "cat": "Adjektive & Adverbien",
        "front": "Sulit",
        "back": "schwer",
        "example": "Die Aufgabe ist schwer."
    },
    {
        "level": "A1",
        "cat": "Adjektive & Adverbien",
        "front": "Tinggi",
        "back": "hoch",
        "example": "Der Berg ist sehr hoch."
    },
    {
        "level": "A1",
        "cat": "Adjektive & Adverbien",
        "front": "Rendah",
        "back": "niedrig",
        "example": "Der Tisch ist niedrig."
    },
    {
        "level": "A1",
        "cat": "Adjektive & Adverbien",
        "front": "Panjang",
        "back": "lang",
        "example": "Der Weg ist lang."
    },
    {
        "level": "A1",
        "cat": "Adjektive & Adverbien",
        "front": "Pendek",
        "back": "kurz",
        "example": "Der Text ist kurz."
    },
    {
        "level": "A1",
        "cat": "Adjektive & Adverbien",
        "front": "Terang",
        "back": "hell",
        "example": "Das Zimmer ist sehr hell."
    },
    {
        "level": "A1",
        "cat": "Adjektive & Adverbien",
        "front": "Gelap",
        "back": "dunkel",
        "example": "Es wird draußen dunkel."
    },
    {
        "level": "A1",
        "cat": "Adjektive & Adverbien",
        "front": "Bersih",
        "back": "sauber",
        "example": "Das Bad ist sauber."
    },
    {
        "level": "A1",
        "cat": "Adjektive & Adverbien",
        "front": "Kotor",
        "back": "schmutzig",
        "example": "Die Schuhe sind schmutzig."
    },
    {
        "level": "A1",
        "cat": "Adjektive & Adverbien",
        "front": "Ramah",
        "back": "freundlich",
        "example": "Die Lehrerin ist freundlich."
    },
    {
        "level": "A1",
        "cat": "Adjektive & Adverbien",
        "front": "Tenang",
        "back": "ruhig",
        "example": "Die Straße ist ruhig."
    },
    {
        "level": "A1",
        "cat": "Adjektive & Adverbien",
        "front": "Sibuk",
        "back": "beschäftigt",
        "example": "Ich bin heute sehr beschäftigt."
    },
    {
        "level": "A1",
        "cat": "Adjektive & Adverbien",
        "front": "Lelah",
        "back": "müde",
        "example": "Ich bin sehr müde."
    },
    {
        "level": "A1",
        "cat": "Adjektive & Adverbien",
        "front": "Senang",
        "back": "glücklich",
        "example": "Sie ist sehr glücklich."
    },
    {
        "level": "A1",
        "cat": "Adjektive & Adverbien",
        "front": "Sedih",
        "back": "traurig",
        "example": "Er ist heute traurig."
    },
    {
        "level": "A1",
        "cat": "Adjektive & Adverbien",
        "front": "Marah",
        "back": "wütend",
        "example": "Sie ist wütend auf ihn."
    },
    {
        "level": "A1",
        "cat": "Adjektive & Adverbien",
        "front": "Takut",
        "back": "ängstlich",
        "example": "Das Kind ist ängstlich."
    },
    {
        "level": "A1",
        "cat": "Adjektive & Adverbien",
        "front": "Kaya",
        "back": "reich",
        "example": "Er ist sehr reich."
    },
    {
        "level": "A1",
        "cat": "Adjektive & Adverbien",
        "front": "Miskin",
        "back": "arm",
        "example": "Die Familie ist arm."
    },
    {
        "level": "A1",
        "cat": "Adjektive & Adverbien",
        "front": "Kuat",
        "back": "stark",
        "example": "Er ist stark."
    },
    {
        "level": "A1",
        "cat": "Adjektive & Adverbien",
        "front": "Lemah",
        "back": "schwach",
        "example": "Sie ist schwach."
    },
    {
        "level": "A1",
        "cat": "Verben",
        "front": "Pergi",
        "back": "gehen",
        "example": "Ich gehe nach Hause."
    },
    {
        "level": "A1",
        "cat": "Verben",
        "front": "Datang",
        "back": "kommen",
        "example": "Er kommt aus Spanien."
    },
    {
        "level": "A1",
        "cat": "Verben",
        "front": "Melihat",
        "back": "sehen",
        "example": "Ich sehe einen Vogel."
    },
    {
        "level": "A1",
        "cat": "Verben",
        "front": "Mendengar",
        "back": "hören",
        "example": "Wir hören Musik."
    },
    {
        "level": "A1",
        "cat": "Verben",
        "front": "Membaca",
        "back": "lesen",
        "example": "Sie liest ein Buch."
    },
    {
        "level": "A1",
        "cat": "Verben",
        "front": "Menulis",
        "back": "schreiben",
        "example": "Er schreibt einen Brief."
    },
    {
        "level": "A1",
        "cat": "Verben",
        "front": "Berbicara",
        "back": "sprechen",
        "example": "Sprechen Sie Deutsch?"
    },
    {
        "level": "A1",
        "cat": "Verben",
        "front": "Tidur",
        "back": "schlafen",
        "example": "Das Baby schläft."
    },
    {
        "level": "A1",
        "cat": "Verben",
        "front": "Makan",
        "back": "essen",
        "example": "Wir essen Pizza."
    },
    {
        "level": "A1",
        "cat": "Verben",
        "front": "Minum",
        "back": "trinken",
        "example": "Er trinkt Wasser."
    },
    {
        "level": "A1",
        "cat": "Verben",
        "front": "Bekerja",
        "back": "arbeiten",
        "example": "Sie arbeitet bei Siemens."
    },
    {
        "level": "A1",
        "cat": "Verben",
        "front": "Belajar",
        "back": "lernen",
        "example": "Ich lerne Deutsch."
    },
    {
        "level": "A1",
        "cat": "Verben",
        "front": "Bermain",
        "back": "spielen",
        "example": "Die Kinder spielen Fußball."
    },
    {
        "level": "A1",
        "cat": "Verben",
        "front": "Membuat",
        "back": "machen",
        "example": "Was machst du heute?"
    },
    {
        "level": "A1",
        "cat": "Verben",
        "front": "Memiliki",
        "back": "haben",
        "example": "Ich habe eine Frage."
    },
    {
        "level": "A1",
        "cat": "Verben",
        "front": "Menjadi / Adalah",
        "back": "sein",
        "example": "Er ist mein Bruder."
    },
    {
        "level": "A1",
        "cat": "Verben",
        "front": "Dapat / Bisa",
        "back": "können",
        "example": "Kannst du mir helfen?"
    },
    {
        "level": "A1",
        "cat": "Verben",
        "front": "Harus",
        "back": "müssen",
        "example": "Ich muss jetzt gehen."
    },
    {
        "level": "A1",
        "cat": "Verben",
        "front": "Ingin",
        "back": "wollen",
        "example": "Wir wollen reisen."
    },
    {
        "level": "A1",
        "cat": "Verben",
        "front": "Boleh",
        "back": "dürfen",
        "example": "Darf ich hier sitzen?"
    },
    {
        "level": "A1",
        "cat": "Verben",
        "front": "Menyukai",
        "back": "mögen",
        "example": "Ich mag Schokolade."
    },
    {
        "level": "A1",
        "cat": "Verben",
        "front": "Seharusnya",
        "back": "sollen",
        "example": "Du sollst zum Arzt gehen."
    },
    {
        "level": "A1",
        "cat": "Verben",
        "front": "Mengenal",
        "back": "kennen",
        "example": "Ich kenne ihn gut."
    },
    {
        "level": "A1",
        "cat": "Verben",
        "front": "Mengetahui",
        "back": "wissen",
        "example": "Ich weiß das nicht."
    },
    {
        "level": "A1",
        "cat": "Verben",
        "front": "Membawa",
        "back": "bringen",
        "example": "Bringen Sie mir bitte Wasser."
    },
    {
        "level": "A1",
        "cat": "Verben",
        "front": "Mengambil",
        "back": "nehmen",
        "example": "Ich nehme ein Stück Kuchen."
    },
    {
        "level": "A1",
        "cat": "Verben",
        "front": "Duduk",
        "back": "sitzen",
        "example": "Er sitzt auf dem Stuhl."
    },
    {
        "level": "A1",
        "cat": "Verben",
        "front": "Berdiri",
        "back": "stehen",
        "example": "Das Auto steht draußen."
    },
    {
        "level": "A1",
        "cat": "Verben",
        "front": "Berbaring",
        "back": "liegen",
        "example": "Das Buch liegt auf dem Tisch."
    },
    {
        "level": "A1",
        "cat": "Verben",
        "front": "Menggantung",
        "back": "hängen",
        "example": "Das Bild hängt an der Wand."
    },
    {
        "level": "A1",
        "cat": "Verben",
        "front": "Membuka",
        "back": "öffnen",
        "example": "Öffnen Sie bitte das Fenster."
    },
    {
        "level": "A1",
        "cat": "Verben",
        "front": "Menutup",
        "back": "schließen",
        "example": "Schließen Sie bitte die Tür."
    },
    {
        "level": "A1",
        "cat": "Verben",
        "front": "Membantu",
        "back": "helfen",
        "example": "Können Sie mir helfen?"
    },
    {
        "level": "A1",
        "cat": "Verben",
        "front": "Bertemu",
        "back": "treffen",
        "example": "Wir treffen uns um 18 Uhr."
    },
    {
        "level": "A1",
        "cat": "Verben",
        "front": "Menunggu",
        "back": "warten",
        "example": "Ich warte auf den Bus."
    },
    {
        "level": "A1",
        "cat": "Verben",
        "front": "Mencari",
        "back": "suchen",
        "example": "Ich suche meinen Schlüssel."
    },
    {
        "level": "A1",
        "cat": "Verben",
        "front": "Menemukan",
        "back": "finden",
        "example": "Ich finde das Buch nicht."
    },
    {
        "level": "A1",
        "cat": "Verben",
        "front": "Membayar",
        "back": "bezahlen",
        "example": "Wo kann ich bezahlen?"
    },
    {
        "level": "A1",
        "cat": "Verben",
        "front": "Memesan",
        "back": "bestellen",
        "example": "Wir bestellen das Essen."
    },
    {
        "level": "A1",
        "cat": "Verben",
        "front": "Memahami",
        "back": "verstehen",
        "example": "Ich verstehe die Frage."
    },
    {
        "level": "A1",
        "cat": "Verben",
        "front": "Memulai",
        "back": "beginnen",
        "example": "Der Kurs beginnt um 9 Uhr."
    },
    {
        "level": "A1",
        "cat": "Verben",
        "front": "Bertanya",
        "back": "fragen",
        "example": "Darf ich etwas fragen?"
    },
    {
        "level": "A1",
        "cat": "Verben",
        "front": "Menjawab",
        "back": "antworten",
        "example": "Er antwortet auf die E-Mail."
    },
    {
        "level": "A1",
        "cat": "Verben",
        "front": "Bekerja (keras)",
        "back": "arbeiten",
        "example": "Er arbeitet viel."
    },
    {
        "level": "A1",
        "cat": "Verben",
        "front": "Berjalan",
        "back": "laufen",
        "example": "Ich laufe jeden Morgen."
    },
    {
        "level": "A1",
        "cat": "Verben",
        "front": "Berlari",
        "back": "rennen",
        "example": "Das Kind rennt schnell."
    },
    {
        "level": "A1",
        "cat": "Verben",
        "front": "Melompat",
        "back": "springen",
        "example": "Der Hund springt hoch."
    },
    {
        "level": "A1",
        "cat": "Verben",
        "front": "Terbang",
        "back": "fliegen",
        "example": "Die Vögel fliegen."
    },
    {
        "level": "A1",
        "cat": "Verben",
        "front": "Berenang",
        "back": "schwimmen",
        "example": "Ich schwimme jeden Morgen."
    },
    {
        "level": "A1",
        "cat": "Verben",
        "front": "Memasak",
        "back": "kochen",
        "example": "Ich koche gern am Wochenende."
    },
    {
        "level": "A1",
        "cat": "Verben",
        "front": "Mencuci",
        "back": "waschen",
        "example": "Ich wasche meine Hände."
    },
    {
        "level": "A1",
        "cat": "Verben",
        "front": "Membersihkan",
        "back": "putzen",
        "example": "Ich putze das Zimmer."
    },
    {
        "level": "A1",
        "cat": "Verben",
        "front": "Menari",
        "back": "tanzen",
        "example": "Sie tanzt sehr gut."
    },
    {
        "level": "A1",
        "cat": "Verben",
        "front": "Menyanyi",
        "back": "singen",
        "example": "Er singt im Chor."
    },
    {
        "level": "A1",
        "cat": "Verben",
        "front": "Melukis",
        "back": "malen",
        "example": "Das Kind malt ein Bild."
    },
    {
        "level": "A1",
        "cat": "Verben",
        "front": "Membeli",
        "back": "kaufen",
        "example": "Ich kaufe ein Brot."
    },
    {
        "level": "A1",
        "cat": "Verben",
        "front": "Menjual",
        "back": "verkaufen",
        "example": "Er verkauft sein Auto."
    },
    {
        "level": "A1",
        "cat": "Verben",
        "front": "Memberi",
        "back": "geben",
        "example": "Gib mir bitte das Buch."
    },
    {
        "level": "A1",
        "cat": "Verben",
        "front": "Menerima",
        "back": "bekommen",
        "example": "Ich bekomme viele Briefe."
    },
    {
        "level": "A2",
        "cat": "Alltag & Begrüßung",
        "front": "Bagaimana kabarmu hari ini?",
        "back": "Wie geht es dir heute?",
        "example": "Hallo Tom, wie geht es dir heute?"
    },
    {
        "level": "A2",
        "cat": "Alltag & Begrüßung",
        "front": "Saya baik, terima kasih",
        "back": "Mir geht es gut, danke",
        "example": "Mir geht es gut, danke der Nachfrage."
    },
    {
        "level": "A2",
        "cat": "Alltag & Begrüßung",
        "front": "Sampai jumpa nanti",
        "back": "Bis später",
        "example": "Bis später, ich muss zur Arbeit."
    },
    {
        "level": "A2",
        "cat": "Alltag & Begrüßung",
        "front": "Semoga harimu menyenangkan",
        "back": "Schönen Tag noch",
        "example": "Schönen Tag noch, auf Wiedersehen!"
    },
    {
        "level": "A2",
        "cat": "Alltag & Begrüßung",
        "front": "Apa kamu bisa bahasa Inggris?",
        "back": "Sprechen Sie Englisch?",
        "example": "Entschuldigung, sprechen Sie Englisch?"
    },
    {
        "level": "A2",
        "cat": "Alltag & Begrüßung",
        "front": "Saya perlu bantuan",
        "back": "Ich brauche Hilfe",
        "example": "Entschuldigung, ich brauche Hilfe."
    },
    {
        "level": "A2",
        "cat": "Alltag & Begrüßung",
        "front": "Apa ini?",
        "back": "Was ist das?",
        "example": "Entschuldigung, was ist das?"
    },
    {
        "level": "A2",
        "cat": "Alltag & Begrüßung",
        "front": "Berapa harganya?",
        "back": "Wie viel kostet das?",
        "example": "Wie viel kostet dieses Hemd?"
    },
    {
        "level": "A2",
        "cat": "Alltag & Begrüßung",
        "front": "Di mana toilet?",
        "back": "Wo ist die Toilette?",
        "example": "Entschuldigung, wo ist die Toilette?"
    },
    {
        "level": "A2",
        "cat": "Alltag & Begrüßung",
        "front": "Saya tersesat",
        "back": "Ich habe mich verlaufen",
        "example": "Ich habe mich verlaufen, können Sie mir helfen?"
    },
    {
        "level": "A2",
        "cat": "Alltag & Begrüßung",
        "front": "Bisa tolong ulangi?",
        "back": "Können Sie das wiederholen?",
        "example": "Können Sie das bitte wiederholen?"
    },
    {
        "level": "A2",
        "cat": "Alltag & Begrüßung",
        "front": "Saya tidak tahu",
        "back": "Ich weiß es nicht",
        "example": "Ich weiß es nicht, tut mir leid."
    },
    {
        "level": "A2",
        "cat": "Alltag & Begrüßung",
        "front": "Tidak apa-apa",
        "back": "Das macht nichts",
        "example": "Das macht nichts, kein Problem."
    },
    {
        "level": "A2",
        "cat": "Alltag & Begrüßung",
        "front": "Sama-sama",
        "back": "Gern geschehen",
        "example": "Danke! – Gern geschehen!"
    },
    {
        "level": "A2",
        "cat": "Alltag & Begrüßung",
        "front": "Selamat berhasil",
        "back": "Viel Erfolg",
        "example": "Viel Erfolg bei der Prüfung!"
    },
    {
        "level": "A2",
        "cat": "Alltag & Begrüßung",
        "front": "Semoga beruntung",
        "back": "Viel Glück",
        "example": "Viel Glück bei der Arbeit!"
    },
    {
        "level": "A2",
        "cat": "Alltag & Begrüßung",
        "front": "Hati-hati",
        "back": "Pass auf",
        "example": "Pass auf, die Straße ist gefährlich."
    },
    {
        "level": "A2",
        "cat": "Alltag & Begrüßung",
        "front": "Selamat makan",
        "back": "Guten Appetit",
        "example": "Guten Appetit! Das Essen ist fertig."
    },
    {
        "level": "A2",
        "cat": "Alltag & Begrüßung",
        "front": "Selamat istirahat",
        "back": "Schlaf gut",
        "example": "Schlaf gut und träum süß!"
    },
    {
        "level": "A2",
        "cat": "Alltag & Begrüßung",
        "front": "Sampai bertemu lagi",
        "back": "Bis bald",
        "example": "Bis bald, wir sehen uns nächste Woche."
    },
    {
        "level": "A2",
        "cat": "Einkaufen",
        "front": "Garansi",
        "back": "die Garantie",
        "example": "Gibt es zwei Jahre Garantie?"
    },
    {
        "level": "A2",
        "cat": "Einkaufen",
        "front": "Diskon / Potongan harga",
        "back": "der Rabatt",
        "example": "Sie bekommen 10 Prozent Rabatt."
    },
    {
        "level": "A2",
        "cat": "Einkaufen",
        "front": "Ukuran (pakaian)",
        "back": "die Größe",
        "example": "Welche Größe tragen Sie?"
    },
    {
        "level": "A2",
        "cat": "Einkaufen",
        "front": "Kamar pas",
        "back": "die Umkleidekabine",
        "example": "Wo sind die Umkleidekabinen?"
    },
    {
        "level": "A2",
        "cat": "Einkaufen",
        "front": "Mencoba (pakaian)",
        "back": "anprobieren",
        "example": "Darf ich diese Hose anprobieren?"
    },
    {
        "level": "A2",
        "cat": "Einkaufen",
        "front": "Keluhan / Komplain",
        "back": "die Reklamation",
        "example": "Für eine Reklamation brauchen Sie den Kassenbon."
    },
    {
        "level": "A2",
        "cat": "Einkaufen",
        "front": "Menukar barang",
        "back": "umtauschen",
        "example": "Kann man den Artikel umtauschen?"
    },
    {
        "level": "A2",
        "cat": "Einkaufen",
        "front": "Kembalian",
        "back": "das Wechselgeld",
        "example": "Hier ist Ihr Wechselgeld."
    },
    {
        "level": "A2",
        "cat": "Einkaufen",
        "front": "Harga",
        "back": "der Preis",
        "example": "Der Preis ist zu hoch."
    },
    {
        "level": "A2",
        "cat": "Einkaufen",
        "front": "Kualitas",
        "back": "die Qualität",
        "example": "Die Qualität ist sehr gut."
    },
    {
        "level": "A2",
        "cat": "Einkaufen",
        "front": "Kuantitas",
        "back": "die Menge",
        "example": "Welche Menge brauchen Sie?"
    },
    {
        "level": "A2",
        "cat": "Einkaufen",
        "front": "Kemasan",
        "back": "die Verpackung",
        "example": "Die Verpackung ist kaputt."
    },
    {
        "level": "A2",
        "cat": "Einkaufen",
        "front": "Stok",
        "back": "der Vorrat",
        "example": "Der Vorrat ist aufgebraucht."
    },
    {
        "level": "A2",
        "cat": "Einkaufen",
        "front": "Pesan online",
        "back": "online bestellen",
        "example": "Ich bestelle das Buch online."
    },
    {
        "level": "A2",
        "cat": "Einkaufen",
        "front": "Pengiriman",
        "back": "die Lieferung",
        "example": "Die Lieferung dauert drei Tage."
    },
    {
        "level": "A2",
        "cat": "Einkaufen",
        "front": "Ongkos kirim",
        "back": "die Versandkosten",
        "example": "Die Versandkosten sind kostenlos."
    },
    {
        "level": "A2",
        "cat": "Einkaufen",
        "front": "Pembayaran",
        "back": "die Zahlung",
        "example": "Die Zahlung erfolgt per Karte."
    },
    {
        "level": "A2",
        "cat": "Einkaufen",
        "front": "Faktur",
        "back": "die Rechnung",
        "example": "Bitte schicken Sie mir die Rechnung."
    },
    {
        "level": "A2",
        "cat": "Einkaufen",
        "front": "Toko buku",
        "back": "die Buchhandlung",
        "example": "Ich gehe in die Buchhandlung."
    },
    {
        "level": "A2",
        "cat": "Einkaufen",
        "front": "Apotek",
        "back": "die Apotheke",
        "example": "Die Apotheke ist nebenan."
    },
    {
        "level": "A2",
        "cat": "Einkaufen",
        "front": "Toko roti",
        "back": "die Bäckerei",
        "example": "Die Bäckerei öffnet um 6 Uhr."
    },
    {
        "level": "A2",
        "cat": "Einkaufen",
        "front": "Toko daging",
        "back": "die Metzgerei",
        "example": "Die Metzgerei hat frisches Fleisch."
    },
    {
        "level": "A2",
        "cat": "Essen & Trinken",
        "front": "Hidangan pembuka",
        "back": "die Vorspeise",
        "example": "Als Vorspeise nehme ich die Suppe."
    },
    {
        "level": "A2",
        "cat": "Essen & Trinken",
        "front": "Hidangan utama",
        "back": "das Hauptgericht",
        "example": "Das Hauptgericht ist Schnitzel."
    },
    {
        "level": "A2",
        "cat": "Essen & Trinken",
        "front": "Hidangan penutup",
        "back": "der Nachtisch",
        "example": "Zum Nachtisch gibt es Eis."
    },
    {
        "level": "A2",
        "cat": "Essen & Trinken",
        "front": "Minuman",
        "back": "das Getränk",
        "example": "Welches Getränk möchten Sie?"
    },
    {
        "level": "A2",
        "cat": "Essen & Trinken",
        "front": "Merica",
        "back": "der Pfeffer",
        "example": "Ich möchte Pfeffer auf die Suppe."
    },
    {
        "level": "A2",
        "cat": "Essen & Trinken",
        "front": "Minyak",
        "back": "das Öl",
        "example": "Ich brauche Öl zum Kochen."
    },
    {
        "level": "A2",
        "cat": "Essen & Trinken",
        "front": "Mentega",
        "back": "die Butter",
        "example": "Die Butter ist im Kühlschrank."
    },
    {
        "level": "A2",
        "cat": "Essen & Trinken",
        "front": "Selai",
        "back": "die Marmelade",
        "example": "Ich esse Brot mit Marmelade."
    },
    {
        "level": "A2",
        "cat": "Essen & Trinken",
        "front": "Madu",
        "back": "der Honig",
        "example": "Honig ist gesund."
    },
    {
        "level": "A2",
        "cat": "Essen & Trinken",
        "front": "Cokelat",
        "back": "die Schokolade",
        "example": "Ich mag Schokolade."
    },
    {
        "level": "A2",
        "cat": "Essen & Trinken",
        "front": "Es krim",
        "back": "das Eis",
        "example": "Im Sommer esse ich gern Eis."
    },
    {
        "level": "A2",
        "cat": "Essen & Trinken",
        "front": "Permen",
        "back": "die Bonbons",
        "example": "Die Kinder mögen Bonbons."
    },
    {
        "level": "A2",
        "cat": "Essen & Trinken",
        "front": "Kue kering",
        "back": "der Keks",
        "example": "Der Keks ist knusprig."
    },
    {
        "level": "A2",
        "cat": "Essen & Trinken",
        "front": "Roti gandum",
        "back": "das Vollkornbrot",
        "example": "Vollkornbrot ist gesünder."
    },
    {
        "level": "A2",
        "cat": "Essen & Trinken",
        "front": "Sayuran hijau",
        "back": "das Blattgemüse",
        "example": "Blattgemüse ist reich an Vitaminen."
    },
    {
        "level": "A2",
        "cat": "Essen & Trinken",
        "front": "Daging sapi",
        "back": "das Rindfleisch",
        "example": "Rindfleisch ist teuer."
    },
    {
        "level": "A2",
        "cat": "Essen & Trinken",
        "front": "Daging babi",
        "back": "das Schweinefleisch",
        "example": "Schweinefleisch ist in Deutschland beliebt."
    },
    {
        "level": "A2",
        "cat": "Essen & Trinken",
        "front": "Daging ayam",
        "back": "das Hähnchenfleisch",
        "example": "Hähnchenfleisch ist leicht verdaulich."
    },
    {
        "level": "A2",
        "cat": "Essen & Trinken",
        "front": "Udang",
        "back": "die Garnele",
        "example": "Die Garnelen sind frisch."
    },
    {
        "level": "A2",
        "cat": "Essen & Trinken",
        "front": "Ikan salmon",
        "back": "der Lachs",
        "example": "Lachs ist reich an Omega-3."
    },
    {
        "level": "A2",
        "cat": "Essen & Trinken",
        "front": "Tahu",
        "back": "der Tofu",
        "example": "Tofu ist vegetarisch."
    },
    {
        "level": "A2",
        "cat": "Essen & Trinken",
        "front": "Mie",
        "back": "die Nudeln",
        "example": "Ich koche Nudeln mit Gemüse."
    },
    {
        "level": "A2",
        "cat": "Essen & Trinken",
        "front": "Pizza",
        "back": "die Pizza",
        "example": "Die Pizza ist lecker."
    },
    {
        "level": "A2",
        "cat": "Essen & Trinken",
        "front": "Sosis",
        "back": "die Wurst",
        "example": "Die Wurst ist aus Deutschland."
    },
    {
        "level": "A2",
        "cat": "Essen & Trinken",
        "front": "Keju parut",
        "back": "der Reibekäse",
        "example": "Ich brauche Reibekäse für die Pasta."
    },
    {
        "level": "A2",
        "cat": "Essen & Trinken",
        "front": "Resep",
        "back": "das Rezept",
        "example": "Das Rezept ist einfach."
    },
    {
        "level": "A2",
        "cat": "Essen & Trinken",
        "front": "Makan di luar",
        "back": "auswärts essen",
        "example": "Wir essen heute auswärts."
    },
    {
        "level": "A2",
        "cat": "Essen & Trinken",
        "front": "Pesan antar",
        "back": "der Lieferservice",
        "example": "Der Lieferservice bringt die Pizza."
    },
    {
        "level": "A2",
        "cat": "Essen & Trinken",
        "front": "Tip",
        "back": "das Trinkgeld",
        "example": "Wir geben 10 Prozent Trinkgeld."
    },
    {
        "level": "A2",
        "cat": "Reisen & Verkehr",
        "front": "Tiket perjalanan",
        "back": "die Fahrkarte",
        "example": "Ich kaufe eine Fahrkarte nach Berlin."
    },
    {
        "level": "A2",
        "cat": "Reisen & Verkehr",
        "front": "Koper",
        "back": "der Koffer",
        "example": "Pack deine Kleidung in den Koffer."
    },
    {
        "level": "A2",
        "cat": "Reisen & Verkehr",
        "front": "Keberangkatan",
        "back": "die Abfahrt",
        "example": "Die Abfahrt ist um 8:15 Uhr."
    },
    {
        "level": "A2",
        "cat": "Reisen & Verkehr",
        "front": "Kedatangan",
        "back": "die Ankunft",
        "example": "Die Ankunft ist um 14 Uhr."
    },
    {
        "level": "A2",
        "cat": "Reisen & Verkehr",
        "front": "Keterlambatan",
        "back": "die Verspätung",
        "example": "Der Zug hat 20 Minuten Verspätung."
    },
    {
        "level": "A2",
        "cat": "Reisen & Verkehr",
        "front": "Biro wisata",
        "back": "das Reisebüro",
        "example": "Wir buchen im Reisebüro."
    },
    {
        "level": "A2",
        "cat": "Reisen & Verkehr",
        "front": "Tujuan",
        "back": "das Ziel",
        "example": "Unser Ziel ist Berlin."
    },
    {
        "level": "A2",
        "cat": "Reisen & Verkehr",
        "front": "Paspor",
        "back": "der Reisepass",
        "example": "Zeigen Sie Ihren Reisepass."
    },
    {
        "level": "A2",
        "cat": "Reisen & Verkehr",
        "front": "Tiket pesawat",
        "back": "das Flugticket",
        "example": "Ich buche ein Flugticket."
    },
    {
        "level": "A2",
        "cat": "Reisen & Verkehr",
        "front": "Kamar hotel",
        "back": "das Hotelzimmer",
        "example": "Das Hotelzimmer ist reserviert."
    },
    {
        "level": "A2",
        "cat": "Reisen & Verkehr",
        "front": "Turis",
        "back": "der Tourist",
        "example": "Viele Touristen besuchen die Stadt."
    },
    {
        "level": "A2",
        "cat": "Reisen & Verkehr",
        "front": "Tamasya",
        "back": "der Ausflug",
        "example": "Am Sonntag machen wir einen Ausflug."
    },
    {
        "level": "A2",
        "cat": "Reisen & Verkehr",
        "front": "Peta kota",
        "back": "der Stadtplan",
        "example": "Ich brauche einen Stadtplan."
    },
    {
        "level": "A2",
        "cat": "Reisen & Verkehr",
        "front": "Stasiun bus",
        "back": "die Bushaltestelle",
        "example": "Die Bushaltestelle ist in der Nähe."
    },
    {
        "level": "A2",
        "cat": "Reisen & Verkehr",
        "front": "Jadwal keberangkatan",
        "back": "der Fahrplan",
        "example": "Der Fahrplan hängt an der Wand."
    },
    {
        "level": "A2",
        "cat": "Reisen & Verkehr",
        "front": "Pemberitahuan",
        "back": "die Durchsage",
        "example": "Achten Sie auf die Durchsage."
    },
    {
        "level": "A2",
        "cat": "Reisen & Verkehr",
        "front": "Perjalanan",
        "back": "die Reise",
        "example": "Gute Reise!"
    },
    {
        "level": "A2",
        "cat": "Reisen & Verkehr",
        "front": "Pemesanan",
        "back": "die Buchung",
        "example": "Die Buchung wurde bestätigt."
    },
    {
        "level": "A2",
        "cat": "Reisen & Verkehr",
        "front": "Membatalkan",
        "back": "stornieren",
        "example": "Ich muss den Flug stornieren."
    },
    {
        "level": "A2",
        "cat": "Reisen & Verkehr",
        "front": "Pengembalian dana",
        "back": "die Rückerstattung",
        "example": "Die Rückerstattung dauert eine Woche."
    },
    {
        "level": "A2",
        "cat": "Freizeit & Hobbys",
        "front": "Kamera",
        "back": "die Kamera",
        "example": "Ich nehme meine Kamera mit."
    },
    {
        "level": "A2",
        "cat": "Freizeit & Hobbys",
        "front": "Tiket masuk",
        "back": "die Eintrittskarte",
        "example": "Die Eintrittskarte kostet 10 Euro."
    },
    {
        "level": "A2",
        "cat": "Freizeit & Hobbys",
        "front": "Museum",
        "back": "das Museum",
        "example": "Das Museum ist heute geöffnet."
    },
    {
        "level": "A2",
        "cat": "Freizeit & Hobbys",
        "front": "Bioskop",
        "back": "das Kino",
        "example": "Wir gehen ins Kino."
    },
    {
        "level": "A2",
        "cat": "Freizeit & Hobbys",
        "front": "Teater",
        "back": "das Theater",
        "example": "Das Theaterstück beginnt um 20 Uhr."
    },
    {
        "level": "A2",
        "cat": "Freizeit & Hobbys",
        "front": "Konser",
        "back": "das Konzert",
        "example": "Das Konzert war fantastisch."
    },
    {
        "level": "A2",
        "cat": "Freizeit & Hobbys",
        "front": "Buku",
        "back": "das Buch",
        "example": "Das Buch ist sehr interessant."
    },
    {
        "level": "A2",
        "cat": "Freizeit & Hobbys",
        "front": "Koran",
        "back": "die Zeitung",
        "example": "Er liest täglich die Zeitung."
    },
    {
        "level": "A2",
        "cat": "Freizeit & Hobbys",
        "front": "Majalah",
        "back": "die Zeitschrift",
        "example": "Die Zeitschrift erscheint monatlich."
    },
    {
        "level": "A2",
        "cat": "Freizeit & Hobbys",
        "front": "Musik",
        "back": "die Musik",
        "example": "Ich höre gern Musik."
    },
    {
        "level": "A2",
        "cat": "Freizeit & Hobbys",
        "front": "Lagu",
        "back": "das Lied",
        "example": "Das Lied ist sehr bekannt."
    },
    {
        "level": "A2",
        "cat": "Freizeit & Hobbys",
        "front": "Gitar",
        "back": "die Gitarre",
        "example": "Er spielt Gitarre."
    },
    {
        "level": "A2",
        "cat": "Freizeit & Hobbys",
        "front": "Klavier",
        "back": "das Klavier",
        "example": "Sie lernt Klavier spielen."
    },
    {
        "level": "A2",
        "cat": "Freizeit & Hobbys",
        "front": "Berlari",
        "back": "laufen",
        "example": "Er läuft im Park."
    },
    {
        "level": "A2",
        "cat": "Freizeit & Hobbys",
        "front": "Bersepeda",
        "back": "Rad fahren",
        "example": "Wir fahren am Wochenende Rad."
    },
    {
        "level": "A2",
        "cat": "Freizeit & Hobbys",
        "front": "Mendaki",
        "back": "wandern",
        "example": "Wir wandern in den Bergen."
    },
    {
        "level": "A2",
        "cat": "Freizeit & Hobbys",
        "front": "Memancing",
        "back": "angeln",
        "example": "Mein Opa angelt am See."
    },
    {
        "level": "A2",
        "cat": "Freizeit & Hobbys",
        "front": "Berkemah",
        "back": "zelten",
        "example": "Im Sommer zelten wir am Meer."
    },
    {
        "level": "A2",
        "cat": "Freizeit & Hobbys",
        "front": "Membaca buku",
        "back": "Bücher lesen",
        "example": "Ich lese gern Bücher."
    },
    {
        "level": "A2",
        "cat": "Freizeit & Hobbys",
        "front": "Menonton film",
        "back": "Filme schauen",
        "example": "Wir schauen am Abend Filme."
    },
    {
        "level": "A2",
        "cat": "Freizeit & Hobbys",
        "front": "Bermain sepak bola",
        "back": "Fußball spielen",
        "example": "Die Kinder spielen Fußball."
    },
    {
        "level": "A2",
        "cat": "Freizeit & Hobbys",
        "front": "Bermain tenis",
        "back": "Tennis spielen",
        "example": "Er spielt jeden Samstag Tennis."
    },
    {
        "level": "A2",
        "cat": "Freizeit & Hobbys",
        "front": "Bermain catur",
        "back": "Schach spielen",
        "example": "Mein Vater spielt gern Schach."
    },
    {
        "level": "A2",
        "cat": "Freizeit & Hobbys",
        "front": "Membaca koran",
        "back": "Zeitung lesen",
        "example": "Opa liest jeden Morgen Zeitung."
    },
    {
        "level": "A2",
        "cat": "Freizeit & Hobbys",
        "front": "Berkebun",
        "back": "gärtnern",
        "example": "Sie gärtnert gern im Garten."
    },
    {
        "level": "A2",
        "cat": "Medien & Technik",
        "front": "Perangkat keras",
        "back": "die Hardware",
        "example": "Die Hardware ist neu."
    },
    {
        "level": "A2",
        "cat": "Medien & Technik",
        "front": "Perangkat lunak",
        "back": "die Software",
        "example": "Die Software wird aktualisiert."
    },
    {
        "level": "A2",
        "cat": "Medien & Technik",
        "front": "Situs web",
        "back": "die Webseite",
        "example": "Die Webseite ist online."
    },
    {
        "level": "A2",
        "cat": "Medien & Technik",
        "front": "Layar",
        "back": "der Bildschirm",
        "example": "Der Bildschirm ist groß."
    },
    {
        "level": "A2",
        "cat": "Medien & Technik",
        "front": "Papan ketik",
        "back": "die Tastatur",
        "example": "Die Tastatur funktioniert gut."
    },
    {
        "level": "A2",
        "cat": "Medien & Technik",
        "front": "Unduhan",
        "back": "der Download",
        "example": "Der Download ist fertig."
    },
    {
        "level": "A2",
        "cat": "Medien & Technik",
        "front": "Kata sandi",
        "back": "das Passwort",
        "example": "Geben Sie Ihr Passwort ein."
    },
    {
        "level": "A2",
        "cat": "Medien & Technik",
        "front": "Pesan",
        "back": "die Nachricht",
        "example": "Ich habe eine Nachricht bekommen."
    },
    {
        "level": "A2",
        "cat": "Medien & Technik",
        "front": "Telepon",
        "back": "das Telefon",
        "example": "Das Telefon klingelt."
    },
    {
        "level": "A2",
        "cat": "Medien & Technik",
        "front": "Ponsel",
        "back": "das Handy",
        "example": "Mein Handy ist kaputt."
    },
    {
        "level": "A2",
        "cat": "Medien & Technik",
        "front": "Komputer",
        "back": "der Computer",
        "example": "Der Computer läuft langsam."
    },
    {
        "level": "A2",
        "cat": "Medien & Technik",
        "front": "Laptop",
        "back": "der Laptop",
        "example": "Ich arbeite am Laptop."
    },
    {
        "level": "A2",
        "cat": "Medien & Technik",
        "front": "Tablet",
        "back": "das Tablet",
        "example": "Das Tablet ist praktisch."
    },
    {
        "level": "A2",
        "cat": "Medien & Technik",
        "front": "Printer",
        "back": "der Drucker",
        "example": "Der Drucker funktioniert nicht."
    },
    {
        "level": "A2",
        "cat": "Medien & Technik",
        "front": "Kabel",
        "back": "das Kabel",
        "example": "Das Kabel ist zu kurz."
    },
    {
        "level": "A2",
        "cat": "Medien & Technik",
        "front": "Baterai",
        "back": "der Akku",
        "example": "Mein Akku ist leer."
    },
    {
        "level": "A2",
        "cat": "Medien & Technik",
        "front": "Pengisi daya",
        "back": "das Ladekabel",
        "example": "Wo ist mein Ladekabel?"
    },
    {
        "level": "A2",
        "cat": "Medien & Technik",
        "front": "Radio",
        "back": "das Radio",
        "example": "Ich höre Radio im Auto."
    },
    {
        "level": "A2",
        "cat": "Medien & Technik",
        "front": "Televisi",
        "back": "der Fernseher",
        "example": "Der Fernseher ist neu."
    },
    {
        "level": "A2",
        "cat": "Medien & Technik",
        "front": "Internet",
        "back": "das Internet",
        "example": "Das Internet ist langsam."
    },
    {
        "level": "A2",
        "cat": "Medien & Technik",
        "front": "Email",
        "back": "die E-Mail",
        "example": "Ich schreibe eine E-Mail."
    },
    {
        "level": "A2",
        "cat": "Medien & Technik",
        "front": "Akun",
        "back": "das Konto",
        "example": "Ich habe mein Konto gelöscht."
    },
    {
        "level": "A2",
        "cat": "Medien & Technik",
        "front": "Aplikasi",
        "back": "die App",
        "example": "Diese App ist nützlich."
    },
    {
        "level": "A2",
        "cat": "Medien & Technik",
        "front": "Jaringan",
        "back": "das Netzwerk",
        "example": "Das Netzwerk ist stabil."
    },
    {
        "level": "A2",
        "cat": "Wohnen & Haus",
        "front": "Sewa",
        "back": "die Miete",
        "example": "Die Miete ist hoch."
    },
    {
        "level": "A2",
        "cat": "Wohnen & Haus",
        "front": "Kontrak sewa",
        "back": "der Mietvertrag",
        "example": "Ich unterschreibe den Mietvertrag."
    },
    {
        "level": "A2",
        "cat": "Wohnen & Haus",
        "front": "Pemilik rumah",
        "back": "der Vermieter",
        "example": "Der Vermieter wohnt im Erdgeschoss."
    },
    {
        "level": "A2",
        "cat": "Wohnen & Haus",
        "front": "Penyewa",
        "back": "der Mieter",
        "example": "Der Mieter zahlt pünktlich."
    },
    {
        "level": "A2",
        "cat": "Wohnen & Haus",
        "front": "Lantai",
        "back": "der Stock",
        "example": "Wir wohnen im dritten Stock."
    },
    {
        "level": "A2",
        "cat": "Wohnen & Haus",
        "front": "Lift",
        "back": "der Aufzug",
        "example": "Der Aufzug ist kaputt."
    },
    {
        "level": "A2",
        "cat": "Wohnen & Haus",
        "front": "Gudang",
        "back": "der Keller",
        "example": "Die Fahrräder stehen im Keller."
    },
    {
        "level": "A2",
        "cat": "Wohnen & Haus",
        "front": "Atap",
        "back": "das Dach",
        "example": "Das Dach ist alt."
    },
    {
        "level": "A2",
        "cat": "Wohnen & Haus",
        "front": "Dinding",
        "back": "die Wand",
        "example": "Die Wand ist weiß gestrichen."
    },
    {
        "level": "A2",
        "cat": "Wohnen & Haus",
        "front": "Lantai (dasar)",
        "back": "der Boden",
        "example": "Der Boden ist aus Holz."
    },
    {
        "level": "A2",
        "cat": "Wohnen & Haus",
        "front": "Perabot",
        "back": "die Möbel",
        "example": "Die Möbel sind modern."
    },
    {
        "level": "A2",
        "cat": "Wohnen & Haus",
        "front": "Rak",
        "back": "das Regal",
        "example": "Die Bücher stehen im Regal."
    },
    {
        "level": "A2",
        "cat": "Wohnen & Haus",
        "front": "Cermin",
        "back": "der Spiegel",
        "example": "Der Spiegel hängt im Bad."
    },
    {
        "level": "A2",
        "cat": "Wohnen & Haus",
        "front": "Karpet",
        "back": "der Teppich",
        "example": "Der Teppich ist weich."
    },
    {
        "level": "A2",
        "cat": "Wohnen & Haus",
        "front": "Tirai",
        "back": "der Vorhang",
        "example": "Die Vorhänge sind zu."
    },
    {
        "level": "A2",
        "cat": "Wohnen & Haus",
        "front": "Bantal",
        "back": "das Kissen",
        "example": "Das Kissen ist bequem."
    },
    {
        "level": "A2",
        "cat": "Wohnen & Haus",
        "front": "Selimut",
        "back": "die Decke",
        "example": "Die Decke ist warm."
    },
    {
        "level": "A2",
        "cat": "Wohnen & Haus",
        "front": "Handuk",
        "back": "das Handtuch",
        "example": "Das Handtuch ist sauber."
    },
    {
        "level": "A2",
        "cat": "Wohnen & Haus",
        "front": "Sikat gigi",
        "back": "die Zahnbürste",
        "example": "Ich brauche eine neue Zahnbürste."
    },
    {
        "level": "A2",
        "cat": "Wohnen & Haus",
        "front": "Sabun",
        "back": "die Seife",
        "example": "Die Seife riecht gut."
    },
    {
        "level": "A2",
        "cat": "Wohnen & Haus",
        "front": "Sampo",
        "back": "das Shampoo",
        "example": "Das Shampoo ist leer."
    },
    {
        "level": "A2",
        "cat": "Wohnen & Haus",
        "front": "Tisu",
        "back": "das Taschentuch",
        "example": "Ich brauche ein Taschentuch."
    },
    {
        "level": "A2",
        "cat": "Wohnen & Haus",
        "front": "Setrika",
        "back": "das Bügeleisen",
        "example": "Das Bügeleisen ist heiß."
    },
    {
        "level": "A2",
        "cat": "Wohnen & Haus",
        "front": "Vacuum cleaner",
        "back": "der Staubsauger",
        "example": "Der Staubsauger ist kaputt."
    },
    {
        "level": "A2",
        "cat": "Wohnen & Haus",
        "front": "Alat",
        "back": "das Werkzeug",
        "example": "Ich brauche Werkzeug für die Reparatur."
    },
    {
        "level": "A2",
        "cat": "Bildung & Lernen",
        "front": "Menjelaskan",
        "back": "erklären",
        "example": "Der Lehrer erklärt die Grammatik."
    },
    {
        "level": "A2",
        "cat": "Bildung & Lernen",
        "front": "Sekolah",
        "back": "die Schule",
        "example": "Die Kinder gehen zur Schule."
    },
    {
        "level": "A2",
        "cat": "Bildung & Lernen",
        "front": "Universitas",
        "back": "die Universität",
        "example": "Sie studiert an der Universität."
    },
    {
        "level": "A2",
        "cat": "Bildung & Lernen",
        "front": "Ujian",
        "back": "die Prüfung",
        "example": "Die Prüfung ist schwer."
    },
    {
        "level": "A2",
        "cat": "Bildung & Lernen",
        "front": "Nilai",
        "back": "die Note",
        "example": "Er hat eine gute Note bekommen."
    },
    {
        "level": "A2",
        "cat": "Bildung & Lernen",
        "front": "Guru",
        "back": "der Lehrer",
        "example": "Der Lehrer erklärt die Aufgabe."
    },
    {
        "level": "A2",
        "cat": "Bildung & Lernen",
        "front": "Murid",
        "back": "der Schüler",
        "example": "Die Schüler lernen Deutsch."
    },
    {
        "level": "A2",
        "cat": "Bildung & Lernen",
        "front": "Buku pelajaran",
        "back": "das Lehrbuch",
        "example": "Das Lehrbuch ist neu."
    },
    {
        "level": "A2",
        "cat": "Bildung & Lernen",
        "front": "Pekerjaan rumah",
        "back": "die Hausaufgabe",
        "example": "Ich mache meine Hausaufgaben."
    },
    {
        "level": "A2",
        "cat": "Bildung & Lernen",
        "front": "Kursus",
        "back": "der Kurs",
        "example": "Der Kurs beginnt nächste Woche."
    },
    {
        "level": "A2",
        "cat": "Bildung & Lernen",
        "front": "Ijazah",
        "back": "das Zeugnis",
        "example": "Er hat sein Zeugnis bekommen."
    },
    {
        "level": "A2",
        "cat": "Bildung & Lernen",
        "front": "Kelas",
        "back": "die Klasse",
        "example": "Die Klasse hat 25 Schüler."
    },
    {
        "level": "A2",
        "cat": "Bildung & Lernen",
        "front": "Papan tulis",
        "back": "die Tafel",
        "example": "Der Lehrer schreibt an die Tafel."
    },
    {
        "level": "A2",
        "cat": "Bildung & Lernen",
        "front": "Pensil",
        "back": "der Bleistift",
        "example": "Wo ist mein Bleistift?"
    },
    {
        "level": "A2",
        "cat": "Bildung & Lernen",
        "front": "Pulpen",
        "back": "der Kugelschreiber",
        "example": "Der Kugelschreiber schreibt gut."
    },
    {
        "level": "A2",
        "cat": "Bildung & Lernen",
        "front": "Penghapus",
        "back": "der Radiergummi",
        "example": "Ich brauche einen Radiergummi."
    },
    {
        "level": "A2",
        "cat": "Bildung & Lernen",
        "front": "Buku catatan",
        "back": "das Heft",
        "example": "Ich schreibe im Heft."
    },
    {
        "level": "A2",
        "cat": "Bildung & Lernen",
        "front": "Tas sekolah",
        "back": "der Rucksack",
        "example": "Der Rucksack ist schwer."
    },
    {
        "level": "A2",
        "cat": "Bildung & Lernen",
        "front": "Perpustakaan",
        "back": "die Bibliothek",
        "example": "Die Bibliothek ist ruhig."
    },
    {
        "level": "A2",
        "cat": "Bildung & Lernen",
        "front": "Bahasa",
        "back": "die Sprache",
        "example": "Deutsch ist eine schwere Sprache."
    },
    {
        "level": "A2",
        "cat": "Bildung & Lernen",
        "front": "Tata bahasa",
        "back": "die Grammatik",
        "example": "Die Grammatik ist wichtig."
    },
    {
        "level": "A2",
        "cat": "Bildung & Lernen",
        "front": "Kosakata",
        "back": "der Wortschatz",
        "example": "Mein Wortschatz wächst."
    },
    {
        "level": "A2",
        "cat": "Bildung & Lernen",
        "front": "Latihan",
        "back": "die Übung",
        "example": "Übung macht den Meister."
    },
    {
        "level": "A2",
        "cat": "Bildung & Lernen",
        "front": "Kesalahan",
        "back": "der Fehler",
        "example": "Jeder macht Fehler."
    },
    {
        "level": "A2",
        "cat": "Bildung & Lernen",
        "front": "Jawaban",
        "back": "die Antwort",
        "example": "Die Antwort ist richtig."
    },
    {
        "level": "A2",
        "cat": "Gefühle & Charakter",
        "front": "Bahagia",
        "back": "fröhlich",
        "example": "Sie ist heute fröhlich."
    },
    {
        "level": "A2",
        "cat": "Gefühle & Charakter",
        "front": "Gugup",
        "back": "nervös",
        "example": "Ich bin vor der Prüfung nervös."
    },
    {
        "level": "A2",
        "cat": "Gefühle & Charakter",
        "front": "Kaget",
        "back": "überrascht",
        "example": "Ich war überrascht von der Nachricht."
    },
    {
        "level": "A2",
        "cat": "Gefühle & Charakter",
        "front": "Bosan",
        "back": "gelangweilt",
        "example": "Er ist gelangweilt."
    },
    {
        "level": "A2",
        "cat": "Gefühle & Charakter",
        "front": "Bersemangat",
        "back": "begeistert",
        "example": "Sie ist begeistert von dem Film."
    },
    {
        "level": "A2",
        "cat": "Gefühle & Charakter",
        "front": "Bangga",
        "back": "stolz",
        "example": "Er ist stolz auf seinen Sohn."
    },
    {
        "level": "A2",
        "cat": "Gefühle & Charakter",
        "front": "Cemburu",
        "back": "eifersüchtig",
        "example": "Sie ist eifersüchtig."
    },
    {
        "level": "A2",
        "cat": "Gefühle & Charakter",
        "front": "Malu",
        "back": "schüchtern",
        "example": "Er ist schüchtern."
    },
    {
        "level": "A2",
        "cat": "Gefühle & Charakter",
        "front": "Percaya diri",
        "back": "selbstbewusst",
        "example": "Sie ist sehr selbstbewusst."
    },
    {
        "level": "A2",
        "cat": "Gefühle & Charakter",
        "front": "Jujur",
        "back": "ehrlich",
        "example": "Er ist immer ehrlich."
    },
    {
        "level": "A2",
        "cat": "Gefühle & Charakter",
        "front": "Rajin",
        "back": "fleißig",
        "example": "Sie ist eine fleißige Schülerin."
    },
    {
        "level": "A2",
        "cat": "Gefühle & Charakter",
        "front": "Malas",
        "back": "faul",
        "example": "Er ist heute faul."
    },
    {
        "level": "A2",
        "cat": "Gefühle & Charakter",
        "front": "Sabar",
        "back": "geduldig",
        "example": "Der Lehrer ist geduldig."
    },
    {
        "level": "A2",
        "cat": "Gefühle & Charakter",
        "front": "Pintar",
        "back": "klug",
        "example": "Sie ist sehr klug."
    },
    {
        "level": "A2",
        "cat": "Gefühle & Charakter",
        "front": "Lucu",
        "back": "lustig",
        "example": "Er ist ein lustiger Mensch."
    },
    {
        "level": "A2",
        "cat": "Gefühle & Charakter",
        "front": "Tenang",
        "back": "gelassen",
        "example": "Sie bleibt immer gelassen."
    },
    {
        "level": "A2",
        "cat": "Verben",
        "front": "Mengingat",
        "back": "erinnern",
        "example": "Ich erinnere mich daran."
    },
    {
        "level": "A2",
        "cat": "Verben",
        "front": "Melupakan",
        "back": "vergessen",
        "example": "Vergiss deinen Schlüssel nicht."
    },
    {
        "level": "A2",
        "cat": "Verben",
        "front": "Berhenti / Selesai",
        "back": "aufhören",
        "example": "Es hört auf zu regnen."
    },
    {
        "level": "A2",
        "cat": "Verben",
        "front": "Mencoba",
        "back": "versuchen",
        "example": "Ich versuche es noch einmal."
    },
    {
        "level": "A2",
        "cat": "Verben",
        "front": "Menceritakan",
        "back": "erzählen",
        "example": "Opa erzählt eine Geschichte."
    },
    {
        "level": "A2",
        "cat": "Verben",
        "front": "Menyarankan",
        "back": "empfehlen",
        "example": "Was können Sie empfehlen?"
    },
    {
        "level": "A2",
        "cat": "Verben",
        "front": "Meninggalkan",
        "back": "verlassen",
        "example": "Er verlässt das Haus um 8 Uhr."
    },
    {
        "level": "A2",
        "cat": "Verben",
        "front": "Mengunduh",
        "back": "herunterladen",
        "example": "Ich lade das Programm herunter."
    },
    {
        "level": "A2",
        "cat": "Verben",
        "front": "Mengunggah",
        "back": "hochladen",
        "example": "Lade das Dokument hoch."
    },
    {
        "level": "A2",
        "cat": "Verben",
        "front": "Berbagi",
        "back": "teilen",
        "example": "Kannst du das Foto teilen?"
    },
    {
        "level": "A2",
        "cat": "Verben",
        "front": "Membuka pakaian",
        "back": "ausziehen",
        "example": "Ich ziehe meine Jacke aus."
    },
    {
        "level": "A2",
        "cat": "Verben",
        "front": "Memakai pakaian",
        "back": "anziehen",
        "example": "Ich ziehe meine Schuhe an."
    },
    {
        "level": "A2",
        "cat": "Verben",
        "front": "Bangun",
        "back": "aufstehen",
        "example": "Ich stehe um 6 Uhr auf."
    },
    {
        "level": "A2",
        "cat": "Verben",
        "front": "Tidur (malam)",
        "back": "einschlafen",
        "example": "Ich schlafe schnell ein."
    },
    {
        "level": "A2",
        "cat": "Verben",
        "front": "Bangun tidur",
        "back": "aufwachen",
        "example": "Ich wache um 7 Uhr auf."
    },
    {
        "level": "A2",
        "cat": "Verben",
        "front": "Menelepon",
        "back": "anrufen",
        "example": "Ich rufe meine Mutter an."
    },
    {
        "level": "A2",
        "cat": "Verben",
        "front": "Membuka (TV)",
        "back": "einschalten",
        "example": "Schalte den Fernseher ein."
    },
    {
        "level": "A2",
        "cat": "Verben",
        "front": "Mematikan (TV)",
        "back": "ausschalten",
        "example": "Schalte das Licht aus."
    },
    {
        "level": "A2",
        "cat": "Verben",
        "front": "Mengambil",
        "back": "mitnehmen",
        "example": "Nimm einen Regenschirm mit."
    },
    {
        "level": "A2",
        "cat": "Verben",
        "front": "Mengembalikan",
        "back": "zurückgeben",
        "example": "Ich gebe das Buch zurück."
    },
    {
        "level": "A2",
        "cat": "Verben",
        "front": "Meminjam",
        "back": "leihen",
        "example": "Kannst du mir einen Stift leihen?"
    },
    {
        "level": "A2",
        "cat": "Verben",
        "front": "Meminjamkan",
        "back": "verleihen",
        "example": "Er verleiht sein Auto nicht."
    },
    {
        "level": "A2",
        "cat": "Verben",
        "front": "Menunjukkan",
        "back": "zeigen",
        "example": "Zeig mir dein Foto."
    },
    {
        "level": "A2",
        "cat": "Verben",
        "front": "Mengunjungi",
        "back": "besuchen",
        "example": "Wir besuchen unsere Großeltern."
    },
    {
        "level": "A2",
        "cat": "Verben",
        "front": "Mengundang",
        "back": "einladen",
        "example": "Ich lade dich zur Party ein."
    },
    {
        "level": "A2",
        "cat": "Verben",
        "front": "Menyiapkan",
        "back": "vorbereiten",
        "example": "Ich bereite das Essen vor."
    },
    {
        "level": "A2",
        "cat": "Verben",
        "front": "Memutuskan",
        "back": "entscheiden",
        "example": "Ich entscheide mich für das blaue Hemd."
    },
    {
        "level": "A2",
        "cat": "Verben",
        "front": "Membandingkan",
        "back": "vergleichen",
        "example": "Vergleiche die Preise!"
    },
    {
        "level": "A2",
        "cat": "Verben",
        "front": "Mengubah",
        "back": "ändern",
        "example": "Ich möchte meinen Termin ändern."
    },
    {
        "level": "A2",
        "cat": "Verben",
        "front": "Memperbaiki",
        "back": "reparieren",
        "example": "Er repariert das Fahrrad."
    },
    {
        "level": "A2",
        "cat": "Verben",
        "front": "Mengganti",
        "back": "wechseln",
        "example": "Ich wechsle das Geld."
    },
    {
        "level": "A2",
        "cat": "Verben",
        "front": "Membayar kembali",
        "back": "zurückzahlen",
        "example": "Ich zahle das Geld morgen zurück."
    },
    {
        "level": "A2",
        "cat": "Verben",
        "front": "Menyimpan",
        "back": "aufbewahren",
        "example": "Bewahre den Kassenbon auf!"
    },
    {
        "level": "A2",
        "cat": "Verben",
        "front": "Menghemat",
        "back": "sparen",
        "example": "Ich spare für den Urlaub."
    },
    {
        "level": "A2",
        "cat": "Verben",
        "front": "Mengeluarkan uang",
        "back": "ausgeben",
        "example": "Er gibt zu viel Geld aus."
    },
    {
        "level": "A2",
        "cat": "Verben",
        "front": "Berterima kasih",
        "back": "danken",
        "example": "Ich danke dir für die Hilfe."
    },
    {
        "level": "A2",
        "cat": "Verben",
        "front": "Meminta maaf",
        "back": "sich entschuldigen",
        "example": "Ich entschuldige mich für die Verspätung."
    },
    {
        "level": "A2",
        "cat": "Verben",
        "front": "Berharap",
        "back": "hoffen",
        "example": "Ich hoffe, du kommst bald."
    },
    {
        "level": "A2",
        "cat": "Verben",
        "front": "Percaya",
        "back": "glauben",
        "example": "Ich glaube, er hat recht."
    },
    {
        "level": "A2",
        "cat": "Verben",
        "front": "Berpikir",
        "back": "denken",
        "example": "Ich denke oft an dich."
    },
    {
        "level": "B1",
        "cat": "Arbeit & Beruf",
        "front": "Lamaran pekerjaan",
        "back": "die Bewerbung",
        "example": "Ich habe meine Bewerbung per E-Mail gesendet."
    },
    {
        "level": "B1",
        "cat": "Arbeit & Beruf",
        "front": "Wawancara kerja",
        "back": "das Vorstellungsgespräch",
        "example": "Nächste Woche habe ich ein Vorstellungsgespräch."
    },
    {
        "level": "B1",
        "cat": "Arbeit & Beruf",
        "front": "Kolega / Rekan kerja",
        "back": "der Kollege",
        "example": "Meine Kollegen sind hilfsbereit."
    },
    {
        "level": "B1",
        "cat": "Arbeit & Beruf",
        "front": "Atasan / Bos",
        "back": "der Vorgesetzte",
        "example": "Besprich das mit deinem Vorgesetzten."
    },
    {
        "level": "B1",
        "cat": "Arbeit & Beruf",
        "front": "Gaji bulanan",
        "back": "das Gehalt",
        "example": "Das Gehalt wird am Monatsende überwiesen."
    },
    {
        "level": "B1",
        "cat": "Arbeit & Beruf",
        "front": "Cuti / Libur kerja",
        "back": "der Urlaub",
        "example": "Im August nehme ich drei Wochen Urlaub."
    },
    {
        "level": "B1",
        "cat": "Arbeit & Beruf",
        "front": "Pengalaman kerja",
        "back": "die Berufserfahrung",
        "example": "Für diese Stelle wird Berufserfahrung vorausgesetzt."
    },
    {
        "level": "B1",
        "cat": "Arbeit & Beruf",
        "front": "Rekan kerja",
        "back": "der Mitarbeiter",
        "example": "Die Mitarbeiter sind freundlich."
    },
    {
        "level": "B1",
        "cat": "Arbeit & Beruf",
        "front": "Jam kerja",
        "back": "die Arbeitszeit",
        "example": "Die Arbeitszeit beginnt um 8 Uhr."
    },
    {
        "level": "B1",
        "cat": "Arbeit & Beruf",
        "front": "Lembur",
        "back": "die Überstunden",
        "example": "Er macht viele Überstunden."
    },
    {
        "level": "B1",
        "cat": "Arbeit & Beruf",
        "front": "Cuti sakit",
        "back": "die Krankmeldung",
        "example": "Ich muss eine Krankmeldung abgeben."
    },
    {
        "level": "B1",
        "cat": "Arbeit & Beruf",
        "front": "Kenaikan gaji",
        "back": "die Gehaltserhöhung",
        "example": "Sie hat eine Gehaltserhöhung bekommen."
    },
    {
        "level": "B1",
        "cat": "Arbeit & Beruf",
        "front": "Pelatihan",
        "back": "die Schulung",
        "example": "Die Schulung dauert zwei Tage."
    },
    {
        "level": "B1",
        "cat": "Arbeit & Beruf",
        "front": "Proyek",
        "back": "das Projekt",
        "example": "Das Projekt ist fast fertig."
    },
    {
        "level": "B1",
        "cat": "Arbeit & Beruf",
        "front": "Tenggat waktu",
        "back": "die Frist",
        "example": "Die Frist endet am Freitag."
    },
    {
        "level": "B1",
        "cat": "Arbeit & Beruf",
        "front": "Laporan",
        "back": "der Bericht",
        "example": "Ich schreibe den Bericht heute."
    },
    {
        "level": "B1",
        "cat": "Arbeit & Beruf",
        "front": "Kantor",
        "back": "das Büro",
        "example": "Das Büro ist im dritten Stock."
    },
    {
        "level": "B1",
        "cat": "Arbeit & Beruf",
        "front": "Pengalaman",
        "back": "die Erfahrung",
        "example": "Er hat viel Erfahrung im Beruf."
    },
    {
        "level": "B1",
        "cat": "Arbeit & Beruf",
        "front": "Pendidikan",
        "back": "die Ausbildung",
        "example": "Sie macht eine Ausbildung zur Krankenschwester."
    },
    {
        "level": "B1",
        "cat": "Arbeit & Beruf",
        "front": "Wawancara",
        "back": "das Gespräch",
        "example": "Das Gespräch verlief sehr gut."
    },
    {
        "level": "B1",
        "cat": "Arbeit & Beruf",
        "front": "Gaji",
        "back": "der Lohn",
        "example": "Der Lohn wird pünktlich gezahlt."
    },
    {
        "level": "B1",
        "cat": "Arbeit & Beruf",
        "front": "Perusahaan",
        "back": "das Unternehmen",
        "example": "Das Unternehmen stellt neue Mitarbeiter ein."
    },
    {
        "level": "B1",
        "cat": "Arbeit & Beruf",
        "front": "Karyawan",
        "back": "der Angestellte",
        "example": "Er ist Angestellter bei der Post."
    },
    {
        "level": "B1",
        "cat": "Arbeit & Beruf",
        "front": "Pekerjaan",
        "back": "die Stelle",
        "example": "Die Stelle ist ab sofort frei."
    },
    {
        "level": "B1",
        "cat": "Arbeit & Beruf",
        "front": "Tugas",
        "back": "die Aufgabe",
        "example": "Das ist eine wichtige Aufgabe."
    },
    {
        "level": "B1",
        "cat": "Arbeit & Beruf",
        "front": "Hasil",
        "back": "das Ergebnis",
        "example": "Das Ergebnis der Prüfung ist gut."
    },
    {
        "level": "B1",
        "cat": "Arbeit & Beruf",
        "front": "Rapat",
        "back": "die Besprechung",
        "example": "Die Besprechung beginnt um 9 Uhr."
    },
    {
        "level": "B1",
        "cat": "Arbeit & Beruf",
        "front": "Kontrak",
        "back": "der Vertrag",
        "example": "Der Vertrag wurde unterschrieben."
    },
    {
        "level": "B1",
        "cat": "Arbeit & Beruf",
        "front": "Keputusan",
        "back": "die Entscheidung",
        "example": "Wir müssen eine Entscheidung treffen."
    },
    {
        "level": "B1",
        "cat": "Arbeit & Beruf",
        "front": "Solusi",
        "back": "die Lösung",
        "example": "Wir finden eine gute Lösung."
    },
    {
        "level": "B1",
        "cat": "Arbeit & Beruf",
        "front": "Masalah",
        "back": "das Problem",
        "example": "Das ist kein großes Problem."
    },
    {
        "level": "B1",
        "cat": "Arbeit & Beruf",
        "front": "Informasi",
        "back": "die Information",
        "example": "Ich brauche mehr Information."
    },
    {
        "level": "B1",
        "cat": "Arbeit & Beruf",
        "front": "Nasihat",
        "back": "der Rat",
        "example": "Danke für deinen guten Rat."
    },
    {
        "level": "B1",
        "cat": "Arbeit & Beruf",
        "front": "Bantuan",
        "back": "die Hilfe",
        "example": "Vielen Dank für Ihre Hilfe."
    },
    {
        "level": "B1",
        "cat": "Arbeit & Beruf",
        "front": "Perubahan",
        "back": "die Änderung",
        "example": "Es gibt eine Änderung im Fahrplan."
    },
    {
        "level": "B1",
        "cat": "Arbeit & Beruf",
        "front": "Perkembangan",
        "back": "die Entwicklung",
        "example": "Die Entwicklung verläuft positiv."
    },
    {
        "level": "B1",
        "cat": "Arbeit & Beruf",
        "front": "Wawancara telepon",
        "back": "das Telefoninterview",
        "example": "Das Telefoninterview findet morgen statt."
    },
    {
        "level": "B1",
        "cat": "Arbeit & Beruf",
        "front": "Surat lamaran",
        "back": "das Anschreiben",
        "example": "Das Anschreiben muss fehlerfrei sein."
    },
    {
        "level": "B1",
        "cat": "Arbeit & Beruf",
        "front": "Daftar riwayat hidup",
        "back": "der Lebenslauf",
        "example": "Der Lebenslauf sollte aktuell sein."
    },
    {
        "level": "B1",
        "cat": "Arbeit & Beruf",
        "front": "Kualifikasi",
        "back": "die Qualifikation",
        "example": "Er hat die nötige Qualifikation."
    },
    {
        "level": "B1",
        "cat": "Arbeit & Beruf",
        "front": "Keterampilan",
        "back": "die Fähigkeit",
        "example": "Kommunikation ist eine wichtige Fähigkeit."
    },
    {
        "level": "B1",
        "cat": "Arbeit & Beruf",
        "front": "Tanggung jawab",
        "back": "die Zuständigkeit",
        "example": "Das liegt in meiner Zuständigkeit."
    },
    {
        "level": "B1",
        "cat": "Arbeit & Beruf",
        "front": "Rapat tim",
        "back": "die Teamsitzung",
        "example": "Die Teamsitzung ist um 10 Uhr."
    },
    {
        "level": "B1",
        "cat": "Arbeit & Beruf",
        "front": "Evaluasi",
        "back": "die Bewertung",
        "example": "Die Bewertung fiel positiv aus."
    },
    {
        "level": "B1",
        "cat": "Arbeit & Beruf",
        "front": "Promosi",
        "back": "die Beförderung",
        "example": "Sie hat eine Beförderung erhalten."
    },
    {
        "level": "B1",
        "cat": "Arbeit & Beruf",
        "front": "PHK",
        "back": "die Kündigung",
        "example": "Die Kündigung kam überraschend."
    },
    {
        "level": "B1",
        "cat": "Gesundheit & Körper",
        "front": "Janji temu medis",
        "back": "der Termin",
        "example": "Ich muss beim Zahnarzt einen Termin vereinbaren."
    },
    {
        "level": "B1",
        "cat": "Gesundheit & Körper",
        "front": "Resep dokter",
        "back": "das Rezept",
        "example": "Der Arzt hat mir ein Rezept ausgestellt."
    },
    {
        "level": "B1",
        "cat": "Gesundheit & Körper",
        "front": "Obat-obatan",
        "back": "das Medikament",
        "example": "Nehmen Sie das Medikament dreimal täglich."
    },
    {
        "level": "B1",
        "cat": "Gesundheit & Körper",
        "front": "Asuransi kesehatan",
        "back": "die Krankenversicherung",
        "example": "In Deutschland ist die Krankenversicherung Pflicht."
    },
    {
        "level": "B1",
        "cat": "Gesundheit & Körper",
        "front": "Gejala penyakit",
        "back": "das Symptom",
        "example": "Welche Symptome haben Sie genau?"
    },
    {
        "level": "B1",
        "cat": "Gesundheit & Körper",
        "front": "Sakit kepala",
        "back": "die Kopfschmerzen",
        "example": "Ich habe starke Kopfschmerzen."
    },
    {
        "level": "B1",
        "cat": "Gesundheit & Körper",
        "front": "Demam",
        "back": "das Fieber",
        "example": "Das Kind hat Fieber."
    },
    {
        "level": "B1",
        "cat": "Gesundheit & Körper",
        "front": "Batuk",
        "back": "der Husten",
        "example": "Der Husten wird besser."
    },
    {
        "level": "B1",
        "cat": "Gesundheit & Körper",
        "front": "Pilek",
        "back": "die Erkältung",
        "example": "Ich habe eine Erkältung."
    },
    {
        "level": "B1",
        "cat": "Gesundheit & Körper",
        "front": "Luka",
        "back": "die Wunde",
        "example": "Die Wunde muss verbunden werden."
    },
    {
        "level": "B1",
        "cat": "Gesundheit & Körper",
        "front": "Operasi",
        "back": "die Operation",
        "example": "Die Operation war erfolgreich."
    },
    {
        "level": "B1",
        "cat": "Gesundheit & Körper",
        "front": "Perawatan",
        "back": "die Behandlung",
        "example": "Die Behandlung dauert eine Woche."
    },
    {
        "level": "B1",
        "cat": "Gesundheit & Körper",
        "front": "Dokter gigi",
        "back": "der Zahnarzt",
        "example": "Ich gehe zum Zahnarzt."
    },
    {
        "level": "B1",
        "cat": "Gesundheit & Körper",
        "front": "Perawat",
        "back": "die Krankenschwester",
        "example": "Die Krankenschwester hilft dem Arzt."
    },
    {
        "level": "B1",
        "cat": "Gesundheit & Körper",
        "front": "Tablet",
        "back": "die Tablette",
        "example": "Nehmen Sie eine Tablette nach dem Essen."
    },
    {
        "level": "B1",
        "cat": "Gesundheit & Körper",
        "front": "Suntikan",
        "back": "die Spritze",
        "example": "Der Arzt gibt eine Spritze."
    },
    {
        "level": "B1",
        "cat": "Gesundheit & Körper",
        "front": "Alergi",
        "back": "die Allergie",
        "example": "Ich habe eine Allergie gegen Nüsse."
    },
    {
        "level": "B1",
        "cat": "Gesundheit & Körper",
        "front": "Luka bakar",
        "back": "die Verbrennung",
        "example": "Die Verbrennung ist nicht schlimm."
    },
    {
        "level": "B1",
        "cat": "Gesundheit & Körper",
        "front": "Patah tulang",
        "back": "der Knochenbruch",
        "example": "Der Knochenbruch muss operiert werden."
    },
    {
        "level": "B1",
        "cat": "Gesundheit & Körper",
        "front": "Rontgen",
        "back": "das Röntgen",
        "example": "Das Röntgen zeigt keine Probleme."
    },
    {
        "level": "B1",
        "cat": "Gesundheit & Körper",
        "front": "Tekanan darah",
        "back": "der Blutdruck",
        "example": "Mein Blutdruck ist normal."
    },
    {
        "level": "B1",
        "cat": "Gesundheit & Körper",
        "front": "Berat badan",
        "back": "das Gewicht",
        "example": "Ich möchte mein Gewicht reduzieren."
    },
    {
        "level": "B1",
        "cat": "Gesundheit & Körper",
        "front": "Diet",
        "back": "die Diät",
        "example": "Sie macht eine Diät."
    },
    {
        "level": "B1",
        "cat": "Gesundheit & Körper",
        "front": "Olahraga",
        "back": "der Sport",
        "example": "Sport ist gesund."
    },
    {
        "level": "B1",
        "cat": "Gesundheit & Körper",
        "front": "Tidur nyenyak",
        "back": "der Schlaf",
        "example": "Guter Schlaf ist wichtig."
    },
    {
        "level": "B1",
        "cat": "Bildung & Lernen",
        "front": "Beasiswa",
        "back": "das Stipendium",
        "example": "Sie hat ein Stipendium erhalten."
    },
    {
        "level": "B1",
        "cat": "Bildung & Lernen",
        "front": "Jurusan",
        "back": "das Fach",
        "example": "Mein Fach ist Informatik."
    },
    {
        "level": "B1",
        "cat": "Bildung & Lernen",
        "front": "Semester",
        "back": "das Semester",
        "example": "Das Semester beginnt im Oktober."
    },
    {
        "level": "B1",
        "cat": "Bildung & Lernen",
        "front": "Kuliah",
        "back": "die Vorlesung",
        "example": "Die Vorlesung ist interessant."
    },
    {
        "level": "B1",
        "cat": "Bildung & Lernen",
        "front": "Seminar",
        "back": "das Seminar",
        "example": "Das Seminar findet am Freitag statt."
    },
    {
        "level": "B1",
        "cat": "Bildung & Lernen",
        "front": "Tugas akhir",
        "back": "die Abschlussarbeit",
        "example": "Die Abschlussarbeit ist fast fertig."
    },
    {
        "level": "B1",
        "cat": "Bildung & Lernen",
        "front": "Gelar",
        "back": "der Abschluss",
        "example": "Er hat einen Abschluss in Jura."
    },
    {
        "level": "B1",
        "cat": "Bildung & Lernen",
        "front": "Pelatihan",
        "back": "die Weiterbildung",
        "example": "Weiterbildung ist wichtig."
    },
    {
        "level": "B1",
        "cat": "Bildung & Lernen",
        "front": "Penelitian",
        "back": "die Forschung",
        "example": "Die Forschung macht Fortschritte."
    },
    {
        "level": "B1",
        "cat": "Bildung & Lernen",
        "front": "Karya ilmiah",
        "back": "die wissenschaftliche Arbeit",
        "example": "Die wissenschaftliche Arbeit ist gut."
    },
    {
        "level": "B1",
        "cat": "Reisen & Verkehr",
        "front": "Asuransi perjalanan",
        "back": "die Reiseversicherung",
        "example": "Eine Reiseversicherung ist empfehlenswert."
    },
    {
        "level": "B1",
        "cat": "Reisen & Verkehr",
        "front": "Bagasi",
        "back": "das Gepäck",
        "example": "Mein Gepäck ist zu schwer."
    },
    {
        "level": "B1",
        "cat": "Reisen & Verkehr",
        "front": "Kartu boarding",
        "back": "die Bordkarte",
        "example": "Zeigen Sie bitte Ihre Bordkarte."
    },
    {
        "level": "B1",
        "cat": "Reisen & Verkehr",
        "front": "Pengumuman",
        "back": "die Ansage",
        "example": "Achten Sie auf die Ansage."
    },
    {
        "level": "B1",
        "cat": "Reisen & Verkehr",
        "front": "Keterlambatan",
        "back": "die Verzögerung",
        "example": "Es gibt eine Verzögerung von 30 Minuten."
    },
    {
        "level": "B1",
        "cat": "Reisen & Verkehr",
        "front": "Perbatasan",
        "back": "die Grenze",
        "example": "Wir überqueren die Grenze."
    },
    {
        "level": "B1",
        "cat": "Reisen & Verkehr",
        "front": "Bea cukai",
        "back": "der Zoll",
        "example": "Der Zoll kontrolliert das Gepäck."
    },
    {
        "level": "B1",
        "cat": "Reisen & Verkehr",
        "front": "Peron",
        "back": "der Bahnsteig",
        "example": "Der Zug fährt von Bahnsteig 3."
    },
    {
        "level": "B1",
        "cat": "Reisen & Verkehr",
        "front": "Pintu keluar",
        "back": "der Ausgang",
        "example": "Der Ausgang ist links."
    },
    {
        "level": "B1",
        "cat": "Reisen & Verkehr",
        "front": "Pintu masuk",
        "back": "der Eingang",
        "example": "Der Eingang ist rechts."
    },
    {
        "level": "B1",
        "cat": "Reisen & Verkehr",
        "front": "Kiri",
        "back": "links",
        "example": "Gehen Sie nach links."
    },
    {
        "level": "B1",
        "cat": "Reisen & Verkehr",
        "front": "Kanan",
        "back": "rechts",
        "example": "Das Hotel ist rechts."
    },
    {
        "level": "B1",
        "cat": "Reisen & Verkehr",
        "front": "Lurus",
        "back": "geradeaus",
        "example": "Gehen Sie geradeaus."
    },
    {
        "level": "B1",
        "cat": "Reisen & Verkehr",
        "front": "Dekat",
        "back": "in der Nähe",
        "example": "Der Bahnhof ist in der Nähe."
    },
    {
        "level": "B1",
        "cat": "Reisen & Verkehr",
        "front": "Jauh",
        "back": "weit",
        "example": "Der Flughafen ist weit weg."
    },
    {
        "level": "B1",
        "cat": "Reisen & Verkehr",
        "front": "Kereta cepat",
        "back": "der Schnellzug",
        "example": "Der Schnellzug fährt in 2 Stunden."
    },
    {
        "level": "B1",
        "cat": "Reisen & Verkehr",
        "front": "Kereta api",
        "back": "die Eisenbahn",
        "example": "Die Eisenbahn ist ein sicheres Verkehrsmittel."
    },
    {
        "level": "B1",
        "cat": "Reisen & Verkehr",
        "front": "Penerbangan",
        "back": "der Flug",
        "example": "Der Flug dauert 3 Stunden."
    },
    {
        "level": "B1",
        "cat": "Reisen & Verkehr",
        "front": "Terminal",
        "back": "das Terminal",
        "example": "Das Terminal 2 ist modern."
    },
    {
        "level": "B1",
        "cat": "Reisen & Verkehr",
        "front": "Penginapan",
        "back": "die Unterkunft",
        "example": "Die Unterkunft ist günstig."
    },
    {
        "level": "B1",
        "cat": "Reisen & Verkehr",
        "front": "Hostel",
        "back": "die Jugendherberge",
        "example": "Die Jugendherberge ist sauber."
    },
    {
        "level": "B1",
        "cat": "Reisen & Verkehr",
        "front": "Pemandangan",
        "back": "die Sehenswürdigkeit",
        "example": "Der Dom ist eine Sehenswürdigkeit."
    },
    {
        "level": "B1",
        "cat": "Medien & Technik",
        "front": "Unggahan",
        "back": "der Beitrag",
        "example": "Der Beitrag hat viele Likes."
    },
    {
        "level": "B1",
        "cat": "Medien & Technik",
        "front": "Komentar",
        "back": "der Kommentar",
        "example": "Schreib einen Kommentar!"
    },
    {
        "level": "B1",
        "cat": "Medien & Technik",
        "front": "Koneksi",
        "back": "die Verbindung",
        "example": "Die Verbindung ist schlecht."
    },
    {
        "level": "B1",
        "cat": "Medien & Technik",
        "front": "Berita",
        "back": "die Nachrichten",
        "example": "Ich sehe jeden Abend die Nachrichten."
    },
    {
        "level": "B1",
        "cat": "Medien & Technik",
        "front": "Iklan",
        "back": "die Werbung",
        "example": "Die Werbung ist überall."
    },
    {
        "level": "B1",
        "cat": "Medien & Technik",
        "front": "Media sosial",
        "back": "die sozialen Medien",
        "example": "Jugendliche nutzen soziale Medien."
    },
    {
        "level": "B1",
        "cat": "Medien & Technik",
        "front": "Kebebasan pers",
        "back": "die Pressefreiheit",
        "example": "Die Pressefreiheit ist wichtig."
    },
    {
        "level": "B1",
        "cat": "Medien & Technik",
        "front": "Diskusi",
        "back": "die Diskussion",
        "example": "Die Diskussion war interessant."
    },
    {
        "level": "B1",
        "cat": "Medien & Technik",
        "front": "Debat",
        "back": "die Debatte",
        "example": "Die Debatte war hitzig."
    },
    {
        "level": "B1",
        "cat": "Medien & Technik",
        "front": "Prasangka",
        "back": "das Vorurteil",
        "example": "Vorurteile führen oft zu Konflikten."
    },
    {
        "level": "B1",
        "cat": "Medien & Technik",
        "front": "Toleransi",
        "back": "die Toleranz",
        "example": "Toleranz ist wichtig."
    },
    {
        "level": "B1",
        "cat": "Medien & Technik",
        "front": "Integrasi",
        "back": "die Integration",
        "example": "Die Integration von Migranten ist eine Aufgabe."
    },
    {
        "level": "B1",
        "cat": "Wirtschaft & Finanzen",
        "front": "Pajak",
        "back": "die Steuer",
        "example": "Er zahlt Steuern."
    },
    {
        "level": "B1",
        "cat": "Wirtschaft & Finanzen",
        "front": "Bank",
        "back": "die Bank",
        "example": "Ich gehe zur Bank."
    },
    {
        "level": "B1",
        "cat": "Wirtschaft & Finanzen",
        "front": "Rekening bank",
        "back": "das Bankkonto",
        "example": "Ich habe ein Bankkonto in Deutschland."
    },
    {
        "level": "B1",
        "cat": "Wirtschaft & Finanzen",
        "front": "Transfer",
        "back": "die Überweisung",
        "example": "Die Überweisung dauert zwei Tage."
    },
    {
        "level": "B1",
        "cat": "Wirtschaft & Finanzen",
        "front": "Pinjaman",
        "back": "der Kredit",
        "example": "Sie nimmt einen Kredit für das Haus auf."
    },
    {
        "level": "B1",
        "cat": "Wirtschaft & Finanzen",
        "front": "Bunga",
        "back": "die Zinsen",
        "example": "Die Zinsen sind zurzeit niedrig."
    },
    {
        "level": "B1",
        "cat": "Wirtschaft & Finanzen",
        "front": "Inflasi",
        "back": "die Inflation",
        "example": "Die Inflation steigt."
    },
    {
        "level": "B1",
        "cat": "Wirtschaft & Finanzen",
        "front": "Krisis ekonomi",
        "back": "die Wirtschaftskrise",
        "example": "Die Wirtschaftskrise traf viele Firmen."
    },
    {
        "level": "B1",
        "cat": "Wirtschaft & Finanzen",
        "front": "Pertumbuhan",
        "back": "das Wachstum",
        "example": "Das Wirtschaftswachstum ist stabil."
    },
    {
        "level": "B1",
        "cat": "Wirtschaft & Finanzen",
        "front": "Karyawan tetap",
        "back": "der Festangestellte",
        "example": "Er ist Festangestellter bei einer Bank."
    },
    {
        "level": "B1",
        "cat": "Wirtschaft & Finanzen",
        "front": "Pensiun",
        "back": "die Rente",
        "example": "Er geht nächstes Jahr in Rente."
    },
    {
        "level": "B1",
        "cat": "Wirtschaft & Finanzen",
        "front": "Asuransi",
        "back": "die Versicherung",
        "example": "Die Versicherung deckt den Schaden."
    },
    {
        "level": "B1",
        "cat": "Wirtschaft & Finanzen",
        "front": "Uang",
        "back": "das Geld",
        "example": "Ich habe kein Geld dabei."
    },
    {
        "level": "B1",
        "cat": "Wirtschaft & Finanzen",
        "front": "Koin",
        "back": "die Münze",
        "example": "Die Münze ist aus Silber."
    },
    {
        "level": "B1",
        "cat": "Wirtschaft & Finanzen",
        "front": "Uang kertas",
        "back": "der Geldschein",
        "example": "Der Geldschein ist gefälscht."
    },
    {
        "level": "B1",
        "cat": "Wirtschaft & Finanzen",
        "front": "Hutang",
        "back": "die Schulden",
        "example": "Er hat viele Schulden."
    },
    {
        "level": "B1",
        "cat": "Wirtschaft & Finanzen",
        "front": "Tabungan",
        "back": "die Ersparnisse",
        "example": "Meine Ersparnisse sind für den Urlaub."
    },
    {
        "level": "B1",
        "cat": "Wirtschaft & Finanzen",
        "front": "Investasi",
        "back": "die Investition",
        "example": "Das ist eine gute Investition."
    },
    {
        "level": "B1",
        "cat": "Gesellschaft & Umwelt",
        "front": "Lingkungan",
        "back": "die Umwelt",
        "example": "Wir müssen die Umwelt schützen."
    },
    {
        "level": "B1",
        "cat": "Gesellschaft & Umwelt",
        "front": "Iklim",
        "back": "das Klima",
        "example": "Das Klima verändert sich."
    },
    {
        "level": "B1",
        "cat": "Gesellschaft & Umwelt",
        "front": "Sampah",
        "back": "der Müll",
        "example": "Bitte trennen Sie den Müll."
    },
    {
        "level": "B1",
        "cat": "Gesellschaft & Umwelt",
        "front": "Energi",
        "back": "die Energie",
        "example": "Solarenergie ist umweltfreundlich."
    },
    {
        "level": "B1",
        "cat": "Gesellschaft & Umwelt",
        "front": "Hutan",
        "back": "der Wald",
        "example": "Wir gehen im Wald spazieren."
    },
    {
        "level": "B1",
        "cat": "Gesellschaft & Umwelt",
        "front": "Sungai",
        "back": "der Fluss",
        "example": "Der Fluss ist sauber."
    },
    {
        "level": "B1",
        "cat": "Gesellschaft & Umwelt",
        "front": "Laut",
        "back": "das Meer",
        "example": "Das Meer ist tief."
    },
    {
        "level": "B1",
        "cat": "Gesellschaft & Umwelt",
        "front": "Gunung",
        "back": "der Berg",
        "example": "Der Berg ist hoch."
    },
    {
        "level": "B1",
        "cat": "Gesellschaft & Umwelt",
        "front": "Danau",
        "back": "der See",
        "example": "Der See ist ruhig."
    },
    {
        "level": "B1",
        "cat": "Gesellschaft & Umwelt",
        "front": "Pulau",
        "back": "die Insel",
        "example": "Die Insel ist klein."
    },
    {
        "level": "B1",
        "cat": "Gesellschaft & Umwelt",
        "front": "Pantai",
        "back": "der Strand",
        "example": "Der Strand ist schön."
    },
    {
        "level": "B1",
        "cat": "Gesellschaft & Umwelt",
        "front": "Tumbuhan",
        "back": "die Pflanze",
        "example": "Die Pflanze braucht Wasser."
    },
    {
        "level": "B1",
        "cat": "Gesellschaft & Umwelt",
        "front": "Hewan",
        "back": "das Tier",
        "example": "Das Tier ist im Zoo."
    },
    {
        "level": "B1",
        "cat": "Gesellschaft & Umwelt",
        "front": "Burung",
        "back": "der Vogel",
        "example": "Der Vogel singt."
    },
    {
        "level": "B1",
        "cat": "Gesellschaft & Umwelt",
        "front": "Anjing",
        "back": "der Hund",
        "example": "Der Hund bellt."
    },
    {
        "level": "B1",
        "cat": "Gesellschaft & Umwelt",
        "front": "Kucing",
        "back": "die Katze",
        "example": "Die Katze schläft."
    },
    {
        "level": "B1",
        "cat": "Gesellschaft & Umwelt",
        "front": "Kuda",
        "back": "das Pferd",
        "example": "Das Pferd läuft schnell."
    },
    {
        "level": "B1",
        "cat": "Gesellschaft & Umwelt",
        "front": "Sapi",
        "back": "die Kuh",
        "example": "Die Kuh gibt Milch."
    },
    {
        "level": "B1",
        "cat": "Gesellschaft & Umwelt",
        "front": "Babi",
        "back": "das Schwein",
        "example": "Das Schwein ist dick."
    },
    {
        "level": "B1",
        "cat": "Gesellschaft & Umwelt",
        "front": "Ayam",
        "back": "das Huhn",
        "example": "Das Huhn legt Eier."
    },
    {
        "level": "B1",
        "cat": "Alltag & Begrüßung",
        "front": "Berjanji",
        "back": "versprechen",
        "example": "Ich verspreche es dir."
    },
    {
        "level": "B1",
        "cat": "Alltag & Begrüßung",
        "front": "Menikah",
        "back": "heiraten",
        "example": "Sie heiraten im Sommer."
    },
    {
        "level": "B1",
        "cat": "Alltag & Begrüßung",
        "front": "Bercerai",
        "back": "sich scheiden lassen",
        "example": "Sie lassen sich scheiden."
    },
    {
        "level": "B1",
        "cat": "Alltag & Begrüßung",
        "front": "Lahir",
        "back": "geboren werden",
        "example": "Ich bin in Jakarta geboren."
    },
    {
        "level": "B1",
        "cat": "Alltag & Begrüßung",
        "front": "Meninggal",
        "back": "sterben",
        "example": "Er ist letztes Jahr gestorben."
    },
    {
        "level": "B1",
        "cat": "Alltag & Begrüßung",
        "front": "Pindah",
        "back": "umziehen",
        "example": "Wir ziehen nächsten Monat um."
    },
    {
        "level": "B1",
        "cat": "Alltag & Begrüßung",
        "front": "Bertengkar",
        "back": "streiten",
        "example": "Die Kinder streiten sich."
    },
    {
        "level": "B1",
        "cat": "Alltag & Begrüßung",
        "front": "Berbaikan",
        "back": "sich versöhnen",
        "example": "Sie versöhnen sich wieder."
    },
    {
        "level": "B1",
        "cat": "Verben",
        "front": "Menyarankan",
        "back": "vorschlagen",
        "example": "Ich schlage vor, wir gehen ins Kino."
    },
    {
        "level": "B1",
        "cat": "Verben",
        "front": "Menyetujui",
        "back": "zustimmen",
        "example": "Ich stimme dem Plan zu."
    },
    {
        "level": "B1",
        "cat": "Verben",
        "front": "Menolak",
        "back": "ablehnen",
        "example": "Der Antrag wurde abgelehnt."
    },
    {
        "level": "B1",
        "cat": "Verben",
        "front": "Membantah",
        "back": "widersprechen",
        "example": "Ich muss Ihnen widersprechen."
    },
    {
        "level": "B1",
        "cat": "Verben",
        "front": "Membenarkan",
        "back": "rechtfertigen",
        "example": "Er versucht, sein Verhalten zu rechtfertigen."
    },
    {
        "level": "B1",
        "cat": "Verben",
        "front": "Mengklarifikasi",
        "back": "klarstellen",
        "example": "Ich möchte das klarstellen."
    },
    {
        "level": "B1",
        "cat": "Verben",
        "front": "Menekankan",
        "back": "betonen",
        "example": "Ich möchte betonen, dass das wichtig ist."
    },
    {
        "level": "B1",
        "cat": "Verben",
        "front": "Merangkum",
        "back": "zusammenfassen",
        "example": "Fassen Sie die Ergebnisse zusammen."
    },
    {
        "level": "B1",
        "cat": "Verben",
        "front": "Menyimpulkan",
        "back": "folgern",
        "example": "Daraus folgern wir, dass er recht hat."
    },
    {
        "level": "B1",
        "cat": "Verben",
        "front": "Menganalisis",
        "back": "analysieren",
        "example": "Wir analysieren die Daten."
    },
    {
        "level": "B1",
        "cat": "Verben",
        "front": "Menggambarkan",
        "back": "beschreiben",
        "example": "Beschreiben Sie das Bild."
    },
    {
        "level": "B1",
        "cat": "Verben",
        "front": "Menyampaikan",
        "back": "übermitteln",
        "example": "Bitte übermitteln Sie die Daten."
    },
    {
        "level": "B1",
        "cat": "Verben",
        "front": "Menyelesaikan",
        "back": "erledigen",
        "example": "Ich erledige die Aufgabe heute."
    },
    {
        "level": "B1",
        "cat": "Verben",
        "front": "Mengorganisieren",
        "back": "organisieren",
        "example": "Sie organisiert die Party."
    },
    {
        "level": "B1",
        "cat": "Verben",
        "front": "Mengatur",
        "back": "regeln",
        "example": "Wir müssen das regeln."
    },
    {
        "level": "B1",
        "cat": "Verben",
        "front": "Mengembangkan",
        "back": "entwickeln",
        "example": "Das Unternehmen entwickelt neue Produkte."
    },
    {
        "level": "B1",
        "cat": "Verben",
        "front": "Meningkatkan",
        "back": "verbessern",
        "example": "Ich möchte mein Deutsch verbessern."
    },
    {
        "level": "B1",
        "cat": "Verben",
        "front": "Mengurangi",
        "back": "reduzieren",
        "example": "Wir müssen die Kosten reduzieren."
    },
    {
        "level": "B1",
        "cat": "Verben",
        "front": "Menambah",
        "back": "erhöhen",
        "example": "Die Preise wurden erhöht."
    },
    {
        "level": "B1",
        "cat": "Verben",
        "front": "Mengubah",
        "back": "verändern",
        "example": "Die Digitalisierung verändert die Arbeitswelt."
    },
    {
        "level": "B1",
        "cat": "Adjektive & Adverbien",
        "front": "Penting",
        "back": "wichtig",
        "example": "Das ist eine wichtige Information."
    },
    {
        "level": "B1",
        "cat": "Adjektive & Adverbien",
        "front": "Menarik",
        "back": "interessant",
        "example": "Das Buch ist interessant."
    },
    {
        "level": "B1",
        "cat": "Adjektive & Adverbien",
        "front": "Membosankan",
        "back": "langweilig",
        "example": "Der Film war langweilig."
    },
    {
        "level": "B1",
        "cat": "Adjektive & Adverbien",
        "front": "Menyenangkan",
        "back": "angenehm",
        "example": "Das Wetter ist angenehm."
    },
    {
        "level": "B1",
        "cat": "Adjektive & Adverbien",
        "front": "Tidak menyenangkan",
        "back": "unangenehm",
        "example": "Die Situation ist unangenehm."
    },
    {
        "level": "B1",
        "cat": "Adjektive & Adverbien",
        "front": "Berbahaya",
        "back": "gefährlich",
        "example": "Rauchen ist gefährlich."
    },
    {
        "level": "B1",
        "cat": "Adjektive & Adverbien",
        "front": "Aman",
        "back": "sicher",
        "example": "Das Auto ist sicher."
    },
    {
        "level": "B1",
        "cat": "Adjektive & Adverbien",
        "front": "Mungkin",
        "back": "möglich",
        "example": "Das ist möglich."
    },
    {
        "level": "B1",
        "cat": "Adjektive & Adverbien",
        "front": "Tidak mungkin",
        "back": "unmöglich",
        "example": "Das ist unmöglich."
    },
    {
        "level": "B1",
        "cat": "Adjektive & Adverbien",
        "front": "Perlu",
        "back": "nötig",
        "example": "Das ist nicht nötig."
    },
    {
        "level": "B1",
        "cat": "Adjektive & Adverbien",
        "front": "Berguna",
        "back": "nützlich",
        "example": "Diese App ist nützlich."
    },
    {
        "level": "B1",
        "cat": "Adjektive & Adverbien",
        "front": "Tidak berguna",
        "back": "nutzlos",
        "example": "Das ist nutzlos."
    },
    {
        "level": "B1",
        "cat": "Adjektive & Adverbien",
        "front": "Akurat",
        "back": "genau",
        "example": "Die Antwort ist genau."
    },
    {
        "level": "B1",
        "cat": "Adjektive & Adverbien",
        "front": "Cukup",
        "back": "ausreichend",
        "example": "Das ist ausreichend."
    },
    {
        "level": "B1",
        "cat": "Adjektive & Adverbien",
        "front": "Berhasil",
        "back": "erfolgreich",
        "example": "Das Projekt war erfolgreich."
    },
    {
        "level": "B1",
        "cat": "Adjektive & Adverbien",
        "front": "Gagal",
        "back": "gescheitert",
        "example": "Der Versuch ist gescheitert."
    },
    {
        "level": "B1",
        "cat": "Adjektive & Adverbien",
        "front": "Umum",
        "back": "üblich",
        "example": "Das ist üblich in Deutschland."
    },
    {
        "level": "B1",
        "cat": "Adjektive & Adverbien",
        "front": "Khusus",
        "back": "besonders",
        "example": "Das ist ein besonders Fall."
    },
    {
        "level": "B1",
        "cat": "Adjektive & Adverbien",
        "front": "Biasa",
        "back": "normal",
        "example": "Das ist ganz normal."
    },
    {
        "level": "B1",
        "cat": "Adjektive & Adverbien",
        "front": "Aneh",
        "back": "seltsam",
        "example": "Das ist seltsam."
    },
    {
        "level": "B2",
        "cat": "Gesellschaft & Medien",
        "front": "Tanggung jawab / Kewajiban",
        "back": "die Verantwortung",
        "example": "Als Projektleiter trage ich die volle Verantwortung."
    },
    {
        "level": "B2",
        "cat": "Gesellschaft & Medien",
        "front": "Pengaruh / Dampak",
        "back": "der Einfluss",
        "example": "Soziale Medien haben großen Einfluss auf Jugendliche."
    },
    {
        "level": "B2",
        "cat": "Gesellschaft & Medien",
        "front": "Tantangan",
        "back": "die Herausforderung",
        "example": "Die Digitalisierung ist eine große Herausforderung."
    },
    {
        "level": "B2",
        "cat": "Gesellschaft & Medien",
        "front": "Peluang / Kesempatan",
        "back": "die Gelegenheit",
        "example": "Man sollte jede Gelegenheit nutzen."
    },
    {
        "level": "B2",
        "cat": "Gesellschaft & Medien",
        "front": "Kritik / Tanggapan",
        "back": "die Kritik",
        "example": "Konstruktive Kritik hilft uns, besser zu werden."
    },
    {
        "level": "B2",
        "cat": "Gesellschaft & Medien",
        "front": "Persyaratan / Syarat",
        "back": "die Voraussetzung",
        "example": "Fließendes Deutsch ist eine Voraussetzung."
    },
    {
        "level": "B2",
        "cat": "Gesellschaft & Medien",
        "front": "Meningkatkan / Mengembangkan",
        "back": "verbessern",
        "example": "Durch tägliches Üben kann man seinen Wortschatz verbessern."
    },
    {
        "level": "B2",
        "cat": "Gesellschaft & Medien",
        "front": "Mencapai tujuan",
        "back": "ein Ziel erreichen",
        "example": "Mit viel Fleiß werden Sie Ihr Ziel erreichen."
    },
    {
        "level": "B2",
        "cat": "Gesellschaft & Medien",
        "front": "Hubungan",
        "back": "die Beziehung",
        "example": "Gute Beziehungen sind wichtig."
    },
    {
        "level": "B2",
        "cat": "Gesellschaft & Medien",
        "front": "Keadaan",
        "back": "der Zustand",
        "example": "Das Gebäude ist in gutem Zustand."
    },
    {
        "level": "B2",
        "cat": "Gesellschaft & Medien",
        "front": "Kemungkinan",
        "back": "die Möglichkeit",
        "example": "Es gibt viele Möglichkeiten."
    },
    {
        "level": "B2",
        "cat": "Gesellschaft & Medien",
        "front": "Peran",
        "back": "die Rolle",
        "example": "Sie spielt eine wichtige Rolle."
    },
    {
        "level": "B2",
        "cat": "Gesellschaft & Medien",
        "front": "Masyarakat",
        "back": "die Gesellschaft",
        "example": "Die Gesellschaft verändert sich."
    },
    {
        "level": "B2",
        "cat": "Gesellschaft & Medien",
        "front": "Pendapat",
        "back": "die Meinung",
        "example": "Was ist deine Meinung dazu?"
    },
    {
        "level": "B2",
        "cat": "Gesellschaft & Medien",
        "front": "Alasan",
        "back": "der Grund",
        "example": "Aus welchem Grund sind Sie hier?"
    },
    {
        "level": "B2",
        "cat": "Gesellschaft & Medien",
        "front": "Tujuan",
        "back": "die Absicht",
        "example": "Ich hatte keine böse Absicht."
    },
    {
        "level": "B2",
        "cat": "Gesellschaft & Medien",
        "front": "Partisipasi",
        "back": "die Teilnahme",
        "example": "Die Teilnahme an der Wahl ist freiwillig."
    },
    {
        "level": "B2",
        "cat": "Gesellschaft & Medien",
        "front": "Demokrasi",
        "back": "die Demokratie",
        "example": "Die Demokratie lebt von Beteiligung."
    },
    {
        "level": "B2",
        "cat": "Gesellschaft & Medien",
        "front": "Hak asasi manusia",
        "back": "die Menschenrechte",
        "example": "Die Menschenrechte sind unveräußerlich."
    },
    {
        "level": "B2",
        "cat": "Gesellschaft & Medien",
        "front": "Kebebasan",
        "back": "die Freiheit",
        "example": "Freiheit ist ein hohes Gut."
    },
    {
        "level": "B2",
        "cat": "Wirtschaft & Finanzen",
        "front": "Keuangan",
        "back": "die Finanzen",
        "example": "Er verwaltet die Finanzen."
    },
    {
        "level": "B2",
        "cat": "Wirtschaft & Finanzen",
        "front": "Anggaran",
        "back": "das Budget",
        "example": "Das Budget ist knapp."
    },
    {
        "level": "B2",
        "cat": "Wirtschaft & Finanzen",
        "front": "Keuntungan",
        "back": "der Gewinn",
        "example": "Der Gewinn steigt."
    },
    {
        "level": "B2",
        "cat": "Wirtschaft & Finanzen",
        "front": "Kerugian",
        "back": "der Verlust",
        "example": "Der Verlust ist gering."
    },
    {
        "level": "B2",
        "cat": "Wirtschaft & Finanzen",
        "front": "Saham",
        "back": "die Aktie",
        "example": "Die Aktie steigt im Wert."
    },
    {
        "level": "B2",
        "cat": "Wirtschaft & Finanzen",
        "front": "Modal",
        "back": "das Kapital",
        "example": "Das Kapital reicht aus."
    },
    {
        "level": "B2",
        "cat": "Wirtschaft & Finanzen",
        "front": "Laba",
        "back": "der Erlös",
        "example": "Der Erlös kommt einem guten Zweck zugute."
    },
    {
        "level": "B2",
        "cat": "Wirtschaft & Finanzen",
        "front": "Neraca",
        "back": "die Bilanz",
        "example": "Die Bilanz ist positiv."
    },
    {
        "level": "B2",
        "cat": "Wirtschaft & Finanzen",
        "front": "Pasokan",
        "back": "das Angebot",
        "example": "Das Angebot ist groß."
    },
    {
        "level": "B2",
        "cat": "Wirtschaft & Finanzen",
        "front": "Permintaan",
        "back": "die Nachfrage",
        "example": "Die Nachfrage ist hoch."
    },
    {
        "level": "B2",
        "cat": "Wirtschaft & Finanzen",
        "front": "Persaingan",
        "back": "der Wettbewerb",
        "example": "Der Wettbewerb ist hart."
    },
    {
        "level": "B2",
        "cat": "Wirtschaft & Finanzen",
        "front": "Kemitraan",
        "back": "die Partnerschaft",
        "example": "Die Partnerschaft ist erfolgreich."
    },
    {
        "level": "B2",
        "cat": "Wirtschaft & Finanzen",
        "front": "Pemegang saham",
        "back": "der Aktionär",
        "example": "Die Aktionäre sind zufrieden."
    },
    {
        "level": "B2",
        "cat": "Wirtschaft & Finanzen",
        "front": "Manajemen",
        "back": "die Geschäftsführung",
        "example": "Die Geschäftsführung hat entschieden."
    },
    {
        "level": "B2",
        "cat": "Wirtschaft & Finanzen",
        "front": "Karyawan",
        "back": "der Beschäftigte",
        "example": "Die Beschäftigten streiken."
    },
    {
        "level": "B2",
        "cat": "Wirtschaft & Finanzen",
        "front": "Serikat pekerja",
        "back": "die Gewerkschaft",
        "example": "Die Gewerkschaft fordert höhere Löhne."
    },
    {
        "level": "B2",
        "cat": "Arbeit & Beruf",
        "front": "Kinerja",
        "back": "die Leistung",
        "example": "Seine Leistung ist gut."
    },
    {
        "level": "B2",
        "cat": "Arbeit & Beruf",
        "front": "Motivasi",
        "back": "die Motivation",
        "example": "Die Motivation ist hoch."
    },
    {
        "level": "B2",
        "cat": "Arbeit & Beruf",
        "front": "Kerja sama",
        "back": "die Zusammenarbeit",
        "example": "Die Zusammenarbeit läuft gut."
    },
    {
        "level": "B2",
        "cat": "Arbeit & Beruf",
        "front": "Konflik",
        "back": "der Konflikt",
        "example": "Der Konflikt muss gelöst werden."
    },
    {
        "level": "B2",
        "cat": "Arbeit & Beruf",
        "front": "Negosiasi",
        "back": "die Verhandlung",
        "example": "Die Verhandlung war erfolgreich."
    },
    {
        "level": "B2",
        "cat": "Arbeit & Beruf",
        "front": "Presentasi",
        "back": "die Präsentation",
        "example": "Die Präsentation dauert 20 Minuten."
    },
    {
        "level": "B2",
        "cat": "Arbeit & Beruf",
        "front": "Laporan tahunan",
        "back": "der Jahresbericht",
        "example": "Der Jahresbericht ist fertig."
    },
    {
        "level": "B2",
        "cat": "Arbeit & Beruf",
        "front": "Strategi",
        "back": "die Strategie",
        "example": "Die Strategie muss angepasst werden."
    },
    {
        "level": "B2",
        "cat": "Arbeit & Beruf",
        "front": "Visi",
        "back": "die Vision",
        "example": "Die Vision des Unternehmens ist klar."
    },
    {
        "level": "B2",
        "cat": "Arbeit & Beruf",
        "front": "Misi",
        "back": "die Mission",
        "example": "Die Mission ist es, Kunden zu helfen."
    },
    {
        "level": "B2",
        "cat": "Kultur & Gesellschaft",
        "front": "Tradisi",
        "back": "die Tradition",
        "example": "Diese Tradition ist sehr alt."
    },
    {
        "level": "B2",
        "cat": "Kultur & Gesellschaft",
        "front": "Adat istiadat",
        "back": "die Sitte",
        "example": "Jedes Land hat eigene Sitten."
    },
    {
        "level": "B2",
        "cat": "Kultur & Gesellschaft",
        "front": "Budaya",
        "back": "die Kultur",
        "example": "Die deutsche Kultur ist vielfältig."
    },
    {
        "level": "B2",
        "cat": "Kultur & Gesellschaft",
        "front": "Identitas",
        "back": "die Identität",
        "example": "Sprache ist Teil der Identität."
    },
    {
        "level": "B2",
        "cat": "Kultur & Gesellschaft",
        "front": "Agama",
        "back": "die Religion",
        "example": "Religion spielt für viele Menschen eine Rolle."
    },
    {
        "level": "B2",
        "cat": "Kultur & Gesellschaft",
        "front": "Bahasa ibu",
        "back": "die Muttersprache",
        "example": "Meine Muttersprache ist Indonesisch."
    },
    {
        "level": "B2",
        "cat": "Kultur & Gesellschaft",
        "front": "Budaya pop",
        "back": "die Popkultur",
        "example": "Popkultur beeinflusst die Jugend."
    },
    {
        "level": "B2",
        "cat": "Kultur & Gesellschaft",
        "front": "Pameran seni",
        "back": "die Kunstausstellung",
        "example": "Die Kunstausstellung war beeindruckend."
    },
    {
        "level": "B2",
        "cat": "Kultur & Gesellschaft",
        "front": "Sastra",
        "back": "die Literatur",
        "example": "Die deutsche Literatur ist reich."
    },
    {
        "level": "B2",
        "cat": "Kultur & Gesellschaft",
        "front": "Festival",
        "back": "das Festival",
        "example": "Das Festival findet im Sommer statt."
    },
    {
        "level": "B2",
        "cat": "Kultur & Gesellschaft",
        "front": "Pesta",
        "back": "die Feier",
        "example": "Die Feier war schön."
    },
    {
        "level": "B2",
        "cat": "Kultur & Gesellschaft",
        "front": "Pernikahan",
        "back": "die Hochzeit",
        "example": "Die Hochzeit findet im Mai statt."
    },
    {
        "level": "B2",
        "cat": "Kultur & Gesellschaft",
        "front": "Ulang tahun",
        "back": "der Geburtstag",
        "example": "Herzlichen Glückwunsch zum Geburtstag!"
    },
    {
        "level": "B2",
        "cat": "Kultur & Gesellschaft",
        "front": "Natal",
        "back": "Weihnachten",
        "example": "Weihnachten feiern wir mit der Familie."
    },
    {
        "level": "B2",
        "cat": "Kultur & Gesellschaft",
        "front": "Tahun baru",
        "back": "Silvester",
        "example": "Silvester feiern wir mit Freunden."
    },
    {
        "level": "B2",
        "cat": "Kultur & Gesellschaft",
        "front": "Paskah",
        "back": "Ostern",
        "example": "Ostern ist im Frühling."
    },
    {
        "level": "B2",
        "cat": "Kultur & Gesellschaft",
        "front": "Karnaval",
        "back": "der Karneval",
        "example": "Der Karneval ist in Köln berühmt."
    },
    {
        "level": "B2",
        "cat": "Kultur & Gesellschaft",
        "front": "Pameran",
        "back": "die Messe",
        "example": "Die Messe findet jährlich statt."
    },
    {
        "level": "B2",
        "cat": "Kultur & Gesellschaft",
        "front": "Pertunjukan",
        "back": "die Aufführung",
        "example": "Die Aufführung war fantastisch."
    },
    {
        "level": "B2",
        "cat": "Umwelt & Nachhaltigkeit",
        "front": "Keberlanjutan",
        "back": "die Nachhaltigkeit",
        "example": "Nachhaltigkeit ist ein zentrales Thema."
    },
    {
        "level": "B2",
        "cat": "Umwelt & Nachhaltigkeit",
        "front": "Perubahan iklim",
        "back": "der Klimawandel",
        "example": "Der Klimawandel bedroht die Küstenregionen."
    },
    {
        "level": "B2",
        "cat": "Umwelt & Nachhaltigkeit",
        "front": "Emisi",
        "back": "die Emission",
        "example": "Die Emissionen müssen reduziert werden."
    },
    {
        "level": "B2",
        "cat": "Umwelt & Nachhaltigkeit",
        "front": "Energi terbarukan",
        "back": "die erneuerbare Energie",
        "example": "Erneuerbare Energien gewinnen an Bedeutung."
    },
    {
        "level": "B2",
        "cat": "Umwelt & Nachhaltigkeit",
        "front": "Daur ulang",
        "back": "das Recycling",
        "example": "Recycling schont Ressourcen."
    },
    {
        "level": "B2",
        "cat": "Umwelt & Nachhaltigkeit",
        "front": "Polusi",
        "back": "die Verschmutzung",
        "example": "Die Luftverschmutzung nimmt zu."
    },
    {
        "level": "B2",
        "cat": "Umwelt & Nachhaltigkeit",
        "front": "Konservasi",
        "back": "der Naturschutz",
        "example": "Naturschutz ist eine gesellschaftliche Aufgabe."
    },
    {
        "level": "B2",
        "cat": "Umwelt & Nachhaltigkeit",
        "front": "Sumber daya",
        "back": "die Ressource",
        "example": "Wasser ist eine wertvolle Ressource."
    },
    {
        "level": "B2",
        "cat": "Umwelt & Nachhaltigkeit",
        "front": "Ekosistem",
        "back": "das Ökosystem",
        "example": "Das Ökosystem ist empfindlich."
    },
    {
        "level": "B2",
        "cat": "Umwelt & Nachhaltigkeit",
        "front": "Jejak karbon",
        "back": "der CO2-Fußabdruck",
        "example": "Wir sollten unseren CO2-Fußabdruck verringern."
    },
    {
        "level": "B2",
        "cat": "Umwelt & Nachhaltigkeit",
        "front": "Limbah",
        "back": "der Abfall",
        "example": "Der Abfall muss getrennt werden."
    },
    {
        "level": "B2",
        "cat": "Umwelt & Nachhaltigkeit",
        "front": "Pemanasan global",
        "back": "die Erderwärmung",
        "example": "Die Erderwärmung schreitet voran."
    },
    {
        "level": "B2",
        "cat": "Umwelt & Nachhaltigkeit",
        "front": "Perlindungan lingkungan",
        "back": "der Umweltschutz",
        "example": "Umweltschutz ist wichtig."
    },
    {
        "level": "B2",
        "cat": "Umwelt & Nachhaltigkeit",
        "front": "Polusi udara",
        "back": "die Luftverschmutzung",
        "example": "Die Luftverschmutzung ist ein Problem."
    },
    {
        "level": "B2",
        "cat": "Umwelt & Nachhaltigkeit",
        "front": "Polusi air",
        "back": "die Wasserverschmutzung",
        "example": "Die Wasserverschmutzung nimmt zu."
    },
    {
        "level": "B2",
        "cat": "Umwelt & Nachhaltigkeit",
        "front": "Kekeringan",
        "back": "die Dürre",
        "example": "Die Dürre dauert schon Monate."
    },
    {
        "level": "B2",
        "cat": "Umwelt & Nachhaltigkeit",
        "front": "Banjir",
        "back": "die Überschwemmung",
        "example": "Die Überschwemmung zerstörte viele Häuser."
    },
    {
        "level": "B2",
        "cat": "Umwelt & Nachhaltigkeit",
        "front": "Gempa bumi",
        "back": "das Erdbeben",
        "example": "Das Erdbeben war stark."
    },
    {
        "level": "B2",
        "cat": "Umwelt & Nachhaltigkeit",
        "front": "Letusan gunung",
        "back": "der Vulkanausbruch",
        "example": "Der Vulkanausbruch war gefährlich."
    },
    {
        "level": "B2",
        "cat": "Umwelt & Nachhaltigkeit",
        "front": "Topan",
        "back": "der Taifun",
        "example": "Der Taifun richtete großen Schaden an."
    },
    {
        "level": "B2",
        "cat": "Gefühle & Charakter",
        "front": "Rasa hormat",
        "back": "der Respekt",
        "example": "Respekt ist wichtig im Umgang."
    },
    {
        "level": "B2",
        "cat": "Gefühle & Charakter",
        "front": "Kepercayaan",
        "back": "das Vertrauen",
        "example": "Vertrauen muss man sich verdienen."
    },
    {
        "level": "B2",
        "cat": "Gefühle & Charakter",
        "front": "Keraguan",
        "back": "der Zweifel",
        "example": "Ich habe Zweifel an dem Plan."
    },
    {
        "level": "B2",
        "cat": "Gefühle & Charakter",
        "front": "Harapan",
        "back": "die Hoffnung",
        "example": "Die Hoffnung stirbt zuletzt."
    },
    {
        "level": "B2",
        "cat": "Gefühle & Charakter",
        "front": "Kekecewaan",
        "back": "die Enttäuschung",
        "example": "Die Enttäuschung war groß."
    },
    {
        "level": "B2",
        "cat": "Gefühle & Charakter",
        "front": "Kebahagiaan",
        "back": "das Glück",
        "example": "Glück kann man nicht kaufen."
    },
    {
        "level": "B2",
        "cat": "Gefühle & Charakter",
        "front": "Kesedihan",
        "back": "die Trauer",
        "example": "Die Trauer war tief."
    },
    {
        "level": "B2",
        "cat": "Gefühle & Charakter",
        "front": "Kemarahan",
        "back": "die Wut",
        "example": "Seine Wut war deutlich."
    },
    {
        "level": "B2",
        "cat": "Gefühle & Charakter",
        "front": "Ketakutan",
        "back": "die Angst",
        "example": "Die Angst vor der Prüfung ist normal."
    },
    {
        "level": "B2",
        "cat": "Gefühle & Charakter",
        "front": "Kecemasan",
        "back": "die Sorge",
        "example": "Die Sorge um die Kinder ist groß."
    },
    {
        "level": "B2",
        "cat": "Verben",
        "front": "Memperhatikan",
        "back": "beachten",
        "example": "Bitte beachten Sie die Regeln."
    },
    {
        "level": "B2",
        "cat": "Verben",
        "front": "Mengabaikan",
        "back": "ignorieren",
        "example": "Er ignoriert meine Nachrichten."
    },
    {
        "level": "B2",
        "cat": "Verben",
        "front": "Mempertimbangkan",
        "back": "berücksichtigen",
        "example": "Wir müssen alle Risiken berücksichtigen."
    },
    {
        "level": "B2",
        "cat": "Verben",
        "front": "Mengasumsikan",
        "back": "voraussetzen",
        "example": "Diese Theorie setzt Fachkenntnisse voraus."
    },
    {
        "level": "B2",
        "cat": "Verben",
        "front": "Menyimpulkan",
        "back": "schließen",
        "example": "Aus den Daten schließen wir, dass..."
    },
    {
        "level": "B2",
        "cat": "Verben",
        "front": "Membuktikan",
        "back": "beweisen",
        "example": "Er kann seine Unschuld beweisen."
    },
    {
        "level": "B2",
        "cat": "Verben",
        "front": "Menyangkal",
        "back": "leugnen",
        "example": "Er leugnet die Tat."
    },
    {
        "level": "B2",
        "cat": "Verben",
        "front": "Mengakui",
        "back": "zugeben",
        "example": "Er gibt seinen Fehler zu."
    },
    {
        "level": "B2",
        "cat": "Verben",
        "front": "Mengungkapkan",
        "back": "ausdrücken",
        "example": "Ich kann meine Gefühle schwer ausdrücken."
    },
    {
        "level": "B2",
        "cat": "Verben",
        "front": "Menyembunyikan",
        "back": "verbergen",
        "example": "Sie verbirgt ihre Gefühle."
    },
    {
        "level": "B2",
        "cat": "Verben",
        "front": "Mengungkapkan",
        "back": "äußern",
        "example": "Er äußerte seine Meinung."
    },
    {
        "level": "B2",
        "cat": "Verben",
        "front": "Mengeluh",
        "back": "sich beschweren",
        "example": "Ich beschwere mich über den Lärm."
    },
    {
        "level": "B2",
        "cat": "Verben",
        "front": "Memperkenalkan",
        "back": "vorstellen",
        "example": "Darf ich mich vorstellen?"
    },
    {
        "level": "B2",
        "cat": "Verben",
        "front": "Menerima",
        "back": "annehmen",
        "example": "Ich nehme das Angebot an."
    },
    {
        "level": "B2",
        "cat": "Verben",
        "front": "Menyetujui",
        "back": "genehmigen",
        "example": "Der Antrag wurde genehmigt."
    },
    {
        "level": "B2",
        "cat": "Verben",
        "front": "Melarang",
        "back": "verbieten",
        "example": "Rauchen ist hier verboten."
    },
    {
        "level": "B2",
        "cat": "Verben",
        "front": "Mengizinkan",
        "back": "erlauben",
        "example": "Meine Eltern erlauben es nicht."
    },
    {
        "level": "B2",
        "cat": "Adjektive & Adverbien",
        "front": "Bertanggung jawab",
        "back": "verantwortlich",
        "example": "Er ist für das Projekt verantwortlich."
    },
    {
        "level": "B2",
        "cat": "Adjektive & Adverbien",
        "front": "Berkesinambungan",
        "back": "nachhaltig",
        "example": "Wir brauchen nachhaltige Lösungen."
    },
    {
        "level": "B2",
        "cat": "Adjektive & Adverbien",
        "front": "Efisien",
        "back": "effizient",
        "example": "Die Methode ist effizient."
    },
    {
        "level": "B2",
        "cat": "Adjektive & Adverbien",
        "front": "Efektif",
        "back": "effektiv",
        "example": "Die Maßnahme ist effektiv."
    },
    {
        "level": "B2",
        "cat": "Adjektive & Adverbien",
        "front": "Kompleks",
        "back": "komplex",
        "example": "Das Problem ist komplex."
    },
    {
        "level": "B2",
        "cat": "Adjektive & Adverbien",
        "front": "Sederhana",
        "back": "einfach",
        "example": "Die Lösung ist einfach."
    },
    {
        "level": "B2",
        "cat": "Adjektive & Adverbien",
        "front": "Jelas",
        "back": "deutlich",
        "example": "Bitte sprechen Sie deutlich."
    },
    {
        "level": "B2",
        "cat": "Adjektive & Adverbien",
        "front": "Tidak jelas",
        "back": "unklar",
        "example": "Die Situation ist unklar."
    },
    {
        "level": "B2",
        "cat": "Adjektive & Adverbien",
        "front": "Konsisten",
        "back": "konsequent",
        "example": "Er handelt konsequent."
    },
    {
        "level": "B2",
        "cat": "Adjektive & Adverbien",
        "front": "Fleksibel",
        "back": "flexibel",
        "example": "Die Arbeitszeiten sind flexibel."
    },
    {
        "level": "B2",
        "cat": "Adjektive & Adverbien",
        "front": "Kreatif",
        "back": "kreativ",
        "example": "Sie ist sehr kreativ."
    },
    {
        "level": "B2",
        "cat": "Adjektive & Adverbien",
        "front": "Inovatif",
        "back": "innovativ",
        "example": "Das Unternehmen ist innovativ."
    },
    {
        "level": "B2",
        "cat": "Adjektive & Adverbien",
        "front": "Tradisional",
        "back": "traditionell",
        "example": "Das ist ein traditionelles Gericht."
    },
    {
        "level": "B2",
        "cat": "Adjektive & Adverbien",
        "front": "Modern",
        "back": "modern",
        "example": "Die Wohnung ist modern."
    },
    {
        "level": "B2",
        "cat": "Adjektive & Adverbien",
        "front": "Aktual",
        "back": "aktuell",
        "example": "Das ist ein aktuelles Thema."
    },
    {
        "level": "B2",
        "cat": "Adjektive & Adverbien",
        "front": "Relevan",
        "back": "relevant",
        "example": "Diese Information ist relevant."
    },
    {
        "level": "B2",
        "cat": "Adjektive & Adverbien",
        "front": "Spesifik",
        "back": "spezifisch",
        "example": "Wir brauchen spezifische Daten."
    },
    {
        "level": "B2",
        "cat": "Adjektive & Adverbien",
        "front": "Umum",
        "back": "allgemein",
        "example": "Das ist eine allgemeine Regel."
    },
    {
        "level": "B2",
        "cat": "Adjektive & Adverbien",
        "front": "Individu",
        "back": "individuell",
        "example": "Jeder hat individuelle Bedürfnisse."
    },
    {
        "level": "B2",
        "cat": "Adjektive & Adverbien",
        "front": "Kolektif",
        "back": "kollektiv",
        "example": "Das ist eine kollektive Entscheidung."
    },
    {
        "level": "C1",
        "cat": "Wissenschaft & Rhetorik",
        "front": "Mengasumsikan / Menduga",
        "back": "voraussetzen",
        "example": "Diese Theorie setzt fundierte Fachkenntnisse voraus."
    },
    {
        "level": "C1",
        "cat": "Wissenschaft & Rhetorik",
        "front": "Pencegahan / Tindakan antisipasi",
        "back": "die Vorbeugung",
        "example": "Prävention ist die beste Vorbeugung gegen schwere Krankheiten."
    },
    {
        "level": "C1",
        "cat": "Wissenschaft & Rhetorik",
        "front": "Memperhitungkan / Mempertimbangkan",
        "back": "berücksichtigen",
        "example": "Wir müssen alle Risiken bei der Planung berücksichtigen."
    },
    {
        "level": "C1",
        "cat": "Wissenschaft & Rhetorik",
        "front": "Kesesuaian / Relevansi",
        "back": "die Relevanz",
        "example": "Dieses Thema hat eine hohe gesellschaftliche Relevanz."
    },
    {
        "level": "C1",
        "cat": "Wissenschaft & Rhetorik",
        "front": "Mengkompensasi / Menyeimbangkan",
        "back": "ausgleichen",
        "example": "Man kann fehlende Erfahrung durch Engagement ausgleichen."
    },
    {
        "level": "C1",
        "cat": "Wissenschaft & Rhetorik",
        "front": "Pertimbangan / Penimbangan",
        "back": "die Abwägung",
        "example": "Nach sorgfältiger Abwägung trafen wir die Entscheidung."
    },
    {
        "level": "C1",
        "cat": "Wissenschaft & Rhetorik",
        "front": "Keanekaragaman / Diversitas",
        "back": "die Vielfalt",
        "example": "Kulturelle Vielfalt bereichert unsere Gesellschaft."
    },
    {
        "level": "C1",
        "cat": "Wissenschaft & Rhetorik",
        "front": "Keterbatasan / Pembatasan",
        "back": "die Einschränkung",
        "example": "Trotz einiger Einschränkungen verzeichnet das Unternehmen Gewinne."
    },
    {
        "level": "C1",
        "cat": "Wissenschaft & Rhetorik",
        "front": "Asumsi",
        "back": "die Annahme",
        "example": "Diese Annahme ist wissenschaftlich belegt."
    },
    {
        "level": "C1",
        "cat": "Wissenschaft & Rhetorik",
        "front": "Pencegahan",
        "back": "die Prävention",
        "example": "Prävention ist sehr wichtig."
    },
    {
        "level": "C1",
        "cat": "Wissenschaft & Rhetorik",
        "front": "Pertimbangan",
        "back": "die Erwägung",
        "example": "Nach reiflicher Erwägung stimmte er zu."
    },
    {
        "level": "C1",
        "cat": "Wissenschaft & Rhetorik",
        "front": "Perspektif",
        "back": "die Perspektive",
        "example": "Aus dieser Perspektive sieht es anders aus."
    },
    {
        "level": "C1",
        "cat": "Wissenschaft & Rhetorik",
        "front": "Interpretasi",
        "back": "die Interpretation",
        "example": "Die Interpretation ist schlüssig."
    },
    {
        "level": "C1",
        "cat": "Wissenschaft & Rhetorik",
        "front": "Hipotesis",
        "back": "die Hypothese",
        "example": "Die Hypothese muss geprüft werden."
    },
    {
        "level": "C1",
        "cat": "Wissenschaft & Rhetorik",
        "front": "Pernyataan",
        "back": "die Aussagen",
        "example": "Seine Aussagen waren präzise."
    },
    {
        "level": "C1",
        "cat": "Wissenschaft & Rhetorik",
        "front": "Penelitian",
        "back": "die Untersuchung",
        "example": "Die Untersuchung ergab neue Erkenntnisse."
    },
    {
        "level": "C1",
        "cat": "Wissenschaft & Rhetorik",
        "front": "Bukti",
        "back": "der Beweis",
        "example": "Es gibt keinen Beweis für diese These."
    },
    {
        "level": "C1",
        "cat": "Wissenschaft & Rhetorik",
        "front": "Kesimpulan",
        "back": "die Schlussfolgerung",
        "example": "Die Schlussfolgerung ist überzeugend."
    },
    {
        "level": "C1",
        "cat": "Wissenschaft & Rhetorik",
        "front": "Argumen",
        "back": "das Argument",
        "example": "Sein Argument ist stichhaltig."
    },
    {
        "level": "C1",
        "cat": "Wissenschaft & Rhetorik",
        "front": "Kritik",
        "back": "die Beanstandung",
        "example": "Die Beanstandung wurde geprüft."
    },
    {
        "level": "C1",
        "cat": "Wissenschaft & Rhetorik",
        "front": "Analisis",
        "back": "die Analyse",
        "example": "Die Analyse der Daten dauert lange."
    },
    {
        "level": "C1",
        "cat": "Wissenschaft & Rhetorik",
        "front": "Metode",
        "back": "die Methode",
        "example": "Die Methode ist wissenschaftlich anerkannt."
    },
    {
        "level": "C1",
        "cat": "Wissenschaft & Rhetorik",
        "front": "Teori",
        "back": "die Theorie",
        "example": "Die Theorie muss überprüft werden."
    },
    {
        "level": "C1",
        "cat": "Wissenschaft & Rhetorik",
        "front": "Fakta",
        "back": "die Tatsache",
        "example": "Das ist eine unbestreitbare Tatsache."
    },
    {
        "level": "C1",
        "cat": "Wissenschaft & Rhetorik",
        "front": "Pendapat",
        "back": "die Stellungnahme",
        "example": "Er gab eine ausführliche Stellungnahme ab."
    },
    {
        "level": "C1",
        "cat": "Wissenschaft & Rhetorik",
        "front": "Menyatakan",
        "back": "erklären",
        "example": "Er erklärte seine Position."
    },
    {
        "level": "C1",
        "cat": "Wissenschaft & Rhetorik",
        "front": "Kesimpulan (hasil)",
        "back": "das Fazit",
        "example": "Das Fazit der Studie ist eindeutig."
    },
    {
        "level": "C1",
        "cat": "Wirtschaft & Politik",
        "front": "Kebijakan",
        "back": "die Politik",
        "example": "Die Politik muss reagieren."
    },
    {
        "level": "C1",
        "cat": "Wirtschaft & Politik",
        "front": "Undang-undang",
        "back": "das Gesetz",
        "example": "Das Gesetz tritt morgen in Kraft."
    },
    {
        "level": "C1",
        "cat": "Wirtschaft & Politik",
        "front": "Peraturan",
        "back": "die Verordnung",
        "example": "Die Verordnung regelt den Verkehr."
    },
    {
        "level": "C1",
        "cat": "Wirtschaft & Politik",
        "front": "Pemilu",
        "back": "die Wahl",
        "example": "Die Wahl findet im September statt."
    },
    {
        "level": "C1",
        "cat": "Wirtschaft & Politik",
        "front": "Pemerintah",
        "back": "die Regierung",
        "example": "Die Regierung plant Reformen."
    },
    {
        "level": "C1",
        "cat": "Wirtschaft & Politik",
        "front": "Oposisi",
        "back": "die Opposition",
        "example": "Die Opposition kritisiert den Plan."
    },
    {
        "level": "C1",
        "cat": "Wirtschaft & Politik",
        "front": "Subsidi",
        "back": "die Subvention",
        "example": "Die Subventionen werden gekürzt."
    },
    {
        "level": "C1",
        "cat": "Wirtschaft & Politik",
        "front": "Anggaran belanja",
        "back": "der Haushalt",
        "example": "Der Haushalt wurde genehmigt."
    },
    {
        "level": "C1",
        "cat": "Wirtschaft & Politik",
        "front": "Reformasi",
        "back": "die Reform",
        "example": "Die Reform betrifft das Steuersystem."
    },
    {
        "level": "C1",
        "cat": "Wirtschaft & Politik",
        "front": "Pajak",
        "back": "die Besteuerung",
        "example": "Die Besteuerung von Unternehmen ist umstritten."
    },
    {
        "level": "C1",
        "cat": "Wirtschaft & Politik",
        "front": "Kebijakan luar negeri",
        "back": "die Außenpolitik",
        "example": "Die Außenpolitik ist komplex."
    },
    {
        "level": "C1",
        "cat": "Wirtschaft & Politik",
        "front": "Kebijakan dalam negeri",
        "back": "die Innenpolitik",
        "example": "Die Innenpolitik steht vor großen Aufgaben."
    },
    {
        "level": "C1",
        "cat": "Wirtschaft & Politik",
        "front": "Diplomasi",
        "back": "die Diplomatie",
        "example": "Diplomatie ist der beste Weg."
    },
    {
        "level": "C1",
        "cat": "Wirtschaft & Politik",
        "front": "Perjanjian",
        "back": "der Vertrag",
        "example": "Der Vertrag wurde unterzeichnet."
    },
    {
        "level": "C1",
        "cat": "Wirtschaft & Politik",
        "front": "Sanksi",
        "back": "die Sanktion",
        "example": "Die Sanktionen wurden verschärft."
    },
    {
        "level": "C1",
        "cat": "Wirtschaft & Politik",
        "front": "Perdamaian",
        "back": "der Frieden",
        "example": "Frieden ist das höchste Gut."
    },
    {
        "level": "C1",
        "cat": "Wirtschaft & Politik",
        "front": "Perang",
        "back": "der Krieg",
        "example": "Der Krieg zerstört alles."
    },
    {
        "level": "C1",
        "cat": "Wirtschaft & Politik",
        "front": "Krisis",
        "back": "die Krise",
        "example": "Die Krise dauert schon Jahre."
    },
    {
        "level": "C1",
        "cat": "Wirtschaft & Politik",
        "front": "Mayoritas",
        "back": "die Mehrheit",
        "example": "Die Mehrheit stimmte zu."
    },
    {
        "level": "C1",
        "cat": "Wirtschaft & Politik",
        "front": "Minoritas",
        "back": "die Minderheit",
        "example": "Die Minderheit hat Angst vor Diskriminierung."
    },
    {
        "level": "C1",
        "cat": "Wirtschaft & Politik",
        "front": "Kampanye",
        "back": "der Wahlkampf",
        "example": "Der Wahlkampf ist intensiv."
    },
    {
        "level": "C1",
        "cat": "Rhetorik & Argumentation",
        "front": "Menyimpulkan (hasil)",
        "back": "das Fazit",
        "example": "Das Fazit der Studie ist eindeutig."
    },
    {
        "level": "C1",
        "cat": "Rhetorik & Argumentation",
        "front": "Argumen tandingan",
        "back": "das Gegenargument",
        "example": "Das Gegenargument ist überzeugend."
    },
    {
        "level": "C1",
        "cat": "Rhetorik & Argumentation",
        "front": "Perdebatan",
        "back": "die Erörterung",
        "example": "Die Erörterung ist gut strukturiert."
    },
    {
        "level": "C1",
        "cat": "Rhetorik & Argumentation",
        "front": "Pendahuluan",
        "back": "die Einleitung",
        "example": "Die Einleitung weckt Interesse."
    },
    {
        "level": "C1",
        "cat": "Rhetorik & Argumentation",
        "front": "Isi",
        "back": "der Hauptteil",
        "example": "Der Hauptteil ist ausführlich."
    },
    {
        "level": "C1",
        "cat": "Rhetorik & Argumentation",
        "front": "Penutup",
        "back": "der Schluss",
        "example": "Der Schluss fasst alles zusammen."
    },
    {
        "level": "C1",
        "cat": "Rhetorik & Argumentation",
        "front": "Kutipan",
        "back": "das Zitat",
        "example": "Das Zitat ist von Goethe."
    },
    {
        "level": "C1",
        "cat": "Rhetorik & Argumentation",
        "front": "Contoh",
        "back": "das Beispiel",
        "example": "Zum Beispiel Deutschland."
    },
    {
        "level": "C1",
        "cat": "Rhetorik & Argumentation",
        "front": "Statistik",
        "back": "die Statistik",
        "example": "Die Statistik zeigt einen Anstieg."
    },
    {
        "level": "C1",
        "cat": "Rhetorik & Argumentation",
        "front": "Sumber",
        "back": "die Quelle",
        "example": "Die Quelle ist zuverlässig."
    },
    {
        "level": "C1",
        "cat": "Rhetorik & Argumentation",
        "front": "Rujukan",
        "back": "der Verweis",
        "example": "Der Verweis ist korrekt."
    },
    {
        "level": "C1",
        "cat": "Arbeit & Beruf",
        "front": "Kepemimpinan",
        "back": "die Führung",
        "example": "Gute Führung ist entscheidend."
    },
    {
        "level": "C1",
        "cat": "Arbeit & Beruf",
        "front": "Wewenang",
        "back": "die Befugnis",
        "example": "Er hat die Befugnis zu entscheiden."
    },
    {
        "level": "C1",
        "cat": "Arbeit & Beruf",
        "front": "Kompetensi",
        "back": "die Kompetenz",
        "example": "Sie hat große Kompetenz in diesem Bereich."
    },
    {
        "level": "C1",
        "cat": "Arbeit & Beruf",
        "front": "Inisiatif",
        "back": "die Eigeninitiative",
        "example": "Er zeigt viel Eigeninitiative."
    },
    {
        "level": "C1",
        "cat": "Arbeit & Beruf",
        "front": "Produktivitas",
        "back": "die Produktivität",
        "example": "Die Produktivität ist gestiegen."
    },
    {
        "level": "C1",
        "cat": "Arbeit & Beruf",
        "front": "Efisiensi",
        "back": "die Effizienz",
        "example": "Die Effizienz muss verbessert werden."
    },
    {
        "level": "C1",
        "cat": "Arbeit & Beruf",
        "front": "Pelanggan",
        "back": "der Kunde",
        "example": "Der Kunde ist König."
    },
    {
        "level": "C1",
        "cat": "Arbeit & Beruf",
        "front": "Pemasok",
        "back": "der Lieferant",
        "example": "Der Lieferant ist zuverlässig."
    },
    {
        "level": "C1",
        "cat": "Arbeit & Beruf",
        "front": "Peluang",
        "back": "die Chance",
        "example": "Die Chance muss genutzt werden."
    },
    {
        "level": "C1",
        "cat": "Arbeit & Beruf",
        "front": "Risiko",
        "back": "das Risiko",
        "example": "Das Risiko ist kalkulierbar."
    },
    {
        "level": "C1",
        "cat": "Arbeit & Beruf",
        "front": "Tanggung jawab",
        "back": "die Verantwortung",
        "example": "Die Verantwortung liegt bei ihm."
    },
    {
        "level": "C1",
        "cat": "Medien & Kommunikation",
        "front": "Komunikasi",
        "back": "die Kommunikation",
        "example": "Kommunikation ist der Schlüssel."
    },
    {
        "level": "C1",
        "cat": "Medien & Kommunikation",
        "front": "Dialog",
        "back": "der Dialog",
        "example": "Der Dialog zwischen den Parteien ist wichtig."
    },
    {
        "level": "C1",
        "cat": "Medien & Kommunikation",
        "front": "Monolog",
        "back": "der Monolog",
        "example": "Der Monolog dauerte zehn Minuten."
    },
    {
        "level": "C1",
        "cat": "Medien & Kommunikation",
        "front": "Retorika",
        "back": "die Rhetorik",
        "example": "Die Rhetorik des Politikers ist überzeugend."
    },
    {
        "level": "C1",
        "cat": "Medien & Kommunikation",
        "front": "Nada bicara",
        "back": "der Tonfall",
        "example": "Sein Tonfall war freundlich."
    },
    {
        "level": "C1",
        "cat": "Medien & Kommunikation",
        "front": "Pesan",
        "back": "die Botschaft",
        "example": "Die Botschaft ist klar."
    },
    {
        "level": "C1",
        "cat": "Medien & Kommunikation",
        "front": "Media",
        "back": "das Medium",
        "example": "Das Medium Fernsehen ist mächtig."
    },
    {
        "level": "C1",
        "cat": "Medien & Kommunikation",
        "front": "Pers",
        "back": "die Presse",
        "example": "Die Presse berichtet ausführlich."
    },
    {
        "level": "C1",
        "cat": "Medien & Kommunikation",
        "front": "Wartawan",
        "back": "der Journalist",
        "example": "Der Journalist recherchiert."
    },
    {
        "level": "C1",
        "cat": "Medien & Kommunikation",
        "front": "Berita palsu",
        "back": "die Falschnachricht",
        "example": "Falschnachrichten verbreiten sich schnell."
    },
    {
        "level": "C1",
        "cat": "Medien & Kommunikation",
        "front": "Sensor",
        "back": "die Zensur",
        "example": "Zensur ist in Demokratien problematisch."
    },
    {
        "level": "C1",
        "cat": "Medien & Kommunikation",
        "front": "Propaganda",
        "back": "die Propaganda",
        "example": "Propaganda manipuliert die Meinung."
    },
    {
        "level": "C1",
        "cat": "Medien & Kommunikation",
        "front": "Kampanye",
        "back": "die Kampagne",
        "example": "Die Kampagne war erfolgreich."
    },
    {
        "level": "C1",
        "cat": "Medien & Kommunikation",
        "front": "Iklan",
        "back": "die Anzeige",
        "example": "Die Anzeige erscheint morgen."
    },
    {
        "level": "C1",
        "cat": "Medien & Kommunikation",
        "front": "Wawancara",
        "back": "das Interview",
        "example": "Das Interview war interessant."
    },
    {
        "level": "C1",
        "cat": "Medien & Kommunikation",
        "front": "Laporan",
        "back": "die Reportage",
        "example": "Die Reportage war bewegend."
    },
    {
        "level": "C1",
        "cat": "Medien & Kommunikation",
        "front": "Ulasan",
        "back": "die Rezension",
        "example": "Die Rezension war positiv."
    },
    {
        "level": "C1",
        "cat": "Medien & Kommunikation",
        "front": "Kritik",
        "back": "die Kritik",
        "example": "Die Kritik war konstruktiv."
    },
    {
        "level": "C1",
        "cat": "Medien & Kommunikation",
        "front": "Pujian",
        "back": "das Lob",
        "example": "Das Lob motiviert."
    },
    {
        "level": "C1",
        "cat": "Umwelt & Nachhaltigkeit",
        "front": "Krisis iklim",
        "back": "die Klimakrise",
        "example": "Die Klimakrise erfordert sofortiges Handeln."
    },
    {
        "level": "C1",
        "cat": "Gesundheit & Medizin",
        "front": "Diagnosis",
        "back": "die Diagnose",
        "example": "Die Diagnose war eindeutig."
    },
    {
        "level": "C1",
        "cat": "Gesundheit & Medizin",
        "front": "Terapi",
        "back": "die Therapie",
        "example": "Die Therapie dauert mehrere Monate."
    },
    {
        "level": "C1",
        "cat": "Gesundheit & Medizin",
        "front": "Penyakit kronis",
        "back": "die chronische Krankheit",
        "example": "Chronische Krankheiten erfordern Geduld."
    },
    {
        "level": "C1",
        "cat": "Gesundheit & Medizin",
        "front": "Epidemi",
        "back": "die Epidemie",
        "example": "Die Epidemie breitete sich schnell aus."
    },
    {
        "level": "C1",
        "cat": "Gesundheit & Medizin",
        "front": "Pandemi",
        "back": "die Pandemie",
        "example": "Die Pandemie veränderte die Welt."
    },
    {
        "level": "C1",
        "cat": "Gesundheit & Medizin",
        "front": "Vaksin",
        "back": "der Impfstoff",
        "example": "Der Impfstoff ist wirksam."
    },
    {
        "level": "C1",
        "cat": "Gesundheit & Medizin",
        "front": "Imunisasi",
        "back": "die Impfung",
        "example": "Die Impfung schützt vor Krankheiten."
    },
    {
        "level": "C1",
        "cat": "Gesundheit & Medizin",
        "front": "Kesehatan mental",
        "back": "die psychische Gesundheit",
        "example": "Psychische Gesundheit ist wichtig."
    },
    {
        "level": "C1",
        "cat": "Gesundheit & Medizin",
        "front": "Depresi",
        "back": "die Depression",
        "example": "Depression ist eine ernste Krankheit."
    },
    {
        "level": "C1",
        "cat": "Gesundheit & Medizin",
        "front": "Stres",
        "back": "der Stress",
        "example": "Stress kann krank machen."
    },
    {
        "level": "C1",
        "cat": "Gesundheit & Medizin",
        "front": "Terapi fisik",
        "back": "die Physiotherapie",
        "example": "Die Physiotherapie hilft beim Aufbau."
    },
    {
        "level": "C1",
        "cat": "Gesundheit & Medizin",
        "front": "Operasi",
        "back": "der Eingriff",
        "example": "Der Eingriff verlief erfolgreich."
    },
    {
        "level": "C1",
        "cat": "Gesundheit & Medizin",
        "front": "Rumah sakit",
        "back": "die Klinik",
        "example": "Die Klinik ist modern."
    },
    {
        "level": "C1",
        "cat": "Gesundheit & Medizin",
        "front": "Obat",
        "back": "das Arzneimittel",
        "example": "Das Arzneimittel ist verschreibungspflichtig."
    },
    {
        "level": "C1",
        "cat": "Gesundheit & Medizin",
        "front": "Dosis",
        "back": "die Dosis",
        "example": "Die Dosis muss angepasst werden."
    },
    {
        "level": "C1",
        "cat": "Gesundheit & Medizin",
        "front": "Efek samping",
        "back": "die Nebenwirkung",
        "example": "Die Nebenwirkungen sind gering."
    },
    {
        "level": "C1",
        "cat": "Gesundheit & Medizin",
        "front": "Imunitas",
        "back": "die Immunität",
        "example": "Die Immunität baut sich langsam auf."
    },
    {
        "level": "C1",
        "cat": "Gesundheit & Medizin",
        "front": "Gizi",
        "back": "die Ernährung",
        "example": "Gesunde Ernährung ist wichtig."
    },
    {
        "level": "C1",
        "cat": "Gesundheit & Medizin",
        "front": "Olahraga",
        "back": "die Bewegung",
        "example": "Bewegung hält gesund."
    },
    {
        "level": "A1",
        "cat": "Länder & Nationalitäten",
        "front": "Jerman",
        "back": "Deutschland",
        "example": "Deutschland liegt in Europa."
    },
    {
        "level": "A1",
        "cat": "Länder & Nationalitäten",
        "front": "Indonesia",
        "back": "Indonesien",
        "example": "Indonesien ist ein großes Land."
    },
    {
        "level": "A1",
        "cat": "Länder & Nationalitäten",
        "front": "Austria",
        "back": "Österreich",
        "example": "Österreich liegt in Mitteleuropa."
    },
    {
        "level": "A1",
        "cat": "Länder & Nationalitäten",
        "front": "Swiss",
        "back": "die Schweiz",
        "example": "Die Schweiz ist bekannt für Schokolade."
    },
    {
        "level": "A1",
        "cat": "Länder & Nationalitäten",
        "front": "Prancis",
        "back": "Frankreich",
        "example": "Frankreich ist bekannt für Wein."
    },
    {
        "level": "A1",
        "cat": "Länder & Nationalitäten",
        "front": "Spanyol",
        "back": "Spanien",
        "example": "Spanien ist warm."
    },
    {
        "level": "A1",
        "cat": "Länder & Nationalitäten",
        "front": "Italia",
        "back": "Italien",
        "example": "Italien ist bekannt für Pizza."
    },
    {
        "level": "A1",
        "cat": "Länder & Nationalitäten",
        "front": "Inggris",
        "back": "England",
        "example": "England ist eine Insel."
    },
    {
        "level": "A1",
        "cat": "Länder & Nationalitäten",
        "front": "Amerika",
        "back": "Amerika",
        "example": "Amerika ist groß."
    },
    {
        "level": "A1",
        "cat": "Länder & Nationalitäten",
        "front": "Jepang",
        "back": "Japan",
        "example": "Japan ist modern."
    },
    {
        "level": "A1",
        "cat": "Länder & Nationalitäten",
        "front": "China",
        "back": "China",
        "example": "China hat viele Einwohner."
    },
    {
        "level": "A1",
        "cat": "Länder & Nationalitäten",
        "front": "Turki",
        "back": "die Türkei",
        "example": "Die Türkei liegt zwischen Europa und Asien."
    },
    {
        "level": "A1",
        "cat": "Länder & Nationalitäten",
        "front": "Rusia",
        "back": "Russland",
        "example": "Russland ist das größte Land der Welt."
    },
    {
        "level": "A1",
        "cat": "Länder & Nationalitäten",
        "front": "India",
        "back": "Indien",
        "example": "Indien ist vielfältig."
    },
    {
        "level": "A1",
        "cat": "Länder & Nationalitäten",
        "front": "Brasil",
        "back": "Brasilien",
        "example": "Brasilien ist bekannt für Fußball."
    },
    {
        "level": "A1",
        "cat": "Berufe",
        "front": "Polisi",
        "back": "der Polizist",
        "example": "Der Polizist regelt den Verkehr."
    },
    {
        "level": "A1",
        "cat": "Berufe",
        "front": "Petugas pemadam kebakaran",
        "back": "der Feuerwehrmann",
        "example": "Der Feuerwehrmann ist mutig."
    },
    {
        "level": "A1",
        "cat": "Berufe",
        "front": "Insinyur",
        "back": "der Ingenieur",
        "example": "Der Ingenieur baut Brücken."
    },
    {
        "level": "A1",
        "cat": "Berufe",
        "front": "Programmer",
        "back": "der Programmierer",
        "example": "Der Programmierer schreibt Code."
    },
    {
        "level": "A1",
        "cat": "Berufe",
        "front": "Pengacara",
        "back": "der Anwalt",
        "example": "Der Anwalt verteidigt seinen Mandanten."
    },
    {
        "level": "A1",
        "cat": "Berufe",
        "front": "Akuntan",
        "back": "der Buchhalter",
        "example": "Der Buchhalter prüft die Zahlen."
    },
    {
        "level": "A1",
        "cat": "Berufe",
        "front": "Pelayan",
        "back": "der Kellner",
        "example": "Der Kellner bringt das Essen."
    },
    {
        "level": "A1",
        "cat": "Berufe",
        "front": "Koki",
        "back": "der Koch",
        "example": "Der Koch ist berühmt."
    },
    {
        "level": "A1",
        "cat": "Berufe",
        "front": "Penjual",
        "back": "der Verkäufer",
        "example": "Der Verkäufer ist hilfsbereit."
    },
    {
        "level": "A1",
        "cat": "Berufe",
        "front": "Sopir",
        "back": "der Fahrer",
        "example": "Der Fahrer fährt vorsichtig."
    },
    {
        "level": "A1",
        "cat": "Berufe",
        "front": "Petani",
        "back": "der Bauer",
        "example": "Der Bauer arbeitet auf dem Feld."
    },
    {
        "level": "A1",
        "cat": "Berufe",
        "front": "Nelayan",
        "back": "der Fischer",
        "example": "Der Fischer fängt Fische."
    },
    {
        "level": "A1",
        "cat": "Berufe",
        "front": "Tukang pos",
        "back": "der Briefträger",
        "example": "Der Briefträger bringt die Post."
    },
    {
        "level": "A1",
        "cat": "Berufe",
        "front": "Artis",
        "back": "der Schauspieler",
        "example": "Der Schauspieler ist talentiert."
    },
    {
        "level": "A1",
        "cat": "Berufe",
        "front": "Penyanyi",
        "back": "der Sänger",
        "example": "Der Sänger singt schön."
    },
    {
        "level": "A1",
        "cat": "Berufe",
        "front": "Musisi",
        "back": "der Musiker",
        "example": "Der Musiker spielt Gitarre."
    },
    {
        "level": "A2",
        "cat": "Tiere",
        "front": "Bebek",
        "back": "die Ente",
        "example": "Die Ente schwimmt im Teich."
    },
    {
        "level": "A2",
        "cat": "Tiere",
        "front": "Domba",
        "back": "das Schaf",
        "example": "Das Schaf ist weiß."
    },
    {
        "level": "A2",
        "cat": "Tiere",
        "front": "Kambing",
        "back": "die Ziege",
        "example": "Die Ziege klettert gut."
    },
    {
        "level": "A2",
        "cat": "Tiere",
        "front": "Kelinci",
        "back": "das Kaninchen",
        "example": "Das Kaninchen frisst Karotten."
    },
    {
        "level": "A2",
        "cat": "Tiere",
        "front": "Tikus",
        "back": "die Maus",
        "example": "Die Maus ist klein."
    },
    {
        "level": "A2",
        "cat": "Tiere",
        "front": "Gajah",
        "back": "der Elefant",
        "example": "Der Elefant ist groß."
    },
    {
        "level": "A2",
        "cat": "Tiere",
        "front": "Singa",
        "back": "der Löwe",
        "example": "Der Löwe ist der König der Tiere."
    },
    {
        "level": "A2",
        "cat": "Tiere",
        "front": "Harimau",
        "back": "der Tiger",
        "example": "Der Tiger ist gefährlich."
    },
    {
        "level": "A2",
        "cat": "Tiere",
        "front": "Beruang",
        "back": "der Bär",
        "example": "Der Bär schläft im Winter."
    },
    {
        "level": "A2",
        "cat": "Tiere",
        "front": "Serigala",
        "back": "der Wolf",
        "example": "Der Wolf lebt im Wald."
    },
    {
        "level": "A2",
        "cat": "Tiere",
        "front": "Rubah",
        "back": "der Fuchs",
        "example": "Der Fuchs ist schlau."
    },
    {
        "level": "A2",
        "cat": "Tiere",
        "front": "Monyet",
        "back": "der Affe",
        "example": "Der Affe klettert auf den Baum."
    },
    {
        "level": "A2",
        "cat": "Tiere",
        "front": "Ular",
        "back": "die Schlange",
        "example": "Die Schlange ist giftig."
    },
    {
        "level": "A2",
        "cat": "Pflanzen & Natur",
        "front": "Pohon",
        "back": "der Baum",
        "example": "Der Baum ist alt."
    },
    {
        "level": "A2",
        "cat": "Pflanzen & Natur",
        "front": "Bunga",
        "back": "die Blume",
        "example": "Die Blume riecht gut."
    },
    {
        "level": "A2",
        "cat": "Pflanzen & Natur",
        "front": "Rumput",
        "back": "das Gras",
        "example": "Das Gras ist grün."
    },
    {
        "level": "A2",
        "cat": "Pflanzen & Natur",
        "front": "Daun",
        "back": "das Blatt",
        "example": "Das Blatt ist gelb."
    },
    {
        "level": "A2",
        "cat": "Pflanzen & Natur",
        "front": "Akar",
        "back": "die Wurzel",
        "example": "Die Wurzel ist tief."
    },
    {
        "level": "A2",
        "cat": "Pflanzen & Natur",
        "front": "Biji",
        "back": "der Samen",
        "example": "Der Samen keimt."
    },
    {
        "level": "A2",
        "cat": "Pflanzen & Natur",
        "front": "Buah",
        "back": "die Frucht",
        "example": "Die Frucht ist reif."
    },
    {
        "level": "A2",
        "cat": "Pflanzen & Natur",
        "front": "Batang",
        "back": "der Stamm",
        "example": "Der Stamm ist dick."
    },
    {
        "level": "A2",
        "cat": "Pflanzen & Natur",
        "front": "Dahan",
        "back": "der Ast",
        "example": "Der Ast ist abgebrochen."
    },
    {
        "level": "A2",
        "cat": "Körperpflege",
        "front": "Mandi",
        "back": "duschen",
        "example": "Ich dusche jeden Morgen."
    },
    {
        "level": "A2",
        "cat": "Körperpflege",
        "front": "Mencuci tangan",
        "back": "Hände waschen",
        "example": "Wasch dir die Hände!"
    },
    {
        "level": "A2",
        "cat": "Körperpflege",
        "front": "Menyikat gigi",
        "back": "Zähne putzen",
        "example": "Ich putze mir die Zähne."
    },
    {
        "level": "A2",
        "cat": "Körperpflege",
        "front": "Menyisir",
        "back": "kämmen",
        "example": "Ich kämme mir die Haare."
    },
    {
        "level": "A2",
        "cat": "Körperpflege",
        "front": "Bercukur",
        "back": "sich rasieren",
        "example": "Er rasiert sich jeden Tag."
    },
    {
        "level": "A2",
        "cat": "Körperpflege",
        "front": "Memotong kuku",
        "back": "Nägel schneiden",
        "example": "Ich schneide mir die Nägel."
    },
    {
        "level": "A2",
        "cat": "Körperpflege",
        "front": "Memakai parfum",
        "back": "Parfüm benutzen",
        "example": "Sie benutzt teures Parfüm."
    },
    {
        "level": "A2",
        "cat": "Körperpflege",
        "front": "Krim",
        "back": "die Creme",
        "example": "Die Creme ist gut für die Haut."
    },
    {
        "level": "B1",
        "cat": "Sprichwörter",
        "front": "Latihan membuat sempurna",
        "back": "Übung macht den Meister",
        "example": "Übung macht den Meister, also weiter lernen!"
    },
    {
        "level": "B1",
        "cat": "Sprichwörter",
        "front": "Lebih baik terlambat daripada tidak sama sekali",
        "back": "Besser spät als nie",
        "example": "Besser spät als nie, sagte er."
    },
    {
        "level": "B1",
        "cat": "Sprichwörter",
        "front": "Tidak ada yang jatuh dari langit",
        "back": "Es fällt kein Meister vom Himmel",
        "example": "Es fällt kein Meister vom Himmel, du musst üben."
    },
    {
        "level": "B1",
        "cat": "Sprichwörter",
        "front": "Waktu adalah uang",
        "back": "Zeit ist Geld",
        "example": "Zeit ist Geld, beeil dich!"
    },
    {
        "level": "B1",
        "cat": "Sprichwörter",
        "front": "Di mana ada kemauan, di situ ada jalan",
        "back": "Wo ein Wille ist, ist auch ein Weg",
        "example": "Wo ein Wille ist, ist auch ein Weg."
    },
    {
        "level": "B1",
        "cat": "Sprichwörter",
        "front": "Semua jalan menuju Roma",
        "back": "Alle Wege führen nach Rom",
        "example": "Alle Wege führen nach Rom, sagten sie."
    },
    {
        "level": "B1",
        "cat": "Sprichwörter",
        "front": "Lebih baik seekor burung di tangan daripada dua di semak",
        "back": "Lieber den Spatz in der Hand als die Taube auf dem Dach",
        "example": "Lieber den Spatz in der Hand als die Taube auf dem Dach."
    },
    {
        "level": "B1",
        "cat": "Sprichwörter",
        "front": "Tidak ada asap tanpa api",
        "back": "Kein Rauch ohne Feuer",
        "example": "Kein Rauch ohne Feuer, da stimmt etwas nicht."
    },
    {
        "level": "B1",
        "cat": "Sprichwörter",
        "front": "Mulutmu harimaumu",
        "back": "Reden ist Silber, Schweigen ist Gold",
        "example": "Reden ist Silber, Schweigen ist Gold."
    },
    {
        "level": "B1",
        "cat": "Sprichwörter",
        "front": "Sekali lagi, dua kali lebih baik",
        "back": "Doppelt hält besser",
        "example": "Doppelt hält besser, prüf das nochmal."
    },
    {
        "level": "B1",
        "cat": "Sprichwörter",
        "front": "Segalanya ada akhirnya",
        "back": "Alles hat ein Ende",
        "example": "Alles hat ein Ende, auch dieser Kurs."
    },
    {
        "level": "B1",
        "cat": "Sprichwörter",
        "front": "Praktik membuat sempurna",
        "back": "Übung macht den Meister",
        "example": "Übung macht den Meister."
    },
    {
        "level": "B1",
        "cat": "Sprichwörter",
        "front": "Lebih baik sendiri daripada bersama orang jahat",
        "back": "Besser allein als in schlechter Gesellschaft",
        "example": "Besser allein als in schlechter Gesellschaft."
    },
    {
        "level": "B1",
        "cat": "Sprichwörter",
        "front": "Kebersihan adalah pangkal kesehatan",
        "back": "Sauberkeit ist die halbe Gesundheit",
        "example": "Sauberkeit ist die halbe Gesundheit."
    },
    {
        "level": "B1",
        "cat": "Sprichwörter",
        "front": "Siapa yang tidak berani, tidak akan menang",
        "back": "Wer nicht wagt, der nicht gewinnt",
        "example": "Wer nicht wagt, der nicht gewinnt, probier es!"
    },
    {
        "level": "B1",
        "cat": "Alltag & Haushalt",
        "front": "Menyapu",
        "back": "fegen",
        "example": "Ich fege den Boden."
    },
    {
        "level": "B1",
        "cat": "Alltag & Haushalt",
        "front": "Mengepel",
        "back": "wischen",
        "example": "Ich wische den Tisch ab."
    },
    {
        "level": "B1",
        "cat": "Alltag & Haushalt",
        "front": "Mencuci pakaian",
        "back": "Wäsche waschen",
        "example": "Ich wasche die Wäsche am Samstag."
    },
    {
        "level": "B1",
        "cat": "Alltag & Haushalt",
        "front": "Menyetrika",
        "back": "bügeln",
        "example": "Ich bügle die Hemden."
    },
    {
        "level": "B1",
        "cat": "Alltag & Haushalt",
        "front": "Menyiapkan makanan",
        "back": "Essen zubereiten",
        "example": "Ich bereite das Abendessen zu."
    },
    {
        "level": "B1",
        "cat": "Alltag & Haushalt",
        "front": "Membuang sampah",
        "back": "Müll rausbringen",
        "example": "Bring bitte den Müll raus."
    },
    {
        "level": "B1",
        "cat": "Alltag & Haushalt",
        "front": "Menyiram tanaman",
        "back": "Pflanzen gießen",
        "example": "Ich gieße die Blumen."
    },
    {
        "level": "B1",
        "cat": "Alltag & Haushalt",
        "front": "Merapikan",
        "back": "aufräumen",
        "example": "Ich räume mein Zimmer auf."
    },
    {
        "level": "B1",
        "cat": "Alltag & Haushalt",
        "front": "Mencuci piring",
        "back": "Geschirr spülen",
        "example": "Ich spüle das Geschirr."
    },
    {
        "level": "B1",
        "cat": "Alltag & Haushalt",
        "front": "Mengunci pintu",
        "back": "Tür abschließen",
        "example": "Hast du die Tür abgeschlossen?"
    },
    {
        "level": "B1",
        "cat": "Alltag & Haushalt",
        "front": "Membuka jendela",
        "back": "Fenster öffnen",
        "example": "Bitte öffne das Fenster."
    },
    {
        "level": "B1",
        "cat": "Alltag & Haushalt",
        "front": "Menutup tirai",
        "back": "Vorhang zumachen",
        "example": "Mach bitte den Vorhang zu."
    },
    {
        "level": "B1",
        "cat": "Alltag & Haushalt",
        "front": "Menyalakan lampu",
        "back": "Licht anmachen",
        "example": "Mach das Licht an."
    },
    {
        "level": "B2",
        "cat": "Bildung & Wissenschaft",
        "front": "Eksperimen",
        "back": "das Experiment",
        "example": "Das Experiment war erfolgreich."
    },
    {
        "level": "B2",
        "cat": "Bildung & Wissenschaft",
        "front": "Praktik",
        "back": "die Praxis",
        "example": "Die Praxis ist wichtiger als die Theorie."
    },
    {
        "level": "B2",
        "cat": "Bildung & Wissenschaft",
        "front": "Data",
        "back": "die Daten",
        "example": "Die Daten sind eindeutig."
    },
    {
        "level": "B2",
        "cat": "Bildung & Wissenschaft",
        "front": "Publikasi",
        "back": "die Veröffentlichung",
        "example": "Die Veröffentlichung ist für nächsten Monat geplant."
    },
    {
        "level": "B2",
        "cat": "Bildung & Wissenschaft",
        "front": "Konferensi",
        "back": "die Konferenz",
        "example": "Die Konferenz findet in Berlin statt."
    },
    {
        "level": "B2",
        "cat": "Bildung & Wissenschaft",
        "front": "Simposium",
        "back": "das Symposium",
        "example": "Das Symposium war inspirierend."
    },
    {
        "level": "B2",
        "cat": "Bildung & Wissenschaft",
        "front": "Disertasi",
        "back": "die Dissertation",
        "example": "Die Dissertation ist fast fertig."
    },
    {
        "level": "B2",
        "cat": "Bildung & Wissenschaft",
        "front": "Jurnal",
        "back": "die Fachzeitschrift",
        "example": "Die Fachzeitschrift ist renommiert."
    },
    {
        "level": "B2",
        "cat": "Bildung & Wissenschaft",
        "front": "Penulis",
        "back": "der Autor",
        "example": "Der Autor ist bekannt."
    },
    {
        "level": "B2",
        "cat": "Kunst & Literatur",
        "front": "Lukisan",
        "back": "das Gemälde",
        "example": "Das Gemälde ist berühmt."
    },
    {
        "level": "B2",
        "cat": "Kunst & Literatur",
        "front": "Patung",
        "back": "die Skulptur",
        "example": "Die Skulptur ist aus Bronze."
    },
    {
        "level": "B2",
        "cat": "Kunst & Literatur",
        "front": "Puisi",
        "back": "das Gedicht",
        "example": "Das Gedicht ist schön."
    },
    {
        "level": "B2",
        "cat": "Kunst & Literatur",
        "front": "Cerita",
        "back": "die Erzählung",
        "example": "Die Erzählung ist spannend."
    },
    {
        "level": "B2",
        "cat": "Kunst & Literatur",
        "front": "Novel",
        "back": "der Roman",
        "example": "Der Roman ist ein Bestseller."
    },
    {
        "level": "B2",
        "cat": "Kunst & Literatur",
        "front": "Drama",
        "back": "das Drama",
        "example": "Das Drama ist tragisch."
    },
    {
        "level": "B2",
        "cat": "Kunst & Literatur",
        "front": "Pengarang",
        "back": "der Schriftsteller",
        "example": "Der Schriftsteller ist berühmt."
    },
    {
        "level": "B2",
        "cat": "Kunst & Literatur",
        "front": "Penyair",
        "back": "der Dichter",
        "example": "Der Dichter schreibt Lyrik."
    },
    {
        "level": "B2",
        "cat": "Kunst & Literatur",
        "front": "Penerbit",
        "back": "der Verlag",
        "example": "Der Verlag ist bekannt."
    },
    {
        "level": "B2",
        "cat": "Kunst & Literatur",
        "front": "Pameran",
        "back": "die Ausstellung",
        "example": "Die Ausstellung ist sehenswert."
    },
    {
        "level": "C1",
        "cat": "Philosophie & Ethik",
        "front": "Etika",
        "back": "die Ethik",
        "example": "Die Ethik ist ein wichtiges Thema."
    },
    {
        "level": "C1",
        "cat": "Philosophie & Ethik",
        "front": "Moral",
        "back": "die Moral",
        "example": "Die Moral ist kulturell geprägt."
    },
    {
        "level": "C1",
        "cat": "Philosophie & Ethik",
        "front": "Nilai",
        "back": "der Wert",
        "example": "Der Wert der Freundschaft ist hoch."
    },
    {
        "level": "C1",
        "cat": "Philosophie & Ethik",
        "front": "Norma",
        "back": "die Norm",
        "example": "Die Normen sind gesellschaftlich festgelegt."
    },
    {
        "level": "C1",
        "cat": "Philosophie & Ethik",
        "front": "Prinsip",
        "back": "das Prinzip",
        "example": "Das Prinzip ist einfach."
    },
    {
        "level": "C1",
        "cat": "Philosophie & Ethik",
        "front": "Keadilan",
        "back": "die Gerechtigkeit",
        "example": "Gerechtigkeit ist wichtig."
    },
    {
        "level": "C1",
        "cat": "Philosophie & Ethik",
        "front": "Kesadaran",
        "back": "das Bewusstsein",
        "example": "Das Bewusstsein für Umwelt ist gewachsen."
    },
    {
        "level": "C1",
        "cat": "Philosophie & Ethik",
        "front": "Keberadaan",
        "back": "die Existenz",
        "example": "Die Existenz Gottes ist umstritten."
    },
    {
        "level": "C1",
        "cat": "Wirtschaft & Handel",
        "front": "Ekspor",
        "back": "der Export",
        "example": "Der Export steigt."
    },
    {
        "level": "C1",
        "cat": "Wirtschaft & Handel",
        "front": "Impor",
        "back": "der Import",
        "example": "Der Import ist teuer."
    },
    {
        "level": "C1",
        "cat": "Wirtschaft & Handel",
        "front": "Neraca perdagangan",
        "back": "die Handelsbilanz",
        "example": "Die Handelsbilanz ist positiv."
    },
    {
        "level": "C1",
        "cat": "Wirtschaft & Handel",
        "front": "Bea masuk",
        "back": "der Zoll",
        "example": "Der Zoll erhebt Gebühren."
    },
    {
        "level": "C1",
        "cat": "Wirtschaft & Handel",
        "front": "Pasar bebas",
        "back": "der freie Markt",
        "example": "Der freie Markt reguliert sich selbst."
    },
    {
        "level": "C1",
        "cat": "Wirtschaft & Handel",
        "front": "Globalisasi",
        "back": "die Globalisierung",
        "example": "Die Globalisierung hat Vor- und Nachteile."
    },
    {
        "level": "C1",
        "cat": "Wirtschaft & Handel",
        "front": "Perdagangan",
        "back": "der Handel",
        "example": "Der Handel blüht."
    },
    {
        "level": "C1",
        "cat": "Wirtschaft & Handel",
        "front": "Mata uang",
        "back": "die Währung",
        "example": "Der Euro ist eine starke Währung."
    },
    {
        "level": "C1",
        "cat": "Wirtschaft & Handel",
        "front": "Nilai tukar",
        "back": "der Wechselkurs",
        "example": "Der Wechselkurs ist heute günstig."
    },
    {
        "level": "C1",
        "cat": "Wirtschaft & Handel",
        "front": "Bursa",
        "back": "die Börse",
        "example": "Die Börse reagiert nervös."
    }
];
