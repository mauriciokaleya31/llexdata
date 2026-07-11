import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, Shield, Database, Cpu, FileText, Network, CheckCircle, 
  ChevronLeft, ChevronRight, Play, Users, Award, Landmark, GraduationCap, 
  Search, BookOpen, Globe, Laptop, HelpCircle, Briefcase, Zap, Calendar, Lock,
  Sparkles, Code, MessageSquare, ArrowUpRight, Check, Plus, Minus, PhoneCall, Star, Mail, MapPin, Send, LayoutGrid, X
} from 'lucide-react';
import { Language } from '../types';

import workspaceScanning from '../assets/images/regenerated_image_1783753906385.png';
import workspaceImg1 from '../assets/images/regenerated_image_1783754333694.png';
import workspaceImg2 from '../assets/images/regenerated_image_1783754337971.png';
import workspaceImg3 from '../assets/images/regenerated_image_1783754346264.png';
import workspaceImg4 from '../assets/images/regenerated_image_1783754339998.png';
import workspaceImg5 from '../assets/images/regenerated_image_1783754627267.png';
import workspaceImg6 from '../assets/images/regenerated_image_1783754651963.png';
import workspaceImg7 from '../assets/images/regenerated_image_1783754342182.png';
import workspaceImg8 from '../assets/images/regenerated_image_1783754344326.png';
import regeneratedProjectImg from '../assets/images/regenerated_image_1783758616892.png';
import regeneratedBlogImg from '../assets/images/regenerated_image_1783758620144.png';

interface HomeProps {
  language: Language;
  setActiveTab: (tab: string) => void;
}

export default function Home({ language, setActiveTab }: HomeProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeServiceSlide, setActiveServiceSlide] = useState(0);
  const [accordionOpen, setAccordionOpen] = useState<number | null>(0);
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [demoFormSubmitted, setDemoFormSubmitted] = useState(false);
  const [demoName, setDemoName] = useState('');
  const [demoEmail, setDemoEmail] = useState('');
  const [demoOrg, setDemoOrg] = useState('');
  const [demoPhone, setDemoPhone] = useState('');
  const [demoPlatform, setDemoPlatform] = useState('CSP');
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);

  // Stats Counters
  const [stats, setStats] = useState({
    experience: 0,
    projects: 0,
    clients: 0,
    presence: 0
  });

  // Pipeline Simulator State
  const [simDocIndex, setSimDocIndex] = useState(0);
  const [simStep, setSimStep] = useState(0); // 0: idle, 1: scanning (laser), 2: mapping (keys), 3: complete (storage sync)
  const [simText, setSimText] = useState('');
  const [isSimulating, setIsSimulating] = useState(false);

  const sampleDocs = [
    {
      title_pt: "Diário da República - Decreto Presidencial",
      title_en: "Official Gazette - Presidential Decree",
      preview_txt: "REPÚBLICA DE ANGOLA\nDIÁRIO DA REPÚBLICA\n\nDECRETO PRESIDENCIAL Nº 144/22\n\nNos termos da alínea l) do artigo 120º da Constituição da República de Angola, o Presidente decreta o Programa Estratégico de Desmaterialização de Arquivos.",
      rawText: "REPÚBLICA DE ANGOLA -- DIÁRIO DA REPÚBLICA -- DECRETO PRESIDENCIAL Nº 144/22: Nos termos da alínea l) do artigo 120º da Constituição da República de Angola, o Presidente decreta o Programa Estratégico de Desmaterialização e Indexação Semântica Inteligente para os órgãos centrais e locais da administração do Estado, com vista ao incremento da celeridade administrativa.",
      metadata: [
        { label_pt: "Tipo Documental", label_en: "Document Type", val: "Decreto Presidencial" },
        { label_pt: "Emitente", label_en: "Issuer", val: "Presidência da República" },
        { label_pt: "Jurisdição", label_en: "Jurisdiction", val: "Angola" },
        { label_pt: "Número", label_en: "Number", val: "Decreto 144/22" }
      ]
    },
    {
      title_pt: "Contrato de Licenciamento de Software (CSP)",
      title_en: "Software Licensing Contract (CSP)",
      preview_txt: "CONTRATO DE LICENÇA DE SOFTWARE\n\nEntre: LEXDATA, LIMITADA, com sede na Rua Henrique de Assis, Luanda, e o Banco de Poupança e Crédito (BPC), S.A.\n\nCláusula 1ª: Fornecimento de Licenças CSP.",
      rawText: "CONTRATO DE LICENÇA E PRESTAÇÃO DE SERVIÇOS TÉCNICOS: Outorgado entre LEXDATA, LIMITADA, com sede em Luanda, Angola, e o Banco de Poupança e Crédito (BPC), S.A., visando a desmaterialização integral de ativos, catalogação inteligente e parametrização do software de gestão documental de elite Content Services Platform (CSP).",
      metadata: [
        { label_pt: "Tipo Documental", label_en: "Document Type", val: "Contrato Comercial" },
        { label_pt: "Licenciante", label_en: "Licensor", val: "LEXDATA, LDA" },
        { label_pt: "Beneficiário", label_en: "Beneficiary", val: "Banco BPC, S.A." },
        { label_pt: "Plataforma", label_en: "Platform", val: "Content Services (CSP)" }
      ]
    },
    {
      title_pt: "Certidão Notarial de Registo de Sociedades",
      title_en: "Notarial Deed of Company Registration",
      preview_txt: "REPÚBLICA DE ANGOLA\nCARTÓRIO NOTARIAL DE LUANDA\n\nCERTIDÃO NOTARIAL\n\nCertifico para fins de direito que por escritura pública outorgada perante mim foi lavrada a constituição da empresa de engenharia documental.",
      rawText: "REPÚBLICA DE ANGOLA -- CARTÓRIO NOTARIAL DA COMARCA DE LUANDA -- CERTIDÃO: Certifico para efeitos de registo e publicação oficial que, por escritura pública outorgada nas folhas 12 a 15 do Livro de Atos Notariais, foi plenamente constituída a sociedade de responsabilidade limitada para a prestação de serviços de arquivo e engenharia de conteúdos.",
      metadata: [
        { label_pt: "Tipo Documental", label_en: "Document Type", val: "Certidão Notarial" },
        { label_pt: "Repartição", label_en: "Registry Office", val: "Cartório de Luanda" },
        { label_pt: "Ato Notarial", label_en: "Notarial Act", val: "Constituição de Sociedade" },
        { label_pt: "Autenticação", label_en: "Selo de Validação", val: "Selo Acto Autenticado" }
      ]
    }
  ];

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (simStep === 1) {
      const fullText = sampleDocs[simDocIndex].rawText;
      setSimText('');
      let index = 0;
      setIsSimulating(true);

      interval = setInterval(() => {
        if (index < fullText.length) {
          setSimText(prev => prev + fullText.substring(index, index + 3));
          index += 3;
        } else {
          clearInterval(interval);
          setSimStep(2);
        }
      }, 30);
    }
    return () => clearInterval(interval);
  }, [simStep, simDocIndex]);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (simStep === 2) {
      timer = setTimeout(() => {
        setSimStep(3);
        setIsSimulating(false);
      }, 3000);
    }
    return () => clearTimeout(timer);
  }, [simStep]);

  const startSimulation = () => {
    setSimText('');
    setSimStep(1);
  };

  const resetSimulation = () => {
    setSimText('');
    setSimStep(0);
    setIsSimulating(false);
  };

  useEffect(() => {
    // Animate stats values nicely
    const duration = 2000;
    const steps = 50;
    const intervalTime = duration / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      setStats({
        experience: Math.min(Math.floor((15 / steps) * step), 15),
        projects: Math.min(Math.floor((250 / steps) * step), 250),
        clients: Math.min(Math.floor((120 / steps) * step), 120),
        presence: Math.min(Math.floor((10 / steps) * step), 10)
      });

      if (step >= steps) {
        clearInterval(timer);
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, []);

  // Main Banner Slideshow Content - Real-world document engineering themes
  const slides = [
    {
      largeBgText_pt: "TECNOLOGIA",
      largeBgText_en: "TECHNOLOGY",
      badge_pt: "TRANSFORMAÇÃO DIGITAL",
      badge_en: "DIGITAL TRANSFORMATION",
      title_pt: "Parcerias Sólidas para Criar Soluções Eficientes e Preparadas para o Futuro.",
      title_en: "We partner with businesses to create scalable, efficient, and future-ready solutions.",
      desc_pt: "Apoiamos organizações no desenvolvimento de infraestruturas de dados seguras, desmaterialização inteligente e indexação jurídica de excelência.",
      desc_en: "Supporting organizations in secure data infrastructures development, smart dematerialization, and leading legal indexing.",
      bg: "bg-slate-900",
      image: "https://visa.onlyvibes.online/wp-content/uploads/2026/07/PRESENTATION-LEXDATA_01-0260621-1.pdf.png", // Slide 1
      overlay_img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop" // Dashboard analytics
    },
    {
      largeBgText_pt: "INOVAÇÃO",
      largeBgText_en: "INNOVATION",
      badge_pt: "ENGENHARIA DOCUMENTAL",
      badge_en: "DOCUMENT ENGINEERING",
      title_pt: "Gestão de Informação de Última Geração para o seu Negócio.",
      title_en: "Next-Generation Information Management for your Business.",
      desc_pt: "Garantimos a máxima segurança, indexação inteligente e acesso imediato aos seus documentos e Diários Oficiais.",
      desc_en: "We guarantee maximum security, smart indexing, and immediate access to your documents and Official Gazettes.",
      bg: "bg-slate-900",
      image: "https://visa.onlyvibes.online/wp-content/uploads/2026/07/PRESENTATION-LEXDATA_01-0260621-1.pdf-1.png", // Slide 2
      overlay_img: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=600&auto=format&fit=crop" // Legal document visualization
    },
    {
      largeBgText_pt: "CONFIANÇA",
      largeBgText_en: "TRUST",
      badge_pt: "SISTEMAS INSTITUCIONAIS",
      badge_en: "INSTITUTIONAL SYSTEMS",
      title_pt: "Engenharia de Conteúdos e Gestão Eletrónica de Documentos de Elite.",
      title_en: "Elite Content Engineering and Enterprise Document Management.",
      desc_pt: "Plataformas integradas para automatizar processos críticos, fluxos normativos e gestão de património informativo histórico.",
      desc_en: "Integrated platforms to automate critical processes, normative workflows, and historical information heritage.",
      bg: "bg-brand-deep",
      image: "https://visa.onlyvibes.online/wp-content/uploads/2026/07/PRESENTATION-LEXDATA_01-0260621-1.pdf-2.png", // Slide 3
      overlay_img: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=600&auto=format&fit=crop" // Data visualization
    }
  ];

  useEffect(() => {
    const slideTimer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(slideTimer);
  }, [slides.length]);

  const handleNextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % slides.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlide(prev => (prev - 1 + slides.length) % slides.length);
  };

  // Services slides (Page 2) - Highly customized towards Document management and law
  const servicesList = [
    {
      num: "01",
      title_pt: "Content Services Platforms (CSP)",
      title_en: "Content Services Platforms (CSP)",
      desc_pt: "Sistemas modulares empresariais avançados de gestão eletrónica de documentos (GED) que organizam, catalogam e protegem a sua propriedade informativa.",
      desc_en: "Advanced modular enterprise document management (EDM) systems that organize, catalog, and secure your informative assets.",
      image: "https://images.unsplash.com/photo-1457369804613-52c61a465e7d?q=80&w=600&auto=format&fit=crop"
    },
    {
      num: "02",
      title_pt: "Desmaterialização e OCR de Alta Fidelidade",
      title_en: "Dematerialization & High-Fidelity OCR",
      desc_pt: "Transformação de arquivos analógicos físicos em ativos digitais com precisão ótica e tratamento semântico de última geração com rigor excecional.",
      desc_en: "Transformation of physical analog archives into digital assets with optical precision and state-of-the-art semantic processing with exceptional rigor.",
      image: "https://images.unsplash.com/photo-1568992687947-868a62a9f521?q=80&w=600&auto=format&fit=crop"
    },
    {
      num: "03",
      title_pt: "Indexação Jurídica Avançada (JURISNET / SIPPO)",
      title_en: "Advanced Legal Indexing (JURISNET / SIPPO)",
      desc_pt: "Estruturação especializada, catalogação jurídica rigorosa, indexação e pesquisa inteligente de diários oficiais, patentes e legislação nacional.",
      desc_en: "Specialized structuring, rigorous legal cataloging, indexing, and intelligent searching of official gazettes, patents, and national legislation.",
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=600&auto=format&fit=crop"
    }
  ];

  const handleNextService = () => {
    setActiveServiceSlide(prev => (prev + 1) % servicesList.length);
  };

  const handlePrevService = () => {
    setActiveServiceSlide(prev => (prev - 1 + servicesList.length) % servicesList.length);
  };

  // Why Choose Us Accordions
  const accordionItems = [
    {
      title_pt: "Equipa Altamente Experiente",
      title_en: "Experienced Team",
      content_pt: "A nossa equipa é composta por engenheiros de dados, arquivistas especializados, analistas jurídicos e programadores seniores com mais de uma década de experiência no setor público e privado de Angola.",
      content_en: "Our team consists of data engineers, specialized archivists, legal analysts, and senior developers with over a decade of experience in both public and private sectors of Angola."
    },
    {
      title_pt: "Abordagem Focada na Qualidade",
      title_en: "Quality-Focused Approach",
      content_pt: "Adotamos rigorosos controlos de qualidade com precisão OCR de até 99.98%, dupla indexação redundante e cibersegurança certificada para tratamento de informação estatal altamente sensível.",
      content_en: "We adopt rigorous quality controls with OCR precision up to 99.98%, redundant double-indexing, and certified cybersecurity for processing highly sensitive state information."
    }
  ];

  // Projects List - Truly realistic localized document engineering projects
  const projects = [
    {
      title_pt: "Portal JURISNET - Tribunal Constitucional",
      title_en: "JURISNET Portal - Constitutional Court",
      category_pt: "INDEXAÇÃO JURÍDICA",
      category_en: "LEGAL INDEXING",
      img: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=600&auto=format&fit=crop"
    },
    {
      title_pt: "Desmaterialização Histórica - Imprensa Nacional",
      title_en: "Historical Dematerialization - National Press",
      category_pt: "ARQUIVO DIGITAL",
      category_en: "DIGITAL ARCHIVE",
      img: regeneratedProjectImg
    },
    {
      title_pt: "Plataforma SIPPO - Propriedade Industrial",
      title_en: "SIPPO Platform - Industrial Property",
      category_pt: "GESTÃO DE CONTEÚDOS",
      category_en: "CONTENT MANAGEMENT",
      img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=600&auto=format&fit=crop"
    },
    {
      title_pt: "Gestão Eletrónica de Documentos de Petróleos",
      title_en: "Electronic Document Management for Oil & Gas",
      category_pt: "EFICIÊNCIA",
      category_en: "EFFICIENCY",
      img: "https://images.unsplash.com/photo-1568992687947-868a62a9f521?q=80&w=600&auto=format&fit=crop"
    },
    {
      title_pt: "Sistemas JURISDATA - Ministérios de Angola",
      title_en: "JURISDATA Systems - Angolan Ministries",
      category_pt: "DESMATERIALIZAÇÃO",
      category_en: "DEMATERIALIZATION",
      img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop"
    },
    {
      title_pt: "Arquivo Central Notarial de Luanda",
      title_en: "Notarial Central Archive of Luanda",
      category_pt: "CUSTÓDIA E DIGITALIZAÇÃO",
      category_en: "CUSTODY & DIGITIZATION",
      img: "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?q=80&w=600&auto=format&fit=crop"
    }
  ];

  // Blog Posts List - Real-world document engineering topics
  const blogs = [
    {
      title_pt: "O Impacto do OCR de Alta Precisão na Pesquisa de Diplomas Jurídicos",
      title_en: "The Impact of High-Precision OCR on Searching Legal Diplomas",
      category_pt: "Tecnologia",
      category_en: "Technology",
      date_pt: "15 de Abril de 2026",
      date_en: "April 15, 2026",
      desc_pt: "Como a precisão de 99.98% na extração de texto evita falhas na busca de decretos presidenciais e artigos de lei fundamentais no JURISNET.",
      desc_en: "How 99.98% accuracy in text extraction avoids failures when searching presidential decrees and key legal articles in the JURISNET platform.",
      img: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=600&auto=format&fit=crop"
    },
    {
      title_pt: "Desmaterialização vs Digitalização Simples: Qual a Diferença Real?",
      title_en: "Dematerialization vs Simple Digitization: What's the Real Difference?",
      category_pt: "Metodologia",
      category_en: "Methodology",
      date_pt: "8 de Abril de 2026",
      date_en: "April 8, 2026",
      desc_pt: "Transformar papéis em PDFs estáticos não é o suficiente. Descubra os benefícios das Content Services Platforms (CSP) com catalogação semântica.",
      desc_en: "Transforming paper into static PDFs is not enough. Discover the benefits of Content Services Platforms (CSP) equipped with semantic cataloging.",
      img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600&auto=format&fit=crop"
    },
    {
      title_pt: "Preservação e Restauro de Arquivos Históricos Oficiais em Angola",
      title_en: "Preservation and Restoring Official Historical Archives in Angola",
      category_pt: "Património",
      category_en: "Heritage",
      date_pt: "10 de Março de 2026",
      date_en: "March 10, 2026",
      desc_pt: "Os desafios técnicos da custódia, higienização e indexação digital de Diários da República e registos centenários com plena validade legal.",
      desc_en: "The technical challenges of custodianship, sanitization, and digital indexing of century-old official gazettes with full legal validity.",
      img: regeneratedBlogImg
    }
  ];

  // Testimonials - Real testimonials from high-profile Angolan partners
  const testimonials = [
    {
      name: "Dr. António Mateus",
      location: "Director de TI, Imprensa Nacional (Luanda, Angola)",
      img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop",
      text_pt: "\"A equipa da LEXDATA entregou o nosso projeto de desmaterialização histórica com extremo rigor. O portal de busca desenvolvido superou todas as expectativas de desempenho e usabilidade.\"",
      text_en: "\"The LEXDATA team delivered our historical dematerialization project with extreme precision. The search portal they developed exceeded all our performance and usability expectations.\""
    },
    {
      name: "Dra. Maria de Fátima",
      location: "Gabinete de Gestão Documental Ministerial (Angola)",
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop",
      text_pt: "\"Ficámos profundamente impressionados com a precisão do motor OCR e com a catalogação semântica das leis angolanas. A LEXDATA provou ser o parceiro mais fiável do setor.\"",
      text_en: "\"We were deeply impressed by the precision of the OCR engine and the semantic cataloging of Angolan legislation. LEXDATA proved to be the most reliable partner in the sector.\""
    }
  ];

  const handleDemoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setDemoFormSubmitted(true);
    setTimeout(() => {
      setDemoFormSubmitted(false);
      setDemoModalOpen(false);
      setDemoName('');
      setDemoEmail('');
      setDemoOrg('');
      setDemoPhone('');
    }, 3000);
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setNewsletterSubmitted(true);
    setTimeout(() => {
      setNewsletterEmail('');
      setNewsletterSubmitted(false);
    }, 4000);
  };

  return (
    <div className="flex flex-col bg-white overflow-hidden">
      
      {/* SECTION 1: HERO SLIDESHOW */}
      <section className="relative h-[650px] md:h-[720px] overflow-hidden text-white">
        <AnimatePresence mode="wait">
          {slides.map((slide, index) => {
            if (index !== currentSlide) return null;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                className="absolute inset-0 w-full h-full"
              >
                {/* Background Image with optimized dark overlay */}
                <div 
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${slide.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-brand-deep/95 via-brand-deep/80 to-slate-900/90 mix-blend-multiply" />
                
                {/* Large Background Text for technological depth */}
                <div className="absolute top-1/4 left-10 md:left-24 text-[12vw] md:text-[10vw] font-black tracking-widest text-white/[0.03] select-none uppercase font-sans leading-none pointer-events-none">
                  {language === 'pt' ? slide.largeBgText_pt : slide.largeBgText_en}
                </div>

                {/* Content Container */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col md:flex-row items-center justify-between relative z-10 text-left pt-24 md:pt-0 gap-8">
                  {/* Left Side: Content */}
                  <div className="max-w-2xl space-y-6">
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-blue/20 border border-brand-blue/30 text-brand-blue text-xs font-bold uppercase tracking-widest"
                    >
                      <Sparkles className="w-3.5 h-3.5 animate-spin-slow" />
                      <span>{language === 'pt' ? slide.badge_pt : slide.badge_en}</span>
                    </motion.div>

                    <motion.h1
                      initial={{ opacity: 0, y: 25 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight"
                    >
                      {language === 'pt' ? slide.title_pt : slide.title_en}
                    </motion.h1>

                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 }}
                      className="text-sm sm:text-base text-gray-300 leading-relaxed font-medium"
                    >
                      {language === 'pt' ? slide.desc_pt : slide.desc_en}
                    </motion.p>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.9 }}
                      className="flex flex-wrap gap-4 pt-4"
                    >
                      <button
                        onClick={() => setActiveTab('about')}
                        className="bg-brand-blue hover:bg-brand-blue/90 text-white font-bold px-6 py-3 rounded-full shadow-lg transition-all flex items-center gap-2 text-xs cursor-pointer"
                      >
                        <span>{language === 'pt' ? "Saber Mais" : "Learn More"}</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => setDemoModalOpen(true)}
                        className="bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold px-6 py-3 rounded-full shadow-lg transition-all flex items-center gap-2 text-xs cursor-pointer"
                      >
                        <span>{language === 'pt' ? "Agendar Demonstração" : "Request Demo"}</span>
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </motion.div>
                  </div>

                  {/* Right Side: Overlapping Cards from Screenshots (INDUST STYLE) */}
                  <div className="hidden lg:flex flex-col relative w-[320px] h-[360px] justify-center items-end">
                    {/* Happy Clients Card */}
                    <motion.div 
                      initial={{ opacity: 0, x: 40 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.8, type: 'spring' }}
                      className="bg-slate-900/90 border border-white/10 p-6 rounded-2xl shadow-2xl relative z-10 w-[280px]"
                    >
                      <h3 className="text-4xl font-extrabold text-brand-blue">120+</h3>
                      <p className="text-sm font-bold text-white mt-1">
                        {language === 'pt' ? "Clientes Satisfeitos" : "Happy Clients"}
                      </p>
                      <p className="text-[11px] text-gray-400 mt-2 leading-relaxed">
                        {language === 'pt' ? "Construindo relações de longo prazo através de confiança e transparência." : "Building long-term relationships through trust, transparency, and results."}
                      </p>
                    </motion.div>

                    {/* Small overlapping image */}
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1, type: 'spring' }}
                      className="absolute bottom-0 right-32 border-4 border-slate-900 rounded-xl overflow-hidden shadow-xl w-[160px] h-[160px]"
                    >
                      <img src={slide.overlay_img} alt="Engineering details" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>

        {/* Slider Controls */}
        <div className="absolute bottom-16 right-4 sm:right-8 lg:right-16 z-20 flex items-center gap-3">
          <button
            onClick={handlePrevSlide}
            className="p-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 text-white backdrop-blur-md transition-all cursor-pointer"
            aria-label="Previous Slide"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={handleNextSlide}
            className="p-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 text-white backdrop-blur-md transition-all cursor-pointer"
            aria-label="Next Slide"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Slider Pagination */}
        <div className="absolute bottom-16 left-4 sm:left-8 lg:left-16 z-20 flex items-center gap-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                idx === currentSlide ? 'w-6 bg-brand-blue' : 'w-1.5 bg-white/30'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </section>

      {/* SECTION 2: ABOUT US (With overlapping collage and Vision/Mission) */}
      <section className="py-24 bg-white text-left relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Left Column: Overlapping Collage of Photos */}
            <motion.div 
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5 relative flex justify-center items-center min-h-[400px]"
            >
              {/* Back Image Frame */}
              <div className="w-[80%] aspect-[4/3] rounded-2xl overflow-hidden border border-gray-100 shadow-lg relative left-[-10%] top-[-5%] z-0">
                <img 
                  src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=600&auto=format&fit=crop" 
                  alt="Legal Document Archives" 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Front Overlapping Image Frame */}
              <div className="w-[80%] aspect-[4/3] rounded-2xl overflow-hidden border-4 border-white shadow-2xl absolute right-0 bottom-0 z-10">
                <img 
                  src={workspaceScanning} 
                  alt="Specialized Scanning Workflow" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Float Experience Badge */}
              <div className="absolute left-[-5%] bottom-[5%] bg-brand-blue text-white p-5 rounded-2xl shadow-lg z-20 text-center min-w-[120px]">
                <h4 className="text-4xl font-extrabold leading-none">20+</h4>
                <p className="text-[10px] font-bold uppercase tracking-wider mt-1.5">
                  {language === 'pt' ? 'Anos de Experiência' : 'Years Experience'}
                </p>
              </div>
            </motion.div>

            {/* Right Column: About Details */}
            <motion.div 
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7 space-y-6"
            >
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-brand-blue transform rotate-45" />
                <span className="text-xs uppercase font-mono font-bold tracking-widest text-brand-blue">
                  {language === 'pt' ? 'SOBRE NÓS' : 'ABOUT US'}
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-deep tracking-tight font-sans leading-tight">
                {language === 'pt' ? "Entregando Soluções Seguras com Foco em Qualidade" : "Delivering Reliable Solutions with a Focus on Quality"}
              </h2>

              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                {language === 'pt' ? (
                  "Somos uma equipa de profissionais dedicados a fornecer soluções eficientes e bem planeadas para instituições e empresas em diversos setores. O nosso foco assenta na transparência, rigor técnico e preservação de dados para assegurar que cada projeto supere as expectativas do cliente."
                ) : (
                  "We are a professional team dedicated to delivering well-planned and efficiently executed solutions for businesses across different industries. Our approach is built on transparency, precision, and long-term value, ensuring every project meets client expectations."
                )}
              </p>

              {/* Vision & Mission Side-by-side */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4 border-t border-gray-100">
                <div className="space-y-2">
                  <h3 className="text-base font-bold text-brand-deep flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-blue" />
                    <span>{language === 'pt' ? "Nossa Visão" : "Our Vision"}</span>
                  </h3>
                  <p className="text-gray-500 text-xs leading-relaxed">
                    {language === 'pt' ? (
                      "Tornar-nos um parceiro de confiança fornecendo soluções integradas de dados que apoiam o crescimento sustentável das instituições."
                    ) : (
                      "To become a trusted partner for businesses by delivering innovative, reliable, and scalable solutions that support long-term growth and success."
                    )}
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="text-base font-bold text-brand-deep flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-blue" />
                    <span>{language === 'pt' ? "Nossa Missão" : "Our Mission"}</span>
                  </h3>
                  <p className="text-gray-500 text-xs leading-relaxed">
                    {language === 'pt' ? (
                      "Fornecer serviços de engenharia documental e arquivo com planeamento claro, comunicação eficaz e segurança máxima."
                    ) : (
                      "To provide high-quality services through structured planning, skilled execution, and clear communication, ensuring consistent results and client satisfaction."
                    )}
                  </p>
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={() => setActiveTab('about')}
                  className="bg-gray-50 hover:bg-gray-100 border border-gray-200 text-brand-deep font-bold text-xs px-6 py-3 rounded-full transition-all inline-flex items-center gap-2 cursor-pointer"
                >
                  <span>{language === 'pt' ? "Saber Mais Sobre Nós" : "Know More About Us"}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-brand-blue" />
                </button>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* SECTION 3: SERVICES SLIDER / SOLUTIONS */}
      <section className="py-24 bg-slate-900 text-white text-left relative overflow-hidden">
        {/* Abstract futuristic design element */}
        <div className="absolute right-0 bottom-0 w-96 h-96 bg-brand-blue/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Context Header */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5 space-y-6"
            >
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-brand-blue transform rotate-45" />
                <span className="text-xs uppercase font-mono font-bold tracking-widest text-brand-blue">
                  {language === 'pt' ? 'NOSSOS SERVIÇOS' : 'OUR SERVICES'}
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-sans leading-tight">
                {language === 'pt' ? "Soluções Concebidas para Apoiar Todo o Negócio" : "Solutions Designed to Support Every Business Need"}
              </h2>

              <p className="text-gray-400 text-sm leading-relaxed">
                {language === 'pt' ? (
                  "Disponibilizamos um portfólio completo de serviços profissionais focados na eficiência, qualidade e valor a longo prazo, adaptando a nossa entrega às necessidades específicas de cada setor."
                ) : (
                  "We offer a wide range of professional services focused on quality, efficiency, and long-term value. Our flexible approach allows us to adapt our solutions to meet the unique requirements of businesses."
                )}
              </p>

              <div className="flex items-center gap-4 pt-4">
                <button
                  onClick={() => setActiveTab('services')}
                  className="bg-brand-blue hover:bg-brand-blue/90 text-white font-bold text-xs px-6 py-3 rounded-full shadow-lg transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span>{language === 'pt' ? "Explorar Nossos Serviços" : "Explore Our Services"}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                
                {/* Navigation Arrows for services */}
                <div className="flex items-center gap-2 pl-4 border-l border-white/10">
                  <button
                    onClick={handlePrevService}
                    className="p-2.5 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 transition-all cursor-pointer"
                    aria-label="Previous Service"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={handleNextService}
                    className="p-2.5 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 transition-all cursor-pointer"
                    aria-label="Next Service"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Sliding Active Cards */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeServiceSlide}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.4 }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                  {/* Primary Highlighted Card */}
                  <div className="bg-white text-slate-900 rounded-2xl overflow-hidden shadow-2xl flex flex-col justify-between p-8 min-h-[380px] hover:scale-[1.02] transition-transform duration-300">
                    <div className="space-y-4">
                      <span className="text-xs font-mono font-bold text-brand-blue bg-brand-blue/10 px-3 py-1 rounded-full uppercase tracking-wider">
                        {servicesList[activeServiceSlide].num} / SERVICE
                      </span>
                      <h3 className="text-xl font-extrabold text-brand-deep">
                        {servicesList[activeServiceSlide].title_pt}
                      </h3>
                      <p className="text-gray-600 text-xs leading-relaxed">
                        {language === 'pt' ? servicesList[activeServiceSlide].desc_pt : servicesList[activeServiceSlide].desc_en}
                      </p>
                    </div>
                    <div className="pt-6 border-t border-gray-100 mt-6 flex justify-between items-center">
                      <button 
                        onClick={() => setActiveTab('services')}
                        className="text-xs font-bold text-brand-deep hover:text-brand-blue transition-colors flex items-center gap-1 cursor-pointer"
                      >
                        <span>{language === 'pt' ? "Saber Mais" : "More details"}</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  {/* Next Service Preview Card */}
                  <div className="bg-slate-800/50 border border-white/5 rounded-2xl overflow-hidden p-8 flex flex-col justify-between min-h-[380px] relative opacity-70 hover:opacity-100 transition-opacity">
                    <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10 mix-blend-overlay" style={{ backgroundImage: `url(${servicesList[(activeServiceSlide + 1) % servicesList.length].image})` }} />
                    <div className="space-y-4 relative z-10">
                      <span className="text-xs font-mono font-bold text-gray-400">
                        {servicesList[(activeServiceSlide + 1) % servicesList.length].num} / NEXT SERVICE
                      </span>
                      <h3 className="text-lg font-extrabold text-white">
                        {servicesList[(activeServiceSlide + 1) % servicesList.length].title_pt}
                      </h3>
                      <p className="text-gray-400 text-xs leading-relaxed line-clamp-4">
                        {language === 'pt' ? servicesList[(activeServiceSlide + 1) % servicesList.length].desc_pt : servicesList[(activeServiceSlide + 1) % servicesList.length].desc_en}
                      </p>
                    </div>
                    <div className="pt-6 border-t border-white/5 mt-6 relative z-10">
                      <button 
                        onClick={() => setActiveServiceSlide((activeServiceSlide + 1) % servicesList.length)}
                        className="text-xs font-bold text-brand-blue hover:text-white transition-colors flex items-center gap-1 cursor-pointer"
                      >
                        <span>{language === 'pt' ? "Ver Próximo" : "View Next"}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.div>

          </div>
        </div>
      </section>

      {/* SECTION 3.5: SIMULADOR DE FLUXO TECNOLÓGICO & OCR EM TEMPO REAL - Quero mais animações d tecnologia */}
      <section className="py-24 bg-slate-950 text-white relative overflow-hidden border-t border-b border-white/5">
        {/* Futuristic glowing node matrix background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#020617_1px,transparent_1px),linear-gradient(to_bottom,#020617_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-blue/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-brand-blue text-xs font-mono font-bold uppercase tracking-wider">
              <Cpu className="w-3.5 h-3.5 animate-pulse" />
              <span>{language === 'pt' ? "SANDBOX DE TECNOLOGIA ATIVA" : "ACTIVE TECHNOLOGY SANDBOX"}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-sans text-white">
              {language === 'pt' ? "Simulador de Processamento de Conteúdo e OCR" : "Live Content Processing & OCR Simulator"}
            </h2>
            <p className="text-gray-400 text-xs sm:text-sm">
              {language === 'pt' ? (
                "Experimente a inteligência por trás dos nossos sistemas. Escolha um documento de exemplo e veja como extraímos texto de imagens e catalogamos metadados automaticamente."
              ) : (
                "Experience the intelligence behind our solutions. Select a sample document and watch how we automatically extract high-fidelity text and map critical legal metadata."
              )}
            </p>
          </div>

          {/* Interactive Document Selector Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
            {sampleDocs.map((doc, idx) => (
              <button
                key={idx}
                disabled={isSimulating}
                onClick={() => {
                  setSimDocIndex(idx);
                  setSimStep(0);
                  setSimText('');
                }}
                className={`px-5 py-3 rounded-full text-xs font-bold transition-all flex items-center gap-2 cursor-pointer border ${
                  simDocIndex === idx
                    ? 'bg-brand-blue border-brand-blue text-white shadow-lg shadow-brand-blue/25'
                    : 'bg-slate-900 border-white/5 hover:border-white/10 text-gray-400 hover:text-white'
                } ${isSimulating ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                <FileText className="w-3.5 h-3.5" />
                <span>{language === 'pt' ? doc.title_pt : doc.title_en}</span>
              </button>
            ))}
          </div>

          {/* Simulator Workspace Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Column 1: Source Document Preview (Left) */}
            <div className="lg:col-span-5 bg-slate-900/40 border border-white/5 rounded-3xl p-6 flex flex-col justify-between relative overflow-hidden backdrop-blur-md">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/[0.01] rounded-full pointer-events-none" />
              
              <div className="space-y-4 flex-1 flex flex-col">
                <div className="flex items-center justify-between border-b border-white/5 pb-4">
                  <span className="text-[10px] font-mono text-gray-500 font-bold uppercase tracking-widest flex items-center gap-2">
                    <span className={`w-2 h-2 rounded-full ${simStep > 0 ? 'bg-emerald-500 animate-pulse' : 'bg-yellow-500 animate-pulse'}`} />
                    {language === 'pt' ? "FICHEIRO DE ORIGEM" : "SOURCE SCAN FILE"}
                  </span>
                  <span className="text-[10px] font-mono text-gray-400 bg-white/5 px-2.5 py-1 rounded-md">
                    JPEG / 300 DPI
                  </span>
                </div>

                {/* Scanned Document Image Representation */}
                <div className="flex-1 min-h-[280px] bg-white text-slate-800 rounded-2xl p-6 relative overflow-hidden border border-white/5 shadow-inner flex flex-col justify-between font-serif text-[10px] leading-relaxed select-none">
                  
                  {/* Watermark background */}
                  <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1.5px,transparent_1.5px)] bg-[size:16px_16px] opacity-40 pointer-events-none" />

                  {/* Scanned paper visual details */}
                  <div className="relative z-10 space-y-4">
                    <div className="flex items-center justify-between border-b border-gray-200 pb-2">
                      <div className="w-12 h-4 bg-gray-300 rounded" />
                      <div className="w-16 h-3 bg-gray-200 rounded" />
                    </div>
                    <div className="whitespace-pre-wrap font-mono text-[9px] text-gray-600 leading-normal">
                      {sampleDocs[simDocIndex].preview_txt}
                    </div>
                    <div className="space-y-2 pt-4">
                      <div className="h-2.5 bg-gray-200 rounded w-full" />
                      <div className="h-2.5 bg-gray-200 rounded w-[90%]" />
                      <div className="h-2.5 bg-gray-200 rounded w-[95%]" />
                      <div className="h-2.5 bg-gray-200 rounded w-[75%]" />
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-[8px] font-sans text-gray-400 font-semibold uppercase">
                    <span>LEXDATA ENGINE V3.5</span>
                    <span>CONFIDENTIAL</span>
                  </div>

                  {/* LASER SCANNING BAR ANIMATION */}
                  {simStep === 1 && (
                    <motion.div 
                      animate={{ 
                        top: ['0%', '100%', '0%']
                      }}
                      transition={{ 
                        duration: 3, 
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent shadow-[0_0_15px_#10b981] z-20"
                    />
                  )}
                  {simStep === 1 && (
                    <div className="absolute inset-0 bg-emerald-500/5 pointer-events-none z-10" />
                  )}

                  {/* Mask blurred overlay when idle */}
                  {simStep === 0 && (
                    <div className="absolute inset-0 bg-slate-900/20 backdrop-blur-[1px] flex items-center justify-center z-20">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={startSimulation}
                        className="bg-brand-blue hover:bg-brand-blue/90 text-white font-extrabold text-xs px-6 py-3.5 rounded-full shadow-lg transition-all flex items-center gap-2 cursor-pointer border border-brand-blue/35"
                      >
                        <Play className="w-4 h-4 fill-current" />
                        <span>{language === 'pt' ? "Iniciar Digitalização OCR" : "Start OCR Extraction"}</span>
                      </motion.button>
                    </div>
                  )}
                </div>
              </div>

              {simStep > 0 && (
                <div className="mt-4 flex items-center justify-between gap-3 bg-white/5 border border-white/5 px-4 py-3 rounded-xl">
                  <span className="text-[10px] font-mono text-gray-400">
                    {simStep === 1 ? (
                      <span className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-ping" />
                        {language === 'pt' ? "Digitalizando conteúdo..." : "Extracting content..."}
                      </span>
                    ) : (
                      <span className="flex items-center gap-1.5 text-emerald-400">
                        <Check className="w-3.5 h-3.5" />
                        {language === 'pt' ? "Digitalização Concluída!" : "Extraction Completed!"}
                      </span>
                    )}
                  </span>
                  <button
                    disabled={isSimulating}
                    onClick={resetSimulation}
                    className="text-[10px] font-mono font-bold text-gray-500 hover:text-white transition-colors cursor-pointer"
                  >
                    {language === 'pt' ? "REINICIAR" : "RESET"}
                  </button>
                </div>
              )}
            </div>

            {/* Column 2: Digital Terminal and Key Mapping (Right) */}
            <div className="lg:col-span-7 bg-slate-900/60 border border-white/5 rounded-3xl p-6 flex flex-col justify-between relative overflow-hidden backdrop-blur-md">
              <div className="space-y-6 flex-1 flex flex-col justify-between">
                
                {/* Header */}
                <div className="flex items-center justify-between border-b border-white/5 pb-4">
                  <span className="text-[10px] font-mono text-gray-400 font-bold uppercase tracking-widest flex items-center gap-2">
                    <Database className="w-4 h-4 text-brand-blue" />
                    {language === 'pt' ? "MOTOR DE PROCESSAMENTO SEMÂNTICO" : "SEMANTIC PROCESSING ENGINE"}
                  </span>
                  <span className="text-[9px] font-mono text-gray-500">
                    STATUS: {simStep === 1 ? 'PROCESSING' : simStep === 2 ? 'CLASSIFYING' : simStep === 3 ? 'SUCCESS' : 'STANDBY'}
                  </span>
                </div>

                {/* Live Console Terminal log */}
                <div className="flex-1 min-h-[160px] bg-slate-950/80 rounded-2xl p-5 border border-white/5 font-mono text-[11px] text-cyan-400 leading-relaxed overflow-y-auto space-y-3 shadow-inner">
                  {simStep === 0 ? (
                    <div className="text-gray-600 italic select-none">
                      {language === 'pt' ? "> [SISTEMA] Aguardando inicialização de fluxo..." : "> [SYSTEM] Waiting for pipeline initialization..."}
                    </div>
                  ) : (
                    <>
                      <div className="text-gray-500">
                        &gt; [SYSTEM] Initializing high-speed OCR pipeline...
                      </div>
                      <div className="text-gray-500">
                        &gt; [OCR] Running layout segmentation analysis on document matrix...
                      </div>
                      <div className="text-emerald-400 font-semibold whitespace-pre-wrap break-all border-l-2 border-emerald-500/30 pl-3 py-1">
                        &gt; {simText}
                        {simStep === 1 && <span className="animate-pulse">|</span>}
                      </div>

                      {simStep >= 2 && (
                        <motion.div 
                          initial={{ opacity: 0, y: 5 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-yellow-400"
                        >
                          &gt; [NLP] Lexical segmentation matches found. Extracting core semantic entities...
                        </motion.div>
                      )}

                      {simStep === 3 && (
                        <motion.div 
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="text-emerald-400 font-bold flex items-center gap-1.5"
                        >
                          <CheckCircle className="w-4 h-4 text-emerald-500" />
                          <span>&gt; [SUCCESS] Document indexed & synchronized safely in decentralized secure storage. SHA-256 validation OK.</span>
                        </motion.div>
                      )}
                    </>
                  )}
                </div>

                {/* Semantic Entity Mappings Panel */}
                <div className="space-y-3">
                  <h4 className="text-xs font-mono font-bold text-gray-400 uppercase tracking-wider flex items-center gap-2">
                    <Network className="w-3.5 h-3.5 text-cyan-400" />
                    {language === 'pt' ? "METADADOS DETECTADOS" : "IDENTIFIED METADATA"}
                  </h4>

                  <div className="grid grid-cols-2 gap-3">
                    {sampleDocs[simDocIndex].metadata.map((meta, mIdx) => (
                      <div 
                        key={mIdx}
                        className={`p-3 border rounded-xl flex items-center justify-between transition-all duration-500 ${
                          simStep >= 2
                            ? 'bg-slate-900/90 border-cyan-500/20 shadow-md shadow-cyan-500/[0.02]'
                            : 'bg-slate-950/20 border-white/5 opacity-40'
                        }`}
                      >
                        <div className="space-y-1">
                          <p className="text-[9px] font-mono text-gray-500 uppercase">
                            {language === 'pt' ? meta.label_pt : meta.label_en}
                          </p>
                          <p className="text-xs font-bold text-white tracking-wide">
                            {simStep >= 2 ? meta.val : "---"}
                          </p>
                        </div>
                        {simStep >= 2 ? (
                          simStep === 2 ? (
                            <div className="w-3.5 h-3.5 rounded-full border border-cyan-500 border-t-transparent animate-spin" />
                          ) : (
                            <Check className="w-3.5 h-3.5 text-emerald-500 font-bold" />
                          )
                        ) : null}
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 4: WHY CHOOSE US (Accordion and Stats row) */}
      <section className="py-24 bg-white text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Left Column: Image of Engineers/Team */}
            <motion.div 
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5 rounded-2xl overflow-hidden shadow-2xl border border-gray-100 h-[460px]"
            >
              <img 
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=600&auto=format&fit=crop" 
                alt="Technology team working on databases" 
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Right Column: Accordion */}
            <motion.div 
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7 space-y-6"
            >
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-brand-blue transform rotate-45" />
                <span className="text-xs uppercase font-mono font-bold tracking-widest text-brand-blue">
                  {language === 'pt' ? 'PORQUÊ NÓS' : 'WHY CHOOSE US'}
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-deep tracking-tight font-sans">
                {language === 'pt' ? "O Que Nos Torna o Parceiro de Confiança" : "What Makes Us a Trusted Partner"}
              </h2>

              <p className="text-gray-500 text-xs sm:text-sm">
                {language === 'pt' ? (
                  "Estamos comprometidos com a entrega de soluções eficientes, bem planeadas e seguras. O nosso foco permanente na confidencialidade e qualidade do tratamento de acervos estabelece a nossa reputação de excelência."
                ) : (
                  "We are committed to delivering reliable, well-planned, and high-quality solutions that help businesses achieve their goals. Our focus on transparency, efficiency, and client satisfaction sets us apart."
                )}
              </p>

              {/* Accordion Component */}
              <div className="space-y-4 pt-4">
                {accordionItems.map((item, idx) => {
                  const isOpen = accordionOpen === idx;
                  return (
                    <div 
                      key={idx} 
                      className="border border-gray-200 rounded-xl overflow-hidden shadow-sm transition-all duration-300"
                    >
                      <button
                        onClick={() => setAccordionOpen(isOpen ? null : idx)}
                        className="w-full flex justify-between items-center p-5 font-bold text-brand-deep text-sm md:text-base hover:bg-gray-50/50 transition-colors text-left"
                      >
                        <span>{language === 'pt' ? item.title_pt : item.title_en}</span>
                        <div className="p-1 rounded-full bg-gray-100 text-brand-deep group-hover:bg-brand-blue group-hover:text-white transition-colors">
                          {isOpen ? <Minus className="w-4 h-4 text-brand-blue" /> : <Plus className="w-4 h-4" />}
                        </div>
                      </button>
                      
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="border-t border-gray-100"
                          >
                            <div className="p-5 text-xs sm:text-sm text-gray-500 leading-relaxed bg-gray-50/30">
                              {language === 'pt' ? item.content_pt : item.content_en}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>

              <div className="pt-2">
                <button
                  onClick={() => setActiveTab('contact')}
                  className="bg-brand-blue hover:bg-brand-blue/90 text-white font-bold text-xs px-6 py-3 rounded-full shadow-md transition-all inline-flex items-center gap-2 cursor-pointer"
                >
                  <span>{language === 'pt' ? "Mais Detalhes" : "More Details"}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>

          </div>

          {/* Dynamic Counters Row (Page 2 bottom) */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 pt-16 mt-16 border-t border-gray-100">
            <div className="space-y-1.5 text-center lg:text-left">
              <h3 className="text-4xl sm:text-5xl font-extrabold text-brand-blue leading-none">
                +{stats.experience}
              </h3>
              <p className="text-xs font-bold text-brand-deep uppercase tracking-wider font-sans">
                {language === 'pt' ? "Anos de Experiência" : "Years of Experience"}
              </p>
              <p className="text-[11px] text-gray-400 leading-relaxed">
                {language === 'pt' ? "Soluções consistentes e sólidas no mercado." : "Delivering consistent and reliable solutions across diverse business needs."}
              </p>
            </div>

            <div className="space-y-1.5 text-center lg:text-left">
              <h3 className="text-4xl sm:text-5xl font-extrabold text-brand-blue leading-none">
                +{stats.projects}
              </h3>
              <p className="text-xs font-bold text-brand-deep uppercase tracking-wider font-sans">
                {language === 'pt' ? "Projetos Concluídos" : "Projects Completed"}
              </p>
              <p className="text-[11px] text-gray-400 leading-relaxed">
                {language === 'pt' ? "Executados com planeamento rigoroso e eficiência." : "Successfully planned and executed projects with a focus on quality."}
              </p>
            </div>

            <div className="space-y-1.5 text-center lg:text-left">
              <h3 className="text-4xl sm:text-5xl font-extrabold text-brand-blue leading-none">
                +{stats.clients}
              </h3>
              <p className="text-xs font-bold text-brand-deep uppercase tracking-wider font-sans">
                {language === 'pt' ? "Clientes Satisfeitos" : "Happy Clients"}
              </p>
              <p className="text-[11px] text-gray-400 leading-relaxed">
                {language === 'pt' ? "Relações sustentadas na transparência e rigor." : "Building long-term relationships through trust and transparency."}
              </p>
            </div>

            <div className="space-y-1.5 text-center lg:text-left">
              <h3 className="text-4xl sm:text-5xl font-extrabold text-brand-blue leading-none">
                +{stats.presence}
              </h3>
              <p className="text-xs font-bold text-brand-deep uppercase tracking-wider font-sans">
                {language === 'pt' ? "Presença de Setor" : "Industry Presence"}
              </p>
              <p className="text-[11px] text-gray-400 leading-relaxed">
                {language === 'pt' ? "Apoiando empresas de múltiplos setores de relevo." : "Supporting businesses across multiple sectors with adaptable solutions."}
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 5: PROJECT PORTFOLIO SHOWCASE */}
      <section className="py-24 bg-gray-50 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4"
          >
            <div className="space-y-4 max-w-2xl">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-brand-blue transform rotate-45" />
                <span className="text-xs uppercase font-mono font-bold tracking-widest text-brand-blue">
                  {language === 'pt' ? 'PROJETOS' : 'OUR PROJECTS'}
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-deep tracking-tight font-sans">
                {language === 'pt' ? "Apresentação do Nosso Trabalho e Experiência" : "Showcasing Our Work and Experience"}
              </h2>
              <p className="text-gray-500 text-xs sm:text-sm">
                {language === 'pt' ? (
                  "Explore uma seleção de projetos concluídos que refletem o nosso compromisso inabalável com o planeamento, rigor e soluções de excelência."
                ) : (
                  "Explore a selection of our completed and ongoing projects that reflect our commitment to quality, planning, and successful execution across diverse business needs."
                )}
              </p>
            </div>
            
            <div>
              <button
                onClick={() => { setActiveTab('projects'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="bg-white hover:bg-gray-100 border border-gray-200 text-brand-deep font-bold text-xs px-6 py-3 rounded-full shadow-sm flex items-center gap-2 transition-all cursor-pointer"
              >
                <span>{language === 'pt' ? "Ver Todos os Projetos" : "View All Projects"}</span>
                <ArrowRight className="w-3.5 h-3.5 text-brand-blue" />
              </button>
            </div>
          </motion.div>

          {/* Grid of 6 Projects exactly matching the templates */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((proj, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 group relative flex flex-col justify-between"
              >
                {/* Image Wrap */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img 
                    src={proj.img} 
                    alt={proj.title_en} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Subtle overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-90" />
                  
                  {/* Card Category Tag and Title inside */}
                  <div className="absolute bottom-6 left-6 right-6 text-white space-y-1.5 text-left">
                    <span className="text-[10px] font-mono font-bold tracking-widest text-brand-blue uppercase bg-brand-deep/30 backdrop-blur-md px-2.5 py-1 rounded-md">
                      {language === 'pt' ? proj.category_pt : proj.category_en}
                    </span>
                    <h3 className="text-lg font-bold font-sans drop-shadow-md">
                      {language === 'pt' ? proj.title_pt : proj.title_en}
                    </h3>
                  </div>

                  {/* White arrow circle button (Page 3 Style) */}
                  <button 
                    onClick={() => { setActiveTab('projects'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                    className="absolute bottom-6 right-6 w-11 h-11 rounded-full bg-white text-brand-deep flex items-center justify-center shadow-md opacity-90 group-hover:bg-brand-blue group-hover:text-white group-hover:opacity-100 transition-all cursor-pointer"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={() => { setActiveTab('projects'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="bg-brand-blue hover:bg-brand-blue/90 text-white font-bold text-xs px-8 py-3.5 rounded-full shadow-lg transition-all inline-flex items-center gap-2 cursor-pointer"
            >
              <span>{language === 'pt' ? "Ver Nossos Projetos" : "View Our Projects"}</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>

      {/* SECTION 6: THE PROCESS (Scaffold image background with overlay steps) */}
      <section className="py-24 relative bg-slate-950 text-white text-left overflow-hidden">
        {/* Parallax background image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20 mix-blend-overlay"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/80 to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column Description */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5 space-y-6"
            >
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-brand-blue transform rotate-45" />
                <span className="text-xs uppercase font-mono font-bold tracking-widest text-brand-blue">
                  {language === 'pt' ? 'NOSSO PROCESSO' : 'OUR PROCESS'}
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-sans leading-tight">
                {language === 'pt' ? "Forma de Trabalho Simples e Estruturada" : "A Simple and Structured Way of Working"}
              </h2>

              <p className="text-gray-400 text-sm leading-relaxed">
                {language === 'pt' ? (
                  "O nosso processo é desenhado para garantir clareza, eficiência e excelência técnica em cada etapa de implementação. Seguimos uma abordagem rigorosamente estruturada para atingir os resultados acordados."
                ) : (
                  "Our process is designed to ensure clarity, efficiency, and quality at every stage. We follow a structured approach to deliver reliable solutions that meet business goals and expectations."
                )}
              </p>
            </motion.div>

            {/* Right Column Process List (Page 4 Style) */}
            <div className="lg:col-span-7 space-y-6">
              {/* Step 1 */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="flex gap-5 items-start bg-white/5 border border-white/5 p-6 rounded-2xl hover:border-brand-blue/30 hover:bg-white/10 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center text-brand-blue font-mono font-bold text-lg flex-shrink-0">
                  01
                </div>
                <div className="space-y-1">
                  <h4 className="font-bold text-white text-base">
                    {language === 'pt' ? "Consulta e Planeamento" : "Consultation & Planning"}
                  </h4>
                  <p className="text-gray-400 text-xs leading-relaxed">
                    {language === 'pt' ? (
                      "Começamos por diagnosticar e compreender os seus requisitos específicos, volume de arquivo e objetivos para formular um plan o de transição claro e estruturado."
                    ) : (
                      "We begin by understanding your requirements, objectives, and challenges to create a clear and effective plan."
                    )}
                  </p>
                </div>
              </motion.div>

              {/* Step 2 */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex gap-5 items-start bg-white/5 border border-white/5 p-6 rounded-2xl hover:border-brand-blue/30 hover:bg-white/10 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center text-brand-blue font-mono font-bold text-lg flex-shrink-0">
                  02
                </div>
                <div className="space-y-1">
                  <h4 className="font-bold text-white text-base">
                    {language === 'pt' ? "Execução e Implementação" : "Execution & Implementation"}
                  </h4>
                  <p className="text-gray-400 text-xs leading-relaxed">
                    {language === 'pt' ? (
                      "A nossa equipa implementa as plataformas técnicas ou realiza a digitalização física com máxima segurança de dados, rigor técnico e controlo de qualidade."
                    ) : (
                      "Our team executes the plan with precision, maintaining quality standards and clear communication throughout the process."
                    )}
                  </p>
                </div>
              </motion.div>

              {/* Step 3 */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex gap-5 items-start bg-white/5 border border-white/5 p-6 rounded-2xl hover:border-brand-blue/30 hover:bg-white/10 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center text-brand-blue font-mono font-bold text-lg flex-shrink-0">
                  03
                </div>
                <div className="space-y-1">
                  <h4 className="font-bold text-white text-base">
                    {language === 'pt' ? "Entrega e Apoio Continuado" : "Delivery & Support"}
                  </h4>
                  <p className="text-gray-400 text-xs leading-relaxed">
                    {language === 'pt' ? (
                      "Entregamos as soluções validadas e oferecemos apoio técnico dedicado contínuo para garantir um desempenho ideal e satisfação organizacional."
                    ) : (
                      "We ensure smooth project delivery and provide ongoing support to maintain long-term performance and satisfaction."
                    )}
                  </p>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 7: THE BLOG / NEWS SECTION */}
      <section className="py-24 bg-white text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto mb-16 text-center space-y-4"
          >
            <div className="flex items-center justify-center gap-2">
              <span className="w-2.5 h-2.5 bg-brand-blue transform rotate-45" />
              <span className="text-xs uppercase font-mono font-bold tracking-widest text-brand-blue">
                {language === 'pt' ? 'NOSSO BLOG' : 'OUR BLOG'}
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-deep tracking-tight font-sans">
              {language === 'pt' ? "Atualizações e Conhecimento do Setor" : "Insights, Updates & Industry Knowledge"}
            </h2>
            <p className="text-gray-500 text-xs sm:text-sm">
              {language === 'pt' ? (
                "Explore os nossos artigos técnicos, recomendações e novidades de gestão documental e arquivo inteligente em Angola."
              ) : (
                "Explore articles, insights, and updates focused on business growth, best practices, and practical solutions across different industries."
              )}
            </p>
          </motion.div>

          {/* Grid of 3 Blogs */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-gray-50 border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img src={blog.img} alt={blog.title_en} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-6 space-y-3">
                    <div className="flex items-center gap-3 text-[10px] font-mono text-gray-400 font-semibold">
                      <span className="text-brand-blue uppercase">{language === 'pt' ? blog.category_pt : blog.category_en}</span>
                      <span>•</span>
                      <span>{language === 'pt' ? blog.date_pt : blog.date_en}</span>
                    </div>
                    <h3 className="font-extrabold text-gray-900 text-base font-sans line-clamp-2">
                      {language === 'pt' ? blog.title_pt : blog.title_en}
                    </h3>
                    <p className="text-gray-500 text-xs leading-relaxed line-clamp-3">
                      {language === 'pt' ? blog.desc_pt : blog.desc_en}
                    </p>
                  </div>
                </div>
                <div className="p-6 pt-0 border-t border-gray-100 mt-4 flex items-center bg-gray-50/50">
                  <button
                    onClick={() => { setActiveTab('news'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                    className="text-xs font-bold text-brand-blue hover:text-brand-deep transition-colors flex items-center gap-1 cursor-pointer"
                  >
                    <span>{language === 'pt' ? "Ler Artigo" : "Read more"}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={() => { setActiveTab('news'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="bg-brand-blue hover:bg-brand-blue/90 text-white font-bold text-xs px-8 py-3.5 rounded-full shadow-lg transition-all cursor-pointer"
            >
              <span>{language === 'pt' ? "Ver Nosso Blog" : "View Our Blog"}</span>
            </button>
          </div>

        </div>
      </section>

      {/* SECTION 8: LARGE DYNAMIC GALLERY (Page 5 Style) */}
      <section className="py-24 bg-gray-50 text-center relative overflow-hidden">
        {/* Gigantic Backdrop Text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[14vw] font-black text-slate-200/40 tracking-widest select-none uppercase pointer-events-none">
          {language === 'pt' ? 'GALERIA' : 'GALLERY'}
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="max-w-2xl mx-auto mb-16 text-center space-y-4">
            <div className="flex items-center justify-center gap-2">
              <span className="w-2.5 h-2.5 bg-brand-blue transform rotate-45" />
              <span className="text-xs uppercase font-mono font-bold tracking-widest text-brand-blue">
                {language === 'pt' ? 'AMBIENTE CORPORATIVO' : 'MEDIA SPACE'}
              </span>
            </div>
            <h2 className="text-3xl font-extrabold text-brand-deep tracking-tight font-sans">
              {language === 'pt' ? "Galeria do Nosso Ambiente" : "Our Professional Workspaces"}
            </h2>
          </div>

          {/* Overlapping grid collage from screenshot page 5 */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <div className="rounded-2xl overflow-hidden aspect-square shadow-md hover:scale-105 hover:shadow-xl transition-all duration-300">
                <img src={workspaceImg1} referrerPolicy="no-referrer" alt="Workspace 1" className="w-full h-full object-cover" />
              </div>
              <div className="rounded-2xl overflow-hidden aspect-[3/4] shadow-md hover:scale-105 hover:shadow-xl transition-all duration-300">
                <img src={workspaceImg2} referrerPolicy="no-referrer" alt="Workspace 2" className="w-full h-full object-cover" />
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-4 pt-6 md:pt-12"
            >
              <div className="rounded-2xl overflow-hidden aspect-[3/4] shadow-md hover:scale-105 hover:shadow-xl transition-all duration-300">
                <img src={workspaceImg3} referrerPolicy="no-referrer" alt="Workspace 3" className="w-full h-full object-cover" />
              </div>
              <div className="rounded-2xl overflow-hidden aspect-square shadow-md hover:scale-105 hover:shadow-xl transition-all duration-300">
                <img src={workspaceImg4} referrerPolicy="no-referrer" alt="Workspace 4" className="w-full h-full object-cover" />
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4"
            >
              <div className="rounded-2xl overflow-hidden aspect-square shadow-md hover:scale-105 hover:shadow-xl transition-all duration-300">
                <img src={workspaceImg5} referrerPolicy="no-referrer" alt="Workspace 5" className="w-full h-full object-cover" />
              </div>
              <div className="rounded-2xl overflow-hidden aspect-[3/4] shadow-md hover:scale-105 hover:shadow-xl transition-all duration-300">
                <img src={workspaceImg6} referrerPolicy="no-referrer" alt="Workspace 6" className="w-full h-full object-cover" />
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-4 pt-6 md:pt-12"
            >
              <div className="rounded-2xl overflow-hidden aspect-[3/4] shadow-md hover:scale-105 hover:shadow-xl transition-all duration-300">
                <img src={workspaceImg7} referrerPolicy="no-referrer" alt="Workspace 7" className="w-full h-full object-cover" />
              </div>
              <div className="rounded-2xl overflow-hidden aspect-square shadow-md hover:scale-105 hover:shadow-xl transition-all duration-300">
                <img src={workspaceImg8} referrerPolicy="no-referrer" alt="Workspace 8" className="w-full h-full object-cover" />
              </div>
            </motion.div>
          </div>

        </div>
      </section>

      {/* SECTION 9: TESTIMONIALS (Page 5 Style) */}
      <section className="py-24 bg-white text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Left Column rating */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5 space-y-6"
            >
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-brand-blue transform rotate-45" />
                <span className="text-xs uppercase font-mono font-bold tracking-widest text-brand-blue">
                  {language === 'pt' ? 'TESTEMUNHOS' : 'TESTIMONIALS'}
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-deep tracking-tight font-sans leading-tight">
                {language === 'pt' ? "O Que os Nossos Clientes Dizem Sobre Nós" : "What Our Clients Say About Us"}
              </h2>

              <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                {language === 'pt' ? (
                  "Valorizamos profundamente a confiança depositada na nossa equipa. Partilhamos os comentários daqueles que trabalham connosco de forma continuada."
                ) : (
                  "We value the trust our clients place in us. Here's what they have to say about their experience working with our team and the quality of our solutions."
                )}
              </p>

              {/* Rating block (Page 5 style) */}
              <div className="p-6 bg-gray-50 rounded-2xl border border-gray-150 inline-flex flex-col items-start gap-1">
                <h4 className="text-4xl font-extrabold text-brand-deep leading-none">4.0</h4>
                <div className="flex items-center gap-1 text-yellow-500 mt-2">
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5" />
                </div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mt-2">
                  OVERALL RATING
                </p>
              </div>
            </motion.div>

            {/* Right Column Stack of Testimonials */}
            <div className="lg:col-span-7 space-y-6">
              {testimonials.map((test, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="bg-gray-50 border border-gray-200 p-8 rounded-2xl shadow-sm text-left relative hover:shadow-md transition-all duration-300"
                >
                  <span className="absolute top-6 right-8 text-6xl text-brand-blue/15 font-serif leading-none select-none">“</span>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed relative z-10 italic">
                    {language === 'pt' ? test.text_pt : test.text_en}
                  </p>
                  <div className="mt-6 flex items-center gap-4">
                    <img 
                      src={test.img} 
                      alt={test.name}
                      referrerPolicy="no-referrer"
                      className="w-12 h-12 rounded-full object-cover border-2 border-brand-blue/20 shadow-sm flex-shrink-0"
                    />
                    <div>
                      <h4 className="font-bold text-brand-deep text-sm leading-none">{test.name}</h4>
                      <p className="text-gray-400 text-[10px] mt-1">{test.location}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 10: GET STARTED BANNER (Page 6 Teal background Style) */}
      <motion.section 
        initial={{ opacity: 0, scale: 0.95, y: 40 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
        className="py-16 bg-brand-blue text-white text-left relative overflow-hidden mx-4 sm:mx-8 lg:mx-16 rounded-3xl shadow-xl my-16"
      >
        {/* Dotted pattern elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full pointer-events-none" />
        <div className="absolute bottom-[-20px] left-10 w-24 h-24 bg-white/5 rounded-full pointer-events-none" />

        <div className="max-w-6xl mx-auto px-8 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-4">
              <span className="text-[10px] font-mono font-bold tracking-widest text-brand-deep bg-white/25 px-3 py-1 rounded-full uppercase">
                {language === 'pt' ? "COMEÇAR AGORA" : "GET STARTED"}
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-sans">
                {language === 'pt' ? "Vamos Construir Algo Grande Juntos" : "Let's Build Something Great Together"}
              </h2>
              <p className="text-white/80 text-xs sm:text-sm leading-relaxed max-w-xl">
                {language === 'pt' ? (
                  "Partilhe connosco os seus requisitos de arquivo ou as especificações das suas plataformas de gestão e descubra como podemos elevar o seu ecossistema documental com segurança."
                ) : (
                  "Share your requirements with us and discover how our solutions can help your business grow with confidence, efficiency, and long-term value."
                )}
              </p>
              
              <div className="flex flex-wrap gap-4 pt-4">
                <button
                  onClick={() => setActiveTab('contact')}
                  className="bg-white hover:bg-gray-100 text-brand-blue font-bold text-xs px-6 py-3 rounded-full shadow-lg transition-all flex items-center gap-1.5 cursor-pointer"
                >
                  <span>{language === 'pt' ? "Contactar" : "Contact Us"}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => setDemoModalOpen(true)}
                  className="bg-brand-deep hover:bg-slate-800 text-white font-bold text-xs px-6 py-3 rounded-full shadow-lg transition-all flex items-center gap-1.5 cursor-pointer border border-brand-deep/25"
                >
                  <span>{language === 'pt' ? "Solicitar Proposta" : "Get A Quote"}</span>
                  <FileText className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Right overlapping circles callout (Page 6 Style) */}
            <div className="lg:col-span-5 flex flex-col items-center lg:items-end justify-center">
              <div className="bg-slate-900 border border-white/10 p-6 rounded-2xl shadow-2xl relative w-[290px] text-center lg:text-left flex items-center gap-4">
                <div className="p-3 bg-brand-blue/10 text-brand-blue rounded-full animate-bounce">
                  <PhoneCall className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-gray-400 text-[10px] font-mono leading-none font-bold uppercase">
                    {language === 'pt' ? "TEM PERGUNTAS?" : "HAVE QUESTIONS?"}
                  </p>
                  <p className="text-white font-extrabold text-sm mt-1.5 whitespace-nowrap">
                    +244 923 456 789
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </motion.section>

      {/* SECTION 11: JOIN NEWSLETTER (Page 6 Style) */}
      <section 
        className="py-24 text-center relative border-t border-gray-900 bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: "url('https://visa.onlyvibes.online/wp-content/uploads/2026/07/PRESENTATION-LEXDATA_01-0260621-1.pdf.png')" }}
      >
        {/* Dark overlay for readability and contrast */}
        <div className="absolute inset-0 bg-slate-950/85 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 via-slate-950/80 to-slate-950/95 pointer-events-none" />

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 relative z-10"
        >
          <div className="flex items-center justify-center gap-2">
            <span className="w-2.5 h-2.5 bg-brand-blue transform rotate-45 animate-pulse" />
            <span className="text-xs uppercase font-mono font-bold tracking-widest text-brand-blue">
              {language === 'pt' ? 'BOLETIM DE NOTÍCIAS' : 'JOIN OUR NEWSLETTER'}
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-sans">
            {language === 'pt' ? "Subscreva para Receber Insights de Engenharia de Dados" : "Subscribe to Our Newsletter for Design Insights"}
          </h2>

          <p className="text-gray-300 text-xs sm:text-sm max-w-2xl mx-auto">
            {language === 'pt' ? (
              "Seja o primeiro a descobrir tendências, inovações e novidades de arquivo eletrónico e transformação digital em Angola."
            ) : (
              "Be the first to discover trends, inspirations, and special offers as we bring the world of design directly to your inbox."
            )}
          </p>

          {/* Form container inside (Page 6 Style) */}
          <div className="max-w-xl mx-auto pt-6">
            {newsletterSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-emerald-950/80 border border-emerald-500/30 text-emerald-300 p-4 rounded-xl text-xs font-bold backdrop-blur-sm"
              >
                {language === 'pt' ? "E-mail registado com sucesso! Obrigado por nos acompanhar." : "Email registered successfully! Thank you for subscribing."}
              </motion.div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="relative flex items-center p-1 border border-white/10 rounded-full bg-white/5 backdrop-blur-md hover:border-brand-blue shadow-2xl group">
                <Mail className="w-4 h-4 text-gray-300 ml-4 pointer-events-none" />
                <input 
                  type="email" 
                  required 
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder={language === 'pt' ? "Introduza o seu email" : "Enter your email"}
                  className="w-full bg-transparent border-none outline-none py-3 px-3 text-xs text-white focus:ring-0 placeholder:text-gray-400"
                />
                <button
                  type="submit"
                  className="bg-brand-blue hover:bg-brand-blue/90 text-white font-bold text-xs px-6 py-3.5 rounded-full shadow-md transition-all flex items-center gap-1.5 cursor-pointer flex-shrink-0"
                >
                  <span>{language === 'pt' ? "Subscrever" : "Subscribe"}</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </motion.div>
      </section>

      {/* DEMO MODAL POP-UP */}
      <AnimatePresence>
        {demoModalOpen && (
          <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-100 max-w-lg w-full p-8 relative text-left"
            >
              <button
                onClick={() => setDemoModalOpen(false)}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 text-gray-400 hover:text-gray-700 transition-colors cursor-pointer"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-2 mb-6">
                <span className="text-[10px] font-mono uppercase bg-brand-blue/10 text-brand-blue px-2.5 py-1 rounded-full font-bold">
                  SISTEMA LEXDATA
                </span>
                <h3 className="text-2xl font-extrabold text-brand-deep">
                  {language === 'pt' ? "Solicitar uma Proposta" : "Request a Quote"}
                </h3>
                <p className="text-gray-500 text-xs">
                  {language === 'pt' ? "Preencha os seus dados e receba uma proposta técnica personalizada." : "Fill in your details and receive a customized technical proposal."}
                </p>
              </div>

              {demoFormSubmitted ? (
                <div className="p-8 text-center space-y-4 bg-emerald-50 border border-emerald-100 rounded-2xl">
                  <CheckCircle className="w-12 h-12 text-emerald-500 mx-auto" />
                  <h4 className="font-bold text-emerald-900 text-lg">Proposta Solicitada!</h4>
                  <p className="text-emerald-700 text-xs">
                    Obrigado pela sua solicitação. Um especialista da LEXDATA entrará em contacto nas próximas horas.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleDemoSubmit} className="space-y-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-gray-700">Nome Completo</label>
                    <input 
                      type="text" 
                      required 
                      value={demoName}
                      onChange={(e) => setDemoName(e.target.value)}
                      placeholder="Ex: João Manuel" 
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/10 focus:outline-none text-xs text-gray-800"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-gray-700">Email Corporativo</label>
                    <input 
                      type="email" 
                      required 
                      value={demoEmail}
                      onChange={(e) => setDemoEmail(e.target.value)}
                      placeholder="Ex: joao.manuel@empresa.ao" 
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/10 focus:outline-none text-xs text-gray-800"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-gray-700">Telefone / WhatsApp</label>
                      <input 
                        type="text" 
                        required 
                        value={demoPhone}
                        onChange={(e) => setDemoPhone(e.target.value)}
                        placeholder="Ex: +244 9..." 
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/10 focus:outline-none text-xs text-gray-800"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-gray-700">Organização</label>
                      <input 
                        type="text" 
                        required 
                        value={demoOrg}
                        onChange={(e) => setDemoOrg(e.target.value)}
                        placeholder="Ex: Ministério X" 
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/10 focus:outline-none text-xs text-gray-800"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-gray-700">Plataforma / Serviço</label>
                    <select 
                      value={demoPlatform}
                      onChange={(e) => setDemoPlatform(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/10 focus:outline-none text-xs text-gray-800"
                    >
                      <option value="CSP">Content Services Platform (CSP)</option>
                      <option value="JURISNET">Portal JURISNET</option>
                      <option value="SIPPO">SIPPO</option>
                      <option value="IN">Portal IN</option>
                    </select>
                  </div>

                  <div className="pt-4">
                    <button
                      type="submit"
                      className="w-full bg-brand-deep hover:bg-brand-deep/90 text-white font-bold py-3.5 rounded-xl shadow-md transition-all text-xs flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span>{language === 'pt' ? "Solicitar Proposta Comercial" : "Request Business Quote"}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
