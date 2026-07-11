import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  FileText, Cpu, Database, Landmark, Globe, GraduationCap, Laptop, 
  BookOpen, Layout, CheckCircle, ArrowLeft, ArrowRight, ShieldCheck, 
  Layers, Hammer, Award, Sparkles, Image as ImageIcon, Languages, Check, Send, AlertCircle
} from 'lucide-react';
import { Language } from '../types';

export const LANGUAGES_LIST = [
  { code: 'pt', name: 'Português', flag: '🇦🇴', native: 'Português' },
  { code: 'en', name: 'Inglês', flag: '🇬🇧', native: 'English' },
  { code: 'es', name: 'Espanhol', flag: '🇪🇸', native: 'Español' },
  { code: 'fr', name: 'Francês', flag: '🇫🇷', native: 'Français' },
  { code: 'zh', name: 'Chinês', flag: '🇨🇳', native: '中文 (Zhōngwén)' },
  { code: 'hi', name: 'Índia (Hindi)', flag: '🇮🇳', native: 'हिन्दी (Hindi)' },
  { code: 'ar', name: 'Árabe', flag: '🇸🇦', native: 'العربية (Al-ʿArabīyah)' },
  { code: 'de', name: 'Alemão', flag: '🇩🇪', native: 'Deutsch' },
  { code: 'ru', name: 'Russo', flag: '🇷🇺', native: 'Русский' },
  { code: 'it', name: 'Italiano', flag: '🇮🇹', native: 'Italiano' }
];

export const DOCUMENT_TEMPLATES = [
  {
    id: 'contract',
    name_pt: "Contrato de Prestação de Serviços Técnicos",
    name_en: "Technical Services Agreement",
    text_pt: "Pelo presente instrumento particular, a prestadora de serviços LEXDATA, LDA compromete-se a fornecer soluções avançadas de desmaterialização, higienização, organização física e digitalização inteligente de arquivos documentais corporativos.",
    translations: {
      pt: "Pelo presente instrumento particular, a prestadora de serviços LEXDATA, LDA compromete-se a fornecer soluções avançadas de desmaterialização, higienização, organização física e digitalização inteligente de arquivos documentais corporativos.",
      en: "By this private instrument, the service provider LEXDATA, LDA undertakes to provide advanced solutions for dematerialization, cleaning, physical organization, and smart digitization of corporate document archives.",
      es: "Por el presente instrumento privado, el proveedor de servicios LEXDATA, LDA se compromete a proporcionar soluciones avanzadas de desmaterialización, higienización, organización física y digitalización inteligente de archivos documentales corporativos.",
      fr: "Par le présent acte sous seing privé, le prestataire de services LEXDATA, LDA s'engage à fournir des solutions avancées de dématérialisation, d'hygiénisation, d'organisation physique et de numérisation intelligente d'archives documentaires d'entreprise.",
      zh: "根据本私立协议，服务提供商 LEXDATA, LDA 承诺为企业文档档案提供先进的去物质化、清洁、物理组织和智能数字化解决方案。",
      hi: "इस निजी दस्तावेज़ द्वारा, सेवा प्रदाता LEXDATA, LDA कॉर्पोरेट दस्तावेज़ अभिलेखागार के वि-सामग्रीकरण, स्वच्छता, भौतिक संगठन और स्मार्ट डिजिटलीकरण के लिए उन्नत समाधान प्रदान करने के लिए प्रतिबद्ध है।",
      ar: "بموجب هذه الوثيقة الخاصة، يلتزم مزود الخدمة LEXDATA, LDA بتقديم حلول متقدمة للتحول الرقمي والتعقيم والتنظيم المادي والرقمنة الذكية لأرشيفات وثائق الشركات.",
      de: "Mit dieser privaten Urkunde verpflichtet sich der Dienstleister LEXDATA, LDA, fortschrittliche Lösungen für die Entmaterialisierung, Reinigung, physische Organisation und digitale Erfassung von Unternehmensdokumentenarchiven bereitzustellen.",
      ru: "Настоящим частным соглашением поставщик услуг LEXDATA, LDA обязуется предоставлять передовые решения для дематериализации, очистки, физической организации и интеллектуальной оцифровки корпоративных архивов документов.",
      it: "Con il presente strumento privato, il fornitore di servizi LEXDATA, LDA si impegna a fornire soluzioni avanzate di dematerializzazione, igienizzazione, organizzazione fisica e digitalizzazione inteligente di archivi documentali aziendali."
    }
  },
  {
    id: 'decree',
    name_pt: "Decreto Presidencial Regulamentar n.º 45/26",
    name_en: "Presidential Regulatory Decree No. 45/26",
    text_pt: "Nos termos das competências atribuídas pela Constituição da República de Angola, fica aprovado o novo regime jurídico aplicável ao tratamento de acervos arquivísticos públicos e sua respetiva custódia informática.",
    translations: {
      pt: "Nos termos das competências atribuídas pela Constituição da República de Angola, fica aprovado o novo regime jurídico aplicável ao tratamento de acervos arquivísticos públicos e sua respetiva custódia informática.",
      en: "Under the powers conferred by the Constitution of the Republic of Angola, the new legal framework applicable to the processing of public archival collections and their respective computer custody is hereby approved.",
      es: "En virtud de las facultades conferidas por la Constitución de la República de Angola, se aprueba el nuevo régimen jurídico aplicable al tratamiento de los fondos archivísticos públicos y su respectiva custodia informática.",
      fr: "En vertu des pouvoirs conférés par la Constitution de l'Angola, est approuvé le nouveau régime juridique applicable au traitement des fonds d'archives publics et à leur garde informatique respective.",
      zh: "根据安哥拉共和国宪法赋予的权力，特此批准适用于公共档案收集处理及其相应计算机托管的新法律框架。",
      hi: "अंगोला गणराज्य के संविधान द्वारा प्रदत्त शक्तियों के तहत, सार्वजनिक अभिलेखीय संग्रहों के प्रसंस्करण और उनके संबंधित कंप्यूटर कस्टडी पर लागू नए कानूनी ढांचे को इसके द्वारा अनुमोदित किया जाता है।",
      ar: "بموجب الصلاحيات الممنوحة بموجب دستور جمهورية أنغولا، تمت الموافقة بموجب هذا على الإطار القانوني الجديد المطبق على معالجة مجموعات الأرشيف العام وحفظها الحاسوبي المعني.",
      de: "Unter den durch die Verfassung der Republik Angola übertragenen Befugnissen wird hiermit der neue rechtliche Rahmen genehmigt, der für die Bearbeitung öffentlicher Archivbestände und deren jeweilige informationstechnische Verwahrung gilt.",
      ru: "В соответствии с полномочиями, предоставленными Конституцией Республики Ангола, настоящим утверждается новая правовая база, применимая к обработке государственных архивных фондов и их соответствующему компьютерному хранению.",
      it: "In virtù dei poteri conferiti dalla Costituzione della Repubblica dell'Angola, viene approvato il nuovo regime giuridico applicabile al trattamento dei fondi archivistici pubblici e alla loro rispettiva custodia informatica."
    }
  },
  {
    id: 'diploma',
    name_pt: "Diploma Técnico de Engenharia Documental",
    name_en: "Document Engineering Technical Specifications",
    text_pt: "Os metadados obrigatórios exigidos para o índice temático de consulta pública incluem: número do diploma, data de publicação oficial, sumário anotado, remissão legal e palavras-chave de indexação semântica.",
    translations: {
      pt: "Os metadados obrigatórios exigidos para o índice temático de consulta pública incluem: número do diploma, data de publicação oficial, sumário anotado, remissão legal e palavras-chave de indexação semântica.",
      en: "The mandatory metadata required for the public consultation thematic index includes: decree number, official publication date, annotated summary, legal cross-reference, and semantic indexing keywords.",
      es: "Los metadados obligatorios requeridos para el índice temático de consulta pública incluem: número de decreto, fecha de publicación oficial, resumen anotado, referencia legal cruzada y palabras clave de indexación semántica.",
      fr: "Les métadonnées obligatoires requises pour l'index thématique de consultation publique comprennent : le numéro du décret, la date de publication officielle, le résumé annoté, le renvoi légal et les mots-clés d'indexation sémantique.",
      zh: "公众咨询专题索引所需的强制性元数据包括：法令编号、官方发布日期、带注释的摘要、法律交叉引用和语义索引关键字。",
      hi: "सार्वजनिक परामर्श विषयगत सूचकांक के लिए आवश्यक अनिवार्य मेटाडेटा में शामिल हैं: डिक्री संख्या, आधिकारिक प्रकाशन तिथि, एनोटेट सारांश, कानूनी क्रॉस-संदर्भ, और शब्दार्थ अनुक्रमण कीवर्ड।",
      ar: "تشمل البيانات الوصفية الإلزامية المطلوبة للفهرس الموضوعي للاستشارات العامة ما يلي: رقم المرسوم، وتاريخ النشر الرسمي، والملخص المشروح، والإسناد الترافقي القانوني، والكلمات المفتاحية للفهرسة الدلالية.",
      de: "Die für den thematischen Index der öffentlichen Konsultation erforderlichen obligatorischen Metdaten umfassen: Dekretnummer, offizielles Veröffentlichungsdatum, annotierte Zusammenfassung, rechtliche Querverweise und Schlüsselwörter für die semantische Indizierung.",
      ru: "Обязательные метаданные, необходимые для тематического указателя общественных консультаций, включают: номер указа, дату официального опубликования, аннотированное резюме, юридическую перекрестную ссылку и ключевые слова семантического индексирования.",
      it: "I metadati obbligatori richiesti per l'indice tematico di consultazione pubblica comprendono: numero del decreto, data di pubblicazione ufficiale, sommario annotato, rinvio legale e parole chiave di indicizzazione semantica."
    }
  }
];

interface ServicesProps {
  language: Language;
}

export default function Services({ language }: ServicesProps) {
  const [selectedServiceId, setSelectedServiceId] = useState<string>('gd');

  // Translation simulator states
  const [sourceLang, setSourceLang] = useState<string>('pt');
  const [targetLang, setTargetLang] = useState<string>('en');
  const [activeTemplateId, setActiveTemplateId] = useState<string>('contract');
  const [showQuoteForm, setShowQuoteForm] = useState<boolean>(false);
  const [quoteFormData, setQuoteFormData] = useState({
    name: '',
    email: '',
    phone: '',
    notes: '',
  });
  const [quoteSubmitted, setQuoteSubmitted] = useState<boolean>(false);

  const handleQuoteSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setQuoteSubmitted(true);
    setTimeout(() => {
      setQuoteSubmitted(false);
      setShowQuoteForm(false);
      setQuoteFormData({ name: '', email: '', phone: '', notes: '' });
    }, 4500);
  };

  // Comprehensive Services List as per requested structure
  const servicesList = [
    {
      id: 'gd',
      icon: <FileText className="w-5 h-5" />,
      title: "Gestão Documental",
      imageUrl: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=800&auto=format&fit=crop",
      shortDesc: "Captura inteligente, indexação automática e fluxos de aprovação de documentos organizacionais.",
      desc: "A nossa solução de Gestão Documental desmaterializa processos operacionais complexos, eliminando o papel físico e acelerando o acesso à informação em múltiplos departamentos de forma rastreável.",
      benefits: [
        "Acesso imediato e seguro a qualquer ficheiro organizacional.",
        "Automatização de processos de aprovação com workflows personalizados.",
        "Redução drástica do custo operacional com fotocópias e papel.",
        "Total rastreabilidade e conformidade com leis de auditoria de dados."
      ],
      process: [
        { step: "1. Diagnóstico", desc: "Análise dos processos internos de circulação documental." },
        { step: "2. Parametrização", desc: "Configuração de fluxos de trabalho e níveis de permissão na nuvem." },
        { step: "3. Formação", desc: "Capacitação das equipas para a utilização correta do sistema." },
        { step: "4. Auditoria", desc: "Monitorização contínua de segurança e tempos de resposta." }
      ],
      mockup: "document_management_flow"
    },
    {
      id: 'dig',
      icon: <Cpu className="w-5 h-5" />,
      title: "Digitalização Documental",
      imageUrl: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=800&auto=format&fit=crop",
      shortDesc: "Conversão de larga escala de papel físico em repositórios digitais inteligentes por OCR.",
      desc: "Digitalizamos acervos de milhões de páginas com rigor industrial e alta fidelidade. O processo inclui desmetalização, digitalização com scanners de alta performance, indexação e classificação.",
      process: [
        { step: "1. Preparação", desc: "Remoção de agrafos, clips, higienização de papéis degradados." },
        { step: "2. Captura Industrial", desc: "Digitalização frente e verso em alta definição com scanners rotativos." },
        { step: "3. OCR inteligente", desc: "Extração de texto total para possibilitar pesquisas por palavras-chave." },
        { step: "4. Indexação e Metadados", desc: "Classificação por tipo documental, data, assunto e emitente." }
      ],
      equipments: [
        "Scanners rotativos de alta produção Kodak Alaris (até 150 folhas por minuto).",
        "Scanners planetários de alta precisão Zeutschel para livros históricos e de registo civil.",
        "Software OCR de última geração com capacidade de leitura em português, inglês e francês."
      ],
      benefits: [
        "Pesquisa de texto integral e inteligente em segundos.",
        "Preservação definitiva de originais físicos frágeis ou históricos.",
        "Facilidade de partilha rápida e segura de dados digitais."
      ],
      mockup: "scanning_tech"
    },
    {
      id: 'arq',
      icon: <Database className="w-5 h-5" />,
      title: "Organização de Arquivos",
      imageUrl: "https://images.unsplash.com/photo-1568667256549-094345857637?q=80&w=800&auto=format&fit=crop",
      shortDesc: "Organização física, diagnóstico, higienização e catalogação de arquivos correntes ou históricos.",
      desc: "Tratamos do seu arquivo de forma científica. Desde o diagnóstico da situação atual à arrumação física em estantes e caixas apropriadas, garantindo um inventário completo e informatizado.",
      benefits: [
        "Controlo absoluto do stock de caixas e pastas de arquivo.",
        "Aplicação rigorosa de tabelas de seleção e conservação administrativa.",
        "Melhoria do aproveitamento do espaço físico útil dos seus escritórios."
      ],
      process: [
        { step: "Fase 1: Diagnóstico", desc: "Análise de volumes, tipologias e estado de conservação do arquivo." },
        { step: "Fase 2: Higienização", desc: "Limpeza de poeiras e pragas com segurança técnica." },
        { step: "Fase 3: Inventariação", desc: "Catalogação sistemática em base de dados de arquivo." }
      ],
      mockup: "physical_archive"
    },
    {
      id: 'pub',
      icon: <Landmark className="w-5 h-5" />,
      title: "Publicações Oficiais",
      imageUrl: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=800&auto=format&fit=crop",
      shortDesc: "Gestão, indexação temática e classificação jurídica sistemática de Diários da República.",
      desc: "A LEXDATA é especialista na catalogação do Diário da República de Angola. Desenvolvemos o SIPPO e o Portal JURISNET, garantindo o enquadramento temático e inserção rápida de diplomas estatais.",
      benefits: [
        "Rastreabilidade histórica de diplomas oficiais desde 1845.",
        "Análise temática avançada realizada por juristas seniores.",
        "Atualização constante em conformidade com as publicações estatais."
      ],
      process: [
        { step: "1. Receção", desc: "Acesso direto aos Diários da República das I, II e III Séries." },
        { step: "2. Classificação", desc: "Leitura analítica e categorização jurídica de diplomas." },
        { step: "3. Indexação", desc: "Associação de metadados temáticos e remissões para outros diplomas." }
      ],
      mockup: "jurisnet_diario"
    },
    {
      id: 'trad',
      icon: <Globe className="w-5 h-5" />,
      title: "Tradução e Retroversão",
      imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop",
      shortDesc: "Tradução especializada de documentos técnicos, contratos e diplomas oficiais.",
      desc: "Oferecemos serviços de tradução e retroversão de documentos técnicos e jurídicos para várias línguas estrangeiras, incluindo inglês, francês, espanhol e alemão, garantindo o máximo rigor terminológico.",
      benefits: [
        "Tradutores especializados em terminologia jurídica e de engenharia.",
        "Garantia de confidencialidade com acordos NDA rígidos.",
        "Prazos de entrega rápidos adaptados a transações urgentes."
      ],
      mockup: "translation_office"
    },
    {
      id: 'form',
      icon: <GraduationCap className="w-5 h-5" />,
      title: "Formação Profissional",
      imageUrl: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&auto=format&fit=crop",
      shortDesc: "Capacitação técnica para quadros e equipas em Gestão Documental e Arquivos.",
      desc: "Programas de formação intensivos, práticos e teóricos, orientados para qualificar os recursos humanos da administração pública e privada angolana.",
      benefits: [
        "Capacitação prática em sistemas modernos de gestão de conteúdos (CSP).",
        "Aumento da produtividade das secretarias e arquivos institucionais.",
        "Certificados em técnicas avançadas de arquivo e classificação jurídica."
      ],
      mockup: "training_academy"
    },
    {
      id: 'port',
      icon: <Laptop className="w-5 h-5" />,
      title: "Desenvolvimento de Sites e Portais",
      imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
      shortDesc: "Portais institucionais robustos e customizados de alta performance.",
      desc: "Desenhamos e programamos portais institucionais seguros e acessíveis, focados na transparência de dados estatais e integrados com bases de dados documentais robustas.",
      benefits: [
        "Conformidade total com as normas governamentais de Angola.",
        "Altas velocidades de carregamento e total otimização móvel.",
        "Segurança contra ciberataques com firewalls e auditoria de código."
      ],
      mockup: "dev_portals"
    },
    {
      id: 'edi',
      icon: <BookOpen className="w-5 h-5" />,
      title: "Edição e Produção Editorial",
      imageUrl: "https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?q=80&w=800&auto=format&fit=crop",
      shortDesc: "Coletâneas de legislação anotadas e obras de cariz técnico e didático.",
      desc: "Coordenamos a preparação, anotação temática e publicação gráfica ou digital de coletâneas legislativas temáticas e manuais didáticos oficiais para o mercado nacional.",
      benefits: [
        "Qualidade científica em anotações de leis.",
        "Desenho gráfico editorial sóbrio e profissional.",
        "Distribuição física e disponibilização digital no Portal IN."
      ],
      mockup: "editorial_prod"
    },
    {
      id: 'gra',
      icon: <Layout className="w-5 h-5" />,
      title: "Serviços Gráficos",
      imageUrl: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?q=80&w=800&auto=format&fit=crop",
      shortDesc: "Criação visual e produção gráfica profissional: Flyers, Brochuras, Roll-ups e Logótipos.",
      desc: "Gama completa de serviços de design e produção gráfica para apoiar a imagem institutional e corporativa das organizações angolanas.",
      benefits: [
        "Design visual contemporâneo que valoriza a marca da sua empresa.",
        "Produção e entrega rápida com controle rígido de qualidade gráfica.",
        "Fidelidade de cores e materiais premium em impressos físicos."
      ],
      graphicsItems: [
        "Flyers & Panfletos promocionais de alta qualidade.",
        "Brochuras institucionais e relatórios anuais corporativos.",
        "Cartões de visita com acabamentos premium.",
        "Roll-ups para conferências e eventos corporativos.",
        "Banners promocionais digitais ou em lona de grande formato.",
        "Criação e modernização de Logótipos e identidades corporativas."
      ],
      mockup: "graphic_studios"
    }
  ];

  const selectedService = servicesList.find(s => s.id === selectedServiceId) || servicesList[0];

  return (
    <div className="bg-gray-50 text-left">
      {/* Banner Section with Background Image */}
      <div className="relative h-[240px] sm:h-[300px] bg-brand-deep flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1600&auto=format&fit=crop" 
            alt="Services Banner" 
            className="w-full h-full object-cover opacity-35" 
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-deep via-brand-deep/85 to-transparent" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full mt-8">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 bg-brand-blue transform rotate-45" />
            <span className="text-xs uppercase font-mono font-bold tracking-widest text-brand-blue">
              {language === 'pt' ? 'CORE BUSINESS' : 'SERVICES'}
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            {language === 'pt' ? "Serviços" : "Services"}
          </h1>
          <p className="text-gray-300 text-xs sm:text-sm mt-2 max-w-xl">
            {language === 'pt' 
              ? "Captura inteligente, gestão eletrónica avançada e conservação física especializada." 
              : "Smart capture, advanced digital management, and specialized physical archival."}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        
        {/* Page Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-blue/10 text-brand-blue text-xs font-bold uppercase tracking-wider">
            <Layers className="w-3.5 h-3.5" />
            <span>{language === 'pt' ? 'Portfólio de Serviços' : 'Our Services'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-deep tracking-tight">
            {language === 'pt' ? "Nossas Especialidades e Soluções" : "Our Expert Services"}
          </h2>
          <p className="text-gray-500 text-sm">
            Explorar cada especialidade com informação detalhada, benefícios estratégicos e processos operacionais.
          </p>
          <div className="w-20 h-1.5 bg-brand-blue mx-auto mt-4 rounded-full" />
        </div>

        {/* Multi-Page Simulation Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Sidebar Menu */}
          <div className="lg:col-span-4 bg-white p-6 rounded-3xl border border-gray-150 shadow-sm space-y-2 sticky top-28">
            <h3 className="text-xs uppercase font-mono font-bold tracking-wider text-gray-400 mb-4 px-3">
              {language === 'pt' ? 'Menu de Serviços' : 'Services Menu'}
            </h3>
            {servicesList.map((service) => {
              const isActive = service.id === selectedServiceId;
              return (
                <button
                  key={service.id}
                  onClick={() => setSelectedServiceId(service.id)}
                  className={`w-full text-left px-4 py-3 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-3 transition-all cursor-pointer ${
                    isActive 
                      ? 'bg-brand-deep text-white shadow-md' 
                      : 'text-gray-600 hover:text-brand-deep hover:bg-gray-50'
                  }`}
                >
                  <div className={`p-1.5 rounded-lg shrink-0 ${isActive ? 'bg-white/10 text-brand-blue' : 'bg-gray-100 text-gray-500'}`}>
                    {service.icon}
                  </div>
                  <span className="truncate">{service.title}</span>
                </button>
              );
            })}
          </div>

          {/* Right Sub-Page Simulator */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedServiceId}
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-3xl border border-gray-150 shadow-xl p-8 space-y-8"
              >
                {/* Header */}
                <div className="flex justify-between items-start pb-6 border-b border-gray-100">
                  <div className="space-y-2">
                    <span className="text-[10px] font-mono uppercase bg-brand-blue/15 text-brand-blue px-2.5 py-1 rounded-full font-bold">
                      Serviço Oficial LEXDATA
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-brand-deep">{selectedService.title}</h3>
                  </div>
                  <div className="p-4 bg-brand-deep/5 text-brand-deep rounded-2xl">
                    {selectedService.icon}
                  </div>
                </div>

                {/* Visual Service Banner (NEW) */}
                {selectedService.imageUrl && (
                  <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden shadow-md group">
                    <img 
                      src={selectedService.imageUrl} 
                      alt={selectedService.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent pointer-events-none" />
                    <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                      <span className="text-[10px] font-mono tracking-wider uppercase text-white bg-brand-blue px-2.5 py-1 rounded font-bold">
                        {selectedService.title}
                      </span>
                      <span className="text-[10px] text-gray-300 font-mono">LEXDATA INDUSTRIAL</span>
                    </div>
                  </div>
                )}

                {/* Narrative */}
                <div className="space-y-4">
                  <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                    {selectedService.desc}
                  </p>
                </div>

                {/* INTERACTIVE TRANSLATION WIDGET (NEW) */}
                {selectedServiceId === 'trad' && (
                  <div className="border border-brand-blue/20 bg-brand-blue/5 p-6 rounded-2xl space-y-6">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div className="space-y-1">
                        <h4 className="font-extrabold text-brand-deep text-sm sm:text-base flex items-center gap-2">
                          <Languages className="w-5 h-5 text-brand-blue" />
                          {language === 'pt' ? "Simulador de Tradução e Retroversão Jurídica" : "Legal Translation & Retroversion Simulator"}
                        </h4>
                        <p className="text-gray-500 text-xs">
                          {language === 'pt' 
                            ? "Escolha as línguas de origem e destino (com bandeiras oficiais) para simular o rigor LEXDATA."
                            : "Choose source and target languages (with official flags) to simulate LEXDATA's accuracy."}
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {DOCUMENT_TEMPLATES.map((tpl) => (
                          <button
                            key={tpl.id}
                            onClick={() => setActiveTemplateId(tpl.id)}
                            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                              activeTemplateId === tpl.id
                                ? 'bg-brand-blue text-white shadow-sm'
                                : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-50'
                            }`}
                          >
                            {language === 'pt' ? tpl.name_pt : tpl.name_en}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Language Selector Bar */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                      {/* Source Language Selector */}
                      <div className="space-y-1.5">
                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider font-mono">
                          {language === 'pt' ? "Idioma de Origem" : "Source Language"}
                        </label>
                        <div className="relative">
                          <select
                            value={sourceLang}
                            onChange={(e) => {
                              const val = e.target.value;
                              setSourceLang(val);
                              // Ensure target is not the same
                              if (val === targetLang) {
                                const fallback = LANGUAGES_LIST.find(l => l.code !== val)?.code || 'en';
                                setTargetLang(fallback);
                              }
                            }}
                            className="w-full bg-white border border-gray-200 rounded-xl px-3.5 py-2.5 text-xs font-bold text-brand-deep focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue appearance-none pr-10"
                          >
                            {LANGUAGES_LIST.map((lang) => (
                              <option key={lang.code} value={lang.code}>
                                {lang.flag} {lang.name} ({lang.native})
                              </option>
                            ))}
                          </select>
                          <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400 text-[10px]">▼</div>
                        </div>
                      </div>

                      {/* Target Language Selector */}
                      <div className="space-y-1.5">
                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider font-mono">
                          {language === 'pt' ? "Idioma de Destino" : "Target Language"}
                        </label>
                        <div className="relative">
                          <select
                            value={targetLang}
                            onChange={(e) => {
                              const val = e.target.value;
                              setTargetLang(val);
                              // Ensure source is not the same
                              if (val === sourceLang) {
                                const fallback = LANGUAGES_LIST.find(l => l.code !== val)?.code || 'pt';
                                setSourceLang(fallback);
                              }
                            }}
                            className="w-full bg-white border border-gray-200 rounded-xl px-3.5 py-2.5 text-xs font-bold text-brand-deep focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue appearance-none pr-10"
                          >
                            {LANGUAGES_LIST.map((lang) => (
                              <option key={lang.code} value={lang.code} disabled={lang.code === sourceLang}>
                                {lang.flag} {lang.name} ({lang.native})
                              </option>
                            ))}
                          </select>
                          <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400 text-[10px]">▼</div>
                        </div>
                      </div>
                    </div>

                    {/* Dual translation board */}
                    {(() => {
                      const activeTpl = DOCUMENT_TEMPLATES.find(t => t.id === activeTemplateId);
                      return (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {/* Source Box */}
                          <div className="bg-white p-4 rounded-xl border border-gray-150 space-y-2">
                            <div className="flex items-center justify-between pb-2 border-b border-gray-100">
                              <span className="text-[10px] font-mono uppercase tracking-wider text-gray-400 font-bold flex items-center gap-1.5">
                                <span className="text-sm">{LANGUAGES_LIST.find(l => l.code === sourceLang)?.flag}</span>
                                {LANGUAGES_LIST.find(l => l.code === sourceLang)?.name}
                              </span>
                              <span className="text-[9px] font-mono text-gray-400 uppercase font-bold">Documento Original</span>
                            </div>
                            <p className="text-gray-700 text-xs sm:text-sm leading-relaxed min-h-[80px] pt-1">
                              {sourceLang === 'pt' 
                                ? activeTpl?.text_pt
                                : ((activeTpl?.translations as any)?.[sourceLang] || activeTpl?.text_pt)}
                            </p>
                          </div>

                          {/* Target Box */}
                          <div className="bg-slate-900 text-slate-100 p-4 rounded-xl border border-slate-800 space-y-2 relative">
                            <div className="absolute top-2 right-2 flex items-center gap-1 bg-brand-blue/20 text-brand-blue px-1.5 py-0.5 rounded text-[8px] font-mono font-bold">
                              <Sparkles className="w-2.5 h-2.5 text-brand-blue" />
                              <span>HIGH FIDELITY</span>
                            </div>
                            <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                              <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold flex items-center gap-1.5">
                                <span className="text-sm">{LANGUAGES_LIST.find(l => l.code === targetLang)?.flag}</span>
                                {LANGUAGES_LIST.find(l => l.code === targetLang)?.name}
                              </span>
                              <span className="text-[9px] font-mono text-slate-400 uppercase font-bold mr-16">Tradução Jurídica</span>
                            </div>
                            <motion.p 
                              key={`${activeTemplateId}-${targetLang}`}
                              initial={{ opacity: 0, y: 3 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.3 }}
                              className="text-slate-200 text-xs sm:text-sm leading-relaxed min-h-[80px] pt-1"
                            >
                              {((activeTpl?.translations as any)?.[targetLang]) || "Translation pending..."}
                            </motion.p>
                          </div>
                        </div>
                      );
                    })()}

                    {/* Interactive Improved Translation Request Button */}
                    <div className="flex flex-col items-center justify-center pt-2">
                      <motion.button
                        id="services-custom-translation-btn"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setShowQuoteForm(!showQuoteForm)}
                        className="bg-brand-blue hover:bg-brand-blue/90 text-white text-xs sm:text-sm font-extrabold px-8 py-4 rounded-xl shadow-xl hover:shadow-2xl transition-all flex items-center gap-2 cursor-pointer border border-brand-blue/35 text-center group"
                      >
                        <span className="text-lg">🌍</span>
                        <span>
                          {language === 'pt'
                            ? `Contratar Tradução Profissional: ${LANGUAGES_LIST.find(l => l.code === sourceLang)?.flag} ➔ ${LANGUAGES_LIST.find(l => l.code === targetLang)?.flag}`
                            : `Order Professional Translation: ${LANGUAGES_LIST.find(l => l.code === sourceLang)?.flag} ➔ ${LANGUAGES_LIST.find(l => l.code === targetLang)?.flag}`}
                        </span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </motion.button>
                      <p className="text-[10px] text-gray-400 mt-2 text-center">
                        {language === 'pt' 
                          ? "*Traduções certificadas com retroversão e validação consular para uso internacional oficial."
                          : "*Certified translations with retroversion and consular validation for official international use."}
                      </p>
                    </div>

                    {/* Expandable Quote Form Drawer */}
                    <AnimatePresence>
                      {showQuoteForm && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden bg-white border border-gray-200 rounded-xl p-5 sm:p-6 shadow-lg space-y-4"
                        >
                          <div className="flex items-center justify-between pb-3 border-b border-gray-150">
                            <h5 className="font-extrabold text-brand-deep text-sm flex items-center gap-2">
                              <Languages className="w-4.5 h-4.5 text-brand-blue" />
                              {language === 'pt' ? "Solicitação Instantânea de Orçamento" : "Instant Translation Quote Request"}
                            </h5>
                            <button 
                              onClick={() => setShowQuoteForm(false)}
                              className="text-gray-400 hover:text-gray-600 text-xs font-bold"
                            >
                              ✕
                            </button>
                          </div>

                          {quoteSubmitted ? (
                            <motion.div 
                              initial={{ opacity: 0, scale: 0.95 }}
                              animate={{ opacity: 1, scale: 1 }}
                              className="p-6 bg-emerald-50 border border-emerald-200 rounded-xl text-center space-y-2"
                            >
                              <span className="inline-block text-3xl">✅</span>
                              <h6 className="font-bold text-emerald-800 text-sm">
                                {language === 'pt' ? "Pedido Enviado com Sucesso!" : "Request Sent Successfully!"}
                              </h6>
                              <p className="text-emerald-600 text-xs max-w-md mx-auto leading-relaxed">
                                {language === 'pt'
                                  ? `A nossa equipa jurídica recebeu o seu pedido de tradução de ${LANGUAGES_LIST.find(l => l.code === sourceLang)?.name} para ${LANGUAGES_LIST.find(l => l.code === targetLang)?.name}. Responderemos com a cotação oficial e prazos de entrega em menos de 2 horas!`
                                  : `Our legal translation desk has received your request from ${LANGUAGES_LIST.find(l => l.code === sourceLang)?.name} to ${LANGUAGES_LIST.find(l => l.code === targetLang)?.name}. We will get back to you with an official quote and delivery timeline in less than 2 hours!`}
                              </p>
                            </motion.div>
                          ) : (
                            <form onSubmit={handleQuoteSubmit} className="space-y-4">
                              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                <div className="space-y-1">
                                  <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider font-mono">Nome Completo</label>
                                  <input 
                                    type="text" 
                                    required
                                    placeholder="Ex: Dr. José da Silva" 
                                    value={quoteFormData.name}
                                    onChange={(e) => setQuoteFormData({...quoteFormData, name: e.target.value})}
                                    className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-xs text-brand-deep focus:outline-none focus:ring-2 focus:ring-brand-blue/30"
                                  />
                                </div>
                                <div className="space-y-1">
                                  <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider font-mono">E-mail Corporativo</label>
                                  <input 
                                    type="email" 
                                    required
                                    placeholder="silva@empresa.ao" 
                                    value={quoteFormData.email}
                                    onChange={(e) => setQuoteFormData({...quoteFormData, email: e.target.value})}
                                    className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-xs text-brand-deep focus:outline-none focus:ring-2 focus:ring-brand-blue/30"
                                  />
                                </div>
                                <div className="space-y-1">
                                  <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider font-mono">Telefone / WhatsApp</label>
                                  <input 
                                    type="tel" 
                                    required
                                    placeholder="+244 9..." 
                                    value={quoteFormData.phone}
                                    onChange={(e) => setQuoteFormData({...quoteFormData, phone: e.target.value})}
                                    className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-xs text-brand-deep focus:outline-none focus:ring-2 focus:ring-brand-blue/30"
                                  />
                                </div>
                              </div>

                              <div className="space-y-1">
                                <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider font-mono">
                                  Notas do Acervo ou Texto Customizado para Traduzir
                                </label>
                                <textarea 
                                  rows={2}
                                  placeholder="Indique o número estimado de páginas, complexidade jurídica ou insira trechos do documento..." 
                                  value={quoteFormData.notes}
                                  onChange={(e) => setQuoteFormData({...quoteFormData, notes: e.target.value})}
                                  className="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 text-xs text-brand-deep focus:outline-none focus:ring-2 focus:ring-brand-blue/30"
                                />
                              </div>

                              <div className="flex justify-end gap-3 pt-2">
                                <button
                                  type="button"
                                  onClick={() => setShowQuoteForm(false)}
                                  className="px-4 py-2 text-xs font-bold text-gray-500 hover:text-gray-700 bg-gray-100 rounded-lg"
                                >
                                  {language === 'pt' ? "Cancelar" : "Cancel"}
                                </button>
                                <button
                                  type="submit"
                                  className="bg-brand-deep hover:bg-slate-900 text-white text-xs font-extrabold px-5 py-2 rounded-lg shadow flex items-center gap-1.5 cursor-pointer"
                                >
                                  <Send className="w-3 h-3" />
                                  <span>{language === 'pt' ? "Enviar Pedido de Cotação" : "Submit Quote Request"}</span>
                                </button>
                              </div>
                            </form>
                          )}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )}

                {/* Graphics list or Equipments specific to ID */}
                {selectedService.graphicsItems && (
                  <div className="space-y-4">
                    <h4 className="font-extrabold text-gray-900 text-sm flex items-center gap-2">
                      <ImageIcon className="w-4 h-4 text-brand-blue" />
                      Produtos Gráficos Disponíveis
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {selectedService.graphicsItems.map((item, idx) => (
                        <div key={idx} className="p-3 bg-gray-50 border border-gray-100 rounded-xl flex items-center gap-2.5">
                          <CheckCircle className="w-4 h-4 text-brand-blue shrink-0" />
                          <span className="text-xs text-gray-700 font-medium">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {selectedService.equipments && (
                  <div className="space-y-4 bg-brand-deep/5 p-6 rounded-2xl border border-brand-deep/10">
                    <h4 className="font-extrabold text-brand-deep text-sm flex items-center gap-2">
                      <Hammer className="w-4.5 h-4.5 text-brand-blue" />
                      Equipamentos Industriais Utilizados
                    </h4>
                    <ul className="space-y-2.5">
                      {selectedService.equipments.map((eq, idx) => (
                        <li key={idx} className="flex gap-2 text-xs text-gray-600 leading-relaxed items-start">
                          <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                          <span>{eq}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Benefits */}
                {selectedService.benefits && (
                  <div className="space-y-4">
                    <h4 className="font-extrabold text-gray-900 text-sm flex items-center gap-2">
                      <ShieldCheck className="w-4.5 h-4.5 text-brand-blue" />
                      Principais Benefícios Estratégicos
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {selectedService.benefits.map((benefit, idx) => (
                        <div key={idx} className="p-4 border border-gray-100 rounded-xl flex items-start gap-3 bg-white hover:border-brand-blue/30 transition-all">
                          <CheckCircle className="w-4 h-4 text-brand-blue mt-0.5 shrink-0" />
                          <span className="text-xs text-gray-600 leading-normal">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Process Workflow Steps */}
                {selectedService.process && (
                  <div className="space-y-4">
                    <h4 className="font-extrabold text-gray-900 text-sm flex items-center gap-2">
                      <Layers className="w-4.5 h-4.5 text-brand-blue" />
                      Como Funciona o Processo
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                      {selectedService.process.map((p, idx) => (
                        <div key={idx} className="p-4 bg-gray-50 border border-gray-100 rounded-xl space-y-2 relative">
                          <div className="text-[10px] font-mono font-bold text-brand-blue uppercase">{p.step.split('.')[0]}</div>
                          <h5 className="font-bold text-xs text-brand-deep">{p.step.split('.')[1] || p.step}</h5>
                          <p className="text-[10px] text-gray-500 leading-normal">{p.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Contact CTA Card */}
                <div className="p-8 bg-slate-950 text-white rounded-2xl relative overflow-hidden flex flex-col sm:flex-row items-center justify-between gap-6">
                  <div className="absolute top-0 right-0 w-36 h-36 bg-brand-blue/15 rounded-full blur-2xl pointer-events-none" />
                  <div className="space-y-2 z-10 text-left max-w-lg">
                    <span className="text-[9px] font-mono tracking-widest uppercase text-brand-blue bg-brand-blue/10 px-2 py-0.5 rounded font-bold">
                      Serviço Personalizado
                    </span>
                    <h4 className="font-extrabold text-lg sm:text-xl text-white">Necessita de uma Solução à Medida?</h4>
                    <p className="text-gray-400 text-xs sm:text-sm">
                      A nossa equipa de consultores jurídicos e engenheiros documentais está pronta para desenhar um plano específico de transição digital para a sua organização.
                    </p>
                  </div>
                  <button
                    id="services-cta-contact"
                    onClick={() => {
                      const contactBtn = document.getElementById('nav-btn-contact') || document.getElementById('nav-mob-btn-contact');
                      if (contactBtn) {
                        contactBtn.click();
                      } else {
                        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
                      }
                    }}
                    className="bg-brand-blue hover:bg-brand-blue/90 text-white text-xs font-bold px-6 py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all shrink-0 z-10 flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>Solicitar Proposta</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </div>
  );
}
