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
  },
  careerStartDate: '2022-01-01'
});

/**
 * ==========================================================================
 * 8. PORTFOLIO DATA (VERIFIED CURRICULUM & REAL PROFESSIONAL TRAJECTORY)
 * ==========================================================================
 */
const PORTFOLIO_DATA = Object.freeze({
  companies: [
    {
      id: 'sttp',
      name: 'STTP — Superintendência de Trânsito e Transportes Públicos',
      shortName: 'STTP',
      logoPath: 'assets/logos/sttp.png',
      categoryLabel: 'Setor Público • Mobilidade Urbana & Engenharia de Tráfego',
      roleSummary: 'Mobile Development Lead | Flutter Developer (Pleno)',
      period: 'Jan 2022 – Presente (Estágio / Júnior → Mobile Development Lead)',
      location: 'Campina Grande, PB',
      metrics: [
        '+25% Velocidade de Sprint',
        '-30% Defeitos em Produção',
        '5+ Apps Públicos em Operação',
        '+20% Eficiência em Campo'
      ],
      scopeOverview: 'Trajetória completa desde o primeiro estágio em engenharia de software (Jan 2022) até a liderança técnica da frente mobile municipal, coordenando arquitetura, Code Review, padronização em BLoC/Clean Architecture e sustentação de mais de 5 aplicativos oficiais utilizados diariamente por agentes de trânsito e cidadãos.',
      progression: [
        {
          role: 'Mobile Development Lead | Flutter Developer (Mid-Level)',
          period: 'Dez 2024 – Presente',
          highlight: 'Liderança técnica da equipe mobile, definição de arquitetura padrão (Clean Architecture + BLoC/Cubit), revisão de código e mentoria direta de desenvolvedores juniores.'
        },
        {
          role: 'Mobile Developer (Intern / Junior)',
          period: 'Jan 2022 – Nov 2024',
          highlight: 'Desenvolvimento do app NEAT e digitalização dos fluxos de vistoria e sinistros em campo, reduzindo em 50% o retrabalho com formulários físicos.'
        }
      ],
      keyDecisions: [
        'Padronização da arquitetura mobile em camadas desacopladas (Presentation, Domain, Data) com BLoC/Cubit, elevando em 25% a velocidade de entrega nas sprints e reduzindo em 30% os defeitos em produção.',
        'Engenharia de motores Offline-First resilientes com SQLite e sincronização automática via REST/Firebase para operação ininterrupta de agentes em zonas sem cobertura de rede.',
        'Integração avançada de geolocalização e Google Maps SDK para mapeamento estatístico de pontos críticos e prevenção de acidentes viários.'
      ],
      technologies: ['Flutter', 'Dart', 'Clean Architecture', 'BLoC / Cubit', 'SQLite', 'Firebase', 'REST APIs', 'Google Maps API', 'Technical Leadership']
    },
    {
      id: 'bus2',
      name: 'Bus2 — Mobilidade Urbana & Telemetria em Escala',
      shortName: 'Bus2',
      logoPath: 'assets/logos/bus2.png',
      categoryLabel: 'Escala Internacional • 40+ Apps White-Label & Milhões de Usuários',
      roleSummary: 'Flutter Mobile Developer • Arquitetura Multi-Flavor & Performance',
      period: 'Fev 2023 – Out 2025',
      location: 'Remoto / Escala Internacional (América Latina)',
      metrics: [
        '-75% Overhead de Repositórios',
        '-40% Tempo de Startup (Isolates)',
        '+60% Velocidade de Features',
        '+35% Coordenação de Frota',
        '80%+ Cobertura de Testes'
      ],
      scopeOverview: 'Atuação estratégica no núcleo de engenharia mobile de uma plataforma de mobilidade urbana utilizada por milhões de passageiros em dezenas de cidades e consórcios de transporte público.',
      progression: [
        {
          role: 'Flutter Mobile Developer (AppBus2 v5 & Bus2Driver)',
          period: 'Fev 2023 – Out 2025',
          highlight: 'Unificação da arquitetura multi-repositório em um codebase único com Flutter Flavors (Dev, Stg, Prod) para mais de 40 variantes white-label.'
        }
      ],
      keyDecisions: [
        'Consolidação de dezenas de repositórios regionais em uma arquitetura unificada baseada em Flutter Flavors, reduzindo em 75% o esforço de manutenção e acelerando em 60% a entrega de novas funcionalidades.',
        'Processamento pesado de rotas, polylines e JSONs de horários em background via Dart Isolates, eliminando travamentos de UI e reduzindo o tempo de inicialização em 40%.',
        'Implementação de streaming bidirecional via WebSocket no Bus2Driver para telemetria veicular contínua, elevando em 35% a precisão de coordenação entre motoristas e central.',
        'Automação de pipelines CI/CD multi-loja com GitHub Actions e cobertura de testes automatizados (Unit, Widget e Integration) superior a 80%, reduzindo regressões em 45%.'
      ],
      technologies: ['Flutter', 'Dart Isolates', 'Multi-Flavor Architecture', 'BLoC & Cubit', 'WebSocket', 'Google Maps SDK', 'GitHub Actions CI/CD', 'Unit & Widget Testing']
    },
    {
      id: 'accenture',
      name: 'Accenture — Engenharia Corporativa & Sistemas Distribuídos',
      shortName: 'Accenture',
      logoPath: 'assets/logos/accenture.png',
      categoryLabel: 'Consultoria Global • Full Stack & Mobile Enterprise Engineering',
      roleSummary: 'Software Developer • Full Stack & Mobile (Flutter, React, NestJS)',
      period: '2026 – Presente • Projetos Corporativos',
      location: 'Campina Grande, PB / Híbrido',
      metrics: [
        'Clean Architecture & SOLID',
        'Microsserviços Distribuídos',
        'Full Stack & Mobile (Flutter / React / NestJS)',
        'Governança & Escala Global'
      ],
      scopeOverview: 'Desenvolvimento e arquitetura de sistemas corporativos de missão crítica, conectando aplicações móveis e front-ends reativos a backends distribuídos orientados a microsserviços.',
      progression: [
        {
          role: 'Software Developer (Full Stack & Mobile Engineering)',
          period: '2026 – Presente',
          highlight: 'Construção ponta a ponta de módulos escaláveis em Flutter, Kotlin, React/TypeScript e APIs distribuídas em NestJS e Java (Spring Boot).'
        }
      ],
      keyDecisions: [
        'Aplicação estrita de Clean Architecture, princípios SOLID e padrões de projeto corporativos para garantir testabilidade, isolamento de domínio e baixa acoplagem entre equipes.',
        'Integração de front-ends modernos (Flutter e React/TypeScript) com gateways e microsserviços em NestJS e Spring Boot sob governança ágil Scrum e pipelines de revisão contínua.',
        'Otimização de contratos de dados, resiliência de integração e observabilidade em ambientes corporativos de alta disponibilidade.'
      ],
      technologies: ['Flutter', 'React', 'NestJS', 'TypeScript', 'Kotlin', 'Java (Spring Boot)', 'Clean Architecture', 'Microsserviços', 'Scrum']
    }
  ],

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
  },
  getExperienceYears() {
    const start = new Date(PORTFOLIO_CONFIG.careerStartDate + 'T00:00:00');
    const now = new Date();
    const diffYears = (now.getTime() - start.getTime()) / (1000 * 60 * 60 * 24 * 365.2425);
    return Math.max(4, Math.floor(diffYears));
  }
};

/**
 * ==========================================================================
 * 9B. TOPOGRAPHICAL HERO BACKGROUND (@kokonutui/topo-background v1.1.0)
 * ==========================================================================
 * Direct implementation of @dorianbaffier's Topo Background:
 * 3D Ken Perlin noise, marching-squares with Path2D, index contour labels with
 * destination-out knockouts, content occlusion avoidance, pointer-following
 * hill, and click wave ripples.
 */

// Distance between field samples, in CSS px. Contours are traced through
// this grid, so it trades smoothness for work per frame.
const TOPO_CELL = 12;
// Width of a hill in the terrain, in px.
const TOPO_TERRAIN_SCALE = 360;
// Every fifth line is an index contour, drawn heavier, as on a real map.
const TOPO_INDEX_EVERY = 5;
// The hill that follows the cursor: height in field units, and spread (px).
const TOPO_HILL_HEIGHT = 0.5;
const TOPO_HILL_SPREAD = 120;
// How quickly the hill catches up with the cursor (per second) and how
// quickly it rises or sinks when the cursor arrives or leaves.
const TOPO_HILL_FOLLOW = 9;
const TOPO_HILL_RISE = 5;
// A click sends a ring outwards through the terrain.
const TOPO_RIPPLE_MS = 1800;
const TOPO_RIPPLE_SPEED = 0.24; // px per ms
const TOPO_RIPPLE_WIDTH = 42;
const TOPO_RIPPLE_HEIGHT = 0.2;
// Distance between the crests of the wave train, in px.
const TOPO_RIPPLE_WAVELENGTH = 96;
// When nothing is moving but the drift, a frame every 33ms is plenty.
const TOPO_IDLE_FRAME_MS = 33;
// Elevation labels: one per slot of this size at most (px), riding along
// with the terrain. Elevation of level n is BASE + n * STEP metres, so the
// index contours read as round hundreds.
const TOPO_LABEL_SPACING = 210;
const TOPO_LABEL_BASE = 500;
const TOPO_LABEL_STEP = 20;
// Labels keep clear of the faded top and bottom edges.
const TOPO_LABEL_MARGIN = 0.16;
const TOPO_MAX_LABEL_ANGLE = Math.PI / 3;
const TOPO_LABEL_FONT =
  '500 10px ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif';

/** Seeded 3D gradient noise (Ken Perlin's improved noise), about -1 to 1. */
function createTopoNoise(seed = 26) {
  const p = Array.from({ length: 256 }, (_, i) => i);
  let state = (seed >>> 0) || 1;
  const random = () => {
    state = (state * 1664525 + 1013904223) >>> 0;
    return state / 4294967296;
  };
  for (let i = 255; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    [p[i], p[j]] = [p[j], p[i]];
  }
  const perm = new Uint8Array(512);
  for (let i = 0; i < 512; i++) {
    perm[i] = p[i & 255];
  }
  const fade = (t) => t * t * t * (t * (t * 6 - 15) + 10);
  const lerp = (a, b, t) => a + (b - a) * t;
  const grad = (hash, x, y, z) => {
    const h = hash & 15;
    const u = h < 8 ? x : y;
    let v = z;
    if (h < 4) {
      v = y;
    } else if (h === 12 || h === 14) {
      v = x;
    }
    return ((h & 1) === 0 ? u : -u) + ((h & 2) === 0 ? v : -v);
  };

  return (x, y, z) => {
    const X = Math.floor(x) & 255;
    const Y = Math.floor(y) & 255;
    const Z = Math.floor(z) & 255;
    const fx = x - Math.floor(x);
    const fy = y - Math.floor(y);
    const fz = z - Math.floor(z);
    const u = fade(fx);
    const v = fade(fy);
    const w = fade(fz);
    const A = perm[X] + Y;
    const AA = perm[A] + Z;
    const AB = perm[A + 1] + Z;
    const B = perm[X + 1] + Y;
    const BA = perm[B] + Z;
    const BB = perm[B + 1] + Z;
    return lerp(
      lerp(
        lerp(grad(perm[AA], fx, fy, fz), grad(perm[BA], fx - 1, fy, fz), u),
        lerp(
          grad(perm[AB], fx, fy - 1, fz),
          grad(perm[BB], fx - 1, fy - 1, fz),
          u
        ),
        v
      ),
      lerp(
        lerp(
          grad(perm[AA + 1], fx, fy, fz - 1),
          grad(perm[BA + 1], fx - 1, fy, fz - 1),
          u
        ),
        lerp(
          grad(perm[AB + 1], fx, fy - 1, fz - 1),
          grad(perm[BB + 1], fx - 1, fy - 1, fz - 1),
          u
        ),
        v
      ),
      w
    );
  };
}

/**
 * The segment a contour draws through one grid cell, given which corners
 * are above the level (bits: top-left 8, top-right 4, bottom-right 2,
 * bottom-left 1) and where it crosses each edge.
 */
function topoCellSegments(path, index, box, cross) {
  const { x0, y0, x1, y1 } = box;
  const { top, right, bottom, left } = cross;
  const line = (ax, ay, bx, by) => {
    path.moveTo(ax, ay);
    path.lineTo(bx, by);
  };
  switch (index) {
    case 1:
    case 14:
      line(x0, left, bottom, y1);
      break;
    case 2:
    case 13:
      line(bottom, y1, x1, right);
      break;
    case 3:
    case 12:
      line(x0, left, x1, right);
      break;
    case 4:
    case 11:
      line(top, y0, x1, right);
      break;
    case 6:
    case 9:
      line(top, y0, bottom, y1);
      break;
    case 7:
    case 8:
      line(x0, left, top, y0);
      break;
    // The two saddles: opposite corners are high, so the level crosses
    // the cell twice.
    case 5:
      line(x0, left, top, y0);
      line(bottom, y1, x1, right);
      break;
    case 10:
      line(top, y0, x1, right);
      line(x0, left, bottom, y1);
      break;
    default:
      break;
  }
}

/**
 * Offer a point on an index contour as a label spot. Slots are laid out in
 * terrain space (they drift with the map) and every other row is offset by
 * half a slot, so labels scatter instead of lining up in a grid.
 */
function topoOfferLabel(slots, label) {
  const { x, y } = label;
  if (
    y < slots.height * TOPO_LABEL_MARGIN ||
    y > slots.height * (1 - TOPO_LABEL_MARGIN) ||
    x < 24 ||
    x > slots.width - 24 ||
    slots.avoid.some((r) => x > r.x0 && x < r.x1 && y > r.y0 && y < r.y1)
  ) {
    return;
  }
  const row = Math.floor(y / TOPO_LABEL_SPACING);
  const shifted = x + slots.drift + (row % 2) * (TOPO_LABEL_SPACING / 2);
  const col = Math.floor(shifted / TOPO_LABEL_SPACING);
  const cx = (col + 0.5) * TOPO_LABEL_SPACING;
  const cy = (row + 0.5) * TOPO_LABEL_SPACING;
  const score = (shifted - cx) ** 2 + (y - cy) ** 2;
  // Too far from the slot centre: a neighbouring label could sit right next to it.
  if (score > (TOPO_LABEL_SPACING * 0.32) ** 2) {
    return;
  }
  const key = row * 100000 + col;
  const current = slots.best.get(key);
  if (!current || score < current.score) {
    slots.best.set(key, { ...label, score });
  }
}

/** Offer the middle of a cell an index contour passes through. */
function topoOfferCellLabel(slots, [a, b, c, d], x0, y0, level, t) {
  // The contour runs across the slope; the cell's gradient gives a steadier
  // direction than the short segment itself.
  const gx = b - a + c - d;
  const gy = d - a + c - b;
  // Slide from the cell's centre along the slope onto the line itself.
  const px = gx / (2 * TOPO_CELL);
  const py = gy / (2 * TOPO_CELL);
  const g2 = px * px + py * py;
  const lift = g2 > 0 ? (t - (a + b + c + d) / 4) / g2 : 0;
  const half = TOPO_CELL / 2;
  const ox = Math.max(-half, Math.min(half, lift * px));
  const oy = Math.max(-half, Math.min(half, lift * py));
  let angle = Math.atan2(gx, -gy);
  // Keep text upright, and skip steep stretches: a number on its side is hard to read.
  if (angle > Math.PI / 2) {
    angle -= Math.PI;
  } else if (angle < -Math.PI / 2) {
    angle += Math.PI;
  }
  if (Math.abs(angle) > TOPO_MAX_LABEL_ANGLE) {
    return;
  }
  topoOfferLabel(slots, { x: x0 + half + ox, y: y0 + half + oy, angle, level });
}

/** Every contour level that passes through one cell, usually none or one. */
function topoTraceCell(field, cols, i, j, interval, paths) {
  const a = field[j * cols + i];
  const b = field[j * cols + i + 1];
  const c = field[(j + 1) * cols + i + 1];
  const d = field[(j + 1) * cols + i];
  const x0 = i * TOPO_CELL;
  const y0 = j * TOPO_CELL;
  const first = Math.ceil(Math.min(a, b, c, d) / interval);
  const last = Math.floor(Math.max(a, b, c, d) / interval);
  if (first > last) {
    return;
  }
  const box = { x0, y0, x1: x0 + TOPO_CELL, y1: y0 + TOPO_CELL };
  for (let level = first; level <= last; level++) {
    const t = level * interval;
    const index =
      (a > t ? 8 : 0) | (b > t ? 4 : 0) | (c > t ? 2 : 0) | (d > t ? 1 : 0);
    if (index === 0 || index === 15) {
      continue;
    }
    const isIndex = level % TOPO_INDEX_EVERY === 0;
    topoCellSegments(isIndex ? paths.major : paths.minor, index, box, {
      top: x0 + TOPO_CELL * ((t - a) / (b - a)),
      right: y0 + TOPO_CELL * ((t - b) / (c - b)),
      bottom: x0 + TOPO_CELL * ((t - d) / (c - d)),
      left: y0 + TOPO_CELL * ((t - a) / (d - a)),
    });
    // Saddles are poor label spots: the line turns sharply there.
    if (isIndex && paths.slots && index !== 5 && index !== 10) {
      topoOfferCellLabel(paths.slots, [a, b, c, d], x0, y0, level, t);
    }
  }
}

/**
 * Marching squares: for each cell, find where each contour level crosses
 * its edges and join those points. Index contours go into their own path
 * so each group is stroked once.
 */
function topoTraceContours(field, cols, rows, interval, minor, major, slots) {
  const paths = { minor, major, slots };
  for (let j = 0; j < rows - 1; j++) {
    for (let i = 0; i < cols - 1; i++) {
      topoTraceCell(field, cols, i, j, interval, paths);
    }
  }
}

/** Ease the hill towards the cursor and up or down. True while it moves. */
function topoStepHill(hill, dt) {
  const follow = 1 - Math.exp(-TOPO_HILL_FOLLOW * dt);
  hill.x += (hill.targetX - hill.x) * follow;
  hill.y += (hill.targetY - hill.y) * follow;
  const goal = hill.on ? 1 : 0;
  hill.amount += (goal - hill.amount) * (1 - Math.exp(-TOPO_HILL_RISE * dt));
  return (
    Math.abs(hill.targetX - hill.x) > 0.5 ||
    Math.abs(hill.targetY - hill.y) > 0.5 ||
    Math.abs(goal - hill.amount) > 0.002
  );
}

const TopoHeroBackground = {
  rafId: 0,
  cleanup: null,

  init(options = {}) {
    const root = DOMUtils.qs('#hero');
    const canvas = DOMUtils.qs('#hero-topo-canvas');
    if (!root || !canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Teardown previous instance if any
    if (this.cleanup) {
      this.cleanup();
      this.cleanup = null;
    }

    const interval = options.interval ?? 0.07;
    const speed = options.speed ?? 1;
    const interactive = options.interactive ?? true;
    const seed = options.seed ?? 26;
    const labels = options.labels ?? true;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const noise = createTopoNoise(seed);

    let width = 0;
    let height = 0;
    let cols = 0;
    let rows = 0;
    let field = new Float32Array(0);
    let color = '';

    // The cursor hill, eased towards the pointer so it glides, not jumps.
    const hill = {
      x: 0,
      y: 0,
      targetX: 0,
      targetY: 0,
      amount: 0,
      on: false,
    };
    const ripples = [];
    let time = 0;
    let last = 0;
    let lastPaint = 0;
    let raf = 0;
    let visible = true;

    const slots = {
      drift: 0,
      width: 0,
      height: 0,
      best: new Map(),
      avoid: [],
    };

    // Keep labels out from under the content laid over the map.
    const measureContent = () => {
      const origin = canvas.getBoundingClientRect();
      slots.avoid = [];
      const children = Array.from(root.children);
      for (let i = 0; i < children.length; i++) {
        const child = children[i];
        if (child.contains(canvas) || child.id === 'hero-topo-root') {
          continue;
        }
        const r = child.getBoundingClientRect();
        slots.avoid.push({
          x0: r.left - origin.left - 16,
          y0: r.top - origin.top - 12,
          x1: r.right - origin.left + 16,
          y1: r.bottom - origin.top + 12,
        });
      }
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      if (width <= 0 || height <= 0) return;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      cols = Math.ceil(width / TOPO_CELL) + 1;
      rows = Math.ceil(height / TOPO_CELL) + 1;
      field = new Float32Array(cols * rows);
      color = getComputedStyle(canvas).color || '#F5F1E8';
      measureContent();
    };

    const sample = (now) => {
      const z = time * 0.05;
      const drift = time * 6;
      const hillOn = hill.amount > 0.001;
      const spread = 2 * TOPO_HILL_SPREAD * TOPO_HILL_SPREAD;
      const ringWidth = 2 * TOPO_RIPPLE_WIDTH * TOPO_RIPPLE_WIDTH;
      for (let j = 0; j < rows; j++) {
        const y = j * TOPO_CELL;
        for (let i = 0; i < cols; i++) {
          const x = i * TOPO_CELL;
          const nx = (x + drift) / TOPO_TERRAIN_SCALE;
          const ny = y / TOPO_TERRAIN_SCALE;
          let v =
            noise(nx, ny, z) * 0.78 +
            noise(nx * 2.3 + 17.1, ny * 2.3 + 4.7, z * 1.4) * 0.22;
          if (hillOn) {
            const dx = x - hill.x;
            const dy = y - hill.y;
            v +=
              TOPO_HILL_HEIGHT *
              hill.amount *
              Math.exp(-(dx * dx + dy * dy) / spread);
          }
          for (let k = 0; k < ripples.length; k++) {
            const ripple = ripples[k];
            const age = now - ripple.start;
            const reach = age * TOPO_RIPPLE_SPEED;
            const d = Math.hypot(x - ripple.x, y - ripple.y) - reach;
            const fadeOut = 1 - age / TOPO_RIPPLE_MS;
            // A short train of crests and troughs, like a stone dropped in
            // water, so the contours bunch into rings as it passes.
            v +=
              TOPO_RIPPLE_HEIGHT *
              fadeOut *
              fadeOut *
              Math.exp(-(d * d) / ringWidth) *
              Math.cos((d / TOPO_RIPPLE_WAVELENGTH) * Math.PI * 2);
          }
          field[j * cols + i] = v;
        }
      }
    };

    /**
     * Knock the lines out under each label, then print the elevation, so
     * the contour is broken where the number sits, as on a survey map.
     */
    const drawLabels = () => {
      ctx.font = TOPO_LABEL_FONT;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      for (const label of slots.best.values()) {
        const text = `${TOPO_LABEL_BASE + label.level * TOPO_LABEL_STEP}`;
        const w = ctx.measureText(text).width + 8;
        ctx.save();
        ctx.translate(Math.round(label.x), Math.round(label.y));
        ctx.rotate(label.angle);
        ctx.globalCompositeOperation = 'destination-out';
        ctx.globalAlpha = 1;
        ctx.fillRect(-w / 2, -6, w, 12);
        ctx.globalCompositeOperation = 'source-over';
        ctx.globalAlpha = 0.5;
        ctx.fillText(text, 0, 0.5);
        ctx.restore();
      }
    };

    const paint = (now) => {
      if (width <= 0 || height <= 0) return;
      sample(now);
      const minor = new Path2D();
      const major = new Path2D();
      slots.best.clear();
      slots.drift = time * 6;
      slots.width = width;
      slots.height = height;
      topoTraceContours(
        field,
        cols,
        rows,
        interval,
        minor,
        major,
        labels ? slots : null
      );
      ctx.clearRect(0, 0, width, height);
      ctx.strokeStyle = color;
      ctx.fillStyle = color;
      ctx.lineCap = 'round';
      ctx.globalAlpha = 0.16;
      ctx.lineWidth = 0.75;
      ctx.stroke(minor);
      ctx.globalAlpha = 0.34;
      ctx.lineWidth = 1.1;
      ctx.stroke(major);
      if (labels) {
        drawLabels();
      }
      ctx.globalAlpha = 1;
    };

    const frame = (now) => {
      raf = 0;
      if (!visible) {
        return;
      }
      const dt = last ? Math.min((now - last) / 1000, 0.05) : 0;
      last = now;
      const hillMoving = topoStepHill(hill, dt);
      while (ripples.length > 0 && now - ripples[0].start > TOPO_RIPPLE_MS) {
        ripples.shift();
      }
      const settling = hillMoving || ripples.length > 0;

      time += dt * speed;
      // The drift alone is slow; half the frame rate looks the same and
      // costs half as much. Anything following the hand gets every frame.
      if (settling || now - lastPaint >= TOPO_IDLE_FRAME_MS) {
        paint(now);
        lastPaint = now;
      }
      if (speed > 0 || settling) {
        raf = requestAnimationFrame(frame);
      }
    };

    const start = () => {
      if (!raf && visible && !reduceMotion) {
        last = 0;
        raf = requestAnimationFrame(frame);
      }
    };

    // Follow light and dark mode without asking the app for a theme. The
    // check only runs while the map is on screen.
    let colorTimer = 0;
    const checkColor = () => {
      const next = getComputedStyle(canvas).color || '#F5F1E8';
      if (next !== color) {
        color = next;
        if (reduceMotion || !raf) {
          paint(performance.now());
        }
      }
    };
    const watchColor = () => {
      if (visible && !colorTimer) {
        checkColor();
        colorTimer = window.setInterval(checkColor, 500);
      } else if (!visible && colorTimer) {
        window.clearInterval(colorTimer);
        colorTimer = 0;
      }
    };

    resize();
    paint(performance.now());
    canvas.style.opacity = '1';
    start();

    const resizeObserver = new ResizeObserver(() => {
      resize();
      paint(performance.now());
    });
    resizeObserver.observe(canvas);

    // Stop drawing entirely while the map is scrolled away or the tab is
    // in the background.
    let onScreen = true;
    const updateVisible = () => {
      visible = onScreen && document.visibilityState === 'visible';
      watchColor();
      if (visible) {
        start();
      }
    };
    const intersection = new IntersectionObserver(([entry]) => {
      onScreen = entry.isIntersecting;
      updateVisible();
    });
    intersection.observe(root);
    document.addEventListener('visibilitychange', updateVisible);
    watchColor();

    const local = (event) => {
      const rect = canvas.getBoundingClientRect();
      return { x: event.clientX - rect.left, y: event.clientY - rect.top };
    };

    const onMove = (event) => {
      // Touch has no hover; a hill stuck where a finger lifted looks wrong.
      if (event.pointerType !== 'mouse') {
        return;
      }
      const point = local(event);
      if (!hill.on) {
        // Rise where the cursor came in rather than sliding over from the
        // last place it left.
        hill.x = point.x;
        hill.y = point.y;
      }
      hill.targetX = point.x;
      hill.targetY = point.y;
      hill.on = true;
      start();
    };

    const onLeave = () => {
      hill.on = false;
      start();
    };

    const onDown = (event) => {
      // Clicks on the content (links, buttons) are not meant for the map.
      if (event.target.closest && event.target.closest('a, button, input, textarea')) {
        return;
      }
      const point = local(event);
      ripples.push({ ...point, start: performance.now() });
      if (ripples.length > 4) {
        ripples.shift();
      }
      start();
    };

    if (interactive && !reduceMotion) {
      root.addEventListener('pointermove', onMove);
      root.addEventListener('pointerleave', onLeave);
      root.addEventListener('pointerdown', onDown);
    }

    this.cleanup = () => {
      cancelAnimationFrame(raf);
      resizeObserver.disconnect();
      intersection.disconnect();
      document.removeEventListener('visibilitychange', updateVisible);
      window.clearInterval(colorTimer);
      root.removeEventListener('pointermove', onMove);
      root.removeEventListener('pointerleave', onLeave);
      root.removeEventListener('pointerdown', onDown);
    };
  }
};

/**
 * ==========================================================================
 * 10. UI COMPONENTS (EXPERIENCE, CAROUSEL, STACK, EDUCATION & MODAL)
 * ==========================================================================
 */
const UIComponents = {
  lastModalTrigger: null,

  renderDynamicExperienceYears() {
    const years = DOMUtils.getExperienceYears();
    DOMUtils.qsa('[data-exp-years="plus"]').forEach((el) => {
      el.textContent = `${years}+`;
    });
    DOMUtils.qsa('[data-exp-years="number"]').forEach((el) => {
      el.textContent = `${years}`;
    });

    const ogDesc = DOMUtils.qs('meta[property="og:description"]');
    if (ogDesc) {
      ogDesc.setAttribute(
        'content',
        `Engenheiro de Software Mobile com mais de ${years} anos de experiência em arquitetura escalável, liderança técnica na STTP, unificação de código na Bus2 e engenharia full stack na Accenture.`
      );
    }
  },

  openCompanyModal(companyId, triggerEl = null) {
    const company = PORTFOLIO_DATA.companies.find((c) => c.id === companyId);
    if (!company) return;

    const modal = DOMUtils.qs(PORTFOLIO_CONFIG.selectors.caseModal);
    const titleEl = DOMUtils.qs(PORTFOLIO_CONFIG.selectors.modalTitle);
    const catEl = DOMUtils.qs(PORTFOLIO_CONFIG.selectors.modalCategory);
    const bodyEl = DOMUtils.qs(PORTFOLIO_CONFIG.selectors.modalBody);
    const closeBtn = DOMUtils.qs(PORTFOLIO_CONFIG.selectors.modalCloseBtn);

    if (!modal || !titleEl || !catEl || !bodyEl) return;

    this.lastModalTrigger = triggerEl || document.activeElement;

    catEl.textContent = company.categoryLabel;
    titleEl.textContent = company.name;

    bodyEl.innerHTML = `
      <div class="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#F5F1E8]/10">
        <div class="flex items-center gap-4">
          <div class="px-3.5 py-2 rounded-lg bg-[#191920] border border-[#F0783C]/30">
            <img src="${DOMUtils.escapeHTML(company.logoPath)}" alt="Logo ${DOMUtils.escapeHTML(company.shortName)}" class="modal-company-logo" />
          </div>
          <div>
            <div class="text-sm font-semibold text-[#F5F1E8]">${DOMUtils.escapeHTML(company.roleSummary)}</div>
            <div class="font-mono-meta text-xs text-[#FF9A5C] mt-0.5">${DOMUtils.escapeHTML(company.period)} • ${DOMUtils.escapeHTML(company.location)}</div>
          </div>
        </div>
      </div>

      <div class="flex flex-wrap gap-2">
        ${company.metrics.map((m) => `<span class="metric-badge">${DOMUtils.escapeHTML(m)}</span>`).join('')}
      </div>

      <div>
        <h4 class="font-mono-meta text-xs text-[#FF9A5C] uppercase mb-1.5">Escopo de Atuação &amp; Liderança Técnica</h4>
        <p class="text-[#F5F1E8] leading-relaxed">${DOMUtils.escapeHTML(company.scopeOverview)}</p>
      </div>

      <div>
        <h4 class="font-mono-meta text-xs text-[#FF9A5C] uppercase mb-2">Progressão &amp; Responsabilidades</h4>
        <div class="space-y-3">
          ${company.progression.map((step) => `
            <div class="p-3.5 rounded-lg bg-[#18181F] border border-[#F5F1E8]/10">
              <div class="flex flex-wrap items-center justify-between gap-2">
                <span class="text-sm font-semibold text-[#F5F1E8]">${DOMUtils.escapeHTML(step.role)}</span>
                <span class="font-mono-meta text-[11px] text-[#FF9A5C]">${DOMUtils.escapeHTML(step.period)}</span>
              </div>
              <p class="text-xs md:text-sm text-[#AAA6A0] mt-1.5 leading-relaxed">${DOMUtils.escapeHTML(step.highlight)}</p>
            </div>
          `).join('')}
        </div>
      </div>

      <div>
        <h4 class="font-mono-meta text-xs text-[#FF9A5C] uppercase mb-2">Decisões de Arquitetura &amp; Resultados</h4>
        <ul class="space-y-2.5">
          ${company.keyDecisions.map((dec) => `
            <li class="flex items-start gap-2.5 text-[#AAA6A0]">
              <span class="w-1.5 h-1.5 rounded-full bg-[#F0783C] mt-2 shrink-0"></span>
              <span>${DOMUtils.escapeHTML(dec)}</span>
            </li>
          `).join('')}
        </ul>
      </div>

      <div class="pt-4 border-t border-[#F5F1E8]/10 flex flex-wrap items-center justify-between gap-4">
        <div class="font-mono-meta text-xs text-[#AAA6A0]">
          <span class="text-[#F5F1E8]">Stack &amp; Domínio:</span> ${company.technologies.map((t) => DOMUtils.escapeHTML(t)).join(' · ')}
        </div>
        <a href="#experiencia" onclick="UIComponents.closeCaseModal()" class="btn-secondary-editorial text-xs py-2 px-4">
          <span>Ver na Linha do Tempo</span>
          <span aria-hidden="true">↓</span>
        </a>
      </div>
    `;

    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    if (closeBtn) {
      setTimeout(() => closeBtn.focus(), 20);
    }
  },

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
  renderRequested: false,
  isVisible: true,
  isInitialized: false,
  isDragging: false,
  pointerStart: { x: 0, y: 0 },
  orbitTarget: { yaw: 0, pitch: 0 },
  orbitCurrent: { yaw: 0, pitch: 0 },
  hoverParallax: { yaw: 0, pitch: 0 },
  clock: null,
  cachedViewportRect: null,
  cachedCalloutRects: [],
  calloutsWereActive: false,

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
      const isMobile = window.innerWidth <= 768;
      const renderer = new THREE.WebGLRenderer({
        canvas,
        antialias: true,
        alpha: true,
        powerPreference: 'default'
      });

      const maxDpr = isMobile ? 1.0 : Math.min(window.devicePixelRatio || 1, 1.25);
      renderer.setPixelRatio(maxDpr);
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.16;
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
      }
      this.requestRender();

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
        new THREE.PlaneGeometry(540, 340),
        new THREE.MeshBasicMaterial({ color: 0xF5F1E8, side: THREE.DoubleSide })
      );
      topSoftbox.position.set(-40, 250, 130);
      topSoftbox.rotation.x = Math.PI / 2.3;
      envScene.add(topSoftbox);

      const rimPanel = new THREE.Mesh(
        new THREE.PlaneGeometry(380, 280),
        new THREE.MeshBasicMaterial({ color: 0xF0783C, side: THREE.DoubleSide })
      );
      rimPanel.position.set(250, 80, -140);
      rimPanel.lookAt(0, 0, 0);
      envScene.add(rimPanel);

      const fillStrip = new THREE.Mesh(
        new THREE.PlaneGeometry(320, 240),
        new THREE.MeshBasicMaterial({ color: 0x64748B, side: THREE.DoubleSide })
      );
      fillStrip.position.set(-260, 40, 90);
      fillStrip.lookAt(0, 0, 0);
      envScene.add(fillStrip);

      const envRT = pmrem.fromScene(envScene, 0.045);
      this.scene.environment = envRT.texture;
      pmrem.dispose();
      topSoftbox.geometry.dispose();
      topSoftbox.material.dispose();
      rimPanel.geometry.dispose();
      rimPanel.material.dispose();
      fillStrip.geometry.dispose();
      fillStrip.material.dispose();
    } catch (_) {
      // Fallback to direct lights if PMREM fails
    }
  },

  buildLighting() {
    const THREE = window.THREE;

    const hemi = new THREE.HemisphereLight(0xF5F1E8, 0x0B0B0D, 0.58);
    this.scene.add(hemi);

    // Key Light (Warm Studio Ivory)
    const keyLight = new THREE.DirectionalLight(0xF5F1E8, 1.42);
    keyLight.position.set(-180, 260, 240);
    this.scene.add(keyLight);

    // Rim Light (Warm Burnt Orange Accent)
    const rimLight = new THREE.PointLight(0xF0783C, 1.95, 760, 1.6);
    rimLight.position.set(220, 110, -130);
    this.scene.add(rimLight);

    // Cool Slate Fill Light
    const fillLight = new THREE.DirectionalLight(0x94A3B8, 0.65);
    fillLight.position.set(160, -80, 220);
    this.scene.add(fillLight);

    // Dynamic Screen Light Spill onto Keyboard Deck
    const screenSpill = new THREE.PointLight(0xF0783C, 0, 260, 1.65);
    screenSpill.position.set(0, 48, -12);
    this.lights.screenSpill = screenSpill;
  },

  buildMaterials() {
    const THREE = window.THREE;

    this.materials.anodizedDark = new THREE.MeshStandardMaterial({
      color: 0x1A1A22,
      roughness: 0.45,
      metalness: 0.86
    });

    this.materials.anodizedChamfer = new THREE.MeshStandardMaterial({
      color: 0x2E2E3A,
      roughness: 0.36,
      metalness: 0.89
    });

    this.materials.titaniumShell = new THREE.MeshStandardMaterial({
      color: 0x23232D,
      roughness: 0.42,
      metalness: 0.88
    });

    this.materials.deckAluminum = new THREE.MeshStandardMaterial({
      color: 0x1E1E27,
      roughness: 0.46,
      metalness: 0.84,
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
      emissiveIntensity: 0.28,
      roughness: 0.32,
      metalness: 0.92
    });

    this.materials.keycapAccent = new THREE.MeshStandardMaterial({
      color: 0xF0783C,
      emissive: 0xF0783C,
      emissiveIntensity: 0.25,
      roughness: 0.42,
      metalness: 0.38
    });

    this.materials.lipGlow = new THREE.MeshBasicMaterial({
      color: 0xFF9A5C,
      transparent: true,
      opacity: 0.25
    });

    this.materials.screenGlass = new THREE.MeshStandardMaterial({
      color: 0xFFFFFF,
      roughness: 0.1,
      metalness: 0.14,
      transparent: true,
      opacity: 0.14
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

  drawRoundedRect(ctx, x, y, w, h, r) {
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.lineTo(x + w - r, y);
    ctx.quadraticCurveTo(x + w, y, x + w, y + r);
    ctx.lineTo(x + w, y + h - r);
    ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
    ctx.lineTo(x + r, y + h);
    ctx.quadraticCurveTo(x, y + h, x, y + h - r);
    ctx.lineTo(x, y + r);
    ctx.quadraticCurveTo(x, y, x + r, y);
    ctx.closePath();
  },

  /**
   * Optimized Procedural MacBook Pro Keyboard & Trackpad Texture
   */
  createKeyboardDeckTexture() {
    const origW = 1024;
    const origH = 680;
    const targetW = 768;
    const targetH = 510;
    const scale = targetW / origW;

    return this.makeCanvasTexture(targetW, targetH, (ctx) => {
      ctx.scale(scale, scale);
      const w = origW;
      const h = origH;

      ctx.fillStyle = '#1B1B23';
      ctx.fillRect(0, 0, w, h);

      // Speaker grilles on left and right
      ctx.fillStyle = 'rgba(8, 8, 12, 0.65)';
      for (let sy = 56; sy < 370; sy += 7) {
        for (let sx = 24; sx < 58; sx += 7) {
          ctx.fillRect(sx, sy, 2.5, 2.5);
          ctx.fillRect(w - sx - 3, sy, 2.5, 2.5);
        }
      }

      // Recessed dark anodized keyboard well
      this.drawRoundedRect(ctx, 72, 38, w - 144, 356, 14);
      ctx.fillStyle = '#0A0A0E';
      ctx.fill();
      ctx.strokeStyle = 'rgba(245, 241, 232, 0.08)';
      ctx.lineWidth = 2;
      ctx.stroke();

      // 6 rows of backlit keys with crisp legends
      const rows = [
        ['ESC', 'F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10', 'F11', 'F12', '◉'],
        ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', '⌫'],
        ['TAB', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\'],
        ['CAPS', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', "'", 'RETURN'],
        ['SHIFT', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', 'SHIFT'],
        ['fn', 'ctrl', 'opt', 'cmd', 'SPACE', 'cmd', 'opt', '◀', '▲▼', '▶']
      ];

      const wellX = 84;
      const wellW = w - 168;
      let curY = 48;

      rows.forEach((row, rIdx) => {
        const rowH = rIdx === 0 ? 38 : 52;
        const weights = row.map((label) => {
          if (label === 'SPACE') return 4.8;
          if (label === 'SHIFT') return 2.1;
          if (label === 'RETURN' || label === 'CAPS') return 1.75;
          if (label === 'TAB' || label === '⌫') return 1.45;
          if (label === 'cmd') return 1.25;
          return 1;
        });
        const totalWeight = weights.reduce((a, b) => a + b, 0);
        const gap = 7;
        const availW = wellW - gap * (row.length - 1);
        let curX = wellX;

        row.forEach((label, cIdx) => {
          const kw = (weights[cIdx] / totalWeight) * availW;
          const isEsc = rIdx === 0 && cIdx === 0;

          this.drawRoundedRect(ctx, curX, curY, kw, rowH, 6);
          ctx.fillStyle = isEsc ? '#D9642A' : '#13131A';
          ctx.fill();

          ctx.strokeStyle = isEsc ? '#FF9A5C' : 'rgba(245, 241, 232, 0.16)';
          ctx.lineWidth = 1.4;
          ctx.stroke();

          ctx.fillStyle = isEsc ? '#0B0B0D' : 'rgba(245, 241, 232, 0.78)';
          ctx.font = rIdx === 0 || label.length > 1
            ? '600 12px "JetBrains Mono", monospace'
            : '600 15px "Plus Jakarta Sans", sans-serif';
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          if (label !== 'SPACE') {
            ctx.fillText(label, curX + kw / 2, curY + rowH / 2 + 1);
          }

          curX += kw + gap;
        });

        curY += rowH + 7;
      });

      // Force Touch Glass Trackpad
      const tpW = 340;
      const tpH = 210;
      const tpX = (w - tpW) / 2;
      const tpY = 426;
      this.drawRoundedRect(ctx, tpX, tpY, tpW, tpH, 16);
      const tpGrad = ctx.createLinearGradient(tpX, tpY, tpX + tpW, tpY + tpH);
      tpGrad.addColorStop(0, '#16161E');
      tpGrad.addColorStop(1, '#121218');
      ctx.fillStyle = tpGrad;
      ctx.fill();
      ctx.strokeStyle = 'rgba(245, 241, 232, 0.12)';
      ctx.lineWidth = 1.8;
      ctx.stroke();
    });
  },

  /**
   * Optimized macOS Sequoia Dark Engineering Workspace & Live Telemetry Canvas
   */
  createLaptopScreenTexture() {
    const origW = 1600;
    const origH = 1020;
    const targetW = 1200;
    const targetH = 765;
    const scale = targetW / origW;

    return this.makeCanvasTexture(targetW, targetH, (ctx) => {
      ctx.scale(scale, scale);
      const w = origW;
      const h = origH;

      // Deep studio wallpaper gradient
      const bg = ctx.createLinearGradient(0, 0, w, h);
      bg.addColorStop(0, '#0C0C11');
      bg.addColorStop(0.55, '#101017');
      bg.addColorStop(1, '#09090D');
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, w, h);

      // Ambient warm radial glow inside screen
      const glow = ctx.createRadialGradient(w * 0.72, h * 0.36, 40, w * 0.72, h * 0.36, 620);
      glow.addColorStop(0, 'rgba(240, 120, 60, 0.16)');
      glow.addColorStop(1, 'rgba(240, 120, 60, 0)');
      ctx.fillStyle = glow;
      ctx.fillRect(0, 0, w, h);

      // macOS Top Menu Bar
      ctx.fillStyle = 'rgba(18, 18, 24, 0.94)';
      ctx.fillRect(0, 0, w, 54);
      ctx.strokeStyle = 'rgba(245, 241, 232, 0.09)';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(0, 54);
      ctx.lineTo(w, 54);
      ctx.stroke();

      // Traffic lights
      const dots = ['#FF5F56', '#FFBD2E', '#27C93F'];
      dots.forEach((c, i) => {
        ctx.fillStyle = c;
        ctx.beginPath();
        ctx.arc(36 + i * 24, 27, 7, 0, Math.PI * 2);
        ctx.fill();
      });

      ctx.fillStyle = '#F5F1E8';
      ctx.font = '600 18px "Plus Jakarta Sans", sans-serif';
      ctx.textAlign = 'left';
      ctx.fillText('vinicius-rodrigues — mobility-platform-v5', 124, 33);

      // Right status pill in menu bar
      this.drawRoundedRect(ctx, w - 370, 11, 340, 32, 16);
      ctx.fillStyle = 'rgba(240, 120, 60, 0.15)';
      ctx.fill();
      ctx.strokeStyle = 'rgba(240, 120, 60, 0.45)';
      ctx.stroke();
      ctx.fillStyle = '#FF9A5C';
      ctx.font = '600 15px "JetBrains Mono", monospace';
      ctx.fillText('● CI/CD GREEN • 40+ FLAVORS • 60FPS', w - 350, 32);

      // 1. Left Sidebar (Project Explorer)
      this.drawRoundedRect(ctx, 24, 76, 280, h - 100, 16);
      ctx.fillStyle = 'rgba(20, 20, 27, 0.9)';
      ctx.fill();
      ctx.strokeStyle = 'rgba(245, 241, 232, 0.08)';
      ctx.stroke();

      ctx.fillStyle = '#8E8A84';
      ctx.font = '600 14px "JetBrains Mono", monospace';
      ctx.fillText('WORKSPACE // MONOREPO', 48, 116);

      const files = [
        ['▾ packages/core_mobility', '#F5F1E8', false],
        ['  ▸ isolates_worker.dart', '#6EE7B7', false],
        ['  ▸ flavor_config.dart', '#FF9A5C', true],
        ['  ▸ offline_sync_sqlite.dart', '#B8B2A6', false],
        ['▾ services/telemetry-api', '#F5F1E8', false],
        ['  ▸ fleet.gateway.ts', '#FF9A5C', false],
        ['  ▸ redis.stream.ts', '#B8B2A6', false],
        ['▾ apps/local_speak_ai', '#F5F1E8', false],
        ['  ▸ sherpa_stt_engine.dart', '#6EE7B7', false],
        ['  ▸ gemma_local_llm.dart', '#B8B2A6', false]
      ];

      files.forEach(([name, col, active], idx) => {
        const fy = 160 + idx * 46;
        if (active) {
          this.drawRoundedRect(ctx, 36, fy - 24, 256, 36, 8);
          ctx.fillStyle = 'rgba(240, 120, 60, 0.16)';
          ctx.fill();
        }
        ctx.fillStyle = col;
        ctx.font = active ? '600 16px "JetBrains Mono", monospace' : '500 15px "JetBrains Mono", monospace';
        ctx.fillText(name, 48, fy);
      });

      // Lower sidebar architecture summary card
      this.drawRoundedRect(ctx, 40, h - 240, 248, 190, 12);
      ctx.fillStyle = 'rgba(14, 14, 19, 0.95)';
      ctx.fill();
      ctx.strokeStyle = 'rgba(240, 120, 60, 0.3)';
      ctx.stroke();
      ctx.fillStyle = '#FF9A5C';
      ctx.font = '600 14px "JetBrains Mono", monospace';
      ctx.fillText('RELEASE HEALTH', 60, h - 202);
      ctx.fillStyle = '#F5F1E8';
      ctx.font = '700 36px "Plus Jakarta Sans", sans-serif';
      ctx.fillText('-75%', 60, h - 150);
      ctx.fillStyle = '#B8B2A6';
      ctx.font = '500 16px "Plus Jakarta Sans", sans-serif';
      ctx.fillText('Redução de overhead', 60, h - 118);
      ctx.fillStyle = '#6EE7B7';
      ctx.font = '600 15px "JetBrains Mono", monospace';
      ctx.fillText('✓ 80%+ Test Coverage', 60, h - 82);

      // 2. Center Code & Architecture Panel
      this.drawRoundedRect(ctx, 324, 76, 690, 560, 16);
      ctx.fillStyle = 'rgba(18, 18, 25, 0.92)';
      ctx.fill();
      ctx.strokeStyle = 'rgba(245, 241, 232, 0.09)';
      ctx.stroke();

      // Editor Tab Bar
      ctx.fillStyle = 'rgba(240, 120, 60, 0.12)';
      this.drawRoundedRect(ctx, 342, 92, 260, 36, 8);
      ctx.fill();
      ctx.fillStyle = '#FF9A5C';
      ctx.font = '600 15px "JetBrains Mono", monospace';
      ctx.fillText('fleet.gateway.ts', 364, 115);
      ctx.fillStyle = '#8E8A84';
      ctx.fillText('isolates_worker.dart', 630, 115);

      const codeLines = [
        ['01', '#FF9A5C', '@WebSocketGateway({ namespace: "/fleet-live" })'],
        ['02', '#F5F1E8', 'export class MobilityTelemetryGateway {'],
        ['03', '#8E8A84', '  // Real-time vehicle stream & dynamic ETA engine'],
        ['04', '#F0783C', '  @SubscribeMessage("telemetry.frame")'],
        ['05', '#F5F1E8', '  async handleFrame(frame: VehicleGpsFrame) {'],
        ['06', '#6EE7B7', '    const route = await this.isolatePool.computeEta(frame);'],
        ['07', '#F5F1E8', '    return this.broker.broadcastToConsortium(route);'],
        ['08', '#F5F1E8', '  }'],
        ['09', '#FF9A5C', '  public getMultiFlavorMatrix(): FlavorRelease {'],
        ['10', '#6EE7B7', '    return { flavors: 42, startupDelta: "-40%" };'],
        ['11', '#F5F1E8', '  }'],
        ['12', '#F5F1E8', '}']
      ];

      codeLines.forEach(([ln, col, code], i) => {
        const y = 172 + i * 36;
        ctx.fillStyle = 'rgba(142, 138, 132, 0.5)';
        ctx.font = '500 17px "JetBrains Mono", monospace';
        ctx.fillText(ln, 352, y);
        ctx.fillStyle = col;
        ctx.font = '500 18px "JetBrains Mono", monospace';
        ctx.fillText(code, 398, y);
      });

      // 3. Bottom-Center Live Telemetry Waveform Graph
      this.drawRoundedRect(ctx, 324, 656, 690, h - 680, 16);
      ctx.fillStyle = 'rgba(18, 18, 25, 0.92)';
      ctx.fill();
      ctx.strokeStyle = 'rgba(245, 241, 232, 0.09)';
      ctx.stroke();

      ctx.fillStyle = '#B8B2A6';
      ctx.font = '600 15px "JetBrains Mono", monospace';
      ctx.fillText('DART ISOLATES // FRAME TIME & THROUGHPUT (60 FPS LOCK)', 352, 696);

      // Smooth Bezier area chart
      ctx.beginPath();
      ctx.moveTo(352, 930);
      const pts = [
        [352, 860], [450, 810], [540, 845], [640, 770],
        [740, 795], [850, 740], [976, 760]
      ];
      pts.forEach(([px, py]) => ctx.lineTo(px, py));
      ctx.lineTo(976, 930);
      ctx.closePath();
      const areaGrad = ctx.createLinearGradient(0, 730, 0, 930);
      areaGrad.addColorStop(0, 'rgba(240, 120, 60, 0.34)');
      areaGrad.addColorStop(1, 'rgba(240, 120, 60, 0.0)');
      ctx.fillStyle = areaGrad;
      ctx.fill();

      ctx.beginPath();
      pts.forEach(([px, py], idx) => {
        if (idx === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      });
      ctx.strokeStyle = '#FF9A5C';
      ctx.lineWidth = 3.5;
      ctx.stroke();

      pts.forEach(([px, py]) => {
        ctx.fillStyle = '#F5F1E8';
        ctx.beginPath();
        ctx.arc(px, py, 5, 0, Math.PI * 2);
        ctx.fill();
      });

      // 4. Right Column: Geospatial Fleet Radar & Circular Gauges
      this.drawRoundedRect(ctx, 1034, 76, w - 1058, h - 100, 16);
      ctx.fillStyle = 'rgba(20, 20, 28, 0.94)';
      ctx.fill();
      ctx.strokeStyle = 'rgba(240, 120, 60, 0.28)';
      ctx.stroke();

      ctx.fillStyle = '#FF9A5C';
      ctx.font = '600 15px "JetBrains Mono", monospace';
      ctx.fillText('LIVE FLEET GEOSPATIAL MESH', 1066, 118);

      // Radar circle
      const rx = 1304;
      const ry = 310;
      [145, 100, 55].forEach((rad) => {
        ctx.beginPath();
        ctx.arc(rx, ry, rad, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(245, 241, 232, 0.09)';
        ctx.lineWidth = 1.5;
        ctx.stroke();
      });

      // Route vector inside radar
      ctx.beginPath();
      ctx.moveTo(rx - 95, ry + 70);
      ctx.quadraticCurveTo(rx - 20, ry - 80, rx + 105, ry - 45);
      ctx.strokeStyle = '#F0783C';
      ctx.lineWidth = 4;
      ctx.stroke();

      // Active vehicle nodes
      [[-95, 70], [-18, -12], [52, -32], [105, -45]].forEach(([dx, dy]) => {
        ctx.fillStyle = '#6EE7B7';
        ctx.beginPath();
        ctx.arc(rx + dx, ry + dy, 7, 0, Math.PI * 2);
        ctx.fill();
      });

      // Architecture Pillar Bars in Right Column
      const pillars = [
        ['AppBus2 v5 • Multi-Flavor', '40+ Apps', 0.94],
        ['STTP • NEAT & Mobilidade', '5+ Apps', 0.88],
        ['Bus2Driver • WebSocket GPS', '+35% Sync', 0.91],
        ['LocalSpeak • On-Device AI', '100% Offline', 0.96]
      ];

      pillars.forEach(([title, badge, ratio], i) => {
        const py = 530 + i * 102;
        ctx.fillStyle = '#F5F1E8';
        ctx.font = '600 19px "Plus Jakarta Sans", sans-serif';
        ctx.fillText(title, 1066, py);

        ctx.fillStyle = '#FF9A5C';
        ctx.font = '600 16px "JetBrains Mono", monospace';
        ctx.textAlign = 'right';
        ctx.fillText(badge, w - 58, py);
        ctx.textAlign = 'left';

        this.drawRoundedRect(ctx, 1066, py + 16, 476, 12, 6);
        ctx.fillStyle = 'rgba(245, 241, 232, 0.08)';
        ctx.fill();

        this.drawRoundedRect(ctx, 1066, py + 16, Math.round(476 * ratio), 12, 6);
        ctx.fillStyle = i === 3 ? '#6EE7B7' : '#F0783C';
        ctx.fill();
      });
    });
  },

  /**
   * Optimized iOS 18 / Flutter Flagship Mobile Screen
   */
  createPhoneScreenTexture() {
    const origW = 900;
    const origH = 1840;
    const targetW = 540;
    const targetH = 1104;
    const scale = targetW / origW;

    return this.makeCanvasTexture(targetW, targetH, (ctx) => {
      ctx.scale(scale, scale);
      const w = origW;
      const h = origH;

      const bg = ctx.createLinearGradient(0, 0, 0, h);
      bg.addColorStop(0, '#101118');
      bg.addColorStop(0.5, '#0C0D13');
      bg.addColorStop(1, '#08080C');
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, w, h);

      // iOS Status Bar
      ctx.fillStyle = '#F5F1E8';
      ctx.font = '700 28px "Plus Jakarta Sans", sans-serif';
      ctx.fillText('9:41', 72, 82);
      ctx.fillStyle = '#6EE7B7';
      ctx.font = '600 22px "JetBrains Mono", monospace';
      ctx.fillText('5G ● 100%', w - 210, 80);

      // Live Activity Pill below Dynamic Island
      this.drawRoundedRect(ctx, 48, 138, w - 96, 132, 36);
      ctx.fillStyle = 'rgba(24, 24, 34, 0.95)';
      ctx.fill();
      ctx.strokeStyle = 'rgba(240, 120, 60, 0.5)';
      ctx.lineWidth = 2.5;
      ctx.stroke();

      ctx.fillStyle = '#FF9A5C';
      ctx.font = '700 20px "JetBrains Mono", monospace';
      ctx.fillText('APPBUS2 V5 // LIVE TELEMETRY', 92, 186);
      ctx.fillStyle = '#F5F1E8';
      ctx.font = '700 34px "Plus Jakarta Sans", sans-serif';
      ctx.fillText('Linha 092 • ETA 3 min', 92, 236);
      ctx.fillStyle = '#6EE7B7';
      ctx.font = '700 24px "JetBrains Mono", monospace';
      ctx.fillText('60 FPS', w - 180, 234);

      // Dark Vector Route Map Canvas
      this.drawRoundedRect(ctx, 48, 304, w - 96, 680, 40);
      ctx.fillStyle = '#13151F';
      ctx.fill();
      ctx.strokeStyle = 'rgba(245, 241, 232, 0.1)';
      ctx.stroke();

      // Subtle street grid inside map card
      ctx.strokeStyle = 'rgba(245, 241, 232, 0.04)';
      ctx.lineWidth = 2;
      for (let gx = 90; gx < w - 90; gx += 75) {
        ctx.beginPath();
        ctx.moveTo(gx, 320);
        ctx.lineTo(gx, 960);
        ctx.stroke();
      }
      for (let gy = 360; gy < 950; gy += 75) {
        ctx.beginPath();
        ctx.moveTo(64, gy);
        ctx.lineTo(w - 64, gy);
        ctx.stroke();
      }

      // Glowing burnt-orange transit route curve
      ctx.beginPath();
      ctx.moveTo(130, 860);
      ctx.bezierCurveTo(260, 780, 310, 520, 520, 540);
      ctx.bezierCurveTo(650, 550, 690, 420, 740, 390);
      ctx.strokeStyle = 'rgba(240, 120, 60, 0.3)';
      ctx.lineWidth = 18;
      ctx.lineCap = 'round';
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(130, 860);
      ctx.bezierCurveTo(260, 780, 310, 520, 520, 540);
      ctx.bezierCurveTo(650, 550, 690, 420, 740, 390);
      ctx.strokeStyle = '#FF9A5C';
      ctx.lineWidth = 7;
      ctx.stroke();

      // Waypoint pins
      [[130, 860, '#F5F1E8'], [450, 555, '#FF9A5C'], [740, 390, '#6EE7B7']].forEach(([px, py, col]) => {
        ctx.fillStyle = col;
        ctx.beginPath();
        ctx.arc(px, py, 14, 0, Math.PI * 2);
        ctx.fill();
      });

      // Floating map telemetry badge
      this.drawRoundedRect(ctx, 84, 868, w - 168, 84, 22);
      ctx.fillStyle = 'rgba(15, 15, 22, 0.92)';
      ctx.fill();
      ctx.fillStyle = '#F5F1E8';
      ctx.font = '600 24px "Plus Jakarta Sans", sans-serif';
      ctx.fillText('Dart Isolates • -40% Startup', 118, 920);

      // Bottom Sheet: LocalSpeak On-Device AI Voice Assistant
      this.drawRoundedRect(ctx, 48, 1020, w - 96, 710, 44);
      ctx.fillStyle = 'rgba(22, 22, 31, 0.96)';
      ctx.fill();
      ctx.strokeStyle = 'rgba(240, 120, 60, 0.42)';
      ctx.lineWidth = 2.5;
      ctx.stroke();

      ctx.fillStyle = '#FF9A5C';
      ctx.font = '700 22px "JetBrains Mono", monospace';
      ctx.fillText('LOCALSPEAK // ON-DEVICE AI', 96, 1092);

      ctx.fillStyle = '#F5F1E8';
      ctx.font = '700 42px "Plus Jakarta Sans", sans-serif';
      ctx.fillText('LLM & Voz 100% Offline', 96, 1156);

      ctx.fillStyle = '#B8B2A6';
      ctx.font = '500 25px "Plus Jakarta Sans", sans-serif';
      ctx.fillText('sherpa_onnx + flutter_gemma • Zero Nuvem', 96, 1208);

      // Voice spectrum waveform bars
      for (let i = 0; i < 24; i++) {
        const bh = 36 + Math.round(Math.sin(i * 0.62) * 34 + 38);
        this.drawRoundedRect(ctx, 96 + i * 29, 1345 - bh / 2, 16, bh, 8);
        ctx.fillStyle = i % 3 === 0 ? '#6EE7B7' : '#FF9A5C';
        ctx.fill();
      }

      // Architecture chips at bottom of sheet
      this.drawRoundedRect(ctx, 96, 1480, w - 192, 92, 20);
      ctx.fillStyle = 'rgba(240, 120, 60, 0.14)';
      ctx.fill();
      ctx.fillStyle = '#F5F1E8';
      ctx.font = '600 23px "JetBrains Mono", monospace';
      ctx.fillText('CLEAN ARCH • BLOC • SQLITE SYNC', 132, 1536);

      ctx.fillStyle = '#6EE7B7';
      ctx.font = '600 22px "JetBrains Mono", monospace';
      ctx.fillText('● STTP • BUS2 • ACCENTURE', 96, 1656);

      // iOS Home Indicator
      this.drawRoundedRect(ctx, w / 2 - 130, h - 46, 260, 12, 6);
      ctx.fillStyle = 'rgba(245, 241, 232, 0.42)';
      ctx.fill();
    });
  },

  buildLaptopAssembly() {
    const THREE = window.THREE;
    const laptopRoot = new THREE.Group();
    this.scene.add(laptopRoot);
    this.groups.laptopRoot = laptopRoot;

    // 0. Studio Floor Contact Shadow Catcher (Lightweight 128x128 radial canvas)
    const shadowCanvas = document.createElement('canvas');
    shadowCanvas.width = 128;
    shadowCanvas.height = 128;
    const sctx = shadowCanvas.getContext('2d');
    const grad = sctx.createRadialGradient(64, 64, 10, 64, 64, 60);
    grad.addColorStop(0, 'rgba(0, 0, 0, 0.82)');
    grad.addColorStop(0.6, 'rgba(0, 0, 0, 0.34)');
    grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
    sctx.fillStyle = grad;
    sctx.fillRect(0, 0, 128, 128);

    const shadowPlane = new THREE.Mesh(
      new THREE.PlaneGeometry(410, 280),
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

    // 1. Lower Unibody Chassis Group
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
      new THREE.BoxGeometry(132, 2.4, 3.2),
      this.materials.lipGlow
    );
    lipGlowMesh.position.set(0, -4.2, 107.2);
    chassisBottomGroup.add(lipGlowMesh);
    this.groups.lipGlowMesh = lipGlowMesh;

    // 2. Top Keyboard Deck (Baked High-DPI Backlit Keyboard & Trackpad)
    const keyboardDeckGroup = new THREE.Group();
    keyboardDeckGroup.position.set(0, 0, 5);
    laptopRoot.add(keyboardDeckGroup);
    this.groups.keyboardDeckGroup = keyboardDeckGroup;

    const topDeckMesh = new THREE.Mesh(
      new THREE.BoxGeometry(302, 2.2, 202),
      this.materials.deckAluminum
    );
    keyboardDeckGroup.add(topDeckMesh);

    const deckTex = this.createKeyboardDeckTexture();
    const deckSurfaceMat = new THREE.MeshStandardMaterial({
      map: deckTex,
      roughness: 0.42,
      metalness: 0.35
    });
    this.materials.deckSurface = deckSurfaceMat;

    const deckSurfacePlane = new THREE.Mesh(
      new THREE.PlaneGeometry(298, 198),
      deckSurfaceMat
    );
    deckSurfacePlane.rotation.x = -Math.PI / 2;
    deckSurfacePlane.position.set(0, 1.25, 0);
    keyboardDeckGroup.add(deckSurfacePlane);

    laptopRoot.add(this.lights.screenSpill);

    // 3. Unified Hinge Barrel & Articulated Lid at (y=1.2, z=-95)
    const hingePivot = new THREE.Group();
    hingePivot.position.set(0, 1.2, -95);
    laptopRoot.add(hingePivot);
    this.groups.hingePivot = hingePivot;

    const hingeBarrel = new THREE.Mesh(
      new THREE.CylinderGeometry(4.2, 4.2, 230, 14),
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
      emissiveIntensity: 0.46,
      roughness: 0.2,
      metalness: 0.08
    });
    this.materials.laptopScreen = screenMat;

    const screenMesh = new THREE.Mesh(
      new THREE.PlaneGeometry(290, 184),
      screenMat
    );
    screenMesh.position.set(0, 98, 0.5);
    hingePivot.add(screenMesh);

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

    // Rear camera bump
    const camBump = new THREE.Mesh(
      new THREE.BoxGeometry(42, 42, 3.6),
      this.materials.anodizedChamfer
    );
    camBump.position.set(-20, 64, -6.2);
    phoneChassisGroup.add(camBump);

    const lensGeom = new THREE.CylinderGeometry(6.5, 6.5, 2.2, 12);
    const lensMat = new THREE.MeshStandardMaterial({ color: 0x050508, roughness: 0.2, metalness: 0.9 });
    const lens1 = new THREE.Mesh(lensGeom, lensMat);
    lens1.rotation.x = Math.PI / 2;
    lens1.position.set(-28, 72, -7.8);
    phoneChassisGroup.add(lens1);

    const lens2 = new THREE.Mesh(lensGeom, lensMat);
    lens2.rotation.x = Math.PI / 2;
    lens2.position.set(-12, 56, -7.8);
    phoneChassisGroup.add(lens2);

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

    const phoneScreenGroup = new THREE.Group();
    phoneScreenGroup.position.set(0, 0, 5.6);
    phoneRoot.add(phoneScreenGroup);
    this.groups.phoneScreenGroup = phoneScreenGroup;

    const phoneTex = this.createPhoneScreenTexture();
    const phoneScreenMat = new THREE.MeshStandardMaterial({
      map: phoneTex,
      emissiveMap: phoneTex,
      emissive: 0xFFFFFF,
      emissiveIntensity: 0.48,
      roughness: 0.18,
      metalness: 0.08
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
      new THREE.CircleGeometry(2.2, 12),
      new THREE.MeshBasicMaterial({ color: 0xFF9A5C })
    );
    cameraDot.position.set(9, 80, 1.6);
    phoneScreenGroup.add(cameraDot);
  },

  bindToolbarAndPointer(viewport, canvas) {
    const section = DOMUtils.qs('#showcase');

    const onDown = (clientX, clientY) => {
      this.isDragging = true;
      this.pointerStart.x = clientX;
      this.pointerStart.y = clientY;
    };

    const onMove = (clientX, clientY) => {
      if (this.isDragging) {
        const dx = clientX - this.pointerStart.x;
        const dy = clientY - this.pointerStart.y;
        this.pointerStart.x = clientX;
        this.pointerStart.y = clientY;

        this.orbitTarget.yaw = Math.max(-0.45, Math.min(0.45, this.orbitTarget.yaw + dx * 0.0035));
        this.orbitTarget.pitch = Math.max(-0.25, Math.min(0.25, this.orbitTarget.pitch + dy * 0.0025));
        this.orbitCurrent.yaw = this.orbitTarget.yaw;
        this.orbitCurrent.pitch = this.orbitTarget.pitch;
        this.requestRender();
        return;
      }

      // Subtle hover parallax & ambient light spill when moving pointer inside #showcase
      if (section && this.isVisible && window.innerWidth > 992) {
        const rect = this.cachedViewportRect || viewport.getBoundingClientRect();
        if (clientY >= rect.top - 100 && clientY <= rect.bottom + 100) {
          const nx = ((clientX - rect.left) / Math.max(1, rect.width)) - 0.5;
          const ny = ((clientY - rect.top) / Math.max(1, rect.height)) - 0.5;
          this.hoverParallax.yaw = Math.max(-0.05, Math.min(0.05, nx * 0.09));
          this.hoverParallax.pitch = Math.max(-0.03, Math.min(0.03, ny * 0.06));
          section.style.setProperty('--spill-x', `${Math.round(50 + nx * 24)}%`);
          section.style.setProperty('--spill-y', `${Math.round(52 + ny * 18)}%`);
          this.requestRender();
        }
      }
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
        if (this.isVisible) {
          this.requestRender();
        }
      });
    }, { rootMargin: '80px 0px' });
    observer.observe(viewport);
  },

  onResize() {
    const viewport = DOMUtils.qs('#showcase-viewport');
    const canvas = DOMUtils.qs('#showcase-webgl-canvas');
    if (!viewport || !canvas || !this.renderer || !this.camera) return;

    const isStacked = window.innerWidth <= 992;
    const isMobile = window.innerWidth <= 768;

    const rect = canvas.getBoundingClientRect();
    const width = Math.max(300, rect.width || viewport.clientWidth);
    const height = Math.max(400, rect.height || 490);

    const maxDpr = isMobile ? 1.0 : Math.min(window.devicePixelRatio || 1, 1.25);
    this.renderer.setPixelRatio(maxDpr);
    this.renderer.setSize(width, height, false);
    this.camera.aspect = width / height;

    if (isStacked) {
      this.camera.fov = 38;
      this.camera.position.set(0, 10, 640);
      this.camera.lookAt(0, 10, 0);
    } else {
      this.camera.fov = 30;
      this.camera.position.set(0, 0, 480);
      this.camera.lookAt(0, 0, 0);
    }
    this.camera.updateProjectionMatrix();
    this.requestRender();
  },

  applyStateToScene(elapsed) {
    const isStacked = window.innerWidth <= 992;
    const s = this.state;

    const targetYaw = this.orbitTarget.yaw + (isStacked ? 0 : this.hoverParallax.yaw);
    const targetPitch = this.orbitTarget.pitch + (isStacked ? 0 : this.hoverParallax.pitch);
    this.orbitCurrent.yaw += (targetYaw - this.orbitCurrent.yaw) * 0.22;
    this.orbitCurrent.pitch += (targetPitch - this.orbitCurrent.pitch) * 0.22;

    const effectiveLid = s.manualOverride ? 1 : s.lidOpen;
    const effectiveSpill = s.manualOverride ? 1 : s.spill;

    const section = DOMUtils.qs('#showcase');
    if (section) {
      section.style.setProperty('--spill-alpha', (0.04 + effectiveSpill * 0.08).toFixed(3));
    }

    const {
      laptopRoot,
      phoneRoot,
      hingePivot,
      lipGlowMesh
    } = this.groups;

    // Derive container-aware frustum bounds so 3D hardware scales gracefully across desktop and mobile without clipping
    const camFov = this.camera?.fov || (isStacked ? 38 : 30);
    const camZ = this.camera?.position.z || (isStacked ? 640 : 480);
    const aspect = this.camera?.aspect || (isStacked ? 0.62 : 2.48);
    const halfH = Math.tan((camFov * Math.PI) / 360) * camZ;
    const halfW = halfH * aspect;

    // Desktop right-stage layout metrics (editorial header occupies ~42-43% on the left)
    const textEndX = -halfW + halfW * 2 * 0.43;
    const rightMinX = textEndX + 18;
    const rightMaxX = halfW - 10;
    const availRightW = Math.max(220, rightMaxX - rightMinX);

    const desktopLaptopScale = Math.min(
      0.76,
      Math.max(0.48, Math.min(availRightW / 445, (halfH * 2 * 0.84) / 225))
    );
    const desktopPhoneScale = desktopLaptopScale * 0.96;
    const laptopW = 306 * desktopLaptopScale;
    const phoneW = 98 * desktopPhoneScale;
    const pairGap = 28 * desktopLaptopScale;
    const pairTotalW = laptopW + pairGap + phoneW;
    const pairCenterX = (rightMinX + rightMaxX) * 0.5;
    const desktopLaptopX = pairCenterX - pairTotalW * 0.5 + laptopW * 0.5;
    const desktopPhoneX = pairCenterX + pairTotalW * 0.5 - phoneW * 0.5;

    // Mobile/tablet stacked responsive scale metrics
    const stackedFitW = (halfW * 2 * 0.84) / 310;
    const stackedLaptopScale = Math.min(0.72, Math.max(0.50, stackedFitW));
    const stackedPhoneScale = Math.min(0.74, Math.max(0.54, stackedFitW * 1.04));

    if (laptopRoot) {
      if (isStacked) {
        laptopRoot.scale.setScalar(stackedLaptopScale);
        laptopRoot.position.set(0, 58 + (1 - effectiveLid) * 14, 0);
        laptopRoot.rotation.set(
          0.24 + this.orbitCurrent.pitch,
          this.orbitCurrent.yaw,
          0
        );
      } else {
        laptopRoot.scale.setScalar(desktopLaptopScale);
        laptopRoot.position.set(
          desktopLaptopX,
          -72 * desktopLaptopScale + (1 - effectiveLid) * 14,
          0
        );
        laptopRoot.rotation.set(
          0.19 + (1 - effectiveLid) * 0.12 + this.orbitCurrent.pitch,
          -0.06 + (1 - effectiveLid) * -0.04 + this.orbitCurrent.yaw,
          0
        );
      }
    }

    if (hingePivot) {
      const closedAngle = 1.54;
      const openAngle = -0.18;
      hingePivot.rotation.x = closedAngle + (openAngle - closedAngle) * effectiveLid;
    }

    if (lipGlowMesh) {
      this.materials.lipGlow.opacity = 0.22 + s.lipGlow * 0.78;
      lipGlowMesh.scale.x = 0.38 + s.lipGlow * 0.62;
    }
    if (this.lights.screenSpill) {
      this.lights.screenSpill.intensity = effectiveSpill * 1.8;
    }

    if (phoneRoot) {
      if (isStacked) {
        phoneRoot.scale.setScalar(stackedPhoneScale);
        phoneRoot.position.set(0, -104 + (1 - effectiveLid) * 16, 18);
        phoneRoot.rotation.set(
          -0.06 + this.orbitCurrent.pitch,
          this.orbitCurrent.yaw,
          0
        );
      } else {
        phoneRoot.scale.setScalar(desktopPhoneScale);
        phoneRoot.position.set(
          desktopPhoneX,
          2 + (1 - effectiveLid) * 12,
          18
        );
        phoneRoot.rotation.set(
          -0.04 + (1 - effectiveLid) * 0.12 + this.orbitCurrent.pitch,
          -0.20 + (1 - effectiveLid) * 0.16 + this.orbitCurrent.yaw,
          0.02
        );
      }
    }
  },

  updateCalloutLines() {},

  requestRender() {
    if (!this.isVisible || !this.renderer) return;
    if (this.renderRequested) return;
    this.renderRequested = true;
    requestAnimationFrame(() => {
      this.renderRequested = false;
      this.renderFrame();
    });
  },

  renderFrame() {
    if (!this.renderer || !this.scene || !this.camera) return;
    const elapsed = this.clock ? this.clock.getElapsedTime() : 0;
    this.applyStateToScene(elapsed);
    this.renderer.render(this.scene, this.camera);
  }
};
window.TeardownShowcase3D = TeardownShowcase3D;

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
    const webglReady = TeardownShowcase3D.init();

    if (DOMUtils.prefersReducedMotion() || typeof window.gsap === 'undefined') {
      const isStacked = window.innerWidth <= 992;
      if (notebook && !webglReady) {
        notebook.style.transform = isStacked
          ? 'translate3d(0px, 0px, 0px) rotateX(-18deg) rotateY(0deg) rotateZ(0deg)'
          : 'translate3d(0px, 0px, 0px) rotateX(-18deg) rotateY(-8deg) rotateZ(0deg)';
      }
      if (lid && !webglReady) lid.style.transform = 'rotateX(12deg)';
      if (phone && !webglReady) {
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
        TeardownShowcase3D.onResize();
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
    const webglActive = TeardownShowcase3D.init();
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

    if (this.showcaseTimeline) {
      if (this.showcaseTimeline.scrollTrigger) {
        this.showcaseTimeline.scrollTrigger.kill();
      }
      this.showcaseTimeline.kill();
      this.showcaseTimeline = null;
    }

    const isStacked = window.innerWidth <= 992;

    if (webglActive) {
      const tlWebgl = gsap.timeline({
        onUpdate: () => TeardownShowcase3D.requestRender(),
        scrollTrigger: {
          trigger: '#showcase-viewport',
          start: 'top 84%',
          end: isStacked ? 'bottom 66%' : 'center 42%',
          scrub: 0.85,
          invalidateOnRefresh: true,
          onUpdate: () => TeardownShowcase3D.requestRender()
        }
      });

      // Momento 1 (0.00 -> 0.22): Front-lip amber light bar awakens
      tlWebgl.fromTo(TeardownShowcase3D.state,
        { lipGlow: 0.22 },
        { lipGlow: 1, duration: 0.22, ease: 'power2.out' },
        0
      );

      // Momento 2 (0.14 -> 0.78): Articulated lid opens + screen light spill onto 3D keyboard
      tlWebgl.fromTo(TeardownShowcase3D.state,
        { lidOpen: 0, spill: 0 },
        { lidOpen: 1, spill: 1, duration: 0.64, ease: 'power2.inOut' },
        0.14
      );

      // Momento 3 (0.64 -> 1.00): 2.5D UI Cards pop out & SVG callouts activate
      tlWebgl.fromTo(TeardownShowcase3D.state,
        { popout: 0, scrollProgress: 0 },
        { popout: 1, scrollProgress: 1, duration: 0.36, ease: 'power3.out' },
        0.64
      );

      this.showcaseTimeline = tlWebgl;
      TeardownShowcase3D.requestRender();
      return;
    }

    if (!notebook || !lid || !phone) return;

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
    const companyBtns = DOMUtils.qsa('.hero-company-card');
    const closeBtn = DOMUtils.qs(PORTFOLIO_CONFIG.selectors.modalCloseBtn);
    const backdrop = DOMUtils.qs(PORTFOLIO_CONFIG.selectors.caseModal);

    openBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-project-id');
        if (id) UIComponents.openCaseModal(id, btn);
      });
    });

    companyBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const companyId = btn.getAttribute('data-company-id');
        if (companyId) UIComponents.openCompanyModal(companyId, btn);
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
      UIComponents.renderDynamicExperienceYears();
      TopoHeroBackground.init();
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
