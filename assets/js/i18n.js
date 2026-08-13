/* ============================================================================
   WODA ŻYCIA — WSZYSTKIE TEKSTY STRONY
   ----------------------------------------------------------------------------
   Struktura jest we WSZYSTKICH językach TAKA SAMA.
   Chcesz zmienić tekst? Znajdź jego klucz (np. home.visit.h2) i popraw wartość
   w tych językach, których używasz.

   pl = polski (domyślny) · cs = czeski · sk = słowacki · uk = ukraiński
   ru = rosyjski · de = niemiecki · en = angielski · es = hiszpański
   sv = szwedzki · hu = węgierski

   Jeśli w którymś języku brakuje klucza, automatycznie pokaże się polski —
   strona nigdy się nie zepsuje, będzie tylko w tym miejscu po polsku.
   Kolejność w przełączniku ustala tablica LANGS w assets/js/site.js.

   PO KAŻDEJ ZMIANIE uruchom:  node nastroje/generator.mjs
   ========================================================================== */

const I18N = {

/* ########  POLSKI  ######################################################### */
pl: {
  langName: 'Polski',
  // Krótkie przedstawienie dla wyszukiwarek i narzędzi AI. Trafia do danych
  // strukturalnych (pole disambiguatingDescription — patrz renderSchema
  // w site.js), dzięki czemu nie mylą nas z innymi kościołami o podobnej nazwie.
  identity: 'Kościół ewangeliczny w Koszalinie przy ul. Władysława IV 147. Część Kościoła Bożego w Chrystusie, działa od 1990 roku.',

  meta: {
    home:     { title: 'Kościół Woda Życia — Koszalin',
                desc: 'Kościół Woda Życia w Koszalinie. Spotkania w każdą niedzielę o 11:00, ul. Władysława IV 147. Wpadnij do nas — tak po prostu.' },
    first:    { title: 'Jesteś tu pierwszy raz? | Woda Życia — Koszalin',
                desc: 'Co Cię czeka na spotkaniu w Kościele Woda Życia w Koszalinie, odpowiedzi na najczęstsze pytania i to, w co wierzymy.' },
    church:   { title: 'Kościół | Woda Życia — Koszalin',
                desc: 'Kim jesteśmy, jak żyjemy i co robimy. Pastor Mateusz Godawa, zespół liderów i historia kościoła Woda Życia w Koszalinie.' },
    kids:     { title: 'Kids | Woda Życia — Koszalin',
                desc: 'Zajęcia dla dzieci w wieku 4–9 lat w każdą niedzielę, Koszalin, ul. Władysława IV 147. Sala zabaw i przewijak dla najmłodszych.' },
    news:     { title: 'Aktualności | Woda Życia — Koszalin',
                desc: 'Nowości, wydarzenia i ogłoszenia z życia Kościoła Woda Życia w Koszalinie.' },
    give:     { title: 'Wspieram | Woda Życia — Koszalin',
                desc: 'Jak wesprzeć Kościół Woda Życia w Koszalinie: płatność online, PayPal albo tradycyjny przelew bankowy.' },
    contact:  { title: 'Kontakt | Woda Życia — Koszalin',
                desc: 'ul. Władysława IV 147, 75-342 Koszalin. Napisz do nas albo po prostu wpadnij.' },
    privacy:  { title: 'Polityka prywatności | Woda Życia — Koszalin',
                desc: 'Jak Kościół Woda Życia postępuje z danymi osobowymi i jakie masz prawa według RODO.' },
    notfound: { title: 'Nie znaleziono strony | Woda Życia — Koszalin', desc: '' }
  },

  ui: {
    skip: 'Przejdź do treści',
    menu: 'Menu',
    language: 'Język',
    playVideo: 'Odtwórz nagranie',
    liveStream: 'Transmisja na żywo',
    openIn: 'Otwórz w nowym oknie',
    download: 'Pobierz',
    loading: 'Wczytywanie…'
  },

  nav: {
    home: 'Strona główna',
    first: 'Jesteś tu pierwszy raz?',
    church: 'Kościół',
    kids: 'Kids',
    news: 'Aktualności',
    give: 'Wspieram',
    contact: 'Kontakt',
    privacy: 'Polityka prywatności'
  },

  footer: {
    name: 'Kościół Woda Życia',
    follow: 'Znajdź nas',
    rights: 'Wszelkie prawa zastrzeżone.'
  },

  /* ----------------------------------------------------------- strona główna */
  home: {
    // Ukryty nagłówek strony — czytają go wyszukiwarki i czytniki ekranu.
    h1: 'Woda Życia',
    hero: {
      a: 'HEJ!',
      b: 'CZEŚĆ!',        // słowo pisane konturem
      c: 'WITAJ!',
      cta: 'Poznajmy się'
    },
    visit: {
      h2: 'Wpadnij do nas',
      p: 'Tak po prostu. Bez względu na to skąd jesteś, ile masz lat, w co wierzysz, jak się ubierasz czy na kogo głosujesz.',
      cta: 'Kontakt'
    },
    online: {
      h2: 'Oglądaj spotkania online',
      channel: 'Zobacz nasz kanał na Youtube',
      archive: 'Zobacz spotkania archiwalne'
    },
    inspire: {
      h2: 'Zainspiruj się!',
      current: 'Posłuchaj aktualnych nauczań. Wszystkie kazania znajdziesz na Spotify lub Apple Podcast',
      archive: 'Posłuchaj nauczań archiwalnych. Wszystkie kazania znajdziesz na Spotify lub Apple Podcast',
      currentAlt: 'Kanał Kościoła Woda Życia',
      archiveAlt: 'Pastor Paweł Godawa'
    },
    news: {
      h2: 'Aktualności',
      all: 'Wszystkie aktualności'
    }
  },

  /* --------------------------------------------- Jesteś tu pierwszy raz? */
  first: {
    h1: { a: 'Jesteś tu', b: 'pierwszy', c: 'raz?' },
    intro: 'Od ponad 30 lat tworzymy w Koszalinie otwartą społeczność chrześcijańską. Pochodzimy z różnych środowisk, mamy różne historie, ale łączy nas jedno – Jezus Chrystus. Jesteśmy przekonani, że życie w wierze to fascynująca przygoda, do której Pan Bóg zaprasza każdego człowieka – Ciebie również!',
    faqCta: 'Najczęściej zadawane pytania',

    faq: {
      h2: { a: 'Najczęstsze', b: 'pytania' },
      q1: 'Czy Woda Życia to wspólnota katolicka?',
      a1a: 'Nie, ale dobrze, że pytasz! Kościół Woda Życia należy do nurtu kościołów ewangelicznych i jest częścią federacji „KBWCH” zrzeszającej ponad 80 placówek w Polsce. Jesteśmy otwarci na inne wyznania i pragniemy budować mosty, a nie mury pomiędzy sobą.',
      a1b: 'Kościół Boży w Chrystusie (KBWCH) został zarejestrowany 27 lutego 1988 roku. Obecnie jest wpisany do Rejestru Kościołów i Związków Wyznaniowych, prowadzonych przez Departament Wyznań MSWiA, do działu A, poz. 28.',
      q2: 'Czy można tak po prostu przyjść na Wasze spotkanie?',
      a2: 'Zdecydowanie, TAK',
      q3: 'Jak wygląda typowe spotkanie?',
      a3worship: 'UWIELBIENIE',
      a3worshipText: 'śpiewamy, modlimy się, chwalimy Boga przy muzyce granej na żywo',
      a3sermon: 'KAZANIE',
      a3sermonText: 'pastor lub zaproszony mówca, dzieli się praktycznym przesłaniem w oparciu o Pismo Święte',
      a3prayer: 'MODLITWA',
      a3prayerText: 'spotkanie kończymy wspólną modlitwą, a czasami także śpiewamy',
      a3offering: 'Na większości spotkań robimy przestrzeń do dobrowolnego składania ofiar pieniężnych na cele kościoła',
      a3cafe: 'Po zakończeniu spotkania zapraszamy do naszej kawiarni',
      q4: 'Czy podczas spotkania trzeba robić coś szczególnego?',
      a4: 'Nie. Możesz zwyczajnie przyjść, usiąść wygodnie, posłuchać i wyjść kiedy tylko chcesz.',
      q5: 'Czy można przyjść z dziećmi?',
      a5: 'Tak. Dzieci w wieku 4-9 lat mają swoje oddzielne spotkanie prowadzone przez naszych wolontariuszy, a dla młodszych mamy salę z zabawkami i pokój z przewijakiem',
      a5link: 'Dowiedz się więcej o WODA ŻYCIA KIDS'
    },

    start: {
      h2: { a: 'Woda Życia', b: 'start' },
      p: 'Chcesz poznać nas jeszcze lepiej? To spotkanie jest dla Ciebie. Dowiesz się więcej na temat naszej historii, wartości, możliwości zaangażowania i poznasz ciekawych ludzi, którzy tworzą to miejsce. Zapisz się, a prześlemy Ci informację z datą i godziną tego spotkania.',
      name: 'Imię i nazwisko',
      email: 'E-mail',
      phone: 'Telefon',
      consent: 'Akceptuję',
      consentLink: 'politykę prywatności',
      send: 'Zapisz się',
      // Formularz otwiera program pocztowy odwiedzającego — patrz README.
      hint: 'Formularz otworzy Twój program pocztowy z gotową wiadomością. Możesz też napisać wprost na kontakt@wodazycia.org.',
      subject: 'Zapis na spotkanie Woda Życia start'
    },

    believe: {
      h2: { a: 'W co', b: 'wierzymy', c: '?' },
      i1: { title: 'Bóg Ojciec',
            text: 'Istnieje jeden wieczny, wszechmocny i wszechobecny Bóg. Zgodnie z nauczaniem Jezusa Chrystusa jest dobrym, kochającym Ojcem, który pragnie relacji z każdym człowiekiem.',
            verses: 'Jn. 4:24 / Mt. 6:9 / I Jn. 4:14-16' },
      i2: { title: 'Jezus Chrystus',
            text: 'Przyszedł na świat jako człowiek, aby przekazać światu przesłanie na temat Boga Ojca, odkupić ludzkość od grzechu przez śmierć na krzyżu i zmartwychwstanie oraz dać nowe życie każdemu, kto w Niego uwierzy.',
            verses: 'Mt. 11:27 / I Tm 2:5-6 / Rz. 5:1 / Rz. 10:9' },
      i3: { title: 'Duch Święty',
            text: 'Zgodnie z obietnicą Jezusa Chrystusa, po Jego wniebowstąpieniu na Ziemię został zesłany Duch Święty, aby budować Kościół, wspierać wierzących i działać przez nich.',
            verses: 'Jn. 14:16-20 / Dz. Ap. 1:1-8 / Dz. Ap. 2:1-4' },
      i4: { title: 'Nowe Narodzenie',
            text: 'Każdy człowiek, który przyjmuje zbawienie dzięki wierze w Jezusa Chrystusa zostaje w duchowej rzeczywistości zrodzony na nowo jako Boże dziecko. Dzięki temu, relacja z Bogiem, nowe życie oraz życie w wieczności staje się możliwe.',
            verses: 'Jn. 3:1-18 / Mk. 1:15 / Rz. 10:9-13 / Jn. 1:12-13' },
      i5: { title: 'Chrzest',
            text: 'Poprzez chrzest każdy wierzący identyfikuje się z Jezusem Chrystusem zostawiając za sobą przeszłość i deklarując życie w oddaniu Bogu.',
            verses: 'Mt. 28:16-20 / Rz. 6:1-14 / Gal. 3:26-27' },
      i6: { title: 'Kościół',
            text: 'Jezus Chrystus umarł i zmartwychwstał aby pojednać człowieka z Bogiem, ale również po to aby pojednać ludzi ze sobą nawzajem. Dlatego kościół to nie budynek, ale LUDZIE – ciało Chrystusa – Boża rodzina. To miejsce dla każdego, aby być razem, służyć, wzrastać duchowo i zwyczajnie dzielić swoje życie z innymi.',
            verses: 'Mt. 16:18 / Dz. Ap. 2:42-47 / Ef. 2:19-21' },
      i7: { title: 'Biblia',
            text: 'Wierzymy, że Pismo Święte – Stary i Nowy Testament to nie jedynie zbiór ciekawych historii, ale to przede wszystkim Słowo natchnione przez Boga, które zawiera ponadczasowe instrukcje, mądrości, Boże obietnice i stanowi fundament dla wszystkich zagadnień związanych z życiem i wiarą chrześcijańską.',
            verses: '2 Tm. 3:16-17' },
      i8: { title: 'Wieczność',
            text: 'Każdy kto się urodził, musi pewnego dnia również umrzeć, ale tutaj nie kończy się nasza historia. Dzięki Jezusowi Chrystusowi i zbawieniu, możemy mieć pewność naszej przyszłości – wieczności z Bogiem i wszystkimi wierzącymi.',
            verses: 'Kazn. Sal. 3:11 / Jn. 3:16 / II Kor. 4:16-18' }
    },

    creed: {
      title: 'Skład apostolski',
      l1: 'Wierzę w Boga Ojca wszechmogącego,',
      l2: 'Stworzyciela nieba i ziemi,',
      l3: 'i w Jezusa Chrystusa, Syna Jego jedynego, Pana naszego,',
      l4: 'który się począł z Ducha Świętego,',
      l5: 'narodził się z Marii Panny,',
      l6: 'umęczon pod Ponckim Piłatem,',
      l7: 'ukrzyżowan, umarł i pogrzebion,',
      l8: 'zstąpił do piekieł, trzeciego dnia zmartwychwstał,',
      l9: 'wstąpił na niebiosa, siedzi na prawicy Boga Ojca wszechmogącego,',
      l10: 'stamtąd przyjdzie sądzić żywych i umarłych.',
      l11: 'Wierzę w Ducha Świętego,',
      l12: 'Święty Kościół Powszechny,',
      l13: 'Świętych obcowanie (społeczność świętych), grzechów odpuszczenie,',
      l14: 'ciała zmartwychwstanie, żywot wieczny.',
      l15: 'Amen.'
    }
  },

  /* ------------------------------------------------------------- Kościół */
  church: {
    h1: 'Kościół',
    intro: 'Woda Życia to współczesny kościół o ponadczasowym przesłaniu Ewangelii, w którym zwykły człowiek może poznać niezwykłego Boga i wyruszyć w najlepszą przygodę życia jaką jest podążanie za Chrystusem i realizowanie Jego wyjątkowego planu razem z innymi wierzącymi.',
    claim: { a: 'Mam w tym mieście', b: 'wielki lud' },
    claimSource: 'Dz. Ap. 18:10 | 1990',

    how: {
      q1: 'Jak żyjemy?',
      a1: 'Naśladując Chrystusa, żyjemy wartościami Królestwa Bożego.',
      q2: 'Co robimy?',
      a2: 'Tworzymy współczesny, wielopokoleniowy i charyzmatyczny kościół, który wyraża miłość do Boga i ludzi.',
      q3: 'Jak zwyciężamy?',
      a3a: 'Zwyciężamy prowadząc ludzi do pełnej życia relacji z Bogiem Ojcem.',
      a3b: 'Zwyciężamy doświadczając Boga na wspólnych spotkaniach, grupach domowych, konferencjach, eventach i relacjach 1-1.',
      a3c: 'Zwyciężamy przynosząc pozytywną zmianę w życiu naszego miasta.'
    },

    values: {
      h2: 'Wartości',
      v1: 'Jezus', v2: 'Ludzie', v3: 'Wspólnota', v4: 'Hojność', v5: 'Jakość'
    },

    pastor: {
      h3: 'Pastor Mateusz Godawa',
      text: 'Mateusz Godawa jest pastorem Kościoła Woda Życia. Razem z żoną Anetą od 2018 roku aktywnie tworzą lokalną społeczność w Koszalinie, inspirując do odkrywania niesamowitej przygody, którą jest codzienne życie w relacji z Chrystusem. Mateusz i Aneta są rodzicami Alisy i Eliana.',
      instagram: 'Instagram'
    },
    leaders: {
      h3: 'Zespół liderów',
      text: 'To nasz zespół – ludzie, którzy kochają Jezusa Chrystusa i kochają budować Jego kościół.'
    },
    founder: {
      h3: 'Pastor Paweł Godawa',
      text: 'Paweł Godawa (1967–2018) – od założenia przez prawie 30 lat był głównym pastorem kościoła „Woda Życia”. Historia jego powołania sięga czasów katolickiego ruchu charyzmatycznego lat 80. W swoich nauczaniach przedstawiał praktyczne podejście do wiary, Pisma Świętego i relacji człowieka z Bogiem. Przemiana myślenia, stylu życia, relacje z bliskimi, hojność czy budowanie kościoła lokalnego były najważniejszymi tematami jego nauczań. Autor książek: Zrozumienie życia, Sztuka słuchania, Niebo i piekło w kościele, Niebo i piekło w portfelu.',
      archive: 'Archiwum kazań',
      video: 'Pionierzy – o tych, którzy szli przed nami #2 pastor Paweł Godawa'
    }
  },

  /* ---------------------------------------------------------------- Kids */
  kids: {
    h1: 'Kids',
    intro: 'Chcemy widzieć młode pokolenie, które żyje z Bogiem! Dlatego jako wolontariusze tworzymy miejsce gdzie w przyjaznej atmosferze i w kreatywny sposób opowiadamy o Bogu, bawimy się, modlimy, uwielbiamy a nawet jemy wspólne śniadania!',
    sunday: {
      h2: { a: 'Niedziela z', b: 'kids' },
      p1: 'Co tydzień prowadzimy zajęcia dla dzieci w wieku 4-9 lat',
      p2: 'Rejestracja odbywa się w godzinach',
      p3: 'Dla rodziców i maluszków do lat 3 przygotowana jest sala zabaw oraz przewijak. Sala wyposażona jest w telewizor z transmisją spotkania.'
    },
    docs: {
      standards: 'Standardy Ochrony Dzieci',
      parents: 'Zasady dla rodziców'
    }
  },

  /* -------------------------------------------------------- Aktualności */
  news: {
    h1: 'Aktualności',
    intro: 'Co się u nas dzieje — wydarzenia, ogłoszenia i zaproszenia.',
    empty: 'Na razie nie ma nowych wpisów.',
    more: 'Czytaj dalej'
  },

  /* ------------------------------------------------------------ Wspieram */
  give: {
    h1: 'Wspieram',
    dotpay: {
      h2: 'Dotpay',
      p: 'Bezpieczny system płatności internetowych',
      howto: 'Instrukcja obsługi:',
      s1: '1. Podaj cel, np. ofiara lub dziesięcina,',
      s2: '2. Wybierz kwotę,',
      s3: '3. Kliknij przycisk „Zapłać online przez dotpay”. Nastąpi przekierowanie do wybrania metody płatności.',
      purpose: 'Cel:',
      amount: 'Kwota:',
      pay: 'Zapłać online przez dotpay'
    },
    paypal: {
      p: 'PayPal obsługuje płatności z salda PayPal oraz płatności popularnymi kartami kredytowymi.',
      alt: 'Przekaż darowiznę za pomocą przycisku PayPal',
      button: 'Przekaż darowiznę przez PayPal'
    },
    bank: {
      h2: 'Tradycyjny przelew bankowy',
      recipient: 'ODBIORCA:',
      taxNote: 'Wpisując w tytule przelewu „Darowizna na cele kultu religijnego”, możesz skorzystać z odpisu od podstawy opodatkowania w rozliczeniu rocznym.'
    },
    docs: {
      terms: 'Regulamin płatności',
      statute: 'Statut Kościoła Bożego w Chrystusie'
    }
  },

  /* ------------------------------------------------------------- Kontakt */
  contact: {
    h1: 'Kontakt',
    h2: { a: 'Kościół Woda', b: 'Życia' },
    labels: {
      address: 'Adres',
      phone: 'Telefon',
      email: 'E-mail',
      social: 'Media społecznościowe'
    },
    map: { h2: 'Jak do nas trafić', directions: 'Wyznacz trasę' }
  },

  /* -------------------------------------------- Polityka prywatności */
  privacy: {
    h1: 'Polityka prywatności',
    updated: 'Ostatnia aktualizacja: sierpień 2026',
    intro: 'Ta strona jest stroną statyczną — nie ma konta użytkownika, nie ma komentarzy, nie ma bazy danych. Poniżej opisujemy, jakie dane mimo to mogą zostać przetworzone i co możesz z tym zrobić.',
    s1: { h2: 'Kto jest administratorem danych',
          p: 'Administratorem danych jest Centrum Chrześcijańskie Woda Życia, ul. Władysława IV 147, 75-342 Koszalin. W sprawach dotyczących danych osobowych napisz na kontakt@wodazycia.org.' },
    s2: { h2: 'Formularz zapisu',
          p: 'Formularz na stronie „Jesteś tu pierwszy raz?” otwiera Twój program pocztowy z gotową treścią wiadomości. Dane nie są zapisywane na serwerze tej strony — trafiają do nas dopiero wtedy, gdy sam(a) wyślesz wiadomość. Używamy ich wyłącznie po to, żeby odpowiedzieć i przekazać termin spotkania. Podstawą jest Twoja zgoda (art. 6 ust. 1 lit. a RODO); możesz ją wycofać w każdej chwili.' },
    s3: { h2: 'Pliki cookies',
          p: 'Ta strona nie używa plików cookies do śledzenia ani do reklam. W pamięci przeglądarki zapisujemy tylko wybrany przez Ciebie język, żeby przy kolejnej wizycie nie trzeba było go ustawiać ponownie. Ta informacja nie opuszcza Twojego urządzenia.' },
    s4: { h2: 'Treści osadzone z innych serwisów',
          p: 'Nagrania z YouTube wczytują się dopiero po kliknięciu w podgląd — do tego momentu YouTube nie wie o Twojej wizycie. Mapa dojazdu pochodzi z OpenStreetMap i wczytuje się dopiero, gdy przewiniesz stronę do miejsca, w którym się znajduje. OpenStreetMap nie stosuje plików cookie ani reklam. Przyciski pod mapą prowadzą do Map Google albo Map Apple — dopiero po ich kliknięciu przechodzisz do tych serwisów. Przyciski płatności prowadzą do serwisów Dotpay i PayPal. Po przejściu do tych serwisów obowiązują ich własne zasady prywatności.' },
    s5: { h2: 'Statystyki i logi',
          p: 'Nie prowadzimy własnych statystyk odwiedzin. Dostawca hostingu może zapisywać techniczne logi serwera (adres IP, data, adres strony) na potrzeby bezpieczeństwa i utrzymania usługi.' },
    s6: { h2: 'Jak długo przechowujemy dane',
          p: 'Wiadomości e-mail przechowujemy tak długo, jak jest to potrzebne do załatwienia sprawy, a potem je usuwamy. Jeśli chcesz, żeby Twoje dane zostały usunięte wcześniej — napisz.' },
    s7: { h2: 'Twoje prawa',
          p: 'Masz prawo dostępu do swoich danych, ich sprostowania, usunięcia, ograniczenia przetwarzania, przeniesienia oraz wniesienia sprzeciwu. Masz też prawo wnieść skargę do Prezesa Urzędu Ochrony Danych Osobowych (ul. Stawki 2, 00-193 Warszawa).' },
    s8: { h2: 'Zmiany',
          p: 'Jeśli sposób przetwarzania danych się zmieni, zaktualizujemy ten dokument i zmienimy datę na górze strony.' }
  },

  /* ---------------------------------------------------------- błąd 404 */
  notfound: {
    h1: '404',
    p: 'Nie ma takiej strony. Może była pod innym adresem, a może zmienił się link.',
    cta: 'Wróć na stronę główną'
  }
},

/* ########  CZESKI  ######################################################### */
cs: {
  langName: 'Čeština',
  identity: 'Evangelikální sbor v polském Koszalinu na adrese ul. Władysława IV 147. Součást Církve Boží v Kristu, působí od roku 1990.',

  meta: {
    home:     { title: 'Sbor Woda Życia — Koszalin',
                desc: 'Sbor Woda Życia v Koszalinu. Shromáždění každou neděli v 11:00, ul. Władysława IV 147. Přijď k nám — jen tak.' },
    first:    { title: 'Jsi tu poprvé? | Woda Życia — Koszalin',
                desc: 'Co tě čeká na shromáždění v Koszalinu, odpovědi na časté otázky a čemu věříme.' },
    church:   { title: 'Sbor | Woda Życia — Koszalin',
                desc: 'Kdo jsme, jak žijeme a co děláme. Pastor Mateusz Godawa, tým vedoucích a historie sboru Woda Życia v Koszalinu.' },
    kids:     { title: 'Kids | Woda Życia — Koszalin',
                desc: 'Program pro děti od 4 do 9 let každou neděli v Koszalinu. Herna a přebalovací pult pro nejmenší.' },
    news:     { title: 'Aktuality | Woda Życia — Koszalin',
                desc: 'Novinky, akce a oznámení ze života sboru Woda Życia v Koszalinu.' },
    give:     { title: 'Podpořte nás | Woda Życia — Koszalin',
                desc: 'Jak podpořit sbor Woda Życia v Koszalinu: platba online, PayPal nebo běžný bankovní převod.' },
    contact:  { title: 'Kontakt | Woda Życia — Koszalin',
                desc: 'ul. Władysława IV 147, 75-342 Koszalin. Napište nám nebo se prostě stavte.' },
    privacy:  { title: 'Ochrana osobních údajů | Woda Życia — Koszalin',
                desc: 'Jak sbor Woda Życia nakládá s osobními údaji a jaká máte podle GDPR práva.' },
    notfound: { title: 'Stránka nenalezena | Woda Życia — Koszalin', desc: '' }
  },

  ui: {
    skip: 'Přejít na obsah',
    menu: 'Menu',
    language: 'Jazyk',
    playVideo: 'Přehrát záznam',
    liveStream: 'Živý přenos',
    openIn: 'Otevřít v novém okně',
    download: 'Stáhnout',
    loading: 'Načítání…'
  },

  nav: {
    home: 'Úvod',
    first: 'Jsi tu poprvé?',
    church: 'Sbor',
    kids: 'Kids',
    news: 'Aktuality',
    give: 'Podpořte nás',
    contact: 'Kontakt',
    privacy: 'Ochrana osobních údajů'
  },

  footer: {
    name: 'Sbor Woda Życia',
    follow: 'Najdete nás',
    rights: 'Všechna práva vyhrazena.'
  },

  home: {
    h1: 'Woda Życia',
    hero: { a: 'HEJ!', b: 'AHOJ!', c: 'VÍTEJ!', cta: 'Pojďme se poznat' },
    visit: {
      h2: 'Přijď k nám',
      p: 'Jen tak. Bez ohledu na to, odkud jsi, kolik ti je, čemu věříš, jak se oblékáš nebo koho volíš.',
      cta: 'Kontakt'
    },
    online: {
      h2: 'Sleduj shromáždění online',
      channel: 'Náš kanál na YouTube',
      archive: 'Záznamy starších shromáždění'
    },
    inspire: {
      h2: 'Načerpej inspiraci!',
      current: 'Poslechni si aktuální kázání. Všechna najdeš na Spotify nebo Apple Podcasts',
      archive: 'Poslechni si kázání z archivu. Všechna najdeš na Spotify nebo Apple Podcasts',
      currentAlt: 'Kanál sboru Woda Życia',
      archiveAlt: 'Pastor Paweł Godawa'
    },
    news: { h2: 'Aktuality', all: 'Všechny aktuality' }
  },

  first: {
    h1: { a: 'Jsi tu', b: 'poprvé', c: '?' },
    intro: 'Už přes 30 let tvoříme v Koszalinu otevřené křesťanské společenství. Pocházíme z různých prostředí, máme různé příběhy, ale spojuje nás jedno – Ježíš Kristus. Jsme přesvědčeni, že život ve víře je fascinující dobrodružství, do kterého Bůh zve každého člověka – i tebe!',
    faqCta: 'Nejčastější dotazy',

    faq: {
      h2: { a: 'Nejčastější', b: 'dotazy' },
      q1: 'Je Woda Życia katolické společenství?',
      a1a: 'Ne, ale dobře, že se ptáš! Sbor Woda Życia patří k evangelikálním církvím a je součástí federace „KBWCH“, která v Polsku sdružuje přes 80 sborů. Jsme otevření jiným denominacím a chceme mezi sebou stavět mosty, ne zdi.',
      a1b: 'Církev Boží v Kristu (KBWCH) byla zaregistrována 27. února 1988. Dnes je zapsaná v Rejstříku církví a náboženských společností, který vede Odbor vyznání polského ministerstva vnitra, oddíl A, pol. 28.',
      q2: 'Můžu k vám na shromáždění prostě přijít?',
      a2: 'Rozhodně ANO',
      q3: 'Jak vypadá běžné shromáždění?',
      a3worship: 'CHVÁLY',
      a3worshipText: 'zpíváme, modlíme se a chválíme Boha při hudbě hrané naživo',
      a3sermon: 'KÁZÁNÍ',
      a3sermonText: 'pastor nebo pozvaný řečník se dělí o praktické poselství vycházející z Písma',
      a3prayer: 'MODLITBA',
      a3prayerText: 'shromáždění zakončujeme společnou modlitbou, někdy také zpěvem',
      a3offering: 'Na většině shromáždění dáváme prostor pro dobrovolnou finanční sbírku na potřeby sboru',
      a3cafe: 'Po skončení shromáždění zveme do naší kavárny',
      q4: 'Musím se během shromáždění nějak zapojovat?',
      a4: 'Ne. Můžeš prostě přijít, pohodlně se posadit, poslouchat a kdykoli odejít.',
      q5: 'Můžu přijít s dětmi?',
      a5: 'Ano. Děti od 4 do 9 let mají vlastní program vedený našimi dobrovolníky, pro mladší máme hernu s hračkami a místnost s přebalovacím pultem',
      a5link: 'Více o WODA ŻYCIA KIDS'
    },

    start: {
      h2: { a: 'Woda Życia', b: 'start' },
      p: 'Chceš nás poznat ještě lépe? Tohle setkání je pro tebe. Dozvíš se víc o naší historii, hodnotách a možnostech zapojení a poznáš zajímavé lidi, kteří tohle místo tvoří. Přihlas se a pošleme ti datum a čas setkání.',
      name: 'Jméno a příjmení',
      email: 'E-mail',
      phone: 'Telefon',
      consent: 'Souhlasím se',
      consentLink: 'zásadami ochrany osobních údajů',
      send: 'Přihlásit se',
      hint: 'Formulář otevře tvůj e-mailový program s připravenou zprávou. Můžeš také napsat rovnou na kontakt@wodazycia.org.',
      subject: 'Přihláška na setkání Woda Życia start'
    },

    believe: {
      h2: { a: 'Čemu', b: 'věříme', c: '?' },
      i1: { title: 'Bůh Otec',
            text: 'Existuje jeden věčný, všemohoucí a všudypřítomný Bůh. Podle učení Ježíše Krista je dobrým, milujícím Otcem, který touží po vztahu s každým člověkem.',
            verses: 'J 4,24 / Mt 6,9 / 1J 4,14-16' },
      i2: { title: 'Ježíš Kristus',
            text: 'Přišel na svět jako člověk, aby světu předal poselství o Bohu Otci, vykoupil lidstvo z hříchu svou smrtí na kříži a vzkříšením a dal nový život každému, kdo v Něho uvěří.',
            verses: 'Mt 11,27 / 1Tm 2,5-6 / Ř 5,1 / Ř 10,9' },
      i3: { title: 'Duch svatý',
            text: 'Podle zaslíbení Ježíše Krista byl po Jeho nanebevstoupení na zem seslán Duch svatý, aby budoval církev, podpíral věřící a jednal skrze ně.',
            verses: 'J 14,16-20 / Sk 1,1-8 / Sk 2,1-4' },
      i4: { title: 'Nové narození',
            text: 'Každý člověk, který přijímá spasení skrze víru v Ježíše Krista, se v duchovní skutečnosti rodí znovu jako Boží dítě. Díky tomu je možný vztah s Bohem, nový život i život ve věčnosti.',
            verses: 'J 3,1-18 / Mk 1,15 / Ř 10,9-13 / J 1,12-13' },
      i5: { title: 'Křest',
            text: 'Křtem se každý věřící ztotožňuje s Ježíšem Kristem, nechává za sebou minulost a vyznává život v odevzdanosti Bohu.',
            verses: 'Mt 28,16-20 / Ř 6,1-14 / Ga 3,26-27' },
      i6: { title: 'Církev',
            text: 'Ježíš Kristus zemřel a vstal z mrtvých, aby smířil člověka s Bohem, ale také aby smířil lidi navzájem. Proto církev není budova, ale LIDÉ – tělo Kristovo – Boží rodina. Je to místo pro každého, kde být spolu, sloužit, duchovně růst a prostě sdílet svůj život s druhými.',
            verses: 'Mt 16,18 / Sk 2,42-47 / Ef 2,19-21' },
      i7: { title: 'Bible',
            text: 'Věříme, že Písmo svaté – Starý a Nový zákon – není jen sbírkou zajímavých příběhů, ale především Slovem vdechnutým Bohem, které obsahuje nadčasové pokyny, moudrost a Boží zaslíbení a je základem pro všechny otázky křesťanského života a víry.',
            verses: '2Tm 3,16-17' },
      i8: { title: 'Věčnost',
            text: 'Každý, kdo se narodil, musí jednou také zemřít, ale tady náš příběh nekončí. Díky Ježíši Kristu a spasení můžeme mít jistotu své budoucnosti – věčnosti s Bohem a se všemi věřícími.',
            verses: 'Kaz 3,11 / J 3,16 / 2K 4,16-18' }
    },

    creed: {
      title: 'Apoštolské vyznání víry',
      l1: 'Věřím v Boha, Otce všemohoucího,',
      l2: 'Stvořitele nebe i země,',
      l3: 'i v Ježíše Krista, Syna jeho jediného, Pána našeho,',
      l4: 'jenž se počal z Ducha svatého,',
      l5: 'narodil se z Marie Panny,',
      l6: 'trpěl pod Pontským Pilátem,',
      l7: 'ukřižován, umřel i pohřben jest,',
      l8: 'sestoupil do pekel, třetího dne vstal z mrtvých,',
      l9: 'vstoupil na nebesa, sedí po pravici Boha, Otce všemohoucího,',
      l10: 'odtud přijde soudit živé i mrtvé.',
      l11: 'Věřím v Ducha svatého,',
      l12: 'svatou církev obecnou,',
      l13: 'svatých obcování, hříchů odpuštění,',
      l14: 'těla z mrtvých vzkříšení a život věčný.',
      l15: 'Amen.'
    }
  },

  church: {
    h1: 'Sbor',
    intro: 'Woda Życia je současný sbor s nadčasovým poselstvím evangelia, kde obyčejný člověk může poznat neobyčejného Boha a vyrazit na nejlepší dobrodružství života – následovat Krista a naplňovat Jeho jedinečný plán spolu s dalšími věřícími.',
    claim: { a: 'Mám v tomto městě', b: 'veliký lid' },
    claimSource: 'Sk 18,10 | 1990',

    how: {
      q1: 'Jak žijeme?',
      a1: 'Následujeme Krista a žijeme hodnotami Božího království.',
      q2: 'Co děláme?',
      a2: 'Tvoříme současný, vícegenerační a charismatický sbor, který vyjadřuje lásku k Bohu a k lidem.',
      q3: 'Jak vítězíme?',
      a3a: 'Vítězíme tím, že vedeme lidi do živého vztahu s Bohem Otcem.',
      a3b: 'Vítězíme tím, že Boha zažíváme na společných shromážděních, v domácích skupinkách, na konferencích, akcích a ve vztazích jeden na jednoho.',
      a3c: 'Vítězíme tím, že přinášíme pozitivní změnu do života našeho města.'
    },

    values: {
      h2: 'Hodnoty',
      v1: 'Ježíš', v2: 'Lidé', v3: 'Společenství', v4: 'Štědrost', v5: 'Kvalita'
    },

    pastor: {
      h3: 'Pastor Mateusz Godawa',
      text: 'Mateusz Godawa je pastorem sboru Woda Życia. Spolu s manželkou Anetou od roku 2018 aktivně budují místní společenství v Koszalinu a inspirují k objevování úžasného dobrodružství, jímž je každodenní život ve vztahu s Kristem. Mateusz a Aneta jsou rodiči Alisy a Eliana.',
      instagram: 'Instagram'
    },
    leaders: {
      h3: 'Tým vedoucích',
      text: 'To je náš tým – lidé, kteří milují Ježíše Krista a milují budování Jeho církve.'
    },
    founder: {
      h3: 'Pastor Paweł Godawa',
      text: 'Paweł Godawa (1967–2018) – od založení byl téměř 30 let hlavním pastorem sboru „Woda Życia“. Příběh jeho povolání sahá do doby katolického charismatického hnutí 80. let. Ve svých kázáních představoval praktický přístup k víře, Písmu a vztahu člověka s Bohem. Proměna myšlení a životního stylu, vztahy s blízkými, štědrost a budování místního sboru byly nejdůležitějšími tématy jeho vyučování. Autor knih: Zrozumienie życia, Sztuka słuchania, Niebo i piekło w kościele, Niebo i piekło w portfelu.',
      archive: 'Archiv kázání',
      video: 'Pionýři – o těch, kteří šli před námi #2, pastor Paweł Godawa'
    }
  },

  kids: {
    h1: 'Kids',
    intro: 'Chceme vidět mladou generaci, která žije s Bohem! Proto jako dobrovolníci tvoříme místo, kde v přátelské atmosféře a tvořivě vyprávíme o Bohu, hrajeme si, modlíme se, chválíme a dokonce spolu snídáme!',
    sunday: {
      h2: { a: 'Neděle s', b: 'kids' },
      p1: 'Každý týden vedeme program pro děti od 4 do 9 let',
      p2: 'Registrace probíhá v čase',
      p3: 'Pro rodiče a nejmenší do 3 let je připravená herna a přebalovací pult. Místnost je vybavená televizí s přenosem shromáždění.'
    },
    docs: {
      standards: 'Standardy ochrany dětí',
      parents: 'Pravidla pro rodiče'
    }
  },

  news: {
    h1: 'Aktuality',
    intro: 'Co se u nás děje — akce, oznámení a pozvánky.',
    empty: 'Zatím tu nejsou žádné nové příspěvky.',
    more: 'Číst dál'
  },

  give: {
    h1: 'Podpořte nás',
    dotpay: {
      h2: 'Dotpay',
      p: 'Bezpečný systém internetových plateb',
      howto: 'Návod:',
      s1: '1. Uveďte účel, např. dar nebo desátek,',
      s2: '2. Zvolte částku,',
      s3: '3. Klikněte na tlačítko „Zaplatit online přes dotpay“. Budete přesměrováni na výběr způsobu platby.',
      purpose: 'Účel:',
      amount: 'Částka:',
      pay: 'Zaplatit online přes dotpay'
    },
    paypal: {
      p: 'PayPal umožňuje platbu ze zůstatku PayPal i běžnými platebními kartami.',
      alt: 'Poslat dar přes tlačítko PayPal',
      button: 'Poslat dar přes PayPal'
    },
    bank: {
      h2: 'Běžný bankovní převod',
      recipient: 'PŘÍJEMCE:',
      taxNote: 'Uvedete-li do zprávy pro příjemce „Darowizna na cele kultu religijnego“, můžete si dar podle polských předpisů odečíst od základu daně v ročním zúčtování.'
    },
    docs: {
      terms: 'Podmínky plateb',
      statute: 'Statut Církve Boží v Kristu'
    }
  },

  contact: {
    h1: 'Kontakt',
    h2: { a: 'Sbor Woda', b: 'Życia' },
    labels: {
      address: 'Adresa',
      phone: 'Telefon',
      email: 'E-mail',
      social: 'Sociální sítě'
    },
    map: { h2: 'Jak se k nám dostanete', directions: 'Zobrazit trasu' }
  },

  privacy: {
    h1: 'Ochrana osobních údajů',
    updated: 'Poslední aktualizace: srpen 2026',
    intro: 'Tenhle web je statický — nemá uživatelské účty, komentáře ani databázi. Níž popisujeme, jaké údaje se přesto mohou zpracovat a co s tím můžete dělat.',
    s1: { h2: 'Kdo je správcem údajů',
          p: 'Správcem údajů je Centrum Chrześcijańskie Woda Życia, ul. Władysława IV 147, 75-342 Koszalin, Polsko. Ve věcech osobních údajů pište na kontakt@wodazycia.org.' },
    s2: { h2: 'Formulář přihlášky',
          p: 'Formulář na stránce „Jsi tu poprvé?“ otevře váš e-mailový program s připravenou zprávou. Údaje se na serveru tohoto webu neukládají — dostaneme je až ve chvíli, kdy zprávu sami odešlete. Používáme je výhradně k odpovědi a k zaslání termínu setkání. Právním základem je váš souhlas (čl. 6 odst. 1 písm. a GDPR); můžete ho kdykoli odvolat.' },
    s3: { h2: 'Cookies',
          p: 'Tento web nepoužívá cookies ke sledování ani k reklamě. V paměti prohlížeče si ukládáme jen zvolený jazyk, abyste ho při další návštěvě nemuseli nastavovat znovu. Tahle informace vaše zařízení neopouští.' },
    s4: { h2: 'Obsah vložený z jiných služeb',
          p: 'Videa z YouTube se načtou až po kliknutí na náhled — do té doby o vaší návštěvě YouTube neví. Mapa pochází z OpenStreetMap a načte se, teprve když k ní stránku odrolujete. OpenStreetMap nepoužívá cookies ani reklamu. Tlačítka pod mapou vedou do Map Google nebo Map Apple — do těch služeb přejdete až po kliknutí. Platební tlačítka vedou na Dotpay a PayPal. Po přechodu na tyto služby platí jejich vlastní zásady ochrany údajů.' },
    s5: { h2: 'Statistiky a logy',
          p: 'Vlastní statistiky návštěvnosti nevedeme. Poskytovatel hostingu může ukládat technické logy serveru (IP adresa, datum, adresa stránky) kvůli bezpečnosti a provozu služby.' },
    s6: { h2: 'Jak dlouho údaje uchováváme',
          p: 'E-maily uchováváme tak dlouho, jak je potřeba k vyřízení věci, potom je mažeme. Pokud chcete své údaje smazat dřív, napište nám.' },
    s7: { h2: 'Vaše práva',
          p: 'Máte právo na přístup ke svým údajům, jejich opravu, výmaz, omezení zpracování, přenositelnost a právo vznést námitku. Máte také právo podat stížnost u polského dozorového úřadu (Prezes Urzędu Ochrony Danych Osobowych, ul. Stawki 2, 00-193 Warszawa).' },
    s8: { h2: 'Změny',
          p: 'Pokud se způsob zpracování údajů změní, tento dokument aktualizujeme a změníme datum nahoře.' }
  },

  notfound: {
    h1: '404',
    p: 'Taková stránka tu není. Možná byla jinde, možná se změnil odkaz.',
    cta: 'Zpět na úvodní stránku'
  }
},

/* ########  SŁOWACKI  ####################################################### */
sk: {
  langName: 'Slovenčina',
  identity: 'Evanjelikálny zbor v poľskom Koszaline na adrese ul. Władysława IV 147. Súčasť Cirkvi Božej v Kristovi, pôsobí od roku 1990.',

  meta: {
    home:     { title: 'Zbor Woda Życia — Koszalin',
                desc: 'Zbor Woda Życia v Koszaline. Stretnutia každú nedeľu o 11:00, ul. Władysława IV 147. Príď k nám — len tak.' },
    first:    { title: 'Si tu prvýkrát? | Woda Życia — Koszalin',
                desc: 'Čo ťa čaká na stretnutí v Koszaline, odpovede na časté otázky a čomu veríme.' },
    church:   { title: 'Zbor | Woda Życia — Koszalin',
                desc: 'Kto sme, ako žijeme a čo robíme. Pastor Mateusz Godawa, tím vedúcich a história zboru Woda Życia v Koszaline.' },
    kids:     { title: 'Kids | Woda Życia — Koszalin',
                desc: 'Program pre deti od 4 do 9 rokov každú nedeľu v Koszaline. Herňa a prebaľovací pult pre najmenších.' },
    news:     { title: 'Aktuality | Woda Życia — Koszalin',
                desc: 'Novinky, akcie a oznamy zo života zboru Woda Życia v Koszaline.' },
    give:     { title: 'Podporte nás | Woda Życia — Koszalin',
                desc: 'Ako podporiť zbor Woda Życia v Koszaline: platba online, PayPal alebo bežný bankový prevod.' },
    contact:  { title: 'Kontakt | Woda Życia — Koszalin',
                desc: 'ul. Władysława IV 147, 75-342 Koszalin. Napíšte nám alebo sa jednoducho zastavte.' },
    privacy:  { title: 'Ochrana osobných údajov | Woda Życia — Koszalin',
                desc: 'Ako zbor Woda Życia nakladá s osobnými údajmi a aké máte podľa GDPR práva.' },
    notfound: { title: 'Stránka sa nenašla | Woda Życia — Koszalin', desc: '' }
  },

  ui: {
    skip: 'Prejsť na obsah',
    menu: 'Menu',
    language: 'Jazyk',
    playVideo: 'Prehrať záznam',
    liveStream: 'Živý prenos',
    openIn: 'Otvoriť v novom okne',
    download: 'Stiahnuť',
    loading: 'Načítava sa…'
  },

  nav: {
    home: 'Úvod',
    first: 'Si tu prvýkrát?',
    church: 'Zbor',
    kids: 'Kids',
    news: 'Aktuality',
    give: 'Podporte nás',
    contact: 'Kontakt',
    privacy: 'Ochrana osobných údajov'
  },

  footer: {
    name: 'Zbor Woda Życia',
    follow: 'Nájdete nás',
    rights: 'Všetky práva vyhradené.'
  },

  home: {
    h1: 'Woda Życia',
    hero: { a: 'HEJ!', b: 'AHOJ!', c: 'VITAJ!', cta: 'Poďme sa spoznať' },
    visit: {
      h2: 'Príď k nám',
      p: 'Len tak. Bez ohľadu na to, odkiaľ si, koľko máš rokov, čomu veríš, ako sa obliekaš alebo koho volíš.',
      cta: 'Kontakt'
    },
    online: {
      h2: 'Sleduj stretnutia online',
      channel: 'Náš kanál na YouTube',
      archive: 'Záznamy starších stretnutí'
    },
    inspire: {
      h2: 'Inšpiruj sa!',
      current: 'Vypočuj si aktuálne kázne. Všetky nájdeš na Spotify alebo Apple Podcasts',
      archive: 'Vypočuj si kázne z archívu. Všetky nájdeš na Spotify alebo Apple Podcasts',
      currentAlt: 'Kanál zboru Woda Życia',
      archiveAlt: 'Pastor Paweł Godawa'
    },
    news: { h2: 'Aktuality', all: 'Všetky aktuality' }
  },

  first: {
    h1: { a: 'Si tu', b: 'prvýkrát', c: '?' },
    intro: 'Už vyše 30 rokov tvoríme v Koszaline otvorené kresťanské spoločenstvo. Pochádzame z rôznych prostredí, máme rôzne príbehy, ale spája nás jedno – Ježiš Kristus. Sme presvedčení, že život vo viere je fascinujúce dobrodružstvo, do ktorého Boh pozýva každého človeka – aj teba!',
    faqCta: 'Najčastejšie otázky',

    faq: {
      h2: { a: 'Najčastejšie', b: 'otázky' },
      q1: 'Je Woda Życia katolícke spoločenstvo?',
      a1a: 'Nie, ale dobre, že sa pýtaš! Zbor Woda Życia patrí k evanjelikálnym cirkvám a je súčasťou federácie „KBWCH“, ktorá v Poľsku združuje vyše 80 zborov. Sme otvorení iným denomináciám a chceme medzi sebou stavať mosty, nie múry.',
      a1b: 'Cirkev Božia v Kristovi (KBWCH) bola zaregistrovaná 27. februára 1988. Dnes je zapísaná v Registri cirkví a náboženských spoločností, ktorý vedie Odbor vyznaní poľského ministerstva vnútra, oddiel A, pol. 28.',
      q2: 'Môžem k vám na stretnutie jednoducho prísť?',
      a2: 'Rozhodne ÁNO',
      q3: 'Ako vyzerá bežné stretnutie?',
      a3worship: 'CHVÁLY',
      a3worshipText: 'spievame, modlíme sa a chválime Boha pri hudbe hranej naživo',
      a3sermon: 'KÁZEŇ',
      a3sermonText: 'pastor alebo pozvaný rečník sa delí o praktické posolstvo vychádzajúce z Písma',
      a3prayer: 'MODLITBA',
      a3prayerText: 'stretnutie zakončujeme spoločnou modlitbou, niekedy aj spevom',
      a3offering: 'Na väčšine stretnutí dávame priestor na dobrovoľnú finančnú zbierku na potreby zboru',
      a3cafe: 'Po skončení stretnutia pozývame do našej kaviarne',
      q4: 'Musím sa počas stretnutia nejako zapájať?',
      a4: 'Nie. Môžeš jednoducho prísť, pohodlne si sadnúť, počúvať a kedykoľvek odísť.',
      q5: 'Môžem prísť s deťmi?',
      a5: 'Áno. Deti od 4 do 9 rokov majú vlastný program vedený našimi dobrovoľníkmi, pre mladšie máme herňu s hračkami a miestnosť s prebaľovacím pultom',
      a5link: 'Viac o WODA ŻYCIA KIDS'
    },

    start: {
      h2: { a: 'Woda Życia', b: 'start' },
      p: 'Chceš nás spoznať ešte lepšie? Toto stretnutie je pre teba. Dozvieš sa viac o našej histórii, hodnotách a možnostiach zapojenia a spoznáš zaujímavých ľudí, ktorí toto miesto tvoria. Prihlás sa a pošleme ti dátum a čas stretnutia.',
      name: 'Meno a priezvisko',
      email: 'E-mail',
      phone: 'Telefón',
      consent: 'Súhlasím so',
      consentLink: 'zásadami ochrany osobných údajov',
      send: 'Prihlásiť sa',
      hint: 'Formulár otvorí tvoj e-mailový program s pripravenou správou. Môžeš tiež napísať priamo na kontakt@wodazycia.org.',
      subject: 'Prihláška na stretnutie Woda Życia start'
    },

    believe: {
      h2: { a: 'Čomu', b: 'veríme', c: '?' },
      i1: { title: 'Boh Otec',
            text: 'Existuje jeden večný, všemohúci a všadeprítomný Boh. Podľa učenia Ježiša Krista je dobrým, milujúcim Otcom, ktorý túži po vzťahu s každým človekom.',
            verses: 'Jn 4,24 / Mt 6,9 / 1Jn 4,14-16' },
      i2: { title: 'Ježiš Kristus',
            text: 'Prišiel na svet ako človek, aby svetu odovzdal posolstvo o Bohu Otcovi, vykúpil ľudstvo z hriechu svojou smrťou na kríži a vzkriesením a dal nový život každému, kto v Neho uverí.',
            verses: 'Mt 11,27 / 1Tim 2,5-6 / Rim 5,1 / Rim 10,9' },
      i3: { title: 'Duch Svätý',
            text: 'Podľa zasľúbenia Ježiša Krista bol po Jeho nanebovstúpení na zem zoslaný Duch Svätý, aby budoval cirkev, podporoval veriacich a konal skrze nich.',
            verses: 'Jn 14,16-20 / Sk 1,1-8 / Sk 2,1-4' },
      i4: { title: 'Nové narodenie',
            text: 'Každý človek, ktorý prijíma spasenie vierou v Ježiša Krista, sa v duchovnej skutočnosti rodí znova ako Božie dieťa. Vďaka tomu je možný vzťah s Bohom, nový život aj život vo večnosti.',
            verses: 'Jn 3,1-18 / Mk 1,15 / Rim 10,9-13 / Jn 1,12-13' },
      i5: { title: 'Krst',
            text: 'Krstom sa každý veriaci stotožňuje s Ježišom Kristom, necháva za sebou minulosť a vyznáva život v oddanosti Bohu.',
            verses: 'Mt 28,16-20 / Rim 6,1-14 / Gal 3,26-27' },
      i6: { title: 'Cirkev',
            text: 'Ježiš Kristus zomrel a vstal z mŕtvych, aby zmieril človeka s Bohom, ale aj aby zmieril ľudí navzájom. Preto cirkev nie je budova, ale ĽUDIA – telo Kristovo – Božia rodina. Je to miesto pre každého, kde byť spolu, slúžiť, duchovne rásť a jednoducho zdieľať svoj život s druhými.',
            verses: 'Mt 16,18 / Sk 2,42-47 / Ef 2,19-21' },
      i7: { title: 'Biblia',
            text: 'Veríme, že Písmo sväté – Starý a Nový zákon – nie je len zbierkou zaujímavých príbehov, ale predovšetkým Slovom vdýchnutým Bohom, ktoré obsahuje nadčasové pokyny, múdrosť a Božie zasľúbenia a je základom pre všetky otázky kresťanského života a viery.',
            verses: '2Tim 3,16-17' },
      i8: { title: 'Večnosť',
            text: 'Každý, kto sa narodil, musí raz aj zomrieť, ale tu sa náš príbeh nekončí. Vďaka Ježišovi Kristovi a spaseniu môžeme mať istotu svojej budúcnosti – večnosti s Bohom a so všetkými veriacimi.',
            verses: 'Kaz 3,11 / Jn 3,16 / 2Kor 4,16-18' }
    },

    creed: {
      title: 'Apoštolské vyznanie viery',
      l1: 'Verím v Boha, Otca všemohúceho,',
      l2: 'Stvoriteľa neba i zeme,',
      l3: 'i v Ježiša Krista, Syna jeho jediného, Pána nášho,',
      l4: 'ktorý sa počal z Ducha Svätého,',
      l5: 'narodil sa z Márie Panny,',
      l6: 'trpel pod Pontským Pilátom,',
      l7: 'ukrižovaný umrel a pochovaný bol,',
      l8: 'zostúpil do pekiel, tretieho dňa vstal z mŕtvych,',
      l9: 'vstúpil na nebesia, sedí po pravici Boha, Otca všemohúceho,',
      l10: 'odtiaľ príde súdiť živých i mŕtvych.',
      l11: 'Verím v Ducha Svätého,',
      l12: 'svätú cirkev všeobecnú,',
      l13: 'svätých obcovanie, hriechov odpustenie,',
      l14: 'tela z mŕtvych vzkriesenie a život večný.',
      l15: 'Amen.'
    }
  },

  church: {
    h1: 'Zbor',
    intro: 'Woda Życia je súčasný zbor s nadčasovým posolstvom evanjelia, kde obyčajný človek môže spoznať neobyčajného Boha a vyraziť na najlepšie dobrodružstvo života – nasledovať Krista a napĺňať Jeho jedinečný plán spolu s ďalšími veriacimi.',
    claim: { a: 'Mám v tomto meste', b: 'veľký ľud' },
    claimSource: 'Sk 18,10 | 1990',

    how: {
      q1: 'Ako žijeme?',
      a1: 'Nasledujeme Krista a žijeme hodnotami Božieho kráľovstva.',
      q2: 'Čo robíme?',
      a2: 'Tvoríme súčasný, viacgeneračný a charizmatický zbor, ktorý vyjadruje lásku k Bohu a k ľuďom.',
      q3: 'Ako víťazíme?',
      a3a: 'Víťazíme tým, že vedieme ľudí do živého vzťahu s Bohom Otcom.',
      a3b: 'Víťazíme tým, že Boha zažívame na spoločných stretnutiach, v domácich skupinkách, na konferenciách, akciách a vo vzťahoch jeden na jedného.',
      a3c: 'Víťazíme tým, že prinášame pozitívnu zmenu do života nášho mesta.'
    },

    values: {
      h2: 'Hodnoty',
      v1: 'Ježiš', v2: 'Ľudia', v3: 'Spoločenstvo', v4: 'Štedrosť', v5: 'Kvalita'
    },

    pastor: {
      h3: 'Pastor Mateusz Godawa',
      text: 'Mateusz Godawa je pastorom zboru Woda Życia. Spolu s manželkou Anetou od roku 2018 aktívne budujú miestne spoločenstvo v Koszaline a inšpirujú k objavovaniu úžasného dobrodružstva, ktorým je každodenný život vo vzťahu s Kristom. Mateusz a Aneta sú rodičmi Alisy a Eliana.',
      instagram: 'Instagram'
    },
    leaders: {
      h3: 'Tím vedúcich',
      text: 'To je náš tím – ľudia, ktorí milujú Ježiša Krista a milujú budovať Jeho cirkev.'
    },
    founder: {
      h3: 'Pastor Paweł Godawa',
      text: 'Paweł Godawa (1967–2018) – od založenia bol takmer 30 rokov hlavným pastorom zboru „Woda Życia“. Príbeh jeho povolania siaha do čias katolíckeho charizmatického hnutia 80. rokov. Vo svojich kázňach predstavoval praktický prístup k viere, Písmu a vzťahu človeka s Bohom. Premena myslenia a životného štýlu, vzťahy s blízkymi, štedrosť a budovanie miestneho zboru boli najdôležitejšími témami jeho vyučovania. Autor kníh: Zrozumienie życia, Sztuka słuchania, Niebo i piekło w kościele, Niebo i piekło w portfelu.',
      archive: 'Archív kázní',
      video: 'Priekopníci – o tých, ktorí šli pred nami #2, pastor Paweł Godawa'
    }
  },

  kids: {
    h1: 'Kids',
    intro: 'Chceme vidieť mladú generáciu, ktorá žije s Bohom! Preto ako dobrovoľníci tvoríme miesto, kde v priateľskej atmosfére a tvorivo rozprávame o Bohu, hráme sa, modlíme sa, chválime a dokonca spolu raňajkujeme!',
    sunday: {
      h2: { a: 'Nedeľa s', b: 'kids' },
      p1: 'Každý týždeň vedieme program pre deti od 4 do 9 rokov',
      p2: 'Registrácia prebieha v čase',
      p3: 'Pre rodičov a najmenších do 3 rokov je pripravená herňa a prebaľovací pult. Miestnosť je vybavená televízorom s prenosom stretnutia.'
    },
    docs: {
      standards: 'Štandardy ochrany detí',
      parents: 'Pravidlá pre rodičov'
    }
  },

  news: {
    h1: 'Aktuality',
    intro: 'Čo sa u nás deje — akcie, oznamy a pozvánky.',
    empty: 'Zatiaľ tu nie sú žiadne nové príspevky.',
    more: 'Čítať ďalej'
  },

  give: {
    h1: 'Podporte nás',
    dotpay: {
      h2: 'Dotpay',
      p: 'Bezpečný systém internetových platieb',
      howto: 'Návod:',
      s1: '1. Uveďte účel, napr. dar alebo desiatok,',
      s2: '2. Zvoľte sumu,',
      s3: '3. Kliknite na tlačidlo „Zaplatiť online cez dotpay“. Budete presmerovaní na výber spôsobu platby.',
      purpose: 'Účel:',
      amount: 'Suma:',
      pay: 'Zaplatiť online cez dotpay'
    },
    paypal: {
      p: 'PayPal umožňuje platbu zo zostatku PayPal aj bežnými platobnými kartami.',
      alt: 'Poslať dar cez tlačidlo PayPal',
      button: 'Poslať dar cez PayPal'
    },
    bank: {
      h2: 'Bežný bankový prevod',
      recipient: 'PRÍJEMCA:',
      taxNote: 'Ak do správy pre príjemcu uvediete „Darowizna na cele kultu religijnego“, môžete si dar podľa poľských predpisov odpočítať od základu dane v ročnom zúčtovaní.'
    },
    docs: {
      terms: 'Podmienky platieb',
      statute: 'Štatút Cirkvi Božej v Kristovi'
    }
  },

  contact: {
    h1: 'Kontakt',
    h2: { a: 'Zbor Woda', b: 'Życia' },
    labels: {
      address: 'Adresa',
      phone: 'Telefón',
      email: 'E-mail',
      social: 'Sociálne siete'
    },
    map: { h2: 'Ako sa k nám dostanete', directions: 'Zobraziť trasu' }
  },

  privacy: {
    h1: 'Ochrana osobných údajov',
    updated: 'Posledná aktualizácia: august 2026',
    intro: 'Táto stránka je statická — nemá používateľské účty, komentáre ani databázu. Nižšie popisujeme, aké údaje sa napriek tomu môžu spracovať a čo s tým môžete urobiť.',
    s1: { h2: 'Kto je prevádzkovateľom údajov',
          p: 'Prevádzkovateľom údajov je Centrum Chrześcijańskie Woda Życia, ul. Władysława IV 147, 75-342 Koszalin, Poľsko. Vo veciach osobných údajov píšte na kontakt@wodazycia.org.' },
    s2: { h2: 'Formulár prihlášky',
          p: 'Formulár na stránke „Si tu prvýkrát?“ otvorí váš e-mailový program s pripravenou správou. Údaje sa na serveri tejto stránky neukladajú — dostaneme ich až vtedy, keď správu sami odošlete. Používame ich výhradne na odpoveď a na zaslanie termínu stretnutia. Právnym základom je váš súhlas (čl. 6 ods. 1 písm. a GDPR); môžete ho kedykoľvek odvolať.' },
    s3: { h2: 'Cookies',
          p: 'Táto stránka nepoužíva cookies na sledovanie ani na reklamu. V pamäti prehliadača si ukladáme len zvolený jazyk, aby ste ho pri ďalšej návšteve nemuseli nastavovať znova. Táto informácia vaše zariadenie neopúšťa.' },
    s4: { h2: 'Obsah vložený z iných služieb',
          p: 'Videá z YouTube sa načítajú až po kliknutí na náhľad — dovtedy o vašej návšteve YouTube nevie. Mapa pochádza z OpenStreetMap a načíta sa, až keď k nej stránku posuniete. OpenStreetMap nepoužíva cookies ani reklamu. Tlačidlá pod mapou vedú do Máp Google alebo Máp Apple — do tých služieb prejdete až po kliknutí. Platobné tlačidlá vedú na Dotpay a PayPal. Po prechode na tieto služby platia ich vlastné zásady ochrany údajov.' },
    s5: { h2: 'Štatistiky a logy',
          p: 'Vlastné štatistiky návštevnosti nevedieme. Poskytovateľ hostingu môže ukladať technické logy servera (IP adresa, dátum, adresa stránky) kvôli bezpečnosti a prevádzke služby.' },
    s6: { h2: 'Ako dlho údaje uchovávame',
          p: 'E-maily uchovávame tak dlho, ako je potrebné na vybavenie veci, potom ich mažeme. Ak chcete svoje údaje vymazať skôr, napíšte nám.' },
    s7: { h2: 'Vaše práva',
          p: 'Máte právo na prístup k svojim údajom, ich opravu, výmaz, obmedzenie spracovania, prenosnosť a právo namietať. Máte tiež právo podať sťažnosť poľskému dozornému úradu (Prezes Urzędu Ochrony Danych Osobowych, ul. Stawki 2, 00-193 Warszawa).' },
    s8: { h2: 'Zmeny',
          p: 'Ak sa spôsob spracovania údajov zmení, tento dokument aktualizujeme a zmeníme dátum hore.' }
  },

  notfound: {
    h1: '404',
    p: 'Taká stránka tu nie je. Možno bola inde, možno sa zmenil odkaz.',
    cta: 'Späť na úvodnú stránku'
  }
},

/* ########  UKRAIŃSKI  ###################################################### */
uk: {
  langName: 'Українська',
  identity: 'Євангельська церква в польському Кошаліні на вул. Владислава IV, 147. Частина Церкви Божої у Христі, діє з 1990 року.',

  meta: {
    home:     { title: 'Церква Woda Życia — Кошалін',
                desc: 'Церква Woda Życia в Кошаліні. Зібрання щонеділі об 11:00, вул. Владислава IV, 147. Завітай до нас — просто так.' },
    first:    { title: 'Ти тут уперше? | Woda Życia — Кошалін',
                desc: 'Що на тебе чекає на зібранні в Кошаліні, відповіді на найчастіші запитання і в що ми віримо.' },
    church:   { title: 'Церква | Woda Życia — Кошалін',
                desc: 'Хто ми, як живемо і що робимо. Пастор Матеуш Ґодава, команда лідерів та історія церкви Woda Życia в Кошаліні.' },
    kids:     { title: 'Kids | Woda Życia — Кошалін',
                desc: 'Заняття для дітей 4–9 років щонеділі в Кошаліні. Ігрова кімната та сповивальний столик для найменших.' },
    news:     { title: 'Новини | Woda Życia — Кошалін',
                desc: 'Новини, події та оголошення з життя церкви Woda Życia в Кошаліні.' },
    give:     { title: 'Підтримую | Woda Życia — Кошалін',
                desc: 'Як підтримати церкву Woda Życia в Кошаліні: онлайн-платіж, PayPal або звичайний банківський переказ.' },
    contact:  { title: 'Контакт | Woda Życia — Кошалін',
                desc: 'вул. Владислава IV, 147, 75-342 Кошалін. Напиши нам або просто завітай.' },
    privacy:  { title: 'Політика конфіденційності | Woda Życia — Кошалін',
                desc: 'Як церква Woda Życia поводиться з персональними даними і які права ти маєш згідно з GDPR.' },
    notfound: { title: 'Сторінку не знайдено | Woda Życia — Кошалін', desc: '' }
  },

  ui: {
    skip: 'Перейти до вмісту',
    menu: 'Меню',
    language: 'Мова',
    playVideo: 'Відтворити запис',
    liveStream: 'Пряма трансляція',
    openIn: 'Відкрити в новому вікні',
    download: 'Завантажити',
    loading: 'Завантаження…'
  },

  nav: {
    home: 'Головна',
    first: 'Ти тут уперше?',
    church: 'Церква',
    kids: 'Kids',
    news: 'Новини',
    give: 'Підтримую',
    contact: 'Контакт',
    privacy: 'Політика конфіденційності'
  },

  footer: {
    name: 'Церква Woda Życia',
    follow: 'Знайди нас',
    rights: 'Усі права захищено.'
  },

  home: {
    h1: 'Woda Życia',
    hero: { a: 'ГЕЙ!', b: 'ПРИВІТ!', c: 'ВІТАЄМО!', cta: 'Познайомимось' },
    visit: {
      h2: 'Завітай до нас',
      p: 'Просто так. Незалежно від того, звідки ти, скільки тобі років, у що віриш, як одягаєшся чи за кого голосуєш.',
      cta: 'Контакт'
    },
    online: {
      h2: 'Дивись зібрання онлайн',
      channel: 'Наш канал на YouTube',
      archive: 'Записи попередніх зібрань'
    },
    inspire: {
      h2: 'Надихнись!',
      current: 'Послухай актуальні проповіді. Усі знайдеш на Spotify або Apple Podcasts',
      archive: 'Послухай проповіді з архіву. Усі знайдеш на Spotify або Apple Podcasts',
      currentAlt: 'Канал церкви Woda Życia',
      archiveAlt: 'Пастор Павел Ґодава'
    },
    news: { h2: 'Новини', all: 'Усі новини' }
  },

  first: {
    h1: { a: 'Ти тут', b: 'уперше', c: '?' },
    intro: 'Понад 30 років ми будуємо в Кошаліні відкриту християнську спільноту. Ми з різних середовищ, маємо різні історії, але нас об’єднує одне — Ісус Христос. Ми переконані, що життя у вірі — це захоплива пригода, до якої Бог запрошує кожну людину, і тебе теж!',
    faqCta: 'Найчастіші запитання',

    faq: {
      h2: { a: 'Найчастіші', b: 'запитання' },
      q1: 'Чи Woda Życia — це католицька спільнота?',
      a1a: 'Ні, але добре, що питаєш! Церква Woda Życia належить до євангельських церков і є частиною федерації «KBWCH», яка об’єднує понад 80 громад у Польщі. Ми відкриті до інших конфесій і хочемо будувати мости, а не мури між собою.',
      a1b: 'Церкву Божу у Христі (KBWCH) зареєстровано 27 лютого 1988 року. Зараз вона внесена до Реєстру церков і релігійних об’єднань, який веде Департамент віросповідань МВС Польщі, розділ A, поз. 28.',
      q2: 'Чи можна просто прийти на ваше зібрання?',
      a2: 'Однозначно ТАК',
      q3: 'Як виглядає звичайне зібрання?',
      a3worship: 'ПОКЛОНІННЯ',
      a3worshipText: 'співаємо, молимось і прославляємо Бога під живу музику',
      a3sermon: 'ПРОПОВІДЬ',
      a3sermonText: 'пастор або запрошений спікер ділиться практичним посланням на основі Святого Письма',
      a3prayer: 'МОЛИТВА',
      a3prayerText: 'зібрання завершуємо спільною молитвою, іноді також співом',
      a3offering: 'На більшості зібрань ми даємо простір для добровільних грошових пожертв на потреби церкви',
      a3cafe: 'Після зібрання запрошуємо до нашої кав’ярні',
      q4: 'Чи треба щось особливе робити під час зібрання?',
      a4: 'Ні. Можеш просто прийти, зручно сісти, послухати і вийти, коли захочеш.',
      q5: 'Чи можна прийти з дітьми?',
      a5: 'Так. Діти віком 4–9 років мають окреме заняття, яке ведуть наші волонтери, а для менших є кімната з іграшками та кімната зі сповивальним столиком',
      a5link: 'Дізнайся більше про WODA ŻYCIA KIDS'
    },

    start: {
      h2: { a: 'Woda Życia', b: 'start' },
      p: 'Хочеш пізнати нас ще краще? Ця зустріч для тебе. Дізнаєшся більше про нашу історію, цінності, можливості долучитися і познайомишся з цікавими людьми, які творять це місце. Запишись, і ми надішлемо тобі дату та час зустрічі.',
      name: 'Ім’я та прізвище',
      email: 'Електронна пошта',
      phone: 'Телефон',
      consent: 'Приймаю',
      consentLink: 'політику конфіденційності',
      send: 'Записатися',
      hint: 'Форма відкриє твою поштову програму з готовим листом. Можеш також написати прямо на kontakt@wodazycia.org.',
      subject: 'Запис на зустріч Woda Życia start'
    },

    believe: {
      h2: { a: 'У що ми', b: 'віримо', c: '?' },
      i1: { title: 'Бог Отець',
            text: 'Існує один вічний, всемогутній і всюдисущий Бог. Згідно з ученням Ісуса Христа Він є добрим, люблячим Отцем, який прагне стосунків з кожною людиною.',
            verses: 'Ів. 4:24 / Мт. 6:9 / 1 Ів. 4:14-16' },
      i2: { title: 'Ісус Христос',
            text: 'Прийшов у світ як людина, щоб передати світові звістку про Бога Отця, викупити людство від гріха через смерть на хресті й воскресіння та дати нове життя кожному, хто в Нього повірить.',
            verses: 'Мт. 11:27 / 1 Тим. 2:5-6 / Рим. 5:1 / Рим. 10:9' },
      i3: { title: 'Святий Дух',
            text: 'Згідно з обітницею Ісуса Христа, після Його вознесіння на землю був посланий Святий Дух, щоб будувати Церкву, підтримувати віруючих і діяти через них.',
            verses: 'Ів. 14:16-20 / Дії 1:1-8 / Дії 2:1-4' },
      i4: { title: 'Нове народження',
            text: 'Кожна людина, яка приймає спасіння через віру в Ісуса Христа, у духовній реальності народжується наново як Боже дитя. Завдяки цьому стають можливими стосунки з Богом, нове життя і життя у вічності.',
            verses: 'Ів. 3:1-18 / Мк. 1:15 / Рим. 10:9-13 / Ів. 1:12-13' },
      i5: { title: 'Хрещення',
            text: 'Через хрещення кожен віруючий ототожнює себе з Ісусом Христом, залишаючи позаду минуле і проголошуючи життя у відданості Богові.',
            verses: 'Мт. 28:16-20 / Рим. 6:1-14 / Гал. 3:26-27' },
      i6: { title: 'Церква',
            text: 'Ісус Христос помер і воскрес, щоб примирити людину з Богом, а також щоб примирити людей між собою. Тому церква — це не будівля, а ЛЮДИ — тіло Христове — Божа родина. Це місце для кожного, щоб бути разом, служити, духовно зростати і просто ділити своє життя з іншими.',
            verses: 'Мт. 16:18 / Дії 2:42-47 / Еф. 2:19-21' },
      i7: { title: 'Біблія',
            text: 'Ми віримо, що Святе Письмо — Старий і Новий Заповіт — це не просто збірка цікавих історій, а насамперед Слово, натхнене Богом, яке містить позачасові настанови, мудрість, Божі обітниці і є основою для всіх питань християнського життя та віри.',
            verses: '2 Тим. 3:16-17' },
      i8: { title: 'Вічність',
            text: 'Кожен, хто народився, колись мусить померти, але тут наша історія не закінчується. Завдяки Ісусу Христу і спасінню ми можемо мати впевненість у своєму майбутньому — вічності з Богом і з усіма віруючими.',
            verses: 'Екл. 3:11 / Ів. 3:16 / 2 Кор. 4:16-18' }
    },

    creed: {
      title: 'Апостольський Символ віри',
      l1: 'Вірую в Бога Отця Вседержителя,',
      l2: 'Творця неба і землі,',
      l3: 'і в Ісуса Христа, Сина Його Єдинородного, Господа нашого,',
      l4: 'що зачався від Духа Святого,',
      l5: 'народився від Марії Діви,',
      l6: 'страждав за Понтія Пилата,',
      l7: 'був розп’ятий, помер і був похований,',
      l8: 'зійшов до пекла, третього дня воскрес із мертвих,',
      l9: 'вознісся на небеса, сидить праворуч Бога Отця Вседержителя,',
      l10: 'звідти прийде судити живих і мертвих.',
      l11: 'Вірую в Духа Святого,',
      l12: 'святу Вселенську Церкву,',
      l13: 'спілкування святих, прощення гріхів,',
      l14: 'воскресіння тіла і життя вічне.',
      l15: 'Амінь.'
    }
  },

  church: {
    h1: 'Церква',
    intro: 'Woda Życia — це сучасна церква з позачасовим посланням Євангелія, де звичайна людина може пізнати незвичайного Бога і вирушити в найкращу пригоду життя — іти за Христом і здійснювати Його особливий план разом з іншими віруючими.',
    claim: { a: 'У мене в цьому місті', b: 'численний народ' },
    claimSource: 'Дії 18:10 | 1990',

    how: {
      q1: 'Як ми живемо?',
      a1: 'Наслідуючи Христа, живемо цінностями Божого Царства.',
      q2: 'Що ми робимо?',
      a2: 'Творимо сучасну, багатопоколінну і харизматичну церкву, яка виражає любов до Бога і до людей.',
      q3: 'Як ми перемагаємо?',
      a3a: 'Перемагаємо, ведучи людей до сповненої життя стосунків з Богом Отцем.',
      a3b: 'Перемагаємо, переживаючи Бога на спільних зібраннях, у домашніх групах, на конференціях, подіях і в стосунках віч-на-віч.',
      a3c: 'Перемагаємо, приносячи позитивну зміну в життя нашого міста.'
    },

    values: {
      h2: 'Цінності',
      v1: 'Ісус', v2: 'Люди', v3: 'Спільнота', v4: 'Щедрість', v5: 'Якість'
    },

    pastor: {
      h3: 'Пастор Матеуш Ґодава',
      text: 'Матеуш Ґодава — пастор церкви Woda Życia. Разом із дружиною Анетою з 2018 року вони активно творять місцеву спільноту в Кошаліні, надихаючи відкривати неймовірну пригоду, якою є щоденне життя у стосунках із Христом. Матеуш і Анета — батьки Аліси та Еліана.',
      instagram: 'Instagram'
    },
    leaders: {
      h3: 'Команда лідерів',
      text: 'Це наша команда — люди, які люблять Ісуса Христа і люблять будувати Його церкву.'
    },
    founder: {
      h3: 'Пастор Павел Ґодава',
      text: 'Павел Ґодава (1967–2018) — від заснування протягом майже 30 років був головним пастором церкви «Woda Życia». Історія його покликання сягає часів католицького харизматичного руху 80-х років. У своїх проповідях він представляв практичний підхід до віри, Святого Письма і стосунків людини з Богом. Зміна мислення, стилю життя, стосунки з близькими, щедрість і будування місцевої церкви були найважливішими темами його вчення. Автор книжок: Zrozumienie życia, Sztuka słuchania, Niebo i piekło w kościele, Niebo i piekło w portfelu.',
      archive: 'Архів проповідей',
      video: 'Піонери — про тих, хто йшов перед нами #2, пастор Павел Ґодава'
    }
  },

  kids: {
    h1: 'Kids',
    intro: 'Ми хочемо бачити молоде покоління, яке живе з Богом! Тому як волонтери створюємо місце, де в дружній атмосфері і креативно розповідаємо про Бога, граємось, молимось, прославляємо і навіть разом снідаємо!',
    sunday: {
      h2: { a: 'Неділя з', b: 'kids' },
      p1: 'Щотижня проводимо заняття для дітей 4–9 років',
      p2: 'Реєстрація триває',
      p3: 'Для батьків і малюків до 3 років підготовлена ігрова кімната та сповивальний столик. Кімната обладнана телевізором із трансляцією зібрання.'
    },
    docs: {
      standards: 'Стандарти захисту дітей',
      parents: 'Правила для батьків'
    }
  },

  news: {
    h1: 'Новини',
    intro: 'Що в нас відбувається — події, оголошення і запрошення.',
    empty: 'Поки що немає нових записів.',
    more: 'Читати далі'
  },

  give: {
    h1: 'Підтримую',
    dotpay: {
      h2: 'Dotpay',
      p: 'Безпечна система інтернет-платежів',
      howto: 'Інструкція:',
      s1: '1. Вкажи мету, напр. пожертва або десятина,',
      s2: '2. Обери суму,',
      s3: '3. Натисни кнопку «Оплатити онлайн через dotpay». Відбудеться перехід до вибору способу оплати.',
      purpose: 'Мета:',
      amount: 'Сума:',
      pay: 'Оплатити онлайн через dotpay'
    },
    paypal: {
      p: 'PayPal підтримує платежі з балансу PayPal, а також популярними кредитними картками.',
      alt: 'Зробити пожертву за допомогою кнопки PayPal',
      button: 'Пожертвувати через PayPal'
    },
    bank: {
      h2: 'Звичайний банківський переказ',
      recipient: 'ОТРИМУВАЧ:',
      taxNote: 'Вписавши в призначенні платежу «Darowizna na cele kultu religijnego», можна скористатися відрахуванням від бази оподаткування в річній декларації (згідно з польськими правилами).'
    },
    docs: {
      terms: 'Правила платежів',
      statute: 'Статут Церкви Божої у Христі'
    }
  },

  contact: {
    h1: 'Контакт',
    h2: { a: 'Церква Woda', b: 'Życia' },
    labels: {
      address: 'Адреса',
      phone: 'Телефон',
      email: 'Електронна пошта',
      social: 'Соціальні мережі'
    },
    map: { h2: 'Як нас знайти', directions: 'Прокласти маршрут' }
  },

  privacy: {
    h1: 'Політика конфіденційності',
    updated: 'Останнє оновлення: серпень 2026',
    intro: 'Ця сторінка статична — тут немає облікових записів, коментарів чи бази даних. Нижче описано, які дані попри це можуть оброблятися і що ти можеш із цим зробити.',
    s1: { h2: 'Хто є розпорядником даних',
          p: 'Розпорядником даних є Centrum Chrześcijańskie Woda Życia, вул. Владислава IV, 147, 75-342 Кошалін, Польща. У справах персональних даних пиши на kontakt@wodazycia.org.' },
    s2: { h2: 'Форма запису',
          p: 'Форма на сторінці «Ти тут уперше?» відкриває твою поштову програму з готовим текстом листа. Дані не зберігаються на сервері цього сайту — вони потрапляють до нас лише тоді, коли ти сам(а) надішлеш повідомлення. Ми використовуємо їх виключно для відповіді та повідомлення про дату зустрічі. Підставою є твоя згода (ст. 6 п. 1 літ. a GDPR); ти можеш відкликати її будь-коли.' },
    s3: { h2: 'Файли cookie',
          p: 'Цей сайт не використовує файли cookie для відстеження чи реклами. У пам’яті браузера зберігається лише обрана мова, щоб під час наступного візиту не треба було встановлювати її знову. Ця інформація не залишає твій пристрій.' },
    s4: { h2: 'Вміст, вбудований з інших сервісів',
          p: 'Відео з YouTube завантажується лише після натискання на прев’ю — до цього моменту YouTube не знає про твій візит. Карта походить з OpenStreetMap і завантажується лише тоді, коли ти прокрутиш сторінку до неї. OpenStreetMap не використовує файли cookie й рекламу. Кнопки під картою ведуть до Google Карт або Карт Apple — до цих сервісів ти переходиш аж після натискання. Кнопки оплати ведуть до сервісів Dotpay і PayPal. Після переходу діють їхні власні правила конфіденційності.' },
    s5: { h2: 'Статистика та журнали',
          p: 'Ми не ведемо власної статистики відвідувань. Провайдер хостингу може зберігати технічні журнали сервера (IP-адреса, дата, адреса сторінки) для безпеки та обслуговування послуги.' },
    s6: { h2: 'Як довго ми зберігаємо дані',
          p: 'Електронні листи зберігаємо стільки, скільки потрібно для вирішення справи, а потім видаляємо. Якщо хочеш, щоб твої дані видалили раніше, напиши нам.' },
    s7: { h2: 'Твої права',
          p: 'Ти маєш право на доступ до своїх даних, їх виправлення, видалення, обмеження обробки, перенесення, а також право заперечувати. Маєш також право подати скаргу до польського наглядового органу (Prezes Urzędu Ochrony Danych Osobowych, ul. Stawki 2, 00-193 Warszawa).' },
    s8: { h2: 'Зміни',
          p: 'Якщо спосіб обробки даних зміниться, ми оновимо цей документ і змінимо дату вгорі сторінки.' }
  },

  notfound: {
    h1: '404',
    p: 'Такої сторінки немає. Можливо, вона була за іншою адресою, а можливо, змінилося посилання.',
    cta: 'Повернутися на головну'
  }
},

/* ########  ROSYJSKI  ####################################################### */
ru: {
  langName: 'Русский',
  identity: 'Евангельская церковь в польском Кошалине на ул. Владислава IV, 147. Часть Церкви Божьей во Христе, действует с 1990 года.',

  meta: {
    home:     { title: 'Церковь Woda Życia — Кошалин',
                desc: 'Церковь Woda Życia в Кошалине. Собрания каждое воскресенье в 11:00, ул. Владислава IV, 147. Заходи к нам — просто так.' },
    first:    { title: 'Ты здесь впервые? | Woda Życia — Кошалин',
                desc: 'Что тебя ждёт на собрании в Кошалине, ответы на частые вопросы и во что мы верим.' },
    church:   { title: 'Церковь | Woda Życia — Кошалин',
                desc: 'Кто мы, как живём и что делаем. Пастор Матеуш Годава, команда лидеров и история церкви Woda Życia в Кошалине.' },
    kids:     { title: 'Kids | Woda Życia — Кошалин',
                desc: 'Занятия для детей 4–9 лет каждое воскресенье в Кошалине. Игровая комната и пеленальный столик для самых маленьких.' },
    news:     { title: 'Новости | Woda Życia — Кошалин',
                desc: 'Новости, события и объявления из жизни церкви Woda Życia в Кошалине.' },
    give:     { title: 'Поддерживаю | Woda Życia — Кошалин',
                desc: 'Как поддержать церковь Woda Życia в Кошалине: онлайн-платёж, PayPal или обычный банковский перевод.' },
    contact:  { title: 'Контакт | Woda Życia — Кошалин',
                desc: 'ул. Владислава IV, 147, 75-342 Кошалин. Напиши нам или просто зайди.' },
    privacy:  { title: 'Политика конфиденциальности | Woda Życia — Кошалин',
                desc: 'Как церковь Woda Życia обращается с персональными данными и какие у тебя права по GDPR.' },
    notfound: { title: 'Страница не найдена | Woda Życia — Кошалин', desc: '' }
  },

  ui: {
    skip: 'Перейти к содержанию',
    menu: 'Меню',
    language: 'Язык',
    playVideo: 'Воспроизвести запись',
    liveStream: 'Прямая трансляция',
    openIn: 'Открыть в новом окне',
    download: 'Скачать',
    loading: 'Загрузка…'
  },

  nav: {
    home: 'Главная',
    first: 'Ты здесь впервые?',
    church: 'Церковь',
    kids: 'Kids',
    news: 'Новости',
    give: 'Поддерживаю',
    contact: 'Контакт',
    privacy: 'Политика конфиденциальности'
  },

  footer: {
    name: 'Церковь Woda Życia',
    follow: 'Найди нас',
    rights: 'Все права защищены.'
  },

  home: {
    h1: 'Woda Życia',
    hero: { a: 'ЭЙ!', b: 'ПРИВЕТ!', c: 'ДОБРО ПОЖАЛОВАТЬ!', cta: 'Давай познакомимся' },
    visit: {
      h2: 'Заходи к нам',
      p: 'Просто так. Независимо от того, откуда ты, сколько тебе лет, во что веришь, как одеваешься и за кого голосуешь.',
      cta: 'Контакт'
    },
    online: {
      h2: 'Смотри собрания онлайн',
      channel: 'Наш канал на YouTube',
      archive: 'Записи прошлых собраний'
    },
    inspire: {
      h2: 'Вдохновляйся!',
      current: 'Послушай актуальные проповеди. Все найдёшь на Spotify или Apple Podcasts',
      archive: 'Послушай проповеди из архива. Все найдёшь на Spotify или Apple Podcasts',
      currentAlt: 'Канал церкви Woda Życia',
      archiveAlt: 'Пастор Павел Годава'
    },
    news: { h2: 'Новости', all: 'Все новости' }
  },

  first: {
    h1: { a: 'Ты здесь', b: 'впервые', c: '?' },
    intro: 'Уже более 30 лет мы создаём в Кошалине открытое христианское сообщество. Мы из разной среды, у нас разные истории, но нас объединяет одно — Иисус Христос. Мы убеждены, что жизнь в вере — это захватывающее приключение, к которому Бог приглашает каждого человека, и тебя тоже!',
    faqCta: 'Часто задаваемые вопросы',

    faq: {
      h2: { a: 'Частые', b: 'вопросы' },
      q1: 'Woda Życia — это католическая община?',
      a1a: 'Нет, но хорошо, что ты спрашиваешь! Церковь Woda Życia относится к евангельским церквям и является частью федерации «KBWCH», объединяющей более 80 общин в Польше. Мы открыты к другим конфессиям и хотим строить мосты, а не стены между собой.',
      a1b: 'Церковь Божья во Христе (KBWCH) была зарегистрирована 27 февраля 1988 года. Сейчас она внесена в Реестр церквей и религиозных объединений, который ведёт Департамент вероисповеданий МВД Польши, раздел A, поз. 28.',
      q2: 'Можно просто прийти на ваше собрание?',
      a2: 'Однозначно ДА',
      q3: 'Как выглядит обычное собрание?',
      a3worship: 'ПОКЛОНЕНИЕ',
      a3worshipText: 'поём, молимся и прославляем Бога под живую музыку',
      a3sermon: 'ПРОПОВЕДЬ',
      a3sermonText: 'пастор или приглашённый спикер делится практическим посланием на основе Священного Писания',
      a3prayer: 'МОЛИТВА',
      a3prayerText: 'собрание завершаем общей молитвой, иногда также пением',
      a3offering: 'На большинстве собраний мы даём место для добровольных денежных пожертвований на нужды церкви',
      a3cafe: 'После собрания приглашаем в наше кафе',
      q4: 'Нужно ли делать что-то особенное во время собрания?',
      a4: 'Нет. Можешь просто прийти, удобно сесть, послушать и выйти, когда захочешь.',
      q5: 'Можно прийти с детьми?',
      a5: 'Да. У детей 4–9 лет есть отдельное занятие, которое ведут наши волонтёры, а для младших есть комната с игрушками и комната с пеленальным столиком',
      a5link: 'Узнай больше о WODA ŻYCIA KIDS'
    },

    start: {
      h2: { a: 'Woda Życia', b: 'start' },
      p: 'Хочешь узнать нас ещё лучше? Эта встреча для тебя. Ты узнаешь больше о нашей истории, ценностях, возможностях участия и познакомишься с интересными людьми, которые создают это место. Запишись, и мы пришлём тебе дату и время встречи.',
      name: 'Имя и фамилия',
      email: 'Электронная почта',
      phone: 'Телефон',
      consent: 'Принимаю',
      consentLink: 'политику конфиденциальности',
      send: 'Записаться',
      hint: 'Форма откроет твою почтовую программу с готовым письмом. Также можешь написать прямо на kontakt@wodazycia.org.',
      subject: 'Запись на встречу Woda Życia start'
    },

    believe: {
      h2: { a: 'Во что мы', b: 'верим', c: '?' },
      i1: { title: 'Бог Отец',
            text: 'Существует один вечный, всемогущий и вездесущий Бог. Согласно учению Иисуса Христа Он — добрый, любящий Отец, который желает отношений с каждым человеком.',
            verses: 'Ин. 4:24 / Мф. 6:9 / 1 Ин. 4:14-16' },
      i2: { title: 'Иисус Христос',
            text: 'Пришёл в мир как человек, чтобы передать миру весть о Боге Отце, искупить человечество от греха через смерть на кресте и воскресение и дать новую жизнь каждому, кто в Него поверит.',
            verses: 'Мф. 11:27 / 1 Тим. 2:5-6 / Рим. 5:1 / Рим. 10:9' },
      i3: { title: 'Святой Дух',
            text: 'Согласно обещанию Иисуса Христа, после Его вознесения на землю был послан Святой Дух, чтобы строить Церковь, поддерживать верующих и действовать через них.',
            verses: 'Ин. 14:16-20 / Деян. 1:1-8 / Деян. 2:1-4' },
      i4: { title: 'Новое рождение',
            text: 'Каждый человек, принимающий спасение через веру в Иисуса Христа, в духовной реальности рождается заново как Божье дитя. Благодаря этому становятся возможны отношения с Богом, новая жизнь и жизнь в вечности.',
            verses: 'Ин. 3:1-18 / Мк. 1:15 / Рим. 10:9-13 / Ин. 1:12-13' },
      i5: { title: 'Крещение',
            text: 'Через крещение каждый верующий отождествляет себя с Иисусом Христом, оставляя позади прошлое и провозглашая жизнь в посвящении Богу.',
            verses: 'Мф. 28:16-20 / Рим. 6:1-14 / Гал. 3:26-27' },
      i6: { title: 'Церковь',
            text: 'Иисус Христос умер и воскрес, чтобы примирить человека с Богом, а также чтобы примирить людей друг с другом. Поэтому церковь — это не здание, а ЛЮДИ — тело Христово — Божья семья. Это место для каждого, чтобы быть вместе, служить, духовно расти и просто делить свою жизнь с другими.',
            verses: 'Мф. 16:18 / Деян. 2:42-47 / Еф. 2:19-21' },
      i7: { title: 'Библия',
            text: 'Мы верим, что Священное Писание — Ветхий и Новый Завет — это не просто сборник интересных историй, а прежде всего Слово, вдохновлённое Богом, которое содержит вневременные наставления, мудрость, Божьи обещания и является основанием для всех вопросов христианской жизни и веры.',
            verses: '2 Тим. 3:16-17' },
      i8: { title: 'Вечность',
            text: 'Каждый, кто родился, однажды должен умереть, но здесь наша история не заканчивается. Благодаря Иисусу Христу и спасению мы можем иметь уверенность в своём будущем — вечности с Богом и со всеми верующими.',
            verses: 'Еккл. 3:11 / Ин. 3:16 / 2 Кор. 4:16-18' }
    },

    creed: {
      title: 'Апостольский Символ веры',
      l1: 'Верую в Бога Отца Всемогущего,',
      l2: 'Творца неба и земли,',
      l3: 'и в Иисуса Христа, Сына Его Единородного, Господа нашего,',
      l4: 'зачатого от Духа Святого,',
      l5: 'рождённого от Марии Девы,',
      l6: 'страдавшего при Понтии Пилате,',
      l7: 'распятого, умершего и погребённого,',
      l8: 'сошедшего в ад, в третий день воскресшего из мёртвых,',
      l9: 'вознёсшегося на небеса, сидящего одесную Бога Отца Всемогущего,',
      l10: 'оттуда придёт судить живых и мёртвых.',
      l11: 'Верую в Духа Святого,',
      l12: 'святую Вселенскую Церковь,',
      l13: 'общение святых, прощение грехов,',
      l14: 'воскресение тела и жизнь вечную.',
      l15: 'Аминь.'
    }
  },

  church: {
    h1: 'Церковь',
    intro: 'Woda Życia — это современная церковь с вневременной вестью Евангелия, где обычный человек может познать необычного Бога и отправиться в лучшее приключение жизни — следовать за Христом и осуществлять Его особый план вместе с другими верующими.',
    claim: { a: 'У Меня много людей', b: 'в этом городе' },
    claimSource: 'Деян. 18:10 | 1990',

    how: {
      q1: 'Как мы живём?',
      a1: 'Следуя за Христом, мы живём ценностями Божьего Царства.',
      q2: 'Что мы делаем?',
      a2: 'Мы созидаем современную, многопоколенную и харизматическую церковь, которая выражает любовь к Богу и к людям.',
      q3: 'Как мы побеждаем?',
      a3a: 'Побеждаем, приводя людей к полным жизни отношениям с Богом Отцом.',
      a3b: 'Побеждаем, переживая Бога на общих собраниях, в домашних группах, на конференциях, событиях и в отношениях один на один.',
      a3c: 'Побеждаем, принося положительные перемены в жизнь нашего города.'
    },

    values: {
      h2: 'Ценности',
      v1: 'Иисус', v2: 'Люди', v3: 'Общность', v4: 'Щедрость', v5: 'Качество'
    },

    pastor: {
      h3: 'Пастор Матеуш Годава',
      text: 'Матеуш Годава — пастор церкви Woda Życia. Вместе с женой Анетой с 2018 года они активно созидают местное сообщество в Кошалине, вдохновляя открывать удивительное приключение, которым является повседневная жизнь в отношениях со Христом. Матеуш и Анета — родители Алисы и Элиана.',
      instagram: 'Instagram'
    },
    leaders: {
      h3: 'Команда лидеров',
      text: 'Это наша команда — люди, которые любят Иисуса Христа и любят строить Его церковь.'
    },
    founder: {
      h3: 'Пастор Павел Годава',
      text: 'Павел Годава (1967–2018) — с основания почти 30 лет был главным пастором церкви «Woda Życia». История его призвания восходит ко временам католического харизматического движения 80-х годов. В своих проповедях он представлял практический подход к вере, Священному Писанию и отношениям человека с Богом. Изменение мышления, образа жизни, отношения с близкими, щедрость и созидание поместной церкви были важнейшими темами его учения. Автор книг: Zrozumienie życia, Sztuka słuchania, Niebo i piekło w kościele, Niebo i piekło w portfelu.',
      archive: 'Архив проповедей',
      video: 'Пионеры — о тех, кто шёл перед нами #2, пастор Павел Годава'
    }
  },

  kids: {
    h1: 'Kids',
    intro: 'Мы хотим видеть молодое поколение, которое живёт с Богом! Поэтому как волонтёры создаём место, где в дружеской атмосфере и творчески рассказываем о Боге, играем, молимся, прославляем и даже вместе завтракаем!',
    sunday: {
      h2: { a: 'Воскресенье с', b: 'kids' },
      p1: 'Каждую неделю проводим занятия для детей 4–9 лет',
      p2: 'Регистрация проходит',
      p3: 'Для родителей и малышей до 3 лет подготовлена игровая комната и пеленальный столик. Комната оборудована телевизором с трансляцией собрания.'
    },
    docs: {
      standards: 'Стандарты защиты детей',
      parents: 'Правила для родителей'
    }
  },

  news: {
    h1: 'Новости',
    intro: 'Что у нас происходит — события, объявления и приглашения.',
    empty: 'Пока нет новых записей.',
    more: 'Читать дальше'
  },

  give: {
    h1: 'Поддерживаю',
    dotpay: {
      h2: 'Dotpay',
      p: 'Безопасная система интернет-платежей',
      howto: 'Инструкция:',
      s1: '1. Укажи цель, напр. пожертвование или десятина,',
      s2: '2. Выбери сумму,',
      s3: '3. Нажми кнопку «Оплатить онлайн через dotpay». Произойдёт переход к выбору способа оплаты.',
      purpose: 'Цель:',
      amount: 'Сумма:',
      pay: 'Оплатить онлайн через dotpay'
    },
    paypal: {
      p: 'PayPal поддерживает платежи с баланса PayPal, а также популярными кредитными картами.',
      alt: 'Сделать пожертвование с помощью кнопки PayPal',
      button: 'Пожертвовать через PayPal'
    },
    bank: {
      h2: 'Обычный банковский перевод',
      recipient: 'ПОЛУЧАТЕЛЬ:',
      taxNote: 'Указав в назначении платежа «Darowizna na cele kultu religijnego», можно воспользоваться вычетом из налоговой базы в годовой декларации (по польским правилам).'
    },
    docs: {
      terms: 'Правила платежей',
      statute: 'Устав Церкви Божьей во Христе'
    }
  },

  contact: {
    h1: 'Контакт',
    h2: { a: 'Церковь Woda', b: 'Życia' },
    labels: {
      address: 'Адрес',
      phone: 'Телефон',
      email: 'Электронная почта',
      social: 'Социальные сети'
    },
    map: { h2: 'Как нас найти', directions: 'Проложить маршрут' }
  },

  privacy: {
    h1: 'Политика конфиденциальности',
    updated: 'Последнее обновление: август 2026',
    intro: 'Этот сайт статический — здесь нет учётных записей, комментариев и базы данных. Ниже описано, какие данные тем не менее могут обрабатываться и что ты можешь с этим сделать.',
    s1: { h2: 'Кто является администратором данных',
          p: 'Администратор данных — Centrum Chrześcijańskie Woda Życia, ул. Владислава IV, 147, 75-342 Кошалин, Польша. По вопросам персональных данных пиши на kontakt@wodazycia.org.' },
    s2: { h2: 'Форма записи',
          p: 'Форма на странице «Ты здесь впервые?» открывает твою почтовую программу с готовым текстом письма. Данные не сохраняются на сервере этого сайта — они попадают к нам только тогда, когда ты сам(а) отправишь сообщение. Мы используем их исключительно для ответа и сообщения даты встречи. Основание — твоё согласие (ст. 6 п. 1 подп. a GDPR); ты можешь отозвать его в любой момент.' },
    s3: { h2: 'Файлы cookie',
          p: 'Этот сайт не использует файлы cookie для отслеживания или рекламы. В памяти браузера сохраняется только выбранный язык, чтобы при следующем визите не пришлось устанавливать его снова. Эта информация не покидает твоё устройство.' },
    s4: { h2: 'Содержимое, встроенное из других сервисов',
          p: 'Видео с YouTube загружается только после нажатия на превью — до этого момента YouTube не знает о твоём визите. Карта взята из OpenStreetMap и загружается только тогда, когда ты прокрутишь страницу до неё. OpenStreetMap не использует файлы cookie и рекламу. Кнопки под картой ведут в Google Карты или Карты Apple — в эти сервисы ты переходишь только после нажатия. Кнопки оплаты ведут в сервисы Dotpay и PayPal. После перехода действуют их собственные правила конфиденциальности.' },
    s5: { h2: 'Статистика и журналы',
          p: 'Мы не ведём собственную статистику посещений. Хостинг-провайдер может сохранять технические журналы сервера (IP-адрес, дата, адрес страницы) для безопасности и обслуживания услуги.' },
    s6: { h2: 'Как долго мы храним данные',
          p: 'Электронные письма храним столько, сколько нужно для решения вопроса, затем удаляем. Если хочешь, чтобы твои данные удалили раньше, напиши нам.' },
    s7: { h2: 'Твои права',
          p: 'У тебя есть право на доступ к своим данным, их исправление, удаление, ограничение обработки, перенос, а также право возразить. Также есть право подать жалобу в польский надзорный орган (Prezes Urzędu Ochrony Danych Osobowych, ul. Stawki 2, 00-193 Warszawa).' },
    s8: { h2: 'Изменения',
          p: 'Если способ обработки данных изменится, мы обновим этот документ и изменим дату вверху страницы.' }
  },

  notfound: {
    h1: '404',
    p: 'Такой страницы нет. Возможно, она была по другому адресу, а возможно, изменилась ссылка.',
    cta: 'Вернуться на главную'
  }
},

/* ########  NIEMIECKI  ###################################################### */
de: {
  langName: 'Deutsch',
  identity: 'Evangelische Freikirche im polnischen Koszalin, ul. Władysława IV 147. Teil der Kirche Gottes in Christus, besteht seit 1990.',

  meta: {
    home:     { title: 'Gemeinde Woda Życia — Koszalin',
                desc: 'Gemeinde Woda Życia in Koszalin. Gottesdienst jeden Sonntag um 11:00 Uhr, ul. Władysława IV 147. Komm einfach vorbei.' },
    first:    { title: 'Zum ersten Mal hier? | Woda Życia — Koszalin',
                desc: 'Was dich im Gottesdienst in Koszalin erwartet, Antworten auf häufige Fragen und woran wir glauben.' },
    church:   { title: 'Gemeinde | Woda Życia — Koszalin',
                desc: 'Wer wir sind, wie wir leben und was wir tun. Pastor Mateusz Godawa, das Leitungsteam und die Geschichte der Gemeinde Woda Życia in Koszalin.' },
    kids:     { title: 'Kids | Woda Życia — Koszalin',
                desc: 'Kinderprogramm für 4- bis 9-Jährige jeden Sonntag in Koszalin. Spielraum und Wickeltisch für die Kleinsten.' },
    news:     { title: 'Aktuelles | Woda Życia — Koszalin',
                desc: 'Neuigkeiten, Veranstaltungen und Ankündigungen aus dem Leben der Gemeinde Woda Życia in Koszalin.' },
    give:     { title: 'Unterstützen | Woda Życia — Koszalin',
                desc: 'Wie Sie die Gemeinde Woda Życia in Koszalin unterstützen können: Online-Zahlung, PayPal oder klassische Banküberweisung.' },
    contact:  { title: 'Kontakt | Woda Życia — Koszalin',
                desc: 'ul. Władysława IV 147, 75-342 Koszalin. Schreiben Sie uns oder kommen Sie einfach vorbei.' },
    privacy:  { title: 'Datenschutz | Woda Życia — Koszalin',
                desc: 'Wie die Gemeinde Woda Życia mit personenbezogenen Daten umgeht und welche Rechte Sie nach der DSGVO haben.' },
    notfound: { title: 'Seite nicht gefunden | Woda Życia — Koszalin', desc: '' }
  },

  ui: {
    skip: 'Zum Inhalt springen',
    menu: 'Menü',
    language: 'Sprache',
    playVideo: 'Aufnahme abspielen',
    liveStream: 'Live-Übertragung',
    openIn: 'In neuem Fenster öffnen',
    download: 'Herunterladen',
    loading: 'Wird geladen…'
  },

  nav: {
    home: 'Startseite',
    first: 'Zum ersten Mal hier?',
    church: 'Gemeinde',
    kids: 'Kids',
    news: 'Aktuelles',
    give: 'Unterstützen',
    contact: 'Kontakt',
    privacy: 'Datenschutz'
  },

  footer: {
    name: 'Gemeinde Woda Życia',
    follow: 'Folgen Sie uns',
    rights: 'Alle Rechte vorbehalten.'
  },

  home: {
    h1: 'Woda Życia',
    hero: { a: 'HEY!', b: 'HALLO!', c: 'WILLKOMMEN!', cta: 'Lernen wir uns kennen' },
    visit: {
      h2: 'Komm zu uns',
      p: 'Einfach so. Egal woher du kommst, wie alt du bist, woran du glaubst, wie du dich kleidest oder wen du wählst.',
      cta: 'Kontakt'
    },
    online: {
      h2: 'Gottesdienste online ansehen',
      channel: 'Unser YouTube-Kanal',
      archive: 'Aufzeichnungen früherer Gottesdienste'
    },
    inspire: {
      h2: 'Lass dich inspirieren!',
      current: 'Hör dir aktuelle Predigten an. Alle findest du auf Spotify oder Apple Podcasts',
      archive: 'Hör dir Predigten aus dem Archiv an. Alle findest du auf Spotify oder Apple Podcasts',
      currentAlt: 'Kanal der Gemeinde Woda Życia',
      archiveAlt: 'Pastor Paweł Godawa'
    },
    news: { h2: 'Aktuelles', all: 'Alle Meldungen' }
  },

  first: {
    h1: { a: 'Zum ersten', b: 'Mal', c: 'hier?' },
    intro: 'Seit über 30 Jahren bauen wir in Koszalin eine offene christliche Gemeinschaft. Wir kommen aus unterschiedlichen Milieus und haben unterschiedliche Geschichten, aber eines verbindet uns: Jesus Christus. Wir sind überzeugt, dass das Leben im Glauben ein faszinierendes Abenteuer ist, zu dem Gott jeden Menschen einlädt — auch dich!',
    faqCta: 'Häufig gestellte Fragen',

    faq: {
      h2: { a: 'Häufige', b: 'Fragen' },
      q1: 'Ist Woda Życia eine katholische Gemeinschaft?',
      a1a: 'Nein, aber gut, dass du fragst! Die Gemeinde Woda Życia gehört zu den evangelikalen Freikirchen und ist Teil des Verbandes „KBWCH“, der in Polen über 80 Gemeinden vereint. Wir sind offen für andere Konfessionen und wollen Brücken bauen, keine Mauern.',
      a1b: 'Die Kirche Gottes in Christus (KBWCH) wurde am 27. Februar 1988 registriert. Sie ist im Register der Kirchen und Religionsgemeinschaften eingetragen, das die Abteilung für Religionsgemeinschaften des polnischen Innenministeriums führt, Abschnitt A, Pos. 28.',
      q2: 'Kann man einfach so zu eurem Gottesdienst kommen?',
      a2: 'Auf jeden Fall, JA',
      q3: 'Wie läuft ein typischer Gottesdienst ab?',
      a3worship: 'LOBPREIS',
      a3worshipText: 'wir singen, beten und loben Gott mit live gespielter Musik',
      a3sermon: 'PREDIGT',
      a3sermonText: 'der Pastor oder ein eingeladener Redner teilt eine praktische Botschaft auf Grundlage der Bibel',
      a3prayer: 'GEBET',
      a3prayerText: 'wir beenden den Gottesdienst mit einem gemeinsamen Gebet, manchmal singen wir auch',
      a3offering: 'Bei den meisten Gottesdiensten geben wir Raum für eine freiwillige Kollekte für die Arbeit der Gemeinde',
      a3cafe: 'Nach dem Gottesdienst laden wir in unser Café ein',
      q4: 'Muss man während des Gottesdienstes etwas Bestimmtes tun?',
      a4: 'Nein. Du kannst einfach kommen, dich bequem hinsetzen, zuhören und gehen, wann immer du möchtest.',
      q5: 'Kann man mit Kindern kommen?',
      a5: 'Ja. Kinder von 4 bis 9 Jahren haben ihr eigenes Programm, das von unseren Ehrenamtlichen geleitet wird; für die Jüngeren gibt es einen Raum mit Spielzeug und einen Raum mit Wickeltisch',
      a5link: 'Mehr über WODA ŻYCIA KIDS'
    },

    start: {
      h2: { a: 'Woda Życia', b: 'start' },
      p: 'Du möchtest uns noch besser kennenlernen? Dieses Treffen ist für dich. Du erfährst mehr über unsere Geschichte, unsere Werte und Möglichkeiten, dich einzubringen, und lernst interessante Menschen kennen, die diesen Ort prägen. Melde dich an, und wir schicken dir Datum und Uhrzeit des Treffens.',
      name: 'Vor- und Nachname',
      email: 'E-Mail',
      phone: 'Telefon',
      consent: 'Ich akzeptiere die',
      consentLink: 'Datenschutzerklärung',
      send: 'Anmelden',
      hint: 'Das Formular öffnet dein E-Mail-Programm mit einer vorbereiteten Nachricht. Du kannst auch direkt an kontakt@wodazycia.org schreiben.',
      subject: 'Anmeldung zum Treffen Woda Życia start'
    },

    believe: {
      h2: { a: 'Woran', b: 'glauben', c: 'wir?' },
      i1: { title: 'Gott der Vater',
            text: 'Es gibt einen ewigen, allmächtigen und allgegenwärtigen Gott. Nach der Lehre Jesu Christi ist er ein guter, liebender Vater, der eine Beziehung zu jedem Menschen sucht.',
            verses: 'Joh 4,24 / Mt 6,9 / 1 Joh 4,14-16' },
      i2: { title: 'Jesus Christus',
            text: 'Er kam als Mensch in die Welt, um der Welt die Botschaft von Gott dem Vater zu bringen, die Menschheit durch seinen Tod am Kreuz und seine Auferstehung von der Sünde zu erlösen und jedem, der an ihn glaubt, neues Leben zu schenken.',
            verses: 'Mt 11,27 / 1 Tim 2,5-6 / Röm 5,1 / Röm 10,9' },
      i3: { title: 'Der Heilige Geist',
            text: 'Nach der Verheißung Jesu Christi wurde nach seiner Himmelfahrt der Heilige Geist auf die Erde gesandt, um die Gemeinde zu bauen, die Gläubigen zu stärken und durch sie zu wirken.',
            verses: 'Joh 14,16-20 / Apg 1,1-8 / Apg 2,1-4' },
      i4: { title: 'Wiedergeburt',
            text: 'Jeder Mensch, der das Heil durch den Glauben an Jesus Christus annimmt, wird in der geistlichen Wirklichkeit neu geboren als Kind Gottes. Dadurch werden eine Beziehung zu Gott, neues Leben und ewiges Leben möglich.',
            verses: 'Joh 3,1-18 / Mk 1,15 / Röm 10,9-13 / Joh 1,12-13' },
      i5: { title: 'Taufe',
            text: 'Durch die Taufe identifiziert sich jeder Gläubige mit Jesus Christus, lässt die Vergangenheit hinter sich und bekennt ein Leben in Hingabe an Gott.',
            verses: 'Mt 28,16-20 / Röm 6,1-14 / Gal 3,26-27' },
      i6: { title: 'Gemeinde',
            text: 'Jesus Christus starb und stand auf, um den Menschen mit Gott zu versöhnen, aber auch, um die Menschen untereinander zu versöhnen. Deshalb ist Gemeinde kein Gebäude, sondern MENSCHEN — der Leib Christi — Gottes Familie. Ein Ort für jeden, um zusammen zu sein, zu dienen, geistlich zu wachsen und das Leben mit anderen zu teilen.',
            verses: 'Mt 16,18 / Apg 2,42-47 / Eph 2,19-21' },
      i7: { title: 'Die Bibel',
            text: 'Wir glauben, dass die Heilige Schrift — Altes und Neues Testament — nicht nur eine Sammlung interessanter Geschichten ist, sondern vor allem das von Gott inspirierte Wort, das zeitlose Anweisungen, Weisheit und Gottes Verheißungen enthält und die Grundlage für alle Fragen des christlichen Lebens und Glaubens bildet.',
            verses: '2 Tim 3,16-17' },
      i8: { title: 'Ewigkeit',
            text: 'Jeder, der geboren wurde, muss eines Tages auch sterben, doch hier endet unsere Geschichte nicht. Durch Jesus Christus und das Heil können wir Gewissheit über unsere Zukunft haben — die Ewigkeit mit Gott und allen Gläubigen.',
            verses: 'Pred 3,11 / Joh 3,16 / 2 Kor 4,16-18' }
    },

    creed: {
      title: 'Apostolisches Glaubensbekenntnis',
      l1: 'Ich glaube an Gott, den Vater, den Allmächtigen,',
      l2: 'den Schöpfer des Himmels und der Erde,',
      l3: 'und an Jesus Christus, seinen eingeborenen Sohn, unsern Herrn,',
      l4: 'empfangen durch den Heiligen Geist,',
      l5: 'geboren von der Jungfrau Maria,',
      l6: 'gelitten unter Pontius Pilatus,',
      l7: 'gekreuzigt, gestorben und begraben,',
      l8: 'hinabgestiegen in das Reich des Todes, am dritten Tage auferstanden von den Toten,',
      l9: 'aufgefahren in den Himmel, er sitzt zur Rechten Gottes, des allmächtigen Vaters,',
      l10: 'von dort wird er kommen, zu richten die Lebenden und die Toten.',
      l11: 'Ich glaube an den Heiligen Geist,',
      l12: 'die heilige christliche Kirche,',
      l13: 'Gemeinschaft der Heiligen, Vergebung der Sünden,',
      l14: 'Auferstehung der Toten und das ewige Leben.',
      l15: 'Amen.'
    }
  },

  church: {
    h1: 'Gemeinde',
    intro: 'Woda Życia ist eine zeitgemäße Gemeinde mit der zeitlosen Botschaft des Evangeliums, in der ein ganz normaler Mensch einen außergewöhnlichen Gott kennenlernen und zum besten Abenteuer des Lebens aufbrechen kann: Christus nachzufolgen und seinen einzigartigen Plan gemeinsam mit anderen Gläubigen zu verwirklichen.',
    claim: { a: 'Ich habe ein großes Volk', b: 'in dieser Stadt' },
    claimSource: 'Apg 18,10 | 1990',

    how: {
      q1: 'Wie leben wir?',
      a1: 'Wir folgen Christus nach und leben nach den Werten des Reiches Gottes.',
      q2: 'Was tun wir?',
      a2: 'Wir bauen eine zeitgemäße, generationenübergreifende und charismatische Gemeinde, die Liebe zu Gott und zu den Menschen ausdrückt.',
      q3: 'Wie gewinnen wir?',
      a3a: 'Wir gewinnen, indem wir Menschen in eine lebendige Beziehung zu Gott dem Vater führen.',
      a3b: 'Wir gewinnen, indem wir Gott in gemeinsamen Gottesdiensten, Hauskreisen, auf Konferenzen, bei Veranstaltungen und in Eins-zu-eins-Beziehungen erfahren.',
      a3c: 'Wir gewinnen, indem wir positive Veränderung in das Leben unserer Stadt bringen.'
    },

    values: {
      h2: 'Werte',
      v1: 'Jesus', v2: 'Menschen', v3: 'Gemeinschaft', v4: 'Großzügigkeit', v5: 'Qualität'
    },

    pastor: {
      h3: 'Pastor Mateusz Godawa',
      text: 'Mateusz Godawa ist Pastor der Gemeinde Woda Życia. Gemeinsam mit seiner Frau Aneta baut er seit 2018 aktiv die örtliche Gemeinschaft in Koszalin und ermutigt dazu, das großartige Abenteuer zu entdecken, das der Alltag in Beziehung zu Christus ist. Mateusz und Aneta sind Eltern von Alisa und Elian.',
      instagram: 'Instagram'
    },
    leaders: {
      h3: 'Leitungsteam',
      text: 'Das ist unser Team — Menschen, die Jesus Christus lieben und es lieben, seine Gemeinde zu bauen.'
    },
    founder: {
      h3: 'Pastor Paweł Godawa',
      text: 'Paweł Godawa (1967–2018) war von der Gründung an fast 30 Jahre lang Hauptpastor der Gemeinde „Woda Życia“. Die Geschichte seiner Berufung reicht in die Zeit der katholischen charismatischen Bewegung der 1980er-Jahre zurück. In seinen Predigten vertrat er einen praktischen Zugang zum Glauben, zur Bibel und zur Beziehung des Menschen zu Gott. Veränderung des Denkens und des Lebensstils, Beziehungen zu Nahestehenden, Großzügigkeit und der Bau der örtlichen Gemeinde waren die wichtigsten Themen seiner Lehre. Autor der Bücher: Zrozumienie życia, Sztuka słuchania, Niebo i piekło w kościele, Niebo i piekło w portfelu.',
      archive: 'Predigtarchiv',
      video: 'Pioniere — über die, die vor uns gingen #2, Pastor Paweł Godawa'
    }
  },

  kids: {
    h1: 'Kids',
    intro: 'Wir möchten eine junge Generation sehen, die mit Gott lebt! Deshalb schaffen wir als Ehrenamtliche einen Ort, an dem wir in freundlicher Atmosphäre und auf kreative Weise von Gott erzählen, spielen, beten, anbeten und sogar gemeinsam frühstücken!',
    sunday: {
      h2: { a: 'Sonntag mit', b: 'kids' },
      p1: 'Jede Woche gibt es ein Programm für Kinder von 4 bis 9 Jahren',
      p2: 'Die Anmeldung läuft',
      p3: 'Für Eltern und Kleinkinder bis 3 Jahre stehen ein Spielraum und ein Wickeltisch bereit. Der Raum ist mit einem Fernseher mit Übertragung des Gottesdienstes ausgestattet.'
    },
    docs: {
      standards: 'Kinderschutzstandards',
      parents: 'Regeln für Eltern'
    }
  },

  news: {
    h1: 'Aktuelles',
    intro: 'Was bei uns los ist — Veranstaltungen, Ankündigungen und Einladungen.',
    empty: 'Zurzeit gibt es keine neuen Beiträge.',
    more: 'Weiterlesen'
  },

  give: {
    h1: 'Unterstützen',
    dotpay: {
      h2: 'Dotpay',
      p: 'Sicheres Online-Zahlungssystem',
      howto: 'Anleitung:',
      s1: '1. Geben Sie den Zweck an, z. B. Spende oder Zehnter,',
      s2: '2. Wählen Sie den Betrag,',
      s3: '3. Klicken Sie auf „Online über dotpay bezahlen“. Sie werden zur Auswahl der Zahlungsmethode weitergeleitet.',
      purpose: 'Zweck:',
      amount: 'Betrag:',
      pay: 'Online über dotpay bezahlen'
    },
    paypal: {
      p: 'PayPal unterstützt Zahlungen vom PayPal-Guthaben sowie mit gängigen Kreditkarten.',
      alt: 'Mit der PayPal-Schaltfläche spenden',
      button: 'Mit PayPal spenden'
    },
    bank: {
      h2: 'Klassische Banküberweisung',
      recipient: 'EMPFÄNGER:',
      taxNote: 'Wer im Verwendungszweck „Darowizna na cele kultu religijnego“ angibt, kann die Spende nach polnischem Recht in der Jahressteuererklärung von der Bemessungsgrundlage abziehen.'
    },
    docs: {
      terms: 'Zahlungsbedingungen',
      statute: 'Satzung der Kirche Gottes in Christus'
    }
  },

  contact: {
    h1: 'Kontakt',
    h2: { a: 'Gemeinde Woda', b: 'Życia' },
    labels: {
      address: 'Adresse',
      phone: 'Telefon',
      email: 'E-Mail',
      social: 'Soziale Netzwerke'
    },
    map: { h2: 'So finden Sie uns', directions: 'Route anzeigen' }
  },

  privacy: {
    h1: 'Datenschutz',
    updated: 'Letzte Aktualisierung: August 2026',
    intro: 'Diese Website ist statisch — es gibt keine Benutzerkonten, keine Kommentare und keine Datenbank. Im Folgenden beschreiben wir, welche Daten dennoch verarbeitet werden können und was Sie damit tun können.',
    s1: { h2: 'Wer ist verantwortlich',
          p: 'Verantwortlich ist Centrum Chrześcijańskie Woda Życia, ul. Władysława IV 147, 75-342 Koszalin, Polen. Bei Fragen zum Datenschutz schreiben Sie an kontakt@wodazycia.org.' },
    s2: { h2: 'Anmeldeformular',
          p: 'Das Formular auf der Seite „Zum ersten Mal hier?“ öffnet Ihr E-Mail-Programm mit einer vorbereiteten Nachricht. Die Daten werden nicht auf dem Server dieser Website gespeichert — sie erreichen uns erst, wenn Sie die Nachricht selbst absenden. Wir verwenden sie ausschließlich, um zu antworten und den Termin mitzuteilen. Rechtsgrundlage ist Ihre Einwilligung (Art. 6 Abs. 1 lit. a DSGVO); Sie können sie jederzeit widerrufen.' },
    s3: { h2: 'Cookies',
          p: 'Diese Website verwendet keine Cookies zum Tracking oder für Werbung. Im Browserspeicher wird lediglich die von Ihnen gewählte Sprache abgelegt, damit Sie sie beim nächsten Besuch nicht erneut einstellen müssen. Diese Information verlässt Ihr Gerät nicht.' },
    s4: { h2: 'Eingebettete Inhalte anderer Dienste',
          p: 'YouTube-Videos werden erst nach einem Klick auf die Vorschau geladen — bis dahin erfährt YouTube nichts von Ihrem Besuch. Die Karte stammt von OpenStreetMap und wird erst geladen, wenn Sie zu ihr scrollen. OpenStreetMap setzt weder Cookies noch Werbung ein. Die Schaltflächen unter der Karte führen zu Google Maps oder Apple Karten — dorthin gelangen Sie erst nach einem Klick. Die Zahlungsschaltflächen führen zu Dotpay und PayPal. Nach dem Wechsel gelten deren eigene Datenschutzbestimmungen.' },
    s5: { h2: 'Statistiken und Protokolle',
          p: 'Wir führen keine eigene Besuchsstatistik. Der Hosting-Anbieter kann technische Server-Protokolle (IP-Adresse, Datum, Seitenadresse) zur Sicherheit und zum Betrieb des Dienstes speichern.' },
    s6: { h2: 'Wie lange wir Daten speichern',
          p: 'E-Mails bewahren wir so lange auf, wie es zur Bearbeitung des Anliegens nötig ist, danach löschen wir sie. Wenn Sie eine frühere Löschung wünschen, schreiben Sie uns.' },
    s7: { h2: 'Ihre Rechte',
          p: 'Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit und Widerspruch. Außerdem haben Sie das Recht, sich bei der polnischen Aufsichtsbehörde zu beschweren (Prezes Urzędu Ochrony Danych Osobowych, ul. Stawki 2, 00-193 Warszawa).' },
    s8: { h2: 'Änderungen',
          p: 'Ändert sich die Art der Datenverarbeitung, aktualisieren wir dieses Dokument und passen das Datum oben an.' }
  },

  notfound: {
    h1: '404',
    p: 'Diese Seite gibt es nicht. Vielleicht lag sie unter einer anderen Adresse, vielleicht hat sich der Link geändert.',
    cta: 'Zurück zur Startseite'
  }
},

/* ########  ANGIELSKI  ###################################################### */
en: {
  langName: 'English',
  identity: 'An evangelical church in Koszalin, Poland, at ul. Władysława IV 147. Part of the Church of God in Christ (KBWCH), active since 1990.',

  meta: {
    home:     { title: 'Woda Życia Church — Koszalin',
                desc: 'Woda Życia Church in Koszalin, Poland. Services every Sunday at 11:00, ul. Władysława IV 147. Just drop by.' },
    first:    { title: 'First time here? | Woda Życia — Koszalin',
                desc: 'What to expect at a service in Koszalin, answers to common questions and what we believe.' },
    church:   { title: 'Church | Woda Życia — Koszalin',
                desc: 'Who we are, how we live and what we do. Pastor Mateusz Godawa, the leadership team and the history of Woda Życia Church in Koszalin.' },
    kids:     { title: 'Kids | Woda Życia — Koszalin',
                desc: 'Sunday programme for children aged 4–9 in Koszalin. Play room and changing facilities for the youngest.' },
    news:     { title: 'News | Woda Życia — Koszalin',
                desc: 'News, events and announcements from the life of Woda Życia Church in Koszalin.' },
    give:     { title: 'Give | Woda Życia — Koszalin',
                desc: 'How to support Woda Życia Church in Koszalin: online payment, PayPal or a regular bank transfer.' },
    contact:  { title: 'Contact | Woda Życia — Koszalin',
                desc: 'ul. Władysława IV 147, 75-342 Koszalin, Poland. Write to us or simply drop by.' },
    privacy:  { title: 'Privacy policy | Woda Życia — Koszalin',
                desc: 'How Woda Życia Church handles personal data and what rights you have under the GDPR.' },
    notfound: { title: 'Page not found | Woda Życia — Koszalin', desc: '' }
  },

  ui: {
    skip: 'Skip to content',
    menu: 'Menu',
    language: 'Language',
    playVideo: 'Play video',
    liveStream: 'Live stream',
    openIn: 'Open in a new window',
    download: 'Download',
    loading: 'Loading…'
  },

  nav: {
    home: 'Home',
    first: 'First time here?',
    church: 'Church',
    kids: 'Kids',
    news: 'News',
    give: 'Give',
    contact: 'Contact',
    privacy: 'Privacy policy'
  },

  footer: {
    name: 'Woda Życia Church',
    follow: 'Find us',
    rights: 'All rights reserved.'
  },

  home: {
    h1: 'Woda Życia',
    hero: { a: 'HEY!', b: 'HELLO!', c: 'WELCOME!', cta: 'Let’s get to know each other' },
    visit: {
      h2: 'Drop by',
      p: 'Just like that. No matter where you’re from, how old you are, what you believe, how you dress or who you vote for.',
      cta: 'Contact'
    },
    online: {
      h2: 'Watch services online',
      channel: 'See our YouTube channel',
      archive: 'See past services'
    },
    inspire: {
      h2: 'Get inspired!',
      current: 'Listen to current teaching. You’ll find every sermon on Spotify or Apple Podcasts',
      archive: 'Listen to teaching from the archive. You’ll find every sermon on Spotify or Apple Podcasts',
      currentAlt: 'Woda Życia Church channel',
      archiveAlt: 'Pastor Paweł Godawa'
    },
    news: { h2: 'News', all: 'All news' }
  },

  first: {
    h1: { a: 'First', b: 'time', c: 'here?' },
    intro: 'For over 30 years we have been building an open Christian community in Koszalin. We come from different backgrounds and have different stories, but one thing unites us — Jesus Christ. We are convinced that a life of faith is a fascinating adventure to which God invites every person — you included!',
    faqCta: 'Frequently asked questions',

    faq: {
      h2: { a: 'Common', b: 'questions' },
      q1: 'Is Woda Życia a Catholic community?',
      a1a: 'No, but it’s good that you ask! Woda Życia Church belongs to the evangelical tradition and is part of the “KBWCH” federation, which brings together over 80 congregations in Poland. We are open to other denominations and want to build bridges between us, not walls.',
      a1b: 'The Church of God in Christ (KBWCH) was registered on 27 February 1988. It is entered in the Register of Churches and Religious Associations kept by the Department of Religious Affairs of the Polish Ministry of the Interior, section A, item 28.',
      q2: 'Can I simply come to one of your services?',
      a2: 'Absolutely, YES',
      q3: 'What does a typical service look like?',
      a3worship: 'WORSHIP',
      a3worshipText: 'we sing, pray and praise God with live music',
      a3sermon: 'SERMON',
      a3sermonText: 'the pastor or a guest speaker shares a practical message based on the Bible',
      a3prayer: 'PRAYER',
      a3prayerText: 'we close the service with prayer together, and sometimes with singing',
      a3offering: 'At most services we make room for a voluntary offering towards the work of the church',
      a3cafe: 'After the service you’re welcome in our café',
      q4: 'Do I have to do anything in particular during the service?',
      a4: 'No. You can simply come, take a comfortable seat, listen and leave whenever you like.',
      q5: 'Can I bring children?',
      a5: 'Yes. Children aged 4–9 have their own programme led by our volunteers, and for younger ones we have a room with toys and a room with a changing table',
      a5link: 'Find out more about WODA ŻYCIA KIDS'
    },

    start: {
      h2: { a: 'Woda Życia', b: 'start' },
      p: 'Would you like to get to know us even better? This meeting is for you. You’ll learn more about our history, our values and ways to get involved, and you’ll meet interesting people who make this place what it is. Sign up and we’ll send you the date and time.',
      name: 'Full name',
      email: 'Email',
      phone: 'Phone',
      consent: 'I accept the',
      consentLink: 'privacy policy',
      send: 'Sign up',
      hint: 'The form opens your email programme with a ready-made message. You can also write directly to kontakt@wodazycia.org.',
      subject: 'Sign-up for the Woda Życia start meeting'
    },

    believe: {
      h2: { a: 'What do we', b: 'believe', c: '?' },
      i1: { title: 'God the Father',
            text: 'There is one eternal, almighty and omnipresent God. According to the teaching of Jesus Christ he is a good, loving Father who desires a relationship with every person.',
            verses: 'Jn 4:24 / Mt 6:9 / 1 Jn 4:14-16' },
      i2: { title: 'Jesus Christ',
            text: 'He came into the world as a human being to bring the world the message about God the Father, to redeem humanity from sin through his death on the cross and his resurrection, and to give new life to everyone who believes in him.',
            verses: 'Mt 11:27 / 1 Tim 2:5-6 / Rom 5:1 / Rom 10:9' },
      i3: { title: 'The Holy Spirit',
            text: 'According to the promise of Jesus Christ, after his ascension the Holy Spirit was sent to the earth to build the Church, to support believers and to work through them.',
            verses: 'Jn 14:16-20 / Acts 1:1-8 / Acts 2:1-4' },
      i4: { title: 'New birth',
            text: 'Everyone who receives salvation through faith in Jesus Christ is, in spiritual reality, born again as a child of God. Because of this, relationship with God, new life and life in eternity become possible.',
            verses: 'Jn 3:1-18 / Mk 1:15 / Rom 10:9-13 / Jn 1:12-13' },
      i5: { title: 'Baptism',
            text: 'Through baptism every believer identifies with Jesus Christ, leaving the past behind and declaring a life devoted to God.',
            verses: 'Mt 28:16-20 / Rom 6:1-14 / Gal 3:26-27' },
      i6: { title: 'The Church',
            text: 'Jesus Christ died and rose again to reconcile people with God, but also to reconcile people with one another. That is why the church is not a building but PEOPLE — the body of Christ — God’s family. It is a place for everyone to be together, to serve, to grow spiritually and simply to share life with others.',
            verses: 'Mt 16:18 / Acts 2:42-47 / Eph 2:19-21' },
      i7: { title: 'The Bible',
            text: 'We believe that Scripture — the Old and New Testament — is not merely a collection of interesting stories but above all the Word inspired by God, containing timeless instruction, wisdom and God’s promises, and forming the foundation for every question of Christian life and faith.',
            verses: '2 Tim 3:16-17' },
      i8: { title: 'Eternity',
            text: 'Everyone who was born must one day also die, but our story does not end there. Through Jesus Christ and salvation we can be certain of our future — eternity with God and with all believers.',
            verses: 'Eccl 3:11 / Jn 3:16 / 2 Cor 4:16-18' }
    },

    creed: {
      title: 'The Apostles’ Creed',
      l1: 'I believe in God, the Father almighty,',
      l2: 'creator of heaven and earth;',
      l3: 'and in Jesus Christ, his only Son, our Lord,',
      l4: 'who was conceived by the Holy Spirit,',
      l5: 'born of the Virgin Mary,',
      l6: 'suffered under Pontius Pilate,',
      l7: 'was crucified, died and was buried;',
      l8: 'he descended to the dead; on the third day he rose again;',
      l9: 'he ascended into heaven, and is seated at the right hand of God the Father almighty;',
      l10: 'from there he will come to judge the living and the dead.',
      l11: 'I believe in the Holy Spirit,',
      l12: 'the holy catholic Church,',
      l13: 'the communion of saints, the forgiveness of sins,',
      l14: 'the resurrection of the body, and the life everlasting.',
      l15: 'Amen.'
    }
  },

  church: {
    h1: 'Church',
    intro: 'Woda Życia is a contemporary church with the timeless message of the gospel, where an ordinary person can come to know an extraordinary God and set out on the best adventure of life — following Christ and living out his unique plan together with other believers.',
    claim: { a: 'I have many people', b: 'in this city' },
    claimSource: 'Acts 18:10 | 1990',

    how: {
      q1: 'How do we live?',
      a1: 'Following Christ, we live by the values of the Kingdom of God.',
      q2: 'What do we do?',
      a2: 'We are building a contemporary, multigenerational and charismatic church that expresses love for God and for people.',
      q3: 'How do we win?',
      a3a: 'We win by leading people into a life-filled relationship with God the Father.',
      a3b: 'We win by experiencing God together at services, in home groups, at conferences, at events and in one-to-one relationships.',
      a3c: 'We win by bringing positive change to the life of our city.'
    },

    values: {
      h2: 'Values',
      v1: 'Jesus', v2: 'People', v3: 'Community', v4: 'Generosity', v5: 'Quality'
    },

    pastor: {
      h3: 'Pastor Mateusz Godawa',
      text: 'Mateusz Godawa is the pastor of Woda Życia Church. Together with his wife Aneta, he has been actively building the local community in Koszalin since 2018, inspiring people to discover the remarkable adventure of everyday life in relationship with Christ. Mateusz and Aneta are the parents of Alisa and Elian.',
      instagram: 'Instagram'
    },
    leaders: {
      h3: 'Leadership team',
      text: 'This is our team — people who love Jesus Christ and love building his church.'
    },
    founder: {
      h3: 'Pastor Paweł Godawa',
      text: 'Paweł Godawa (1967–2018) was, from its founding, the lead pastor of Woda Życia Church for almost 30 years. The story of his calling goes back to the Catholic charismatic movement of the 1980s. In his teaching he presented a practical approach to faith, to Scripture and to a person’s relationship with God. A change of thinking and lifestyle, relationships with those closest to us, generosity and building the local church were the central themes of his messages. Author of the books: Zrozumienie życia, Sztuka słuchania, Niebo i piekło w kościele, Niebo i piekło w portfelu.',
      archive: 'Sermon archive',
      video: 'Pioneers — about those who went before us #2, Pastor Paweł Godawa'
    }
  },

  kids: {
    h1: 'Kids',
    intro: 'We want to see a young generation that lives with God! That’s why, as volunteers, we create a place where in a friendly atmosphere and in creative ways we talk about God, play, pray, worship and even have breakfast together!',
    sunday: {
      h2: { a: 'Sunday with', b: 'kids' },
      p1: 'Every week we run a programme for children aged 4–9',
      p2: 'Check-in is open',
      p3: 'For parents and toddlers up to the age of 3 there is a play room and a changing table. The room has a TV showing the service.'
    },
    docs: {
      standards: 'Child protection standards',
      parents: 'Guidelines for parents'
    }
  },

  news: {
    h1: 'News',
    intro: 'What’s happening here — events, announcements and invitations.',
    empty: 'There are no new posts at the moment.',
    more: 'Read more'
  },

  give: {
    h1: 'Give',
    dotpay: {
      h2: 'Dotpay',
      p: 'A secure online payment system',
      howto: 'How it works:',
      s1: '1. Enter the purpose, e.g. offering or tithe,',
      s2: '2. Choose the amount,',
      s3: '3. Click “Pay online via dotpay”. You will be redirected to choose a payment method.',
      purpose: 'Purpose:',
      amount: 'Amount:',
      pay: 'Pay online via dotpay'
    },
    paypal: {
      p: 'PayPal supports payments from a PayPal balance as well as with common credit cards.',
      alt: 'Donate using the PayPal button',
      button: 'Donate with PayPal'
    },
    bank: {
      h2: 'Regular bank transfer',
      recipient: 'RECIPIENT:',
      taxNote: 'If you enter “Darowizna na cele kultu religijnego” as the transfer title, you may deduct the gift from your taxable income in your annual Polish tax return.'
    },
    docs: {
      terms: 'Payment terms',
      statute: 'Statute of the Church of God in Christ'
    }
  },

  contact: {
    h1: 'Contact',
    h2: { a: 'Woda', b: 'Życia Church' },
    labels: {
      address: 'Address',
      phone: 'Phone',
      email: 'Email',
      social: 'Social media'
    },
    map: { h2: 'How to find us', directions: 'Get directions' }
  },

  privacy: {
    h1: 'Privacy policy',
    updated: 'Last updated: August 2026',
    intro: 'This is a static website — there are no user accounts, no comments and no database. Below we describe what data may nevertheless be processed and what you can do about it.',
    s1: { h2: 'Who is the data controller',
          p: 'The data controller is Centrum Chrześcijańskie Woda Życia, ul. Władysława IV 147, 75-342 Koszalin, Poland. For matters concerning personal data write to kontakt@wodazycia.org.' },
    s2: { h2: 'Sign-up form',
          p: 'The form on the “First time here?” page opens your email programme with a ready-made message. The data is not stored on this website’s server — it reaches us only once you send the message yourself. We use it solely to reply and to pass on the date of the meeting. The legal basis is your consent (Art. 6(1)(a) GDPR); you may withdraw it at any time.' },
    s3: { h2: 'Cookies',
          p: 'This website does not use cookies for tracking or advertising. Your browser stores only the language you have chosen, so you don’t have to set it again on your next visit. That information never leaves your device.' },
    s4: { h2: 'Content embedded from other services',
          p: 'YouTube videos load only after you click the preview — until then YouTube knows nothing about your visit. The map comes from OpenStreetMap and only loads once you scroll down to it. OpenStreetMap uses no cookies and no advertising. The buttons below the map lead to Google Maps or Apple Maps — you only reach those services after clicking. The payment buttons lead to Dotpay and PayPal. Once you move to those services, their own privacy policies apply.' },
    s5: { h2: 'Statistics and logs',
          p: 'We do not keep our own visitor statistics. The hosting provider may store technical server logs (IP address, date, page address) for security and service maintenance.' },
    s6: { h2: 'How long we keep data',
          p: 'We keep emails for as long as needed to deal with the matter, then delete them. If you would like your data deleted sooner, just write to us.' },
    s7: { h2: 'Your rights',
          p: 'You have the right to access your data, to rectify it, to have it erased, to restrict processing, to data portability and to object. You also have the right to lodge a complaint with the Polish supervisory authority (Prezes Urzędu Ochrony Danych Osobowych, ul. Stawki 2, 00-193 Warszawa).' },
    s8: { h2: 'Changes',
          p: 'If the way we process data changes, we will update this document and change the date at the top of the page.' }
  },

  notfound: {
    h1: '404',
    p: 'There is no such page. It may have been at a different address, or the link may have changed.',
    cta: 'Back to the home page'
  }
},

/* ########  HISZPAŃSKI  ##################################################### */
es: {
  langName: 'Español',
  identity: 'Iglesia evangélica en Koszalin (Polonia), ul. Władysława IV 147. Parte de la Iglesia de Dios en Cristo, activa desde 1990.',

  meta: {
    home:     { title: 'Iglesia Woda Życia — Koszalin',
                desc: 'Iglesia Woda Życia en Koszalin, Polonia. Reuniones todos los domingos a las 11:00, ul. Władysława IV 147. Pásate a vernos, sin más.' },
    first:    { title: '¿Es tu primera vez aquí? | Woda Życia — Koszalin',
                desc: 'Qué te espera en la reunión en Koszalin, respuestas a las preguntas más frecuentes y en qué creemos.' },
    church:   { title: 'Iglesia | Woda Życia — Koszalin',
                desc: 'Quiénes somos, cómo vivimos y qué hacemos. El pastor Mateusz Godawa, el equipo de líderes y la historia de la iglesia Woda Życia en Koszalin.' },
    kids:     { title: 'Kids | Woda Życia — Koszalin',
                desc: 'Programa dominical para niños de 4 a 9 años en Koszalin. Sala de juegos y cambiador para los más pequeños.' },
    news:     { title: 'Novedades | Woda Życia — Koszalin',
                desc: 'Noticias, eventos y anuncios de la vida de la iglesia Woda Życia en Koszalin.' },
    give:     { title: 'Apoyo | Woda Życia — Koszalin',
                desc: 'Cómo apoyar a la iglesia Woda Życia en Koszalin: pago en línea, PayPal o transferencia bancaria tradicional.' },
    contact:  { title: 'Contacto | Woda Życia — Koszalin',
                desc: 'ul. Władysława IV 147, 75-342 Koszalin, Polonia. Escríbenos o simplemente pásate.' },
    privacy:  { title: 'Política de privacidad | Woda Życia — Koszalin',
                desc: 'Cómo trata la iglesia Woda Życia los datos personales y qué derechos tienes según el RGPD.' },
    notfound: { title: 'Página no encontrada | Woda Życia — Koszalin', desc: '' }
  },

  ui: {
    skip: 'Ir al contenido',
    menu: 'Menú',
    language: 'Idioma',
    playVideo: 'Reproducir el vídeo',
    liveStream: 'Emisión en directo',
    openIn: 'Abrir en una ventana nueva',
    download: 'Descargar',
    loading: 'Cargando…'
  },

  nav: {
    home: 'Inicio',
    first: '¿Primera vez aquí?',
    church: 'Iglesia',
    kids: 'Kids',
    news: 'Novedades',
    give: 'Apoyo',
    contact: 'Contacto',
    privacy: 'Política de privacidad'
  },

  footer: {
    name: 'Iglesia Woda Życia',
    follow: 'Encuéntranos',
    rights: 'Todos los derechos reservados.'
  },

  home: {
    h1: 'Woda Życia',
    hero: { a: '¡EH!', b: '¡HOLA!', c: '¡BIENVENIDO!', cta: 'Conozcámonos' },
    visit: {
      h2: 'Pásate a vernos',
      p: 'Sin más. No importa de dónde seas, cuántos años tengas, en qué creas, cómo te vistas o a quién votes.',
      cta: 'Contacto'
    },
    online: {
      h2: 'Mira las reuniones en línea',
      channel: 'Nuestro canal de YouTube',
      archive: 'Reuniones anteriores'
    },
    inspire: {
      h2: '¡Inspírate!',
      current: 'Escucha las enseñanzas actuales. Todas las prédicas están en Spotify o Apple Podcasts',
      archive: 'Escucha las enseñanzas del archivo. Todas las prédicas están en Spotify o Apple Podcasts',
      currentAlt: 'Canal de la iglesia Woda Życia',
      archiveAlt: 'Pastor Paweł Godawa'
    },
    news: { h2: 'Novedades', all: 'Todas las novedades' }
  },

  first: {
    h1: { a: '¿Es tu', b: 'primera', c: 'vez aquí?' },
    intro: 'Desde hace más de 30 años formamos en Koszalin una comunidad cristiana abierta. Venimos de entornos distintos y tenemos historias distintas, pero nos une una cosa: Jesucristo. Estamos convencidos de que la vida de fe es una aventura fascinante a la que Dios invita a toda persona, ¡también a ti!',
    faqCta: 'Preguntas frecuentes',

    faq: {
      h2: { a: 'Preguntas', b: 'frecuentes' },
      q1: '¿Woda Życia es una comunidad católica?',
      a1a: 'No, ¡pero está bien que lo preguntes! La iglesia Woda Życia pertenece a la corriente de las iglesias evangélicas y forma parte de la federación «KBWCH», que reúne a más de 80 congregaciones en Polonia. Estamos abiertos a otras confesiones y queremos construir puentes entre nosotros, no muros.',
      a1b: 'La Iglesia de Dios en Cristo (KBWCH) se registró el 27 de febrero de 1988. Actualmente figura en el Registro de Iglesias y Asociaciones Religiosas que lleva el Departamento de Confesiones del Ministerio del Interior de Polonia, sección A, posición 28.',
      q2: '¿Se puede venir a vuestra reunión sin más?',
      a2: 'Rotundamente, SÍ',
      q3: '¿Cómo es una reunión normal?',
      a3worship: 'ALABANZA',
      a3worshipText: 'cantamos, oramos y alabamos a Dios con música en directo',
      a3sermon: 'PRÉDICA',
      a3sermonText: 'el pastor o un orador invitado comparte un mensaje práctico basado en las Escrituras',
      a3prayer: 'ORACIÓN',
      a3prayerText: 'terminamos la reunión con una oración conjunta y a veces también cantando',
      a3offering: 'En la mayoría de las reuniones dejamos espacio para una ofrenda voluntaria destinada a la obra de la iglesia',
      a3cafe: 'Al terminar la reunión te invitamos a nuestra cafetería',
      q4: '¿Hay que hacer algo especial durante la reunión?',
      a4: 'No. Puedes simplemente venir, sentarte cómodamente, escuchar y marcharte cuando quieras.',
      q5: '¿Se puede venir con niños?',
      a5: 'Sí. Los niños de 4 a 9 años tienen su propia reunión, dirigida por nuestros voluntarios, y para los más pequeños tenemos una sala con juguetes y una sala con cambiador',
      a5link: 'Descubre más sobre WODA ŻYCIA KIDS'
    },

    start: {
      h2: { a: 'Woda Życia', b: 'start' },
      p: '¿Quieres conocernos aún mejor? Este encuentro es para ti. Sabrás más sobre nuestra historia, nuestros valores y las formas de implicarte, y conocerás a gente interesante que hace de este lugar lo que es. Apúntate y te enviaremos la fecha y la hora del encuentro.',
      name: 'Nombre y apellidos',
      email: 'Correo electrónico',
      phone: 'Teléfono',
      consent: 'Acepto la',
      consentLink: 'política de privacidad',
      send: 'Apuntarme',
      hint: 'El formulario abrirá tu programa de correo con un mensaje ya preparado. También puedes escribir directamente a kontakt@wodazycia.org.',
      subject: 'Inscripción al encuentro Woda Życia start'
    },

    believe: {
      h2: { a: '¿En qué', b: 'creemos', c: '?' },
      i1: { title: 'Dios Padre',
            text: 'Existe un solo Dios eterno, todopoderoso y omnipresente. Según la enseñanza de Jesucristo, es un Padre bueno y amoroso que desea una relación con cada persona.',
            verses: 'Jn 4:24 / Mt 6:9 / 1 Jn 4:14-16' },
      i2: { title: 'Jesucristo',
            text: 'Vino al mundo como hombre para transmitir al mundo el mensaje sobre Dios Padre, redimir a la humanidad del pecado mediante su muerte en la cruz y su resurrección, y dar vida nueva a todo el que crea en Él.',
            verses: 'Mt 11:27 / 1 Tim 2:5-6 / Rom 5:1 / Rom 10:9' },
      i3: { title: 'El Espíritu Santo',
            text: 'Conforme a la promesa de Jesucristo, tras su ascensión fue enviado a la tierra el Espíritu Santo para edificar la Iglesia, sostener a los creyentes y actuar a través de ellos.',
            verses: 'Jn 14:16-20 / Hch 1:1-8 / Hch 2:1-4' },
      i4: { title: 'Nuevo nacimiento',
            text: 'Toda persona que recibe la salvación por la fe en Jesucristo nace de nuevo, en la realidad espiritual, como hijo de Dios. Gracias a ello se hacen posibles la relación con Dios, la vida nueva y la vida eterna.',
            verses: 'Jn 3:1-18 / Mc 1:15 / Rom 10:9-13 / Jn 1:12-13' },
      i5: { title: 'Bautismo',
            text: 'Por el bautismo cada creyente se identifica con Jesucristo, deja atrás el pasado y declara una vida entregada a Dios.',
            verses: 'Mt 28:16-20 / Rom 6:1-14 / Gal 3:26-27' },
      i6: { title: 'La Iglesia',
            text: 'Jesucristo murió y resucitó para reconciliar al ser humano con Dios, pero también para reconciliar a las personas entre sí. Por eso la iglesia no es un edificio, sino PERSONAS: el cuerpo de Cristo, la familia de Dios. Es un lugar para que cualquiera esté acompañado, sirva, crezca espiritualmente y sencillamente comparta su vida con otros.',
            verses: 'Mt 16:18 / Hch 2:42-47 / Ef 2:19-21' },
      i7: { title: 'La Biblia',
            text: 'Creemos que las Sagradas Escrituras —el Antiguo y el Nuevo Testamento— no son solo una colección de historias interesantes, sino ante todo la Palabra inspirada por Dios, que contiene instrucciones atemporales, sabiduría y promesas divinas, y constituye el fundamento de todas las cuestiones relacionadas con la vida y la fe cristianas.',
            verses: '2 Tim 3:16-17' },
      i8: { title: 'Eternidad',
            text: 'Todo el que ha nacido tendrá algún día que morir, pero ahí no termina nuestra historia. Gracias a Jesucristo y a la salvación podemos tener certeza de nuestro futuro: la eternidad con Dios y con todos los creyentes.',
            verses: 'Ecl 3:11 / Jn 3:16 / 2 Cor 4:16-18' }
    },

    creed: {
      title: 'Credo de los Apóstoles',
      l1: 'Creo en Dios Padre todopoderoso,',
      l2: 'creador del cielo y de la tierra;',
      l3: 'y en Jesucristo, su único Hijo, nuestro Señor,',
      l4: 'que fue concebido por obra del Espíritu Santo,',
      l5: 'nació de la Virgen María,',
      l6: 'padeció bajo el poder de Poncio Pilato,',
      l7: 'fue crucificado, muerto y sepultado;',
      l8: 'descendió a los infiernos, al tercer día resucitó de entre los muertos,',
      l9: 'subió a los cielos y está sentado a la derecha de Dios Padre todopoderoso;',
      l10: 'desde allí ha de venir a juzgar a vivos y muertos.',
      l11: 'Creo en el Espíritu Santo,',
      l12: 'la santa Iglesia universal,',
      l13: 'la comunión de los santos, el perdón de los pecados,',
      l14: 'la resurrección de la carne y la vida eterna.',
      l15: 'Amén.'
    }
  },

  church: {
    h1: 'Iglesia',
    intro: 'Woda Życia es una iglesia contemporánea con el mensaje atemporal del Evangelio, donde una persona corriente puede conocer a un Dios extraordinario y emprender la mejor aventura de la vida: seguir a Cristo y llevar a cabo su plan singular junto a otros creyentes.',
    claim: { a: 'Tengo mucho pueblo', b: 'en esta ciudad' },
    claimSource: 'Hch 18:10 | 1990',

    how: {
      q1: '¿Cómo vivimos?',
      a1: 'Siguiendo a Cristo, vivimos según los valores del Reino de Dios.',
      q2: '¿Qué hacemos?',
      a2: 'Formamos una iglesia contemporánea, intergeneracional y carismática que expresa amor a Dios y a las personas.',
      q3: '¿Cómo vencemos?',
      a3a: 'Vencemos llevando a las personas a una relación llena de vida con Dios Padre.',
      a3b: 'Vencemos experimentando a Dios en las reuniones comunes, en los grupos en casas, en conferencias, eventos y relaciones uno a uno.',
      a3c: 'Vencemos aportando un cambio positivo a la vida de nuestra ciudad.'
    },

    values: {
      h2: 'Valores',
      v1: 'Jesús', v2: 'Personas', v3: 'Comunidad', v4: 'Generosidad', v5: 'Calidad'
    },

    pastor: {
      h3: 'Pastor Mateusz Godawa',
      text: 'Mateusz Godawa es el pastor de la iglesia Woda Życia. Junto con su esposa Aneta, desde 2018 construyen activamente la comunidad local en Koszalin, animando a descubrir la increíble aventura que es la vida diaria en relación con Cristo. Mateusz y Aneta son padres de Alisa y Elian.',
      instagram: 'Instagram'
    },
    leaders: {
      h3: 'Equipo de líderes',
      text: 'Este es nuestro equipo: personas que aman a Jesucristo y aman edificar su iglesia.'
    },
    founder: {
      h3: 'Pastor Paweł Godawa',
      text: 'Paweł Godawa (1967–2018) fue, desde su fundación y durante casi 30 años, el pastor principal de la iglesia «Woda Życia». La historia de su vocación se remonta al movimiento carismático católico de los años 80. En sus enseñanzas presentaba un enfoque práctico de la fe, de las Escrituras y de la relación del ser humano con Dios. La transformación de la mentalidad y del estilo de vida, las relaciones con los seres queridos, la generosidad y la edificación de la iglesia local fueron los temas centrales de su ministerio. Autor de los libros: Zrozumienie życia, Sztuka słuchania, Niebo i piekło w kościele, Niebo i piekło w portfelu.',
      archive: 'Archivo de prédicas',
      video: 'Pioneros: sobre quienes fueron antes que nosotros #2, pastor Paweł Godawa'
    }
  },

  kids: {
    h1: 'Kids',
    intro: '¡Queremos ver una generación joven que viva con Dios! Por eso, como voluntarios, creamos un lugar donde en un ambiente cercano y de forma creativa hablamos de Dios, jugamos, oramos, adoramos e incluso desayunamos juntos.',
    sunday: {
      h2: { a: 'Domingo con', b: 'kids' },
      p1: 'Cada semana ofrecemos actividades para niños de 4 a 9 años',
      p2: 'Horario de inscripción:',
      p3: 'Para los padres y los peques de hasta 3 años hay una sala de juegos y un cambiador. La sala cuenta con un televisor que retransmite la reunión.'
    },
    docs: {
      standards: 'Estándares de protección de menores',
      parents: 'Normas para padres'
    }
  },

  news: {
    h1: 'Novedades',
    intro: 'Lo que pasa entre nosotros: eventos, anuncios e invitaciones.',
    empty: 'De momento no hay entradas nuevas.',
    more: 'Seguir leyendo'
  },

  give: {
    h1: 'Apoyo',
    dotpay: {
      h2: 'Dotpay',
      p: 'Sistema seguro de pagos por internet',
      howto: 'Instrucciones:',
      s1: '1. Indica el propósito, p. ej. ofrenda o diezmo,',
      s2: '2. Elige el importe,',
      s3: '3. Pulsa el botón «Pagar en línea con dotpay». Se te redirigirá para elegir el método de pago.',
      purpose: 'Propósito:',
      amount: 'Importe:',
      pay: 'Pagar en línea con dotpay'
    },
    paypal: {
      p: 'PayPal admite pagos con saldo de PayPal y con las tarjetas de crédito más habituales.',
      alt: 'Donar mediante el botón de PayPal',
      button: 'Donar con PayPal'
    },
    bank: {
      h2: 'Transferencia bancaria tradicional',
      recipient: 'DESTINATARIO:',
      taxNote: 'Si escribes «Darowizna na cele kultu religijnego» en el concepto de la transferencia, podrás deducir el donativo de la base imponible en tu declaración anual polaca.'
    },
    docs: {
      terms: 'Condiciones de pago',
      statute: 'Estatuto de la Iglesia de Dios en Cristo'
    }
  },

  contact: {
    h1: 'Contacto',
    h2: { a: 'Iglesia Woda', b: 'Życia' },
    labels: {
      address: 'Dirección',
      phone: 'Teléfono',
      email: 'Correo electrónico',
      social: 'Redes sociales'
    },
    map: { h2: 'Cómo llegar', directions: 'Ver la ruta' }
  },

  privacy: {
    h1: 'Política de privacidad',
    updated: 'Última actualización: agosto de 2026',
    intro: 'Esta web es estática: no hay cuentas de usuario, ni comentarios, ni base de datos. A continuación explicamos qué datos pueden tratarse aun así y qué puedes hacer al respecto.',
    s1: { h2: 'Quién es el responsable del tratamiento',
          p: 'El responsable es Centrum Chrześcijańskie Woda Życia, ul. Władysława IV 147, 75-342 Koszalin, Polonia. Para cuestiones sobre datos personales escribe a kontakt@wodazycia.org.' },
    s2: { h2: 'Formulario de inscripción',
          p: 'El formulario de la página «¿Es tu primera vez aquí?» abre tu programa de correo con un mensaje ya redactado. Los datos no se guardan en el servidor de esta web: nos llegan solo cuando tú mismo envías el mensaje. Los usamos únicamente para responderte y comunicarte la fecha del encuentro. La base legal es tu consentimiento (art. 6.1.a RGPD); puedes retirarlo en cualquier momento.' },
    s3: { h2: 'Cookies',
          p: 'Esta web no utiliza cookies de seguimiento ni publicitarias. En la memoria del navegador solo se guarda el idioma que elijas, para que no tengas que volver a configurarlo en la siguiente visita. Esa información no sale de tu dispositivo.' },
    s4: { h2: 'Contenido incrustado de otros servicios',
          p: 'Los vídeos de YouTube se cargan solo después de pulsar la vista previa; hasta ese momento YouTube no sabe nada de tu visita. El mapa procede de OpenStreetMap y solo se carga cuando te desplazas hasta él. OpenStreetMap no utiliza cookies ni publicidad. Los botones bajo el mapa llevan a Google Maps o Apple Maps: solo llegas a esos servicios tras pulsarlos. Los botones de pago llevan a Dotpay y PayPal. Una vez en esos servicios se aplican sus propias políticas de privacidad.' },
    s5: { h2: 'Estadísticas y registros',
          p: 'No llevamos estadísticas propias de visitas. El proveedor de alojamiento puede guardar registros técnicos del servidor (dirección IP, fecha, dirección de la página) por motivos de seguridad y mantenimiento.' },
    s6: { h2: 'Cuánto tiempo conservamos los datos',
          p: 'Conservamos los correos el tiempo necesario para atender el asunto y después los borramos. Si quieres que borremos tus datos antes, escríbenos.' },
    s7: { h2: 'Tus derechos',
          p: 'Tienes derecho a acceder a tus datos, rectificarlos, suprimirlos, limitar su tratamiento, a la portabilidad y a oponerte. También tienes derecho a presentar una reclamación ante la autoridad polaca de control (Prezes Urzędu Ochrony Danych Osobowych, ul. Stawki 2, 00-193 Warszawa).' },
    s8: { h2: 'Cambios',
          p: 'Si cambia la forma de tratar los datos, actualizaremos este documento y modificaremos la fecha que aparece arriba.' }
  },

  notfound: {
    h1: '404',
    p: 'Esta página no existe. Puede que estuviera en otra dirección o que el enlace haya cambiado.',
    cta: 'Volver a la página de inicio'
  }
},

/* ########  SZWEDZKI  ####################################################### */
sv: {
  langName: 'Svenska',
  identity: 'Evangelisk frikyrka i Koszalin i Polen, ul. Władysława IV 147. Del av Guds församling i Kristus, verksam sedan 1990.',

  meta: {
    home:     { title: 'Församlingen Woda Życia — Koszalin',
                desc: 'Församlingen Woda Życia i Koszalin, Polen. Gudstjänst varje söndag kl. 11:00, ul. Władysława IV 147. Kom förbi, helt enkelt.' },
    first:    { title: 'Är det första gången här? | Woda Życia — Koszalin',
                desc: 'Vad som väntar dig på mötet i Koszalin, svar på vanliga frågor och vad vi tror på.' },
    church:   { title: 'Församlingen | Woda Życia — Koszalin',
                desc: 'Vilka vi är, hur vi lever och vad vi gör. Pastor Mateusz Godawa, ledarteamet och historien om församlingen Woda Życia i Koszalin.' },
    kids:     { title: 'Kids | Woda Życia — Koszalin',
                desc: 'Söndagsprogram för barn 4–9 år i Koszalin. Lekrum och skötbord för de minsta.' },
    news:     { title: 'Nyheter | Woda Życia — Koszalin',
                desc: 'Nyheter, evenemang och meddelanden ur församlingen Woda Życias liv i Koszalin.' },
    give:     { title: 'Stöd oss | Woda Życia — Koszalin',
                desc: 'Så kan du stödja församlingen Woda Życia i Koszalin: betalning online, PayPal eller vanlig banköverföring.' },
    contact:  { title: 'Kontakt | Woda Życia — Koszalin',
                desc: 'ul. Władysława IV 147, 75-342 Koszalin, Polen. Skriv till oss eller kom förbi.' },
    privacy:  { title: 'Integritetspolicy | Woda Życia — Koszalin',
                desc: 'Hur församlingen Woda Życia hanterar personuppgifter och vilka rättigheter du har enligt GDPR.' },
    notfound: { title: 'Sidan hittades inte | Woda Życia — Koszalin', desc: '' }
  },

  ui: {
    skip: 'Hoppa till innehållet',
    menu: 'Meny',
    language: 'Språk',
    playVideo: 'Spela upp filmen',
    liveStream: 'Direktsändning',
    openIn: 'Öppna i nytt fönster',
    download: 'Ladda ner',
    loading: 'Laddar…'
  },

  nav: {
    home: 'Startsida',
    first: 'Första gången här?',
    church: 'Församlingen',
    kids: 'Kids',
    news: 'Nyheter',
    give: 'Stöd oss',
    contact: 'Kontakt',
    privacy: 'Integritetspolicy'
  },

  footer: {
    name: 'Församlingen Woda Życia',
    follow: 'Hitta oss',
    rights: 'Alla rättigheter förbehållna.'
  },

  home: {
    h1: 'Woda Życia',
    hero: { a: 'HEJ!', b: 'HALLÅ!', c: 'VÄLKOMMEN!', cta: 'Låt oss lära känna varandra' },
    visit: {
      h2: 'Kom förbi',
      p: 'Helt enkelt. Oavsett var du kommer ifrån, hur gammal du är, vad du tror på, hur du klär dig eller vem du röstar på.',
      cta: 'Kontakt'
    },
    online: {
      h2: 'Se mötena online',
      channel: 'Vår YouTube-kanal',
      archive: 'Tidigare möten'
    },
    inspire: {
      h2: 'Bli inspirerad!',
      current: 'Lyssna på aktuell undervisning. Alla predikningar finns på Spotify eller Apple Podcasts',
      archive: 'Lyssna på undervisning ur arkivet. Alla predikningar finns på Spotify eller Apple Podcasts',
      currentAlt: 'Församlingen Woda Życias kanal',
      archiveAlt: 'Pastor Paweł Godawa'
    },
    news: { h2: 'Nyheter', all: 'Alla nyheter' }
  },

  first: {
    h1: { a: 'Första', b: 'gången', c: 'här?' },
    intro: 'I mer än 30 år har vi byggt en öppen kristen gemenskap i Koszalin. Vi kommer från olika sammanhang och har olika historier, men en sak förenar oss — Jesus Kristus. Vi är övertygade om att livet i tro är ett fascinerande äventyr som Gud bjuder in varje människa till — även dig!',
    faqCta: 'Vanliga frågor',

    faq: {
      h2: { a: 'Vanliga', b: 'frågor' },
      q1: 'Är Woda Życia en katolsk gemenskap?',
      a1a: 'Nej, men vad bra att du frågar! Församlingen Woda Życia hör till de evangeliska kyrkorna och är en del av förbundet ”KBWCH”, som samlar över 80 församlingar i Polen. Vi är öppna mot andra samfund och vill bygga broar mellan oss, inte murar.',
      a1b: 'Guds församling i Kristus (KBWCH) registrerades den 27 februari 1988. Den är i dag införd i registret över kyrkor och religiösa samfund som förs av det polska inrikesministeriets avdelning för trossamfund, avsnitt A, post 28.',
      q2: 'Kan man bara komma till ert möte?',
      a2: 'Absolut, JA',
      q3: 'Hur ser ett vanligt möte ut?',
      a3worship: 'LOVSÅNG',
      a3worshipText: 'vi sjunger, ber och prisar Gud till livemusik',
      a3sermon: 'PREDIKAN',
      a3sermonText: 'pastorn eller en inbjuden talare delar ett praktiskt budskap utifrån Bibeln',
      a3prayer: 'BÖN',
      a3prayerText: 'vi avslutar mötet med gemensam bön, ibland också med sång',
      a3offering: 'På de flesta möten ger vi utrymme för en frivillig kollekt till församlingens arbete',
      a3cafe: 'Efter mötet är du välkommen till vårt kafé',
      q4: 'Måste man göra något särskilt under mötet?',
      a4: 'Nej. Du kan bara komma, sätta dig bekvämt, lyssna och gå när du vill.',
      q5: 'Kan man ta med barn?',
      a5: 'Ja. Barn i åldern 4–9 år har ett eget program som leds av våra volontärer, och för de yngre finns ett rum med leksaker och ett rum med skötbord',
      a5link: 'Läs mer om WODA ŻYCIA KIDS'
    },

    start: {
      h2: { a: 'Woda Życia', b: 'start' },
      p: 'Vill du lära känna oss ännu bättre? Den här träffen är för dig. Du får veta mer om vår historia, våra värderingar och möjligheterna att engagera dig, och du möter intressanta människor som gör den här platsen till vad den är. Anmäl dig så skickar vi datum och tid.',
      name: 'För- och efternamn',
      email: 'E-post',
      phone: 'Telefon',
      consent: 'Jag godkänner',
      consentLink: 'integritetspolicyn',
      send: 'Anmäl mig',
      hint: 'Formuläret öppnar ditt e-postprogram med ett färdigt meddelande. Du kan också skriva direkt till kontakt@wodazycia.org.',
      subject: 'Anmälan till träffen Woda Życia start'
    },

    believe: {
      h2: { a: 'Vad vi', b: 'tror', c: 'på?' },
      i1: { title: 'Gud Fadern',
            text: 'Det finns en evig, allsmäktig och allestädes närvarande Gud. Enligt Jesu Kristi undervisning är han en god, kärleksfull Fader som söker en relation med varje människa.',
            verses: 'Joh 4:24 / Matt 6:9 / 1 Joh 4:14-16' },
      i2: { title: 'Jesus Kristus',
            text: 'Han kom till världen som människa för att ge världen budskapet om Gud Fadern, återlösa mänskligheten från synden genom sin död på korset och sin uppståndelse, och ge nytt liv åt var och en som tror på honom.',
            verses: 'Matt 11:27 / 1 Tim 2:5-6 / Rom 5:1 / Rom 10:9' },
      i3: { title: 'Den helige Ande',
            text: 'Enligt Jesu Kristi löfte sändes den helige Ande till jorden efter hans himmelsfärd för att bygga församlingen, stödja de troende och verka genom dem.',
            verses: 'Joh 14:16-20 / Apg 1:1-8 / Apg 2:1-4' },
      i4: { title: 'Ny födelse',
            text: 'Varje människa som tar emot frälsningen genom tron på Jesus Kristus föds i den andliga verkligheten på nytt som Guds barn. Därigenom blir relationen med Gud, det nya livet och livet i evigheten möjliga.',
            verses: 'Joh 3:1-18 / Mark 1:15 / Rom 10:9-13 / Joh 1:12-13' },
      i5: { title: 'Dopet',
            text: 'Genom dopet identifierar sig varje troende med Jesus Kristus, lämnar det förflutna bakom sig och bekänner ett liv överlåtet åt Gud.',
            verses: 'Matt 28:16-20 / Rom 6:1-14 / Gal 3:26-27' },
      i6: { title: 'Församlingen',
            text: 'Jesus Kristus dog och uppstod för att försona människan med Gud, men också för att försona människor med varandra. Därför är kyrkan inte en byggnad utan MÄNNISKOR — Kristi kropp — Guds familj. Det är en plats för alla att vara tillsammans, tjäna, växa andligt och helt enkelt dela livet med andra.',
            verses: 'Matt 16:18 / Apg 2:42-47 / Ef 2:19-21' },
      i7: { title: 'Bibeln',
            text: 'Vi tror att Skriften — Gamla och Nya testamentet — inte bara är en samling intressanta berättelser, utan framför allt Guds inspirerade Ord, som innehåller tidlösa anvisningar, visdom och Guds löften och utgör grunden för alla frågor som rör kristet liv och kristen tro.',
            verses: '2 Tim 3:16-17' },
      i8: { title: 'Evigheten',
            text: 'Alla som har fötts måste en dag också dö, men där slutar inte vår historia. Genom Jesus Kristus och frälsningen kan vi vara säkra på vår framtid — evigheten med Gud och med alla troende.',
            verses: 'Pred 3:11 / Joh 3:16 / 2 Kor 4:16-18' }
    },

    creed: {
      title: 'Apostoliska trosbekännelsen',
      l1: 'Jag tror på Gud Fader allsmäktig,',
      l2: 'himmelens och jordens skapare,',
      l3: 'och på Jesus Kristus, hans enfödde Son, vår Herre,',
      l4: 'vilken är avlad av den helige Ande,',
      l5: 'född av jungfrun Maria,',
      l6: 'pinad under Pontius Pilatus,',
      l7: 'korsfäst, död och begraven,',
      l8: 'nedstigen till dödsriket, på tredje dagen uppstånden igen ifrån de döda,',
      l9: 'uppstigen till himmelen, sittande på allsmäktig Gud Faders högra sida,',
      l10: 'därifrån igenkommande till att döma levande och döda.',
      l11: 'Jag tror på den helige Ande,',
      l12: 'en helig, allmännelig kyrka,',
      l13: 'de heligas samfund, syndernas förlåtelse,',
      l14: 'de dödas uppståndelse och ett evigt liv.',
      l15: 'Amen.'
    }
  },

  church: {
    h1: 'Församlingen',
    intro: 'Woda Życia är en samtida församling med evangeliets tidlösa budskap, där en helt vanlig människa kan lära känna en ovanlig Gud och ge sig ut på livets bästa äventyr — att följa Kristus och förverkliga hans unika plan tillsammans med andra troende.',
    claim: { a: 'Jag har mycket folk', b: 'i denna stad' },
    claimSource: 'Apg 18:10 | 1990',

    how: {
      q1: 'Hur lever vi?',
      a1: 'Vi följer Kristus och lever efter Guds rikes värderingar.',
      q2: 'Vad gör vi?',
      a2: 'Vi bygger en samtida, generationsöverskridande och karismatisk församling som uttrycker kärlek till Gud och till människor.',
      q3: 'Hur vinner vi?',
      a3a: 'Vi vinner genom att leda människor in i en levande relation med Gud Fadern.',
      a3b: 'Vi vinner genom att uppleva Gud på gemensamma möten, i hemgrupper, på konferenser, evenemang och i relationer en och en.',
      a3c: 'Vi vinner genom att föra med oss positiv förändring i vår stads liv.'
    },

    values: {
      h2: 'Värderingar',
      v1: 'Jesus', v2: 'Människor', v3: 'Gemenskap', v4: 'Generositet', v5: 'Kvalitet'
    },

    pastor: {
      h3: 'Pastor Mateusz Godawa',
      text: 'Mateusz Godawa är pastor för församlingen Woda Życia. Tillsammans med sin fru Aneta bygger han sedan 2018 aktivt den lokala gemenskapen i Koszalin och inspirerar till att upptäcka det fantastiska äventyr som vardagen i relation med Kristus är. Mateusz och Aneta är föräldrar till Alisa och Elian.',
      instagram: 'Instagram'
    },
    leaders: {
      h3: 'Ledarteamet',
      text: 'Det här är vårt team — människor som älskar Jesus Kristus och älskar att bygga hans församling.'
    },
    founder: {
      h3: 'Pastor Paweł Godawa',
      text: 'Paweł Godawa (1967–2018) var från grundandet i nästan 30 år huvudpastor för församlingen ”Woda Życia”. Berättelsen om hans kallelse går tillbaka till den katolska karismatiska rörelsen på 1980-talet. I sin undervisning presenterade han ett praktiskt förhållningssätt till tron, till Bibeln och till människans relation med Gud. Förändrat tänkesätt och förändrad livsstil, relationer till de närmaste, generositet och byggandet av den lokala församlingen var de viktigaste temana i hans undervisning. Författare till böckerna: Zrozumienie życia, Sztuka słuchania, Niebo i piekło w kościele, Niebo i piekło w portfelu.',
      archive: 'Predikoarkiv',
      video: 'Pionjärer — om dem som gick före oss #2, pastor Paweł Godawa'
    }
  },

  kids: {
    h1: 'Kids',
    intro: 'Vi vill se en ung generation som lever med Gud! Därför skapar vi som volontärer en plats där vi i en vänlig atmosfär och på kreativa sätt berättar om Gud, leker, ber, lovsjunger och till och med äter frukost tillsammans!',
    sunday: {
      h2: { a: 'Söndag med', b: 'kids' },
      p1: 'Varje vecka har vi program för barn i åldern 4–9 år',
      p2: 'Incheckning pågår',
      p3: 'För föräldrar och barn upp till 3 år finns ett lekrum och ett skötbord. Rummet har en tv som sänder mötet.'
    },
    docs: {
      standards: 'Standarder för barnskydd',
      parents: 'Regler för föräldrar'
    }
  },

  news: {
    h1: 'Nyheter',
    intro: 'Vad som händer hos oss — evenemang, meddelanden och inbjudningar.',
    empty: 'Det finns inga nya inlägg just nu.',
    more: 'Läs mer'
  },

  give: {
    h1: 'Stöd oss',
    dotpay: {
      h2: 'Dotpay',
      p: 'Säkert system för betalningar på nätet',
      howto: 'Så gör du:',
      s1: '1. Ange ändamål, t.ex. gåva eller tionde,',
      s2: '2. Välj belopp,',
      s3: '3. Klicka på knappen ”Betala online via dotpay”. Du skickas vidare för att välja betalsätt.',
      purpose: 'Ändamål:',
      amount: 'Belopp:',
      pay: 'Betala online via dotpay'
    },
    paypal: {
      p: 'PayPal hanterar betalningar från PayPal-saldo och med vanliga kreditkort.',
      alt: 'Ge en gåva med PayPal-knappen',
      button: 'Ge en gåva med PayPal'
    },
    bank: {
      h2: 'Vanlig banköverföring',
      recipient: 'MOTTAGARE:',
      taxNote: 'Om du anger ”Darowizna na cele kultu religijnego” som meddelande kan gåvan enligt polska regler dras av från beskattningsunderlaget i den årliga deklarationen.'
    },
    docs: {
      terms: 'Betalningsvillkor',
      statute: 'Stadgar för Guds församling i Kristus'
    }
  },

  contact: {
    h1: 'Kontakt',
    h2: { a: 'Församlingen Woda', b: 'Życia' },
    labels: {
      address: 'Adress',
      phone: 'Telefon',
      email: 'E-post',
      social: 'Sociala medier'
    },
    map: { h2: 'Hitta hit', directions: 'Visa vägen' }
  },

  privacy: {
    h1: 'Integritetspolicy',
    updated: 'Senast uppdaterad: augusti 2026',
    intro: 'Den här webbplatsen är statisk — det finns inga användarkonton, inga kommentarer och ingen databas. Nedan beskriver vi vilka uppgifter som ändå kan behandlas och vad du kan göra åt det.',
    s1: { h2: 'Vem är personuppgiftsansvarig',
          p: 'Personuppgiftsansvarig är Centrum Chrześcijańskie Woda Życia, ul. Władysława IV 147, 75-342 Koszalin, Polen. I frågor om personuppgifter, skriv till kontakt@wodazycia.org.' },
    s2: { h2: 'Anmälningsformulär',
          p: 'Formuläret på sidan ”Första gången här?” öppnar ditt e-postprogram med ett färdigt meddelande. Uppgifterna sparas inte på den här webbplatsens server — de når oss först när du själv skickar meddelandet. Vi använder dem enbart för att svara och meddela tid för träffen. Rättslig grund är ditt samtycke (art. 6.1 a GDPR); du kan när som helst återkalla det.' },
    s3: { h2: 'Kakor',
          p: 'Den här webbplatsen använder inga kakor för spårning eller reklam. I webbläsarens minne sparas endast det språk du valt, så att du slipper ställa in det igen vid nästa besök. Den informationen lämnar aldrig din enhet.' },
    s4: { h2: 'Innehåll inbäddat från andra tjänster',
          p: 'YouTube-filmer laddas först när du klickar på förhandsbilden — dessförinnan vet YouTube ingenting om ditt besök. Kartan kommer från OpenStreetMap och laddas först när du skrollar fram till den. OpenStreetMap använder varken kakor eller reklam. Knapparna under kartan leder till Google Maps eller Apple Kartor — dit kommer du först efter ett klick. Betalknapparna leder till Dotpay och PayPal. När du gått vidare dit gäller deras egna integritetsregler.' },
    s5: { h2: 'Statistik och loggar',
          p: 'Vi för ingen egen besöksstatistik. Webbhotellet kan spara tekniska serverloggar (IP-adress, datum, sidadress) för säkerhet och drift.' },
    s6: { h2: 'Hur länge vi sparar uppgifter',
          p: 'Vi behåller e-post så länge det behövs för att hantera ärendet och raderar den sedan. Vill du att dina uppgifter raderas tidigare — hör av dig.' },
    s7: { h2: 'Dina rättigheter',
          p: 'Du har rätt till tillgång till dina uppgifter, rättelse, radering, begränsning av behandlingen, dataportabilitet och rätt att invända. Du har också rätt att lämna klagomål till den polska tillsynsmyndigheten (Prezes Urzędu Ochrony Danych Osobowych, ul. Stawki 2, 00-193 Warszawa).' },
    s8: { h2: 'Ändringar',
          p: 'Om sättet vi behandlar uppgifter på ändras uppdaterar vi det här dokumentet och ändrar datumet högst upp.' }
  },

  notfound: {
    h1: '404',
    p: 'Sidan finns inte. Den kanske låg på en annan adress, eller så har länken ändrats.',
    cta: 'Tillbaka till startsidan'
  }
},

/* ########  WĘGIERSKI  ###################################################### */
hu: {
  langName: 'Magyar',
  identity: 'Evangéliumi gyülekezet a lengyelországi Koszalinban, ul. Władysława IV 147. A Krisztusban való Isten Egyházának része, 1990 óta működik.',

  meta: {
    home:     { title: 'Woda Życia Gyülekezet — Koszalin',
                desc: 'A Woda Życia Gyülekezet Koszalinban, Lengyelországban. Istentisztelet minden vasárnap 11:00-kor, ul. Władysława IV 147. Ugorj be hozzánk, csak úgy.' },
    first:    { title: 'Először vagy itt? | Woda Życia — Koszalin',
                desc: 'Mi vár rád az alkalmon Koszalinban, válaszok a leggyakoribb kérdésekre, és hogy miben hiszünk.' },
    church:   { title: 'Gyülekezet | Woda Życia — Koszalin',
                desc: 'Kik vagyunk, hogyan élünk és mit csinálunk. Mateusz Godawa lelkipásztor, a vezetői csapat és a koszalini Woda Życia gyülekezet története.' },
    kids:     { title: 'Kids | Woda Życia — Koszalin',
                desc: 'Vasárnapi program 4–9 éves gyerekeknek Koszalinban. Játszószoba és pelenkázó a legkisebbeknek.' },
    news:     { title: 'Hírek | Woda Życia — Koszalin',
                desc: 'Hírek, események és közlemények a koszalini Woda Życia gyülekezet életéből.' },
    give:     { title: 'Támogatom | Woda Życia — Koszalin',
                desc: 'Hogyan támogathatod a koszalini Woda Życia gyülekezetet: online fizetés, PayPal vagy hagyományos banki átutalás.' },
    contact:  { title: 'Kapcsolat | Woda Życia — Koszalin',
                desc: 'ul. Władysława IV 147, 75-342 Koszalin, Lengyelország. Írj nekünk, vagy egyszerűen ugorj be.' },
    privacy:  { title: 'Adatvédelmi tájékoztató | Woda Życia — Koszalin',
                desc: 'Hogyan kezeli a Woda Życia Gyülekezet a személyes adatokat, és milyen jogaid vannak a GDPR szerint.' },
    notfound: { title: 'Az oldal nem található | Woda Życia — Koszalin', desc: '' }
  },

  ui: {
    skip: 'Ugrás a tartalomra',
    menu: 'Menü',
    language: 'Nyelv',
    playVideo: 'Felvétel lejátszása',
    liveStream: 'Élő közvetítés',
    openIn: 'Megnyitás új ablakban',
    download: 'Letöltés',
    loading: 'Betöltés…'
  },

  nav: {
    home: 'Főoldal',
    first: 'Először vagy itt?',
    church: 'Gyülekezet',
    kids: 'Kids',
    news: 'Hírek',
    give: 'Támogatom',
    contact: 'Kapcsolat',
    privacy: 'Adatvédelmi tájékoztató'
  },

  footer: {
    name: 'Woda Życia Gyülekezet',
    follow: 'Találj meg minket',
    rights: 'Minden jog fenntartva.'
  },

  home: {
    h1: 'Woda Życia',
    hero: { a: 'HÉ!', b: 'SZIA!', c: 'ÜDVÖZLÜNK!', cta: 'Ismerkedjünk meg' },
    visit: {
      h2: 'Ugorj be hozzánk',
      p: 'Csak úgy. Mindegy, honnan jössz, hány éves vagy, miben hiszel, hogyan öltözködsz vagy kire szavazol.',
      cta: 'Kapcsolat'
    },
    online: {
      h2: 'Nézd az alkalmakat online',
      channel: 'YouTube-csatornánk',
      archive: 'Korábbi alkalmak felvételei'
    },
    inspire: {
      h2: 'Töltekezz fel!',
      current: 'Hallgasd meg az aktuális tanításokat. Minden prédikáció megtalálható a Spotifyon vagy az Apple Podcastson',
      archive: 'Hallgasd meg az archív tanításokat. Minden prédikáció megtalálható a Spotifyon vagy az Apple Podcastson',
      currentAlt: 'A Woda Życia Gyülekezet csatornája',
      archiveAlt: 'Paweł Godawa lelkipásztor'
    },
    news: { h2: 'Hírek', all: 'Összes hír' }
  },

  first: {
    h1: { a: 'Először', b: 'vagy', c: 'itt?' },
    intro: 'Több mint 30 éve építünk Koszalinban egy nyitott keresztény közösséget. Különböző környezetből jövünk, más-más történetünk van, de egy dolog összeköt minket: Jézus Krisztus. Meggyőződésünk, hogy a hitben élt élet lenyűgöző kaland, amelyre Isten minden embert meghív — téged is!',
    faqCta: 'Gyakran ismételt kérdések',

    faq: {
      h2: { a: 'Gyakori', b: 'kérdések' },
      q1: 'A Woda Życia katolikus közösség?',
      a1a: 'Nem, de jó, hogy kérdezed! A Woda Życia Gyülekezet az evangéliumi egyházak közé tartozik, és tagja a „KBWCH” szövetségnek, amely több mint 80 gyülekezetet fog össze Lengyelországban. Nyitottak vagyunk más felekezetek felé, és hidakat szeretnénk építeni magunk között, nem falakat.',
      a1b: 'A Krisztusban való Isten Egyházát (KBWCH) 1988. február 27-én jegyezték be. Jelenleg szerepel az egyházak és vallási közösségek nyilvántartásában, amelyet a lengyel belügyminisztérium egyházügyi főosztálya vezet, „A” rész, 28. tétel.',
      q2: 'Csak úgy be lehet jönni az alkalmatokra?',
      a2: 'Határozottan IGEN',
      q3: 'Hogy néz ki egy szokásos alkalom?',
      a3worship: 'DICSŐÍTÉS',
      a3worshipText: 'énekelünk, imádkozunk és élő zenével dicsőítjük Istent',
      a3sermon: 'IGEHIRDETÉS',
      a3sermonText: 'a lelkipásztor vagy egy meghívott szolgáló gyakorlatias üzenetet oszt meg a Szentírás alapján',
      a3prayer: 'IMÁDSÁG',
      a3prayerText: 'az alkalmat közös imádsággal zárjuk, néha énekléssel is',
      a3offering: 'A legtöbb alkalmon teret adunk az önkéntes adakozásra a gyülekezet céljaira',
      a3cafe: 'Az alkalom után szeretettel várunk a kávézónkban',
      q4: 'Kell valamit csinálni az alkalom alatt?',
      a4: 'Nem. Egyszerűen bejöhetsz, kényelmesen leülhetsz, hallgathatod, és bármikor elmehetsz.',
      q5: 'Lehet gyerekekkel jönni?',
      a5: 'Igen. A 4–9 éves gyerekeknek külön alkalmuk van, amelyet önkénteseink vezetnek, a kisebbeknek pedig játékokkal berendezett szoba és pelenkázós helyiség áll rendelkezésre',
      a5link: 'Tudj meg többet a WODA ŻYCIA KIDS-ről'
    },

    start: {
      h2: { a: 'Woda Życia', b: 'start' },
      p: 'Szeretnél még jobban megismerni minket? Ez az alkalom neked szól. Többet tudsz meg a történetünkről, az értékeinkről, a bekapcsolódás lehetőségeiről, és megismersz érdekes embereket, akik ezt a helyet alkotják. Jelentkezz, és elküldjük az alkalom időpontját.',
      name: 'Név',
      email: 'E-mail',
      phone: 'Telefon',
      consent: 'Elfogadom az',
      consentLink: 'adatvédelmi tájékoztatót',
      send: 'Jelentkezem',
      hint: 'Az űrlap megnyitja a levelezőprogramodat egy előre megírt üzenettel. Írhatsz közvetlenül is a kontakt@wodazycia.org címre.',
      subject: 'Jelentkezés a Woda Życia start alkalomra'
    },

    believe: {
      h2: { a: 'Miben', b: 'hiszünk', c: '?' },
      i1: { title: 'Az Atya Isten',
            text: 'Egy örökkévaló, mindenható és mindenütt jelen lévő Isten van. Jézus Krisztus tanítása szerint jó, szerető Atya, aki minden emberrel kapcsolatra vágyik.',
            verses: 'Jn 4,24 / Mt 6,9 / 1Jn 4,14-16' },
      i2: { title: 'Jézus Krisztus',
            text: 'Emberként jött a világba, hogy elhozza a világnak az Atya Istenről szóló üzenetet, a kereszten való halálával és feltámadásával megváltsa az emberiséget a bűntől, és új életet adjon mindenkinek, aki hisz benne.',
            verses: 'Mt 11,27 / 1Tim 2,5-6 / Róm 5,1 / Róm 10,9' },
      i3: { title: 'A Szentlélek',
            text: 'Jézus Krisztus ígérete szerint mennybemenetele után a Szentlélek küldetett a földre, hogy építse az egyházat, támogassa a hívőket, és általuk munkálkodjon.',
            verses: 'Jn 14,16-20 / ApCsel 1,1-8 / ApCsel 2,1-4' },
      i4: { title: 'Újjászületés',
            text: 'Minden ember, aki a Jézus Krisztusba vetett hit által elfogadja az üdvösséget, a lelki valóságban újjászületik Isten gyermekeként. Ezáltal válik lehetségessé az Istennel való kapcsolat, az új élet és az örökkévalóság.',
            verses: 'Jn 3,1-18 / Mk 1,15 / Róm 10,9-13 / Jn 1,12-13' },
      i5: { title: 'Keresztség',
            text: 'A keresztség által minden hívő azonosul Jézus Krisztussal, maga mögött hagyja a múltat, és az Istennek odaszánt életet vallja meg.',
            verses: 'Mt 28,16-20 / Róm 6,1-14 / Gal 3,26-27' },
      i6: { title: 'Az egyház',
            text: 'Jézus Krisztus meghalt és feltámadt, hogy megbékéltesse az embert Istennel, de azért is, hogy megbékéltesse az embereket egymással. Ezért az egyház nem épület, hanem EMBEREK — Krisztus teste — Isten családja. Olyan hely, ahol bárki együtt lehet másokkal, szolgálhat, lelkileg növekedhet, és egyszerűen megoszthatja az életét másokkal.',
            verses: 'Mt 16,18 / ApCsel 2,42-47 / Ef 2,19-21' },
      i7: { title: 'A Biblia',
            text: 'Hisszük, hogy a Szentírás — az Ó- és Újszövetség — nem csupán érdekes történetek gyűjteménye, hanem mindenekelőtt Isten által ihletett Ige, amely időtálló útmutatást, bölcsességet és isteni ígéreteket tartalmaz, és alapja a keresztény élet és hit minden kérdésének.',
            verses: '2Tim 3,16-17' },
      i8: { title: 'Örökkévalóság',
            text: 'Mindenkinek, aki megszületett, egyszer meg is kell halnia, de a történetünk itt nem ér véget. Jézus Krisztus és az üdvösség által bizonyosak lehetünk a jövőnkben — az Istennel és minden hívővel töltött örökkévalóságban.',
            verses: 'Préd 3,11 / Jn 3,16 / 2Kor 4,16-18' }
    },

    creed: {
      title: 'Apostoli hitvallás',
      l1: 'Hiszek egy Istenben, mindenható Atyában,',
      l2: 'mennynek és földnek teremtőjében;',
      l3: 'és Jézus Krisztusban, az Ő egyszülött Fiában, a mi Urunkban,',
      l4: 'aki fogantatott Szentlélektől,',
      l5: 'született Szűz Máriától,',
      l6: 'szenvedett Poncius Pilátus alatt,',
      l7: 'megfeszítették, meghalt és eltemették,',
      l8: 'alászállt a poklokra, harmadnapon feltámadt a halottak közül,',
      l9: 'fölment a mennybe, ott ül a mindenható Atya Isten jobbján,',
      l10: 'onnan jön el ítélni élőket és holtakat.',
      l11: 'Hiszek Szentlélekben,',
      l12: 'hiszem az egyetemes anyaszentegyházat,',
      l13: 'a szentek közösségét, a bűnök bocsánatát,',
      l14: 'a test feltámadását és az örök életet.',
      l15: 'Ámen.'
    }
  },

  church: {
    h1: 'Gyülekezet',
    intro: 'A Woda Życia kortárs gyülekezet az evangélium időtálló üzenetével, ahol egy hétköznapi ember megismerheti a rendkívüli Istent, és elindulhat élete legjobb kalandján: követni Krisztust, és másokkal együtt megvalósítani az Ő különleges tervét.',
    claim: { a: 'Sok népem van', b: 'ebben a városban' },
    claimSource: 'ApCsel 18,10 | 1990',

    how: {
      q1: 'Hogyan élünk?',
      a1: 'Krisztust követve Isten országának értékei szerint élünk.',
      q2: 'Mit csinálunk?',
      a2: 'Kortárs, több generációt átfogó és karizmatikus gyülekezetet építünk, amely kifejezi az Isten és az emberek iránti szeretetet.',
      q3: 'Hogyan győzünk?',
      a3a: 'Úgy győzünk, hogy embereket vezetünk élettel teli kapcsolatra az Atya Istennel.',
      a3b: 'Úgy győzünk, hogy megtapasztaljuk Istent a közös alkalmakon, a házicsoportokban, konferenciákon, rendezvényeken és a személyes kapcsolatokban.',
      a3c: 'Úgy győzünk, hogy pozitív változást hozunk városunk életébe.'
    },

    values: {
      h2: 'Értékek',
      v1: 'Jézus', v2: 'Emberek', v3: 'Közösség', v4: 'Nagylelkűség', v5: 'Minőség'
    },

    pastor: {
      h3: 'Mateusz Godawa lelkipásztor',
      text: 'Mateusz Godawa a Woda Życia Gyülekezet lelkipásztora. Feleségével, Anetával 2018 óta aktívan építik a helyi közösséget Koszalinban, és arra inspirálnak, hogy felfedezzük azt a csodálatos kalandot, amit a Krisztussal való mindennapi kapcsolat jelent. Mateusz és Aneta Alisa és Elian szülei.',
      instagram: 'Instagram'
    },
    leaders: {
      h3: 'Vezetői csapat',
      text: 'Ez a mi csapatunk — emberek, akik szeretik Jézus Krisztust, és szeretik építeni az Ő egyházát.'
    },
    founder: {
      h3: 'Paweł Godawa lelkipásztor',
      text: 'Paweł Godawa (1967–2018) az alapítástól közel 30 éven át volt a „Woda Życia” gyülekezet vezető lelkipásztora. Elhívásának története a 80-as évek katolikus karizmatikus mozgalmáig nyúlik vissza. Tanításaiban gyakorlatias megközelítést mutatott be a hitről, a Szentírásról és az ember Istennel való kapcsolatáról. A gondolkodás és az életmód megváltozása, a szeretteinkkel való kapcsolatok, a nagylelkűség és a helyi gyülekezet építése voltak tanításainak legfontosabb témái. Könyvei: Zrozumienie życia, Sztuka słuchania, Niebo i piekło w kościele, Niebo i piekło w portfelu.',
      archive: 'Prédikációk archívuma',
      video: 'Úttörők — azokról, akik előttünk jártak #2, Paweł Godawa lelkipásztor'
    }
  },

  kids: {
    h1: 'Kids',
    intro: 'Szeretnénk látni egy fiatal nemzedéket, amely Istennel él! Ezért önkéntesként olyan helyet hozunk létre, ahol barátságos légkörben és kreatívan mesélünk Istenről, játszunk, imádkozunk, dicsőítünk, sőt még közösen is reggelizünk!',
    sunday: {
      h2: { a: 'Vasárnap a', b: 'kids-szel' },
      p1: 'Minden héten foglalkozást tartunk 4–9 éves gyerekeknek',
      p2: 'A regisztráció ideje',
      p3: 'A szülőknek és a 3 év alatti kicsiknek játszószoba és pelenkázó áll rendelkezésre. A helyiségben tévé közvetíti az alkalmat.'
    },
    docs: {
      standards: 'Gyermekvédelmi standardok',
      parents: 'Szabályok szülőknek'
    }
  },

  news: {
    h1: 'Hírek',
    intro: 'Mi történik nálunk — események, közlemények és meghívók.',
    empty: 'Jelenleg nincsenek új bejegyzések.',
    more: 'Tovább olvasom'
  },

  give: {
    h1: 'Támogatom',
    dotpay: {
      h2: 'Dotpay',
      p: 'Biztonságos internetes fizetési rendszer',
      howto: 'Útmutató:',
      s1: '1. Add meg a célt, pl. adomány vagy tized,',
      s2: '2. Válaszd ki az összeget,',
      s3: '3. Kattints a „Fizetés online a dotpay-en keresztül” gombra. Átirányítunk a fizetési mód kiválasztásához.',
      purpose: 'Cél:',
      amount: 'Összeg:',
      pay: 'Fizetés online a dotpay-en keresztül'
    },
    paypal: {
      p: 'A PayPal kezeli a PayPal-egyenlegről indított fizetéseket és a népszerű hitelkártyás fizetéseket is.',
      alt: 'Adományozás a PayPal gombbal',
      button: 'Adományozás PayPallal'
    },
    bank: {
      h2: 'Hagyományos banki átutalás',
      recipient: 'KEDVEZMÉNYEZETT:',
      taxNote: 'Ha az átutalás közleményébe a „Darowizna na cele kultu religijnego” szöveget írod, a lengyel szabályok szerint az adomány levonható az adóalapból az éves bevallásban.'
    },
    docs: {
      terms: 'Fizetési szabályzat',
      statute: 'A Krisztusban való Isten Egyházának alapszabálya'
    }
  },

  contact: {
    h1: 'Kapcsolat',
    h2: { a: 'Woda', b: 'Życia Gyülekezet' },
    labels: {
      address: 'Cím',
      phone: 'Telefon',
      email: 'E-mail',
      social: 'Közösségi média'
    },
    map: { h2: 'Hogyan találsz meg minket', directions: 'Útvonal megjelenítése' }
  },

  privacy: {
    h1: 'Adatvédelmi tájékoztató',
    updated: 'Utolsó frissítés: 2026. augusztus',
    intro: 'Ez az oldal statikus — nincs felhasználói fiók, nincsenek hozzászólások és nincs adatbázis. Alább leírjuk, milyen adatok kezelése merülhet fel mégis, és mit tehetsz ezzel kapcsolatban.',
    s1: { h2: 'Ki az adatkezelő',
          p: 'Az adatkezelő a Centrum Chrześcijańskie Woda Życia, ul. Władysława IV 147, 75-342 Koszalin, Lengyelország. Személyes adatokkal kapcsolatos ügyekben írj a kontakt@wodazycia.org címre.' },
    s2: { h2: 'Jelentkezési űrlap',
          p: 'Az „Először vagy itt?” oldalon lévő űrlap megnyitja a levelezőprogramodat egy előre megírt üzenettel. Az adatok nem kerülnek az oldal szerverére — csak akkor jutnak el hozzánk, amikor te magad elküldöd az üzenetet. Kizárólag arra használjuk őket, hogy válaszoljunk és megadjuk az alkalom időpontját. Ennek jogalapja a hozzájárulásod (GDPR 6. cikk (1) a) pont); bármikor visszavonhatod.' },
    s3: { h2: 'Sütik',
          p: 'Ez az oldal nem használ sütiket követésre vagy hirdetésre. A böngésző memóriájában csak az általad választott nyelvet tároljuk, hogy a következő látogatáskor ne kelljen újra beállítani. Ez az információ nem hagyja el az eszközödet.' },
    s4: { h2: 'Más szolgáltatásokból beágyazott tartalom',
          p: 'A YouTube-videók csak az előnézetre kattintás után töltődnek be — addig a YouTube semmit nem tud a látogatásodról. A térkép az OpenStreetMapről származik, és csak akkor töltődik be, amikor odagörgetsz. Az OpenStreetMap nem használ sütiket és hirdetéseket. A térkép alatti gombok a Google Térképre vagy az Apple Térképekre vezetnek — ezekre a szolgáltatásokra csak kattintás után jutsz el. A fizetési gombok a Dotpay és a PayPal szolgáltatásaihoz vezetnek. Az odalépés után az ő saját adatvédelmi szabályaik érvényesek.' },
    s5: { h2: 'Statisztikák és naplók',
          p: 'Nem vezetünk saját látogatottsági statisztikát. A tárhelyszolgáltató biztonsági és üzemeltetési célból tárolhat technikai szervernaplókat (IP-cím, dátum, oldal címe).' },
    s6: { h2: 'Meddig őrizzük az adatokat',
          p: 'Az e-maileket addig őrizzük, amíg az ügy elintézéséhez szükséges, utána töröljük. Ha szeretnéd, hogy korábban töröljük az adataidat, írj nekünk.' },
    s7: { h2: 'A te jogaid',
          p: 'Jogod van hozzáférni az adataidhoz, helyesbíteni, töröltetni azokat, korlátozni a kezelésüket, kérni az adathordozhatóságot, valamint tiltakozni. Panasszal is élhetsz a lengyel felügyeleti hatóságnál (Prezes Urzędu Ochrony Danych Osobowych, ul. Stawki 2, 00-193 Warszawa).' },
    s8: { h2: 'Változások',
          p: 'Ha az adatkezelés módja megváltozik, frissítjük ezt a dokumentumot, és módosítjuk az oldal tetején szereplő dátumot.' }
  },

  notfound: {
    h1: '404',
    p: 'Ilyen oldal nincs. Lehet, hogy más címen volt, vagy megváltozott a hivatkozás.',
    cta: 'Vissza a főoldalra'
  }
}

};
