import { LanguageDictionary } from './types';

export const translations: Record<'pt' | 'en', LanguageDictionary> = {
  pt: {
    nav: {
      home: "Início",
      about: "Sobre",
      services: "Serviços",
      platform: "Produto",
      projects: "Projetos",
      contact: "Contactos"
    },
    hero: {
      badge: "Empresa de Capitais Maioritariamente Públicos",
      title: "Transformação Digital e Gestão Documental Avançada",
      subtitle: "Parceira tecnológica oficial da Imprensa Nacional E.P. de Angola, especializada em digitalização de larga escala, edição de legislação oficial e soluções inteligentes de conteúdo.",
      ctaPrimary: "Conhecer Plataforma",
      ctaSecondary: "Falar com Especialista",
      statEmployees: "Consultores & Técnicos",
      statPages: "+7.5M Páginas Digitalizadas",
      statHistory: "Legislação desde 1845",
      statData: "4.5 TB de Dados Geridos"
    },
    about: {
      title: "Quem Somos",
      subtitle: "Eficiência, Rigor e Inovação Tecnológica na Salvaguarda do Património Documental",
      intro: "A LEXDATA, LDA é uma empresa de capitais maioritariamente públicos, detidos pela Imprensa Nacional - E.P. Atuamos como um motor de modernização e desmaterialização de processos, garantindo a preservação e valorização da informação corporativa e pública.",
      ownershipTitle: "Participação Pública Estratégica",
      ownershipDesc: "Como subsidiária da Imprensa Nacional - E.P., a LEXDATA combina o rigor institucional com a agilidade das modernas tecnologias de informação para fornecer soluções com total garantia de confidencialidade e segurança jurídica.",
      missionTitle: "Nossa Missão",
      missionDesc: "Promover a transição digital das organizações públicas e privadas em Angola, desmaterializando arquivos, normalizando fluxos documentais e facilitando o acesso rápido e seguro à informação de valor legal e operacional.",
      valuesTitle: "Valores Fundamentais",
      valuesDesc: "Pautamos a nossa atividade pela excelência técnica, integridade na gestão de dados confidenciais, compromisso com a inovação contínua e foco estratégico na rentabilização de tempo e recursos para os nossos clientes.",
      features: [
        {
          title: "Parceria Institucional",
          desc: "Integração direta com os sistemas oficiais de publicação do Estado e Imprensa Nacional."
        },
        {
          title: "Capacidade Operacional",
          desc: "Capacidade de processar milhões de documentos físicos e transformá-los em repositórios digitais estruturados."
        },
        {
          title: "Segurança de Informação",
          desc: "Protocolos rigorosos de acesso, backup redundante e conformidade com as normas legais de proteção de dados."
        }
      ]
    },
    services: {
      title: "Nossos Serviços",
      subtitle: "Soluções integradas que cobrem todo o ciclo de vida da informação e documentação técnica e jurídica",
      coreTitle: "Core Business",
      coreDesc: "A nossa atividade principal centra-se em serviços jurídicos e técnicos de elevada especialização para suporte à governação, legislação e grandes indústrias.",
      portalTitle: "Bases de Dados e Portais Oficiais",
      portalDesc: "Desenvolvemos, customizamos e gerimos portais de pesquisa jurídica de alta performance, incluindo bases de dados legislativas históricas.",
      jurisnetTitle: "Portal JURISNET & Portal IN",
      jurisnetDesc: "A LEXDATA é responsável pela gestão, manutenção e atualização dos Diários da República e diplomas legais do Portal JURISNET, bem como a inserção das Publicações Oficiais da Imprensa Nacional E.P.",
      otherServicesTitle: "Outras Soluções de Engenharia Documental",
      otherServicesDesc: "Oferecemos uma gama completa de serviços para potenciar a eficiência operacional de equipas e a qualificação de recursos humanos.",
      portalFeatures: [
        "Maior Base de Dados de Legislação Angolana com atualizações constantes.",
        "Legislação oficialmente publicada desde 1845 até ao presente, digitalizada com alta fidelidade.",
        "Acesso integral às publicações oficiais: Diários da República das Séries I, II e III.",
        "SIPPO - Sistema Integrado de Produção de Publicações Oficiais.",
        "Tramitação eletrónica, enquadramento e classificação jurídica de diplomas.",
        "Integração com o Directório de Sociedades e Empresas On-line do MINJUSDH."
      ],
      servicesList: [
        {
          iconName: "FileText",
          title: "Gestão dos Diários da República",
          description: "Manutenção, classificação e indexação sistemática dos Diários da República e Diplomas Legais no Portal JURISNET."
        },
        {
          iconName: "BookOpen",
          title: "Edição de Coletâneas de Legislação",
          description: "Preparação, anotação e publicação de coletâneas jurídicas sistemáticas e obras de cariz técnico, didático e literário."
        },
        {
          iconName: "Database",
          title: "Digitalização e Classificação",
          description: "Digitalização profissional de documentos de grande formato ou sensíveis, com classificação temática e extração de metadados."
        },
        {
          iconName: "FolderOpen",
          title: "Organização de Arquivos",
          description: "Diagnóstico, organização física, higienização, inventariação e catalogação de arquivos históricos e correntes."
        },
        {
          iconName: "GraduationCap",
          title: "Formação Profissional",
          description: "Capacitação técnica de quadros em Gestão Documental, Direito Administrativo, Técnicas de Arquivo e Novas Tecnologias."
        },
        {
          iconName: "Globe",
          title: "Tradução de Documentos",
          description: "Serviço especializado de tradução e retroversão de documentos técnicos e jurídicos para várias línguas estrangeiras."
        }
      ]
    },
    platform: {
      title: "Plataforma de Gestão de Conteúdos (CSP)",
      subtitle: "A Solução Definitiva para a Transição Digital de Organizações Modernas",
      intro: "Concebida através de parcerias de desenvolvimento nacionais e internacionais, a nossa Plataforma CSP é uma solução de última geração baseada em Microserviços, altamente escalável e flexível.",
      desc: "O objetivo principal é gerir toda a informação não estruturada (documentos, emails, ficheiros técnicos ou multimédia), que constitui um fator decisivo para a competitividade e continuidade do seu negócio.",
      benefitsTitle: "Rentabilidade de Tempo e Recursos",
      benefitsIntro: "Implementar a nossa solução garante o acesso imediato à informação, reforça a segurança através de perfis de permissões avançados e acelera significativamente a transformação digital das equipas.",
      featuresList: [
        {
          iconName: "Scan",
          title: "Captura Inteligente",
          description: "Módulos de captura e digitalização integrados com OCR de alta precisão para catalogação automática."
        },
        {
          iconName: "GitMerge",
          title: "Workflows Automatizados",
          description: "Desenho de fluxos de trabalho e processos de aprovação dinâmicos para desmaterialização de processos."
        },
        {
          iconName: "Lock",
          title: "Acesso e Segurança",
          description: "Controlo absoluto de permissões, criptografia de dados em trânsito e em repouso, e auditoria completa de acessos."
        },
        {
          iconName: "Cpu",
          title: "Arquitetura Microserviços",
          description: "Desenvolvido sobre serviços independentes que facilitam a escalabilidade, resiliência e atualizações sem paragens de serviço."
        }
      ],
      implementationTitle: "Implementação e Normalização",
      implementationDesc: "A implementação de uma solução de Gestão Documental é um processo estruturado que normaliza processos de trabalho e garante a uniformidade operacional.",
      steps: [
        {
          title: "1. Desmaterialização",
          desc: "Digitalização e conversão do arquivo físico da instituição em formato digital legível e pesquisável."
        },
        {
          title: "2. Integração de Sistemas",
          desc: "Aproveitamento dos sistemas legados existentes na organização para garantir interoperabilidade de dados."
        },
        {
          title: "3. Normalização",
          desc: "Uniformização de métodos de classificação, tipologias documentais, indexação e nomenclatura na organização."
        },
        {
          title: "4. Pesquisa & Workflow",
          desc: "Ativação de motores de busca semântica potentes e circuitos eletrónicos de circulação de documentos, resultando em drástica redução de custos."
        }
      ]
    },
    projects: {
      title: "Projetos e Clientes",
      subtitle: "Casos de sucesso que comprovam o rigor técnico e capacidade de execução da LEXDATA",
      highlightTitle: "Destaque: Projeto de Digitalização Petrolífera de Angola",
      highlightDesc: "Em conjunto com parceiros locais e internacionais de topo, a LEXDATA levou a cabo um ambicioso projeto de digitalização e desmaterialização de todo o arquivo físico referente aos documentos Técnicos de Exploração Petrolífera de Angola.",
      highlightStats: [
        { value: "+7.5M", label: "Páginas Equivalentes A4" },
        { value: "4.5 TB", label: "Volume de Dados Gerados" },
        { value: "100%", label: "Precisão na Indexação" },
        { value: "Confidencial", label: "Nível de Segurança" }
      ],
      otherProjectsTitle: "Outras Soluções sob Encomenda",
      projectList: [
        {
          id: "p1",
          client: "Imprensa Nacional - E.P.",
          title: "Portal JURISNET e Base de Dados Histórica",
          description: "Manutenção sistemática e disponibilização online de toda a legislação angolana oficialmente publicada de 1845 até ao presente, cobrindo os Diários da República das Séries I, II e III.",
          details: [
            "Processamento diário de novos diplomas e inserção em base de dados em menos de 12 horas.",
            "Indexação temática avançada com enquadramento por juristas especializados.",
            "Interface de pesquisa jurídica avançada disponível para os cidadãos e instituições públicas."
          ]
        },
        {
          id: "p2",
          client: "Ministério da Justiça e Direitos Humanos (MINJUSDH)",
          title: "Plataforma 'Empresas Online'",
          description: "Desenvolvimento e integração de sistemas para o Directório de Sociedades e desmaterialização dos processos de constituição e consulta de empresas online em Angola.",
          details: [
            "Redução do tempo de consulta pública de registos comerciais.",
            "Tramitação eletrónica segura de pedidos de certidão permanente.",
            "Ligação robusta com as bases de dados centrais de identificação comercial."
          ]
        },
        {
          id: "p3",
          client: "Entidades Públicas Diversas",
          title: "Concepção, Customização e Criação de Portais",
          description: "Desenvolvimento de portais institucionais personalizados para gestão de informação, integrando-os com soluções de gestão documental corporativa.",
          details: [
            "Customização de portais em conformidade com as diretivas de cibersegurança do Estado.",
            "Integração nativa com fluxos de trabalho internos da administração pública.",
            "Formação intensiva de quadros públicos para autonomia na publicação de conteúdos."
          ]
        }
      ]
    },
    contact: {
      title: "Contacte a LEXDATA",
      subtitle: "Prontos para apoiar a transição digital e eficiência da sua organização",
      addressTitle: "Endereço Principal",
      addressValue: "Rua Henrique de Carvalho, Edifício Imprensa Nacional E.P., Luanda, Angola",
      phoneTitle: "Telefones",
      phoneValue: "+244 222 334 567 / +244 923 456 789",
      emailTitle: "Correio Eletrónico",
      emailValue: "geral@lexdata.gov.ao",
      hoursTitle: "Horário de Atendimento",
      hoursValue: "Segunda a Sexta-feira: 08:00h às 16:00h",
      formName: "Nome Completo",
      formEmail: "Endereço de Email",
      formSubject: "Assunto",
      formMessage: "Sua Mensagem",
      formSubmit: "Enviar Mensagem",
      formSuccess: "Mensagem enviada com sucesso! A nossa equipa entrará em contacto brevemente.",
      formPending: "A enviar..."
    },
    footer: {
      desc: "Líder na preservação digital, classificação jurídica e normalização de processos documentais em Angola. Uma empresa de capitais maioritariamente públicos.",
      linksTitle: "Navegação",
      servicesTitle: "Serviços em Destaque",
      rights: "© 2026 LEXDATA, LDA. Todos os direitos reservados. Participação maioritária da Imprensa Nacional - E.P.",
      ownershipBadge: "Membro do Grupo Imprensa Nacional - E.P."
    }
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      platform: "Product",
      projects: "Projects",
      contact: "Contact"
    },
    hero: {
      badge: "Majority Public Capital Company",
      title: "Digital Transformation & Advanced Document Management",
      subtitle: "Official technology partner of Imprensa Nacional E.P. of Angola, specializing in large-scale digitization, official legislation publishing, and intelligent content services.",
      ctaPrimary: "Explore Platform",
      ctaSecondary: "Talk to an Expert",
      statEmployees: "Consultants & Technicians",
      statPages: "+7.5M Digitized Pages",
      statHistory: "Legislation since 1845",
      statData: "4.5 TB Data Managed"
    },
    about: {
      title: "Who We Are",
      subtitle: "Efficiency, Rigor, and Technological Innovation in Safeguarding Document Heritage",
      intro: "LEXDATA, LDA is a company with majority public capital, held by Imprensa Nacional - E.P. We act as a driving force for process modernization and dematerialization, ensuring the preservation and appreciation of corporate and public information.",
      ownershipTitle: "Strategic Public Ownership",
      ownershipDesc: "As a subsidiary of Imprensa Nacional - E.P., LEXDATA combines institutional rigor with the agility of modern information technologies to provide solutions with complete guarantees of confidentiality and legal certainty.",
      missionTitle: "Our Mission",
      missionDesc: "To promote the digital transition of public and private organizations in Angola, dematerializing archives, standardizing document flows, and facilitating rapid, secure access to information of legal and operational value.",
      valuesTitle: "Core Values",
      valuesDesc: "Our activity is guided by technical excellence, integrity in managing confidential data, a commitment to continuous innovation, and a strategic focus on saving time and resources for our clients.",
      features: [
        {
          title: "Institutional Partnership",
          desc: "Direct integration with official state and National Press publishing systems."
        },
        {
          title: "Operational Capability",
          desc: "Ability to process millions of physical documents and transform them into structured digital repositories."
        },
        {
          title: "Information Security",
          desc: "Strict access protocols, redundant backups, and compliance with data protection laws."
        }
      ]
    },
    services: {
      title: "Our Services",
      subtitle: "Integrated solutions covering the entire lifecycle of technical and legal information and documentation",
      coreTitle: "Core Business",
      coreDesc: "Our core business focuses on highly specialized legal and technical services to support governance, legislation, and major industries.",
      portalTitle: "Databases and Official Portals",
      portalDesc: "We develop, customize, and manage high-performance legal search portals, including historical legislative databases.",
      jurisnetTitle: "JURISNET Portal & Portal IN",
      jurisnetDesc: "LEXDATA is responsible for the management, maintenance, and update of the Diários da República and legal diplomas of the JURISNET Portal, as well as the insertion of the Official Publications of the National Press E.P.",
      otherServicesTitle: "Other Document Engineering Solutions",
      otherServicesDesc: "We offer a complete range of services to boost team operational efficiency and professional qualification.",
      portalFeatures: [
        "The largest Database of Angolan Legislation with constant updates.",
        "Officially published legislation from 1845 to the present, digitized with high fidelity.",
        "Full access to official publications: Diários da República Series I, II, and III.",
        "SIPPO - Integrated Production System for Official Publications.",
        "Electronic processing, framing, and legal classification of diplomas.",
        "Integration with MINJUSDH's Directory of Societies and online companies."
      ],
      servicesList: [
        {
          iconName: "FileText",
          title: "Management of Diários da República",
          description: "Maintenance, classification, and systematic indexing of Diários da República and Legal Diplomas in the JURISNET Portal."
        },
        {
          iconName: "BookOpen",
          title: "Editing Legislation Collections",
          description: "Preparation, annotation, and publishing of systematic legal collections and technical, educational, and literary works."
        },
        {
          iconName: "Database",
          title: "Digitization & Classification",
          description: "Professional digitization of large-format or sensitive documents, with thematic classification and metadata extraction."
        },
        {
          iconName: "FolderOpen",
          title: "Archive Organization",
          description: "Diagnosis, physical organization, cleaning, inventorying, and cataloging of historical and current archives."
        },
        {
          iconName: "GraduationCap",
          title: "Professional Training",
          description: "Technical training of staff in Document Management, Administrative Law, Archive Techniques, and New Technologies."
        },
        {
          iconName: "Globe",
          title: "Document Translation",
          description: "Specialized translation and retroversion service of technical and legal documents to several foreign languages."
        }
      ]
    },
    platform: {
      title: "Content Services Platform (CSP)",
      subtitle: "The Definitive Solution for the Digital Transition of Modern Organizations",
      intro: "Conceived through top-tier national and international development partnerships, our CSP Platform is a next-generation solution based on Microservices, highly scalable and flexible.",
      desc: "The main goal is to manage all unstructured information (documents, emails, technical or multimedia files), which constitutes a decisive factor for your business competitiveness and continuity.",
      benefitsTitle: "Return on Time and Resources",
      benefitsIntro: "Implementing our solution guarantees immediate access to information, strengthens security through advanced permission profiles, and significantly accelerates team digital transformation.",
      featuresList: [
        {
          iconName: "Scan",
          title: "Intelligent Capture",
          description: "Capture and digitization modules integrated with high-precision OCR for automatic cataloging."
        },
        {
          iconName: "GitMerge",
          title: "Automated Workflows",
          description: "Design of dynamic workflows and approval processes for paperless digital operations."
        },
        {
          iconName: "Lock",
          title: "Access & Security",
          description: "Absolute control of permissions, data encryption in transit and at rest, and full access auditing."
        },
        {
          iconName: "Cpu",
          title: "Microservices Architecture",
          description: "Developed over independent services that facilitate scalability, resilience, and zero-downtime updates."
        }
      ],
      implementationTitle: "Implementation & Standardization",
      implementationDesc: "Implementing a Document Management solution is a structured process that standardizes workflows and guarantees operational consistency.",
      steps: [
        {
          title: "1. Dematerialization",
          desc: "Digitization and conversion of the institution's physical archive into readable and searchable digital formats."
        },
        {
          title: "2. Systems Integration",
          desc: "Leveraging existing legacy systems in the organization to guarantee data interoperability."
        },
        {
          title: "3. Standardization",
          desc: "Standardization of classification methods, document typologies, indexing, and naming across the organization."
        },
        {
          title: "4. Search & Workflow",
          desc: "Activation of powerful semantic search engines and electronic document circulation circuits, leading to drastic cost reductions."
        }
      ]
    },
    projects: {
      title: "Projects and Clients",
      subtitle: "Success stories that prove LEXDATA's technical rigor and execution capacity",
      highlightTitle: "Spotlight: Angola Petroleum Digitization Project",
      highlightDesc: "Together with top local and international partners, LEXDATA carried out an ambitious digitization and dematerialization project of the entire physical archive referring to the Technical Documents of Petroleum Exploration in Angola.",
      highlightStats: [
        { value: "+7.5M", label: "A4 Equivalent Pages" },
        { value: "4.5 TB", label: "Volume of Generated Data" },
        { value: "100%", label: "Indexing Accuracy" },
        { value: "Confidential", label: "Security Level" }
      ],
      otherProjectsTitle: "Other Custom Solutions",
      projectList: [
        {
          id: "p1",
          client: "Imprensa Nacional - E.P.",
          title: "JURISNET Portal & Historical Database",
          description: "Systematic maintenance and online availability of all officially published Angolan legislation from 1845 to the present, covering the Diários da República Series I, II, and III.",
          details: [
            "Daily processing of new legal diplomas and insertion in the database within 12 hours.",
            "Advanced thematic indexing with legal alignment by specialized jurists.",
            "Advanced legal search interface available to citizens and public institutions."
          ]
        },
        {
          id: "p2",
          client: "Ministry of Justice and Human Rights (MINJUSDH)",
          title: "Companies Online Platform",
          description: "Development and systems integration for the Directory of Societies and dematerialization of the processes of constitution and consultation of companies online in Angola.",
          details: [
            "Reduction in the public search time for commercial registrations.",
            "Secure electronic processing of permanent certificate requests.",
            "Robust connection with central commercial identification databases."
          ]
        },
        {
          id: "p3",
          client: "Various Public Entities",
          title: "Conception, Customization & Portal Creation",
          description: "Development of custom institutional portals for information management, integrating them with corporate document management solutions.",
          details: [
            "Portal customization in compliance with State cybersecurity guidelines.",
            "Native integration with internal public administration workflows.",
            "Intensive training of public staff for autonomy in content publishing."
          ]
        }
      ]
    },
    contact: {
      title: "Contact LEXDATA",
      subtitle: "Ready to support your organization's digital transition and efficiency",
      addressTitle: "Main Address",
      addressValue: "Henrique de Carvalho Street, Imprensa Nacional E.P. Building, Luanda, Angola",
      phoneTitle: "Phones",
      phoneValue: "+244 222 334 567 / +244 923 456 789",
      emailTitle: "E-mail",
      emailValue: "geral@lexdata.gov.ao",
      hoursTitle: "Customer Service Hours",
      hoursValue: "Monday to Friday: 08:00 AM to 04:00 PM",
      formName: "Full Name",
      formEmail: "Email Address",
      formSubject: "Subject",
      formMessage: "Your Message",
      formSubmit: "Send Message",
      formSuccess: "Message sent successfully! Our team will get in touch shortly.",
      formPending: "Sending..."
    },
    footer: {
      desc: "Leader in digital preservation, legal classification, and document process standardization in Angola. A company with majority public capital.",
      linksTitle: "Navigation",
      servicesTitle: "Featured Services",
      rights: "© 2026 LEXDATA, LDA. All rights reserved. Majority ownership by Imprensa Nacional - E.P.",
      ownershipBadge: "Member of Imprensa Nacional - E.P. Group"
    }
  }
};
