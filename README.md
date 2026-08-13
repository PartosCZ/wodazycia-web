# Kościół Woda Życia — strona internetowa

Statyczna strona w **dziesięciu językach** (polski, czeski, słowacki, ukraiński,
rosyjski, niemiecki, angielski, hiszpański, szwedzki, węgierski).
Bez WordPressa, bez bazy danych, bez płatnych usług — wystarczy wgrać pliki na hosting.

Wygląd jest wiernym odwzorowaniem dotychczasowej strony na WordPressie
(motyw Impreza): te same kolory, ten sam krój pisma, te same proporcje kolumn,
zdjęcia wypływające do krawędzi okna, wodoznaki, animacje wejścia sekcji
i te same adresy stron. Zmieniło się to, co pod spodem.

**Czego nie odtworzono 1 : 1:** efektu paralaksy na sekcjach z planem Koszalina
(strona główna i Kościół). W motywie tło przesuwało się wolniej niż treść przy
przewijaniu. Zdjęcie jest na miejscu i wygląda tak samo, ale stoi nieruchomo:
paralaksa wymaga przeliczania pozycji przy każdym przewinięciu, przez co strona
szarpie na słabszych telefonach, a osobom wrażliwym na ruch potrafi zaszkodzić.
Gdybyście chcieli ją z powrotem, wystarczy dopisać `background-attachment: fixed`
do `.section-map` w `assets/css/style.css`.

Teksty poprawia się w jednym miejscu (`assets/js/i18n.js`), a gotowe strony
powstają z nich jednym poleceniem — patrz [rozdział 3](#3-generowanie-stron).
Dzięki temu tekst siedzi wprost w HTML-u, więc stronę znajdzie nie tylko Google,
ale też Bing, DuckDuckGo i wyszukiwarki sztucznej inteligencji.

---

## 1. Szybki start

**Sprawdzić u siebie na komputerze:**

```
node nastroje/serwer.mjs
```

i otworzyć `http://localhost:8080`. Tak wygląda strona dokładnie tak, jak
zobaczy ją odwiedzający — razem z adresami bez końcówki `.html`.
Zatrzymanie: `Ctrl+C`.

**Sprawdzić, jak wygląda na telefonie,** bez wyjmowania telefonu: w przeglądarce
naciśnij `F12`, potem `Ctrl+Shift+M` i wybierz szerokość z listy. Warto obejrzeć
**320 px** (najwęższe telefony, np. iPhone SE) — przy tej szerokości najszybciej
widać, czy któryś napis nie wystaje. Sprawdzone zostały wszystkie strony
w szerokościach 320, 390 i 430 px.

Można też po prostu otworzyć `index.html` w przeglądarce, ale wtedy adresy
mają końcówkę `.html` i mapa dojazdu może się nie wczytać.

**Opublikować za darmo na GitHub Pages:**

1. Załóż konto na [github.com](https://github.com) i nowe repozytorium, np. `wodazycia-web`.
2. Wgraj do niego **zawartość tego katalogu** (czyli `index.html` i katalog `assets/`,
   a nie sam katalog).
3. W repozytorium wejdź w **Settings → Pages**.
4. W *Source* wybierz `Deploy from a branch`, gałąź `main`, katalog `/ (root)`. Zapisz.
5. Za minutę strona będzie pod adresem `https://twoja-nazwa.github.io/wodazycia-web/`.

Tak samo dobrze działają **Netlify** i **Cloudflare Pages** — oba za darmo;
wystarczy przeciągnąć katalog do przeglądarki na ich stronie.

### Domena wodazycia.org

**Kolejność kroków jest ważna** — przy zamianie strona na kilka godzin przestaje
być dostępna, zanim ułożą się certyfikaty.

1. **W panelu domeny → DNS.** Dla domeny głównej `wodazycia.org` załóż
   **cztery rekordy `A`** na adresy GitHub Pages: `185.199.108.153`,
   `185.199.109.153`, `185.199.110.153`, `185.199.111.153`.
   Dla `www` dodaj `CNAME` na `twoja-nazwa.github.io`.
2. Jeśli używasz Cloudflare, **pomarańczową chmurkę na razie wyłącz**
   (*DNS only*, szara). GitHub musi sam zweryfikować domenę i wystawić
   certyfikat; przez włączone proxy to nie przejdzie.
3. **Cloudflare → SSL/TLS → Overview:** tryb musi być **Full**, nie *Flexible*.
   Przy *Flexible* strona zapętla się w nieskończonym przekierowaniu — to
   najczęstszy błąd tego zestawienia.
4. **GitHub → Settings → Pages → Custom domain:** wpisz `wodazycia.org` i zapisz.
   W repozytorium powstanie plik `CNAME`. Poczekaj, aż przy polu pojawi się
   zielony znaczek (zwykle do godziny).
5. Dopiero wtedy zaznacz **Enforce HTTPS** i ewentualnie włącz proxy z powrotem.

> **Adres jest wpisany na stałe w plikach.** `sitemap.xml`, `robots.txt` oraz
> znaczniki `canonical`, `og:` i `hreflang` we wszystkich `*.html` wskazują na
> `https://wodazycia.org`. Gdyby domena kiedyś się zmieniła, trzeba przepisać
> je wszystkie — szukaj ciągu `wodazycia.org`. Zmień też `SITE_URL`
> w `assets/js/site.js` i `DOMENA` w `nastroje/generator.mjs`.

---

## 2. Gdzie co poprawić

| Chcę zmienić | Plik |
|---|---|
| Adres, telefon, e-mail, współrzędne | `assets/js/content.js` → `contact` |
| Odnośniki do Instagrama / Facebooka / YouTube / Spotify | `assets/js/content.js` → `social` |
| Godzinę spotkania niedzielnego | `assets/js/content.js` → `times` |
| Godziny zapisu dzieci | `assets/js/content.js` → `kidsCheckIn` |
| Aktualności i ogłoszenia | `assets/js/content.js` → `news` |
| Numery kont, Dotpay, PayPal | `assets/js/content.js` → `giving` |
| Filmy na YouTube (transmisja, „Woda Życia start”) | `assets/js/content.js` → `youtube` |
| **Dowolny tekst na stronie** | `assets/js/i18n.js` |
| Kolory, rozmiary, odstępy | `assets/css/style.css` → sekcja `:root` na górze |
| Układ strony, kolejność sekcji | `_sablony/` → odpowiedni plik `*.html` |

Plik `assets/js/site.js` zawiera logikę (przełączanie języków, menu, akordeony,
zakładki, filmy, mapa). Jego zmieniać nie trzeba.

> **Po każdej poprawce uruchom `node nastroje/generator.mjs`.** Strony
> w katalogu głównym (`index.html`, katalogi `cs/`, `uk/` …) powstają wtedy od
> nowa — ręcznie się w nie nie wchodzi, przy kolejnym uruchomieniu zmiany by
> przepadły. Szczegóły w rozdziale 3.

### Adresy bez końcówki `.html`

Strona na zewnątrz pokazuje się jako `wodazycia.org/kosciol`, a nie
`wodazycia.org/kosciol.html`. Pliki na dysku nie były przemianowane — nadal
jest to `kosciol.html`. GitHub Pages (a także Netlify i Cloudflare Pages) potrafi
znaleźć plik i bez końcówki, więc wystarczyło przepisać odnośniki.

Stare linki z `.html` (np. w starszym wpisie na Facebooku) działają dalej —
otworzy się dokładnie ta sama strona, a końcówka po cichu zniknie z paska
adresu. Wyszukiwarkom znacznik `canonical` mówi, że obowiązuje ta krótsza
postać, więc strona nie liczy się dwa razy.

**Przy sprawdzaniu z dysku** menu zostawia końcówki — bez serwera odnośniki bez
końcówki nie prowadziłyby nigdzie. Reguła w `site.js` (`CZYSTE_ADRESY`) reaguje
tylko na `wodazycia.org` i `*.github.io`.

**Dodajesz nową stronę?** Załóż ją w `_sablony/` i dopisz do listy `STRONY`
w `nastroje/generator.mjs`. Wygeneruje się wtedy sama we wszystkich językach
i od razu trafi do `sitemap.xml` — tego pliku nie edytuje się ręcznie.

### Porządkowanie adresu z mediów społecznościowych

Kto przychodzi z Facebooka albo Instagrama, przynosi ze sobą kod śledzący
(`?fbclid=IwAR3xK9mQ2vL8pN…`, `?igsh=…`). W pasku adresu zamiast
`wodazycia.org/aktualnosci` wisi wtedy długi bełkot.

Zajmuje się tym `assets/js/start.js`, wczytywany w nagłówku każdej strony jako
pierwszy. Kasuje te kody, zanim strona się wyrysuje. Usuwa znaczniki Facebooka,
Instagrama, Google, Microsoftu, TikToka, X, LinkedIna, Yandexa, Mailchimpa,
YouTube oraz wszystkie parametry zaczynające się od `utm_`.

Kasowane jest tylko to, co wymieniono na liście `smieci`; cokolwiek nieznanego
zostaje. Gdyby któryś serwis wprowadził nowy kod, wystarczy dopisać go do tej
listy — plik jest jeden dla całej strony.

### Dodanie nowej aktualności

W `assets/js/content.js` znajdź `news: [` i na górę wstaw nowy blok:

```js
{
  date: '2026-09-15',
  image: 'assets/img/moje-zdjecie.webp',   // albo '' bez zdjęcia
  link:  'https://www.facebook.com/Kosciolwodazycia/',   // albo '' bez odnośnika
  tag:   { pl: 'Ogłoszenia', cs: '…', sk: '…', uk: '…', ru: '…', de: '…', en: '…', es: '…', sv: '…', hu: '…' },
  title: { pl: 'Nagłówek',   cs: '…', sk: '…', uk: '…', ru: '…', de: '…', en: '…', es: '…', sv: '…', hu: '…' },
  text:  { pl: 'Treść…',     cs: '…', sk: '…', uk: '…', ru: '…', de: '…', en: '…', es: '…', sv: '…', hu: '…' }
},
```

Jeśli któryś język pominiesz, automatycznie pokaże się polski.
Uwaga na przecinki między blokami — są obowiązkowe.

---

## 3. Generowanie stron

### Po co to jest

Strona rysuje całą treść JavaScriptem. Google sobie z tym radzi, ale **Bing
(a razem z nim Edge i Copilot) ani wyszukiwarki sztucznej inteligencji**
(ChatGPT, Claude, Perplexity) JavaScriptu nie uruchamiają — zobaczyłyby pustą
stronę. Dlatego strony rysuje się raz z góry i tekst zapisuje wprost do HTML-a.
Odwiedzający dostaje dokładnie to samo co wcześniej, a roboty dodatkowo widzą treść.

### Jak się tego używa

```
node nastroje/generator.mjs
```

Potrzebny jest tylko **Node.js** ([nodejs.org](https://nodejs.org), wystarczy
wersja 18 lub nowsza) i **Chrome** albo **Edge** — ten już w komputerze jest.
Nic się nie instaluje, żadnego `node_modules`. Generowanie 81 stron trwa
niecałą minutę.

Jeśli Chrome jest w nietypowym miejscu, ścieżkę podaje się zmienną `CHROME_PATH`.

### Co jest źródłem, a co wynikiem

| Katalog | Co w nim jest | Poprawiać ręcznie? |
|---|---|---|
| `_sablony/` | szkielety stron — układ, kolejność sekcji | **tak** |
| `assets/js/i18n.js` | wszystkie teksty | **tak** |
| `assets/js/content.js` | kontakt, godziny, aktualności, dary | **tak** |
| `assets/css/style.css` | wygląd | **tak** |
| `_zrodla/img/` | oryginały zdjęć w pełnej rozdzielczości | **tak** (podmiana zdjęć) |
| `index.html`, `kosciol.html`, … | gotowa wersja polska | nie — wygeneruje się |
| `cs/`, `sk/`, `uk/`, … | gotowe wersje językowe | nie — wygeneruje się |
| `assets/js/i18n/*.js` | tłumaczenia pocięte na języki | nie — wygeneruje się |
| `sitemap.xml`, `llms.txt` | dla wyszukiwarek i narzędzi AI | nie — wygeneruje się |

### Zwykły przebieg poprawki

1. Popraw tekst w `assets/js/i18n.js` (albo dane w `content.js`).
2. Uruchom `node nastroje/generator.mjs`.
3. Uruchom `node nastroje/serwer.mjs` i obejrzyj stronę.
4. Wgraj zmiany na hosting — pojawią się w ciągu minuty.

### Co generator robi poza samymi stronami

- **Dane strukturalne** (schema.org) wprost w HTML-u: kim jest kościół, gdzie
  się mieści, współrzędne, odnośniki do profili i **godziny spotkań w postaci
  maszynowej**. Dzięki nim asystent AI umie od razu odpowiedzieć na pytanie
  „o której są spotkania w Wodzie Życia”. Na stronie *Jesteś tu pierwszy raz?*
  dodawane są jeszcze **częste pytania** (`FAQPage`) — czytane wprost ze strony,
  więc nigdy nie rozejdą się z tym, co widać.
- **`sitemap.xml`** — wszystkich 70 adresów razem z wersjami językowymi.
- **`llms.txt`** — skrót dla narzędzi AI: adres, godziny spotkań, kontakt
  i spis stron w jednym miejscu.
- **`assets/js/i18n/<kod>.js`** — tłumaczenia pocięte na języki, żeby strona
  wczytywała tylko swój (35 kB zamiast 188 kB).

Niczego z tego nie edytuje się ręcznie; powstaje z `i18n.js` i `content.js`.

**Data ostatniej zmiany w sitemapie** brana jest z historii w Gicie — z ostatniego
commita, który dotknął szablonu strony albo plików `content.js`, `i18n.js`
i `site.js` (z nich strona powstaje). Jeśli uruchomisz generator, nic nie
zmieniając, daty zostaną w miejscu. To celowe: gdyby za każdym razem
przeskakiwały na dziś, Google uznałby ten wskaźnik za niewiarygodny i przestał
go brać pod uwagę w całym serwisie. Rozpoczęta zmiana, której jeszcze nie ma
w commicie, liczy się jako dzisiejsza. Bez Gita (pobrany ZIP) używana jest data
pliku na dysku.

### Kiedy generowanie się nie uda

Generator sam po sobie sprawdza, czy strona rzeczywiście powstała, czy jest we
właściwym języku i czy tekst się pojawił. Gdy coś nie gra, wypisuje to i **pliku
nie zapisuje** — na stronie zostaje więc ostatnia działająca wersja.
Najczęstsza przyczyna to literówka w `i18n.js` albo `content.js`, przez którą
plik się nie wczytuje; błąd pokaże konsola przeglądarki (F12).

---

## 4. Zdjęcia

### Skąd się biorą

Oryginały w pełnej rozdzielczości leżą w `_zrodla/img/`. To one są źródłem —
w `assets/img/` znajdują się tylko gotowe, pomniejszone pliki `.webp`, których
używa strona.

```
node nastroje/obrazy.mjs             podgląd — pokaże, co by zrobił
node nastroje/obrazy.mjs --zapisz    naprawdę utworzy pliki .webp
```

Skrypt zmniejsza zdjęcia do rozsądnych wymiarów i zapisuje w formacie WebP.
Przy pierwszym przejściu **7,75 MB zamieniło się w 2,9 MB** — na telefonie
w słabszym zasięgu to różnica kilkunastu sekund. Przy okazji powstaje
`assets/img/og-image.jpg`, czyli podgląd pokazywany przy udostępnianiu linku
w mediach społecznościowych (musi zostać w JPEG, bo część serwisów nie
wyświetla podglądu z WebP).

### Wymiana zdjęcia

1. Wrzuć nowy plik do `_zrodla/img/` **pod tą samą nazwą** co dotychczasowy.
2. `node nastroje/obrazy.mjs --zapisz`
3. `node nastroje/generator.mjs`

Nic w kodzie nie trzeba poprawiać. Chcesz dodać zupełnie nowe zdjęcie?
Wrzuć je do `_zrodla/img/`, uruchom oba polecenia i użyj nazwy z rozszerzeniem
`.webp` w `content.js` albo w szablonie.

### Gdzie które zdjęcie się pokazuje

| Plik | Gdzie |
|---|---|
| `hero.webp`, `hero-2.webp`, `koszalin.webp` | trzy ujęcia przenikające się na ekranie startowym |
| `sekcja-mapa.webp` | tło sekcji „Wpadnij do nas” |
| `yt-placeholder.webp` | kadr zastępczy pod transmisją na żywo |
| `kanal-youtube.webp`, `podcast-pawel-godawa.webp` | karty podcastów na stronie głównej |
| `naglowek-kosciol / -kids / -aktualnosci / -wspieram / -kontakt .webp` | zdjęcia w nagłówkach podstron |
| `kosciol-2.webp`, `kosciol-4.webp` | zdjęcia w kolumnach na stronie Kościół |
| `mateusz-godawa.webp`, `liderzy.webp`, `pawel-godawa.webp` | portrety na stronie Kościół |
| `pierwszy-raz-1 / -3 / -4 .webp`, `tlo-wierzymy.webp` | strona Jesteś tu pierwszy raz? |
| `kids-1.webp`, `kids-5.webp` | strona Kids |
| `tlo-wspieram.webp` | strona Wspieram |
| `konwencja-2025.webp`, `grupy-domowe.webp` | zdjęcia przy aktualnościach |
| `og-image.jpg` | podgląd przy udostępnianiu linku |

> **Zgoda na publikację.** Przy zdjęciach, na których widać rozpoznawalne
> osoby, warto mieć ich zgodę — zwłaszcza przy dzieciach. Na stronę często
> lepiej nadają się ujęcia od tyłu, ogólne plany sali albo detale, na których
> konkretne twarze nie są na pierwszym planie.

---

## 5. Logo i ikony

| Plik | Do czego służy |
|---|---|
| `assets/img/logo.png` | znak „W” w nagłówku strony, przezroczyste tło |
| `assets/img/logo-footer.png` | znak w stopce na ciemnym tle |
| `assets/img/logo-white.png` | biała wersja — wodoznak na czarnych panelach |
| `assets/img/favicon.png` | ikona w zakładce przeglądarki, 192 × 192 |
| `assets/img/apple-touch-icon.png` | ikona po dodaniu strony na ekran telefonu, 180 × 180 |
| `assets/img/icon.png` | zapas w większym rozmiarze, 256 × 256 |
| `favicon.ico` | zapas **w katalogu głównym**, 48 × 48 — patrz uwaga niżej |

### Ikony wytwarza polecenie

```
node nastroje/ikony.mjs
```

Z pliku `assets/img/logo.png` powstają naraz wszystkie rozmiary — znak sam się
w obrazku odnajduje i wyśrodkowuje, więc niczego nie trzeba przycinać ręcznie.

**Po co jeszcze `favicon.ico`,** skoro w nagłówku stron jest odnośnik do
`favicon.png`: część narzędzi pyta o adres `/favicon.ico` na sztywno, niezależnie
od tego, co jest w nagłówku — czytniki, podglądy odnośników przy udostępnianiu,
starsze przeglądarki. Bez pliku dostają błąd 404. Dlatego leży w katalogu
głównym, a nie w `assets/img/`.

> Rozmiar favikony musi zostać **wielokrotnością 48 px** (48, 96, 144, 192 …),
> inaczej Google nie pokaże jej w wynikach wyszukiwania. Gdybyś go zmieniał,
> popraw też `sizes="…"` w `_sablony/*.html`.

Masz logo w wektorze (`.svg`, `.ai`, `.eps`)? Warto go użyć — zostanie ostre na
każdym ekranie. Zapisz jako `assets/img/logo.svg` i w `assets/js/site.js` zmień
`logo.png` na `logo.svg` (wiersz z nagłówkiem).

---

## 6. Krój pisma

Strona używa **Proxima Nova** — tego samego kroju, który był na WordPressie.
Pliki `.woff` przeniesiono z dotychczasowego serwera (kościół hostował je sam
pod `/wp-content/uploads/fonts/`) do `assets/fonts/`.

> **Warto sprawdzić licencję.** Proxima Nova to krój komercyjny. Skoro pliki
> leżały już na Waszym serwerze, licencja webowa najpewniej została kiedyś
> wykupiona — ale dobrze mieć to potwierdzone na papierze. Gdyby licencji nie
> było, wystarczy w `assets/css/style.css` zmienić jedną wartość `--font`
> w sekcji `:root`; reszta arkusza sama się dostosuje. Darmowe kroje najbliższe
> Proxima Nova to **Mulish** i **Nunito Sans** (oba na licencji SIL OFL).

Proxima Nova **nie zawiera cyrylicy**. Bez tego po ukraińsku i rosyjsku
przeglądarka spadłaby na przypadkowe pismo systemowe i te dwie wersje
wyglądałyby inaczej niż pozostałych osiem. Dołożony jest więc **Mulish**
(SIL OFL) — ale wyłącznie w zakresie znaków cyrylicy (`unicode-range`),
więc łacinka nadal jest składana Proximą.

---

## 7. Filmy z YouTube

Na stronie głównej jest transmisja na żywo z kanału, a na stronie
*Jesteś tu pierwszy raz?* dwa nagrania. Odtwarzacz wstawia się **dopiero po
kliknięciu** — dzięki temu strona ładuje się szybciej, a YouTube do tego czasu
nic o odwiedzającym nie wie. Używana jest domena `youtube-nocookie.com`.

Które filmy się odtwarzają, ustala `assets/js/content.js` → `youtube`:

| Pole | Teraz | Do czego |
|---|---|---|
| `channelId` | `UCJ4gEVg7YArQ03zsqceuExw` | z niego składa się adres transmisji na żywo |
| `introVideoId` | `lnMFxx7Uk2g` | film powitalny na górze strony *Jesteś tu pierwszy raz?* |
| `startVideoId` | `1cT6endIJno` | nagranie „Woda Życia start” na tej samej stronie |
| `pioneersVideoId` | `hHQFfzf8J-0` | „Pionierzy #2” przy pastorze Pawle Godawie |

---

## 8. Mapa dojazdu

Na stronie Kontakt jest podgląd z **OpenStreetMap**, a pod nim trzy przyciski:

| Przycisk | Co robi |
|---|---|
| **Wyznacz trasę** | otwiera Mapy Google od razu w trybie prowadzenia — na telefonie uruchamia aplikację i zaczyna nawigację, na komputerze pokazuje trasę |
| **Mapy Google** | pokazuje samo miejsce w Mapach Google |
| **Mapy Apple** | to samo w Mapach Apple, bo iPhone domyślnie prowadzi właśnie nimi |

Dotychczasowa strona miała osadzoną mapę Google. OpenStreetMap wybrano, bo nie
używa plików cookie ani reklam, więc **strona nie potrzebuje baneru zgody**,
a mapa i tak wczytuje się dopiero wtedy, gdy ktoś do niej przewinie stronę.
Przyciski prowadzą do Map Google i Apple — ale dopiero po kliknięciu, świadomie.

### Dlaczego Mapom Google podajemy adres, a nie współrzędne

Kościół **nie stoi przy samej ulicy**. Od Władysława IV prowadzi do niego droga
wewnętrzna — publiczna jezdnia jest w linii prostej ponad 80 metrów dalej.
Nawigacja, która dostanie gołe współrzędne, celuje w środek działki i potrafi
doprowadzić pod ogrodzenie od niewłaściwej strony albo w odnogę prowadzącą
do sąsiedniej firmy.

Dlatego przyciski do Map Google dostają **nazwę i adres**, a nie liczby.
Google zna ten obiekt (ta sama wizytówka była w mapie na dotychczasowej stronie)
i kieruje do wjazdu, który sam ma zapisany — sprawdzone: odnośnik trafia dokładnie
w wizytówkę „Kościół Woda Życia, Władysława IV 147”. Mapy Apple takiej wizytówki
nie mają, więc tam zostają współrzędne.

### Opis ostatniego odcinka

Pod przyciskami jest jedno zdanie, którego żadna nawigacja nie powie:

> Wjazd z ul. Władysława IV znajduje się przy budynku firm Pimax i Marek Mazur.
> Po kilkudziesięciu metrach droga się rozwidla — trzymaj się lewej strony;
> prawa odnoga prowadzi do firmy Chemia.

Zdanie jest przetłumaczone na wszystkie dziesięć języków — klucz
`contact.map.approach` w `assets/js/i18n.js`. Gdyby zmieniły się nazwy firm
przy wjeździe albo układ drogi, poprawia się je właśnie tam.

Znacznik na mapie bierze współrzędne z `assets/js/content.js` →
`contact.lat` i `contact.lon`. Przy przeprowadzce poprawia się je
w jednym miejscu.

> **Współrzędne były błędne i zostały poprawione.** Przy przenoszeniu strony
> wzięliśmy je z adresu osadzonej mapy Google, ale ten adres zawierał środek
> kadru, a nie adres kościoła — znacznik wypadał prawie **kilometr na zachód**,
> w pustym terenie przy ul. Krańcowej. Obecne wartości (54.2121414,
> 16.1788389) sprawdzono w OpenStreetMap: wskazują budynek podpisany
> „Centrum Chrześcijańskie «Woda Życia»” przy ul. Władysława IV 147.
> Te same współrzędne trafiają do danych strukturalnych, więc błąd
> dotyczył też tego, co o kościele wie Google.

---

## 9. Formularz zapisu

Formularz „Woda Życia start” domyślnie otwiera program pocztowy odwiedzającego
z gotową wiadomością. Działa wszędzie i nie wymaga żadnej usługi ani serwera.

Chcesz zgłoszenia dostawać wprost na skrzynkę, bez otwierania klienta poczty?

1. Załóż darmowe konto na [formspree.io](https://formspree.io) i utwórz formularz.
2. W `_sablony/jestes-tu-pierwszy-raz.html` zmień wiersz
   `<form id="signup-form" class="mt-2">` na:

```html
<form id="signup-form" class="mt-2" data-mode="endpoint"
      action="https://formspree.io/f/TWOJ_KOD" method="POST">
```

3. Dopisz `https://formspree.io` do `form-action` w regułach
   Content-Security-Policy w nagłówku tej strony — inaczej przeglądarka
   zablokuje wysyłkę.
4. Uruchom generator.

---

## 10. Płatności

Strona Wspieram ma trzy drogi: Dotpay, PayPal i zwykły przelew. Wszystkie dane
są w `assets/js/content.js` → `giving`, a pola ukryte formularzy dopisuje
`site.js`, żeby nie trzeba było ich szukać po szablonach.

> **Dotpay warto sprawdzić.** Formularz kieruje na `https://ssl.dotpay.pl/`
> z identyfikatorem sklepu `468994` — dokładnie tak, jak było na WordPressie.
> Na dotychczasowej stronie **przycisk Dotpay był zepsuty**: obrazek
> `ssl.dotpay.pl/img/dotpay_b2_160x83.gif` zwraca dziś błąd 404, więc w tym
> miejscu widniał tylko pusty kadr. Tutaj zastąpił go zwykły przycisk
> w kolorach strony z napisem „Zapłać online przez dotpay”. Sama płatność
> nie była testowana — **przed publikacją zróbcie jeden przelew na próbę**.
> Dotpay należy dziś do PayU; jeśli konto już nie działa, najprościej
> zastąpić ten formularz przyciskiem Przelewy24 albo PayU.

> **Dwa pliki PDF były martwe.** „Regulamin płatności” i „Statut Kościoła Bożego
> w Chrystusie” prowadziły na `doublem.dkonto.pl`, który zwraca 404. Znalazły
> się w kopii na Waszym serwerze i leżą teraz lokalnie w `assets/dokumenty/`,
> więc już nie znikną.

---

## 11. Języki

Strona jest w **dziesięciu językach**. Przełącznik jest po prawej w nagłówku.
**Każdy język ma własny adres** — polski działa w katalogu głównym, pozostałe
we własnym katalogu:

| Kod | Język | Adres |
|---|---|---|
| `pl` | polski (domyślny) | `wodazycia.org/` |
| `cs` | czeski | `wodazycia.org/cs/` |
| `sk` | słowacki | `wodazycia.org/sk/` |
| `uk` | ukraiński | `wodazycia.org/uk/` |
| `ru` | rosyjski | `wodazycia.org/ru/` |
| `de` | niemiecki | `wodazycia.org/de/` |
| `en` | angielski | `wodazycia.org/en/` |
| `es` | hiszpański | `wodazycia.org/es/` |
| `sv` | szwedzki | `wodazycia.org/sv/` |
| `hu` | węgierski | `wodazycia.org/hu/` |

Tak samo działa to na każdej podstronie — `wodazycia.org/uk/kosciol`.

**Dlaczego własne adresy.** Gdyby wszystkie języki miały jeden adres i różniły
się tylko parametrem `?lang=`, rozpoznałby je wyłącznie Google. Dla pozostałych
wyszukiwarek istniałaby jedna polska strona. Teraz każda wersja ma swój adres,
swoją treść w HTML-u i znaczniki `hreflang`, które je łączą — więc da się
znaleźć także wersję ukraińską czy niemiecką.

Stare odnośniki z `?lang=uk` działają dalej: strona sama przekierowuje na
`wodazycia.org/uk/`.

Język zawsze wynika z adresu, nie z ustawień przeglądarki — odwiedzający
i wyszukiwarka widzą pod jednym adresem zawsze to samo. Wybór z przełącznika
zapisuje się w przeglądarce tylko po to, żeby przy następnej wizycie wrócić
do swojego języka.

### Poprawianie tekstów

Wszystkie teksty są w `assets/js/i18n.js` — jeden blok na język, we wszystkich
ta sama struktura i ta sama kolejność kluczy (po 224 klucze). Chcesz coś
zmienić? Znajdź klucz (np. `home.visit.h2`) i popraw wartość w każdym języku,
którego używasz.

Brakuje klucza w którymś języku? Automatycznie pokaże się wersja polska —
strona nigdy się nie zepsuje, będzie tylko w tym miejscu po polsku.

### Dodanie kolejnego języka

1. W `assets/js/i18n.js` skopiuj cały blok `en: { … }`, przemianuj go
   (np. `it`) i przetłumacz wartości.
2. W `assets/js/site.js` dopisz kod do tablicy `LANGS` i do `DATE_LOCALE`.
3. W `assets/js/content.js` dopisz nowy język do pól `times`, `news`.
4. W `nastroje/generator.mjs` dopisz kod do tablicy `JEZYKI` i do `LOCALE`.
5. Uruchom `node nastroje/generator.mjs` — powstanie katalog `it/`
   ze wszystkimi stronami, a język sam trafi do `sitemap.xml`.

Zanim opublikujesz, przejrzyj w nowym języku wszystkie strony. Pilnuj przede
wszystkim długości pozycji w menu: gdy się nie mieszczą, nagłówek sam przełącza
się na przycisk z rozwijanym menu.

---

## 12. Struktura plików

Chodzi o nazwy plików na dysku. W serwisie strony pokazują się bez końcówki —
`kosciol.html` jest pod adresem `wodazycia.org/kosciol`.

Gwiazdką oznaczono pliki, które **wytwarza generator** — ręcznie się w nie nie
wchodzi (patrz [rozdział 3](#3-generowanie-stron)).

```
_sablony/                        ŹRÓDŁO — szkielety stron, tu poprawia się układ
  index.html                       Strona główna
  jestes-tu-pierwszy-raz.html      Dla nowych + FAQ + w co wierzymy
  kosciol.html                     Kim jesteśmy, wartości, ludzie
  kids.html                        Zajęcia dla dzieci
  aktualnosci.html                 Aktualności
  wspieram.html                    Dary i płatności
  kontakt.html                     Kontakt i mapa
  polityka-prywatnosci.html        Zasady przetwarzania danych
  404.html                         Strona błędu

_zrodla/img/                     ŹRÓDŁO — oryginały zdjęć w pełnej rozdzielczości

nastroje/generator.mjs           Generator stron — uruchamiany ręcznie
nastroje/obrazy.mjs              Zmniejszanie zdjęć do WebP (rozdział 4)
nastroje/ikony.mjs               Wytwarzanie ikon ze znaku (rozdział 5)
nastroje/serwer.mjs              Serwer podglądu na własnym komputerze

*.html                         * Gotowa wersja polska (te same nazwy co w _sablony/)
cs/ sk/ uk/ ru/ de/            * Gotowe wersje językowe
en/ es/ sv/ hu/                *
sitemap.xml                    * Mapa strony (7 stron × 10 języków = 70 adresów)
llms.txt                       * Skrót dla narzędzi ze sztuczną inteligencją
favicon.ico                    * Ikona dla narzędzi pytających na sztywno (rozdz. 5)
assets/js/i18n/*.js            * Tłumaczenia pocięte na pojedyncze języki

robots.txt                       Reguły dla robotów wyszukiwarek
assets/css/style.css             Wygląd
assets/js/i18n.js                Teksty w dziesięciu językach
assets/js/content.js             Kontakt, godziny, aktualności, dary
assets/js/site.js                Logika strony
assets/js/start.js               Porządkowanie adresu — działa jako pierwsze
assets/fonts/                    Proxima Nova + cyrylica (Mulish)
assets/img/                      Logo, ikony, gotowe zdjęcia .webp
assets/dokumenty/                PDF-y: standardy ochrony dzieci, regulaminy, statut
```

---

## 13. Bezpieczeństwo i prywatność

Strona statyczna nie ma serwera, bazy danych ani panelu administracyjnego,
więc odpada większość typowych ataków — nie ma gdzie się zalogować ani czego
podstawić. Co mimo to jest zrobione:

| Zabezpieczenie | Gdzie |
|---|---|
| Reguły, skąd strona może wczytywać treści (CSP) | nagłówek każdej strony |
| Zakaz kodu wstawianego (`script-src 'self'`) | tamże — generator to nawet sprawdza |
| Obcy serwis pozna tylko domenę, nie konkretną stronę | `meta name="referrer"` |
| Odnośniki na zewnątrz nie mają dostępu do naszej strony | `rel="noopener"` |
| Formularz nigdzie nie zapisuje danych — otwiera pocztę | `assets/js/site.js` |
| Film wczytuje się z YouTube dopiero po kliknięciu | tamże |
| Mapa Google wczytuje się dopiero po przewinięciu do niej | tamże |

**Dodajesz do strony zewnętrzną usługę** (inne mapy, serwer formularzy, licznik
odwiedzin)? Musisz dopisać jej adres do CSP w nagłówku stron — inaczej
przeglądarka ją zablokuje i usługa po prostu się nie pokaże. Błąd pokaże
konsola przeglądarki (F12).

### Co zniknęło w porównaniu z WordPressem

- **Google Analytics** (`G-GQ0CPGVC42`) — nie został przeniesiony. Statyczna
  strona bez własnych statystyk nie potrzebuje też baneru zgody na pliki cookie,
  dlatego zniknął również ten wyskakujący panel. Chcecie analitykę z powrotem?
  Najlżejsza i zgodna z RODO bez baneru jest usługa bez ciasteczek
  (np. Plausible albo Umami); trzeba wtedy dopisać jej adres do `script-src`
  i `connect-src` w CSP oraz uzupełnić politykę prywatności.
- **Baner zgody na pliki cookie** — niepotrzebny, bo nie ma już ciasteczek
  śledzących. W pamięci przeglądarki zapisuje się wyłącznie wybrany język.
- **Polityka prywatności** została napisana od nowa. Dotychczasowa była domyślną
  „rybką” WordPressa i opisywała komentarze, konta użytkowników i logowanie —
  rzeczy, których na tej stronie nie ma. Nowa opisuje stan faktyczny.
  **Przed publikacją warto dać ją do przeczytania komuś, kto zna RODO.**

### Nagłówki do ustawienia na hostingu

Części zabezpieczeń nie da się ustawić z HTML-a — muszą przyjść jako nagłówek
od serwera. GitHub Pages tego nie potrafi, Cloudflare tak i za darmo:

| Nagłówek | Wartość | Przeciw czemu |
|---|---|---|
| `Strict-Transport-Security` | `max-age=31536000; includeSubDomains` | wymuszenie HTTPS już przy pierwszym wejściu |
| `X-Content-Type-Options` | `nosniff` | podszywanie się pod inny typ pliku |
| `X-Frame-Options` | `SAMEORIGIN` | osadzenie strony w cudzej i podawanie się za nią |
| `Content-Security-Policy` | `frame-ancestors 'self'` | to samo dla nowszych przeglądarek |
| `Permissions-Policy` | `camera=(), microphone=(), geolocation=()` | dostęp do kamery, mikrofonu i lokalizacji |

W Cloudflare: HSTS i nosniff w *SSL/TLS → Edge Certificates*, pozostałe trzy
w *Rules → Overview → Create rule → Response Header Transform Rule*.

Sprawdzenie, czy nagłówki naprawdę dochodzą:

```
curl -sI https://wodazycia.org/ | findstr /I "strict-transport x-frame x-content permissions content-security"
```

### Konta

Największe ryzyko nie leży w kodzie, tylko w dostępach: kto wejdzie do
repozytorium na GitHubie albo na konto Cloudflare, przepisze stronę lub
przekieruje domenę. Miejcie u obu włączone **uwierzytelnianie dwuskładnikowe**
i pilnujcie, kto jeszcze ma prawo zapisu.

---

## 14. Do uzupełnienia

- [ ] **Przetestować płatność Dotpay** (rozdział 9) — na dotychczasowej stronie
      przycisk był zepsuty, więc nie wiadomo, czy konto jeszcze działa.
- [ ] **Sprawdzić licencję na Proxima Nova** (rozdział 6).
- [ ] **Dać politykę prywatności do przeczytania** komuś, kto zna RODO
      (rozdział 12).
- [ ] **Zdecydować o analityce** — czy wraca, i w jakiej postaci (rozdział 12).
- [x] ~~Odświeżyć aktualności~~ — zrobione 12 sierpnia 2026. Kościół tego dnia
      usunął ze strony wpisy „Konwencja 2025” i „Grupy domowe”, a dodał
      **KURS ALPHA 2026** i **SŁUŻBA WIĘZIENNA**. Oba przeniesione tutaj razem
      ze zdjęciami i przetłumaczone na dziesięć języków. Zdjęcia usuniętych
      wpisów skasowano również z `_zrodla/img/`.
- [ ] **Uzupełnić wpis o służbie więziennej** — na stronie kościoła są przy nim
      nazwiska i telefon kapelanów (Szymon Grzegorczyk, tel. 786 232 255,
      Mikołaj Foksiński) oraz lista zakładów karnych. W karcie aktualności
      zostało samo streszczenie; jeśli mają się pokazywać także dane kontaktowe,
      dopiszcie je w `content.js` → `news`. Warto przy tym potwierdzić, że obaj
      kapelani zgadzają się na publikowanie numeru w dziesięciu językach.
- [ ] **Uzupełnić tłumaczenia o rzeczy, których nie było po polsku** — teksty
      w dziewięciu językach powstały jako tłumaczenie polskiego oryginału.
      Warto, żeby ktoś z użytkowników danego języka przejrzał przynajmniej
      ukraiński i angielski, bo z nich będzie największy pożytek.
