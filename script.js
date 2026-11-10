/**
 * ==========================================================================
 * 7. PORTFOLIO CONFIGURATION
 * ==========================================================================
 */
const PORTFOLIO_CONFIG = Object.freeze({
  selectors: {
    header: '#site-header',
    navLinks: '.nav-link',
    mobileMenuBtn: '#mobile-menu-btn',
    mobileMenuDrawer: '#mobile-menu-drawer',
    mobileNavLinks: '.mobile-nav-link',
    menuIconOpen: '#menu-icon-open',
    menuIconClose: '#menu-icon-close',
    notebookAssembly: '#notebook-assembly',
    notebookLid: '#notebook-lid',
    notebookScreenUI: '#notebook-screen-ui',
    phoneAssembly: '#phone-assembly',
    phoneScreenUI: '#phone-screen-ui',
    experienceContainer: '#experience-timeline',
    carouselViewport: '#carousel-viewport',
    carouselTrack: '#carousel-track',
    carouselPrevBtn: '#carousel-prev-btn',
    carouselNextBtn: '#carousel-next-btn',
    carouselDots: '#carousel-dots',
    carouselCurrentIndex: '#carousel-current-index',
    carouselTotalCount: '#carousel-total-count',
    stackGrid: '#stack-grid',
    educationContainer: '#education-container',
    caseModal: '#case-modal',
    modalTitle: '#modal-title',
    modalCategory: '#modal-category',
    modalBody: '#modal-body',
    modalCloseBtn: '#modal-close-btn',
    copyEmailBtn: '#copy-email-btn',
    copyEmailLabel: '#copy-email-label'
  },
  contact: {
    email: 'vinicius.rodrigues.barros@gmail.com',
    phone: '+55 83 99832-6890',
    github: 'https://github.com/ViniRodrigBarros',
    linkedin: 'https://www.linkedin.com/in/vinicius-rodrigues-948656225/'
  }
});

/**
 * ==========================================================================
 * 8. PORTFOLIO DATA (VERIFIED CURRICULUM & REAL PROFESSIONAL TRAJECTORY)
 * ==========================================================================
 */
const PORTFOLIO_DATA = Object.freeze({
  experiences: [
    {
      id: 'accenture',
      company: 'Accenture',
      role: 'Software Developer (Full Stack & Mobile Engineering)',
      period: '2026 – Presente • Projetos Corporativos',
      location: 'Campina Grande, PB / Híbrido',
      metrics: [
        'Engenharia Corporativa em Larga Escala',
        'Clean Architecture & Microsserviços'
      ],
      summary: 'Engenharia full stack e mobile em sistemas corporativos críticos, integrando interfaces reativas a arquiteturas distribuídas orientadas a microsserviços.',
      responsibilities: [
        'Arquitetura e implementação de módulos escaláveis seguindo Clean Architecture, princípios SOLID e diretrizes rigorosas de governança técnica e qualidade.',
        'Integração ponta a ponta entre aplicações mobile/front-end (Flutter, Kotlin, React, TypeScript) e APIs distribuídas em NestJS e Java (Spring Boot) em ciclos ágeis Scrum.'
      ],
      coreTechnologies: ['Flutter', 'React', 'NestJS'],
      secondaryTechnologies: ['Kotlin', 'TypeScript', 'Clean Architecture', 'Microsserviços', 'Scrum', 'Git Flow']
    },
    {
      id: 'sttp-lead',
      company: 'STTP (Superintendência de Trânsito e Transportes Públicos)',
      role: 'Mobile Development Lead | Flutter Developer (Mid-Level)',
      period: 'Dez 2024 – Presente',
      location: 'Campina Grande, PB',
      metrics: [
        '+25% velocidade de sprint',
        '-30% defeitos em produção',
        '5+ apps móveis em produção'
      ],
      summary: 'Liderança técnica da frente mobile municipal, coordenando a arquitetura, qualidade de código e evolução de mais de 5 aplicativos públicos em operação.',
      responsibilities: [
        'Direcionamento técnico da equipe mobile, conduzindo processos de Code Review, padronização em BLoC/Clean Architecture e mentoria direta de desenvolvedores juniores.',
        'Elevação da velocidade de entrega em 25% nas sprints e redução de 30% em defeitos em produção por meio de governança técnica e modularização.',
        'Concepção e sustentação de sistemas Android e iOS integrados a APIs REST, Firebase, SQLite e Google Maps, ampliando em 20% a eficiência operacional das equipes de campo.'
      ],
      coreTechnologies: ['Flutter', 'Dart', 'Clean Architecture'],
      secondaryTechnologies: ['BLoC / Cubit', 'REST APIs', 'Firebase', 'SQLite', 'Google Maps API', 'Technical Leadership', 'Code Review']
    },
    {
      id: 'bus2',
      company: 'Bus2',
      role: 'Flutter Mobile Developer',
      period: 'Fev 2023 – Out 2025',
      location: 'Remoto / Escala Internacional',
      metrics: [
        '-75% overhead de repositórios',
        '-40% tempo de startup',
        '+35% coordenação de frota'
      ],
      summary: 'Unificação arquitetural de dezenas de variantes regionais de mobilidade urbana em um único ecossistema Flutter de alta performance para milhões de passageiros.',
      responsibilities: [
        'Execução da migração completa do AppBus2 v5 de múltiplos repositórios isolados para codebase único com Flutter Flavors (dev, staging, production), reduzindo em 75% o overhead de repositórios e acelerando entregas em 60%.',
        'Otimização crítica de inicialização (-40% startup time), processamento paralelo off-thread com Dart Isolates e comunicação nativa via Method Channels.',
        'Engenharia integral do aplicativo operacional Bus2Driver com telemetria bidirecional via WebSocket e cálculo de ETA em tempo real (+35% em coordenação de frota).',
        'Sistematização de esteiras CI/CD multi-flavor com code signing e publicação automatizada na Google Play e App Store, reduzindo releases de horas para minutos.'
      ],
      coreTechnologies: ['Flutter Flavors', 'Dart Isolates', 'WebSocket'],
      secondaryTechnologies: ['Flutter', 'Dart', 'Method Channels', 'Google Maps API', 'Geolocalização', 'CI/CD Pipelines', 'App Store & Google Play']
    },
    {
      id: 'sttp-intern',
      company: 'STTP (Superintendência de Trânsito e Transportes Públicos)',
      role: 'Flutter Mobile Developer (Intern → Junior)',
      period: 'Jan 2022 – Nov 2024',
      location: 'Campina Grande, PB',
      metrics: [
        '-50% tempo de deploy (CI/CD)',
        '80%+ cobertura de testes',
        '-40% bugs em produção'
      ],
      summary: 'Fundação da infraestrutura de automação CI/CD, cultura de testes automatizados e aplicativos offline-first para fiscalização e engenharia de tráfego.',
      responsibilities: [
        'Projeto e implantação das primeiras esteiras de CI/CD para build, versionamento, testes e publicação contínua nas lojas, reduzindo o tempo de deploy pela metade (-50%).',
        'Implementação de suítes de testes automatizados (Unit e Widget Tests) atingindo mais de 80% de cobertura de código e redução de 40% em regressões em produção.',
        'Desenvolvimento de aplicações multiplataforma em Flutter/Dart com persistência offline em SQLite, sincronização Firebase/REST e mapeamento via Google Maps API.'
      ],
      coreTechnologies: ['Flutter', 'CI/CD Automation', 'Unit & Widget Testing'],
      secondaryTechnologies: ['Dart', 'SQLite', 'Firebase (Auth, Firestore, Analytics)', 'Google Maps API', 'REST APIs']
    }
  ],

  projects: [
    {
      id: 'appbus2-v5',
      index: '01',
      companyOrContext: 'Bus2 • Escala Internacional',
      categoryLabel: 'Unificação Arquitetural & Alta Performance',
      title: 'AppBus2 v5 — Unificação Multi-Flavor em Escala',
      subtitle: 'Unificação de múltiplas variantes regionais para milhões de usuários em uma base de código única em Flutter com Flavors.',
      description: 'Dezenas de variantes regionais distribuídas em múltiplos repositórios geravam alto custo de manutenção, duplicação de regras de negócio e demora em releases para milhões de usuários combinados.',
      problemSolved: 'Refatoração completa para arquitetura limpa unificada com Flutter Flavors (dev, staging, production), Dart Isolates off-thread e CI/CD automatizado (-75% repositórios, +60% velocidade de entrega e -40% startup time).',
      architectureOverview: 'Estruturação modular baseada em Clean Architecture + BLoC/Cubit com injeção de dependência desacoplada por variante. Cada cidade/operadora passou a ser resolvida em tempo de compilação via configurações de Flavor e tokens de feature flag, compartilhando 100% do domínio e da camada de rede.',
      keyDecisions: [
        'Isolamento do parsing pesado de JSON geoespacial e decodificação de ativos em Dart Isolates dedicados, evitando frame drops na UI thread e reduzindo o cold start em 40%.',
        'Abstração de integrações nativas Android (Kotlin) e iOS (Swift) via Method Channels padronizados para geolocalização e notificações push.',
        'Esteira CI/CD parametrizada por flavor com assinatura automática (Keystore / Fastlane Match), reduzindo o tempo de distribuição nas lojas de horas para minutos.'
      ],
      myRole: 'Execução da refatoração arquitetural completa para codebase único com Flavors, otimização de inicialização (-40% startup) com Dart Isolates e Method Channels, e automação das esteiras de CI/CD.',
      metrics: [
        '-75% overhead de repositórios',
        '+60% velocidade de entrega',
        '-40% startup time',
        'Releases reduzidos de horas para minutos'
      ],
      technologies: ['Flutter', 'Dart', 'Clean Architecture', 'Flutter Flavors', 'Dart Isolates', 'Method Channels', 'CI/CD Automation'],
      productionBadge: 'Sistema em Produção • Bus2 (Android & iOS)',
      linkLabel: null,
      linkUrl: null
    },
    {
      id: 'neat-sttp',
      index: '02',
      companyOrContext: 'STTP • Mobilidade Urbana & Segurança Viária',
      categoryLabel: 'Arquitetura Offline-First & Geolocalização',
      title: 'NEAT (STTP) — Mapeamento Geoespacial Offline-First',
      subtitle: 'Aplicativo concebido e entregue de ponta a ponta em Flutter/Dart para coleta e mapeamento geoespacial de sinistros viários.',
      description: 'Equipes técnicas de campo precisavam registrar e mapear sinistros de trânsito em tempo real, inclusive em zonas sem conectividade móvel, para embasar obras de infraestrutura viária.',
      problemSolved: 'Concepção e desenvolvimento de ponta a ponta em Flutter/Dart com motor de sincronização offline-first (SQLite + fila transacional REST/Firebase) e plotagem geoespacial via Google Maps API.',
      architectureOverview: 'Arquitetura em camadas (Presentation, Domain, Data) na qual toda mutação de campo é gravada primariamente em tabelas SQLite locais com controle de estado de sincronismo (pending, syncing, synced, conflict) e enviada em background assim que a conectividade é restabelecida.',
      keyDecisions: [
        'Modelagem de fila de sincronização resiliente em SQLite com retry exponencial e idempotência para evitar perda ou duplicidade de laudos em áreas de sombra de rede.',
        'Clusterização customizada de marcadores no Google Maps SDK para renderizar manchas de calor e cruzamentos críticos sem degradar a taxa de quadros.',
        'Geração automatizada de relatórios operacionais estruturados que elevaram em 20% a produtividade das equipes de engenharia de tráfego.'
      ],
      myRole: 'Concepção e desenvolvimento completo de ponta a ponta em Flutter/Dart, modelagem do banco offline-first em SQLite, sincronização Firebase/REST e visualização geoespacial.',
      metrics: [
        'Coleta georreferenciada em tempo real',
        'Motor Offline-First (SQLite + Sync Queue)',
        '+20% eficiência operacional em campo'
      ],
      technologies: ['Flutter', 'Dart', 'Google Maps API', 'SQLite', 'Firebase', 'REST APIs', 'Clean Architecture'],
      productionBadge: 'Sistema Oficial em Produção • STTP',
      linkLabel: null,
      linkUrl: null
    },
    {
      id: 'bus2driver',
      index: '03',
      companyOrContext: 'Bus2 • Operação de Frotas em Tempo Real',
      categoryLabel: 'WebSocket Telemetry & Live Tracking',
      title: 'Bus2Driver — Telemetria Veicular & Streams WebSocket',
      subtitle: 'Coordenação operacional em tempo real entre motoristas e central com cálculo preciso de ETA via streams WebSocket.',
      description: 'Operações de transporte público exigiam coordenação contínua entre motoristas e central de controle, com atualização sub-segundo de posicionamento e recálculo dinâmico de ETA.',
      problemSolved: 'Engenharia completa do aplicativo operacional utilizando streams bidirecionais WebSocket, geolocalização contínua em background e cálculo de ETA em tempo real (+35% na coordenação de frota).',
      architectureOverview: 'Arquitetura reativa orientada a eventos em que um gerenciador de conexão WebSocket mantém heartbeat automático, reconexão com backoff e buffer local de pacotes de telemetria GPS, alimentando estados imutáveis via BLoC/Cubit.',
      keyDecisions: [
        'Implementação de protocolo bidirecional via WebSocket com serialização enxuta e throttling adaptativo de GPS conforme velocidade do veículo para economizar bateria.',
        'Buffer local de eventos de telemetria durante túneis ou quedas momentâneas de sinal, garantindo integridade do histórico de rota na central.',
        'Interface de alta legibilidade projetada para uso veicular com contraste reforçado e feedback imediato de adiantamento/atraso de tabela horária.'
      ],
      myRole: 'Criação do zero do aplicativo em Flutter, arquitetura da camada de streaming WebSocket, serviço de geolocalização contínua e integração com Google Maps SDK.',
      metrics: [
        '+35% eficiência na coordenação de frota',
        'Streams bidirecionais via WebSocket',
        'Cálculo de ETA e rota em tempo real'
      ],
      technologies: ['Flutter', 'Dart', 'WebSocket', 'Google Maps API', 'Geolocation Services', 'BLoC / Cubit', 'REST APIs'],
      productionBadge: 'Sistema Operacional em Produção • Bus2',
      linkLabel: null,
      linkUrl: null
    },
    {
      id: 'localspeak',
      index: '04',
      companyOrContext: 'TCC Engenharia de Computação • IFPB',
      categoryLabel: 'IA On-Device & Offline Mobile Architecture',
      title: 'LocalSpeak — Conversação em Inglês com IA 100% On-Device',
      subtitle: 'Execução local de LLMs (Qwen / Gemma) e motores offline de STT/TTS diretamente no dispositivo móvel em Flutter.',
      description: 'Soluções tradicionais de conversação com IA dependem de APIs em nuvem com alto custo por token, latência variável de rede e envio externo de dados biométricos de voz.',
      problemSolved: 'Arquitetura mobile em Flutter capaz de executar LLMs quantizados (Qwen / Gemma via flutter_gemma) e motores neurais de STT/TTS (sherpa_onnx) 100% offline no próprio smartphone.',
      architectureOverview: 'Pipeline assíncrono em três estágios locais (Speech-to-Text → LLM Inference → Text-to-Speech) orquestrado em Clean Architecture, gerenciando alocação de modelos em memória nativa C++/ONNX Runtime sem bloquear a thread de interface do Flutter.',
      keyDecisions: [
        'Integração nativa com sherpa_onnx para transcrição de fala (STT) de baixa latência e síntese de voz (TTS) com fila assíncrona de reprodução por sentença.',
        'Execução de modelos locais quantizados via flutter_gemma com controle estrito de janela de contexto para manter consumo de RAM estável em aparelhos intermediários.',
        'Projeto disponibilizado integralmente como código aberto no GitHub como referência de IA embarcada em Flutter.'
      ],
      myRole: 'Pesquisa arquitetural e engenharia completa do aplicativo em Flutter, integrando inferência LLM on-device (flutter_gemma) e pipeline neural offline de voz (sherpa_onnx).',
      metrics: [
        'Inferência LLM + STT/TTS 100% On-Device',
        'Zero latência de rede e privacidade total',
        'Código aberto verificável no GitHub'
      ],
      technologies: ['Flutter', 'Dart', 'Local LLM (Qwen / Gemma)', 'flutter_gemma', 'sherpa_onnx (Offline STT/TTS)', 'Clean Architecture'],
      productionBadge: 'Pesquisa Aplicada & Open Source • IFPB',
      linkLabel: 'Repositório no GitHub',
      linkUrl: 'https://github.com/ViniRodrigBarros/tcc_speak_lab'
    }
  ],

  techStack: [
    {
      category: 'Mobile Development',
      code: '01 / MOBILE',
      description: 'Desenvolvimento multiplataforma (Android & iOS) e nativo, da concepção à publicação nas lojas.',
      featured: ['Flutter', 'Dart', 'Kotlin'],
      secondary: ['Jetpack Compose', 'React Native', 'Swift (Básico)', 'Method Channels', 'Dart Isolates']
    },
    {
      category: 'Architecture & Patterns',
      code: '02 / ARCHITECTURE',
      description: 'Padrões de projeto e gerenciamento de estado voltados à escalabilidade e testabilidade.',
      featured: ['Clean Architecture', 'BLoC & Cubit', 'MVVM & MVC'],
      secondary: ['Riverpod & Provider', 'Flutter Modular', 'Princípios SOLID']
    },
    {
      category: 'Mobile Tools & Real-Time APIs',
      code: '03 / APIS & SERVICES',
      description: 'Integrações em tempo real, geolocalização, telemetria e serviços em nuvem.',
      featured: ['WebSocket', 'Google Maps API', 'Firebase Suite'],
      secondary: ['Geolocation Services', 'REST APIs', 'Push Notifications', 'Payment Integration']
    },
    {
      category: 'Testing, CI/CD & Store Release',
      code: '04 / QUALITY & DEVOPS',
      description: 'Automação de builds, testes automatizados e gestão de releases multi-flavor.',
      featured: ['GitHub Actions', 'Unit & Widget Testing', 'Integration Testing'],
      secondary: ['Jenkins', 'Code Signing', 'Google Play Console', 'App Store Connect']
    },
    {
      category: 'Data, Backend & Frontend Web',
      code: '05 / FULL STACK & DATA',
      description: 'Persistência local, bancos de dados e desenvolvimento web/backend moderno.',
      featured: ['React', 'NestJS', 'TypeScript'],
      secondary: ['SQLite & Shared Preferences', 'Java (Spring Boot)', 'SQL & MongoDB', 'HTML5 & CSS3', 'Python, C & C++']
    },
    {
      category: 'AI, Leadership & Workflow',
      code: '06 / AI & METHODOLOGY',
      description: 'IA local e em nuvem, liderança técnica e metodologias ágeis.',
      featured: ['Local LLM Deployment', 'Technical Leadership', 'Code Review'],
      secondary: ['LLM APIs (OpenAI, Claude)', 'Computer Vision (MediaPipe)', 'Scrum & Jira', 'Git Flow', 'Figma']
    }
  ],

  education: {
    institution: 'Instituto Federal da Paraíba (IFPB)',
    degree: 'Bacharelado em Engenharia de Computação',
    period: '2021 – Presente',
    location: 'Campina Grande, PB',
    description: 'Formação acadêmica em Engenharia de Computação com foco em arquitetura de software, estruturas de dados, sistemas distribuídos, inteligência artificial embarcada e engenharia de sistemas.',
    languages: [
      { lang: 'Inglês', level: 'Avançado (Professional Working Proficiency)' },
      { lang: 'Português', level: 'Nativo' },
      { lang: 'Espanhol', level: 'Básico' }
    ]
  }
});

/**
 * ==========================================================================
 * 9. DOM UTILITIES
 * ==========================================================================
 */
const DOMUtils = {
  qs(selector, scope = document) {
    return scope.querySelector(selector);
  },
  qsa(selector, scope = document) {
    return Array.from(scope.querySelectorAll(selector));
  },
  escapeHTML(str) {
    if (typeof str !== 'string') return '';
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  },
  prefersReducedMotion() {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }
};

/**
 * ==========================================================================
 * 10. UI COMPONENTS (EXPERIENCE, CAROUSEL, STACK, EDUCATION & MODAL)
 * ==========================================================================
 */
const UIComponents = {
  lastModalTrigger: null,

  renderExperience() {
    const container = DOMUtils.qs(PORTFOLIO_CONFIG.selectors.experienceContainer);
    if (!container) return;

    container.innerHTML = PORTFOLIO_DATA.experiences.map((exp, idx) => `
      <article class="exp-row reveal-block">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          <!-- Left Column: Company, Role & Period -->
          <div class="lg:col-span-4 flex flex-col justify-between">
            <div>
              <div class="font-mono-meta text-xs text-[#FF9A5C]">
                0${idx + 1} — ${DOMUtils.escapeHTML(exp.period)}
              </div>
              <h3 class="text-xl md:text-2xl font-semibold text-[#F5F1E8] mt-2 leading-snug">
                ${DOMUtils.escapeHTML(exp.company)}
              </h3>
              <div class="text-sm font-medium text-[#AAA6A0] mt-1">
                ${DOMUtils.escapeHTML(exp.role)}
              </div>
              <div class="font-mono-meta text-xs text-[#8E8A84] mt-1">
                ${DOMUtils.escapeHTML(exp.location)}
              </div>
            </div>

            <!-- Key Impact Metrics -->
            <div class="flex flex-wrap gap-2 mt-6">
              ${exp.metrics.map(m => `
                <span class="metric-badge">
                  ${DOMUtils.escapeHTML(m)}
                </span>
              `).join('')}
            </div>
          </div>

          <!-- Right Column: Summary, Responsibilities & Tech -->
          <div class="lg:col-span-8 space-y-5">
            <p class="text-[#F5F1E8] text-base md:text-lg leading-relaxed max-w-prose">
              ${DOMUtils.escapeHTML(exp.summary)}
            </p>

            <ul class="space-y-3 max-w-prose">
              ${exp.responsibilities.map(item => `
                <li class="flex items-start gap-3 text-[#AAA6A0] text-sm md:text-base leading-relaxed">
                  <span class="w-1.5 h-1.5 rounded-full bg-[#F0783C] mt-2.5 shrink-0"></span>
                  <span>${DOMUtils.escapeHTML(item)}</span>
                </li>
              `).join('')}
            </ul>

            <div class="pt-4 border-t border-[#F5F1E8]/10 flex flex-wrap items-center gap-2">
              ${exp.coreTechnologies.map(t => `
                <span class="px-2.5 py-1 rounded text-xs font-mono-meta bg-[#19191E] text-[#F5F1E8] border border-[#F0783C]/35">
                  ${DOMUtils.escapeHTML(t)}
                </span>
              `).join('')}
              <span class="font-mono-meta text-xs text-[#AAA6A0] ml-1">
                ${exp.secondaryTechnologies.map(t => DOMUtils.escapeHTML(t)).join(' · ')}
              </span>
            </div>
          </div>
        </div>
      </article>
    `).join('');
  },

  renderProjectVisual(project) {
    if (project.id === 'appbus2-v5') {
      return `
        <div class="w-full h-full min-h-[320px] lg:pl-10 lg:border-l border-[#F5F1E8]/10 flex flex-col justify-between py-2">
          <div class="flex items-center justify-between border-b border-[#F5F1E8]/10 pb-3">
            <span class="font-mono-meta text-xs text-[#FF9A5C]">ARCH // UNIFIED FLUTTER CODEBASE</span>
            <span class="font-mono-meta text-xs text-[#F5F1E8]">MILLIONS OF USERS</span>
          </div>

          <div class="my-6 grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-[#F5F1E8]/10">
            <div class="py-3 sm:py-1 sm:pr-4">
              <div class="font-mono-meta text-[10px] text-[#8E8A84]">CENÁRIO ANTERIOR</div>
              <div class="text-sm font-semibold text-[#F5F1E8] mt-1">Multi-Repositórios</div>
              <div class="text-xs text-[#AAA6A0] mt-1">Alto custo de sincronização entre variantes regionais</div>
            </div>

            <div class="py-3 sm:py-1 sm:px-4">
              <div class="font-mono-meta text-[10px] text-[#FF9A5C]">ARQUITETURA V5</div>
              <div class="text-base font-semibold text-[#F5F1E8] mt-1">Codebase Único</div>
              <div class="font-mono-meta text-[11px] text-[#FF9A5C] mt-1">Flavors: Dev • Stg • Prod</div>
            </div>

            <div class="py-3 sm:py-1 sm:pl-4">
              <div class="font-mono-meta text-[10px] text-[#FF9A5C]">RESULTADO EM PRODUÇÃO</div>
              <div class="text-sm font-semibold text-[#F5F1E8] mt-1">-75% Overhead</div>
              <div class="text-xs text-[#AAA6A0] mt-1">+60% velocidade de entrega de features</div>
            </div>
          </div>

          <div class="grid grid-cols-3 gap-2 pt-3 border-t border-[#F5F1E8]/10 font-mono-meta text-[11px]">
            <div class="text-[#AAA6A0]">Isolates: <span class="text-[#F5F1E8]">Off-thread</span></div>
            <div class="text-[#AAA6A0] text-center">Startup: <span class="text-[#FF9A5C]">-40%</span></div>
            <div class="text-[#AAA6A0] text-right">CI/CD: <span class="text-[#F5F1E8]">Multi-Store</span></div>
          </div>
        </div>
      `;
    }

    if (project.id === 'neat-sttp') {
      return `
        <div class="w-full h-full min-h-[320px] lg:pl-10 lg:border-l border-[#F5F1E8]/10 flex flex-col justify-between py-2">
          <div class="flex items-center justify-between border-b border-[#F5F1E8]/10 pb-3">
            <span class="font-mono-meta text-xs text-[#FF9A5C]">STTP // URBAN MOBILITY &amp; SAFETY</span>
            <span class="font-mono-meta text-xs text-[#AAA6A0]">OFFLINE-FIRST ENGINE</span>
          </div>

          <div class="my-5 grid grid-cols-1 sm:grid-cols-12 gap-6 items-start">
            <div class="sm:col-span-5 sm:pr-4 sm:border-r border-[#F5F1E8]/10">
              <div class="font-mono-meta text-[10px] text-[#FF9A5C]">PIPELINE DE CAMPO</div>
              <div class="text-sm font-semibold text-[#F5F1E8] mt-1">Coleta Resiliente</div>
              <ul class="mt-3 space-y-2 text-xs text-[#AAA6A0] font-mono-meta">
                <li>● Coordenadas GPS de precisão</li>
                <li>● Fila transacional SQLite</li>
                <li>● Sync automático REST/Firebase</li>
              </ul>
            </div>

            <div class="sm:col-span-7 space-y-2.5">
              <div class="flex items-center justify-between text-xs">
                <span class="text-[#F5F1E8] font-semibold">Mapeamento de Pontos Críticos</span>
                <span class="font-mono-meta text-[10px] text-[#FF9A5C]">GOOGLE MAPS SDK</span>
              </div>
              <p class="text-xs text-[#AAA6A0] leading-relaxed">
                Laudos registrados em campo alimentam matrizes estatísticas de engenharia de tráfego para orientar intervenções viárias e prevenção de sinistros.
              </p>
              <div class="pt-2 border-t border-[#F5F1E8]/10 flex items-center justify-between font-mono-meta text-[10px] text-[#FF9A5C]">
                <span>Android &amp; iOS</span>
                <span>+20% Eficiência Operacional</span>
              </div>
            </div>
          </div>

          <div class="pt-3 border-t border-[#F5F1E8]/10 flex items-center justify-between font-mono-meta text-[11px] text-[#AAA6A0]">
            <span>Persistência: SQLite + Firestore</span>
            <span class="text-[#F5F1E8]">Operação Oficial STTP</span>
          </div>
        </div>
      `;
    }

    if (project.id === 'bus2driver') {
      return `
        <div class="w-full h-full min-h-[320px] lg:pl-10 lg:border-l border-[#F5F1E8]/10 flex flex-col justify-between py-2">
          <div class="flex items-center justify-between border-b border-[#F5F1E8]/10 pb-3">
            <span class="font-mono-meta text-xs text-[#FF9A5C]">BUS2DRIVER // FLEET TELEMETRY</span>
            <span class="font-mono-meta text-xs text-[#F5F1E8]">WEBSOCKET STREAM</span>
          </div>

          <div class="my-6 space-y-4">
            <div class="pb-4 border-b border-[#F5F1E8]/10 flex items-center justify-between gap-4">
              <div>
                <div class="font-mono-meta text-[10px] text-[#AAA6A0]">TELEMETRIA VEICULAR</div>
                <div class="text-base font-semibold text-[#F5F1E8] mt-0.5">Rastreamento Contínuo &amp; ETA Dinâmico</div>
              </div>
              <span class="font-mono-meta text-xs text-[#FF9A5C] shrink-0">+35% Coordenação</span>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:divide-x divide-[#F5F1E8]/10">
              <div class="sm:pr-4">
                <div class="font-mono-meta text-[10px] text-[#FF9A5C]">PROTOCOLO</div>
                <div class="text-sm font-medium text-[#F5F1E8] mt-1">WebSocket Bidirecional</div>
                <p class="text-xs text-[#AAA6A0] mt-1">Heartbeat automático e reconexão resiliente em rota.</p>
              </div>
              <div class="sm:pl-4">
                <div class="font-mono-meta text-[10px] text-[#FF9A5C]">GEOLOCALIZAÇÃO</div>
                <div class="text-sm font-medium text-[#F5F1E8] mt-1">Google Maps SDK</div>
                <p class="text-xs text-[#AAA6A0] mt-1">Monitoramento em tempo real entre motorista e central.</p>
              </div>
            </div>
          </div>

          <div class="pt-3 border-t border-[#F5F1E8]/10 flex items-center justify-between font-mono-meta text-[11px] text-[#AAA6A0]">
            <span>Flutter • BLoC/Cubit</span>
            <span class="text-[#FF9A5C]">● Produção Bus2</span>
          </div>
        </div>
      `;
    }

    // LocalSpeak Visual
    return `
      <div class="w-full h-full min-h-[320px] lg:pl-10 lg:border-l border-[#F5F1E8]/10 flex flex-col justify-between py-2">
        <div class="flex items-center justify-between border-b border-[#F5F1E8]/10 pb-3">
          <span class="font-mono-meta text-xs text-[#FF9A5C]">LOCALSPEAK // ON-DEVICE AI</span>
          <span class="font-mono-meta text-xs text-[#F5F1E8]">100% OFFLINE</span>
        </div>

        <div class="my-5 grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-[#F5F1E8]/10">
          <div class="py-3 sm:py-1 sm:pr-4">
            <div class="font-mono-meta text-[10px] text-[#FF9A5C]">01 / STT</div>
            <div class="text-sm font-semibold text-[#F5F1E8] mt-1">Reconhecimento</div>
            <p class="text-xs text-[#AAA6A0] mt-1">Transcrição neural offline via sherpa_onnx.</p>
          </div>
          <div class="py-3 sm:py-1 sm:px-4">
            <div class="font-mono-meta text-[10px] text-[#FF9A5C]">02 / LOCAL LLM</div>
            <div class="text-sm font-semibold text-[#F5F1E8] mt-1">Inferência Local</div>
            <p class="text-xs text-[#AAA6A0] mt-1">Modelos Qwen/Gemma via flutter_gemma.</p>
          </div>
          <div class="py-3 sm:py-1 sm:pl-4">
            <div class="font-mono-meta text-[10px] text-[#FF9A5C]">03 / TTS</div>
            <div class="text-sm font-semibold text-[#F5F1E8] mt-1">Síntese de Voz</div>
            <p class="text-xs text-[#AAA6A0] mt-1">Fila assíncrona nativa sem latência de rede.</p>
          </div>
        </div>

        <div class="pt-3 border-t border-[#F5F1E8]/10 flex items-center justify-between font-mono-meta text-[11px] text-[#AAA6A0]">
          <span>TCC Engenharia de Computação — IFPB</span>
          <span class="text-[#FF9A5C]">Open Source</span>
        </div>
      </div>
    `;
  },

  renderCarousel() {
    const track = DOMUtils.qs(PORTFOLIO_CONFIG.selectors.carouselTrack);
    const dotsContainer = DOMUtils.qs(PORTFOLIO_CONFIG.selectors.carouselDots);
    const totalEl = DOMUtils.qs(PORTFOLIO_CONFIG.selectors.carouselTotalCount);

    if (!track || !dotsContainer) return;

    const projects = PORTFOLIO_DATA.projects;
    if (totalEl) totalEl.textContent = String(projects.length).padStart(2, '0');

    track.innerHTML = projects.map((project, idx) => `
      <article id="carousel-slide-${idx}" class="carousel-slide p-7 sm:p-10 md:p-12" ${idx === 0 ? '' : 'inert'}>
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          <!-- Left Column: Case Info -->
          <div class="lg:col-span-6 space-y-5">
            <div class="slide-stagger-item flex flex-wrap items-center gap-3">
              <span class="font-mono-meta text-xs text-[#FF9A5C]">
                PROJETO ${DOMUtils.escapeHTML(project.index)}
              </span>
              <span class="text-[#8E8A84]">•</span>
              <span class="font-mono-meta text-xs text-[#AAA6A0]">
                ${DOMUtils.escapeHTML(project.companyOrContext)}
              </span>
            </div>

            <h3 class="slide-stagger-item text-2xl sm:text-3xl md:text-4xl font-semibold text-[#F5F1E8] leading-tight">
              ${DOMUtils.escapeHTML(project.title)}
            </h3>

            <p class="slide-stagger-item text-[#AAA6A0] text-sm md:text-base leading-relaxed">
              ${DOMUtils.escapeHTML(project.description)}
            </p>

            <div class="slide-stagger-item border-l-2 border-[#F0783C] pl-4 py-0.5 space-y-1">
              <div class="font-mono-meta text-xs text-[#FF9A5C]">Solução de Engenharia &amp; Impacto</div>
              <p class="text-[#F5F1E8] text-xs md:text-sm leading-relaxed">
                ${DOMUtils.escapeHTML(project.problemSolved)}
              </p>
            </div>

            <div class="slide-stagger-item font-mono-meta text-xs text-[#AAA6A0] pt-1">
              <span class="text-[#F5F1E8]">Stack:</span> ${project.technologies.map(t => DOMUtils.escapeHTML(t)).join(' · ')}
            </div>

            <div class="slide-stagger-item flex flex-wrap items-center gap-3 pt-3">
              <button type="button" data-project-id="${DOMUtils.escapeHTML(project.id)}" class="open-case-modal-btn btn-primary-editorial text-xs py-3 px-5">
                <span>Detalhamento Técnico</span>
                <span aria-hidden="true">→</span>
              </button>
              ${project.linkUrl ? `
                <a href="${DOMUtils.escapeHTML(project.linkUrl)}" target="_blank" rel="noopener noreferrer" class="btn-secondary-editorial text-xs py-3 px-5 flex items-center gap-2">
                  <span>${DOMUtils.escapeHTML(project.linkLabel)}</span>
                  <svg class="w-3.5 h-3.5 shrink-0 text-[#F0783C]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 17L17 7M17 7H7M17 7V17"/></svg>
                </a>
              ` : `
                <span class="font-mono-meta text-xs text-[#8E8A84] px-2 py-1">
                  ${DOMUtils.escapeHTML(project.productionBadge || '')}
                </span>
              `}
            </div>
          </div>

          <!-- Right Column: Architectural Diagram Composition -->
          <div class="lg:col-span-6 project-visual-stage">
            ${this.renderProjectVisual(project)}
          </div>
        </div>
      </article>
    `).join('');

    dotsContainer.innerHTML = projects.map((p, idx) => `
      <button
        type="button"
        role="tab"
        aria-selected="${idx === 0 ? 'true' : 'false'}"
        aria-controls="carousel-slide-${idx}"
        class="carousel-dot ${idx === 0 ? 'active' : ''}"
        data-slide-to="${idx}"
        aria-label="Ir para o projeto ${DOMUtils.escapeHTML(p.title)}"
      ><span class="carousel-dot-bar" aria-hidden="true"></span></button>
    `).join('');
  },

  renderTechStack() {
    const container = DOMUtils.qs(PORTFOLIO_CONFIG.selectors.stackGrid);
    if (!container) return;

    container.innerHTML = PORTFOLIO_DATA.techStack.map(group => `
      <div class="editorial-panel spotlight-card p-7 flex flex-col reveal-block">
        <div>
          <div class="font-mono-meta text-xs text-[#FF9A5C] pb-3 mb-4 border-b border-[#F5F1E8]/10">
            ${DOMUtils.escapeHTML(group.code)}
          </div>
          <h3 class="text-lg md:text-xl font-semibold text-[#F5F1E8]">
            ${DOMUtils.escapeHTML(group.category)}
          </h3>
          <p class="text-[#AAA6A0] text-xs md:text-sm mt-2 leading-relaxed">
            ${DOMUtils.escapeHTML(group.description)}
          </p>
        </div>

        <div class="mt-6 pt-4 border-t border-[#F5F1E8]/10 space-y-3">
          <div class="flex flex-wrap gap-1.5">
            ${group.featured.map(item => `
              <span class="px-2.5 py-1 rounded text-xs font-mono-meta bg-[#151519] text-[#F5F1E8] border border-[#F0783C]/35">
                ${DOMUtils.escapeHTML(item)}
              </span>
            `).join('')}
          </div>
          <p class="font-mono-meta text-xs text-[#AAA6A0] leading-relaxed">
            ${group.secondary.map(item => DOMUtils.escapeHTML(item)).join(' · ')}
          </p>
        </div>
      </div>
    `).join('');
  },

  renderEducation() {
    const container = DOMUtils.qs(PORTFOLIO_CONFIG.selectors.educationContainer);
    if (!container) return;

    const edu = PORTFOLIO_DATA.education;
    container.innerHTML = `
      <div class="lg:col-span-8 editorial-panel spotlight-card p-8 md:p-10">
        <div class="font-mono-meta text-xs text-[#FF9A5C]">${DOMUtils.escapeHTML(edu.period)} • ${DOMUtils.escapeHTML(edu.location)}</div>
        <h3 class="text-2xl md:text-3xl font-semibold text-[#F5F1E8] mt-2">
          ${DOMUtils.escapeHTML(edu.degree)}
        </h3>
        <div class="text-base text-[#AAA6A0] mt-1 font-medium">
          ${DOMUtils.escapeHTML(edu.institution)}
        </div>
        <p class="text-[#AAA6A0] text-sm md:text-base mt-4 leading-relaxed max-w-prose">
          ${DOMUtils.escapeHTML(edu.description)}
        </p>
      </div>

      <div class="lg:col-span-4 editorial-panel spotlight-card p-8 md:p-10 flex flex-col justify-between">
        <div>
          <div class="font-mono-meta text-xs text-[#FF9A5C]">IDIOMAS</div>
          <h3 class="text-xl font-semibold text-[#F5F1E8] mt-2">Comunicação Global</h3>
        </div>
        <div class="space-y-3 mt-6">
          ${edu.languages.map(l => `
            <div class="flex items-center justify-between py-2 border-b border-[#F5F1E8]/10 last:border-0 text-sm">
              <span class="text-[#F5F1E8] font-medium">${DOMUtils.escapeHTML(l.lang)}</span>
              <span class="text-[#AAA6A0] text-xs font-mono-meta">${DOMUtils.escapeHTML(l.level)}</span>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  },

  openCaseModal(projectId, triggerEl = null) {
    const project = PORTFOLIO_DATA.projects.find(p => p.id === projectId);
    if (!project) return;

    const modal = DOMUtils.qs(PORTFOLIO_CONFIG.selectors.caseModal);
    const titleEl = DOMUtils.qs(PORTFOLIO_CONFIG.selectors.modalTitle);
    const catEl = DOMUtils.qs(PORTFOLIO_CONFIG.selectors.modalCategory);
    const bodyEl = DOMUtils.qs(PORTFOLIO_CONFIG.selectors.modalBody);
    const closeBtn = DOMUtils.qs(PORTFOLIO_CONFIG.selectors.modalCloseBtn);

    if (!modal || !titleEl || !catEl || !bodyEl) return;

    this.lastModalTrigger = triggerEl || document.activeElement;

    catEl.textContent = `${project.companyOrContext} — ${project.categoryLabel}`;
    titleEl.textContent = project.title;

    bodyEl.innerHTML = `
      <div class="flex flex-wrap gap-2">
        ${project.metrics.map(m => `<span class="metric-badge">${DOMUtils.escapeHTML(m)}</span>`).join('')}
      </div>

      <div>
        <h4 class="font-mono-meta text-xs text-[#FF9A5C] uppercase mb-1.5">Arquitetura &amp; Desenho de Sistema</h4>
        <p class="text-[#F5F1E8] leading-relaxed">${DOMUtils.escapeHTML(project.architectureOverview || project.description)}</p>
      </div>

      <div>
        <h4 class="font-mono-meta text-xs text-[#FF9A5C] uppercase mb-2">Decisões Técnicas de Engenharia</h4>
        <ul class="space-y-2.5">
          ${(project.keyDecisions || [project.problemSolved]).map(dec => `
            <li class="flex items-start gap-2.5 text-[#AAA6A0]">
              <span class="w-1.5 h-1.5 rounded-full bg-[#F0783C] mt-2 shrink-0"></span>
              <span>${DOMUtils.escapeHTML(dec)}</span>
            </li>
          `).join('')}
        </ul>
      </div>

      <div>
        <h4 class="font-mono-meta text-xs text-[#FF9A5C] uppercase mb-1.5">Responsabilidade Direta</h4>
        <p class="text-[#AAA6A0] leading-relaxed">${DOMUtils.escapeHTML(project.myRole)}</p>
      </div>

      <div class="pt-4 border-t border-[#F5F1E8]/10 flex flex-wrap items-center justify-between gap-4">
        <div class="font-mono-meta text-xs text-[#AAA6A0]">
          <span class="text-[#F5F1E8]">Tecnologias:</span> ${project.technologies.map(t => DOMUtils.escapeHTML(t)).join(' · ')}
        </div>
        ${project.linkUrl ? `
          <a href="${DOMUtils.escapeHTML(project.linkUrl)}" target="_blank" rel="noopener noreferrer" class="btn-primary-editorial text-xs py-2.5 px-5 flex items-center gap-2">
            <span>${DOMUtils.escapeHTML(project.linkLabel)}</span>
            <svg class="w-3.5 h-3.5 shrink-0 text-current" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 17L17 7M17 7H7M17 7V17"/></svg>
          </a>
        ` : `
          <span class="font-mono-meta text-xs text-[#8E8A84]">
            ${DOMUtils.escapeHTML(project.productionBadge || '')}
          </span>
        `}
      </div>
    `;

    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    if (closeBtn) {
      setTimeout(() => closeBtn.focus(), 20);
    }
  },

  closeCaseModal() {
    const modal = DOMUtils.qs(PORTFOLIO_CONFIG.selectors.caseModal);
    if (!modal || !modal.classList.contains('open')) return;

    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';

    if (this.lastModalTrigger && typeof this.lastModalTrigger.focus === 'function') {
      this.lastModalTrigger.focus();
      this.lastModalTrigger = null;
    }
  }
};

/**
 * ==========================================================================
 * 10B. TEARDOWN 3D PHYSICAL SHOWCASE CONTROLLER (THREE.JS PBR + GSAP)
 * ==========================================================================
 * Combines @teardown (interactive 3D hardware simulator, exploded view,
 * X-ray cutaway, spinning thermal fans, NPU silicon die & SVG callout leaders)
 * with @impeccable (Dark Charcoal + Burnt Orange + Ivory studio direction,
 * 3-moment scroll choreography, 60fps IntersectionObserver lifecycle).
 */
const TeardownShowcase3D = {
  renderer: null,
  scene: null,
  camera: null,
  pmremGenerator: null,
  rafId: null,
  isVisible: true,
  isInitialized: false,
  isDragging: false,
  pointerStart: { x: 0, y: 0 },
  orbitTarget: { yaw: 0, pitch: 0 },
  orbitCurrent: { yaw: 0, pitch: 0 },
  clock: null,

  state: {
    mode: 'studio',
    scrollProgress: 0,
    lidOpen: 0,
    lipGlow: 0.25,
    spill: 0,
    popout: 0,
    explode: 0,
    cutaway: 0,
    mobileFocus: 0,
    manualOverride: false
  },

  groups: {},
  materials: {},
  lights: {},
  anchors: {},

  init() {
    if (this.isInitialized) {
      this.onResize();
      return true;
    }

    const viewport = DOMUtils.qs('#showcase-viewport');
    const canvas = DOMUtils.qs('#showcase-webgl-canvas');
    if (!viewport || !canvas || typeof window.THREE === 'undefined') {
      return false;
    }

    try {
      const THREE = window.THREE;
      const renderer = new THREE.WebGLRenderer({
        canvas,
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance'
      });

      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.14;
      if ('outputEncoding' in renderer && THREE.sRGBEncoding) {
        renderer.outputEncoding = THREE.sRGBEncoding;
      }

      this.renderer = renderer;
      this.scene = new THREE.Scene();
      this.clock = new THREE.Clock();

      this.camera = new THREE.PerspectiveCamera(34, 16 / 10, 10, 2000);
      this.buildStudioEnvironment();
      this.buildLighting();
      this.buildMaterials();
      this.buildLaptopAssembly();
      this.buildPhoneAssembly();
      this.bindToolbarAndPointer(viewport, canvas);
      this.bindVisibilityObserver(viewport);

      viewport.classList.add('webgl-ready');
      this.isInitialized = true;
      this.onResize();

      if (DOMUtils.prefersReducedMotion()) {
        this.state.scrollProgress = 1;
        this.state.lidOpen = 1;
        this.state.lipGlow = 1;
        this.state.spill = 1;
        this.state.popout = 1;
        this.applyStateToScene(0);
        this.renderer.render(this.scene, this.camera);
        this.updateCalloutLines();
      } else {
        this.startLoop();
      }

      return true;
    } catch (err) {
      console.warn('Fallback para CSS 3D ativado:', err);
      return false;
    }
  },

  buildStudioEnvironment() {
    const THREE = window.THREE;
    try {
      const pmrem = new THREE.PMREMGenerator(this.renderer);
      pmrem.compileEquirectangularShader();
      const envScene = new THREE.Scene();
      envScene.background = new THREE.Color(0x0B0B0D);

      const topSoftbox = new THREE.Mesh(
        new THREE.PlaneGeometry(500, 320),
        new THREE.MeshBasicMaterial({ color: 0xF5F1E8, side: THREE.DoubleSide })
      );
      topSoftbox.position.set(-60, 240, 120);
      topSoftbox.rotation.x = Math.PI / 2.3;
      envScene.add(topSoftbox);

      const rimPanel = new THREE.Mesh(
        new THREE.PlaneGeometry(360, 260),
        new THREE.MeshBasicMaterial({ color: 0xF0783C, side: THREE.DoubleSide })
      );
      rimPanel.position.set(250, 60, -140);
      rimPanel.lookAt(0, 0, 0);
      envScene.add(rimPanel);

      const fillStrip = new THREE.Mesh(
        new THREE.PlaneGeometry(300, 240),
        new THREE.MeshBasicMaterial({ color: 0x64748B, side: THREE.DoubleSide })
      );
      fillStrip.position.set(-260, 40, 90);
      fillStrip.lookAt(0, 0, 0);
      envScene.add(fillStrip);

      const envRT = pmrem.fromScene(envScene, 0.045);
      this.scene.environment = envRT.texture;
      this.pmremGenerator = pmrem;
    } catch (_) {
      // Fallback to direct lights if PMREM fails
    }
  },

  buildLighting() {
    const THREE = window.THREE;

    const hemi = new THREE.HemisphereLight(0xF5F1E8, 0x0B0B0D, 0.55);
    this.scene.add(hemi);

    // Key Light (Warm Studio Ivory)
    const keyLight = new THREE.DirectionalLight(0xF5F1E8, 1.38);
    keyLight.position.set(-180, 260, 240);
    this.scene.add(keyLight);

    // Rim Light (Warm Burnt Orange Accent)
    const rimLight = new THREE.PointLight(0xF0783C, 1.85, 720, 1.6);
    rimLight.position.set(210, 95, -140);
    this.scene.add(rimLight);

    // Cool Slate Fill Light
    const fillLight = new THREE.DirectionalLight(0x94A3B8, 0.62);
    fillLight.position.set(160, -80, 220);
    this.scene.add(fillLight);

    // Dynamic Screen Light Spill onto Keyboard Deck
    const screenSpill = new THREE.PointLight(0xF0783C, 0, 240, 1.7);
    screenSpill.position.set(0, 46, -15);
    this.lights.screenSpill = screenSpill;
  },

  buildMaterials() {
    const THREE = window.THREE;

    this.materials.anodizedDark = new THREE.MeshStandardMaterial({
      color: 0x191920,
      roughness: 0.46,
      metalness: 0.85
    });

    this.materials.anodizedChamfer = new THREE.MeshStandardMaterial({
      color: 0x2B2B36,
      roughness: 0.38,
      metalness: 0.88
    });

    this.materials.titaniumShell = new THREE.MeshStandardMaterial({
      color: 0x22222B,
      roughness: 0.44,
      metalness: 0.87
    });

    this.materials.deckAluminum = new THREE.MeshStandardMaterial({
      color: 0x1D1D25,
      roughness: 0.47,
      metalness: 0.83,
      transparent: true,
      opacity: 1
    });

    this.materials.deckWireframe = new THREE.MeshBasicMaterial({
      color: 0xF0783C,
      wireframe: true,
      transparent: true,
      opacity: 0
    });

    this.materials.copperPipe = new THREE.MeshStandardMaterial({
      color: 0xE07238,
      emissive: 0x3A1405,
      emissiveIntensity: 0.25,
      roughness: 0.34,
      metalness: 0.91
    });

    this.materials.keycapDark = new THREE.MeshStandardMaterial({
      color: 0x0E0E13,
      roughness: 0.62,
      metalness: 0.24,
      transparent: true,
      opacity: 1
    });

    this.materials.keycapAccent = new THREE.MeshStandardMaterial({
      color: 0xF0783C,
      emissive: 0xF0783C,
      emissiveIntensity: 0.22,
      roughness: 0.45,
      metalness: 0.35
    });

    this.materials.lipGlow = new THREE.MeshBasicMaterial({
      color: 0xFF9A5C,
      transparent: true,
      opacity: 0.25
    });

    this.materials.screenGlass = new THREE.MeshStandardMaterial({
      color: 0xFFFFFF,
      roughness: 0.12,
      metalness: 0.15,
      transparent: true,
      opacity: 0.18
    });
  },

  makeCanvasTexture(width, height, drawFn) {
    const THREE = window.THREE;
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');
    drawFn(ctx, width, height);
    const tex = new THREE.CanvasTexture(canvas);
    if ('encoding' in tex && THREE.sRGBEncoding) {
      tex.encoding = THREE.sRGBEncoding;
    }
    tex.anisotropy = 4;
    tex.needsUpdate = true;
    return tex;
  },

  createLaptopScreenTexture() {
    return this.makeCanvasTexture(1600, 1020, (ctx, w, h) => {
      const bg = ctx.createLinearGradient(0, 0, w, h);
      bg.addColorStop(0, '#0E0E13');
      bg.addColorStop(1, '#09090C');
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, w, h);

      ctx.strokeStyle = 'rgba(245, 241, 232, 0.035)';
      ctx.lineWidth = 1;
      for (let x = 0; x < w; x += 64) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
        ctx.stroke();
      }
      for (let y = 0; y < h; y += 64) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
        ctx.stroke();
      }

      ctx.fillStyle = '#14141B';
      ctx.fillRect(0, 0, w, 78);
      ctx.strokeStyle = 'rgba(245, 241, 232, 0.1)';
      ctx.beginPath();
      ctx.moveTo(0, 78);
      ctx.lineTo(w, 78);
      ctx.stroke();

      const dots = ['#F0783C', 'rgba(245,241,232,0.32)', 'rgba(245,241,232,0.16)'];
      dots.forEach((c, i) => {
        ctx.fillStyle = c;
        ctx.beginPath();
        ctx.arc(46 + i * 28, 39, 8, 0, Math.PI * 2);
        ctx.fill();
      });

      ctx.fillStyle = '#B8B2A6';
      ctx.font = '600 22px "JetBrains Mono", monospace';
      ctx.fillText('architecture // fullstack-mobility-engine.ts', 148, 47);

      ctx.fillStyle = 'rgba(240, 120, 60, 0.14)';
      ctx.strokeStyle = 'rgba(240, 120, 60, 0.45)';
      ctx.lineWidth = 2;
      ctx.strokeRect(w - 310, 18, 266, 42);
      ctx.fillRect(w - 310, 18, 266, 42);
      ctx.fillStyle = '#FF9A5C';
      ctx.font = '700 19px "JetBrains Mono", monospace';
      ctx.fillText('NESTJS + REACT + TS', w - 288, 46);

      ctx.fillStyle = 'rgba(20, 20, 26, 0.85)';
      ctx.fillRect(44, 116, 900, 620);
      ctx.strokeStyle = 'rgba(245, 241, 232, 0.09)';
      ctx.strokeRect(44, 116, 900, 620);

      const codeLines = [
        ['01', '#FF9A5C', '@WebSocketGateway({ cors: true, namespace: "/telemetry" })'],
        ['02', '#F5F1E8', 'export class MobilityGateway {'],
        ['03', '#B8B2A6', '  constructor(private readonly tracker: FleetService) {}'],
        ['04', '#F0783C', '  @SubscribeMessage("sync_fleet_state")'],
        ['05', '#F5F1E8', '  async streamVehicleTelemetry(payload: GpsFrame) {'],
        ['06', '#6EE7B7', '    return this.tracker.dispatchNormalized(payload);'],
        ['07', '#F5F1E8', '  }'],
        ['08', '#B8B2A6', '  // White-label Flavors: 40+ apps (Dev / Stg / Prod)'],
        ['09', '#FF9A5C', '  public verifyReleaseHealth(): ReleaseMetrics {'],
        ['10', '#F5F1E8', '    return { overhead: "-75%", coverage: "80%+" };'],
        ['11', '#F5F1E8', '  }'],
        ['12', '#F5F1E8', '}']
      ];

      codeLines.forEach(([num, color, text], idx) => {
        const y = 176 + idx * 45;
        ctx.fillStyle = 'rgba(184, 178, 166, 0.45)';
        ctx.font = '500 22px "JetBrains Mono", monospace';
        ctx.fillText(num, 74, y);
        ctx.fillStyle = color;
        ctx.font = '500 23px "JetBrains Mono", monospace';
        ctx.fillText(text, 132, y);
      });

      ctx.fillStyle = 'rgba(25, 25, 32, 0.92)';
      ctx.fillRect(980, 116, 576, 620);
      ctx.strokeStyle = 'rgba(240, 120, 60, 0.35)';
      ctx.strokeRect(980, 116, 576, 620);

      ctx.fillStyle = '#FF9A5C';
      ctx.font = '700 20px "JetBrains Mono", monospace';
      ctx.fillText('ECOSSISTEMA EM PRODUÇÃO', 1020, 172);

      ctx.fillStyle = '#F5F1E8';
      ctx.font = '700 44px "Plus Jakarta Sans", sans-serif';
      ctx.fillText('40+ Apps', 1020, 240);
      ctx.font = '600 26px "Plus Jakarta Sans", sans-serif';
      ctx.fillStyle = '#B8B2A6';
      ctx.fillText('White-Label & Telemetria Real-Time', 1020, 284);

      const bars = [
        ['AppBus2 v5 • Core', 0.94],
        ['NEAT • Bilhetagem & QR', 0.88],
        ['Bus2Driver • GPS Stream', 0.91],
        ['STTP • SaaS Público', 0.86]
      ];
      bars.forEach(([label, ratio], i) => {
        const by = 350 + i * 82;
        ctx.fillStyle = '#F5F1E8';
        ctx.font = '600 21px "Plus Jakarta Sans", sans-serif';
        ctx.fillText(label, 1020, by);

        ctx.fillStyle = 'rgba(245, 241, 232, 0.08)';
        ctx.fillRect(1020, by + 16, 496, 14);
        ctx.fillStyle = '#F0783C';
        ctx.fillRect(1020, by + 16, Math.round(496 * ratio), 14);
      });

      const metrics = [
        ['FLAVORS CI/CD', 'Dev • Stg • Prod', '#F5F1E8'],
        ['SETUP & OVERHEAD', '-75% Tempo', '#FF9A5C'],
        ['COBERTURA TESTES', '80%+ Unit/Widget', '#6EE7B7']
      ];
      metrics.forEach(([k, v, col], idx) => {
        const mx = 44 + idx * 518;
        ctx.fillStyle = 'rgba(22, 22, 29, 0.95)';
        ctx.fillRect(mx, 774, 488, 196);
        ctx.strokeStyle = 'rgba(245, 241, 232, 0.12)';
        ctx.strokeRect(mx, 774, 488, 196);

        ctx.fillStyle = '#B8B2A6';
        ctx.font = '600 19px "JetBrains Mono", monospace';
        ctx.fillText(k, mx + 34, 832);

        ctx.fillStyle = col;
        ctx.font = '700 42px "Plus Jakarta Sans", sans-serif';
        ctx.fillText(v, mx + 34, 908);
      });
    });
  },

  createLogicBoardTexture() {
    return this.makeCanvasTexture(1024, 640, (ctx, w, h) => {
      ctx.fillStyle = '#0B0D10';
      ctx.fillRect(0, 0, w, h);

      ctx.strokeStyle = 'rgba(240, 120, 60, 0.26)';
      ctx.lineWidth = 2;
      for (let i = 0; i < 28; i++) {
        const y = 40 + i * 20;
        ctx.beginPath();
        ctx.moveTo(60, y);
        ctx.lineTo(w / 2 - 90, y);
        ctx.lineTo(w / 2 - 40, h / 2);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(w - 60, y);
        ctx.lineTo(w / 2 + 90, y);
        ctx.lineTo(w / 2 + 40, h / 2);
        ctx.stroke();
      }

      ctx.fillStyle = '#F0783C';
      for (let x = 80; x < w - 80; x += 28) {
        ctx.fillRect(x, 18, 14, 22);
        ctx.fillRect(x, h - 40, 14, 22);
      }

      ctx.fillStyle = '#181820';
      ctx.fillRect(w / 2 - 140, h / 2 - 95, 280, 190);
      ctx.strokeStyle = '#FF9A5C';
      ctx.lineWidth = 3;
      ctx.strokeRect(w / 2 - 140, h / 2 - 95, 280, 190);

      ctx.fillStyle = '#F5F1E8';
      ctx.font = '700 22px "JetBrains Mono", monospace';
      ctx.textAlign = 'center';
      ctx.fillText('VR • FULL STACK CORE', w / 2, h / 2 - 16);
      ctx.fillStyle = '#FF9A5C';
      ctx.font = '600 18px "JetBrains Mono", monospace';
      ctx.fillText('REACT • NESTJS • DOCKER', w / 2, h / 2 + 22);
      ctx.fillStyle = '#B8B2A6';
      ctx.font = '500 15px "JetBrains Mono", monospace';
      ctx.fillText('TELEMETRY BUS // 60FPS', w / 2, h / 2 + 56);
    });
  },

  createCardTexture(title, subtitle, highlight, badge) {
    return this.makeCanvasTexture(640, 280, (ctx, w, h) => {
      ctx.fillStyle = 'rgba(20, 20, 26, 0.96)';
      ctx.fillRect(0, 0, w, h);

      ctx.strokeStyle = 'rgba(240, 120, 60, 0.55)';
      ctx.lineWidth = 4;
      ctx.strokeRect(2, 2, w - 4, h - 4);

      ctx.fillStyle = '#FF9A5C';
      ctx.font = '700 19px "JetBrains Mono", monospace';
      ctx.fillText(badge, 32, 48);

      ctx.fillStyle = '#F5F1E8';
      ctx.font = '700 34px "Plus Jakarta Sans", sans-serif';
      ctx.fillText(title, 32, 112);

      ctx.fillStyle = '#B8B2A6';
      ctx.font = '500 22px "Plus Jakarta Sans", sans-serif';
      ctx.fillText(subtitle, 32, 162);

      ctx.fillStyle = 'rgba(240, 120, 60, 0.14)';
      ctx.fillRect(32, 194, w - 64, 54);
      ctx.fillStyle = '#FF9A5C';
      ctx.font = '600 21px "JetBrains Mono", monospace';
      ctx.fillText(highlight, 50, 229);
    });
  },

  createPhoneScreenTexture() {
    return this.makeCanvasTexture(900, 1840, (ctx, w, h) => {
      const bg = ctx.createLinearGradient(0, 0, 0, h);
      bg.addColorStop(0, '#121218');
      bg.addColorStop(1, '#09090D');
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, w, h);

      ctx.fillStyle = '#B8B2A6';
      ctx.font = '600 26px "JetBrains Mono", monospace';
      ctx.fillText('9:41', 68, 86);
      ctx.fillStyle = '#6EE7B7';
      ctx.fillText('5G • IA LOCAL', w - 255, 86);

      ctx.fillStyle = '#FF9A5C';
      ctx.font = '700 24px "JetBrains Mono", monospace';
      ctx.fillText('FLUTTER • DART • ON-DEVICE AI', 64, 210);

      ctx.fillStyle = '#F5F1E8';
      ctx.font = '700 54px "Plus Jakarta Sans", sans-serif';
      ctx.fillText('Mobile Core', 64, 286);

      ctx.fillStyle = '#181822';
      ctx.fillRect(56, 350, w - 112, 540);
      ctx.strokeStyle = 'rgba(240, 120, 60, 0.45)';
      ctx.lineWidth = 3;
      ctx.strokeRect(56, 350, w - 112, 540);

      ctx.fillStyle = '#FF9A5C';
      ctx.font = '700 22px "JetBrains Mono", monospace';
      ctx.fillText('LOCALSKEAK // OFFLINE LLM', 96, 418);

      ctx.fillStyle = '#F5F1E8';
      ctx.font = '700 40px "Plus Jakarta Sans", sans-serif';
      ctx.fillText('Voz & IA Sem Nuvem', 96, 486);

      ctx.fillStyle = '#B8B2A6';
      ctx.font = '500 26px "Plus Jakarta Sans", sans-serif';
      ctx.fillText('sherpa_onnx + flutter_gemma', 96, 542);

      for (let i = 0; i < 24; i++) {
        const bh = 36 + Math.round(Math.sin(i * 0.65) * 28 + 32);
        ctx.fillStyle = i % 3 === 0 ? '#FF9A5C' : '#F0783C';
        ctx.fillRect(96 + i * 29, 680 - bh / 2, 16, bh);
      }

      ctx.fillStyle = '#6EE7B7';
      ctx.font = '600 24px "JetBrains Mono", monospace';
      ctx.fillText('LATÊNCIA ZERO • 100% PRIVADO', 96, 820);

      ctx.fillStyle = '#16161F';
      ctx.fillRect(56, 950, w - 112, 560);
      ctx.strokeStyle = 'rgba(245, 241, 232, 0.14)';
      ctx.strokeRect(56, 950, w - 112, 560);

      ctx.fillStyle = '#FF9A5C';
      ctx.font = '700 22px "JetBrains Mono", monospace';
      ctx.fillText('APPBUS2 V5 • NEAT • BUS2DRIVER', 96, 1020);

      ctx.fillStyle = '#F5F1E8';
      ctx.font = '700 40px "Plus Jakarta Sans", sans-serif';
      ctx.fillText('Dart Isolates & GPS', 96, 1090);

      ctx.fillStyle = '#B8B2A6';
      ctx.font = '500 26px "Plus Jakarta Sans", sans-serif';
      ctx.fillText('40+ Apps White-Label (Android/iOS)', 96, 1148);

      ctx.fillStyle = 'rgba(240, 120, 60, 0.14)';
      ctx.fillRect(96, 1210, w - 192, 110);
      ctx.fillStyle = '#FF9A5C';
      ctx.font = '700 36px "Plus Jakarta Sans", sans-serif';
      ctx.fillText('-40% Startup Time', 128, 1278);

      ctx.fillStyle = '#F5F1E8';
      ctx.font = '600 24px "JetBrains Mono", monospace';
      ctx.fillText('BLOC • CLEAN ARCH • SHADERS GPU', 96, 1420);

      ctx.fillStyle = 'rgba(245, 241, 232, 0.35)';
      ctx.fillRect(w / 2 - 130, h - 48, 260, 12);
    });
  },

  buildLaptopAssembly() {
    const THREE = window.THREE;
    const laptopRoot = new THREE.Group();
    this.scene.add(laptopRoot);
    this.groups.laptopRoot = laptopRoot;

    // 0. Studio Floor Contact Shadow Catcher
    const shadowCanvas = document.createElement('canvas');
    shadowCanvas.width = 256;
    shadowCanvas.height = 256;
    const sctx = shadowCanvas.getContext('2d');
    const grad = sctx.createRadialGradient(128, 128, 18, 128, 128, 120);
    grad.addColorStop(0, 'rgba(0, 0, 0, 0.78)');
    grad.addColorStop(0.6, 'rgba(0, 0, 0, 0.32)');
    grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
    sctx.fillStyle = grad;
    sctx.fillRect(0, 0, 256, 256);

    const shadowPlane = new THREE.Mesh(
      new THREE.PlaneGeometry(390, 270),
      new THREE.MeshBasicMaterial({
        map: new THREE.CanvasTexture(shadowCanvas),
        transparent: true,
        depthWrite: false
      })
    );
    shadowPlane.rotation.x = -Math.PI / 2;
    shadowPlane.position.set(0, -18, 8);
    laptopRoot.add(shadowPlane);
    this.groups.laptopShadow = shadowPlane;

    // 1. Lower Unibody Chassis Group (moves down in Exploded view)
    const chassisBottomGroup = new THREE.Group();
    laptopRoot.add(chassisBottomGroup);
    this.groups.chassisBottomGroup = chassisBottomGroup;

    const baseGeom = new THREE.BoxGeometry(304, 11, 204);
    const baseMesh = new THREE.Mesh(baseGeom, this.materials.anodizedDark);
    baseMesh.position.set(0, -8, 5);
    chassisBottomGroup.add(baseMesh);

    const chamferFrame = new THREE.Mesh(
      new THREE.BoxGeometry(306, 2.2, 206),
      this.materials.anodizedChamfer
    );
    chamferFrame.position.set(0, -3.2, 5);
    chassisBottomGroup.add(chamferFrame);

    // Awakening Front Lip Amber Light Bar
    const lipGlowMesh = new THREE.Mesh(
      new THREE.BoxGeometry(126, 2.4, 3.2),
      this.materials.lipGlow
    );
    lipGlowMesh.position.set(0, -4.2, 107.2);
    chassisBottomGroup.add(lipGlowMesh);
    this.groups.lipGlowMesh = lipGlowMesh;

    // 2. Internal Engineering Layer: Full Stack Logic Board + Copper Heatpipes + Dual Fans
    const logicBoardGroup = new THREE.Group();
    logicBoardGroup.position.set(0, -3.5, 2);
    laptopRoot.add(logicBoardGroup);
    this.groups.logicBoardGroup = logicBoardGroup;

    const pcbMesh = new THREE.Mesh(
      new THREE.BoxGeometry(268, 2.4, 158),
      new THREE.MeshStandardMaterial({
        map: this.createLogicBoardTexture(),
        roughness: 0.42,
        metalness: 0.55
      })
    );
    logicBoardGroup.add(pcbMesh);

    const pipe1 = new THREE.Mesh(new THREE.BoxGeometry(196, 2.6, 8), this.materials.copperPipe);
    pipe1.position.set(0, 2.4, -26);
    logicBoardGroup.add(pipe1);

    const pipe2 = new THREE.Mesh(new THREE.BoxGeometry(196, 2.6, 6), this.materials.copperPipe);
    pipe2.position.set(0, 2.4, -12);
    logicBoardGroup.add(pipe2);

    const createFan = (xPos) => {
      const fanHousing = new THREE.Group();
      fanHousing.position.set(xPos, 2.2, -20);

      const ring = new THREE.Mesh(
        new THREE.CylinderGeometry(28, 28, 3, 24, 1, true),
        this.materials.anodizedChamfer
      );
      fanHousing.add(ring);

      const rotor = new THREE.Group();
      const hub = new THREE.Mesh(
        new THREE.CylinderGeometry(8, 8, 3.2, 16),
        this.materials.copperPipe
      );
      rotor.add(hub);

      for (let b = 0; b < 9; b++) {
        const blade = new THREE.Mesh(
          new THREE.BoxGeometry(17, 2.2, 3.2),
          this.materials.anodizedChamfer
        );
        const angle = (b / 9) * Math.PI * 2;
        blade.position.set(Math.cos(angle) * 14, 0, Math.sin(angle) * 14);
        blade.rotation.y = -angle + 0.45;
        rotor.add(blade);
      }

      fanHousing.add(rotor);
      logicBoardGroup.add(fanHousing);
      return rotor;
    };

    this.groups.fanLeft = createFan(-88);
    this.groups.fanRight = createFan(88);

    const anchorLogic = new THREE.Object3D();
    anchorLogic.position.set(-25, 4, 0);
    logicBoardGroup.add(anchorLogic);
    this.anchors['laptop-logic'] = anchorLogic;

    // 3. Top Keyboard Deck & 78-Key 3D Matrix + Glass Trackpad
    const keyboardDeckGroup = new THREE.Group();
    keyboardDeckGroup.position.set(0, 0, 5);
    laptopRoot.add(keyboardDeckGroup);
    this.groups.keyboardDeckGroup = keyboardDeckGroup;

    const topDeckMesh = new THREE.Mesh(
      new THREE.BoxGeometry(302, 2.2, 202),
      this.materials.deckAluminum
    );
    keyboardDeckGroup.add(topDeckMesh);

    const topDeckWire = new THREE.Mesh(
      new THREE.BoxGeometry(302.4, 2.4, 202.4),
      this.materials.deckWireframe
    );
    keyboardDeckGroup.add(topDeckWire);

    const wellMesh = new THREE.Mesh(
      new THREE.BoxGeometry(264, 1.2, 102),
      new THREE.MeshStandardMaterial({ color: 0x0B0B0F, roughness: 0.7, metalness: 0.2 })
    );
    wellMesh.position.set(0, 1.0, -24);
    keyboardDeckGroup.add(wellMesh);

    const keyRows = 5;
    const keyCols = 13;
    const keyW = 16.5;
    const keyD = 14.5;
    const gapX = 3.2;
    const gapZ = 3.4;
    const startX = -((keyCols - 1) * (keyW + gapX)) / 2;
    const startZ = -62;

    for (let r = 0; r < keyRows; r++) {
      for (let c = 0; c < keyCols; c++) {
        if (r === keyRows - 1 && c >= 4 && c <= 8) {
          if (c === 6) {
            const spaceMesh = new THREE.Mesh(
              new THREE.BoxGeometry(keyW * 4.6, 2.4, keyD),
              this.materials.keycapDark
            );
            spaceMesh.position.set(startX + c * (keyW + gapX), 2.1, startZ + r * (keyD + gapZ));
            keyboardDeckGroup.add(spaceMesh);
          }
          continue;
        }
        const isEsc = r === 0 && c === 0;
        const keyMesh = new THREE.Mesh(
          new THREE.BoxGeometry(keyW, 2.4, keyD),
          isEsc ? this.materials.keycapAccent : this.materials.keycapDark
        );
        keyMesh.position.set(startX + c * (keyW + gapX), 2.1, startZ + r * (keyD + gapZ));
        keyboardDeckGroup.add(keyMesh);
      }
    }

    const trackpadMesh = new THREE.Mesh(
      new THREE.BoxGeometry(108, 1.4, 62),
      new THREE.MeshStandardMaterial({ color: 0x15151C, roughness: 0.25, metalness: 0.45 })
    );
    trackpadMesh.position.set(0, 1.2, 62);
    keyboardDeckGroup.add(trackpadMesh);

    laptopRoot.add(this.lights.screenSpill);

    // 4. Unified Hinge Barrel & Articulated Lid at (y=0, z=-95)
    const hingePivot = new THREE.Group();
    hingePivot.position.set(0, 1.2, -95);
    laptopRoot.add(hingePivot);
    this.groups.hingePivot = hingePivot;

    const hingeBarrel = new THREE.Mesh(
      new THREE.CylinderGeometry(4.2, 4.2, 230, 20),
      this.materials.anodizedChamfer
    );
    hingeBarrel.rotation.z = Math.PI / 2;
    hingePivot.add(hingeBarrel);

    const lidBackGroup = new THREE.Group();
    hingePivot.add(lidBackGroup);
    this.groups.lidBackGroup = lidBackGroup;

    const lidOuterMesh = new THREE.Mesh(
      new THREE.BoxGeometry(304, 196, 5.5),
      this.materials.anodizedDark
    );
    lidOuterMesh.position.set(0, 98, -2.8);
    lidBackGroup.add(lidOuterMesh);

    const screenTex = this.createLaptopScreenTexture();
    const screenMat = new THREE.MeshStandardMaterial({
      map: screenTex,
      emissiveMap: screenTex,
      emissive: 0xFFFFFF,
      emissiveIntensity: 0.42,
      roughness: 0.22,
      metalness: 0.08,
      transparent: true,
      opacity: 1
    });
    this.materials.laptopScreen = screenMat;

    const screenMesh = new THREE.Mesh(
      new THREE.PlaneGeometry(288, 182),
      screenMat
    );
    screenMesh.position.set(0, 98, 0.5);
    hingePivot.add(screenMesh);

    const anchorFlavors = new THREE.Object3D();
    anchorFlavors.position.set(-72, 42, 16);
    hingePivot.add(anchorFlavors);
    this.anchors['laptop-flavors'] = anchorFlavors;

    const laptopCardsGroup = new THREE.Group();
    laptopCardsGroup.position.set(0, 98, 2);
    hingePivot.add(laptopCardsGroup);
    this.groups.laptopCardsGroup = laptopCardsGroup;

    const card1Mesh = new THREE.Mesh(
      new THREE.PlaneGeometry(132, 58),
      new THREE.MeshBasicMaterial({
        map: this.createCardTexture('NestJS + WebSocket', 'Telemetria GPS & Eventos', 'MobilityGateway // 60fps', 'BACKEND CORE'),
        transparent: true
      })
    );
    card1Mesh.position.set(-66, 26, 2);
    card1Mesh.userData = { baseZ: 2, popZ: 18, explodeZ: 42 };
    laptopCardsGroup.add(card1Mesh);

    const card2Mesh = new THREE.Mesh(
      new THREE.PlaneGeometry(126, 56),
      new THREE.MeshBasicMaterial({
        map: this.createCardTexture('40+ Apps White-Label', 'Dev • Stg • Prod Flavors', '-75% Overhead • 80%+ Tests', 'CI/CD SCALE'),
        transparent: true
      })
    );
    card2Mesh.position.set(68, -22, 3);
    card2Mesh.userData = { baseZ: 3, popZ: 26, explodeZ: 62 };
    laptopCardsGroup.add(card2Mesh);

    const glassMesh = new THREE.Mesh(
      new THREE.PlaneGeometry(292, 186),
      this.materials.screenGlass
    );
    glassMesh.position.set(0, 98, 1.5);
    hingePivot.add(glassMesh);
    this.groups.laptopGlass = glassMesh;
  },

  buildPhoneAssembly() {
    const THREE = window.THREE;
    const phoneRoot = new THREE.Group();
    this.scene.add(phoneRoot);
    this.groups.phoneRoot = phoneRoot;

    const phoneChassisGroup = new THREE.Group();
    phoneRoot.add(phoneChassisGroup);
    this.groups.phoneChassisGroup = phoneChassisGroup;

    const frameMesh = new THREE.Mesh(
      new THREE.BoxGeometry(96, 194, 10.5),
      this.materials.titaniumShell
    );
    phoneChassisGroup.add(frameMesh);

    const bezelTrim = new THREE.Mesh(
      new THREE.BoxGeometry(98, 196, 8.2),
      this.materials.anodizedChamfer
    );
    phoneChassisGroup.add(bezelTrim);

    const btnAction = new THREE.Mesh(
      new THREE.BoxGeometry(2.2, 16, 3.6),
      this.materials.keycapAccent
    );
    btnAction.position.set(-49.2, 42, 0);
    phoneChassisGroup.add(btnAction);

    const btnPower = new THREE.Mesh(
      new THREE.BoxGeometry(2.2, 26, 3.6),
      this.materials.anodizedChamfer
    );
    btnPower.position.set(49.2, 28, 0);
    phoneChassisGroup.add(btnPower);

    const phoneInternalGroup = new THREE.Group();
    phoneInternalGroup.position.set(0, 0, 1);
    phoneRoot.add(phoneInternalGroup);
    this.groups.phoneInternalGroup = phoneInternalGroup;

    const phonePcb = new THREE.Mesh(
      new THREE.BoxGeometry(84, 178, 3.2),
      new THREE.MeshStandardMaterial({ color: 0x0D0E12, roughness: 0.48, metalness: 0.6 })
    );
    phoneInternalGroup.add(phonePcb);

    const coilRing = new THREE.Mesh(
      new THREE.TorusGeometry(26, 3.2, 12, 36),
      this.materials.copperPipe
    );
    coilRing.position.set(0, -14, 2.2);
    phoneInternalGroup.add(coilRing);

    const npuDie = new THREE.Mesh(
      new THREE.BoxGeometry(44, 44, 4.2),
      new THREE.MeshStandardMaterial({
        color: 0x191922,
        emissive: 0xF0783C,
        emissiveIntensity: 0.28,
        roughness: 0.3,
        metalness: 0.85
      })
    );
    npuDie.position.set(0, 42, 2.2);
    phoneInternalGroup.add(npuDie);

    const anchorNpu = new THREE.Object3D();
    anchorNpu.position.set(0, 42, 6);
    phoneInternalGroup.add(anchorNpu);
    this.anchors['phone-npu'] = anchorNpu;

    const phoneScreenGroup = new THREE.Group();
    phoneScreenGroup.position.set(0, 0, 5.6);
    phoneRoot.add(phoneScreenGroup);
    this.groups.phoneScreenGroup = phoneScreenGroup;

    const phoneTex = this.createPhoneScreenTexture();
    const phoneScreenMat = new THREE.MeshStandardMaterial({
      map: phoneTex,
      emissiveMap: phoneTex,
      emissive: 0xFFFFFF,
      emissiveIntensity: 0.45,
      roughness: 0.18,
      metalness: 0.08,
      transparent: true,
      opacity: 1
    });
    this.materials.phoneScreen = phoneScreenMat;

    const oledMesh = new THREE.Mesh(
      new THREE.PlaneGeometry(88, 184),
      phoneScreenMat
    );
    phoneScreenGroup.add(oledMesh);

    const islandMesh = new THREE.Mesh(
      new THREE.BoxGeometry(28, 7.5, 1.4),
      new THREE.MeshBasicMaterial({ color: 0x050507 })
    );
    islandMesh.position.set(0, 80, 0.8);
    phoneScreenGroup.add(islandMesh);

    const cameraDot = new THREE.Mesh(
      new THREE.CircleGeometry(2.2, 16),
      new THREE.MeshBasicMaterial({ color: 0xFF9A5C })
    );
    cameraDot.position.set(9, 80, 1.6);
    phoneScreenGroup.add(cameraDot);

    const phoneCardsGroup = new THREE.Group();
    phoneCardsGroup.position.set(0, 0, 7);
    phoneRoot.add(phoneCardsGroup);
    this.groups.phoneCardsGroup = phoneCardsGroup;

    const mCard1 = new THREE.Mesh(
      new THREE.PlaneGeometry(82, 38),
      new THREE.MeshBasicMaterial({
        map: this.createCardTexture('LocalSpeak AI', 'sherpa_onnx • flutter_gemma', 'Voz & LLM 100% Offline', 'ON-DEVICE AI'),
        transparent: true
      })
    );
    mCard1.position.set(0, 32, 2);
    mCard1.userData = { baseZ: 2, popZ: 14, explodeZ: 38 };
    phoneCardsGroup.add(mCard1);

    const mCard2 = new THREE.Mesh(
      new THREE.PlaneGeometry(82, 38),
      new THREE.MeshBasicMaterial({
        map: this.createCardTexture('AppBus2 v5 & NEAT', 'Dart Isolates • 40+ Apps', '-40% Startup • GPS Live', 'MOBILITY CORE'),
        transparent: true
      })
    );
    mCard2.position.set(0, -36, 3);
    mCard2.userData = { baseZ: 3, popZ: 20, explodeZ: 52 };
    phoneCardsGroup.add(mCard2);

    const anchorOled = new THREE.Object3D();
    anchorOled.position.set(0, -36, 12);
    phoneCardsGroup.add(anchorOled);
    this.anchors['phone-oled'] = anchorOled;
  },

  setMode(mode) {
    const validModes = ['studio', 'exploded', 'cutaway', 'mobile', 'reset'];
    if (!validModes.includes(mode)) return;

    const actualMode = mode === 'reset' ? 'studio' : mode;
    this.state.mode = actualMode;
    this.state.manualOverride = mode !== 'reset';

    this.orbitTarget.yaw = 0;
    this.orbitTarget.pitch = 0;

    DOMUtils.qsa('.teardown-mode-btn').forEach((btn) => {
      const btnMode = btn.getAttribute('data-teardown-mode');
      const isActive = (btnMode === actualMode && mode !== 'reset') || (mode === 'reset' && btnMode === 'studio');
      btn.classList.toggle('active', isActive);
      btn.setAttribute('aria-pressed', String(isActive));
    });

    const hudStatus = DOMUtils.qs('#showcase-hud-status');
    const statusLabels = {
      studio: 'MODO: ESTÚDIO PBR // ARRASTE PARA ORBITAR',
      exploded: 'MODO: EXPLODIDO (@TEARDOWN) // CAMADAS INTERNAS E CALLOUTS ATIVOS',
      cutaway: 'MODO: RAIO-X CUTAWAY // DISSIPAÇÃO EM COBRE, COOLERS E NPU VISÍVEIS',
      mobile: 'MODO: FOCO MOBILE & IA // LOCALSKEAK (SHERPA_ONNX) + APPBUS2 V5'
    };
    if (hudStatus) {
      hudStatus.textContent = statusLabels[actualMode] || statusLabels.studio;
    }

    const targets = {
      explode: actualMode === 'exploded' ? 1 : 0,
      cutaway: actualMode === 'cutaway' ? 1 : 0,
      mobileFocus: actualMode === 'mobile' ? 1 : 0
    };

    if (typeof window.gsap !== 'undefined' && !DOMUtils.prefersReducedMotion()) {
      gsap.to(this.state, {
        explode: targets.explode,
        cutaway: targets.cutaway,
        mobileFocus: targets.mobileFocus,
        lidOpen: this.state.manualOverride ? 1 : this.state.lidOpen,
        lipGlow: 1,
        spill: 1,
        popout: 1,
        duration: 0.88,
        ease: 'expo.out',
        overwrite: 'auto'
      });
    } else {
      Object.assign(this.state, targets, {
        lidOpen: 1,
        lipGlow: 1,
        spill: 1,
        popout: 1
      });
      this.applyStateToScene(0);
      if (this.renderer) this.renderer.render(this.scene, this.camera);
      this.updateCalloutLines();
    }
  },

  bindToolbarAndPointer(viewport, canvas) {
    DOMUtils.qsa('.teardown-mode-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        const mode = btn.getAttribute('data-teardown-mode');
        if (mode) this.setMode(mode);
      });
    });

    const onDown = (clientX, clientY) => {
      this.isDragging = true;
      this.pointerStart.x = clientX;
      this.pointerStart.y = clientY;
    };

    const onMove = (clientX, clientY) => {
      if (!this.isDragging) return;
      const dx = clientX - this.pointerStart.x;
      const dy = clientY - this.pointerStart.y;
      this.pointerStart.x = clientX;
      this.pointerStart.y = clientY;

      this.orbitTarget.yaw = Math.max(-0.52, Math.min(0.52, this.orbitTarget.yaw + dx * 0.0045));
      this.orbitTarget.pitch = Math.max(-0.28, Math.min(0.28, this.orbitTarget.pitch + dy * 0.0035));
    };

    const onUp = () => {
      this.isDragging = false;
    };

    canvas.addEventListener('pointerdown', (e) => {
      onDown(e.clientX, e.clientY);
    });
    window.addEventListener('pointermove', (e) => {
      onMove(e.clientX, e.clientY);
    }, { passive: true });
    window.addEventListener('pointerup', onUp, { passive: true });
  },

  bindVisibilityObserver(viewport) {
    if (!('IntersectionObserver' in window)) return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        this.isVisible = entry.isIntersecting;
        if (this.isVisible && !this.rafId && !DOMUtils.prefersReducedMotion()) {
          this.startLoop();
        }
      });
    }, { rootMargin: '120px 0px' });
    observer.observe(viewport);
  },

  onResize() {
    const viewport = DOMUtils.qs('#showcase-viewport');
    if (!viewport || !this.renderer || !this.camera) return;

    const rect = viewport.getBoundingClientRect();
    const width = Math.max(300, rect.width);
    const height = Math.max(420, rect.height);

    this.renderer.setSize(width, height, false);
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.applyStateToScene(0);
    this.renderer.render(this.scene, this.camera);
    this.updateCalloutLines();
  },

  applyStateToScene(elapsed) {
    const isStacked = window.innerWidth <= 992;
    const s = this.state;

    this.orbitCurrent.yaw += (this.orbitTarget.yaw - this.orbitCurrent.yaw) * 0.12;
    this.orbitCurrent.pitch += (this.orbitTarget.pitch - this.orbitCurrent.pitch) * 0.12;

    const effectiveLid = s.manualOverride ? 1 : s.lidOpen;
    const effectivePop = s.manualOverride ? 1 : s.popout;
    const effectiveSpill = s.manualOverride ? 1 : s.spill;

    if (isStacked) {
      const camX = 0;
      const camY = 10 - s.mobileFocus * 105;
      const camZ = 640 - s.mobileFocus * 250;
      this.camera.fov = 38;
      this.camera.position.set(camX, camY, camZ);
      this.camera.lookAt(0, -12 - s.mobileFocus * 96, 0);
    } else {
      const camX = s.mobileFocus * 138;
      const camY = 34 - s.mobileFocus * 26;
      const camZ = 475 - s.mobileFocus * 185;
      this.camera.fov = 33;
      this.camera.position.set(camX, camY, camZ);
      this.camera.lookAt(s.mobileFocus * 148, -6 - s.mobileFocus * 4, s.mobileFocus * 18);
    }
    this.camera.updateProjectionMatrix();

    const {
      laptopRoot,
      phoneRoot,
      hingePivot,
      chassisBottomGroup,
      logicBoardGroup,
      keyboardDeckGroup,
      lidBackGroup,
      laptopCardsGroup,
      phoneChassisGroup,
      phoneInternalGroup,
      phoneScreenGroup,
      phoneCardsGroup,
      fanLeft,
      fanRight,
      lipGlowMesh
    } = this.groups;

    const floatY = Math.sin(elapsed * 1.4) * 2.2;

    if (laptopRoot) {
      if (isStacked) {
        laptopRoot.scale.setScalar(0.80);
        laptopRoot.position.set(0, 86 + (1 - effectiveLid) * 14 + floatY * 0.5, 0);
        laptopRoot.rotation.set(
          0.32 + this.orbitCurrent.pitch,
          this.orbitCurrent.yaw,
          0
        );
      } else {
        laptopRoot.scale.setScalar(0.95);
        laptopRoot.position.set(-76 - s.mobileFocus * 40, -14 + (1 - effectiveLid) * 16 + floatY, 0);
        laptopRoot.rotation.set(
          0.26 + (1 - effectiveLid) * 0.14 + this.orbitCurrent.pitch,
          0.16 + (1 - effectiveLid) * -0.12 + this.orbitCurrent.yaw,
          0
        );
      }
    }

    if (hingePivot) {
      const closedAngle = 1.54;
      const openAngle = -0.20 - s.explode * 0.08;
      hingePivot.rotation.x = closedAngle + (openAngle - closedAngle) * effectiveLid;
    }

    if (chassisBottomGroup) {
      chassisBottomGroup.position.y = -s.explode * 28;
    }
    if (logicBoardGroup) {
      logicBoardGroup.position.y = -3.5 + s.explode * 10;
    }
    if (keyboardDeckGroup) {
      keyboardDeckGroup.position.y = s.explode * 36;
    }
    if (lidBackGroup) {
      lidBackGroup.position.z = -s.explode * 20;
    }

    const deckAlpha = Math.max(0.14, 1 - s.cutaway * 0.84);
    this.materials.deckAluminum.opacity = deckAlpha;
    this.materials.keycapDark.opacity = Math.max(0.22, 1 - s.cutaway * 0.76);
    this.materials.deckWireframe.opacity = s.cutaway * 0.72;
    if (this.materials.laptopScreen) {
      this.materials.laptopScreen.opacity = Math.max(0.38, 1 - s.cutaway * 0.58);
    }

    if (fanLeft && fanRight) {
      fanLeft.rotation.y = elapsed * 5.5;
      fanRight.rotation.y = -elapsed * 5.5;
    }

    if (lipGlowMesh) {
      this.materials.lipGlow.opacity = 0.22 + s.lipGlow * 0.78;
      lipGlowMesh.scale.x = 0.38 + s.lipGlow * 0.62;
    }
    if (this.lights.screenSpill) {
      this.lights.screenSpill.intensity = effectiveSpill * 1.95;
    }

    if (laptopCardsGroup) {
      laptopCardsGroup.children.forEach((card) => {
        const { baseZ, popZ, explodeZ } = card.userData;
        card.position.z = baseZ + effectivePop * popZ + s.explode * explodeZ;
      });
    }

    if (phoneRoot) {
      if (isStacked) {
        phoneRoot.scale.setScalar(0.86);
        phoneRoot.position.set(0, -108 + (1 - effectiveLid) * 20 - floatY * 0.5, 22);
        phoneRoot.rotation.set(
          -0.08 + this.orbitCurrent.pitch,
          this.orbitCurrent.yaw,
          0
        );
      } else {
        phoneRoot.scale.setScalar(0.96);
        phoneRoot.position.set(154, -6 + (1 - effectiveLid) * 28 - floatY * 0.8, 34);
        phoneRoot.rotation.set(
          -0.08 + (1 - effectiveLid) * 0.18 + this.orbitCurrent.pitch,
          -0.26 + (1 - effectiveLid) * 0.25 + s.mobileFocus * 0.22 + this.orbitCurrent.yaw,
          0
        );
      }
    }

    if (phoneChassisGroup) {
      phoneChassisGroup.position.z = -s.explode * 26;
    }
    if (phoneInternalGroup) {
      phoneInternalGroup.position.z = 1 + s.explode * 4;
    }
    if (phoneScreenGroup) {
      phoneScreenGroup.position.z = 5.6 + s.explode * 24;
    }
    if (this.materials.phoneScreen) {
      this.materials.phoneScreen.opacity = Math.max(0.24, 1 - s.cutaway * 0.72);
    }
    if (phoneCardsGroup) {
      phoneCardsGroup.children.forEach((card) => {
        const { baseZ, popZ, explodeZ } = card.userData;
        card.position.z = baseZ + effectivePop * popZ + s.explode * explodeZ;
      });
    }

    const calloutsLayer = DOMUtils.qs('#showcase-callouts-layer');
    if (calloutsLayer) {
      const showCallouts = s.explode > 0.15 || s.cutaway > 0.15 || s.mobileFocus > 0.15 || effectivePop > 0.45;
      calloutsLayer.classList.toggle('active', showCallouts);
    }
  },

  updateCalloutLines() {
    const svg = DOMUtils.qs('#showcase-callouts-svg');
    const viewport = DOMUtils.qs('#showcase-viewport');
    const calloutsLayer = DOMUtils.qs('#showcase-callouts-layer');
    if (!svg || !viewport || !calloutsLayer || !this.camera) return;

    if (window.innerWidth <= 992 || !calloutsLayer.classList.contains('active')) {
      svg.innerHTML = '';
      return;
    }

    const THREE = window.THREE;
    const vRect = viewport.getBoundingClientRect();
    const width = vRect.width;
    const height = vRect.height;
    svg.setAttribute('viewBox', `0 0 ${width} ${height}`);

    const cards = DOMUtils.qsa('.teardown-callout-card', calloutsLayer);
    const tempVec = new THREE.Vector3();
    let svgMarkup = '';

    cards.forEach((card) => {
      const anchorKey = card.getAttribute('data-anchor');
      const anchorObj = this.anchors[anchorKey];
      if (!anchorObj) return;

      anchorObj.getWorldPosition(tempVec);
      tempVec.project(this.camera);

      const ax = (tempVec.x * 0.5 + 0.5) * width;
      const ay = (-(tempVec.y * 0.5) + 0.5) * height;

      const cRect = card.getBoundingClientRect();
      const isLeftCard = (cRect.left - vRect.left) < width * 0.45;
      const cx = isLeftCard ? (cRect.right - vRect.left) : (cRect.left - vRect.left);
      const cy = (cRect.top - vRect.top) + cRect.height * 0.5;
      const kneeX = cx + (isLeftCard ? 28 : -28);

      svgMarkup += `
        <polyline class="callout-leader-line" points="${cx.toFixed(1)},${cy.toFixed(1)} ${kneeX.toFixed(1)},${cy.toFixed(1)} ${ax.toFixed(1)},${ay.toFixed(1)}" />
        <circle class="callout-anchor-dot" cx="${ax.toFixed(1)}" cy="${ay.toFixed(1)}" r="4" />
        <circle class="callout-anchor-ring" cx="${ax.toFixed(1)}" cy="${ay.toFixed(1)}" r="9" />
      `;
    });

    svg.innerHTML = svgMarkup;
  },

  startLoop() {
    if (this.rafId) return;
    const tick = () => {
      if (!this.isVisible) {
        this.rafId = null;
        return;
      }
      this.rafId = requestAnimationFrame(tick);
      const elapsed = this.clock ? this.clock.getElapsedTime() : 0;
      this.applyStateToScene(elapsed);
      if (this.renderer && this.scene && this.camera) {
        this.renderer.render(this.scene, this.camera);
      }
      this.updateCalloutLines();
    };
    this.rafId = requestAnimationFrame(tick);
  }
};

/**
 * ==========================================================================
 * 11. ANIMATION CONTROLLERS (GSAP + 100% SCROLL-DRIVEN UNIFIED 3D SHOWCASE)
 * ==========================================================================
 */
const AnimationController = {
  showcaseTimeline: null,
  kineticInitialized: false,

  init() {
    const notebook = DOMUtils.qs(PORTFOLIO_CONFIG.selectors.notebookAssembly);
    const lid = DOMUtils.qs(PORTFOLIO_CONFIG.selectors.notebookLid);
    const phone = DOMUtils.qs(PORTFOLIO_CONFIG.selectors.phoneAssembly);

    this.initSpotlightCards();

    if (DOMUtils.prefersReducedMotion() || typeof window.gsap === 'undefined') {
      const isStacked = window.innerWidth <= 992;
      if (notebook) {
        notebook.style.transform = isStacked
          ? 'translate3d(0px, 0px, 0px) rotateX(-18deg) rotateY(0deg) rotateZ(0deg)'
          : 'translate3d(0px, 0px, 0px) rotateX(-18deg) rotateY(-8deg) rotateZ(0deg)';
      }
      if (lid) lid.style.transform = 'rotateX(12deg)';
      if (phone) {
        phone.style.transform = isStacked
          ? 'translate3d(0px, 0px, 0px) rotateX(-10deg) rotateY(0deg) rotateZ(0deg)'
          : 'translate3d(0px, 0px, 0px) rotateX(-10deg) rotateY(-14deg) rotateZ(0deg)';
      }
      DOMUtils.qsa('.arch-draw-line-x').forEach(el => { el.style.transform = 'scaleX(1)'; });
      DOMUtils.qsa('.timeline-vertical-fill, .stack-vertical-axis').forEach(el => { el.style.transform = 'scaleY(1)'; });
      DOMUtils.qsa('.studio-specialty-badge').forEach(el => {
        el.style.opacity = '1';
        el.style.transform = 'translate3d(0, 0, 0)';
      });
      return;
    }

    gsap.registerPlugin(ScrollTrigger);
    this.animateHero();
    this.initShowcase3D();
    this.initSectionDepthTransitions();
    this.initArchitecturalLines();
    this.initKineticTypography();
    this.animateEditorialBlocks();
    this.initMagneticButtons();

    let resizeTimer = null;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        this.initShowcase3D();
        ScrollTrigger.refresh();
      }, 180);
    }, { passive: true });
  },

  animateHero() {
    gsap.fromTo('.hero-reveal',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.85, stagger: 0.12, ease: 'power3.out' }
    );
  },

  /**
   * 3-Moment Studio 3D Choreography (100% Scroll-Synchronized, Unified Hinge y=0, z=0)
   * - Moment 1 (0.00 -> 0.22): Awakening amber lip glow & initial chassis settle
   * - Moment 2 (0.16 -> 0.78): Smooth lid opening, reactive screen light spill on keyboard,
   *   specular glass sheen sweep, and independent smartphone parallax trajectory
   * - Moment 3 (0.68 -> 1.00): 2.5D UI Pop-out (translateZ 12px..24px) & Studio Specialty Badges
   */
  initShowcase3D() {
    const notebook = DOMUtils.qs(PORTFOLIO_CONFIG.selectors.notebookAssembly);
    const lid = DOMUtils.qs(PORTFOLIO_CONFIG.selectors.notebookLid);
    const notebookUI = DOMUtils.qs(PORTFOLIO_CONFIG.selectors.notebookScreenUI);
    const phone = DOMUtils.qs(PORTFOLIO_CONFIG.selectors.phoneAssembly);
    const phoneUI = DOMUtils.qs(PORTFOLIO_CONFIG.selectors.phoneScreenUI);
    const lipGlow = DOMUtils.qs('#lip-awakening-glow');
    const keyboardSpill = DOMUtils.qs('#keyboard-light-spill');
    const laptopSheen = DOMUtils.qs('#laptop-specular-sheen');
    const phoneSheen = DOMUtils.qs('#phone-specular-sheen');
    const badgeFullstack = DOMUtils.qs('#studio-badge-fullstack');
    const badgeMobile = DOMUtils.qs('#studio-badge-mobile');
    const layers25d = DOMUtils.qsa('#showcase-viewport .ui-layer-25d');

    if (!notebook || !lid || !phone) return;

    if (this.showcaseTimeline) {
      if (this.showcaseTimeline.scrollTrigger) {
        this.showcaseTimeline.scrollTrigger.kill();
      }
      this.showcaseTimeline.kill();
      this.showcaseTimeline = null;
    }

    const isStacked = window.innerWidth <= 992;

    if (notebookUI) gsap.set(notebookUI, { opacity: 1 });
    if (phoneUI) gsap.set(phoneUI, { opacity: 1 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#showcase-viewport',
        start: 'top 84%',
        end: isStacked ? 'bottom 66%' : 'center 40%',
        scrub: 1,
        invalidateOnRefresh: true
      }
    });

    // MOMENTO 1 (0.00 -> 0.22): Awakening front-lip amber light line before lid opens
    if (lipGlow) {
      tl.fromTo(lipGlow,
        { opacity: 0.2, scaleX: 0.32 },
        { opacity: 1, scaleX: 1, duration: 0.22, ease: 'power2.out' },
        0
      );
    }

    // MOMENTO 1 -> 2: Chassis orientation & Coordinated Lid + Smartphone Parallax
    if (isStacked) {
      // Stacked Viewports (<= 992px): Strict x: 0 and symmetric centered rotateY -> 0deg
      tl.fromTo(notebook,
        { x: 0, y: 14, rotateX: -26, rotateY: -6, rotateZ: 0 },
        { x: 0, y: 0, rotateX: -18, rotateY: 0, rotateZ: 0, ease: 'power3.out', duration: 0.82 },
        0
      );

      tl.fromTo(lid,
        { rotateX: -82 },
        { rotateX: 12, ease: 'power2.inOut', duration: 0.64 },
        0.16
      );

      tl.fromTo(phone,
        { x: 0, y: 24, rotateX: -18, rotateY: 6, rotateZ: 0 },
        { x: 0, y: 0, rotateX: -8, rotateY: 0, rotateZ: 0, ease: 'power3.out', duration: 0.78 },
        0.14
      );
    } else {
      // Desktop Viewports (> 992px): Studio presentation angles with x: 0 inside dedicated slots
      tl.fromTo(notebook,
        { x: 0, y: 20, rotateX: -28, rotateY: -16, rotateZ: -1 },
        { x: 0, y: 0, rotateX: -18, rotateY: -8, rotateZ: 0, ease: 'power3.out', duration: 0.82 },
        0
      );

      tl.fromTo(lid,
        { rotateX: -82 },
        { rotateX: 12, ease: 'power2.inOut', duration: 0.64 },
        0.16
      );

      tl.fromTo(phone,
        { x: 0, y: 36, rotateX: -22, rotateY: 22, rotateZ: -3 },
        { x: 0, y: 0, rotateX: -10, rotateY: -14, rotateZ: 0, ease: 'power3.out', duration: 0.78 },
        0.14
      );
    }

    // MOMENTO 2 (0.20 -> 0.80): Dynamic Screen Light Spill on Keyboard & Specular Glass Sheen
    if (keyboardSpill) {
      tl.fromTo(keyboardSpill,
        { opacity: 0 },
        { opacity: 1, duration: 0.58, ease: 'power2.out' },
        0.22
      );
    }

    if (laptopSheen) {
      tl.fromTo(laptopSheen,
        { backgroundPosition: '130% 0%' },
        { backgroundPosition: '-30% 0%', duration: 0.68, ease: 'none' },
        0.18
      );
    }

    if (phoneSheen) {
      tl.fromTo(phoneSheen,
        { backgroundPosition: '130% 0%' },
        { backgroundPosition: '-25% 0%', duration: 0.68, ease: 'none' },
        0.24
      );
    }

    // MOMENTO 3 (0.68 -> 1.00): 2.5D UI Pop-out (translateZ 12px..24px) & Studio Specialty Badges
    layers25d.forEach((layer, idx) => {
      const targetZ = Number(layer.getAttribute('data-depth') || 16);
      tl.fromTo(layer,
        { z: 0 },
        {
          z: targetZ,
          duration: 0.32,
          ease: 'power3.out'
        },
        0.66 + (idx * 0.015)
      );
    });

    if (badgeFullstack && badgeMobile) {
      tl.fromTo([badgeFullstack, badgeMobile],
        { opacity: 0, y: 12 },
        { opacity: 1, y: 0, duration: 0.28, stagger: 0.06, ease: 'power3.out' },
        0.72
      );
    }

    this.showcaseTimeline = tl;
  },

  /**
   * Section Continuity: Subtle Scale & Depth Transitions (scale: 0.96 -> 1)
   * between Hero -> Showcase 3D and Showcase 3D -> Sobre Mim
   */
  initSectionDepthTransitions() {
    DOMUtils.qsa('.depth-transition-shell').forEach((shell) => {
      gsap.fromTo(shell,
        { scale: 0.96 },
        {
          scale: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: shell,
            start: 'top 92%',
            end: 'top 38%',
            scrub: 0.65
          }
        }
      );
    });
  },

  /**
   * Architectural Guide Lines & Scroll-Linked Dividers (scaleX & scaleY)
   */
  initArchitecturalLines() {
    DOMUtils.qsa('.arch-draw-line-x').forEach((line) => {
      gsap.fromTo(line,
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 1.15,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: line,
            start: 'top 88%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    });

    const timelineFill = DOMUtils.qs('#timeline-vertical-fill');
    const timelineContainer = DOMUtils.qs('#experience-timeline');
    if (timelineFill && timelineContainer) {
      gsap.fromTo(timelineFill,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: timelineContainer,
            start: 'top 75%',
            end: 'bottom 45%',
            scrub: 0.5
          }
        }
      );
    }

    const stackAxis = DOMUtils.qs('.stack-vertical-axis');
    const stackGrid = DOMUtils.qs('#stack-grid');
    if (stackAxis && stackGrid) {
      gsap.fromTo(stackAxis,
        { scaleY: 0 },
        {
          scaleY: 1,
          duration: 1.2,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: stackGrid,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }
  },

  /**
   * Kinetic Typography on Section Headings:
   * Masked word reveal (overflow: hidden) + subtle horizontal glide on Instrument Serif italics
   */
  initKineticTypography() {
    if (this.kineticInitialized) return;
    this.kineticInitialized = true;

    DOMUtils.qsa('.kinetic-heading').forEach((heading) => {
      const childNodes = Array.from(heading.childNodes);
      const fragment = document.createDocumentFragment();

      childNodes.forEach((node) => {
        if (node.nodeType === Node.TEXT_NODE) {
          const parts = (node.textContent || '').split(/(\s+)/);
          parts.forEach((part) => {
            if (!part) return;
            if (/^\s+$/.test(part)) {
              fragment.appendChild(document.createTextNode(part));
            } else {
              const mask = document.createElement('span');
              mask.className = 'kinetic-mask';
              const word = document.createElement('span');
              word.className = 'kinetic-word';
              word.textContent = part;
              mask.appendChild(word);
              fragment.appendChild(mask);
            }
          });
        } else if (node.nodeType === Node.ELEMENT_NODE) {
          const mask = document.createElement('span');
          mask.className = 'kinetic-mask';
          const word = document.createElement('span');
          word.className = 'kinetic-word kinetic-italic-shift';
          word.appendChild(node.cloneNode(true));
          mask.appendChild(word);
          fragment.appendChild(mask);
        }
      });

      heading.innerHTML = '';
      heading.appendChild(fragment);

      const words = DOMUtils.qsa('.kinetic-word', heading);
      const italicWords = DOMUtils.qsa('.kinetic-italic-shift', heading);

      ScrollTrigger.create({
        trigger: heading,
        start: 'top 90%',
        once: true,
        onEnter: () => {
          gsap.fromTo(words,
            { yPercent: 105 },
            {
              yPercent: 0,
              duration: 0.78,
              stagger: 0.04,
              ease: 'expo.out',
              overwrite: 'auto'
            }
          );
          if (italicWords.length) {
            gsap.fromTo(italicWords,
              { x: 14 },
              {
                x: 0,
                duration: 0.9,
                ease: 'expo.out',
                overwrite: 'auto'
              }
            );
          }
        }
      });
    });
  },

  animateEditorialBlocks() {
    DOMUtils.qsa('.reveal-block').forEach((block) => {
      gsap.fromTo(block,
        { opacity: 0, y: 22 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: block,
            start: 'top 90%',
            toggleActions: 'play none none none'
          }
        }
      );
    });
  },

  /**
   * Radial Spotlight Cursor Tracking on Cards (Stack, Education, Showcase & Carousel)
   */
  initSpotlightCards() {
    DOMUtils.qsa('.spotlight-card').forEach((card) => {
      let rafId = null;
      card.addEventListener('pointermove', (e) => {
        if (rafId) return;
        rafId = requestAnimationFrame(() => {
          const rect = card.getBoundingClientRect();
          const x = Math.round(e.clientX - rect.left);
          const y = Math.round(e.clientY - rect.top);
          card.style.setProperty('--spot-x', `${x}px`);
          card.style.setProperty('--spot-y', `${y}px`);
          rafId = null;
        });
      }, { passive: true });
    });
  },

  /**
   * Subtle Desktop Magnetic Microinteraction on CTAs & Carousel Controls
   */
  initMagneticButtons() {
    if (!window.matchMedia('(pointer: fine)').matches) return;

    const buttons = DOMUtils.qsa('.btn-primary-editorial, .btn-secondary-editorial, .carousel-nav-btn, .nav-cta-pill');
    buttons.forEach((btn) => {
      btn.addEventListener('pointermove', (e) => {
        const rect = btn.getBoundingClientRect();
        const dx = e.clientX - (rect.left + rect.width / 2);
        const dy = e.clientY - (rect.top + rect.height / 2);
        gsap.to(btn, {
          x: Math.max(-6, Math.min(6, dx * 0.2)),
          y: Math.max(-5, Math.min(5, dy * 0.25)),
          duration: 0.32,
          ease: 'power3.out',
          overwrite: 'auto'
        });
      }, { passive: true });

      btn.addEventListener('pointerleave', () => {
        gsap.to(btn, {
          x: 0,
          y: 0,
          duration: 0.48,
          ease: 'expo.out',
          overwrite: 'auto'
        });
      }, { passive: true });
    });
  }
};

/**
 * ==========================================================================
 * 12. NAVIGATION & CAROUSEL CONTROLLER
 * ==========================================================================
 */
const NavigationController = {
  currentSlide: 0,
  totalSlides: PORTFOLIO_DATA.projects.length,
  dragStartX: 0,
  isDragging: false,

  init() {
    this.bindHeaderScroll();
    this.bindMobileDrawer();
    this.bindCarousel();
    this.bindCaseModals();
    this.bindClipboardCopy();
    this.bindActiveSectionObserver();
  },

  bindHeaderScroll() {
    const header = DOMUtils.qs(PORTFOLIO_CONFIG.selectors.header);
    if (!header) return;

    const onScroll = () => {
      header.classList.toggle('scrolled', window.scrollY > 28);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  },

  bindMobileDrawer() {
    const header = DOMUtils.qs(PORTFOLIO_CONFIG.selectors.header);
    const btn = DOMUtils.qs(PORTFOLIO_CONFIG.selectors.mobileMenuBtn);
    const drawer = DOMUtils.qs(PORTFOLIO_CONFIG.selectors.mobileMenuDrawer);
    const openIcon = DOMUtils.qs(PORTFOLIO_CONFIG.selectors.menuIconOpen);
    const closeIcon = DOMUtils.qs(PORTFOLIO_CONFIG.selectors.menuIconClose);
    const links = DOMUtils.qsa(PORTFOLIO_CONFIG.selectors.mobileNavLinks);

    if (!btn || !drawer) return;

    const setDrawer = (open) => {
      drawer.classList.toggle('hidden', !open);
      btn.setAttribute('aria-expanded', String(open));
      if (openIcon && closeIcon) {
        openIcon.classList.toggle('hidden', open);
        closeIcon.classList.toggle('hidden', !open);
      }
    };

    btn.addEventListener('click', () => {
      const isHidden = drawer.classList.contains('hidden');
      setDrawer(isHidden);
    });

    links.forEach(l => l.addEventListener('click', () => setDrawer(false)));

    document.addEventListener('click', (e) => {
      if (!drawer.classList.contains('hidden') && header && !header.contains(e.target)) {
        setDrawer(false);
      }
    });

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !drawer.classList.contains('hidden')) {
        setDrawer(false);
        btn.focus();
      }
    });
  },

  goToSlide(index) {
    const track = DOMUtils.qs(PORTFOLIO_CONFIG.selectors.carouselTrack);
    const currentEl = DOMUtils.qs(PORTFOLIO_CONFIG.selectors.carouselCurrentIndex);
    const dots = DOMUtils.qsa('.carousel-dot');
    const slides = DOMUtils.qsa('.carousel-slide');

    if (!track) return;

    this.currentSlide = (index + this.totalSlides) % this.totalSlides;
    track.style.transform = `translate3d(-${this.currentSlide * 100}%, 0, 0)`;

    if (currentEl) {
      currentEl.textContent = String(this.currentSlide + 1).padStart(2, '0');
    }

    dots.forEach((dot, idx) => {
      const isActive = idx === this.currentSlide;
      dot.classList.toggle('active', isActive);
      dot.setAttribute('aria-selected', String(isActive));
    });

    slides.forEach((slide, idx) => {
      const isInactive = idx !== this.currentSlide;
      if (isInactive) {
        slide.setAttribute('inert', '');
      } else {
        slide.removeAttribute('inert');
      }
    });

    // Cinematic Carousel Slide Choreography (Clip-path Reveal + Zoom-out & Staggered Text)
    const activeSlide = slides[this.currentSlide];
    if (activeSlide && !DOMUtils.prefersReducedMotion() && typeof window.gsap !== 'undefined') {
      const visualStage = DOMUtils.qs('.project-visual-stage', activeSlide);
      const staggerItems = DOMUtils.qsa('.slide-stagger-item', activeSlide);

      if (visualStage) {
        gsap.fromTo(visualStage,
          { clipPath: 'inset(0% 100% 0% 0%)', scale: 1.06 },
          {
            clipPath: 'inset(0% 0% 0% 0%)',
            scale: 1,
            duration: 0.78,
            ease: 'expo.out',
            overwrite: 'auto'
          }
        );
      }

      if (staggerItems.length) {
        gsap.fromTo(staggerItems,
          { opacity: 0, y: 16 },
          {
            opacity: 1,
            y: 0,
            duration: 0.56,
            stagger: 0.055,
            ease: 'power3.out',
            overwrite: 'auto'
          }
        );
      }
    }
  },

  bindCarousel() {
    const prevBtn = DOMUtils.qs(PORTFOLIO_CONFIG.selectors.carouselPrevBtn);
    const nextBtn = DOMUtils.qs(PORTFOLIO_CONFIG.selectors.carouselNextBtn);
    const viewport = DOMUtils.qs(PORTFOLIO_CONFIG.selectors.carouselViewport);
    const dots = DOMUtils.qsa('.carousel-dot');

    if (prevBtn) prevBtn.addEventListener('click', () => this.goToSlide(this.currentSlide - 1));
    if (nextBtn) nextBtn.addEventListener('click', () => this.goToSlide(this.currentSlide + 1));

    dots.forEach(dot => {
      dot.addEventListener('click', () => {
        const target = Number(dot.getAttribute('data-slide-to'));
        if (!Number.isNaN(target)) this.goToSlide(target);
      });
    });

    // Pointer / Touch Drag Support (respects text selection and interactive controls)
    if (viewport) {
      const startDrag = (clientX) => {
        this.isDragging = true;
        this.dragStartX = clientX;
      };

      const endDrag = (clientX) => {
        if (!this.isDragging) return;
        this.isDragging = false;

        const selection = window.getSelection ? window.getSelection() : null;
        if (selection && selection.toString().trim().length > 0) {
          return;
        }

        const delta = clientX - this.dragStartX;
        if (Math.abs(delta) > 60) {
          if (delta < 0) {
            this.goToSlide(this.currentSlide + 1);
          } else {
            this.goToSlide(this.currentSlide - 1);
          }
        }
      };

      viewport.addEventListener('mousedown', (e) => {
        if (e.target.closest('button, a')) return;
        startDrag(e.clientX);
      });
      window.addEventListener('mouseup', (e) => endDrag(e.clientX));

      viewport.addEventListener('touchstart', (e) => {
        if (e.target.closest('button, a')) return;
        if (e.touches.length === 1) startDrag(e.touches[0].clientX);
      }, { passive: true });

      viewport.addEventListener('touchend', (e) => {
        if (e.changedTouches.length === 1) endDrag(e.changedTouches[0].clientX);
      }, { passive: true });

      // Keyboard Left / Right Navigation Support
      viewport.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
          e.preventDefault();
          this.goToSlide(this.currentSlide - 1);
        } else if (e.key === 'ArrowRight') {
          e.preventDefault();
          this.goToSlide(this.currentSlide + 1);
        }
      });
    }
  },

  bindCaseModals() {
    const openBtns = DOMUtils.qsa('.open-case-modal-btn');
    const closeBtn = DOMUtils.qs(PORTFOLIO_CONFIG.selectors.modalCloseBtn);
    const backdrop = DOMUtils.qs(PORTFOLIO_CONFIG.selectors.caseModal);

    openBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-project-id');
        if (id) UIComponents.openCaseModal(id, btn);
      });
    });

    if (closeBtn) closeBtn.addEventListener('click', () => UIComponents.closeCaseModal());
    if (backdrop) {
      backdrop.addEventListener('click', (e) => {
        if (e.target === backdrop) UIComponents.closeCaseModal();
      });
    }

    window.addEventListener('keydown', (e) => {
      if (!backdrop || !backdrop.classList.contains('open')) return;

      if (e.key === 'Escape') {
        e.preventDefault();
        UIComponents.closeCaseModal();
        return;
      }

      if (e.key === 'Tab') {
        const focusable = DOMUtils.qsa(
          'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',
          backdrop
        );
        if (!focusable.length) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    });
  },

  bindClipboardCopy() {
    const copyBtn = DOMUtils.qs(PORTFOLIO_CONFIG.selectors.copyEmailBtn);
    const label = DOMUtils.qs(PORTFOLIO_CONFIG.selectors.copyEmailLabel);
    if (!copyBtn || !label) return;

    const showSuccess = () => {
      label.textContent = '✓ E-mail copiado: ' + PORTFOLIO_CONFIG.contact.email;
      setTimeout(() => {
        label.textContent = 'Copiar endereço de e-mail';
      }, 3000);
    };

    copyBtn.addEventListener('click', async () => {
      if (navigator.clipboard && typeof navigator.clipboard.writeText === 'function') {
        try {
          await navigator.clipboard.writeText(PORTFOLIO_CONFIG.contact.email);
          showSuccess();
          return;
        } catch (_) {
          // Fallback below
        }
      }

      const textarea = document.createElement('textarea');
      textarea.value = PORTFOLIO_CONFIG.contact.email;
      textarea.setAttribute('readonly', '');
      textarea.style.position = 'fixed';
      textarea.style.top = '0';
      textarea.style.left = '0';
      textarea.style.opacity = '0';
      textarea.style.pointerEvents = 'none';
      document.body.appendChild(textarea);
      textarea.select();
      try {
        document.execCommand('copy');
        showSuccess();
      } catch (_) {
        label.textContent = PORTFOLIO_CONFIG.contact.email;
      } finally {
        document.body.removeChild(textarea);
      }
    });
  },

  bindActiveSectionObserver() {
    const sections = DOMUtils.qsa('main section[id]');
    const navLinks = DOMUtils.qsa('.nav-link, .nav-cta-pill');

    if (!('IntersectionObserver' in window) || !sections.length) return;

    const setActive = (id) => {
      navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('data-section') === id);
      });
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActive(entry.target.getAttribute('id'));
        }
      });
    }, { rootMargin: '-30% 0px -50% 0px' });

    sections.forEach(sec => observer.observe(sec));

    window.addEventListener('scroll', () => {
      if ((window.innerHeight + window.scrollY) >= (document.documentElement.scrollHeight - 40)) {
        setActive('contato');
      }
    }, { passive: true });
  }
};

/**
 * ==========================================================================
 * 13. APPLICATION INITIALIZATION
 * ==========================================================================
 */
const PortfolioApp = {
  init() {
    try {
      UIComponents.renderExperience();
      UIComponents.renderCarousel();
      UIComponents.renderTechStack();
      UIComponents.renderEducation();
      NavigationController.init();
      AnimationController.init();
    } catch (error) {
      console.error('Erro na inicialização do portfólio:', error);
    }
  }
};

window.addEventListener('DOMContentLoaded', () => {
  PortfolioApp.init();
});
