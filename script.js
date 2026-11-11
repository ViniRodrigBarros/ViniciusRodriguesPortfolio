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
        'Apps Públicos em Operação',
        '+20% Eficiência em Campo'
      ],
      scopeOverview: 'Trajetória completa desde o primeiro estágio em engenharia de software (Jan 2022) até a liderança técnica da frente mobile municipal, coordenando arquitetura, Code Review, padronização em BLoC/Clean Architecture e sustentação de aplicativos oficiais utilizados diariamente por agentes de trânsito e cidadãos.',
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
        'Apps móveis em produção contínua'
      ],
      summary: 'Liderança técnica da frente mobile municipal, coordenando a arquitetura, qualidade de código e evolução dos aplicativos públicos em operação.',
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
      classification: 'work',
      classificationLabel: 'Projeto de Trabalho',
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
      productionBadge: 'Aplicativo Oficial em Produção • Bus2',
      linkLabel: 'Acessar landing page oficial',
      linkDomain: 'bus2.app',
      linkImage: 'assets/logos/bus2.png',
      linkUrl: 'https://bus2.app/'
    },
    {
      id: 'neat-sttp',
      index: '02',
      classification: 'work',
      classificationLabel: 'Projeto de Trabalho',
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
      accessNotice: 'Projeto de uso interno, não disponível para o público',
      accessNoticeType: 'internal',
      linkLabel: null,
      linkUrl: null
    },
    {
      id: 'bus2driver',
      index: '03',
      classification: 'work',
      classificationLabel: 'Projeto de Trabalho',
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
      accessNotice: 'Projeto de uso interno, não disponível para o público',
      accessNoticeType: 'internal',
      linkLabel: null,
      linkUrl: null
    },
    {
      id: 'localspeak',
      index: '04',
      classification: 'academic',
      classificationLabel: 'Projeto Acadêmico',
      companyOrContext: 'TCC Engenharia de Computação • IFPB',
      categoryLabel: 'IA On-Device & Offline Mobile Architecture',
      title: 'LocalSpeak (TCC Speak Lab) — Conversação com IA 100% On-Device',
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
      accessNotice: 'Projeto em desenvolvimento para TCC',
      accessNoticeType: 'dev',
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

  /**
   * Renders classification status / official landing card shared between carousel slides and modal.
   */
  renderProjectAccessControl(project) {
    const parts = [];

    if (project.linkUrl && project.linkImage) {
      parts.push(`
        <a href="${DOMUtils.escapeHTML(project.linkUrl)}" target="_blank" rel="noopener noreferrer" class="project-official-card group" aria-label="${DOMUtils.escapeHTML(project.linkLabel || 'Acessar landing page oficial')}">
          <span class="project-official-thumb">
            <img src="${DOMUtils.escapeHTML(project.linkImage)}" alt="${DOMUtils.escapeHTML(project.linkDomain || 'Logo oficial')}" loading="lazy" />
          </span>
          <span class="flex flex-col text-left leading-tight">
            <span class="font-mono-meta text-[10px] text-[#FF9A5C]">LANDING PAGE OFICIAL</span>
            <span class="text-xs font-medium text-[#F5F1E8] group-hover:text-[#FF9A5C] transition-colors">${DOMUtils.escapeHTML(project.linkDomain || 'Site Oficial')}</span>
          </span>
          <svg class="w-3.5 h-3.5 shrink-0 text-[#F0783C] ml-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 17L17 7M17 7H7M17 7V17" />
          </svg>
        </a>
      `);
    } else if (project.linkUrl) {
      parts.push(`
        <a href="${DOMUtils.escapeHTML(project.linkUrl)}" target="_blank" rel="noopener noreferrer" class="btn-secondary-editorial text-xs py-3 px-5 flex items-center gap-2">
          <span>${DOMUtils.escapeHTML(project.linkLabel || 'Acessar projeto')}</span>
          <svg class="w-3.5 h-3.5 shrink-0 text-[#F0783C]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 17L17 7M17 7H7M17 7V17" />
          </svg>
        </a>
      `);
    }

    if (project.accessNotice) {
      const isDev = project.accessNoticeType === 'dev';
      const iconPath = isDev
        ? '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.6" d="M12 6v6l4 2m6-2a10 10 0 11-20 0 10 10 0 0120 0z" />'
        : '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.6" d="M16 11V7a4 4 0 00-8 0v4m-2 0h12a1 1 0 011 1v7a1 1 0 01-1 1H6a1 1 0 01-1-1v-7a1 1 0 011-1z" />';
      parts.push(`
        <span class="project-status-pill ${isDev ? 'is-dev' : 'is-internal'}">
          <svg class="w-3.5 h-3.5 shrink-0 text-[#F0783C]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">${iconPath}</svg>
          <span>${DOMUtils.escapeHTML(project.accessNotice)}</span>
        </span>
      `);
    } else if (!project.linkUrl && project.productionBadge) {
      parts.push(`
        <span class="font-mono-meta text-xs text-[#8E8A84] px-2 py-1">
          ${DOMUtils.escapeHTML(project.productionBadge)}
        </span>
      `);
    }

    return parts.join('');
  },

  renderCarousel(filter = 'all') {
    const track = DOMUtils.qs(PORTFOLIO_CONFIG.selectors.carouselTrack);
    const dotsContainer = DOMUtils.qs(PORTFOLIO_CONFIG.selectors.carouselDots);
    const viewport = DOMUtils.qs(PORTFOLIO_CONFIG.selectors.carouselViewport);
    const prevBtn = DOMUtils.qs(PORTFOLIO_CONFIG.selectors.carouselPrevBtn);
    const nextBtn = DOMUtils.qs(PORTFOLIO_CONFIG.selectors.carouselNextBtn);
    const currentEl = DOMUtils.qs(PORTFOLIO_CONFIG.selectors.carouselCurrentIndex);
    const totalEl = DOMUtils.qs(PORTFOLIO_CONFIG.selectors.carouselTotalCount);

    if (!track || !dotsContainer) return { totalSlides: 0 };

    const allProjects = PORTFOLIO_DATA.projects;
    const counts = {
      all: allProjects.length,
      work: allProjects.filter(p => p.classification === 'work').length,
      personal: allProjects.filter(p => p.classification === 'personal').length,
      academic: allProjects.filter(p => p.classification === 'academic').length
    };
    Object.entries(counts).forEach(([key, val]) => {
      const badge = DOMUtils.qs(`[data-filter-count="${key}"]`);
      if (badge) badge.textContent = String(val).padStart(2, '0');
    });

    const projects = filter === 'all'
      ? allProjects
      : allProjects.filter(p => p.classification === filter);

    if (totalEl) totalEl.textContent = String(projects.length).padStart(2, '0');
    if (currentEl) currentEl.textContent = projects.length ? '01' : '00';

    const disableNav = projects.length <= 1;
    if (prevBtn) prevBtn.disabled = disableNav;
    if (nextBtn) nextBtn.disabled = disableNav;
    if (viewport) viewport.classList.toggle('is-static', disableNav);

    track.style.transform = 'translate3d(0%, 0, 0)';

    if (!projects.length) {
      track.innerHTML = `
        <article class="carousel-slide p-8 sm:p-12 md:p-16 text-center">
          <div class="max-w-xl mx-auto space-y-4">
            <span class="font-mono-meta text-xs text-[#FF9A5C] inline-block">
              PROJETOS PESSOAIS • PORTFÓLIO EM CURADORIA
            </span>
            <h3 class="text-2xl sm:text-3xl font-semibold text-[#F5F1E8]">
              Mais projetos disponíveis no GitHub
            </h3>
            <p class="text-[#AAA6A0] text-sm md:text-base leading-relaxed">
              Alguns dos meus principais projetos pessoais, experimentos e utilitários ficam publicados diretamente no meu perfil do GitHub enquanto preparo estudos de caso detalhados para esta vitrine.
            </p>
            <div class="flex flex-wrap items-center justify-center gap-3 pt-2">
              <a href="https://github.com/ViniRodrigBarros?tab=repositories" target="_blank" rel="noopener noreferrer" class="btn-primary-editorial text-xs py-3 px-5">
                <span>Explorar repositórios no GitHub</span>
                <svg class="w-3.5 h-3.5 shrink-0 text-current" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </a>
              <button type="button" data-reset-project-filter class="btn-secondary-editorial text-xs py-3 px-5">
                Ver todos os projetos
              </button>
            </div>
          </div>
        </article>
      `;
      dotsContainer.innerHTML = '';
      return { totalSlides: 0 };
    }

    track.innerHTML = projects.map((project, idx) => `
      <article id="carousel-slide-${idx}" class="carousel-slide p-7 sm:p-10 md:p-12" ${idx === 0 ? '' : 'inert'}>
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          <!-- Left Column: Case Info -->
          <div class="lg:col-span-6 space-y-5">
            <div class="slide-stagger-item flex flex-wrap items-center gap-2.5">
              <span class="font-mono-meta text-xs text-[#FF9A5C]">
                ${DOMUtils.escapeHTML(project.classificationLabel || `PROJETO ${project.index}`)}
              </span>
              <span class="text-[#8E8A84]" aria-hidden="true">•</span>
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
              ${this.renderProjectAccessControl(project)}
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

    return { totalSlides: projects.length };
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

    catEl.textContent = `${project.classificationLabel || project.companyOrContext} — ${project.categoryLabel}`;
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
        <div class="flex flex-wrap items-center gap-3">
          ${this.renderProjectAccessControl(project)}
        </div>
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
 * 10B. LIGHTWEIGHT INTERACTIVE 3D WORKSTATION SHOWCASE (THREE.JS PBR)
 * ==========================================================================
 * Single centered sleek anodized laptop with IDE + docked mobile emulator inside
 * the display and 4 sculpted 3D programming icons ({ }, Dart, </>, Python).
 * Engineered for low footprint: lazy IntersectionObserver init, no PMREM shader
 * stall, no shadow maps, DPR clamped <= 1.25, and paused offscreen lifecycle.
 */
const WorkstationShowcase3D = {
  renderer: null,
  scene: null,
  camera: null,
  raycaster: null,
  rafId: null,
  clock: null,
  isVisible: false,
  isInitialized: false,
  isInitializing: false,
  isDragging: false,
  lastTickMs: 0,
  hoveredIconName: null,

  pointerStart: { x: 0, y: 0 },
  orbitTarget: { yaw: -0.14, pitch: 0.03 },
  orbitCurrent: { yaw: -0.14, pitch: 0.03 },
  hoverParallax: { yaw: 0, pitch: 0 },
  defaultOrbit: { yaw: -0.14, pitch: 0.03 },

  state: {
    lidOpen: 0.58
  },

  groups: {},
  materials: {},
  interactiveIcons: [],

  /** Observes section proximity and lazily boots WebGL without slowing hero paint. */
  scheduleInit() {
    if (this.isInitialized || this.isInitializing) return;
    const section = DOMUtils.qs('#showcase');
    const container = DOMUtils.qs('#showcase-3d-container');
    if (!section || !container) return;

    if (!('IntersectionObserver' in window)) {
      this.init();
      return;
    }

    const bootObserver = new IntersectionObserver((entries) => {
      if (entries.some((e) => e.isIntersecting)) {
        bootObserver.disconnect();
        this.init();
      }
    }, { rootMargin: '500px 0px' });
    bootObserver.observe(section);
  },

  /** Initializes Three.js WebGL renderer, lighting, laptop, and 3D icons. */
  init() {
    if (this.isInitialized) {
      this.onResize();
      return true;
    }

    const viewport = DOMUtils.qs('#showcase-viewport');
    const container = DOMUtils.qs('#showcase-3d-container');
    const canvas = DOMUtils.qs('#showcase-webgl-canvas');
    if (!viewport || !container || !canvas || typeof window.THREE === 'undefined') {
      return false;
    }

    this.isInitializing = true;
    try {
      const THREE = window.THREE;
      const isMobile = window.innerWidth <= 768;
      const renderer = new THREE.WebGLRenderer({
        canvas,
        antialias: true,
        alpha: true,
        powerPreference: 'default'
      });

      renderer.setPixelRatio(isMobile ? 1.0 : Math.min(window.devicePixelRatio || 1, 1.25));
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.15;
      if ('outputEncoding' in renderer && THREE.sRGBEncoding) {
        renderer.outputEncoding = THREE.sRGBEncoding;
      }

      this.renderer = renderer;
      this.scene = new THREE.Scene();
      this.clock = new THREE.Clock();
      this.raycaster = new THREE.Raycaster();
      this.camera = new THREE.PerspectiveCamera(32, 16 / 10, 10, 2200);

      this.buildLighting();
      this.buildMaterials();
      this.buildWorkstationRoot();
      this.buildLaptopAssembly();
      this.buildFloatingIcons();
      this.bindInteractions(container, canvas);
      this.bindVisibilityObserver(container);

      viewport.classList.add('webgl-ready');
      this.isInitialized = true;
      this.isInitializing = false;

      if (DOMUtils.prefersReducedMotion()) {
        this.state.lidOpen = 1;
      }

      this.onResize();
      this.renderFrame();
      this.startLoop();
      return true;
    } catch (err) {
      this.isInitializing = false;
      console.warn('Fallback visual ativo:', err);
      return false;
    }
  },

  buildLighting() {
    const THREE = window.THREE;
    this.scene.add(new THREE.HemisphereLight(0xF5F1E8, 0x16161C, 0.92));

    const keyLight = new THREE.DirectionalLight(0xF5F1E8, 1.08);
    keyLight.position.set(-180, 260, 290);
    this.scene.add(keyLight);

    const rimLight = new THREE.PointLight(0xF0783C, 1.35, 920, 1.5);
    rimLight.position.set(240, 130, -140);
    this.scene.add(rimLight);

    const fillLight = new THREE.DirectionalLight(0xCBD5E1, 0.68);
    fillLight.position.set(210, -40, 240);
    this.scene.add(fillLight);
  },

  buildMaterials() {
    const THREE = window.THREE;
    this.materials = {
      chassisBody: new THREE.MeshStandardMaterial({ color: 0x262630, roughness: 0.54, metalness: 0.72 }),
      chassisChamfer: new THREE.MeshStandardMaterial({ color: 0x424250, roughness: 0.44, metalness: 0.80 }),
      titaniumIcon: new THREE.MeshStandardMaterial({ color: 0x8A878F, roughness: 0.44, metalness: 0.76 }),
      dartLight: new THREE.MeshStandardMaterial({ color: 0xFF8F4E, emissive: 0x4A1B08, roughness: 0.58, metalness: 0.14 }),
      dartMid: new THREE.MeshStandardMaterial({ color: 0xE66428, emissive: 0x3A1204, roughness: 0.62, metalness: 0.16 }),
      dartDeep: new THREE.MeshStandardMaterial({ color: 0x9C3D18, emissive: 0x240A02, roughness: 0.66, metalness: 0.18 }),
      pythonLight: new THREE.MeshStandardMaterial({ color: 0xC6C0B6, roughness: 0.50, metalness: 0.58 }),
      pythonWarm: new THREE.MeshStandardMaterial({ color: 0xE26A2E, emissive: 0x3D1606, roughness: 0.56, metalness: 0.20 }),
      accentStrip: new THREE.MeshBasicMaterial({ color: 0xF0783C, transparent: true, opacity: 0.62 })
    };
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
    tex.anisotropy = 2;
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

  createKeyboardDeckTexture() {
    const w = 640;
    const h = 420;
    return this.makeCanvasTexture(w, h, (ctx) => {
      ctx.fillStyle = '#202028';
      ctx.fillRect(0, 0, w, h);

      // Recessed keyboard well
      this.drawRoundedRect(ctx, 44, 24, w - 88, 224, 10);
      ctx.fillStyle = '#0D0D12';
      ctx.fill();
      ctx.strokeStyle = 'rgba(245, 241, 232, 0.08)';
      ctx.lineWidth = 1.5;
      ctx.stroke();

      const rows = [
        ['ESC', 'F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10', 'F11', 'F12'],
        ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '⌫'],
        ['TAB', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']'],
        ['CAPS', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', "'", '⏎'],
        ['⇧', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', '⇧'],
        ['fn', '⌃', '⌥', '⌘', 'SPACE', '⌘', '⌥', '◀', '▶']
      ];

      let curY = 32;
      rows.forEach((row, rIdx) => {
        const rowH = rIdx === 0 ? 22 : 32;
        const weights = row.map((lbl) => (
          lbl === 'SPACE' ? 4.6 : (lbl === '⇧' || lbl === '⏎' || lbl === 'CAPS' ? 1.7 : 1)
        ));
        const total = weights.reduce((a, b) => a + b, 0);
        const gap = 5;
        const availW = (w - 108) - gap * (row.length - 1);
        let curX = 54;

        row.forEach((lbl, cIdx) => {
          const kw = (weights[cIdx] / total) * availW;
          const isEsc = rIdx === 0 && cIdx === 0;
          this.drawRoundedRect(ctx, curX, curY, kw, rowH, 4);
          ctx.fillStyle = isEsc ? '#D9642A' : '#16161E';
          ctx.fill();
          ctx.strokeStyle = isEsc ? '#FF9A5C' : 'rgba(245, 241, 232, 0.14)';
          ctx.lineWidth = 1;
          ctx.stroke();
          curX += kw + gap;
        });
        curY += rowH + 5;
      });

      // Glass trackpad
      this.drawRoundedRect(ctx, (w - 220) / 2, 266, 220, 128, 12);
      ctx.fillStyle = '#181820';
      ctx.fill();
      ctx.strokeStyle = 'rgba(245, 241, 232, 0.13)';
      ctx.lineWidth = 1.4;
      ctx.stroke();
    });
  },

  /**
   * Builds crisp VS Code / Android Studio IDE screen texture:
   * Left Explorer + Center Dart/Flutter Code + Bottom Terminal + Docked Mobile Emulator.
   */
  createIdeScreenTexture() {
    const w = 1024;
    const h = 640;
    return this.makeCanvasTexture(w, h, (ctx) => {
      ctx.fillStyle = '#0D0D12';
      ctx.fillRect(0, 0, w, h);

      // Top IDE title bar
      ctx.fillStyle = '#14141B';
      ctx.fillRect(0, 0, w, 36);
      ['#FF5F56', '#FFBD2E', '#27C93F'].forEach((col, i) => {
        ctx.fillStyle = col;
        ctx.beginPath();
        ctx.arc(22 + i * 16, 18, 4.5, 0, Math.PI * 2);
        ctx.fill();
      });
      ctx.fillStyle = '#F5F1E8';
      ctx.font = '600 13px "JetBrains Mono", monospace';
      ctx.fillText('vinicius_rodrigues — lib/main.dart  [Flutter • Prod]', 84, 22);

      // Left Explorer sidebar
      this.drawRoundedRect(ctx, 12, 48, 178, h - 60, 10);
      ctx.fillStyle = '#13131A';
      ctx.fill();
      ctx.strokeStyle = 'rgba(245, 241, 232, 0.08)';
      ctx.stroke();

      ctx.fillStyle = '#8E8A84';
      ctx.font = '600 11px "JetBrains Mono", monospace';
      ctx.fillText('EXPLORER', 26, 74);

      const tree = [
        ['▾ lib/', '#F5F1E8', false],
        ['  ▾ features/', '#AAA6A0', false],
        ['    ▸ mobility_bloc.dart', '#AAA6A0', false],
        ['    ● main.dart', '#FF9A5C', true],
        ['    ▸ localspeak_ai.dart', '#6EE7B7', false],
        ['  ▾ data/', '#F5F1E8', false],
        ['    ▸ ws_gateway.ts', '#AAA6A0', false],
        ['    ▸ sqlite_sync.dart', '#AAA6A0', false]
      ];
      tree.forEach(([txt, col, active], idx) => {
        const y = 106 + idx * 32;
        if (active) {
          this.drawRoundedRect(ctx, 20, y - 16, 162, 24, 5);
          ctx.fillStyle = 'rgba(240, 120, 60, 0.16)';
          ctx.fill();
        }
        ctx.fillStyle = col;
        ctx.font = active ? '600 12px "JetBrains Mono", monospace' : '500 11.5px "JetBrains Mono", monospace';
        ctx.fillText(txt, 26, y);
      });

      // Center Dart/Flutter code editor
      this.drawRoundedRect(ctx, 202, 48, 480, 412, 10);
      ctx.fillStyle = '#111117';
      ctx.fill();
      ctx.strokeStyle = 'rgba(245, 241, 232, 0.08)';
      ctx.stroke();

      this.drawRoundedRect(ctx, 214, 58, 146, 26, 6);
      ctx.fillStyle = 'rgba(240, 120, 60, 0.14)';
      ctx.fill();
      ctx.fillStyle = '#FF9A5C';
      ctx.font = '600 12px "JetBrains Mono", monospace';
      ctx.fillText('main.dart', 236, 75);

      const code = [
        ['01', '#FF9A5C', "import 'package:flutter/material.dart';"],
        ['02', '#8E8A84', '// Clean Architecture + BLoC Telemetry'],
        ['03', '#FF9A5C', 'class TelemetryApp extends StatelessWidget {'],
        ['04', '#F5F1E8', '  const TelemetryApp({super.key});'],
        ['05', '#F0783C', '  @override'],
        ['06', '#F5F1E8', '  Widget build(BuildContext context) {'],
        ['07', '#6EE7B7', '    return BlocBuilder<FleetBloc, State>('],
        ['08', '#F5F1E8', '      builder: (ctx, state) => LiveFrame('],
        ['09', '#FF9A5C', '        fpsLock: 60,'],
        ['10', '#F5F1E8', '        offlineAi: true,'],
        ['11', '#F5F1E8', '        throughput: state.eventsPerSec,'],
        ['12', '#F5F1E8', '      ),'],
        ['13', '#F5F1E8', '    );'],
        ['14', '#F5F1E8', '  }']
      ];
      code.forEach(([ln, col, line], i) => {
        const y = 114 + i * 24;
        ctx.fillStyle = 'rgba(142, 138, 132, 0.5)';
        ctx.font = '500 12px "JetBrains Mono", monospace';
        ctx.fillText(ln, 216, y);
        ctx.fillStyle = col;
        ctx.fillText(line, 244, y);
      });

      // Bottom integrated terminal inside IDE
      this.drawRoundedRect(ctx, 202, 472, 480, 156, 10);
      ctx.fillStyle = '#0F0F14';
      ctx.fill();
      ctx.strokeStyle = 'rgba(245, 241, 232, 0.08)';
      ctx.stroke();

      ctx.fillStyle = '#FF9A5C';
      ctx.font = '600 11px "JetBrains Mono", monospace';
      ctx.fillText('TERMINAL // FLUTTER RUN', 218, 496);
      ctx.fillStyle = '#F5F1E8';
      ctx.font = '500 12px "JetBrains Mono", monospace';
      ctx.fillText('> flutter run --flavor prod -t lib/main.dart', 218, 526);
      ctx.fillStyle = '#6EE7B7';
      ctx.fillText('✓ Built build/app-prod.apk in 1.8s (0 errors)', 218, 554);
      ctx.fillStyle = '#AAA6A0';
      ctx.fillText('DevTools active • Dart Isolates: 4 workers • 60 FPS', 218, 582);

      // Right pane: Docked Mobile Emulator INSIDE the IDE screen
      this.drawRoundedRect(ctx, 694, 48, 318, h - 60, 10);
      ctx.fillStyle = '#13131A';
      ctx.fill();
      ctx.strokeStyle = 'rgba(240, 120, 60, 0.25)';
      ctx.stroke();

      ctx.fillStyle = '#AAA6A0';
      ctx.font = '600 11px "JetBrains Mono", monospace';
      ctx.fillText('DEVICE PREVIEW • 60 FPS', 712, 72);

      // Phone bezel docked inside IDE right panel
      this.drawRoundedRect(ctx, 738, 88, 230, 524, 28);
      ctx.fillStyle = '#09090D';
      ctx.fill();
      ctx.strokeStyle = '#383846';
      ctx.lineWidth = 3;
      ctx.stroke();

      // Dynamic Island inside docked emulator
      this.drawRoundedRect(ctx, 822, 102, 62, 12, 6);
      ctx.fillStyle = '#181820';
      ctx.fill();

      ctx.fillStyle = '#FF9A5C';
      ctx.font = '700 11px "JetBrains Mono", monospace';
      ctx.fillText('TELEMETRY // LIVE', 760, 146);
      ctx.fillStyle = '#F5F1E8';
      ctx.font = '700 28px "Plus Jakarta Sans", sans-serif';
      ctx.fillText('15,308', 760, 182);
      ctx.fillStyle = '#6EE7B7';
      ctx.font = '600 11px "JetBrains Mono", monospace';
      ctx.fillText('+35% Sync', 892, 178);

      // Emulator curve graph
      this.drawRoundedRect(ctx, 758, 204, 190, 146, 12);
      ctx.fillStyle = '#15151E';
      ctx.fill();
      ctx.beginPath();
      const curvePts = [[770, 315], [798, 272], [832, 290], [866, 240], [900, 258], [934, 224]];
      curvePts.forEach(([px, py], i) => (i === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py)));
      ctx.strokeStyle = '#FF9A5C';
      ctx.lineWidth = 3;
      ctx.stroke();

      // LocalSpeak waveform card inside docked emulator
      this.drawRoundedRect(ctx, 758, 368, 190, 168, 12);
      ctx.fillStyle = '#15151E';
      ctx.fill();
      ctx.fillStyle = '#F5F1E8';
      ctx.font = '600 13px "Plus Jakarta Sans", sans-serif';
      ctx.fillText('LocalSpeak Offline AI', 774, 398);
      ctx.fillStyle = '#AAA6A0';
      ctx.font = '500 11px "JetBrains Mono", monospace';
      ctx.fillText('sherpa_onnx • Zero Cloud', 774, 418);

      for (let i = 0; i < 14; i++) {
        const bh = 16 + Math.round(Math.sin(i * 0.65) * 14 + 14);
        this.drawRoundedRect(ctx, 774 + i * 11, 474 - bh / 2, 6, bh, 3);
        ctx.fillStyle = i % 3 === 0 ? '#F5F1E8' : '#F0783C';
        ctx.fill();
      }
    });
  },

  buildWorkstationRoot() {
    const THREE = window.THREE;
    const stageRoot = new THREE.Group();
    this.scene.add(stageRoot);
    this.groups.stageRoot = stageRoot;
  },

  buildLaptopAssembly() {
    const THREE = window.THREE;
    const laptopRoot = new THREE.Group();
    this.groups.stageRoot.add(laptopRoot);
    this.groups.laptopRoot = laptopRoot;

    // Baked soft studio contact shadow plane (0 shadow map cost)
    const shadowTex = this.makeCanvasTexture(128, 128, (ctx) => {
      const grad = ctx.createRadialGradient(64, 64, 12, 64, 64, 60);
      grad.addColorStop(0, 'rgba(0, 0, 0, 0.85)');
      grad.addColorStop(0.55, 'rgba(0, 0, 0, 0.35)');
      grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 128, 128);
    });
    const shadowPlane = new THREE.Mesh(
      new THREE.PlaneGeometry(420, 290),
      new THREE.MeshBasicMaterial({ map: shadowTex, transparent: true, depthWrite: false })
    );
    shadowPlane.rotation.x = -Math.PI / 2;
    shadowPlane.position.set(0, -14, 10);
    laptopRoot.add(shadowPlane);

    // Lower unibody base + chamfer trim
    const baseMesh = new THREE.Mesh(new THREE.BoxGeometry(304, 11, 202), this.materials.chassisBody);
    baseMesh.position.set(0, -6, 6);
    laptopRoot.add(baseMesh);

    const chamfer = new THREE.Mesh(new THREE.BoxGeometry(306, 2.2, 204), this.materials.chassisChamfer);
    chamfer.position.set(0, -1.2, 6);
    laptopRoot.add(chamfer);

    const accentLip = new THREE.Mesh(new THREE.BoxGeometry(84, 2, 2.5), this.materials.accentStrip);
    accentLip.position.set(0, -2.5, 107.2);
    laptopRoot.add(accentLip);

    // Top keyboard deck surface
    const deckTex = this.createKeyboardDeckTexture();
    const deckPlane = new THREE.Mesh(
      new THREE.PlaneGeometry(298, 196),
      new THREE.MeshStandardMaterial({ map: deckTex, roughness: 0.48, metalness: 0.32 })
    );
    deckPlane.rotation.x = -Math.PI / 2;
    deckPlane.position.set(0, 0.2, 6);
    laptopRoot.add(deckPlane);

    // Unified hinge + lid
    const hingePivot = new THREE.Group();
    hingePivot.position.set(0, 1.2, -94);
    laptopRoot.add(hingePivot);
    this.groups.hingePivot = hingePivot;

    const hingeBarrel = new THREE.Mesh(
      new THREE.CylinderGeometry(4, 4, 224, 12),
      this.materials.chassisChamfer
    );
    hingeBarrel.rotation.z = Math.PI / 2;
    hingePivot.add(hingeBarrel);

    const lidOuter = new THREE.Mesh(new THREE.BoxGeometry(304, 196, 5), this.materials.chassisBody);
    lidOuter.position.set(0, 98, -2.6);
    hingePivot.add(lidOuter);

    const ideTex = this.createIdeScreenTexture();
    const screenPlane = new THREE.Mesh(
      new THREE.PlaneGeometry(292, 184),
      new THREE.MeshStandardMaterial({
        map: ideTex,
        emissiveMap: ideTex,
        emissive: 0xFFFFFF,
        emissiveIntensity: 0.56,
        roughness: 0.25,
        metalness: 0.06
      })
    );
    screenPlane.position.set(0, 98, 0.4);
    hingePivot.add(screenPlane);
  },

  /** Builds sculpted 3D { }, Dart, </>, and Python floating programming icons. */
  buildFloatingIcons() {
    const THREE = window.THREE;
    const extrudeOpts = {
      depth: 4,
      bevelEnabled: true,
      bevelThickness: 0.9,
      bevelSize: 0.7,
      bevelSegments: 2,
      curveSegments: 8
    };

    const registerIcon = (name, group, basePos) => {
      group.position.set(basePos.x, basePos.y, basePos.z);
      group.userData = { name, basePos: { ...basePos }, currentScale: 1, phase: basePos.phase || 0 };
      this.groups.stageRoot.add(group);
      this.interactiveIcons.push(group);
    };

    // 1. Left Top: { } Curly Braces
    const bracesGroup = new THREE.Group();
    const braceShape = new THREE.Shape();
    braceShape.moveTo(-4, 15);
    braceShape.lineTo(-8, 15);
    braceShape.lineTo(-11, 12);
    braceShape.lineTo(-11, 3);
    braceShape.lineTo(-14.5, 0);
    braceShape.lineTo(-11, -3);
    braceShape.lineTo(-11, -12);
    braceShape.lineTo(-8, -15);
    braceShape.lineTo(-4, -15);
    braceShape.lineTo(-4, -11.8);
    braceShape.lineTo(-7, -11.8);
    braceShape.lineTo(-7.6, -11.2);
    braceShape.lineTo(-7.6, -2.2);
    braceShape.lineTo(-10.6, 0);
    braceShape.lineTo(-7.6, 2.2);
    braceShape.lineTo(-7.6, 11.2);
    braceShape.lineTo(-7, 11.8);
    braceShape.lineTo(-4, 11.8);
    braceShape.closePath();

    const braceGeo = new THREE.ExtrudeGeometry(braceShape, extrudeOpts);
    braceGeo.center();
    const leftBrace = new THREE.Mesh(braceGeo, this.materials.titaniumIcon);
    leftBrace.position.x = -8;
    const rightBrace = new THREE.Mesh(braceGeo, this.materials.titaniumIcon);
    rightBrace.rotation.y = Math.PI;
    rightBrace.position.x = 8;
    bracesGroup.add(leftBrace, rightBrace);
    bracesGroup.rotation.set(0.08, 0.22, -0.05);
    registerIcon('braces', bracesGroup, { x: -214, y: 94, z: 22, phase: 0.4 });

    // 2. Left Lower: Dart Origami Emblem (Crisp 3-Face Geometric Fold)
    const dartGroup = new THREE.Group();
    const foldNose = new THREE.Shape();
    foldNose.moveTo(-13, 3);
    foldNose.lineTo(-4, 12);
    foldNose.lineTo(-1, -1);
    foldNose.lineTo(-10, -10);
    foldNose.closePath();
    const foldNoseMesh = new THREE.Mesh(
      new THREE.ExtrudeGeometry(foldNose, extrudeOpts),
      this.materials.dartLight
    );
    foldNoseMesh.position.z = -1.5;

    const foldWingTop = new THREE.Shape();
    foldWingTop.moveTo(-4, 12);
    foldWingTop.lineTo(10, 12);
    foldWingTop.lineTo(13, 2);
    foldWingTop.lineTo(1, -1);
    foldWingTop.closePath();
    const foldWingTopMesh = new THREE.Mesh(
      new THREE.ExtrudeGeometry(foldWingTop, extrudeOpts),
      this.materials.dartMid
    );
    foldWingTopMesh.position.z = -1.9;

    const foldWingBottom = new THREE.Shape();
    foldWingBottom.moveTo(-1, -1);
    foldWingBottom.lineTo(13, 2);
    foldWingBottom.lineTo(13, -12);
    foldWingBottom.lineTo(0, -12);
    foldWingBottom.lineTo(-10, -10);
    foldWingBottom.closePath();
    const foldWingBottomMesh = new THREE.Mesh(
      new THREE.ExtrudeGeometry(foldWingBottom, extrudeOpts),
      this.materials.dartDeep
    );
    foldWingBottomMesh.position.z = -2.2;

    dartGroup.add(foldNoseMesh, foldWingTopMesh, foldWingBottomMesh);
    dartGroup.rotation.set(-0.08, 0.28, 0.08);
    registerIcon('dart', dartGroup, { x: -208, y: 8, z: 36, phase: 1.9 });

    // 3. Right Top: </> Code Tags
    const tagsGroup = new THREE.Group();
    const chevShape = new THREE.Shape();
    chevShape.moveTo(4, 9.5);
    chevShape.lineTo(1.5, 12);
    chevShape.lineTo(-8.5, 0);
    chevShape.lineTo(1.5, -12);
    chevShape.lineTo(4, -9.5);
    chevShape.lineTo(-4.2, 0);
    chevShape.closePath();
    const chevGeo = new THREE.ExtrudeGeometry(chevShape, extrudeOpts);
    chevGeo.center();

    const leftChev = new THREE.Mesh(chevGeo, this.materials.titaniumIcon);
    leftChev.position.x = -12;
    const slashMesh = new THREE.Mesh(
      new THREE.BoxGeometry(2.8, 23, 4.4),
      this.materials.dartLight
    );
    slashMesh.rotation.z = -0.32;
    const rightChev = new THREE.Mesh(chevGeo, this.materials.titaniumIcon);
    rightChev.rotation.y = Math.PI;
    rightChev.position.x = 12;

    tagsGroup.add(leftChev, slashMesh, rightChev);
    tagsGroup.rotation.set(0.06, -0.24, 0.04);
    registerIcon('tags', tagsGroup, { x: 214, y: 98, z: 24, phase: 3.1 });

    // 4. Right Bottom: Python Interlocking Dual-Snake Emblem
    const pyGroup = new THREE.Group();
    const pyShape = new THREE.Shape();
    pyShape.moveTo(-5.4, 7.0);
    pyShape.lineTo(-5.4, 10.4);
    pyShape.quadraticCurveTo(-5.4, 13.2, -2.4, 13.2);
    pyShape.lineTo(3.4, 13.2);
    pyShape.quadraticCurveTo(6.4, 13.2, 6.4, 10.2);
    pyShape.lineTo(6.4, 3.8);
    pyShape.quadraticCurveTo(6.4, 0.9, 3.4, 0.9);
    pyShape.lineTo(-6.2, 0.9);
    pyShape.quadraticCurveTo(-7.6, 0.9, -7.6, -0.5);
    pyShape.lineTo(-7.6, -3.4);
    pyShape.quadraticCurveTo(-7.6, -5.6, -9.8, -5.6);
    pyShape.lineTo(-10.6, -5.6);
    pyShape.quadraticCurveTo(-13.0, -5.6, -13.0, -3.2);
    pyShape.lineTo(-13.0, 4.0);
    pyShape.quadraticCurveTo(-13.0, 6.6, -9.8, 6.6);
    pyShape.lineTo(-5.4, 6.6);
    pyShape.closePath();

    const eyeHole = new THREE.Path();
    eyeHole.absarc(-2.5, 10.2, 1.15, 0, Math.PI * 2, true);
    pyShape.holes.push(eyeHole);

    const pyGeo = new THREE.ExtrudeGeometry(pyShape, extrudeOpts);
    const pyTop = new THREE.Mesh(pyGeo, this.materials.pythonLight);
    pyTop.position.z = -1.8;
    const pyBottom = new THREE.Mesh(pyGeo, this.materials.pythonWarm);
    pyBottom.rotation.z = Math.PI;
    pyBottom.position.z = -1.8;

    pyGroup.add(pyTop, pyBottom);
    pyGroup.scale.setScalar(1.1);
    pyGroup.rotation.set(-0.06, -0.26, -0.05);
    registerIcon('python', pyGroup, { x: 212, y: 12, z: 36, phase: 4.7 });
  },

  bindInteractions(container, canvas) {
    const section = DOMUtils.qs('#showcase');
    const resetBtn = DOMUtils.qs('#showcase-reset-orbit');
    const pointerNDC = new window.THREE.Vector2(99, 99);

    const updateResetVisibility = () => {
      if (!resetBtn) return;
      const moved = (
        Math.abs(this.orbitTarget.yaw - this.defaultOrbit.yaw) > 0.08 ||
        Math.abs(this.orbitTarget.pitch - this.defaultOrbit.pitch) > 0.06
      );
      resetBtn.classList.toggle('visible', moved);
    };

    const resetOrbit = () => {
      this.orbitTarget.yaw = this.defaultOrbit.yaw;
      this.orbitTarget.pitch = this.defaultOrbit.pitch;
      updateResetVisibility();
    };

    if (resetBtn) {
      resetBtn.addEventListener('click', resetOrbit);
    }
    canvas.addEventListener('dblclick', resetOrbit);

    canvas.addEventListener('pointerdown', (e) => {
      this.isDragging = true;
      this.pointerStart.x = e.clientX;
      this.pointerStart.y = e.clientY;
    });

    container.addEventListener('pointermove', (e) => {
      if (this.isDragging) {
        const dx = e.clientX - this.pointerStart.x;
        const dy = e.clientY - this.pointerStart.y;
        this.pointerStart.x = e.clientX;
        this.pointerStart.y = e.clientY;
        this.orbitTarget.yaw = Math.max(-0.72, Math.min(0.72, this.orbitTarget.yaw + dx * 0.0055));
        this.orbitTarget.pitch = Math.max(-0.28, Math.min(0.32, this.orbitTarget.pitch + dy * 0.0038));
        updateResetVisibility();
        return;
      }

      if (!this.isVisible || window.innerWidth <= 992) return;
      const rect = canvas.getBoundingClientRect();
      if (!rect.width || !rect.height) return;

      const nx = ((e.clientX - rect.left) / rect.width) - 0.5;
      const ny = ((e.clientY - rect.top) / rect.height) - 0.5;
      this.hoverParallax.yaw = nx * 0.14;
      this.hoverParallax.pitch = ny * 0.08;

      if (section) {
        section.style.setProperty('--spill-x', `${(68 + nx * 16).toFixed(1)}%`);
        section.style.setProperty('--spill-y', `${(44 + ny * 14).toFixed(1)}%`);
      }

      pointerNDC.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      pointerNDC.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
      this.raycaster.setFromCamera(pointerNDC, this.camera);
      const hits = this.raycaster.intersectObjects(this.interactiveIcons, true);
      if (hits.length > 0) {
        let obj = hits[0].object;
        while (obj.parent && obj.parent !== this.groups.stageRoot) {
          obj = obj.parent;
        }
        this.hoveredIconName = obj.userData?.name || null;
        canvas.style.cursor = 'pointer';
      } else {
        this.hoveredIconName = null;
        canvas.style.cursor = 'grab';
      }
    }, { passive: true });

    container.addEventListener('pointerleave', () => {
      this.hoverParallax.yaw = 0;
      this.hoverParallax.pitch = 0;
      this.hoveredIconName = null;
      canvas.style.cursor = 'grab';
    }, { passive: true });

    window.addEventListener('pointerup', () => {
      this.isDragging = false;
      canvas.style.cursor = this.hoveredIconName ? 'pointer' : 'grab';
    }, { passive: true });
  },

  bindVisibilityObserver(container) {
    if (!('IntersectionObserver' in window)) {
      this.isVisible = true;
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        this.isVisible = entry.isIntersecting;
        if (this.isVisible) {
          this.startLoop();
        }
      });
    }, { rootMargin: '120px 0px' });
    observer.observe(container);
  },

  onResize() {
    const container = DOMUtils.qs('#showcase-3d-container');
    const canvas = DOMUtils.qs('#showcase-webgl-canvas');
    if (!container || !canvas || !this.renderer || !this.camera) return;

    const isMobile = window.innerWidth <= 768;
    const rect = container.getBoundingClientRect();
    const width = Math.max(280, Math.round(rect.width));
    const height = Math.max(260, Math.round(rect.height));

    this.renderer.setPixelRatio(isMobile ? 1.0 : Math.min(window.devicePixelRatio || 1, 1.25));
    this.renderer.setSize(width, height, false);

    const aspect = width / height;
    this.camera.aspect = aspect;

    // Auto-fit laptop + floating icons without shrinking icon spread into the chassis
    const fovRad = (this.camera.fov * Math.PI) / 180;
    const tanHalfFov = Math.tan(fovRad / 2);

    this.interactiveIcons.forEach((icon) => {
      icon.userData.spreadX = 1.0;
    });

    const halfSceneW = 246;
    const halfSceneH = 140;
    const distV = (halfSceneH * 1.04) / tanHalfFov;
    const distH = (halfSceneW * 1.04) / (tanHalfFov * Math.max(0.62, aspect));
    const camZ = Math.max(distV, distH);

    this.camera.position.set(0, 118, camZ);
    this.camera.lookAt(0, 54, 0);
    this.camera.updateProjectionMatrix();
    this.renderFrame();
  },

  renderFrame() {
    if (!this.renderer || !this.scene || !this.camera) return;

    const elapsed = this.clock ? this.clock.getElapsedTime() : 0;
    const reduced = DOMUtils.prefersReducedMotion();

    const targetYaw = this.orbitTarget.yaw + this.hoverParallax.yaw;
    const targetPitch = this.orbitTarget.pitch + this.hoverParallax.pitch;
    this.orbitCurrent.yaw += (targetYaw - this.orbitCurrent.yaw) * 0.14;
    this.orbitCurrent.pitch += (targetPitch - this.orbitCurrent.pitch) * 0.14;

    if (this.groups.stageRoot) {
      this.groups.stageRoot.rotation.set(this.orbitCurrent.pitch, this.orbitCurrent.yaw, 0);
    }

    if (this.groups.hingePivot) {
      const closedAngle = 1.48;
      const openAngle = -0.16;
      this.groups.hingePivot.rotation.x = closedAngle + (openAngle - closedAngle) * this.state.lidOpen;
    }

    // Subtle living idle levitation + hover scale on sculpted 3D icons
    this.interactiveIcons.forEach((icon) => {
      const { name, basePos, phase } = icon.userData;
      const spread = icon.userData.spreadX || 1.0;
      const bobY = reduced ? 0 : Math.sin(elapsed * 1.55 + phase) * 4.5;
      icon.position.set(basePos.x * spread, basePos.y + bobY, basePos.z);

      const isHovered = this.hoveredIconName === name;
      const targetScale = (name === 'python' ? 1.12 : 1.0) * (isHovered ? 1.16 : 1.0);
      icon.userData.currentScale += (targetScale - icon.userData.currentScale) * 0.18;
      icon.scale.setScalar(icon.userData.currentScale);
    });

    this.renderer.render(this.scene, this.camera);
  },

  startLoop() {
    if (this.rafId || !this.isVisible || DOMUtils.prefersReducedMotion()) return;
    const tick = (now) => {
      if (!this.isVisible) {
        this.rafId = null;
        return;
      }
      // Cap lightweight continuous frame rate ~40fps to save GPU/battery while staying fluid
      if (now - this.lastTickMs >= 24) {
        this.lastTickMs = now;
        this.renderFrame();
      }
      this.rafId = requestAnimationFrame(tick);
    };
    this.rafId = requestAnimationFrame(tick);
  }
};
window.WorkstationShowcase3D = WorkstationShowcase3D;

/**
 * ==========================================================================
 * 11. ANIMATION CONTROLLERS (GSAP + LIGHTWEIGHT 3D LID REVEAL)
 * ==========================================================================
 */
const AnimationController = {
  showcaseTimeline: null,
  kineticInitialized: false,

  init() {
    this.initSpotlightCards();
    WorkstationShowcase3D.scheduleInit();

    if (DOMUtils.prefersReducedMotion() || typeof window.gsap === 'undefined') {
      DOMUtils.qsa('.arch-draw-line-x').forEach(el => { el.style.transform = 'scaleX(1)'; });
      DOMUtils.qsa('.timeline-vertical-fill, .stack-vertical-axis').forEach(el => { el.style.transform = 'scaleY(1)'; });
      return;
    }

    gsap.registerPlugin(ScrollTrigger);
    this.animateHero();
    this.initShowcaseReveal();
    this.initSectionDepthTransitions();
    this.initArchitecturalLines();
    this.initKineticTypography();
    this.animateEditorialBlocks();
    this.initMagneticButtons();

    let resizeTimer = null;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        WorkstationShowcase3D.onResize();
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

  initShowcaseReveal() {
    if (this.showcaseTimeline) {
      if (this.showcaseTimeline.scrollTrigger) {
        this.showcaseTimeline.scrollTrigger.kill();
      }
      this.showcaseTimeline.kill();
      this.showcaseTimeline = null;
    }

    const tl = gsap.timeline({
      onUpdate: () => WorkstationShowcase3D.renderFrame(),
      scrollTrigger: {
        trigger: '#showcase-viewport',
        start: 'top 90%',
        end: 'top 22%',
        scrub: 0.75,
        invalidateOnRefresh: true,
        onEnter: () => WorkstationShowcase3D.init(),
        onUpdate: () => WorkstationShowcase3D.renderFrame()
      }
    });

    tl.fromTo(WorkstationShowcase3D.state,
      { lidOpen: 0.58 },
      { lidOpen: 1, ease: 'power2.out', duration: 1 }
    );

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

    const aiCards = DOMUtils.qsa('#stack-ai-grid .ai-special-card');
    if (aiCards.length) {
      gsap.from(aiCards, {
        y: 16,
        duration: 0.65,
        stagger: 0.08,
        ease: 'expo.out',
        clearProps: 'transform',
        scrollTrigger: {
          trigger: '#stack-ai-grid',
          start: 'top 94%',
          once: true
        }
      });
    }
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
  activeProjectFilter: 'all',
  dragStartX: 0,
  isDragging: false,

  init() {
    this.bindHeaderScroll();
    this.bindMobileDrawer();
    this.bindProjectFilters();
    this.bindCarousel();
    this.bindCaseModals();
    this.bindClipboardCopy();
    this.bindActiveSectionObserver();
  },

  setProjectFilter(filterKey) {
    this.activeProjectFilter = filterKey || 'all';
    const buttons = DOMUtils.qsa('#project-filters [data-project-filter]');
    buttons.forEach((btn) => {
      const active = btn.getAttribute('data-project-filter') === this.activeProjectFilter;
      btn.classList.toggle('active', active);
      btn.setAttribute('aria-pressed', String(active));
    });

    const { totalSlides } = UIComponents.renderCarousel(this.activeProjectFilter);
    this.currentSlide = 0;
    this.totalSlides = totalSlides;
    if (this.totalSlides > 0) {
      this.goToSlide(0);
    }
  },

  bindProjectFilters() {
    const filterBar = DOMUtils.qs('#project-filters');
    if (!filterBar) return;

    filterBar.addEventListener('click', (e) => {
      const btn = e.target.closest('[data-project-filter]');
      if (!btn) return;
      const filterKey = btn.getAttribute('data-project-filter') || 'all';
      this.setProjectFilter(filterKey);
    });
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

    if (!track || this.totalSlides <= 0) return;

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
    const dotsContainer = DOMUtils.qs(PORTFOLIO_CONFIG.selectors.carouselDots);

    if (prevBtn) prevBtn.addEventListener('click', () => {
      if (this.totalSlides > 1) this.goToSlide(this.currentSlide - 1);
    });
    if (nextBtn) nextBtn.addEventListener('click', () => {
      if (this.totalSlides > 1) this.goToSlide(this.currentSlide + 1);
    });

    if (dotsContainer) {
      dotsContainer.addEventListener('click', (e) => {
        const dot = e.target.closest('.carousel-dot');
        if (!dot) return;
        const target = Number(dot.getAttribute('data-slide-to'));
        if (!Number.isNaN(target)) this.goToSlide(target);
      });
    }

    // Pointer / Touch Drag Support (respects text selection and interactive controls)
    if (viewport) {
      const startDrag = (clientX) => {
        if (this.totalSlides <= 1) return;
        this.isDragging = true;
        this.dragStartX = clientX;
      };

      const endDrag = (clientX) => {
        if (!this.isDragging) return;
        this.isDragging = false;
        if (this.totalSlides <= 1) return;

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
        if (this.totalSlides <= 1) return;
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
    const viewport = DOMUtils.qs(PORTFOLIO_CONFIG.selectors.carouselViewport);
    const companyBtns = DOMUtils.qsa('.hero-company-card');
    const closeBtn = DOMUtils.qs(PORTFOLIO_CONFIG.selectors.modalCloseBtn);
    const backdrop = DOMUtils.qs(PORTFOLIO_CONFIG.selectors.caseModal);

    if (viewport) {
      viewport.addEventListener('click', (e) => {
        const caseBtn = e.target.closest('.open-case-modal-btn');
        if (caseBtn) {
          const id = caseBtn.getAttribute('data-project-id');
          if (id) UIComponents.openCaseModal(id, caseBtn);
          return;
        }

        const resetBtn = e.target.closest('[data-reset-project-filter]');
        if (resetBtn) {
          this.setProjectFilter('all');
        }
      });
    }

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
