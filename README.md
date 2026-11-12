# Portfólio Profissional — Vinícius Rodrigues Barros

Portfólio web interativo desenvolvido para apresentar a trajetória, decisões arquiteturais, estudos de caso e stack técnica de **Vinícius Rodrigues Barros** — **Mobile & Full Stack Software Engineer** especializado em **Flutter, Dart, Kotlin, React e NestJS**.

- **Deploy no GitHub Pages**: [https://vinirodrigbarros.github.io/ViniciusRodriguesPortfolio/](https://vinirodrigbarros.github.io/ViniciusRodriguesPortfolio/)

O projeto foi construído sem etapa de compilação (*zero-build*), combinando HTML5 semântico, CSS3 editorial, Tailwind CSS, GSAP (ScrollTrigger) e WebGL interativo com foco em desempenho, legibilidade (WCAG AA/AAA) e responsividade entre desktop, tablet e mobile.

---

## Principais Recursos & Seções

1. **Hero Editorial & Canvas Topográfico (`#hero`)**
   - Background topográfico procedural interativo em Canvas 2D (`TopoHeroBackground`), com relevo contínuo reativo ao ponteiro, ondas de clique e máscara de legibilidade sobre o conteúdo textual.
   - Grid assimétrico integrando apresentação, retrato em estúdio com recorte alpha (`assets/foto1.png`) e **3 cards interativos** de empresas (**STTP**, **Bus2** e **Accenture**) que abrem modais de detalhamento arquitetural.

2. **Showcase 3D Interativo Leve (`#showcase`)**
   - Composição em **Three.js (WebGL PBR)** (`WorkstationShowcase3D`) otimizada com inicialização preguiçosa (`IntersectionObserver`), pausa automática fora da tela e baixa carga gráfica (**18 draw calls / 2.762 triângulos**).
   - **Notebook único centralizado** exibindo na tela uma IDE Dark com código Dart/Flutter, terminal integrado (`flutter run`) e emulador mobile docado, cercado por **4 ícones 3D esculpidos** (`{ }`, `Dart`, `</>` e `Python`) com órbita por arraste, paralaxe e destaque ao passar o cursor.
   - Render de estúdio (`assets/showcase-workstation.jpg`) configurado como fallback visual automático quando WebGL não estiver disponível.

3. **Perfil & Experiência em Produção (`#sobre`, `#experiencia`)**
   - Cálculo dinâmico de anos de experiência a partir de `PORTFOLIO_CONFIG.careerStartDate`.
   - Linha do tempo com trilho vertical guiado pelo scroll (`scaleY`) detalhando liderança técnica, migrações arquiteturais e entregas em produção na Accenture, STTP e Bus2.

4. **Projetos & Engenharia (`#projetos`)**
   - Carrossel acessível com navegação por setas, indicadores, arraste horizontal e atalhos de teclado (`←` / `→`), acompanhado de modal técnico completo:
     - **AppBus2 v5** — Unificação multi-flavor com Flutter Flavors e Dart Isolates.
     - **NEAT (STTP)** — Mapeamento geoespacial Offline-First com SQLite, sync queue e Google Maps API.
     - **Bus2Driver** — Telemetria veicular em tempo real com streams bidirecionais WebSocket e cálculo de ETA.
     - **LocalSpeak** — TCC em Engenharia de Computação (IFPB) executando LLMs quantizados (`flutter_gemma`) e STT/TTS (`sherpa_onnx`) 100% on-device.
     - **SyncFlow** — Projeto pessoal de estudo offline-first com React Native (Expo), WatermelonDB e API multi-tenant em NestJS + Prisma + MySQL.
     - **FibroSaúde (STTP)** — Aplicativo público oficial (Google Play e App Store) da Prefeitura de Campina Grande / STTP para cadastro e emissão de carteira digital de fibromialgia.
     - **Transitolândia (STTP)** — Aplicativo educativo oficial (Google Play) com minigames lúdicos sobre segurança e sinalização viária.
     - **SOS Hemofilia (STTP)** — Aplicativo de suporte rápido com alertas automáticos baseados em geolocalização para urgências médicas (Google Play).
     - **Bus2 Operação** — Aplicativo corporativo interno da Bus2 para monitoramento e gestão em tempo real da frota por operadores e equipes de campo.
     - **FinTracker** — Trabalho acadêmico combinando Padrões de Projeto em backend Java (Maven/Docker) e aplicativo móvel React Native para gestão financeira pessoal.
     - **Ingrid Cunha — Landing Page Clínica** — Projeto pessoal web responsivo em HTML5, CSS3 e JavaScript desenvolvido para clínica de psicologia infantojuvenil (GitHub Pages).

5. **Stack, Ferramentas & Engenharia com IA (`#stack`)**
   - **Matriz Técnica (`#stack-grid`)**: 6 grupos cobrindo Mobile Development, Clean Architecture/Patterns, APIs em tempo real, QA/CI/CD, Backend/Web e Metodologias.
   - **Subseção Especial — Inteligência Artificial & Engenharia Aumentada (`#stack-ai-subsection`)**: grid de 3 cards em superfície fosca com borda hairline em gradiente cobrindo:
     - *Ferramentas e LLMs*: Gemini, Anti-Gravity AI, GitHub Copilot, Cursor e Claude.
     - *Arquitetura Orientada a IA*: Engenharia de Sistemas Complexos Full-Stack e nativos.
     - *Inteligência & Automação*: Orquestração de agentes, skills personalizadas e automação de fluxos.

6. **Formação Acadêmica & Contato (`#formacao`, `#contato`)**
   - Formação em Engenharia de Computação no **IFPB** e proficiência em idiomas.
   - Canais de contato com botão de cópia rápida de e-mail para área de transferência e menu mobile acessível com controle de foco.

---

## Sistema Visual & Tecnologias Utilizadas

- **Paleta Editorial**: Dark Charcoal (`#0B0B0D` / `#111114`), Warm Ivory (`#F5F1E8`) e Burnt Orange (`#F0783C` / `#FF9A5C`).
- **Tipografia**: `Plus Jakarta Sans` (interface e títulos), `Instrument Serif` (ênfases editoriais em itálico) e `JetBrains Mono` (metadados técnicos e código).
- **Tecnologias da Página**:
  - HTML5 semântico + [Tailwind CSS](https://tailwindcss.com/) (via CDN)
  - CSS3 customizado em `styles.css` (suporte integral a `prefers-reduced-motion`)
  - JavaScript modular vanilla em `script.js` (`PORTFOLIO_DATA`, `TopoHeroBackground`, `WorkstationShowcase3D`, `UIComponents`, `NavigationController`, `AnimationController`)
  - [GSAP 3.12.5 + ScrollTrigger](https://gsap.com/) (via CDN)
  - [Three.js r128](https://threejs.org/) (via CDN)

---

## Estrutura de Arquivos

```text
ViniRb/
├── index.html                           # Página principal (GitHub Pages entry point) e estrutura das seções
├── .nojekyll                            # Desativa processamento Jekyll no GitHub Pages
├── styles.css                           # Tokens, estilos editoriais, superfície fosca e responsividade
├── script.js                            # Dados estruturados, canvas topográfico, cena 3D e UI/animações
├── README.md                            # Documentação do projeto
└── assets/
    ├── foto1.png                        # Retrato editorial com transparência
    ├── foto1_original.png               # Arquivo original do retrato
    ├── showcase-workstation.jpg         # Fallback visual em alta resolução do showcase 3D
    └── logos/
        ├── accenture.png
        ├── bus2.png
        └── sttp.png
```

---

## Como Executar Localmente

Por utilizar carregamento de fontes, módulos DOM e WebGL sem restrições de origem local, recomenda-se servir o diretório via HTTP local (em vez de abrir diretamente por `file://`):

```bash
# Opção 1: Python
python -m http.server 8080

# Opção 2: Node.js
npx serve . -l 8080
```

Em seguida, acesse no navegador:

```text
http://localhost:8080/
```

---

## Contato

- **GitHub**: [@ViniRodrigBarros](https://github.com/ViniRodrigBarros)
- **LinkedIn**: [/in/vinicius-rodrigues-948656225](https://www.linkedin.com/in/vinicius-rodrigues-948656225/)
- **E-mail**: `vinicius.rodrigues.barros@gmail.com`
