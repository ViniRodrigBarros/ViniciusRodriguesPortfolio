---
target: //impeccable critique (portf_lio_profissional_vin_cius_rodrigues.html)
total_score: 23
max_score: 24
na_heuristics: 5,7,9,10
p0_count: 0
p1_count: 0
target_identity: "file:D:\\MY_APPS\\ViniRb\\portf_lio_profissional_vin_cius_rodrigues.html"
target_fingerprint: "sha256:3181f397e37f8c75d00567672059f2f9031809c7d92cdf1c648e3dec6ae2ef77"
target_path: "D:\\MY_APPS\\ViniRb\\portf_lio_profissional_vin_cius_rodrigues.html"
timestamp: 2026-11-10T18-06-00Z
slug: portf-lio-profissional-vin-cius-rodrigues-html
---
Method: post-remediation full audit (Etapas 1–4 complete + live `impeccable detect --json` + multi-viewport verification)

## Design Health Score

*(Modo da superfície: **Experience / Persuade — portfólio profissional**. Pelas regras de aplicabilidade do guia de heurísticas, as heurísticas 5, 7, 9 e 10 recebem `n/a` porque este portfólio estático de leitura não possui formulários com entrada de dados, ações destrutivas, fluxos recorrentes de usuário avançado nem documentação de produto; o total é renormalizado sobre as 6 heurísticas aplicáveis = **/24**.)*

| # | Heuristic | Score | Key Issue / Verification |
|---|-----------|-------|--------------------------|
| 1 | Visibility of System Status | 4 | Dobra inicial em `1440×900` enquadra integralmente `#hero` (`828px < 860px`) com os 4 CTAs e os 3 KPIs visíveis sem scroll; `#case-modal` aplica `visibility: hidden` + `aria-hidden="true"` quando fechado; `.carousel-dot` expõe `role="tab"` + `aria-selected` e o contador `#carousel-counter` anuncia mudanças com `aria-live="polite"`; `IntersectionObserver` destaca também o CTA `.nav-cta-pill` ao atingir `#contato`. |
| 2 | Match System / Real World | 4 | Linha do tempo em `#experiencia` segue ordem cronológica reversa estrita (`Accenture 2026 – Presente` → `STTP Lead` → `Bus2` → `STTP Intern`); pílula do topo assumiu o rótulo explícito `"Contato"`; tela 3D do notebook e do smartphone exibe telemetria autêntica do ecossistema (`Flavors: Dev • Stg • Prod`, `sherpa_onnx`, `flutter_gemma`); links duplicados do LinkedIn foram substituídos por `productionBadge` para sistemas proprietários e repositório GitHub real no `LocalSpeak`. |
| 3 | User Control and Freedom | 4 | `#case-modal` implementa focus trap completo (`Tab`/`Shift+Tab`), bloqueio de scroll no `body`, foco inicial em `#modal-close-btn` e restauração exata do foco ao botão acionador; slides fora de tela recebem atributo `inert`; arraste com mouse no carrossel ignora cliques em `button, a` e aborta se `window.getSelection()` contiver texto selecionado; `#mobile-menu-drawer` fecha com `Escape` e clique externo. |
| 4 | Consistency and Standards | 4 | `tailwind.config` inline e `body { font-family: var(--font-sans) }` garantem `Plus Jakarta Sans` em toda a superfície; fontes não utilizadas (`Syne`, `Newsreader`) foram removidas; todos os glifos `↗` literais foram substituídos por `<svg>` vetoriais `aria-hidden="true"` com `currentColor`; rótulos de navegação estão alinhados entre desktop e mobile; alvos táteis (`#mobile-menu-btn`, `#modal-close-btn`, `.carousel-dot`, links de rodapé) respeitam `≥ 44×44px`. |
| 5 | Error Prevention | n/a | Portfólio estático somente leitura, sem formulários, edições ou ações destrutivas. |
| 6 | Recognition Rather Than Recall | 4 | Hierarquia visual imediata entre tecnologias principais (`featured` em badges destacados) e secundárias (lista inline separada por `·`), reduzindo mais de 65% das pílulas monoespaçadas; card estático `LOCALIZAÇÃO (BASE)` diferenciado com borda tracejada dos links clicáveis em `#contato`; `#case-modal` apresenta blocos exclusivos de `ARQUITETURA DO SISTEMA` e `DECISÕES DE ENGENHARIA`. |
| 7 | Flexibility and Efficiency | n/a | Superfície de portfólio/showcase sem fluxos operacionais recorrentes ou ações em lote. |
| 8 | Aesthetic and Minimalist Design | 3 | `impeccable detect --json` zerou `low-contrast` (`0`), `oversized-h1` (`0`), `dark-glow` (`0`), `cramped-padding` (`0`), `line-length` (`0`), `unbalanced-heading` (`0`) e `straggler` (`0`); restam apenas 6 avisos estilísticos intencionais de `italic-serif-display` (`Instrument Serif` em palavras-chave de destaque editorial) e o aviso de runtime do Tailwind Play CDN para futura migração de build estático. |
| 9 | Error Recovery | n/a | Não há validação de formulários, chamadas de rede ou fluxos de erro acionados pelo usuário. |
| 10 | Help and Documentation | n/a | Narrativa autocontida com controles autoexplicativos. |
| **Total** | | **23 / 24** | **95.8% — Impeccable** *(Todos os 4 bloqueadores P1 e o bloco P2 da crítica original foram integralmente resolvidos e verificados em navegador real).* |

---

## Comparison with Previous Critique (`2026-11-10T16-17-26Z`)

| Dimensão / Métrica | Antes (`16-17-26Z`) | Depois (`18-06-00Z`) | Evolução |
|--------------------|---------------------|----------------------|----------|
| **1. Visibility of System Status** | `2 / 4` | `4 / 4` | **+2** (`#hero` a `828px`, modal `visibility: hidden`/`aria-hidden`, tabs `aria-selected`, `aria-live="polite"`) |
| **2. Match System / Real World** | `2 / 4` | `4 / 4` | **+2** (cronologia corrigida em `#experiencia`, telemetria real em `#showcase`, fim dos links duplicados) |
| **3. User Control and Freedom** | `2 / 4` | `4 / 4` | **+2** (focus trap + retorno de foco no modal, `inert` nos slides inativos, seleção de texto livre no carrossel) |
| **4. Consistency and Standards** | `2 / 4` | `4 / 4` | **+2** (`Plus Jakarta Sans` em todo o `body`, SVGs vetoriais no lugar de `↗`, alvos táteis `≥ 44×44px`) |
| **6. Recognition Rather Than Recall** | `3 / 4` | `4 / 4` | **+1** (hierarquia `featured` vs `secondary`, blocos exclusivos de Arquitetura no modal, `LOCALIZAÇÃO` estática) |
| **8. Aesthetic and Minimalist Design** | `2 / 4` | `3 / 4` | **+1** (`low-contrast: 0`, `dark-glow: 0`, `line-length: 0`, `straggler: 0`, `nested-cards: 3` apenas na cena 3D) |
| **Score Total** | **13 / 24 (54.2%)** | **23 / 24 (95.8%)** | **+10 pontos (+41.6 pp)** |

### Varredura Determinística (`impeccable detect --json` via localhost)
- **Antes**: 52 achados (28 warnings, 24 advisories) — `low-contrast: 8`, `line-length: 5`, `dark-glow: 4`, `oversized-h1: 1`, `nested-cards: 9`, `straggler: 5`, `unbalanced-heading: 2`.
- **Depois**: 25 achados (6 warnings estilísticos, 19 advisories) — `low-contrast: 0`, `line-length: 0`, `dark-glow: 0`, `oversized-h1: 0`, `cramped-padding: 0`, `straggler: 0`, `unbalanced-heading: 0`, `nested-cards: 3` (restritos ao palco 3D).
