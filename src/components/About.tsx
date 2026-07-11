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
    <div className="bg-white text-left">
      {/* Banner Section with Background Image */}
      <div className="relative h-[240px] sm:h-[300px] bg-brand-deep flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1600&auto=format&fit=crop" 
            alt="About Banner" 
            className="w-full h-full object-cover opacity-30" 
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-deep via-brand-deep/85 to-transparent" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full mt-8">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 bg-brand-blue transform rotate-45" />
            <span className="text-xs uppercase font-mono font-bold tracking-widest text-brand-blue">
              {language === 'pt' ? 'SOBRE NÓS' : 'ABOUT'}
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            {language === 'pt' ? "Sobre" : "About"}
          </h1>
          <p className="text-gray-300 text-xs sm:text-sm mt-2 max-w-xl">
            {language === 'pt' 
              ? "Eficiência, rigor e inovação na salvaguarda do património documental angolano." 
              : "Efficiency, rigor, and innovation in safeguarding Angolan documentary assets."}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-blue/10 text-brand-blue text-xs font-bold uppercase tracking-wider">
            <Info className="w-3.5 h-3.5" />
            <span>{language === 'pt' ? 'A Empresa' : 'The Company'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-deep tracking-tight">
            {language === 'pt' ? "Quem Somos e o que nos Define" : "Who We Are & Our Core Identity"}
          </h2>
          <p className="text-gray-500 text-sm">
            {language === 'pt' ? "Eficiência, Rigor e Inovação Tecnológica na Salvaguarda do Património Documental" : "Efficiency, Rigor, and Tech Innovation in Safeguarding Document Assets"}
          </p>
          <div className="w-20 h-1.5 bg-brand-blue mx-auto mt-4 rounded-full" />
        </div>

        {/* 1. Who We Are Presentation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-2xl font-bold text-brand-deep">
              {language === 'pt' ? "Modernização de Acervos com Rigor Estatal" : "State-Backed Modernization of Historical Archives"}
            </h3>
            <p className="text-gray-600 leading-relaxed text-base">
              {language === 'pt' ? (
                "A LEXDATA, LDA é uma empresa de capitais maioritariamente públicos, detidos pela Imprensa Nacional - E.P. Atuamos como um motor de modernização e desmaterialização de processos, garantindo a preservação e valorização de toda a informação corporativa, técnica e jurídica de Angola."
              ) : (
                "LEXDATA, LDA is a company with majority public capital, held by Imprensa Nacional - E.P. We act as a driving force for process modernization and dematerialization, ensuring the preservation and value of Angola's corporate, technical, and legal information."
              )}
            </p>
            
            <div className="p-6 bg-brand-deep/5 rounded-2xl border border-brand-deep/10">
              <h4 className="text-sm font-bold text-brand-deep uppercase tracking-wider mb-2 flex items-center gap-2">
                <Award className="w-4.5 h-4.5 text-brand-blue" />
                {language === 'pt' ? "Participação Pública Estratégica" : "Strategic Public Ownership"}
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                {language === 'pt' ? (
                  "Como subsidiária oficial da Imprensa Nacional - E.P., a LEXDATA combina o prestígio e o rigor institucional público com a agilidade das modernas tecnologias de informação para fornecer soluções com garantia de total confidencialidade e segurança legal."
                ) : (
                  "As an official subsidiary of Imprensa Nacional - E.P., LEXDATA combines public institutional prestige and rigor with modern IT agility to deliver solutions with absolute confidentiality and legal security."
                )}
              </p>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-gradient-to-br from-brand-deep to-slate-900 p-8 rounded-3xl text-white shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 -mr-16 -mt-16 w-36 h-36 rounded-full bg-brand-blue/15" />
              <Building2 className="w-10 h-10 text-brand-blue mb-4" />
              <h4 className="font-bold text-lg mb-2">Estrutura de Acionistas</h4>
              <p className="text-gray-300 text-xs leading-relaxed mb-6">
                Combinando governança estatal sólida com flexibilidade para responder aos desafios de grandes empresas privadas e petrolíferas.
              </p>
              <div className="space-y-3">
                <div className="flex justify-between text-xs border-b border-white/10 pb-2">
                  <span className="text-gray-400">Imprensa Nacional E.P.</span>
                  <span className="font-bold text-brand-blue">Acionista Maioritário</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-gray-400">Natureza Legal</span>
                  <span className="font-bold">Capitais Públicos</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 2. Timeline (História) */}
        <div className="mb-24 py-12 bg-gray-50 rounded-3xl px-8 border border-gray-100">
          <div className="max-w-xl mb-10 space-y-2">
            <h3 className="text-2xl font-bold text-brand-deep">A Nossa História</h3>
            <p className="text-gray-500 text-xs">Clique nos marcos históricos para ler o detalhe do nosso trajeto.</p>
          </div>

          {/* Interactive years bar */}
          <div className="flex justify-between items-center relative mb-8 border-b border-gray-200 pb-4 overflow-x-auto gap-4">
            {historyTimeline.map((item) => (
              <button
                key={item.year}
                onClick={() => setSelectedTimelineYear(item.year)}
                className={`text-sm font-extrabold py-2 px-4 rounded-xl transition-all cursor-pointer shrink-0 ${
                  selectedTimelineYear === item.year 
                    ? 'bg-brand-blue text-white shadow-md' 
                    : 'text-gray-500 hover:text-brand-deep'
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
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6"
                >
                  <div className="space-y-2">
                    <span className="text-2xl font-mono font-extrabold text-brand-blue">{item.year}</span>
                    <h4 className="text-lg font-bold text-brand-deep">
                      {language === 'pt' ? item.title_pt : item.title_en}
                    </h4>
                    <p className="text-gray-600 text-xs md:text-sm leading-relaxed max-w-2xl">
                      {language === 'pt' ? item.desc_pt : item.desc_en}
                    </p>
                  </div>
                  <div className="p-3 bg-brand-deep/5 text-brand-deep rounded-xl shrink-0">
                    <Sparkles className="w-8 h-8 text-brand-blue" />
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* 3. Mission, Vision, Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          <div className="bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-xl transition-all space-y-4">
            <div className="w-12 h-12 rounded-xl bg-brand-blue/10 text-brand-blue flex items-center justify-center">
              <Briefcase className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold text-brand-deep">Nossa Missão</h4>
            <p className="text-gray-500 text-xs leading-relaxed">
              Promover a transição digital sustentável de organizações públicas e privadas em Angola, desmaterializando arquivos e normalizando fluxos de informação de valor legal e operacional.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-xl transition-all space-y-4">
            <div className="w-12 h-12 rounded-xl bg-brand-blue/10 text-brand-blue flex items-center justify-center">
              <Eye className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold text-brand-deep">Nossa Visão</h4>
            <p className="text-gray-500 text-xs leading-relaxed">
              Ser reconhecida como a referência absoluta no tratamento arquivístico, classificação jurídica e modernização tecnológica em Angola com total integridade de dados e auditoria de segurança.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-xl transition-all space-y-4">
            <div className="w-12 h-12 rounded-xl bg-brand-blue/10 text-brand-blue flex items-center justify-center">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold text-brand-deep">Nossos Valores</h4>
            <p className="text-gray-500 text-xs leading-relaxed">
              Pautamos as nossas ações por excelência técnica rigorosa, segurança cibernética impenetrável, confidencialidade absoluta, ética de governança pública e foco na otimização de tempo.
            </p>
          </div>
        </div>

        {/* 4. Organizational Structure */}
        <div className="mb-24">
          <div className="max-w-xl mb-12 space-y-2">
            <h3 className="text-2xl font-bold text-brand-deep">Estrutura Organizacional</h3>
            <p className="text-gray-500 text-xs">Nosso organograma estruturado para máxima conformidade e rigor operacional.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {organizationalStructure.map((org, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-2xl border border-gray-100 space-y-3 relative overflow-hidden group">
                <span className="text-[10px] font-mono font-bold tracking-widest text-brand-blue uppercase bg-white px-2 py-0.5 rounded border border-gray-200">
                  {org.department}
                </span>
                <h4 className="font-extrabold text-gray-900 text-sm group-hover:text-brand-deep transition-colors">
                  {language === 'pt' ? org.role : org.role_en}
                </h4>
                <p className="text-gray-500 text-xs leading-relaxed">
                  {org.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 5. Strategic Partners */}
        <div className="mb-24 py-12 border-t border-b border-gray-100">
          <div className="max-w-xl mb-12 space-y-2">
            <h3 className="text-2xl font-bold text-brand-deep">Parceiros Estratégicos</h3>
            <p className="text-gray-500 text-xs">Trabalhamos em conjunto com entidades de alto nível para garantir o sucesso nacional.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {partners.map((partner, index) => (
              <div key={index} className="p-6 bg-white border border-gray-100 rounded-2xl shadow-sm flex flex-col justify-between">
                <div className="space-y-2">
                  <h4 className="font-bold text-gray-900 text-base">{partner.name}</h4>
                  <span className="text-[10px] uppercase font-mono font-bold text-brand-blue">
                    {language === 'pt' ? partner.role_pt : partner.role_en}
                  </span>
                  <p className="text-gray-500 text-xs mt-2 leading-relaxed">
                    {language === 'pt' ? partner.desc_pt : partner.desc_en}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 6. Differentials */}
        <div className="space-y-8">
          <div className="max-w-xl space-y-2">
            <h3 className="text-2xl font-bold text-brand-deep">Diferenciais Competitivos</h3>
            <p className="text-gray-500 text-xs">O que nos afasta do mercado tradicional e nos coloca como líderes.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {differentials.map((diff, index) => (
              <div key={index} className="p-5 bg-white border border-gray-100 rounded-2xl flex items-start gap-4">
                <div className="p-2 bg-brand-blue/10 text-brand-blue rounded-xl shrink-0 mt-0.5">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-bold text-gray-900 text-sm">{diff.title}</h4>
                  <p className="text-gray-500 text-xs leading-relaxed">{diff.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
