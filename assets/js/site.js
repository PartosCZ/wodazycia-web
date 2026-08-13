/* ============================================================================
   WODA ŻYCIA — LOGIKA STRONY
   ----------------------------------------------------------------------------
   Zwykłych zmian w treści tutaj się nie robi.
   Teksty poprawiaj w assets/js/i18n.js, dane w assets/js/content.js.

   Ten plik składa nagłówek i stopkę, wstawia teksty w miejsca oznaczone
   atrybutem data-i18n, obsługuje przełącznik języków, menu, akordeony,
   zakładki, filmy z YouTube, mapę i dane strukturalne dla wyszukiwarek.
   ========================================================================== */
(function () {
  'use strict';

  /* Kolejność wyznacza też kolejność w przełączniku języków w nagłówku.
     Musi zgadzać się z tablicą JEZYKI w nastroje/generator.mjs. */
  const LANGS = ['pl', 'cs', 'sk', 'uk', 'ru', 'de', 'en', 'es', 'sv', 'hu'];
  const DEFAULT_LANG = 'pl';
  const STORE_KEY = 'wodazycia-lang';

  /* Adres produkcyjny. Używany w danych strukturalnych (schema.org), które
     wymagają odnośników bezwzględnych. Przy zmianie domeny poprawić też
     w _sablony/*.html (canonical, og:, hreflang), w sitemap.xml i robots.txt. */
  const SITE_URL = 'https://wodazycia.org';

  /* Format daty przy aktualnościach. */
  const DATE_LOCALE = {
    pl: 'pl-PL', cs: 'cs-CZ', sk: 'sk-SK', uk: 'uk-UA', ru: 'ru-RU',
    de: 'de-DE', en: 'en-GB', es: 'es-ES', sv: 'sv-SE', hu: 'hu-HU'
  };

  /* ---------------------------------------------------------------- język
     Język wyznacza ADRES, nie ustawienie przeglądarki:
       wodazycia.org/kosciol      → polski (domyślny język bez przedrostka)
       wodazycia.org/uk/kosciol   → ukraiński
     Dzięki temu każda wersja ma własny adres, który wyszukiwarki i narzędzia
     AI widzą jako osobną stronę. Gdyby język brał się z przeglądarki,
     wszystkie wersje miałyby jeden adres i do wyszukiwarki trafiłaby jedna.
     Wybór z przełącznika zapisuje się tylko po to, żeby odwiedzający wrócił
     następnym razem do swojego języka — nigdy nie nadpisuje treści strony. */
  function langZeSciezki() {
    // Wystarczą dwa ostatnie odcinki adresu: /uk/kosciol, /uk/ oraz
    // (z dysku) …/wodazycia-web/uk/kosciol.html.
    const odcinki = location.pathname.split('/').filter(Boolean).slice(-2);
    for (const odcinek of odcinki) {
      const kod = odcinek.toLowerCase();
      if (LANGS.includes(kod) && kod !== DEFAULT_LANG) return kod;
    }
    return null;
  }

  function wykryjJezyk() {
    const ze = langZeSciezki();
    if (ze) return ze;
    // Stara postać odnośnika (?lang=uk) — respektujemy ją, a niżej
    // przekierowujemy odwiedzającego na własny adres języka.
    const zUrl = new URLSearchParams(location.search).get('lang');
    if (zUrl && LANGS.includes(zUrl)) return zUrl;
    return DEFAULT_LANG;
  }

  let LANG = wykryjJezyk();

  /** Zwraca tekst według klucza typu „home.visit.h2”. */
  function t(sciezka) {
    const idz = (obj) => sciezka.split('.').reduce((o, k) => (o == null ? undefined : o[k]), obj);
    const v = idz(I18N[LANG]);
    if (v !== undefined && v !== null && v !== '') return v;
    const zapas = idz(I18N[DEFAULT_LANG]);
    return zapas === undefined || zapas === null ? '' : zapas;
  }

  /** Zwraca wartość w bieżącym języku z content.js: { pl:'…', en:'…' } */
  function loc(pole) {
    if (pole == null) return '';
    if (typeof pole === 'string') return pole;
    return pole[LANG] || pole[DEFAULT_LANG] || '';
  }

  const esc = (s) => String(s == null ? '' : s)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;').replace(/'/g, '&#39;');

  const $  = (sel, root) => (root || document).querySelector(sel);
  const $$ = (sel, root) => Array.from((root || document).querySelectorAll(sel));

  /* ---------------------------------------------------------------- ikony
     Ikony jako SVG w kodzie — nie trzeba wczytywać zewnętrznego zestawu
     czcionek ikonowych (dotychczasowa strona ciągnęła cały Font Awesome). */
  const ICON = {
    chevron:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>',
    clock:    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9.5"/><path d="M12 6.8V12l3.4 2"/></svg>',
    pin:      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10.3c0 5.4-8 12-8 12s-8-6.6-8-12a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10.2" r="2.8"/></svg>',
    phone:    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21.5 16.9v2.8a1.9 1.9 0 0 1-2.1 1.9 18.8 18.8 0 0 1-8.2-2.9 18.5 18.5 0 0 1-5.7-5.7A18.8 18.8 0 0 1 2.6 4.7 1.9 1.9 0 0 1 4.5 2.6h2.8a1.9 1.9 0 0 1 1.9 1.6c.1 1 .4 1.9.7 2.8a1.9 1.9 0 0 1-.4 2l-1.2 1.2a15 15 0 0 0 5.7 5.7l1.2-1.2a1.9 1.9 0 0 1 2-.4c.9.3 1.8.6 2.8.7a1.9 1.9 0 0 1 1.5 2Z"/></svg>',
    mail:     '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2.5" y="4.5" width="19" height="15" rx="2.5"/><path d="m3 7 8.2 5.7a1.5 1.5 0 0 0 1.6 0L21 7"/></svg>',
    download: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v12"/><path d="m7.5 10.5 4.5 4.5 4.5-4.5"/><path d="M4 19.5h16"/></svg>',
    play:     '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5.2v13.6L19 12 8 5.2Z"/></svg>',
    youtube:  '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M23 12s0-3.9-.5-5.7c-.3-1-1.1-1.8-2.1-2.1C18.6 3.7 12 3.7 12 3.7s-6.6 0-8.4.5c-1 .3-1.8 1.1-2.1 2.1C1 8.1 1 12 1 12s0 3.9.5 5.7c.3 1 1.1 1.8 2.1 2.1 1.8.5 8.4.5 8.4.5s6.6 0 8.4-.5c1-.3 1.8-1.1 2.1-2.1.5-1.8.5-5.7.5-5.7zM9.9 15.4V8.6l5.6 3.4-5.6 3.4z"/></svg>',
    facebook: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.52 1.49-3.91 3.78-3.91 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.78-1.63 1.57v1.89h2.78l-.45 2.91h-2.33V22c4.78-.79 8.43-4.94 8.43-9.94z"/></svg>',
    instagram:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5.5"/><circle cx="12" cy="12" r="4.2"/><circle cx="17.6" cy="6.4" r="1.2" fill="currentColor" stroke="none"/></svg>',
    spotify:  '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm4.6 14.4a.8.8 0 0 1-1.1.3c-3-1.9-6.9-2.3-11.4-1.2a.8.8 0 1 1-.3-1.5c4.9-1.1 9.2-.7 12.6 1.4.4.2.5.7.2 1Zm1.2-2.9a1 1 0 0 1-1.3.3c-3.5-2.1-8.7-2.8-12.8-1.5a1 1 0 0 1-.6-1.9c4.7-1.4 10.5-.7 14.5 1.8.4.3.6.9.2 1.3Zm.1-3c-4.1-2.4-11-2.7-15-1.5a1.2 1.2 0 1 1-.7-2.3C6.8 5.3 14.4 5.7 19.1 8.5a1.2 1.2 0 0 1-1.2 2Z"/></svg>',
    apple:    '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M16.4 12.7c0-2.3 1.9-3.4 2-3.5-1.1-1.6-2.8-1.8-3.4-1.8-1.4-.2-2.8.9-3.6.9-.7 0-1.9-.8-3.1-.8-1.6 0-3.1.9-3.9 2.4-1.7 2.9-.4 7.2 1.2 9.5.8 1.1 1.7 2.4 3 2.4 1.2 0 1.6-.8 3.1-.8 1.4 0 1.8.8 3.1.8 1.3 0 2.1-1.2 2.9-2.3.9-1.3 1.3-2.6 1.3-2.7-.1 0-2.6-1-2.6-4.1ZM14.1 5.4c.7-.8 1.1-2 1-3.1-1 0-2.2.7-2.9 1.5-.6.7-1.2 1.9-1 3 1.1.1 2.2-.6 2.9-1.4Z"/></svg>'
  };

  /* ----------------------------------------------------------- adresy stron */
  const PAGES = [
    { key: 'home',    file: 'index.html' },
    { key: 'first',   file: 'jestes-tu-pierwszy-raz.html' },
    { key: 'church',  file: 'kosciol.html' },
    { key: 'kids',    file: 'kids.html' },
    { key: 'news',    file: 'aktualnosci.html' },
    { key: 'give',    file: 'wspieram.html' },
    { key: 'contact', file: 'kontakt.html' },
    { key: 'privacy', file: 'polityka-prywatnosci.html' }
  ];
  /* Pozycje w menu głównym — dokładnie te same, co na dotychczasowej stronie.
     Uwaga na długość: jeśli menu nie mieści się w nagłówku, zwija się samo
     do przycisku (patrz dopasujMenu). */
  const NAV_KEYS = ['first', 'church', 'kids', 'news', 'give', 'contact'];

  /* WSZYSTKIE odnośniki serwis buduje WZGLĘDNIE — nigdy od korzenia domeny.
     Dzięki temu jest obojętne, gdzie serwis leży: w korzeniu (wodazycia.org),
     w podkatalogu (partoscz.github.io/wodazycia-web/) czy wprost na dysku.
     Wcześniej adresy od korzenia były włączane na podstawie nazwy hosta i na
     GitHub Pages w podkatalogu prowadziły o poziom za wysoko — nie wczytywał
     się ani arkusz stylów, ani skrypty.

     Osobno decydujemy tylko o końcówce .html: przez http(s) serwer sam znajdzie
     plik pod adresem bez końcówki (tak działa GitHub Pages, hosting produkcyjny
     oraz nastroje/serwer.mjs), a adres jest ładniejszy. Po otwarciu pliku
     z dysku końcówka jest konieczna, bo nie ma serwera, który by ją dopisał.
     Tej samej reguły pilnuje assets/js/start.js. */
  const CZYSTE_ADRESY = location.protocol !== 'file:';

  /** Ile poziomów w górę do korzenia serwisu — z podkatalogu języka jeden. */
  const DO_KORZENIA = () => (LANG === DEFAULT_LANG ? '' : '../');

  /** Z nazwy pliku robi adres strony w danym języku, zawsze względny:
      'kosciol' / '../uk/kosciol' przez http, '../uk/kosciol.html' z dysku. */
  function adresStrony(plik, docelowyJezyk) {
    const cel = docelowyJezyk || LANG;
    const wyjscie = DO_KORZENIA();
    const wejscie = cel === DEFAULT_LANG ? '' : cel + '/';
    if (plik === 'index.html' && CZYSTE_ADRESY) {
      // Sam katalog wystarczy; pusty odnośnik byłby nieprawidłowy, stąd './'.
      return (wyjscie + wejscie) || './';
    }
    return wyjscie + wejscie + (CZYSTE_ADRESY ? plik.replace(/\.html$/, '') : plik);
  }

  /** Ścieżka do pliku w assets/ — działa też z podkatalogu języka.
      Gotowy adres (https://… albo /…) zostaje bez zmian. */
  function asset(sciezka) {
    if (!sciezka) return '';
    if (/^(https?:)?\/\//.test(sciezka) || sciezka.charAt(0) === '/') return sciezka;
    return DO_KORZENIA() + sciezka;
  }

  function href(key) {
    const p = PAGES.find((x) => x.key === key);
    return adresStrony(p ? p.file : 'index.html');
  }

  const PAGE = document.body.dataset.page || 'home';

  /* -------------------------------------------------------------- nagłówek */
  function zbudujNaglowek() {
    const host = $('#site-header');
    if (!host) return;

    const nav = NAV_KEYS.map((k) =>
      `<a href="${href(k)}"${k === PAGE ? ' aria-current="page"' : ''}>${esc(t('nav.' + k))}</a>`
    ).join('');

    const jezyki = LANGS.map((l) =>
      `<button type="button" data-set-lang="${l}" role="option" aria-selected="${l === LANG}">
         <i>${l.toUpperCase()}</i><span>${esc(I18N[l].langName)}</span>
       </button>`
    ).join('');

    host.innerHTML = `
      <header class="header" id="hdr">
        <div class="wrap header-inner">
          <a class="brand" href="${href('home')}" aria-label="${esc(t('footer.name'))}">
            <img src="${asset('assets/img/logo.png')}" alt="${esc(t('footer.name'))}" width="120" height="42">
          </a>
          <nav class="nav" id="mainnav" aria-label="${esc(t('ui.menu'))}">${nav}</nav>
          <div class="header-actions">
            <div class="lang" id="langpick">
              <button class="lang-btn" type="button" aria-haspopup="listbox" aria-expanded="false"
                      aria-label="${esc(t('ui.language'))}">${LANG.toUpperCase()} ${ICON.chevron}</button>
              <div class="lang-menu" role="listbox" aria-label="${esc(t('ui.language'))}">${jezyki}</div>
            </div>
            <button class="burger" type="button" aria-label="${esc(t('ui.menu'))}" aria-expanded="false"
                    aria-controls="mainnav"><span></span></button>
          </div>
        </div>
      </header>`;

    // Czy menu mieści się obok logo? Długość nazw różni się między językami,
    // dlatego to się mierzy, a nie ustawia sztywno w CSS.
    dopasujMenu();
    // Przed wczytaniem kroju pisma tekst jest szerszy niż docelowo — gdybyśmy
    // mierzyli tylko raz, menu zwijałoby się bez potrzeby na szerokich ekranach.
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(dopasujMenu).catch(() => {});
    if (!zbudujNaglowek._resize) {
      zbudujNaglowek._resize = true;
      let tid;
      window.addEventListener('resize', () => { clearTimeout(tid); tid = setTimeout(dopasujMenu, 120); });
      window.addEventListener('load', dopasujMenu);
    }

    // cień nagłówka po przewinięciu
    const hdr = $('#hdr');
    const naScroll = () => hdr.classList.toggle('scrolled', window.scrollY > 8);
    naScroll();
    window.addEventListener('scroll', naScroll, { passive: true });

    // menu mobilne
    const burger = $('.burger', host);
    burger.addEventListener('click', () => {
      const otwarte = document.body.classList.toggle('menu-open');
      burger.setAttribute('aria-expanded', String(otwarte));
    });
    $$('#mainnav a', host).forEach((a) => a.addEventListener('click', () => {
      document.body.classList.remove('menu-open');
      burger.setAttribute('aria-expanded', 'false');
    }));

    // przełącznik języków
    const pick = $('#langpick', host);
    const btn = $('.lang-btn', pick);
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const otwarte = pick.classList.toggle('open');
      btn.setAttribute('aria-expanded', String(otwarte));
    });
    document.addEventListener('click', () => {
      pick.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') { pick.classList.remove('open'); btn.setAttribute('aria-expanded', 'false'); }
    });
    $$('[data-set-lang]', pick).forEach((b) =>
      b.addEventListener('click', () => ustawJezyk(b.dataset.setLang))
    );
  }

  /* Decyduje, czy menu główne mieści się obok logo, czy ma schować się pod
     przycisk. Potrzebne, bo nazwy w niektórych językach są znacznie dłuższe
     niż po polsku — sztywna granica w CSS dla części z nich by nie pasowała. */
  function dopasujMenu() {
    const hdr = $('#hdr');
    const inner = $('.header-inner', hdr || document);
    if (!hdr || !inner) return;

    if (window.innerWidth < 900) {          // na telefonie zawsze przycisk
      document.body.classList.add('nav-compact');
      document.body.classList.remove('nav-tight');
      hdr.classList.remove('measuring');
      return;
    }
    hdr.classList.add('measuring');         // na czas pomiaru chowamy menu
    document.body.classList.remove('nav-compact', 'nav-tight', 'menu-open');

    const kolejnaKlatka = window.requestAnimationFrame || ((fn) => setTimeout(fn, 16));
    kolejnaKlatka(() => {
      const nav = $('#mainnav', hdr);
      const miesciSie = () => inner.scrollWidth <= inner.clientWidth + 1 &&
                              (!nav || nav.scrollWidth <= nav.clientWidth + 1);
      document.body.classList.toggle('nav-compact', !miesciSie());
      hdr.classList.remove('measuring');
      const b = $('.burger', hdr);
      if (b) b.setAttribute('aria-expanded', 'false');
    });
  }

  /* --------------------------------------------------------------- stopka */
  function zbudujStopke() {
    const host = $('#site-footer');
    if (!host) return;

    const s = DATA.social;

    /* Trzy kolumny odnośników — dokładnie jak na dotychczasowej stronie:
       najpierw profile, potem pierwsza połowa menu, na końcu druga. */
    const profile = [
      ['Instagram', s.instagram], ['Facebook', s.facebook],
      ['YouTube', s.youtube], ['Spotify', s.spotify]
    ].filter(([, url]) => url)
      .map(([nazwa, url]) => `<li><a href="${esc(url)}" target="_blank" rel="noopener">${esc(nazwa)}</a></li>`)
      .join('');

    const strony = (klucze) => klucze
      .map((k) => `<li><a href="${href(k)}">${esc(t('nav.' + k))}</a></li>`)
      .join('');

    host.innerHTML = `
      <footer class="footer">
        <div class="footer-main">
          <div class="wrap">
            <div class="footer-grid">
              <div class="footer-logo">
                <a href="${href('home')}" aria-label="${esc(t('footer.name'))}">
                  <img src="${asset('assets/img/logo-footer.png')}" alt="${esc(t('footer.name'))}"
                       width="740" height="483" loading="lazy">
                </a>
              </div>
              <div class="footer-box">
                <p class="footer-name">${esc(t('footer.name'))}</p>
                <nav class="footer-cols" aria-label="${esc(t('ui.menu'))}">
                  <ul>${profile}</ul>
                  <ul>${strony(['home', 'first', 'church', 'kids'])}</ul>
                  <ul>${strony(['news', 'give', 'contact', 'privacy'])}</ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
        <div class="footer-bottom">
          <div class="wrap">
            <span>© ${new Date().getFullYear()} ${esc(t('footer.name'))}. ${esc(t('footer.rights'))}</span>
            <span>${esc(DATA.contact.street)}, ${esc(DATA.contact.zip)} ${esc(DATA.contact.city)}</span>
          </div>
        </div>
      </footer>`;
  }

  function ikonySocial() {
    const s = DATA.social;
    const poz = [
      ['instagram', s.instagram, 'Instagram'],
      ['facebook',  s.facebook,  'Facebook'],
      ['youtube',   s.youtube,   'YouTube'],
      ['spotify',   s.spotify,   'Spotify']
    ];
    return poz
      .filter(([, url]) => url)
      .map(([ikona, url, nazwa]) =>
        `<a href="${esc(url)}" target="_blank" rel="noopener" aria-label="${esc(nazwa)}">${ICON[ikona]}</a>`)
      .join('');
  }

  /* ------------------------------------------------------- wstawianie tekstu */
  function wstawTeksty(root) {
    // Zwykły tekst.
    $$('[data-i18n]', root || document).forEach((el) => {
      const v = t(el.dataset.i18n);
      if (v) el.textContent = v;
    });

    // Tekst, w którym celowo zostawiamy znaczniki (np. odnośnik w środku).
    $$('[data-i18n-html]', root || document).forEach((el) => {
      const v = t(el.dataset.i18nHtml);
      if (v) el.innerHTML = v;
    });

    /* Nagłówek złożony z części, w którym środkowe słowo ma inny styl —
       na dotychczasowej stronie „HEJ! CZEŚĆ! WITAJ!” z konturowym środkiem.
       Klucz wskazuje na obiekt { a, b, c }; klasa dla części „b” podana
       jest w data-outline. */
    $$('[data-i18n-split]', root || document).forEach((el) => {
      const czesci = t(el.dataset.i18nSplit);
      if (!czesci || typeof czesci !== 'object') return;
      const klasa = el.dataset.outline || 'outline';
      const kolejnosc = ['a', 'b', 'c'];
      let html = '';
      kolejnosc.forEach((k) => {
        const v = czesci[k];
        if (!v) return;
        // Przed znakiem interpunkcyjnym nie wstawiamy spacji.
        if (html && !/^[?!.,:;]/.test(v)) html += ' ';
        html += k === 'b' ? `<span class="${esc(klasa)}">${esc(v)}</span>` : esc(v);
      });
      el.innerHTML = html;
    });

    // Odnośniki do innych stron serwisu.
    $$('[data-page-link]', root || document).forEach((a) => {
      a.setAttribute('href', href(a.dataset.pageLink));
    });

    // Ścieżki do plików w assets/ (obrazki, PDF-y) — działają też z /uk/ itd.
    $$('[data-asset]', root || document).forEach((el) => {
      const cel = asset(el.dataset.asset);
      if (el.tagName === 'IMG') el.setAttribute('src', cel);
      else el.setAttribute('href', cel);
    });

    // Tło sekcji ustawiane z pliku w assets/.
    $$('[data-bg]', root || document).forEach((el) => {
      el.style.backgroundImage = 'url(' + asset(el.dataset.bg) + ')';
    });

    // Opis dla czytników ekranu tam, gdzie „zdjęcie” jest tłem elementu.
    $$('[data-i18n-aria]', root || document).forEach((el) => {
      const v = t(el.dataset.i18nAria);
      if (v) el.setAttribute('aria-label', v);
    });

    // Podpowiedź w pustym polu formularza (formularz płatności).
    $$('[data-i18n-placeholder]', root || document).forEach((el) => {
      const v = t(el.dataset.i18nPlaceholder);
      if (v) el.setAttribute('placeholder', v);
    });

    // Opis alternatywny obrazka.
    $$('[data-i18n-alt]', root || document).forEach((el) => {
      const v = t(el.dataset.i18nAlt);
      if (v) el.setAttribute('alt', v);
    });

    // Godziny zapisu dzieci — jedna wartość z content.js.
    const zapis = $('#kids-checkin', root || document);
    if (zapis) zapis.textContent = DATA.kidsCheckIn;

    // Tytuł strony i opis dla wyszukiwarek.
    const klucz = document.body.dataset.meta;
    if (klucz) {
      const tytul = t('meta.' + klucz + '.title');
      const opis = t('meta.' + klucz + '.desc');
      if (tytul) document.title = tytul;
      const m = $('meta[name="description"]');
      if (m && opis) m.setAttribute('content', opis);
    }
    document.documentElement.setAttribute('lang', LANG);
  }

  /* ------------------------------------------------------- godziny spotkań */
  function wstawGodziny() {
    const host = $('#times');
    if (!host) return;
    const c = DATA.contact;
    const czas = (DATA.times[0] && DATA.times[0].time) || '';
    const dzien = DATA.times[0] ? loc(DATA.times[0].name) : '';
    // Nazwa dnia w języku strony — bierzemy ją z przeglądarki, żeby nie
    // trzymać siedmiu nazw dni razy dziesięć języków w i18n.js.
    const nazwaDnia = dniTygodnia(DATA.times[0] ? DATA.times[0].day : 0);

    host.innerHTML = `
      <div class="iconbox">${ICON.clock}<span>${esc(nazwaDnia)} ${esc(czas)}</span></div>
      <div class="iconbox">${ICON.pin}<span>${esc(c.street)}, ${esc(c.city)}</span></div>`;
    host.setAttribute('aria-label', dzien);
  }

  function dniTygodnia(numer) {
    // 4 stycznia 1970 była niedziela — dodajemy numer dnia i pytamy
    // przeglądarkę o nazwę w bieżącym języku.
    const d = new Date(Date.UTC(1970, 0, 4 + numer));
    const nazwa = d.toLocaleDateString(DATE_LOCALE[LANG] || 'pl-PL', { weekday: 'long', timeZone: 'UTC' });
    return nazwa.charAt(0).toLocaleUpperCase(DATE_LOCALE[LANG] || 'pl-PL') + nazwa.slice(1);
  }

  /* ------------------------------------------------------------ aktualności */
  function wstawAktualnosci() {
    const host = $('#news-grid');
    if (!host) return;

    const ile = parseInt(host.dataset.limit || '0', 10);
    const wpisy = ile > 0 ? DATA.news.slice(0, ile) : DATA.news;
    /* Poziom nagłówka karty zależy od strony: na stronie głównej wpisy siedzą
       pod nagłówkiem sekcji „Aktualności” (h2), więc są h3. Na stronie
       Aktualności są bezpośrednio pod h1, więc muszą być h2 — inaczej
       czytniki ekranu zgłaszają przeskok poziomów. */
    const hx = host.dataset.heading === 'h2' ? 'h2' : 'h3';

    if (!wpisy.length) {
      host.innerHTML = `<p class="muted">${esc(t('news.empty'))}</p>`;
      return;
    }

    host.innerHTML = wpisy.map((n) => {
      const data = new Date(n.date + 'T00:00:00');
      const czytelna = isNaN(data) ? n.date
        : data.toLocaleDateString(DATE_LOCALE[LANG] || 'pl-PL',
            { year: 'numeric', month: 'long', day: 'numeric' });
      const obraz = n.image
        ? `<div class="news-img" style="background-image:url(${esc(asset(n.image))})" role="img" aria-label="${esc(loc(n.title))}"></div>`
        : '';
      const tresc = `
        ${obraz}
        <div class="news-body">
          <div class="news-meta">
            <span class="tag">${esc(loc(n.tag))}</span>
            <time datetime="${esc(n.date)}">${esc(czytelna)}</time>
          </div>
          <${hx}>${esc(loc(n.title))}</${hx}>
          <p>${esc(loc(n.text))}</p>
        </div>`;
      return n.link
        ? `<a class="news-card" href="${esc(n.link)}" target="_blank" rel="noopener">${tresc}</a>`
        : `<article class="news-card">${tresc}</article>`;
    }).join('');
  }

  /* --------------------------------------------------------------- kontakt */
  function wstawKontakt() {
    const host = $('#contact-info');
    if (!host) return;
    const c = DATA.contact;

    const wiersze = [
      `<div class="iconbox contrast">${ICON.pin}<p>${esc(c.street)}<br>${esc(c.zip)} ${esc(c.city)}</p></div>`
    ];
    if (c.phone) {
      wiersze.push(`<div class="iconbox contrast">${ICON.phone}<a href="tel:${esc(c.phone.replace(/\s+/g, ''))}">${esc(c.phone)}</a></div>`);
    }
    if (c.email) {
      wiersze.push(`<div class="iconbox contrast">${ICON.mail}<a href="mailto:${esc(c.email)}">${esc(c.email)}</a></div>`);
    }
    host.innerHTML = wiersze.join('');

    const soc = $('#contact-socials');
    if (soc) soc.innerHTML = ikonySocial();
  }

  /* --------------------------------------------------------- konta bankowe */
  function wstawKonta() {
    const host = $('#accounts');
    if (!host) return;
    host.innerHTML = DATA.giving.accounts.map((a) =>
      `<div class="account"><h3>${esc(a.label)}</h3><p>${esc(a.number)}</p></div>`
    ).join('');

    const odbiorca = $('#giving-recipient');
    if (odbiorca) odbiorca.textContent = DATA.giving.recipient;
  }

  /* --------------------------------------------------------- ikona w wierszu
     Wiersze z ikoną, które są wpisane wprost w szablonie (a nie składane
     z content.js), zaznaczają swoją ikonę atrybutem data-icon — rysunki
     leżą w jednym miejscu, w ICON wyżej. */
  function wstawIkony(root) {
    $$('[data-icon]', root || document).forEach((el) => {
      const rys = ICON[el.dataset.icon];
      if (rys && !$('svg', el)) el.insertAdjacentHTML('afterbegin', rys);
    });
  }

  /* ------------------------------------------------------ odnośniki do PDF */
  function wstawDokumenty() {
    $$('[data-docs]').forEach((host) => {
      const zrodlo = host.dataset.docs === 'kids' ? DATA.kidsDocuments : DATA.giving.documents;
      host.innerHTML = zrodlo.map((d) =>
        `<div class="iconbox">${ICON.download}<a href="${esc(asset(d.file))}" target="_blank" rel="noopener">${esc(t(d.key))}</a></div>`
      ).join('');
    });
  }

  /* ----------------------------------------------------- formularze płatności
     Pola ukryte (identyfikator sklepu, adres powrotny, numer przycisku)
     dopisujemy tutaj, żeby wszystkie dane o płatnościach leżały w jednym
     miejscu — w content.js → giving. */
  function wstawFormularzePlatnosci() {
    const g = DATA.giving;

    const dotpay = $('#dotpay-form');
    if (dotpay) {
      dodajUkryte(dotpay, {
        id: g.dotpayId,
        url: g.dotpayReturnUrl,
        buttontext: t('nav.home'),
        type: '0'
      });
    }

    const paypal = $('#paypal-form');
    if (paypal) dodajUkryte(paypal, { hosted_button_id: g.paypalButtonId });
  }

  function dodajUkryte(form, pola) {
    Object.entries(pola).forEach(([nazwa, wartosc]) => {
      if (!wartosc) return;
      const input = document.createElement('input');
      input.type = 'hidden';
      input.name = nazwa;
      input.value = wartosc;
      form.insertBefore(input, form.firstChild);
    });
  }

  /* ------------------------------------------ odnośniki przy pastorze Pawle */
  function wstawZalozyciela() {
    const host = $('#founder-links');
    if (!host) return;
    const f = DATA.people.founder;
    const poz = [];
    if (f.spotify) {
      poz.push(`<div class="iconbox">${ICON.spotify}<a href="${esc(f.spotify)}" target="_blank" rel="noopener">${esc(t('church.founder.archive'))}</a></div>`);
    }
    if (DATA.youtube.pioneersVideoId) {
      const url = 'https://www.youtube.com/watch?v=' + encodeURIComponent(DATA.youtube.pioneersVideoId);
      poz.push(`<div class="iconbox">${ICON.youtube}<a href="${esc(url)}" target="_blank" rel="noopener">${esc(t('church.founder.video'))}</a></div>`);
    }
    host.innerHTML = poz.join('');
  }

  /* ---------------------------------------------------- serwisy z podcastami */
  function wstawPodcasty() {
    $$('[data-podcast]').forEach((host) => {
      const p = DATA.podcasts[host.dataset.podcast];
      if (!p) return;
      const poz = [];
      if (p.spotify) poz.push(`<a href="${esc(p.spotify)}" target="_blank" rel="noopener" aria-label="Spotify">${ICON.spotify}</a>`);
      if (p.apple)   poz.push(`<a href="${esc(p.apple)}" target="_blank" rel="noopener" aria-label="Apple Podcasts">${ICON.apple}</a>`);
      host.innerHTML = poz.join('');
    });

    // Zdjęcia przy kartach podcastów.
    $$('[data-podcast-img]').forEach((el) => {
      const p = DATA.podcasts[el.dataset.podcastImg];
      if (p && p.image) el.style.backgroundImage = 'url(' + asset(p.image) + ')';
    });
  }

  /* ------------------------------------------------------------------ wideo
     Odtwarzacz YouTube wstawiamy dopiero po kliknięciu. Dzięki temu strona
     ładuje się szybciej, a YouTube do tego momentu nie wie o odwiedzającym.
     Używamy domeny youtube-nocookie.com. */
  function wstawWideo() {
    $$('[data-video]').forEach((el) => {
      const id = el.dataset.video === 'live'
        ? null
        : DATA.youtube[el.dataset.video] || el.dataset.video;

      const src = id
        ? `https://www.youtube-nocookie.com/embed/${encodeURIComponent(id)}?autoplay=1&rel=0`
        : `https://www.youtube-nocookie.com/embed/live_stream?channel=${encodeURIComponent(DATA.youtube.channelId)}&autoplay=1`;

      const podglad = el.dataset.poster
        ? asset(el.dataset.poster)
        : (id ? `https://i.ytimg.com/vi/${encodeURIComponent(id)}/maxresdefault.jpg` : asset('assets/img/yt-placeholder.webp'));

      el.style.backgroundImage = 'url(' + podglad + ')';

      /* YouTube nie ma maxresdefault do każdego filmu — zamiast błędu podsuwa
         wtedy szarą płytkę 120×90. Sprawdzamy więc rozmiar i w razie czego
         bierzemy hqdefault, które jest zawsze. */
      if (!el.dataset.poster && id) {
        const probny = new Image();
        probny.onload = () => {
          if (probny.naturalWidth <= 120) {
            el.style.backgroundImage =
              `url(https://i.ytimg.com/vi/${encodeURIComponent(id)}/hqdefault.jpg)`;
          }
        };
        probny.onerror = () => {
          el.style.backgroundImage = 'url(' + asset('assets/img/yt-placeholder.webp') + ')';
        };
        probny.src = podglad;
      }
      el.setAttribute('type', 'button');
      el.setAttribute('aria-label', id ? t('ui.playVideo') : t('ui.liveStream'));
      el.innerHTML = `<span class="video-play">${ICON.play}</span>`;

      el.addEventListener('click', function wstaw() {
        el.innerHTML = `<iframe src="${esc(src)}" title="${esc(el.getAttribute('aria-label'))}"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen loading="lazy"></iframe>`;
        el.style.cursor = 'default';
        el.removeEventListener('click', wstaw);
      }, { once: true });
    });
  }

  /* -------------------------------------------------------------------- mapa
     Podgląd z OpenStreetMap — nie wymaga zgody na pliki cookie i nie oddaje
     nikomu danych odwiedzającego. Wczytuje się dopiero wtedy, gdy ktoś
     przewinie do niego stronę.

     Pod mapą są przyciski, które przekazują współrzędne wprost do nawigacji.
     „Wyznacz trasę” otwiera Mapy Google od razu w trybie prowadzenia: na
     telefonie uruchamia aplikację, na komputerze stronę z trasą. Drugi
     przycisk pokazuje samo miejsce, trzeci robi to samo w Mapach Apple,
     bo iPhone domyślnie prowadzi właśnie nimi. */
  function wstawMape() {
    const host = $('#map');
    if (!host) return;
    const c = DATA.contact;
    const wsp = c.lat + ',' + c.lon;
    const d = 0.004;
    const bbox = [c.lon - d, c.lat - d / 2, c.lon + d, c.lat + d / 2].join('%2C');

    /* Kościół nie stoi przy samej ulicy — od Władysława IV prowadzi do niego
       droga wewnętrzna. Gdy nawigacji poda się gołe współrzędne, potrafi
       doprowadzić pod płot od niewłaściwej strony. Mapom Google podajemy
       więc nazwę i adres: Google zna ten obiekt (był w mapie na dotychczasowej
       stronie) i sam kieruje do właściwego wjazdu. Mapy Apple takiej wiedzy
       nie mają, więc tam zostają współrzędne. */
    const adres = encodeURIComponent(
      [c.name, c.street, c.zip + ' ' + c.city].join(', '));

    const przyciski = `
      <div class="btn-row center map-actions">
        <a class="btn btn-primary" target="_blank" rel="noopener"
           href="https://www.google.com/maps/dir/?api=1&amp;destination=${adres}">${esc(t('contact.map.directions'))}</a>
        <!-- Nazwy w brzmieniu międzynarodowym: „Mapy Google” to polska nazwa
             produktu, ale na stronie węgierskiej czy niemieckiej wyglądałaby
             jak niedokończone tłumaczenie. „Google Maps” rozpoznaje każdy. -->
        <a class="btn btn-light" target="_blank" rel="noopener"
           href="https://www.google.com/maps/search/?api=1&amp;query=${adres}">Google Maps</a>
        <a class="btn btn-light" target="_blank" rel="noopener"
           href="https://maps.apple.com/?daddr=${wsp}&amp;dirflg=d">Apple Maps</a>
      </div>`;

    /* Przyciski z trasą wstawiamy od razu — to zwykłe odnośniki, nic stąd nie
       wycieka na zewnątrz, a dzięki temu trafiają do gotowego HTML-a.
       Wyszukiwarki i narzędzia AI widzą więc odpowiedź na pytanie „jak
       dojechać do Wody Życia”, a odwiedzający z wyłączonym JavaScriptem nadal
       dostaje trasę. Dociągana z opóźnieniem jest tylko sama ramka z mapą —
       to ona łączy się z obcym serwerem. */
    host.innerHTML = `<div class="map-frame" id="map-frame"></div>${przyciski}`;
    const ramka = $('#map-frame', host);

    const wstaw = () => {
      ramka.innerHTML = `<iframe title="${esc(t('contact.map.h2'))}" loading="lazy"
        src="https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&amp;layer=mapnik&amp;marker=${c.lat}%2C${c.lon}"></iframe>`;
    };

    if (!('IntersectionObserver' in window)) { wstaw(); return; }
    const obs = new IntersectionObserver((wpisy) => {
      if (wpisy.some((w) => w.isIntersecting)) { wstaw(); obs.disconnect(); }
    }, { rootMargin: '200px' });
    obs.observe(ramka);
  }

  /* --------------------------------------------------------------- akordeon */
  function podepnijAkordeony() {
    $$('.accordion').forEach((akordeon) => {
      const przyciski = $$('.accordion-btn', akordeon);
      przyciski.forEach((btn) => {
        const panel = btn.nextElementSibling;
        if (!panel) return;
        btn.addEventListener('click', () => {
          const otwarty = btn.getAttribute('aria-expanded') === 'true';
          // Jeden otwarty naraz — tak działał akordeon na dotychczasowej stronie.
          przyciski.forEach((inny) => {
            inny.setAttribute('aria-expanded', 'false');
            if (inny.nextElementSibling) inny.nextElementSibling.hidden = true;
          });
          if (!otwarty) {
            btn.setAttribute('aria-expanded', 'true');
            panel.hidden = false;
          }
        });
      });
    });
  }

  /* --------------------------------------------------------------- zakładki */
  function podepnijZakladki() {
    $$('.tabs').forEach((tabs) => {
      const przyciski = $$('.tabs-nav button', tabs);
      const panele = $$('.tab-panel', tabs);
      przyciski.forEach((btn, i) => {
        btn.addEventListener('click', () => pokaz(i));
        btn.addEventListener('keydown', (e) => {
          if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
          e.preventDefault();
          const krok = e.key === 'ArrowRight' ? 1 : -1;
          const nowy = (i + krok + przyciski.length) % przyciski.length;
          pokaz(nowy);
          przyciski[nowy].focus();
        });
      });
      function pokaz(i) {
        przyciski.forEach((b, j) => b.setAttribute('aria-selected', String(i === j)));
        panele.forEach((p, j) => { p.hidden = i !== j; });
      }
      if (przyciski.length) pokaz(0);
    });
  }

  /* -------------------------------------------------------------- formularz
     Domyślnie otwiera program pocztowy odwiedzającego z gotową wiadomością.
     Chcesz dostawać zgłoszenia wprost na e-mail? Patrz README, rozdział
     o formularzu — wystarczy dopisać action i data-mode="endpoint". */
  function podepnijFormularz() {
    const form = $('#signup-form');
    if (!form) return;
    if (form.dataset.mode === 'endpoint') return;   // wysyłka do zewnętrznej usługi

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const dane = new FormData(form);
      const linie = [];
      [['name', 'first.start.name'], ['email', 'first.start.email'], ['phone', 'first.start.phone']]
        .forEach(([pole, klucz]) => {
          const v = (dane.get(pole) || '').toString().trim();
          if (v) linie.push(t(klucz) + ': ' + v);
        });
      const temat = t('first.start.subject');
      const adres = 'mailto:' + DATA.contact.email +
        '?subject=' + encodeURIComponent(temat) +
        '&body=' + encodeURIComponent(linie.join('\n'));
      location.href = adres;
    });
  }

  /* ------------------------------------------------------ dane strukturalne
     Dzięki nim Google i asystenci AI wiedzą, kim jesteśmy, gdzie jesteśmy
     i o której są spotkania. Składają się z content.js i i18n.js, więc
     aktualizują się same. */
  function wstawSchema() {
    // Częste pytania jako osobne dane strukturalne — dzięki nim Google
    // i asystenci AI odpowiadają wprost na „czy można przyjść z dziećmi”
    // albo „jak wygląda spotkanie w Wodzie Życia”.
    if (PAGE === 'first') { wstawSchemaFaq(); return; }
    // Wizytówka kościoła: na stronie głównej i na stronie Kontakt — to tam
    // trafiają wyszukiwania w rodzaju „kościół ewangeliczny Koszalin”.
    if (PAGE !== 'home' && PAGE !== 'contact') return;
    const c = DATA.contact;
    const s = DATA.social;

    const godziny = DATA.times.map((x) => ({
      '@type': 'OpeningHoursSpecification',
      name: loc(x.name),
      dayOfWeek: 'https://schema.org/' +
        ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][x.day],
      opens: x.time
    }));

    const profile = [s.instagram, s.facebook, s.youtube, s.spotify].filter(Boolean);
    if (DATA.podcasts.current && DATA.podcasts.current.apple) profile.push(DATA.podcasts.current.apple);

    const dane = {
      '@context': 'https://schema.org',
      '@type': 'Church',
      '@id': SITE_URL + '/#church',
      name: t('footer.name'),
      legalName: c.legalName,
      alternateName: 'Woda Życia',
      url: SITE_URL + '/',
      description: t('meta.home.desc'),
      disambiguatingDescription: t('identity'),
      foundingDate: c.founded,
      email: c.email,
      logo: SITE_URL + '/assets/img/logo.png',
      image: SITE_URL + '/assets/img/hero.webp',
      address: {
        '@type': 'PostalAddress',
        streetAddress: c.street,
        postalCode: c.zip,
        addressLocality: c.city,
        addressCountry: c.country
      },
      geo: { '@type': 'GeoCoordinates', latitude: c.lat, longitude: c.lon },
      areaServed: { '@type': 'City', name: c.city },
      openingHoursSpecification: godziny,
      sameAs: profile,
      employee: {
        '@type': 'Person',
        name: DATA.people.pastor.name,
        jobTitle: t('church.pastor.h3')
      },
      memberOf: { '@type': 'Organization', name: c.denomination, url: c.denominationUrl }
    };
    if (c.phone) dane.telephone = c.phone;

    wstawJsonLd(dane);
  }

  /* Pytania i odpowiedzi czytamy wprost z gotowej strony, więc nie mogą
     rozejść się z tym, co widzi odwiedzający. */
  function wstawSchemaFaq() {
    const pytania = $$('#pytania .accordion-item').map((item) => {
      const pytanie = $('.accordion-btn span:last-child', item);
      const odpowiedz = $('.accordion-panel', item);
      if (!pytanie || !odpowiedz) return null;
      const tekst = $$('p', odpowiedz).map((p) => p.textContent.trim()).filter(Boolean).join(' ');
      if (!pytanie.textContent.trim() || !tekst) return null;
      return {
        '@type': 'Question',
        name: pytanie.textContent.trim(),
        acceptedAnswer: { '@type': 'Answer', text: tekst }
      };
    }).filter(Boolean);

    if (!pytania.length) return;
    wstawJsonLd({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: LANG,
      about: { '@type': 'Church', name: t('footer.name'), '@id': SITE_URL + '/#church' },
      mainEntity: pytania
    });
  }

  function wstawJsonLd(dane) {
    const el = document.createElement('script');
    el.type = 'application/ld+json';
    el.id = 'schema-org';
    el.textContent = JSON.stringify(dane, null, 2);
    document.head.appendChild(el);
  }

  /* --------------------------------------------------------- przełączanie języka */
  function ustawJezyk(nowy) {
    if (!LANGS.includes(nowy) || nowy === LANG) return;
    try { localStorage.setItem(STORE_KEY, nowy); } catch (e) { /* prywatne okno */ }
    const strona = PAGES.find((p) => p.key === PAGE) || PAGES[0];
    location.href = adresStrony(strona.file, nowy);
  }

  /* Stary odnośnik z ?lang=uk przekierowujemy na własny adres języka,
     żeby linki rozesłane wcześniej nadal działały. */
  function przekierujStaryLink() {
    const zUrl = new URLSearchParams(location.search).get('lang');
    if (!zUrl || !LANGS.includes(zUrl)) return;
    if (langZeSciezki() === zUrl) return;
    const strona = PAGES.find((p) => p.key === PAGE) || PAGES[0];
    location.replace(adresStrony(strona.file, zUrl));
  }

  /* ------------------------------------------------------ pojawianie się sekcji */
  function podepnijPojawianie() {
    const elementy = $$('[data-reveal]');
    if (!elementy.length) return;
    if (!('IntersectionObserver' in window) ||
        window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      elementy.forEach((el) => el.classList.add('shown'));
      return;
    }
    const obs = new IntersectionObserver((wpisy) => {
      wpisy.forEach((w) => {
        if (w.isIntersecting) { w.target.classList.add('shown'); obs.unobserve(w.target); }
      });
    }, { rootMargin: '0px 0px -8% 0px' });
    elementy.forEach((el) => obs.observe(el));
  }

  /* ------------------------------------------------------------------ start */
  function start() {
    document.documentElement.classList.add('js');
    przekierujStaryLink();

    zbudujNaglowek();
    zbudujStopke();
    wstawTeksty();
    wstawGodziny();
    wstawAktualnosci();
    wstawKontakt();
    wstawKonta();
    wstawDokumenty();
    wstawIkony();
    wstawFormularzePlatnosci();
    wstawZalozyciela();
    wstawPodcasty();
    wstawWideo();
    wstawMape();
    podepnijAkordeony();
    podepnijZakladki();
    podepnijFormularz();
    podepnijPojawianie();
    wstawSchema();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start);
  else start();
})();
