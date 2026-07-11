import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, Shield, Database, Cpu, FileText, Network, CheckCircle, 
  ChevronLeft, ChevronRight, Play, Users, Award, Landmark, GraduationCap, 
  Search, BookOpen, Globe, Laptop, HelpCircle, Briefcase, Zap, Calendar, Lock,
  Sparkles, Code, MessageSquare, ArrowUpRight, Check, Plus, Minus, PhoneCall, Star, Mail, MapPin, Send, LayoutGrid, X, Clock
} from 'lucide-react';
import { Language } from '../types';

import workspaceScanning from '../assets/images/regenerated_image_1783753906385.png';
import regeneratedProjectImg from '../assets/images/regenerated_image_1783758616892.png';
import regeneratedBlogImg from '../assets/images/regenerated_image_1783758620144.png';

interface HomeProps {
  language: Language;
  setActiveTab: (tab: string) => void;
}

function CounterCard({ 
  value, 
  suffix = "+", 
  title, 
  desc, 
  icon: IconComponent 
}: { 
  value: number; 
  suffix?: string; 
  title: string; 
  desc: string; 
  icon: React.ComponentType<any>;
}) {
  const [count, setCount] = useState(0);
  const [hasEntered, setHasEntered] = useState(false);

  useEffect(() => {
    if (!hasEntered) return;

    let startTime: number | null = null;
    const duration = 2200; // 2.2 seconds for gentle smooth counting
    
    const easeOutQuad = (x: number): number => {
      return 1 - (1 - x) * (1 - x);
    };

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutQuad(progress);
      setCount(Math.floor(easedProgress * value));
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(value);
      }
    };

    const animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [value, hasEntered]);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      onViewportEnter={() => setHasEntered(true)}
      whileHover={{ y: -6, scale: 1.02 }}
      className="bg-slate-50/50 border border-slate-100 p-6 sm:p-8 rounded-3xl shadow-sm hover:shadow-xl hover:bg-white hover:border-brand-blue/30 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
    >
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/[0.01] to-brand-blue/[0.04] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="p-3 bg-white group-hover:bg-brand-blue/10 rounded-2xl border border-slate-200/60 group-hover:border-brand-blue/20 transition-all duration-300 shadow-sm">
            <IconComponent className="w-5 h-5 text-brand-blue transition-transform duration-500 group-hover:rotate-12" />
          </div>
          <span className="text-[10px] font-mono font-bold uppercase text-slate-300 tracking-wider group-hover:text-brand-blue/40 transition-colors">
            LEXDATA
          </span>
        </div>

        <div className="space-y-1 text-left">
          <h3 className="text-4xl sm:text-5xl font-extrabold text-brand-deep tracking-tight leading-none group-hover:text-brand-blue transition-colors flex items-baseline gap-0.5">
            <span className="text-3xl text-brand-blue/70 font-sans font-bold">{suffix}</span>
            <span className="font-sans font-black">{count}</span>
          </h3>
          <p className="text-xs font-bold text-brand-deep uppercase tracking-wider font-sans pt-1.5">
            {title}
          </p>
          <p className="text-[11px] text-slate-400 leading-relaxed font-sans">
            {desc}
          </p>
        </div>
      </div>
    </motion.div>
  );
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
                  <div className="bg-slate-950/40 border border-white/10 text-white rounded-2xl overflow-hidden shadow-2xl flex flex-col justify-between p-8 min-h-[380px] hover:scale-[1.02] transition-transform duration-300 backdrop-blur-xl">
                    <div className="space-y-4">
                      <span className="text-xs font-mono font-bold text-brand-blue bg-brand-blue/10 px-3 py-1 rounded-full uppercase tracking-wider">
                        {servicesList[activeServiceSlide].num} / SERVICE
                      </span>
                      <h3 className="text-xl font-extrabold text-white">
                        {servicesList[activeServiceSlide].title_pt}
                      </h3>
                      <p className="text-slate-300 text-xs leading-relaxed">
                        {language === 'pt' ? servicesList[activeServiceSlide].desc_pt : servicesList[activeServiceSlide].desc_en}
                      </p>
                    </div>
                    <div className="pt-6 border-t border-white/5 mt-6 flex justify-between items-center">
                      <button 
                        onClick={() => setActiveTab('services')}
                        className="text-xs font-bold text-slate-200 hover:text-brand-blue transition-colors flex items-center gap-1 cursor-pointer"
                      >
                        <span>{language === 'pt' ? "Saber Mais" : "More details"}</span>
                        <ChevronRight className="w-3.5 h-3.5 text-brand-blue" />
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 pt-16 mt-16 border-t border-slate-100">
            <CounterCard
              value={15}
              suffix="+"
              icon={Award}
              title={language === 'pt' ? "Anos de Experiência" : "Years of Experience"}
              desc={language === 'pt' ? "Soluções consistentes e sólidas no mercado angolano." : "Consistent, solid solutions delivering results in the market."}
            />

            <CounterCard
              value={250}
              suffix="+"
              icon={Briefcase}
              title={language === 'pt' ? "Projetos Concluídos" : "Projects Completed"}
              desc={language === 'pt' ? "Executados com planeamento rigoroso, conformidade e eficiência." : "Successfully executed projects with rigorous planning & efficiency."}
            />

            <CounterCard
              value={120}
              suffix="+"
              icon={Users}
              title={language === 'pt' ? "Clientes Satisfeitos" : "Happy Clients"}
              desc={language === 'pt' ? "Relações de excelência sustentadas na transparência e rigor." : "Long-term client relationships built on trust and absolute transparency."}
            />

            <CounterCard
              value={10}
              suffix="+"
              icon={Landmark}
              title={language === 'pt' ? "Presença de Setor" : "Industry Presence"}
              desc={language === 'pt' ? "Apoiando ativamente empresas de múltiplos setores de relevo." : "Supporting leading institutions across multiple sectors of relevance."}
            />
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

      {/* SECTION 6: THE PROCESS (Enhanced with Floating Tech & Premium Cyber Backdrop) */}
      <section className="py-24 relative bg-slate-950 text-white text-left overflow-hidden">
        {/* Parallax high-tech cyber network background image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-35 mix-blend-overlay"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-transparent" />

        {/* Floating tech background objects */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
          {/* Glowing particle 1 - CPU */}
          <motion.div 
            animate={{ y: [0, -30, 0], x: [0, 20, 0], rotate: [0, 180, 360] }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 left-10 text-brand-blue/15"
          >
            <Cpu className="w-12 h-12" />
          </motion.div>
          
          {/* Glowing particle 2 - Database */}
          <motion.div 
            animate={{ y: [0, 40, 0], x: [0, -20, 0], rotate: [360, 180, 0] }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-1/4 right-1/3 text-cyan-400/10"
          >
            <Database className="w-16 h-16" />
          </motion.div>

          {/* Glowing particle 3 - Network */}
          <motion.div 
            animate={{ y: [0, -25, 0], x: [0, -15, 0], rotate: [0, -180, -360] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/2 right-12 text-brand-blue/10"
          >
            <Network className="w-10 h-10" />
          </motion.div>

          {/* Glowing particle 4 - Code */}
          <motion.div 
            animate={{ y: [0, 35, 0], x: [0, 25, 0], rotate: [45, 225, 405] }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-10 left-1/3 text-slate-500/10"
          >
            <Code className="w-14 h-14" />
          </motion.div>
          
          {/* Floating cyber lock */}
          <motion.div 
            animate={{ y: [0, -20, 0], x: [0, 10, 0], rotate: [0, 90, 0] }}
            transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-12 left-1/2 text-cyan-500/10"
          >
            <Lock className="w-8 h-8" />
          </motion.div>
        </div>

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

              <p className="text-slate-300 text-sm leading-relaxed">
                {language === 'pt' ? (
                  "O nosso processo é desenhado para garantir clareza, eficiência e excelência técnica em cada etapa de implementação. Seguimos uma abordagem rigorosamente estruturada para atingir os resultados acordados."
                ) : (
                  "Our process is designed to ensure clarity, efficiency, and quality at every stage. We follow a structured approach to deliver reliable solutions that meet business goals and expectations."
                )}
              </p>
            </motion.div>

            {/* Right Column Process List (Enhanced Bento & Cyber Glassmorphism) */}
            <div className="lg:col-span-7 space-y-6">
              {/* Step 1 */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="flex gap-5 items-start bg-white/[0.02] border border-white/5 hover:border-brand-blue/40 hover:bg-white/[0.08] p-6 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.3)] backdrop-blur-md transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center text-brand-blue font-mono font-black text-lg flex-shrink-0 group-hover:scale-110 group-hover:bg-brand-blue/20 transition-all duration-300 shadow-[0_0_15px_rgba(59,130,246,0.1)]">
                  01
                </div>
                <div className="space-y-1">
                  <h4 className="font-bold text-white text-base group-hover:text-brand-blue transition-colors">
                    {language === 'pt' ? "Consulta e Planeamento" : "Consultation & Planning"}
                  </h4>
                  <p className="text-slate-400 text-xs leading-relaxed">
                    {language === 'pt' ? (
                      "Começamos por diagnosticar e compreender os seus requisitos específicos, volume de arquivo e objetivos para formular um plano de transição claro e estruturado."
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
                className="flex gap-5 items-start bg-white/[0.02] border border-white/5 hover:border-brand-blue/40 hover:bg-white/[0.08] p-6 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.3)] backdrop-blur-md transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center text-brand-blue font-mono font-black text-lg flex-shrink-0 group-hover:scale-110 group-hover:bg-brand-blue/20 transition-all duration-300 shadow-[0_0_15px_rgba(59,130,246,0.1)]">
                  02
                </div>
                <div className="space-y-1">
                  <h4 className="font-bold text-white text-base group-hover:text-brand-blue transition-colors">
                    {language === 'pt' ? "Execução e Implementação" : "Execution & Implementation"}
                  </h4>
                  <p className="text-slate-400 text-xs leading-relaxed">
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
                className="flex gap-5 items-start bg-white/[0.02] border border-white/5 hover:border-brand-blue/40 hover:bg-white/[0.08] p-6 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.3)] backdrop-blur-md transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center text-brand-blue font-mono font-black text-lg flex-shrink-0 group-hover:scale-110 group-hover:bg-brand-blue/20 transition-all duration-300 shadow-[0_0_15px_rgba(59,130,246,0.1)]">
                  03
                </div>
                <div className="space-y-1">
                  <h4 className="font-bold text-white text-base group-hover:text-brand-blue transition-colors">
                    {language === 'pt' ? "Entrega e Apoio Continuado" : "Delivery & Support"}
                  </h4>
                  <p className="text-slate-400 text-xs leading-relaxed">
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

      {/* SECTION 10: GET STARTED BANNER (Enhanced Premium Bento & Glassmorphism Design) */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="py-16 sm:py-20 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white text-left relative overflow-hidden mx-4 sm:mx-8 lg:mx-16 rounded-[2.5rem] shadow-[0_24px_60px_rgba(0,0,0,0.25)] my-16 border border-slate-800/80"
      >
        {/* Futuristic glowing ambient background circles */}
        <div className="absolute -top-40 -right-40 w-[450px] h-[450px] bg-brand-blue/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />
        
        {/* Subtle decorative grid background for tech feel */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:2rem_2rem] [mask-image:radial-gradient(ellipse_at_center,white_70%,transparent_100%)] opacity-40 pointer-events-none" />

        <div className="max-w-6xl mx-auto px-6 sm:px-10 md:px-14 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-brand-blue text-[10px] font-mono font-bold uppercase tracking-widest">
                <Sparkles className="w-3.5 h-3.5 animate-pulse" />
                <span>{language === 'pt' ? "PARCEIRO DE INOVAÇÃO" : "INNOVATION PARTNER"}</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight font-sans text-white leading-[1.1]">
                {language === 'pt' ? (
                  <>Vamos Desenhar o <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-cyan-400">Futuro Digital</span> Juntos</>
                ) : (
                  <>Let's Design the <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-cyan-400">Digital Future</span> Together</>
                )}
              </h2>
              
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl">
                {language === 'pt' ? (
                  "Partilhe connosco os seus requisitos de arquivo físico, digitalização inteligente ou as especificações das suas plataformas de gestão. Descubra como podemos simplificar e garantir conformidade total."
                ) : (
                  "Share your requirements for physical archiving, smart digitization, or systems integration. Discover how we can simplify your operational flow with compliance and security."
                )}
              </p>
              
              <div className="flex flex-wrap gap-4 pt-2">
                <button
                  onClick={() => setActiveTab('contact')}
                  className="bg-brand-blue hover:bg-brand-blue/90 text-white font-extrabold text-xs px-8 py-4 rounded-full shadow-lg shadow-brand-blue/25 hover:shadow-brand-blue/40 hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2 cursor-pointer"
                >
                  <span>{language === 'pt' ? "Contactar Especialista" : "Contact a Specialist"}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setDemoModalOpen(true)}
                  className="bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-xs px-8 py-4 rounded-full shadow-md hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2 cursor-pointer border border-slate-800 hover:border-slate-700"
                >
                  <span>{language === 'pt' ? "Solicitar Orçamento" : "Request Quote"}</span>
                  <FileText className="w-4 h-4 text-slate-400" />
                </button>
              </div>
            </div>

            {/* Right Interactive Bento-Glassmorphism Card Column */}
            <div className="lg:col-span-5 flex justify-center">
              <motion.div 
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="bg-white/[0.03] border border-white/10 backdrop-blur-xl p-6 sm:p-8 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.3)] w-full max-w-md relative overflow-hidden group"
              >
                {/* Decorative border gloss highlight */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none" />
                
                {/* Card Title & Online Status */}
                <div className="flex items-center justify-between border-b border-white/5 pb-5 mb-5">
                  <div className="space-y-1">
                    <h3 className="text-sm font-extrabold tracking-wider text-white font-mono uppercase">
                      {language === 'pt' ? "CENTRO DE ATENDIMENTO" : "ENGAGEMENT HUB"}
                    </h3>
                    <p className="text-[10px] text-slate-400 font-sans">
                      {language === 'pt' ? "Lexdata Angola" : "Lexdata Head Office"}
                    </p>
                  </div>
                  
                  {/* Glowing Active Status */}
                  <div className="flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    <span className="text-[10px] font-bold text-emerald-400 font-mono tracking-wider">
                      {language === 'pt' ? "DISPONÍVEL" : "ONLINE"}
                    </span>
                  </div>
                </div>

                {/* Info Rows */}
                <div className="space-y-4">
                  {/* Call Row */}
                  <a 
                    href="tel:+244923456789" 
                    className="flex items-center gap-4 p-3.5 rounded-2xl bg-white/[0.01] hover:bg-white/[0.05] border border-white/[0.02] hover:border-white/10 transition-all duration-300 group/row"
                  >
                    <div className="p-3 bg-brand-blue/10 text-brand-blue rounded-xl group-hover/row:scale-110 group-hover/row:bg-brand-blue/20 transition-all duration-300">
                      <PhoneCall className="w-4.5 h-4.5" />
                    </div>
                    <div className="text-left space-y-0.5">
                      <p className="text-[10px] font-mono font-bold text-slate-400 group-hover/row:text-slate-300 transition-colors uppercase">
                        {language === 'pt' ? "Linha Direta" : "Hotline Support"}
                      </p>
                      <p className="text-sm font-black text-white group-hover/row:text-brand-blue transition-colors">
                        +244 923 456 789
                      </p>
                    </div>
                  </a>

                  {/* Email Row */}
                  <a 
                    href="mailto:geral@lexdata.ao" 
                    className="flex items-center gap-4 p-3.5 rounded-2xl bg-white/[0.01] hover:bg-white/[0.05] border border-white/[0.02] hover:border-white/10 transition-all duration-300 group/row"
                  >
                    <div className="p-3 bg-cyan-500/10 text-cyan-400 rounded-xl group-hover/row:scale-110 group-hover/row:bg-cyan-500/20 transition-all duration-300">
                      <Mail className="w-4.5 h-4.5" />
                    </div>
                    <div className="text-left space-y-0.5">
                      <p className="text-[10px] font-mono font-bold text-slate-400 group-hover/row:text-slate-300 transition-colors uppercase">
                        {language === 'pt' ? "Email Geral" : "Corporate Email"}
                      </p>
                      <p className="text-sm font-black text-white group-hover/row:text-cyan-400 transition-colors">
                        geral@lexdata.ao
                      </p>
                    </div>
                  </a>

                  {/* Support/Operational Hours Row */}
                  <div className="flex items-center gap-4 p-3.5 rounded-2xl bg-white/[0.01] border border-white/[0.01]">
                    <div className="p-3 bg-slate-800 text-slate-400 rounded-xl">
                      <Clock className="w-4.5 h-4.5 text-brand-blue" />
                    </div>
                    <div className="text-left space-y-0.5">
                      <p className="text-[10px] font-mono font-bold text-slate-400 uppercase">
                        {language === 'pt' ? "Horário Comercial" : "Office Hours"}
                      </p>
                      <p className="text-xs font-semibold text-slate-200">
                        {language === 'pt' ? "Segunda a Sexta: 08:00 - 17:00" : "Monday to Friday: 08:00 AM - 05:00 PM"}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Micro Footer Accent */}
                <div className="mt-5 pt-4 border-t border-white/5 flex justify-between items-center text-[9px] font-mono text-slate-500 uppercase tracking-widest font-bold">
                  <span>LEXDATA TECH</span>
                  <span>EST. 2011</span>
                </div>

              </motion.div>
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
