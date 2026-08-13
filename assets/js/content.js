/* ============================================================================
   WODA ŻYCIA — DANE KOŚCIOŁA
   ----------------------------------------------------------------------------
   Tutaj zmienia się to, co bywa aktualizowane: adres, godziny spotkań,
   aktualności, numery kont, odnośniki do mediów społecznościowych.

   Teksty stron są w assets/js/i18n.js — nie tutaj.

   Pola opisane jako { pl: '…', en: '…' } mają wersje językowe. Jeśli któregoś
   języka zabraknie, automatycznie pokaże się polski, więc nic się nie zepsuje.

   PO KAŻDEJ ZMIANIE uruchom:  node nastroje/generator.mjs
   ========================================================================== */

const DATA = {

  /* ------------------------------------------------------------- kontakt */
  contact: {
    name: 'Kościół Woda Życia',
    // Nazwa prawna — trafia do danych strukturalnych i na przelewy.
    legalName: 'Centrum Chrześcijańskie Woda Życia',
    street: 'ul. Władysława IV 147',
    zip: '75-342',
    city: 'Koszalin',
    country: 'PL',
    // Puste pole nigdzie się nie pokaże. Telefon jest na stronie Kontakt.
    phone: '+48 510 757 797',
    email: 'kontakt@wodazycia.org',
    /* Współrzędne budynku przy ul. Władysława IV 147 — sprawdzone
       w OpenStreetMap (obiekt „Centrum Chrześcijańskie «Woda Życia»”,
       osiedle Na Skarpie). Steruje nimi znacznik na mapie, przyciski
       nawigacji pod nią oraz dane strukturalne dla wyszukiwarek. */
    lat: 54.2121414,
    lon: 16.1788389,
    // Rok powstania kościoła (hasło „Mam w tym mieście wielki lud”, Dz. Ap. 18:10).
    founded: '1990',
    // Związek wyznaniowy, do którego należy kościół.
    denomination: 'Kościół Boży w Chrystusie',
    denominationUrl: 'https://kbwch.pl/'
  },

  /* --------------------------------------------------------- media i profile */
  social: {
    instagram: 'https://www.instagram.com/kosciolwodazycia',
    facebook:  'https://www.facebook.com/Kosciolwodazycia/',
    youtube:   'https://www.youtube.com/channel/UCJ4gEVg7YArQ03zsqceuExw',
    spotify:   'https://open.spotify.com/show/2ka9tDYvLbs5tNPAtCfCOW'
  },

  /* Kanał i playlisty na YouTube. Z identyfikatora kanału składa się adres
     transmisji na żywo na stronie głównej. */
  youtube: {
    channelId: 'UCJ4gEVg7YArQ03zsqceuExw',
    handle: '@wodazyciakoszalin',
    // Film powitalny na górze strony Jesteś tu pierwszy raz.
    introVideoId: 'lnMFxx7Uk2g',
    // Nagranie „Woda Życia start” na tej samej stronie, niżej.
    startVideoId: '1cT6endIJno',
    // „Pionierzy — o tych, którzy szli przed nami #2” na stronie Kościół.
    pioneersVideoId: 'hHQFfzf8J-0'
  },

  /* Podcasty. Pierwszy to bieżące nauczania, drugi archiwum kazań
     pastora Pawła Godawy (1967–2018) — nie przybywa w nim nowych odcinków. */
  podcasts: {
    current: {
      image: 'assets/img/kanal-youtube.webp',
      spotify: 'https://open.spotify.com/show/2ka9tDYvLbs5tNPAtCfCOW',
      apple:   'https://podcasts.apple.com/pl/podcast/ko%C5%9Bci%C3%B3%C5%82-woda-%C5%BCycia/id1501703365?l=pl'
    },
    archive: {
      image: 'assets/img/podcast-pawel-godawa.webp',
      spotify: 'https://open.spotify.com/show/5s4gsjMH7Gf8ulx3S6EEG0',
      apple:   'https://podcasts.apple.com/pl/podcast/pastor-pawe%C5%82-godawa/id1501153140?l=pl'
    }
  },

  /* ------------------------------------------------------- godziny spotkań
     Pole `day` (0 = niedziela … 6 = sobota) i `time` trafiają do danych
     strukturalnych, dzięki czemu asystent AI umie odpowiedzieć na pytanie
     „o której są spotkania w Wodzie Życia”. */
  times: [
    {
      day: 0,
      time: '11:00',
      name: {
        pl: 'Spotkanie niedzielne', cs: 'Nedělní shromáždění', sk: 'Nedeľné zhromaždenie',
        uk: 'Недільне зібрання', ru: 'Воскресное собрание', de: 'Sonntagsgottesdienst',
        en: 'Sunday service', es: 'Reunión dominical', sv: 'Söndagsmöte', hu: 'Vasárnapi istentisztelet'
      }
    }
  ],

  /* Godziny zapisu dzieci na zajęcia — strona Kids. */
  kidsCheckIn: '10:50 – 11:15',

  /* ---------------------------------------------------------- aktualności
     Najnowsze na górze. `image` puste = karta bez zdjęcia.
     `link` puste = karta bez odnośnika na zewnątrz. */
  news: [
    {
      date: '2026-08-12',
      image: 'assets/img/sluzba-wiezienna.webp',
      link: '',
      tag: {
        pl: 'Ogłoszenia', cs: 'Oznámení', sk: 'Oznamy', uk: 'Оголошення', ru: 'Объявления',
        de: 'Ankündigungen', en: 'Announcements', es: 'Anuncios', sv: 'Meddelanden', hu: 'Közlemények'
      },
      title: {
        pl: 'SŁUŻBA WIĘZIENNA', cs: 'VĚZEŇSKÁ SLUŽBA', sk: 'VÄZENSKÁ SLUŽBA',
        uk: 'ТЮРЕМНЕ СЛУЖІННЯ', ru: 'ТЮРЕМНОЕ СЛУЖЕНИЕ', de: 'GEFÄNGNISSEELSORGE',
        en: 'PRISON MINISTRY', es: 'MINISTERIO EN PRISIONES', sv: 'FÄNGELSETJÄNST', hu: 'BÖRTÖNMISSZIÓ'
      },
      text: {
        pl: 'Kościół Woda Życia prowadzi regularną służbę duszpasterską w jednostkach penitencjarnych na terenie okręgu koszalińskiego Służby Więziennej. Spotkania mają charakter duszpasterski oraz postpenitencjarny — wspierają duchowo osoby osadzone i towarzyszą im w powrocie do życia na wolności.',
        cs: 'Sbor Woda Życia vede pravidelnou duchovenskou službu ve věznicích koszalinského okrsku Vězeňské služby. Setkání mají pastorační a postpenitenciární povahu — duchovně podporují vězněné a doprovázejí je při návratu do života na svobodě.',
        sk: 'Zbor Woda Życia vedie pravidelnú duchovenskú službu vo väzniciach koszalinského okresu Väzenskej služby. Stretnutia majú pastoračný a postpenitenciárny charakter — duchovne podporujú väznených a sprevádzajú ich pri návrate do života na slobode.',
        uk: 'Церква Woda Życia веде регулярне капеланське служіння у виправних установах кошалінського округу Пенітенціарної служби. Зустрічі мають душпастирський і постпенітенціарний характер — духовно підтримують ув’язнених і супроводжують їх у поверненні до життя на волі.',
        ru: 'Церковь Woda Życia ведёт регулярное капелланское служение в исправительных учреждениях кошалинского округа Пенитенциарной службы. Встречи носят душепопечительский и постпенитенциарный характер — духовно поддерживают заключённых и сопровождают их при возвращении к жизни на свободе.',
        de: 'Die Gemeinde Woda Życia leistet regelmäßige Seelsorge in den Justizvollzugsanstalten des Bezirks Koszalin. Die Treffen sind seelsorgerlich und nachsorgend ausgerichtet — sie stärken Inhaftierte geistlich und begleiten sie bei der Rückkehr in das Leben in Freiheit.',
        en: 'Woda Życia Church runs a regular chaplaincy in the prisons of the Koszalin district. The meetings are pastoral and post-release in character — they support inmates spiritually and walk with them as they return to life outside.',
        es: 'La iglesia Woda Życia lleva a cabo una capellanía regular en los centros penitenciarios del distrito de Koszalin. Los encuentros tienen carácter pastoral y posterior a la excarcelación: apoyan espiritualmente a los internos y los acompañan en su regreso a la vida en libertad.',
        sv: 'Församlingen Woda Życia bedriver regelbunden själavård i fängelserna i Koszalindistriktet. Träffarna är själavårdande och eftervårdande — de stöttar intagna andligt och följer dem tillbaka till livet i frihet.',
        hu: 'A Woda Życia gyülekezet rendszeres börtönlelkészi szolgálatot végez a koszalini körzet büntetés-végrehajtási intézeteiben. A találkozók lelkigondozó és utógondozó jellegűek — lelkileg támogatják a fogvatartottakat, és elkísérik őket a szabad életbe való visszatérésben.'
      }
    },
    {
      date: '2026-08-12',
      image: 'assets/img/kurs-alpha-2026.webp',
      link: 'https://polska.alpha.org/',
      tag: {
        pl: 'Aktualności', cs: 'Aktuality', sk: 'Aktuality', uk: 'Новини', ru: 'Новости',
        de: 'Aktuelles', en: 'News', es: 'Novedades', sv: 'Nyheter', hu: 'Hírek'
      },
      title: {
        pl: 'KURS ALPHA 2026', cs: 'KURZ ALFA 2026', sk: 'KURZ ALFA 2026',
        uk: 'КУРС АЛЬФА 2026', ru: 'КУРС АЛЬФА 2026', de: 'ALPHA-KURS 2026',
        en: 'ALPHA COURSE 2026', es: 'CURSO ALPHA 2026', sv: 'ALPHA-KURSEN 2026', hu: 'ALFA KURZUS 2026'
      },
      text: {
        pl: 'Już 29 września 2026 r. rusza kolejna edycja Kursu Alpha w Wodzie Życia! Alpha to seria spotkań dla każdego, kto chce poznać podstawy wiary chrześcijańskiej, zadać ważne pytania o Boga, życie i wiarę oraz porozmawiać o nich w swobodnej atmosferze — bez presji i oceniania. Udział jest bezpłatny, nie trzeba się wcześniej rejestrować.',
        cs: 'Už 29. září 2026 začíná další běh Kurzu Alfa ve sboru Woda Życia! Alfa je série setkání pro každého, kdo chce poznat základy křesťanské víry, položit důležité otázky o Bohu, životě a víře a mluvit o nich v uvolněné atmosféře — bez nátlaku a hodnocení. Účast je zdarma a není potřeba se předem registrovat.',
        sk: 'Už 29. septembra 2026 začína ďalší beh Kurzu Alfa v zbore Woda Życia! Alfa je séria stretnutí pre každého, kto chce spoznať základy kresťanskej viery, položiť dôležité otázky o Bohu, živote a viere a hovoriť o nich v uvoľnenej atmosfére — bez nátlaku a hodnotenia. Účasť je bezplatná a netreba sa vopred registrovať.',
        uk: 'Уже 29 вересня 2026 року стартує черговий Курс Альфа у церкві Woda Życia! Альфа — це серія зустрічей для кожного, хто хоче дізнатися основи християнської віри, поставити важливі запитання про Бога, життя і віру та поговорити про них у невимушеній атмосфері — без тиску й осуду. Участь безкоштовна, попередня реєстрація не потрібна.',
        ru: 'Уже 29 сентября 2026 года стартует очередной Курс Альфа в церкви Woda Życia! Альфа — это серия встреч для каждого, кто хочет узнать основы христианской веры, задать важные вопросы о Боге, жизни и вере и обсудить их в непринуждённой атмосфере — без давления и осуждения. Участие бесплатное, предварительная регистрация не нужна.',
        de: 'Schon am 29. September 2026 startet der nächste Alpha-Kurs in der Gemeinde Woda Życia! Alpha ist eine Reihe von Abenden für alle, die die Grundlagen des christlichen Glaubens kennenlernen, wichtige Fragen zu Gott, Leben und Glauben stellen und in entspannter Atmosphäre darüber reden möchten — ohne Druck und ohne Bewertung. Die Teilnahme ist kostenlos, eine Anmeldung vorab ist nicht nötig.',
        en: 'The next Alpha Course at Woda Życia starts on 29 September 2026! Alpha is a series of evenings for anyone who wants to explore the basics of the Christian faith, ask the big questions about God, life and belief, and talk them through in a relaxed setting — no pressure, no judgement. It’s free and there’s no need to sign up in advance.',
        es: '¡El 29 de septiembre de 2026 comienza una nueva edición del Curso Alpha en Woda Życia! Alpha es una serie de encuentros para cualquiera que quiera conocer las bases de la fe cristiana, plantear las grandes preguntas sobre Dios, la vida y la fe, y conversar sobre ellas en un ambiente distendido, sin presión ni juicios. La participación es gratuita y no hace falta inscribirse antes.',
        sv: 'Den 29 september 2026 drar nästa omgång av Alpha-kursen i Woda Życia i gång! Alpha är en serie kvällar för alla som vill lära känna grunderna i den kristna tron, ställa de stora frågorna om Gud, livet och tron och samtala om dem i en avspänd miljö — utan press och utan att bli bedömd. Deltagandet är gratis och du behöver inte anmäla dig i förväg.',
        hu: '2026. szeptember 29-én indul a következő Alfa kurzus a Woda Życia gyülekezetben! Az Alfa alkalmak sorozata mindenkinek, aki szeretné megismerni a keresztény hit alapjait, feltenni a nagy kérdéseket Istenről, az életről és a hitről, és kötetlen légkörben beszélgetni róluk — nyomás és ítélkezés nélkül. A részvétel ingyenes, előzetes regisztráció nem szükséges.'
      }
    }
  ],

  /* ------------------------------------------------------------------ dary */
  giving: {
    recipient: 'Centrum Chrześcijańskie Woda Życia, ul. Władysława IV 147, 75-342 Koszalin',
    accounts: [
      { label: 'PLN',        number: '26 1500 1096 1214 7003 2747 0000' },
      { label: 'EUR',        number: '23 1500 1096 1210 9008 5305 0000' },
      { label: 'USD',        number: '52 1500 1096 1214 7003 2792 0000' },
      { label: 'SWIFT (BIC)', number: 'WBKPPLPP' }
    ],
    // Identyfikator sklepu w Dotpay (dotychczasowy formularz na stronie Wspieram).
    dotpayId: '468994',
    dotpayReturnUrl: 'https://wodazycia.org/',
    // Przycisk „Przekaż darowiznę” w PayPal.
    paypalButtonId: 'T3CSHNYHSYZQA',
    documents: [
      { file: 'assets/dokumenty/regulamin-platnosci.pdf', key: 'give.docs.terms' },
      { file: 'assets/dokumenty/statut-kbwch.pdf',        key: 'give.docs.statute' }
    ]
  },

  /* ------------------------------------------------------------------ Kids */
  kidsDocuments: [
    { file: 'assets/dokumenty/standardy-ochrony-dzieci.pdf', key: 'kids.docs.standards' },
    { file: 'assets/dokumenty/zasady-dla-rodzicow.pdf',      key: 'kids.docs.parents' }
  ],

  /* ---------------------------------------------------------------- ludzie */
  people: {
    pastor: {
      name: 'Mateusz Godawa',
      image: 'assets/img/mateusz-godawa.webp',
      instagram: 'https://www.instagram.com/mateuszgodawa/'
    },
    leaders: {
      image: 'assets/img/liderzy.webp'
    },
    founder: {
      name: 'Paweł Godawa',
      image: 'assets/img/pawel-godawa.webp',
      spotify: 'https://open.spotify.com/show/5s4gsjMH7Gf8ulx3S6EEG0'
    }
  },

  /* ------------------------------------------------------------------ mapa
     Podgląd na stronie Kontakt rysuje OpenStreetMap ze współrzędnych
     contact.lat / contact.lon — nie trzeba tu nic wpisywać. Przyciski pod
     mapą („Wyznacz trasę”, Mapy Google, Mapy Apple) też biorą te same
     współrzędne, więc przy przeprowadzce wystarczy poprawić je w jednym
     miejscu, wyżej w sekcji contact. */
};
