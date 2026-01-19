# 🚀 Angular MCP Server

### Rewolucja w pracy AI z projektami Angularowymi?

**Cel prezentacji:** Sprawdzenie, czy wdrożenie MCP się opłaca oraz analiza kierunku rozwoju narzędzi AI w ekosystemie
Angulara.

---

## Czym jest Angular MCP?

> Źródło: [angular.dev/ai/mcp](https://angular.dev/ai/mcp)

- **MCP (Model Context Protocol):** 🔓 Otwarty standard bezpiecznego dostępu AI do danych **(Kod, Struktura,
  Konfiguracja, Dokumentacja)**.
- **Angular MCP Server:** 🧠 "Mózg", który tłumaczy Twój projekt dla AI.
    - **Co tłumaczy?** Analizuje składnię (AST), relacje między komponentami (Dependency Graph) i szablony HTML.
    - **Gdzie zapisuje?** Indeks jest przechowywany **wyłącznie lokalnie** (w pamięci RAM lub tymczasowym cache na
      dysku) – Twój kod nigdy nie jest wysyłany do chmury w celu indeksowania.
- **Cel:** AI przestaje zgadywać, a zaczyna "widzieć" 👁️ faktyczną strukturę aplikacji.

---

## Zalety i Wady

> Źródło: [angular.dev/ai/mcp](https://angular.dev/ai/mcp)

| Cecha        | 👍 Zalety                                                                       | 👎 Wady                                                         |
|:-------------|:--------------------------------------------------------------------------------|:----------------------------------------------------------------|
| **Wiedza**   | 📚 **Zawsze aktualna** (dostęp do lokalnej wersji projektu).                    | ⚠️ **Wczesna faza** (Różnice między wersjami bywają mylące).    |
| **Kontekst** | 🏠 **Pełny Obraz** - Widzi kod, strukturę plików, zależności i logi (lokalnie). | 🐌 **Wydajność** - Indeksowanie dużych repozytoriów może trwać. |
| **Jakość**   | ✨ **Best Practices** - Sugestie oparte na `schematics`, a nie StackOverflow.    | 🔒 **Prywatność** - Wymaga zaufania do lokalnego serwera.       |

---

## Ewolucja Konfiguracji i Funkcji 📈

Porównanie konfiguracji w wersjach v19-v21:

| Cecha                | 📼 Angular v19 (Legacy)                | 📦 Angular v20 (Hybrid)                | 🛠️ Angular v21 (Modern)                    |
|:---------------------|:---------------------------------------|:---------------------------------------|:--------------------------------------------|
| **Konfiguracja MCP** | 📝 **Manualna** (Konfiguracja klienta) | ⚙️ **Manualna** (Konfiguracja klienta) | 🤖 **Auto-Detect** (Wykrywa `angular.json`) |
| **Główne Funkcje**   | Podstawowe indeksowanie                | Standalone Components                  | Signals, Zoneless, `inject()`               |

---

## Jak to działa? (Architektura)

**Pytanie: Czy serwer wysyła dane do Google?**

- ❌ **NIE.** Działa lokalnie.
- **Przepływ:** 💻 VS Code <-> 🏠 Lokalny Serwer MCP <-> 📂 Twój Kod.
- **Serwer jest jak Bibliotekarz** 📖, który podaje AI odpowiednią książkę, a nie wynosi książki z biblioteki.

---

## Tryby Pracy - Porównanie ⚖️

> Źródło: [angular.dev/ai/mcp#modes](https://angular.dev/ai/mcp)

| Tryb               | 📖 Read-only (Tylko Odczyt)               | 🏠 Local-only (Lokalny)                                       |
|:-------------------|:------------------------------------------|:--------------------------------------------------------------|
| **Działanie**      | AI tylko analizuje kod i dokumentację.    | AI korzysta tylko z zasobów na dysku (brak wyjścia na świat). |
| **Bezpieczeństwo** | 🛡️ **Maksymalne** (Zero zmian w kodzie). | 🔒 **Izolacja** (Sandbox).                                    |
| **Zastosowanie**   | Audyt, wyjaśnianie kodu, nauka.           | Praca w firmach z rygorystycznym NDA / offline.               |

---

## Dostępne Funkcje Serwera MCP (Tools & Capabilities) 🧰

Źródła: [v19](https://v19.angular.dev/ai/mcp) | [v20](https://v20.angular.dev/ai/mcp) | [v21](https://v21.angular.dev/ai/mcp)

### 🔨 Szczegóły Dostępnych Narzędzi (Available Tools)

> Źródło: [angular.dev/ai/mcp#available-tools](https://angular.dev/ai/mcp#available-tools)

Narzędzia te są domyślnie włączone w Angular CLI MCP server i wspierają codzienną pracę.

| Nazwa (Name)                | Opis                                                                                                       | local-only | read-only | v19 | v20 | v21 |
|:----------------------------|:-----------------------------------------------------------------------------------------------------------|:----------:|:---------:|:---:|:---:|:---:|
| `ai_tutor`                  | Uruchamia interaktywnego nauczyciela AI. Zalecane do nauki w projektach Angular v20+.                      |     ✅      |     ✅     |  ❌  |  ✅  |  ✅  |
| `find_examples`             | Wyszukuje autorytatywne przykłady kodu z bazy oficjalnych rozwiązań (focus na nowoczesnych funkcjach).     |     ✅      |     ✅     |  ❌  |  ✅  |  ✅  |
| `get_best_practices`        | Pobiera przewodnik "Angular Best Practices". Kluczowe dla zachowania standardów (Standalone, Typed Forms). |     ✅      |     ✅     |  ❌  |  ✅  |  ✅  |
| `list_projects`             | Wypisuje nazwy wszystkich aplikacji i bibliotek w workspace (czyta `angular.json`).                        |     ✅      |     ✅     |  ✅  |  ✅  |  ✅  |
| `onpush_zoneless_migration` | Analizuje kod i dostarcza plan migracji na strategię `OnPush` (wymóg dla aplikacji Zoneless).              |     ✅      |     ✅     |  ❌  | ⚠️  |  ✅  |
| `search_documentation`      | Przeszukuje oficjalną dokumentację `angular.dev`. Służy do pytań o API, tutoriale i wzorce.                |     ❌      |     ✅     |  ✅  |  ✅  |  ✅  |

> **Legenda:** ❌ Brak | ⚠️ Ograniczone | 🧪 Eksperymentalne | ✅ Dostępne
---

### 🧪 Szczegóły Narzędzi Eksperymentalnych (Experimental Tools)

> Źródło: [angular.dev/ai/mcp#experimental-tools](https://angular.dev/ai/mcp#experimental-tools)

Narzędzia te są w fazie preview. Wymagają włączenia flagą `--experimental-tool`.

| Nazwa (Name)               | Opis                                                                                                                                                        | local-only | read-only | v19 | v20 | v21 |
|:---------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------:|:---------:|:---:|:---:|:---:|
| `build`                    | Wykonuje jednorazowy build (`ng build`) bez trybu watch.                                                                                                    |     ✅      |     ❌     |  ✅  |  ✅  |  ✅  |
| `devserver.start`          | Asynchronicznie uruchamia serwer deweloperski (`ng serve`). Zwraca sterowanie natychmiast. Zarządzanie przez `devserver.stop` i `devserver.wait_for_build`. |     ✅      |     ✅     |  ✅  |  ✅  |  ✅  |
| `devserver.stop`           | Zatrzymuje serwer deweloperski uruchomiony przez `devserver.start`.                                                                                         |     ✅      |     ✅     |  ✅  |  ✅  |  ✅  |
| `devserver.wait_for_build` | Zwraca logi ostatniego buildu z serwera. Jeśli build trwa, czeka na jego zakończenie przed zwróceniem logów.                                                |     ✅      |     ✅     |  ✅  |  ✅  |  ✅  |
| `e2e`                      | Uruchamia skonfigurowane w projekcie testy E2E.                                                                                                             |     ✅      |     ✅     |  ✅  |  ✅  |  ✅  |
| `modernize`                | Przeprowadza migracje i dostarcza instrukcje modernizacji kodu do najnowszych standardów i składni (Best Practices).                                        |     ✅      |     ❌     |  ❌  |  ✅  |  ✅  |
| `test`                     | Uruchamia testy jednostkowe projektu.                                                                                                                       |     ✅      |     ✅     |  ✅  |  ✅  |  ✅  |

> **Legenda:** ❌ Brak | ⚠️ Ograniczone | 🧪 Eksperymentalne | ✅ Dostępne
---

## Wsparcie dla Migracji (AI Migrations) 🔄

> Źródło: [angular.dev/reference/migrations](https://angular.dev/reference/migrations)

AI z serwerem MCP działa w oparciu o **oficjalne procedury**:

1. **Analiza:** AI sprawdza wersję projektu (`project_info`).
2. **Wiedza:** Pobiera kontekst z oficjalnego przewodu migracji.
3. **Wykonanie:** Uruchamia certyfikowane schematy (`apply_schematic`).

### 🧪 Narzędzie Specjalne: `modernize` (Experimental)

Dla głębszej modernizacji (dostępne od v20) służy narzędzie **`modernize`**:

* **Działanie:** Analizuje kod i dostarcza instrukcje modernizacji do najnowszych **Best Practices** i składni.
* **Użycie:** Wymaga flagi `--experimental-tool`.

---

## Angular AI Design Patterns 🧩

Oficjalne wzorce architektoniczne (wg [angular.dev/ai/design-patterns](https://angular.dev/ai/design-patterns)):

| Wzorzec              | Opis i Implementacja w Angularze                                                                                                                                |
|:---------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Streaming UI** 🌊  | Płynne wyświetlanie odpowiedzi (token-po-tokenie). <br> *Tech:* `AsyncPipe`, `Signals`, `@defer`.                                                               |
| **Generative UI** 🎨 | AI zwraca dane (JSON), a Angular dynamicznie renderuje odpowiedni komponent (np. Wykres, Tabela). <br> *Tech:* `ngComponentOutlet`, `Dynamic Component Loader`. |
| **Tool Use** 🛠️     | Pozwolenie AI na "klikanie" w aplikacji (nawigacja, zmiana theme). <br> *Tech:* `Service Methods` wystawione jako `tools` dla modelu.                           |

---

## Demo - 3 Wersje Aplikacji 🖥️

1. **v19 (Legacy):**
    * 📂 Config: [`mcp.json`](demo-app-v19/mcp.json)
    * Kod: `*ngFor`, `Modules`, klasyczny `constructor`.
2. **v20 (Hybrid/Transition):**
    * 📂 Config: [`mcp.json`](demo-app-v20/mcp.json)
    * Kod: `Standalone Components`, ale wciąż stary styl serwisów.
3. **v21 (Modern):**
    * 📂 Config: [`mcp.json`](demo-app-v21/mcp.json)
    * Kod: **Signals**, `@for`, `inject()`, `Zoneless`.

---

## Prompt "Oceń Aplikację" - Wyniki 📊

| Wersja Aplikacji | Co powie AI z MCP?                                                         |
|:-----------------|:---------------------------------------------------------------------------|
| **v19**          | "Kod wymaga modernizacji. Zalecam przejście na Standalone Components." ⚠️  |
| **v20**          | "Jest nieźle (Standalone), ale wciąż używasz starego Change Detection." ⚠️ |
| **v21**          | "Świetna robota! Zgodne z best practices v21. Może dodaj `effect()`?" ✅    |

---

## FAQ: Cache i Współpraca w Zespole 🤝

**Pytanie:** *Czy można skonfigurować cache i przechowywać go w repozytorium?*

**Odpowiedź:** Nie, cache jest zasobem lokalnym.

| Typ Cache'a       | Opis                                               | Czy commitować?          |
|:------------------|:---------------------------------------------------|:-------------------------|
| **Local Cache** ⚡ | Przyspiesza start serwera, przechowywany lokalnie. | ❌ **NIE** (`.gitignore`) |

> **Uwaga:** Serwer MCP automatycznie zarządza swoim cachem (np. w pamięci lub w folderze tymczasowym). Nie należy go
> commitować do repozytorium.

---

## Podsumowanie

- Angular MCP to **most** między wiedzą statyczną a dynamicznym rozwojem.
- **Ewolucja Konfiguracji:** Dążenie do **Zero-Config** – przejście od ręcznego pisania plików JSON (Manual) do
  automatycznego wykrywania (Auto).
- **Kontekstowa Rewolucja:** To ewolucja porównywalna do wdrożenia inteligentnych IDE (jak IntelliJ). Przechodzimy od "
  zgadywania tekstu" do pracy opartej na **analizie kodu, pluginach, refaktoryzacji i precyzyjnym znajdowaniu referencji
  **.
- Atuty: **Bezpieczeństwo** i **Lokalność**.

---

## Źródła / Dokumentacja 🔗

Oficjalna dokumentacja Angular AI & MCP:

- 📼 **Angular v19:** [v19.angular.dev/ai/mcp](https://v19.angular.dev/ai/mcp)
- 📦 **Angular v20:** [v20.angular.dev/ai/mcp](https://v20.angular.dev/ai/mcp)
- 🛠️ **Angular v21 (Stable):** [v21.angular.dev/ai/mcp](https://v21.angular.dev/ai/mcp)
- 🔄 **Migrations:** [angular.dev/reference/migrations](https://angular.dev/reference/migrations)
- 🧩 **Design Patterns:** [angular.dev/ai/design-patterns](https://angular.dev/ai/design-patterns)
