---
target: //impeccable critique (portf_lio_profissional_vin_cius_rodrigues.html)
total_score: 13
max_score: 24
na_heuristics: 5,7,9,10
p0_count: 0
p1_count: 4
target_identity: "file:D:\\MY_APPS\\ViniRb\\portf_lio_profissional_vin_cius_rodrigues.html"
target_fingerprint: "sha256:63d9e6a521ebf76b3f419e22da1692c9e22f4eb0b48b0f840a737a1480904ac1"
target_path: "D:\\MY_APPS\\ViniRb\\portf_lio_profissional_vin_cius_rodrigues.html"
timestamp: 2026-11-10T16-17-26Z
slug: portf-lio-profissional-vin-cius-rodrigues-html
---
Method: dual-agent (A: fe5bccf8-2cb4-4a61-9fc0-8d0f89c3a76b · B: 7f8a6d88-064d-4886-9014-bf3619060c6f)

## Design Health Score

*(Modo da superfície: **Experience / Persuade — portfólio profissional**. Pelas regras de aplicabilidade do guia de heurísticas, as heurísticas 5, 7, 9 e 10 recebem `n/a` porque este portfólio estático de leitura não possui formulários com entrada de dados, ações destrutivas, fluxos recorrentes de usuário avançado nem documentação de produto; o total é renormalizado sobre as 6 heurísticas aplicáveis = **/24**.)*

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 2 | Barra fixa com destaque ativo (`IntersectionObserver`), contador `01 / 04` e feedback de cópia funcionam, mas o corte da dobra em `1440×900` oculta `SCROLL ↓`, `#case-modal` fechado permanece na ordem de Tab (`opacity: 0` sem `visibility: hidden`/`aria-hidden`), `#carousel-dots` omite `aria-selected` e o Preflight do Tailwind sobrescreve `Plus Jakarta Sans` no `body`. |
| 2 | Match System / Real World | 2 | Texto técnico claro em PT-BR, mas a linha do tempo em `#experiencia` quebra ordem cronológica (`Accenture 2026 – Presente` na posição `03` abaixo de `Bus2 2023 – 2025`), a pílula `"Campina Grande, PB"` no topo age como link de contato em vez de indicador de local, 3 projetos usam CTAs distintos apontando para a mesma URL raiz do LinkedIn e a tela do notebook exibe métrica fictícia (`API Latency: 14ms`). |
| 3 | User Control and Freedom | 2 | O modal fecha por `✕`, backdrop e `Esc` e o 3D reverte na rolagem, mas o listener de `mousedown`/`mouseup` (`>50px`) em `.carousel-viewport` sequestra seleção de texto com o mouse, slides fora da tela continuam focáveis via Tab, `#case-modal` não tem focus trap nem retorno de foco e `#mobile-menu-drawer` não fecha com `Esc` ou toque externo. |
| 4 | Consistency and Standards | 2 | Sistema coerente de superfícies, mas o Tailwind Play CDN força `ui-sans-serif` no `body`, os glifos `↗` renderizam como emojis azuis do Windows dentro de botões laranja/carvão, os rótulos do menu mobile (`01. Especialidades & Showcase 3D`, etc.) divergem do desktop (`Especialidades`, `Abordagem`…) e `role="tablist"` não possui filhos `role="tab"`. |
| 5 | Error Prevention | n/a | Portfólio estático somente leitura, sem formulários, edições ou ações destrutivas. |
| 6 | Recognition Rather Than Recall | 3 | Seções numeradas, links legíveis e badges de métricas facilitam a leitura rápida; há atrito na pílula ambígua `"Campina Grande, PB"`, nos cards da cena 3D que parecem clicáveis sem resposta, no card estático `LOCALIZAÇÃO` estilizado igual aos links de contato e nas setas do carrossel distantes do botão de detalhes no mobile. |
| 7 | Flexibility and Efficiency | n/a | Superfície de portfólio/showcase sem fluxos operacionais recorrentes ou ações em lote (o carrossel aceita setas `←`/`→` no teclado). |
| 8 | Aesthetic and Minimalist Design | 2 | Paleta sólida e palco 3D autoral prejudicados pelo hero de `1.102,5px` cortado na dobra (`1440×900`), repetição quase literal entre `summary` → `responsibilities[0]` e slide do carrossel → `#case-modal`, vazios verticais nos cards iniciais de `#stack-grid`, ~105 pílulas monoespaçadas uniformes e 4 `dark-glow` + 5 cartões aninhados reais. |
| 9 | Error Recovery | n/a | Não há validação de formulários, chamadas de rede ou fluxos de erro acionados pelo usuário. |
| 10 | Help and Documentation | n/a | Narrativa autocontida; a dica inline sob o carrossel cobre o único componente interativo complexo. |
| **Total** | | **13 / 24** | **54.2% — Acceptable** *(Base visual promissora, mas precisa de correções importantes em enquadramento da dobra, cascata tipográfica, acessibilidade de modal/carrossel, contraste e deduplicação de conteúdo).* |

---

## Design Specificity Verdict

**Veredicto: Peça central 3D altamente autoral (`#showcase`) envolvida por um invólucro de portfólio dark editorial intercambiável com templates genéricos.**

- **Avaliação de design (LLM)**:
  - A identidade em carvão em camadas (`#0B0B0D` → `#111114` → `#151519` → `#19191E` → `#222228`) com marfim quente (`#F5F1E8`) e laranja queimado (`#F0783C` / `#FF9A5C`) evita o clichê neon azul/roxo, e o conjunto 3D de notebook + smartphone com dobradiça unificada em `(y=0, z=0)` demonstra autoria real de CSS/GSAP.
  - Porém, a estrutura ao redor repete padrões comuns de templates de engenharia: eyebrows numerados (`01 / ...` a `07 / ...`), itálicos em `Instrument Serif` laranja em cada título `H1`/`H2`, sequência uniforme de cards `.editorial-panel`, faixa de 3 métricas no hero e grade de 6 cards com nuvem de chips em `#stack-grid`.
  - Visualmente, a primeira dobra falha: em `1440×900`, o `#hero` mede `1.102,5px` e corta os 4 botões e os 3 cards de métricas na borda inferior (`9.813px` totais no desktop e `16.156px` no mobile `390×844`). Além disso, há `0` capturas reais dos aplicativos publicados (`AppBus2 v5`, `NEAT`, `Bus2Driver`, `LocalSpeak`), substituídas por telemetria sintética (`API Latency: 14ms`) e modais que apenas repetem o texto do card.
- **Varredura determinística (`impeccable detect`)**:
  - **Scan estático** (`portf_lio_profissional_vin_cius_rodrigues.html` e `.`, idênticos, exit code `2`): **36 achados** (30 warnings, 6 advisories) — `cramped-padding` (15), `nested-cards` (8), `numbered-section-labels` (6 advisories), `dark-glow` (4), `overused-font` (2: `Plus Jakarta Sans` e `Instrument Serif`) e `low-contrast` (1: `#656462` sobre `#0d0d10` = `3.3:1`).
  - **Scan em navegador vivo via localhost (`127.0.0.1:18402`)**: como o Tailwind Play CDN (`cdn.tailwindcss.com`) e `script.js` só executam em runtime, o scan via **CDP (`--cdp 9223`)** encontrou **52 achados** (28 warnings, 24 advisories), o **URL Desktop (`1280×800`)** encontrou **51 achados** (29 warnings, 22 advisories) e o **URL Mobile (`390×844`)** encontrou **35 achados** (16 warnings, 19 advisories):
    - Achados reais confirmados pelo detector que complementam a revisão: `low-contrast` (**8x** em textos legíveis com `--text-muted: #75716B`), `line-length` (**4–5x** com ~88–92 caracteres/linha em parágrafos de `#sobre` e resumos), `dark-glow` (**4x** no desktop / **3x** no mobile em `.btn-primary-editorial`, `.keyboard-well`, `.notebook-emblem` e `.phone-chassis`), `oversized-h1` (**1x** a `82,7–84px` = `34–38vh`), `nested-cards` (**5 warnings reais** + 4 advisories), `numbered-section-labels` (**16 advisories**) e `straggler` (**2–4 advisories** de palavra isolada na última linha).
    - **Falsos positivos verificados**:
      - `cramped-padding` (**15x no scan estático → 0x no CDP/URL**): falso positivo total porque o modo estático não executa as classes utilitárias do Tailwind CDN (`py-24 md:py-32`, `p-7`, `p-3.5`); no Chrome vivo todas as seções e painéis têm `14px`–`128px` de padding real.
      - `nested-cards` (**4 de 9 no CDP/URL**): são subcaixas decorativas internas da cena 3D (`.keyboard-well`, painel de código do notebook, 2 cards internos da tela do celular); os outros **5** são reais (`.carousel-viewport` envolvendo slides com subcards de 3 níveis em `#projetos`, e 4 cards com borda dentro do `.editorial-panel` em `#contato`).
      - `low-contrast` do scan estático (`#656462` sobre `#0d0d10` = `3.3:1`): pertence ao texto decorativo `aria-hidden="true"` `.lid-chin-logo` (`7px`, `WORKSTATION PRO • FULL STACK`); já os **8 achados reais** de runtime afetam texto de leitura real.
      - `italic-serif-display` (**6x no CDP/URL**): falso positivo parcial/nuance, pois `h1` e `h2` usam `Plus Jakarta Sans` como base e aplicam `Instrument Serif` itálico apenas a 1–2 palavras de destaque.
- **Sobreposições visuais (`live-server` / `[Human]`)**: Nenhuma aba `[Human]` interativa com overlay permanece aberta para inspeção do usuário. A injeção de `/detect.js` (`live-server --background`) foi validada apenas em sessão headless CDP isolada (injetou 69 nós de overlay e registrou `[impeccable] 35 anti-patterns found`), encerrando servidor e navegador ao fim da verificação.

---

## Overall Impression

A cena 3D interativa no scroll e o sistema de cores carvão + laranja queimado dão personalidade técnica imediata, mas o portfólio tropeça antes mesmo da rolagem: o título gigante empurra CTAs e métricas para fora da dobra, o Tailwind CDN derruba a fonte principal dos parágrafos para `Segoe UI`, os botões exibem emojis azuis do sistema, a cópia repete blocos inteiros entre seções e o modal técnico não entrega profundidade extra. A maior oportunidade é enxugar a primeira dobra, elevar o contraste e a acessibilidade dos controles interativos e transformar `#projetos` / `#case-modal` em evidência real dos aplicativos construídos.

---

## What's Working

1. **Composição 3D com eixo de dobradiça matematicamente unificado (`#showcase-viewport`, `styles.css:321-877`, `script.js:763-858`)**: A tampa (`.laptop-lid`) e a base (`.laptop-base`) compartilham o eixo físico `(y=0, z=0)`, com espessura extrudada de `14px`, teclado QWERTY orientado corretamente, escala responsiva dedicada via `--laptop-scale`/`--phone-scale` e fallback para `prefers-reduced-motion`.
2. **Sistema cromático carvão + laranja queimado (`styles.css:4-35`, `232-255`)**: A progressão tonal (`#0B0B0D` a `#222228`) com marfim `#F5F1E8` e contraste alto (`#0B0B0D` sobre `#F0783C` nos botões primários) estabelece identidade madura e legível nos blocos principais.
3. **Separação limpa de dados e escaping seguro (`script.js:51-289`, `300-308`)**: Experiência, projetos, stack e formação estão centralizados em `Object.freeze(PORTFOLIO_DATA)` e renderizados com `DOMUtils.escapeHTML()`, apoiados em métricas de impacto concretas (`-75%`, `-40% startup`, `80%+` cobertura).

---

## Priority Issues

1. **[P1] Quebra da primeira dobra (`oversized-h1` + altura do `#hero`) corta CTAs/métricas no desktop e esmaga cards no mobile**
   - **Why it matters**: Em `1440×900`, `#hero` ocupa `1.102,5px` (com `h1` a `82,7–84px`, `34–38vh`), fatiando os 4 botões de ação e os 3 cards de métricas (`-75%`, `5+`, `-50%`) na borda inferior e escondendo `SCROLL ↓`. Em `390×844`, `#hero` atinge `1.355px` (só 1 botão aparece) e `grid-cols-3` ([html:153](file:///d:/MY_APPS/ViniRb/portf_lio_profissional_vin_cius_rodrigues.html#L153)) espreme os 3 cards de métricas em colunas de ~76px úteis.
   - **Fix**: Reduzir `--fs-display` em [styles.css:43](file:///d:/MY_APPS/ViniRb/styles.css#L43) para `clamp(2.15rem, 4.2vw + 0.5rem, 4.25rem)`, compactar os paddings/margens de `#hero` ([html:101-125](file:///d:/MY_APPS/ViniRb/portf_lio_profissional_vin_cius_rodrigues.html#L101-L125): `pt-24 pb-8 md:pt-28 md:pb-10`, `pb-5 mb-6`, `mt-8 md:mt-10`) e trocar `grid-cols-3` por `grid-cols-1 sm:grid-cols-3` nos cards de métricas.
   - **Suggested command**: `/impeccable layout` (e `/impeccable adapt`)

2. **[P1] Cascata do Tailwind CDN sobrescreve `Plus Jakarta Sans` no `body` e glifos `↗` quebram a estética dos botões**
   - **Why it matters**: Como `<script src="https://cdn.tailwindcss.com"></script>` ([html:29](file:///d:/MY_APPS/ViniRb/portf_lio_profissional_vin_cius_rodrigues.html#L29)) injeta o Preflight no `<head>` após `<link rel="stylesheet" href="styles.css" />`, apenas `h1`/`h2` mantêm `Plus Jakarta Sans` via classes explícitas, enquanto parágrafos e botões caem em `ui-sans-serif` (`Segoe UI` no Windows). Paralelamente, caracteres `↗` literais ([html:143,147,677,689,694](file:///d:/MY_APPS/ViniRb/portf_lio_profissional_vin_cius_rodrigues.html#L143), [script.js:566,698](file:///d:/MY_APPS/ViniRb/script.js#L566)) viram caixas emoji azuis do Windows, e `Syne` / `Newsreader` ([html:26](file:///d:/MY_APPS/ViniRb/portf_lio_profissional_vin_cius_rodrigues.html#L26), [styles.css:37,39](file:///d:/MY_APPS/ViniRb/styles.css#L37-L39)) são carregadas/declaradas sem uso efetivo.
   - **Fix**: Configurar `tailwind.config` inline com `fontFamily.sans/serif/mono` ou declarar `font-family: var(--font-sans)` diretamente em `body` ([styles.css:78](file:///d:/MY_APPS/ViniRb/styles.css#L78)), remover `Syne` e `Newsreader` não utilizadas do Google Fonts e substituir todo `↗` por `<svg>` inline `aria-hidden="true"` herdando `currentColor`.
   - **Suggested command**: `/impeccable typeset` (e `/impeccable polish`)

3. **[P1] Falhas de acessibilidade e contraste: `#case-modal` sem trap/hidden, alvos táteis minúsculos (`8×6px`) e `--text-muted` abaixo de AA**
   - **Why it matters**: (a) `#case-modal` ([styles.css:946-965](file:///d:/MY_APPS/ViniRb/styles.css#L946-L965), [html:731](file:///d:/MY_APPS/ViniRb/portf_lio_profissional_vin_cius_rodrigues.html#L731)) usa apenas `opacity: 0; pointer-events: none` sem `visibility: hidden` nem `aria-hidden`, deixando `#modal-close-btn` e o `<h3>` vazio na árvore de acessibilidade/Tab, além de não mover/prender/restaurar foco nem travar scroll. (b) `.carousel-dot` mede `8×6px` (`32×6px` ativo) em [styles.css:928-943](file:///d:/MY_APPS/ViniRb/styles.css#L928-L943) e carece de `role="tab"`/`aria-selected` (somando **19** alvos `<44px` no mobile, incluindo `#modal-close-btn` `31×42px` e links do footer `16px`). (c) Links/botão do header usam `focus:outline-none` ([html:45,72](file:///d:/MY_APPS/ViniRb/portf_lio_profissional_vin_cius_rodrigues.html#L45)) sem `:focus-visible`. (d) `--text-muted: #75716B` ([styles.css:23](file:///d:/MY_APPS/ViniRb/styles.css#L23)) reprova WCAG AA `4.5:1` em **8** ocorrências reais (`3.6:1` sobre `#19191E`, `3.9:1` sobre `#111114`, `4.1:1` sobre `#0B0B0D`).
   - **Fix**: Adicionar `visibility: hidden` + `aria-hidden="true"` no modal fechado, gerenciar foco/scroll lock/`inert` em slides inativos do carrossel, expandir `.carousel-dot` para hit target de `44×44px`, definir `:focus-visible` global em [styles.css](file:///d:/MY_APPS/ViniRb/styles.css) e clarear `--text-muted` para `#908B84` (`~5.3:1` em `#19191E`).
   - **Suggested command**: `/impeccable audit` (e `/impeccable harden`)

4. **[P1] Duplicação de copy, cronologia quebrada em `#experiencia`, 3 CTAs para a mesma URL e drag que bloqueia seleção de texto**
   - **Why it matters**: Todas as 4 experiências ([script.js:65-127](file:///d:/MY_APPS/ViniRb/script.js#L65-L127)) repetem `summary` quase palavra por palavra em `responsibilities[0]`, e `Accenture (2026 – Presente)` aparece na posição `03` abaixo de `Bus2 (Fev 2023 – Out 2025)`. Em `#projetos`, o modal `"Detalhamento Técnico"` repete quase o mesmo conteúdo já visível no slide, e 3 de 4 projetos (`AppBus2 v5`, `NEAT`, `Bus2Driver` em [script.js:150-189](file:///d:/MY_APPS/ViniRb/script.js#L150-L189)) apontam para a mesma raiz do LinkedIn; além disso, `viewport.addEventListener('mousedown', ...)` ([script.js:992-993](file:///d:/MY_APPS/ViniRb/script.js#L992-L993)) dispara `goToSlide` ao tentar selecionar texto no desktop e parágrafos de `#sobre` ([html:516-526](file:///d:/MY_APPS/ViniRb/portf_lio_profissional_vin_cius_rodrigues.html#L516-L526)) passam de `88–92` caracteres por linha.
   - **Fix**: Reordenar cronologicamente as experiências, condensar `summary` sem duplicar bullets, limitar parágrafos com `max-w-prose`, enriquecer `#case-modal` com decisões arquiteturais reais (e remover links duplicados do LinkedIn), e restringir o arraste do carrossel a toque ou checar seleção de texto ativa antes de trocar o slide.
   - **Suggested command**: `/impeccable clarify` (e `/impeccable distill`)

5. **[P2] Excesso de ruído visual (~105 badges, 5 cards aninhados reais, 4 `dark-glow`) e desalinhamento de navegação/contato**
   - **Why it matters**: ~105 pílulas monoespaçadas dão o mesmo peso visual a `Flutter` e `Swift (Básico)`; `justify-between` em `#stack-grid` ([script.js:594](file:///d:/MY_APPS/ViniRb/script.js#L594)) cria buracos verticais nos cards `01` e `02`; `#projetos` e `#contato` empilham bordas aninhadas (`nested-cards` x5 reais); os 4 `box-shadow` laranja no escuro (`dark-glow`) adicionam brilho artificial; no header há 7 destinos com rótulos diferentes entre desktop (`Especialidades`, `Abordagem`) e mobile (`01. Especialidades & Showcase 3D`, etc.); e `LOCALIZAÇÃO` em `#contato` ([html:702](file:///d:/MY_APPS/ViniRb/portf_lio_profissional_vin_cius_rodrigues.html#L702)) parece um botão clicável igual ao `LINKEDIN`/`GITHUB`.
   - **Fix**: Reduzir a navegação superior para ≤5 itens + CTA claro `"Contato"` (em vez de `"Campina Grande, PB"`), alinhar os rótulos do drawer mobile com `Esc`/backdrop dismiss, destacar 2–3 competências principais por card de stack em texto corrido/lista limpa, achatar as bordas aninhadas em `#projetos`/`#contato` e atualizar `bindClipboardCopy` ([script.js:1045-1060](file:///d:/MY_APPS/ViniRb/script.js#L1045-L1060)) para `navigator.clipboard.writeText()`.
   - **Suggested command**: `/impeccable distill` (e `/impeccable polish`)

---

## Persona Red Flags

- **Jordan (Recrutador / Primeira Visita)**:
  - Clica na pílula laranja `"Campina Grande, PB"` ([html:67-70](file:///d:/MY_APPS/ViniRb/portf_lio_profissional_vin_cius_rodrigues.html#L67-L70)) esperando mapa/fuso e é jogado para `#contato`, enquanto procura um botão explícito de `"Contato"` ou `"Currículo"`.
  - Tenta clicar nos cards internos da cena 3D (`LocalSpeak AI`, `AppBus2 v5 & NEAT`) que parecem interativos, sem resposta.
  - Encontra ~105 pílulas técnicas idênticas sem hierarquia entre competência sênior (`Flutter`) e familiaridade (`Swift (Básico)`), além de um card estático `LOCALIZAÇÃO` ([html:702](file:///d:/MY_APPS/ViniRb/portf_lio_profissional_vin_cius_rodrigues.html#L702)) idêntico aos links clicáveis em `#contato`.
- **Riley (Tech Lead / Avaliador Crítico)**:
  - Percebe `Accenture (2026 – Presente)` fora de ordem cronológica abaixo de `Bus2 (Fev 2023 – Out 2025)` e repetição literal de `summary` em `responsibilities[0]` nas 4 experiências ([script.js:65-127](file:///d:/MY_APPS/ViniRb/script.js#L65-L127)).
  - Abre `"Detalhamento Técnico"` buscando arquitetura profunda e lê quase o mesmo texto do slide; testa 3 links externos de projetos diferentes e cai na mesma raiz do LinkedIn; nota `"API Latency: 14ms"` fictício na tela do notebook.
  - Ao tentar selecionar termos técnicos com o mouse dentro de `#carousel-viewport`, o handler `mousedown`/`mouseup` (`>50px`) troca o slide sob o cursor ([script.js:992-993](file:///d:/MY_APPS/ViniRb/script.js#L992-L993)).
- **Casey (Mobile `390×844` com uma mão)**:
  - Na primeira tela mobile, apenas 1 botão (`Trajetória Profissional`) aparece na base; os demais CTAs ficam fora da dobra e `grid-cols-3` espreme os 3 KPIs em colunas de ~76px úteis.
  - Os slides de `#projetos` passam de `1.100px` de altura no mobile, deixando setas no topo, CTA lá embaixo e pontos `.carousel-dot` de `8×6px` impossíveis de acertar com o polegar.
  - O drawer mobile não fecha por `Esc` nem toque fora, e `bindClipboardCopy` injeta um `<textarea>` na página e chama `execCommand('copy')` ([script.js:1046-1051](file:///d:/MY_APPS/ViniRb/script.js#L1046-L1051)), arriscando salto de scroll/teclado virtual.

---

## Minor Observations

- Fontes `Syne` e `Newsreader` continuam sendo solicitadas via Google Fonts ([html:26](file:///d:/MY_APPS/ViniRb/portf_lio_profissional_vin_cius_rodrigues.html#L26)) e declaradas em [styles.css:37,39](file:///d:/MY_APPS/ViniRb/styles.css#L37-L39) sem renderizarem em nenhum elemento.
- Tailwind Play CDN gera aviso de produção no console (`cdn.tailwindcss.com should not be used in production...`) e aumenta o tempo de estilo inicial.
- Ao rolar até `#contato`, nenhum link da navbar possui `data-section="contato"`, mantendo `Formação` sublinhada como ativa ([script.js:1064-1082](file:///d:/MY_APPS/ViniRb/script.js#L1064-L1082)).
- O título do modal `#modal-title` ([html:736](file:///d:/MY_APPS/ViniRb/portf_lio_profissional_vin_cius_rodrigues.html#L736)) existe no DOM como um `<h3>` vazio (`""`) enquanto fechado, e o carrossel não tem região `aria-live="polite"` ao mudar de slide.
- O rodapé e a entrada da Accenture citam `2026` / `2026 – Presente` — vale confirmar se o status atual já está vigente como esperado.

---

## Questions to Consider

1. **O que aconteceria se `#case-modal` e `#showcase` exibissem artefatos reais dos apps em produção (telas do NEAT, alternância de Flavors do AppBus2, fluxo de voz offline do LocalSpeak) em vez de caixas CSS genéricas e repetição do resumo do card?**
2. **Se um recrutador passar apenas 5 segundos no hero em `1440×900`, por que o `H1` a `84px` empurra os 4 CTAs e as 3 métricas de impacto para a linha de corte da tela?**
3. **105 pílulas monoespaçadas idênticas realmente comunicam nível sênior/Tech Lead melhor do que destacar 3 pilares principais com profundidade técnica?**
4. **Por que a pílula principal do canto superior direito diz `"Campina Grande, PB"` quando sua ação é rolar até Contato, em vez de assumir um CTA direto como `"Contato"` ou `"Disponível para Projetos"`?**
