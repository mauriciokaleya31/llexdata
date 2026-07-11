import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Award, ShieldCheck, HeartHandshake, Eye, Briefcase, Info, CheckCircle2, 
  MapPin, Clock, Users, ArrowRight, Building2, Zap, Network, Sparkles 
} from 'lucide-react';
import { Language } from '../types';

interface AboutProps {
  language: Language;
}

export default function About({ language }: AboutProps) {
  const [selectedTimelineYear, setSelectedTimelineYear] = useState('2026');

  const historyTimeline = [
    {
      year: "1845",
      title_pt: "Origem do Acervo Histórico",
      title_en: "Historic Archive Origin",
      desc_pt: "Início da publicação dos primeiros boletins oficiais do governo em Angola, que hoje constituem a base documental preservada pela LEXDATA.",
      desc_en: "Publication of the first official government bulletins in Angola, which form the base archive preserved by LEXDATA today."
    },
    {
      year: "2015",
      title_pt: "Fundação da LEXDATA",
      title_en: "LEXDATA Foundation",
      desc_pt: "Criação da empresa com capitais públicos associados à Imprensa Nacional E.P. para modernizar e digitalizar o acervo de legislação.",
      desc_en: "Company creation with public capital associated with Imprensa Nacional E.P. to modernize and digitize the legislation archive."
    },
    {
      year: "2018",
      title_pt: "Lançamento do Portal JURISNET",
      title_en: "JURISNET Portal Launch",
      desc_pt: "Lançamento da maior plataforma de pesquisa jurídica de Angola, disponibilizando mais de 170 anos de legislação indexada.",
      desc_en: "Launch of Angola's largest legal search platform, serving over 170 years of indexed legislative files."
    },
    {
      year: "2022",
      title_pt: "Plataforma de Microserviços (CSP)",
      title_en: "Microservices Platform (CSP)",
      desc_pt: "Transição tecnológica para arquitetura moderna de nuvem híbrida, permitindo processamento industrial de desmaterialização.",
      desc_en: "Technological upgrade to high-speed hybrid cloud architecture, supporting industrial-scale dematerialization."
    },
    {
      year: "2026",
      title_pt: "Líder em Transição Sem Papel",
      title_en: "Leader in Paperless Transition",
      desc_pt: "Parceiro chave para a modernização do setor petrolífero e ministérios nacionais com mais de 7,5 milhões de páginas geridas.",
      desc_en: "Key partner for modernizing the oil sector and national ministries with over 7.5 million managed pages."
    }
  ];

  const organizationalStructure = [
    {
      role: "Conselho de Administração",
      role_en: "Board of Directors",
      desc: "Supervisão executiva, conformidade de capitais públicos e diretrizes de governança estatal.",
      department: "Liderança"
    },
    {
      role: "Departamento de Engenharia Documental",
      role_en: "Document Engineering Dept",
      desc: "Gestão dos processos industriais de digitalização, OCR inteligente e higienização física.",
      department: "Técnico"
    },
    {
      role: "Gabinete de Classificação Jurídica",
      role_en: "Legal Classification Office",
      desc: "Juristas especializados dedicados à anotação temática de Diários da República e diplomas legais.",
      department: "Jurídico"
    },
    {
      role: "Suporte Tecnológico & Infraestrutura",
      role_en: "Tech Support & Infrastructure",
      desc: "Manutenção dos servidores, cibersegurança dos portais CSP, SIPPO e JURISNET.",
      department: "Tecnologia"
    }
  ];

  const partners = [
    { name: "Imprensa Nacional - E.P.", role_pt: "Acionista Maioritário", role_en: "Majority Shareholder", desc_pt: "Parceria direta no SIPPO e Diários da República.", desc_en: "Direct partnership on SIPPO and official bulletins." },
    { name: "Ministério da Justiça (MINJUSDH)", role_pt: "Parceiro de Integração", role_en: "Integration Partner", desc_pt: "Desenvolvimento do Empresas Online e Diretório de Sociedades.", desc_en: "Co-development of the Companies Online Directory." },
    { name: "Sector Petrolífero Angolano", role_pt: "Parceiro Industrial", role_en: "Industrial Partner", desc_pt: "Projetos de digitalização confidencial de geologia e exploração.", desc_en: "Confidential geological and oil-exploration digitization files." }
  ];

  const differentials = [
    { title: "Rigor Institucional", desc: "Sendo subsidiária da Imprensa Nacional, garantimos valor oficial nas publicações." },
    { title: "Cibersegurança Avançada", desc: "Protocolos rigorosos de segurança e criptografia militar de acervos governamentais." },
    { title: "Processamento Industrial", desc: "Capacidade para converter milhões de páginas físicas com alta velocidade de OCR." },
    { title: "Garantia de Confidencialidade", desc: "Segurança de dados e backups locais redundantes em nuvem estatal." }
  ];

  return (
    <div className="bg-white text-left relative">
      {/* Banner Section with Advanced Cybernetic Split-Screen */}
      <div className="relative min-h-[300px] sm:min-h-[360px] bg-slate-950 flex items-center overflow-hidden border-b border-white/5">
        {/* Deep Tech Background Pattern */}
        <div className="absolute inset-0 z-0 opacity-40">
          <div className="absolute inset-0 bg-[radial-gradient(#3b82f615_1.2px,transparent_1.2px)] [background-size:20px_20px]" />
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1600&auto=format&fit=crop" 
            alt="About Banner Mesh" 
            className="w-full h-full object-cover opacity-25 mix-blend-overlay" 
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent" />
        </div>

        {/* Floating tech nodes in banner */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden select-none opacity-45">
          <motion.div 
            animate={{ y: [0, -15, 0], rotate: [0, 90, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-10 right-1/3 text-brand-blue/20"
          >
            <Zap className="w-8 h-8" />
          </motion.div>
          <motion.div 
            animate={{ y: [0, 20, 0], rotate: [360, 180, 0] }}
            transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-12 left-1/4 text-cyan-400/15"
          >
            <Network className="w-10 h-10" />
          </motion.div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left text column */}
            <div className="lg:col-span-7 space-y-4 text-left">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-brand-blue rounded-full animate-pulse" />
                <span className="text-xs uppercase font-mono font-bold tracking-widest text-brand-blue">
                  {language === 'pt' ? 'MÁXIMO RIGOR INSTITUCIONAL' : 'MAXIMUM INSTITUTIONAL RIGOR'}
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
                {language === 'pt' ? "A Nossa" : "Our"}{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-cyan-400">
                  {language === 'pt' ? "Identidade" : "Identity"}
                </span>
              </h1>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl">
                {language === 'pt' 
                  ? "Uma subsidiária oficial da Imprensa Nacional - E.P., líder nacional na salvaguarda e desmaterialização inteligente de acervos governamentais e corporativos de Angola." 
                  : "An official subsidiary of Imprensa Nacional - E.P., national leader in the safeguarding and smart dematerialization of Angolan government and corporate archives."}
              </p>
            </div>

            {/* Right isometric slide mockup column */}
            <div className="hidden lg:col-span-5 lg:flex justify-end">
              <motion.div 
                initial={{ opacity: 0, x: 50, rotateY: -15, rotateX: 10 }}
                animate={{ opacity: 1, x: 0, rotateY: -8, rotateX: 6, y: [0, -10, 0] }}
                transition={{ 
                  opacity: { duration: 0.8 },
                  x: { duration: 0.8 },
                  y: { duration: 6, repeat: Infinity, ease: "easeInOut" }
                }}
                className="w-full max-w-[420px] bg-slate-900/65 p-2.5 rounded-2xl border border-white/10 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] backdrop-blur-md relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                <div className="aspect-[16/10] rounded-xl overflow-hidden border border-white/5 bg-slate-950 relative">
                  <img 
                    src="https://visa.onlyvibes.online/wp-content/uploads/2026/07/PRESENTATION-LEXDATA_01-0260621-1.pdf.png" 
                    alt="LEXDATA Core Presentation Slide 1" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-4">
                    <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950/50 border border-cyan-800/30 px-2 py-0.5 rounded uppercase tracking-wider font-bold">
                      SLIDE 01 : PORTAL JURISNET
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-blue/10 text-brand-blue text-xs font-bold uppercase tracking-wider">
            <Info className="w-3.5 h-3.5" />
            <span>{language === 'pt' ? 'Quem Somos' : 'About Us'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-deep tracking-tight">
            {language === 'pt' ? "Modernização com Legitimidade e Tecnologia" : "Modernization with Legitimacy & Technology"}
          </h2>
          <p className="text-gray-500 text-sm">
            {language === 'pt' ? "Unimos o prestígio institucional da Imprensa Nacional à engenharia de processos sem papel de última geração." : "Combining the institutional prestige of Imprensa Nacional with next-gen paperless process engineering."}
          </p>
          <div className="w-16 h-1 bg-brand-blue mx-auto mt-4 rounded-full" />
        </div>

        {/* 1. Who We Are Presentation (With slide 2 presentation mock) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          <div className="lg:col-span-6 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <h3 className="text-2xl sm:text-3xl font-extrabold text-brand-deep font-sans tracking-tight">
                {language === 'pt' ? "Modernização de Acervos com Rigor Estatal" : "State-Backed Modernization of Historical Archives"}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                {language === 'pt' ? (
                  "A LEXDATA, LDA é uma empresa de capitais maioritariamente públicos, detidos pela Imprensa Nacional - E.P. Atuamos como um motor de modernização e desmaterialização de processos, garantindo a preservação e valorização de toda a informação corporativa, técnica e jurídica de Angola."
                ) : (
                  "LEXDATA, LDA is a company with majority public capital, held by Imprensa Nacional - E.P. We act as a driving force for process modernization and dematerialization, ensuring the preservation and value of Angola's corporate, technical, and legal information."
                )}
              </p>
              <p className="text-gray-600 leading-relaxed text-sm">
                {language === 'pt' ? (
                  "Através da nossa engenharia documental proprietária e equipa de juristas especializados, transformamos arquivos físicos estáticos em repositórios dinâmicos e indexados, prontos para a tomada de decisão rápida e segura nos ministérios e indústrias nacionais."
                ) : (
                  "Through our proprietary document engineering and specialized team of legal scholars, we transform static physical archives into dynamic, indexed repositories ready for swift and secure decision-making within national ministries and industries."
                )}
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-6 bg-brand-deep/5 rounded-2xl border border-brand-deep/10"
            >
              <h4 className="text-sm font-bold text-brand-deep uppercase tracking-wider mb-2 flex items-center gap-2">
                <Award className="w-4.5 h-4.5 text-brand-blue animate-pulse" />
                {language === 'pt' ? "Participação Pública Estratégica" : "Strategic Public Ownership"}
              </h4>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                {language === 'pt' ? (
                  "Como subsidiária oficial da Imprensa Nacional - E.P., a LEXDATA combina o prestígio e o rigor institucional público com a agilidade das modernas tecnologias de informação para fornecer soluções com garantia de total confidencialidade e segurança legal."
                ) : (
                  "As an official subsidiary of Imprensa Nacional - E.P., LEXDATA combines public institutional prestige and rigor with modern IT agility to deliver solutions with absolute confidentiality and legal security."
                )}
              </p>
            </motion.div>
          </div>

          {/* Presentation Slide 2 Mock Showcase */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-12 gap-6">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="sm:col-span-8 rounded-2xl overflow-hidden shadow-2xl aspect-[16/11] relative group border border-slate-200"
            >
              <img 
                src="https://visa.onlyvibes.online/wp-content/uploads/2026/07/PRESENTATION-LEXDATA_01-0260621-1.pdf-1.png" 
                alt="LEXDATA Document Engineering Blueprint Slide 2" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent flex items-end p-4">
                <p className="text-white text-xs font-bold font-mono">
                  {language === 'pt' ? "Slide 02 : Engenharia Documental" : "Slide 02 : Document Engineering"}
                </p>
              </div>
            </motion.div>

            <div className="sm:col-span-4 space-y-4 flex flex-col justify-between">
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-gradient-to-br from-brand-deep to-slate-900 p-5 rounded-2xl text-white shadow-lg relative overflow-hidden shrink-0"
              >
                <div className="absolute top-0 right-0 -mr-10 -mt-10 w-20 h-20 rounded-full bg-brand-blue/15" />
                <Building2 className="w-7 h-7 text-brand-blue mb-2.5" />
                <h4 className="font-bold text-xs mb-1">{language === 'pt' ? "Selo do Estado" : "State Backing"}</h4>
                <p className="text-slate-300 text-[10px] leading-relaxed">
                  {language === 'pt' ? "Governação robusta associada à Imprensa Nacional." : "Robust state governance linked to Imprensa Nacional."}
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="rounded-2xl overflow-hidden shadow-xl aspect-[4/3] relative group shrink-0 border border-slate-200"
              >
                <img 
                  src="https://visa.onlyvibes.online/wp-content/uploads/2026/07/PRESENTATION-LEXDATA_01-0260621-1.pdf-2.png" 
                  alt="LEXDATA Solutions Blueprint Slide 3" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent flex items-end p-3">
                  <p className="text-white text-[9px] font-bold font-mono">
                    {language === 'pt' ? "Slide 03 : Soluções Elite" : "Slide 03 : Elite Solutions"}
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Strategic Pillars with Beautiful Images & Animations */}
        <div className="mb-24 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-[10px] font-mono tracking-widest uppercase text-brand-blue bg-brand-blue/10 px-2.5 py-1 rounded-full font-bold">
              {language === 'pt' ? "Pilares Operacionais" : "Operational Pillars"}
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-brand-deep tracking-tight font-sans">
              {language === 'pt' ? "Visão Estratégica & Tecnologia Aplicada" : "Strategic Vision & Applied Technology"}
            </h3>
            <p className="text-gray-500 text-xs sm:text-sm">
              {language === 'pt' ? "Combinamos o tratamento documental físico tradicional com as mais recentes inovações digitais." : "We combine traditional physical document treatment with the latest digital innovations."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-2xl border border-gray-150 overflow-hidden shadow-sm hover:shadow-md transition-shadow group"
            >
              <div className="h-48 overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1568992687947-868a62a9f521?q=80&w=600&auto=format&fit=crop" 
                  alt="Digitalização Industrial" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-brand-blue text-white p-2 rounded-xl">
                  <Zap className="w-5 h-5" />
                </div>
              </div>
              <div className="p-6 space-y-3">
                <h4 className="font-extrabold text-brand-deep text-base">
                  {language === 'pt' ? "Digitalização de Alta Fidelidade" : "High-Fidelity Digitization"}
                </h4>
                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                  {language === 'pt' 
                    ? "Utilização de scanners planetários e rotativos industriais de última geração capazes de processar acervos centenários sem danificar o papel original, convertendo-os em ficheiros de alta qualidade." 
                    : "Use of cutting-edge planetary and industrial rotary scanners capable of processing century-old archives without damaging the original paper, turning them into high-quality files."}
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl border border-gray-150 overflow-hidden shadow-sm hover:shadow-md transition-shadow group"
            >
              <div className="h-48 overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=600&auto=format&fit=crop" 
                  alt="Análise Inteligente de Dados" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-brand-blue text-white p-2 rounded-xl">
                  <Network className="w-5 h-5" />
                </div>
              </div>
              <div className="p-6 space-y-3">
                <h4 className="font-extrabold text-brand-deep text-base">
                  {language === 'pt' ? "Indexação Jurídica & Metadados" : "Legal Indexing & Metadata"}
                </h4>
                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                  {language === 'pt' 
                    ? "Estruturação sistemática de Diários da República e diplomas regulatórios em Angola. Um corpo de juristas dedicados realiza análises temáticas para pesquisas rápidas e remissivas." 
                    : "Systematic structuring of Official Gazettes and regulatory diplomas in Angola. A body of dedicated legal scholars performs thematic analysis for rapid, cross-referenced searches."}
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-2xl border border-gray-150 overflow-hidden shadow-sm hover:shadow-md transition-shadow group"
            >
              <div className="h-48 overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=600&auto=format&fit=crop" 
                  alt="Cibersegurança Nacional" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-brand-blue text-white p-2 rounded-xl">
                  <ShieldCheck className="w-5 h-5" />
                </div>
              </div>
              <div className="p-6 space-y-3">
                <h4 className="font-extrabold text-brand-deep text-base">
                  {language === 'pt' ? "Soberania & Cibersegurança" : "Sovereignty & Cybersecurity"}
                </h4>
                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                  {language === 'pt' 
                    ? "Arquitetura blindada contra vazamentos de dados ou ataques. Oferecemos redundância local em nuvem estatal angolana, garantindo conformidade absoluta com as diretivas nacionais." 
                    : "Shielded architecture against data leaks or attacks. We offer local redundancy in an Angolan state cloud, ensuring absolute compliance with national directives."}
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* 2. Timeline (História) */}
        <div className="mb-24 py-12 bg-slate-900 text-white rounded-3xl px-8 border border-slate-800 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue/10 rounded-full blur-3xl pointer-events-none" />
          <div className="max-w-xl mb-10 space-y-2 relative z-10">
            <span className="text-[10px] font-mono tracking-widest uppercase text-brand-blue bg-brand-blue/15 px-2.5 py-1 rounded-full font-bold">
              {language === 'pt' ? "A Nossa Evolução" : "Our Evolution"}
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {language === 'pt' ? "O Nosso Percurso Histórico" : "Our Historic Milestones"}
            </h3>
            <p className="text-gray-400 text-xs">
              {language === 'pt' ? "Clique nos anos abaixo para navegar pela linha de tempo interativa da LEXDATA." : "Click on the years below to navigate through LEXDATA's interactive timeline."}
            </p>
          </div>

          {/* Interactive years bar */}
          <div className="flex justify-between items-center relative mb-8 border-b border-white/10 pb-4 overflow-x-auto gap-4 relative z-10">
            {historyTimeline.map((item) => (
              <button
                key={item.year}
                onClick={() => setSelectedTimelineYear(item.year)}
                className={`text-sm font-extrabold py-2.5 px-5 rounded-xl transition-all cursor-pointer shrink-0 ${
                  selectedTimelineYear === item.year 
                    ? 'bg-brand-blue text-white shadow-lg scale-105' 
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {item.year}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            {historyTimeline.map((item) => {
              if (item.year !== selectedTimelineYear) return null;
              return (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="bg-slate-950/80 p-8 rounded-2xl border border-white/5 shadow-2xl flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10"
                >
                  <div className="space-y-3">
                    <span className="text-3xl font-mono font-extrabold text-brand-blue">{item.year}</span>
                    <h4 className="text-lg sm:text-xl font-bold text-white">
                      {language === 'pt' ? item.title_pt : item.title_en}
                    </h4>
                    <p className="text-gray-300 text-xs sm:text-sm leading-relaxed max-w-3xl">
                      {language === 'pt' ? item.desc_pt : item.desc_en}
                    </p>
                  </div>
                  <div className="p-4 bg-brand-deep/20 border border-white/10 text-brand-blue rounded-2xl shrink-0 self-start md:self-auto">
                    <Sparkles className="w-8 h-8 text-brand-blue animate-pulse" />
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* 3. Mission, Vision, Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          <motion.div 
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="bg-white p-8 rounded-3xl border border-slate-100 hover:border-brand-blue/30 shadow-sm hover:shadow-xl transition-all duration-300 space-y-4 group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/[0.01] to-brand-blue/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            <div className="w-12 h-12 rounded-2xl bg-brand-blue/10 text-brand-blue flex items-center justify-center group-hover:bg-brand-blue group-hover:text-white transition-all duration-300 shadow-sm">
              <Briefcase className="w-5 h-5" />
            </div>
            <h4 className="text-xl font-bold text-brand-deep font-sans">
              {language === 'pt' ? "Nossa Missão" : "Our Mission"}
            </h4>
            <p className="text-gray-500 text-sm leading-relaxed font-sans">
              {language === 'pt' 
                ? "Promover a transição digital sustentável de organizações públicas e privadas em Angola, desmaterializando arquivos e normalizando fluxos de informação de valor legal e operacional."
                : "Promote the sustainable digital transition of public and private organizations in Angola, dematerializing archives and standardizing workflows of legal and operational value."}
            </p>
          </motion.div>

          <motion.div 
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="bg-white p-8 rounded-3xl border border-slate-100 hover:border-brand-blue/30 shadow-sm hover:shadow-xl transition-all duration-300 space-y-4 group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/[0.01] to-brand-blue/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            <div className="w-12 h-12 rounded-2xl bg-brand-blue/10 text-brand-blue flex items-center justify-center group-hover:bg-brand-blue group-hover:text-white transition-all duration-300 shadow-sm">
              <Eye className="w-5 h-5" />
            </div>
            <h4 className="text-xl font-bold text-brand-deep font-sans">
              {language === 'pt' ? "Nossa Visão" : "Our Vision"}
            </h4>
            <p className="text-gray-500 text-sm leading-relaxed font-sans">
              {language === 'pt' 
                ? "Ser reconhecida como a referência absoluta no tratamento arquivístico, classificação jurídica e modernização tecnológica em Angola com total integridade de dados e auditoria de segurança."
                : "To be recognized as the absolute reference in archival treatment, legal classification, and technological modernization in Angola with complete data integrity and security audit."}
            </p>
          </motion.div>

          <motion.div 
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="bg-white p-8 rounded-3xl border border-slate-100 hover:border-brand-blue/30 shadow-sm hover:shadow-xl transition-all duration-300 space-y-4 group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/[0.01] to-brand-blue/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            <div className="w-12 h-12 rounded-2xl bg-brand-blue/10 text-brand-blue flex items-center justify-center group-hover:bg-brand-blue group-hover:text-white transition-all duration-300 shadow-sm">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <h4 className="text-xl font-bold text-brand-deep font-sans">
              {language === 'pt' ? "Nossos Valores" : "Our Values"}
            </h4>
            <p className="text-gray-500 text-sm leading-relaxed font-sans">
              {language === 'pt' 
                ? "Pautamos as nossas ações por excelência técnica rigorosa, segurança cibernética impenetrável, confidencialidade absoluta, ética de governança pública e foco na otimização de tempo."
                : "We guide our actions by rigorous technical excellence, impenetrable cybersecurity, absolute confidentiality, public governance ethics, and focus on time optimization."}
            </p>
          </motion.div>
        </div>

        {/* 4. INFRASTRUCTURE & PRODUCTION GALLERY (NEW) */}
        <div className="mb-24 space-y-12">
          <div className="max-w-xl space-y-2">
            <span className="text-[10px] font-mono tracking-widest uppercase text-brand-blue bg-brand-blue/10 px-2.5 py-1 rounded-full font-bold">
              {language === 'pt' ? "Infraestrutura" : "Infrastructure"}
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-brand-deep font-sans">
              {language === 'pt' ? "Unidades de Produção & Laboratórios" : "Production Units & Laboratories"}
            </h3>
            <p className="text-gray-500 text-xs sm:text-sm">
              {language === 'pt' 
                ? "Conheça por dentro o processo de transformação física e digital levado a cabo pelas nossas equipas técnicas." 
                : "A detailed look inside our physical and digital transformation processes carried out by our technical teams."}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white border border-gray-150 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="aspect-[16/10] overflow-hidden relative group">
                <img 
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop" 
                  alt="Higienização Física" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent" />
                <span className="absolute bottom-4 left-4 text-white text-xs font-mono font-bold uppercase bg-brand-blue/90 px-2 py-1 rounded">
                  01 . {language === 'pt' ? "Higienização" : "Hygiene"}
                </span>
              </div>
              <div className="p-6 space-y-2">
                <h4 className="font-extrabold text-brand-deep text-base">
                  {language === 'pt' ? "Higienização e Recuperação Documental" : "Physical Restoration & Cleaning"}
                </h4>
                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                  {language === 'pt' 
                    ? "Higienização técnica de papéis históricos, remoção de fungos, agrafos, clips e reparação manual de folhas danificadas para garantir uma digitalização perfeita sem perda de informação crucial." 
                    : "Technical cleaning of historical papers, removal of fungi, staples, clips, and manual repair of damaged sheets to guarantee pristine scanning without loss of crucial data."}
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white border border-gray-150 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="aspect-[16/10] overflow-hidden relative group">
                <img 
                  src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=800&auto=format&fit=crop" 
                  alt="Captura Industrial" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent" />
                <span className="absolute bottom-4 left-4 text-white text-xs font-mono font-bold uppercase bg-brand-blue/90 px-2 py-1 rounded">
                  02 . {language === 'pt' ? "Digitalização" : "Digitization"}
                </span>
              </div>
              <div className="p-6 space-y-2">
                <h4 className="font-extrabold text-brand-deep text-base">
                  {language === 'pt' ? "Estações de Captura Industrial" : "Industrial High-Speed Capture Labs"}
                </h4>
                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                  {language === 'pt' 
                    ? "Sistemas rotativos Kodak Alaris e planetários Zeutschel para captura em alta definição de grandes volumes de documentos, livros e Diários Oficiais sob rigoroso controle de metadados." 
                    : "Kodak Alaris rotary scanners and Zeutschel planetary stations for high-definition capture of massive document volumes, books, and Official Gazettes under strict metadata control."}
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white border border-gray-150 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="aspect-[16/10] overflow-hidden relative group">
                <img 
                  src="https://images.unsplash.com/photo-1450133064473-71024230f91b?q=80&w=800&auto=format&fit=crop" 
                  alt="Classificação Jurídica" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent" />
                <span className="absolute bottom-4 left-4 text-white text-xs font-mono font-bold uppercase bg-brand-blue/90 px-2 py-1 rounded">
                  03 . {language === 'pt' ? "Análise" : "Analysis"}
                </span>
              </div>
              <div className="p-6 space-y-2">
                <h4 className="font-extrabold text-brand-deep text-base">
                  {language === 'pt' ? "Gabinete de Classificação Jurídica" : "Legal Taxonomy & Classification Room"}
                </h4>
                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                  {language === 'pt' 
                    ? "A nossa equipa de juristas qualificados lê, interpreta e anota sistematicamente todos os diplomas, alimentando os portais de pesquisa institucional com indexação temática de alta precisão." 
                    : "Our qualified team of legal specialists reads, interprets, and annotates every document, feeding the JURISNET and SIPPO directories with high-precision thematic indexing."}
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white border border-gray-150 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="aspect-[16/10] overflow-hidden relative group">
                <img 
                  src="https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800&auto=format&fit=crop" 
                  alt="Data Center" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent" />
                <span className="absolute bottom-4 left-4 text-white text-xs font-mono font-bold uppercase bg-brand-blue/90 px-2 py-1 rounded">
                  04 . {language === 'pt' ? "Servidores" : "Servers"}
                </span>
              </div>
              <div className="p-6 space-y-2">
                <h4 className="font-extrabold text-brand-deep text-base">
                  {language === 'pt' ? "Segurança Tecnológica & Cloud Estatal" : "Secure Infrastructure & State Cloud Host"}
                </h4>
                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                  {language === 'pt' 
                    ? "Sistemas de backup blindados instalados localmente. Garantia de custódia e soberania de dados para que os acervos governamentais e empresariais estejam acessíveis 24/7 com cibersegurança militar." 
                    : "Shielded physical backups installed locally. Guaranteeing complete data sovereignty and custody, ensuring government and corporate archives are accessible 24/7 with military-grade cybersecurity."}
                </p>
              </div>
            </motion.div>
          </div>
        </div>



      </div>
    </div>
  );
}
