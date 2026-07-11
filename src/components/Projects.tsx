import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Briefcase, Database, Landmark, Laptop, Award, ShieldAlert,
  ChevronRight, ArrowUpRight, HelpCircle, FileCheck, CheckCircle
} from 'lucide-react';
import { Language } from '../types';

interface ProjectsProps {
  language: Language;
}

export default function Projects({ language }: ProjectsProps) {
  const [filter, setFilter] = useState<string>('all');

  const projects = [
    {
      id: "petroleo",
      category: "private",
      title: "Digitalização do Sector Petrolífero",
      client: "Consórcio Petrolífero Nacional & Parceiros",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=600&auto=format&fit=crop",
      desc: "Desmaterialização integral de todo o acervo físico referente aos documentos Técnicos de Exploração Petrolífera e Geologia de Angola.",
      stats: "+7.5M Páginas Digitalizadas",
      details: [
        "Digitalização de desenhos técnicos de geologia de grande formato.",
        "Tratamento de dados estruturados com encriptação de grau militar.",
        "Indexação de precisão total com pesquisa semântica por bloco geográfico."
      ]
    },
    {
      id: "minjusdh",
      category: "public",
      title: "Plataforma MINJUSDH",
      client: "Ministério da Justiça e Direitos Humanos",
      image: "https://images.unsplash.com/photo-1450133064473-71024230f91b?q=80&w=600&auto=format&fit=crop",
      desc: "Modernização tecnológica e criação de repositórios digitais centralizados para o arquivo histórico do Ministério.",
      stats: "Integração Governamental",
      details: [
        "Preservação digital de livros de registo civil e certidões históricas.",
        "Desenho de perfis de segurança para proteção contra fugas de dados.",
        "Implementação de indexação cronológica precisa."
      ]
    },
    {
      id: "eol",
      category: "public",
      title: "Plataforma Empresas Online",
      client: "Directório de Sociedades Comerciais",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop",
      desc: "Desenvolvimento de portais de submissão e consulta célere para desmaterializar os processos de constituição de novas empresas em Angola.",
      stats: "Automatização de Registos",
      details: [
        "Consulta imediata de registos comerciais online em menos de 10 segundos.",
        "Workflows integrados com a Conservatória de Registo Comercial.",
        "Submissão eletrónica de certidões e pagamentos integrados."
      ]
    },
    {
      id: "jurisnet",
      category: "legal",
      title: "Portal JURISNET",
      client: "Imprensa Nacional - E.P.",
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=600&auto=format&fit=crop",
      desc: "Sistematização de toda a legislação angolana oficialmente publicada de 1845 até ao presente, cobrindo os Diários da República das Séries I, II e III.",
      stats: "Bases de Dados Histórica",
      details: [
        "Mais de 25.000 diplomas legais categorizados e comentados.",
        "Motor de pesquisa semântica completo disponível para toda a comunidade jurídica.",
        "Atualizações em menos de 12 horas após publicação oficial."
      ]
    },
    {
      id: "sippo",
      category: "legal",
      title: "SIPPO",
      client: "Imprensa Nacional - E.P.",
      image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=600&auto=format&fit=crop",
      desc: "Desenvolvimento e sustentação do Sistema Integrado de Produção de Publicações Oficiais, regulando a redação e paginação normativa.",
      stats: "Segurança de Redação",
      details: [
        "Integração de assinaturas eletrónicas qualificadas estatais.",
        "Workflow de submissão rápida sem necessidade de papel físico.",
        "Auditoria de alterações em diplomas normativos."
      ]
    },
    {
      id: "portalin",
      category: "legal",
      title: "Portal IN",
      client: "Imprensa Nacional - E.P.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=600&auto=format&fit=crop",
      desc: "Portal oficial de serviços digitais que permite submissão eletrónica célere de anúncios legais para publicação nos Diários da República.",
      stats: "Submissão Digital Célere",
      details: [
        "Faturação eletrónica imediata baseada no número de caracteres.",
        "Acompanhamento online do status da publicação em tempo real.",
        "Repositório eletrónico de anúncios de acesso livre ao cidadão."
      ]
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <div className="bg-gray-50 text-left">
      {/* Banner Section with Background Image */}
      <div className="relative h-[240px] sm:h-[300px] bg-brand-deep flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1600&auto=format&fit=crop" 
            alt="Projects Banner" 
            className="w-full h-full object-cover opacity-30" 
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-deep via-brand-deep/85 to-transparent" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full mt-8">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 bg-brand-blue transform rotate-45" />
            <span className="text-xs uppercase font-mono font-bold tracking-widest text-brand-blue">
              {language === 'pt' ? 'PROJETOS DE REFERÊNCIA' : 'REFERENCE PROJECTS'}
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            {language === 'pt' ? "Projetos" : "Projects"}
          </h1>
          <p className="text-gray-300 text-xs sm:text-sm mt-2 max-w-xl">
            {language === 'pt' 
              ? "Trabalhos de grande escala realizados para o sector público e privado angolano." 
              : "Large-scale works delivered for public and private Angolan sectors."}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        
        {/* Page Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-blue/10 text-brand-blue text-xs font-bold uppercase tracking-wider">
            <Briefcase className="w-3.5 h-3.5" />
            <span>{language === 'pt' ? 'Portfólio de Projetos' : 'Our Projects'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-deep tracking-tight">
            {language === 'pt' ? "Estudos de Caso e Projetos Realizados" : "Our Completed Projects"}
          </h2>
          <p className="text-gray-500 text-sm">
            Eficácia operacional provada nas maiores bases de dados e arquivos de Angola.
          </p>
          <div className="w-20 h-1.5 bg-brand-blue mx-auto mt-4 rounded-full" />
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-3 mb-12 flex-wrap">
          {[
            { id: 'all', label: language === 'pt' ? 'Todos os Projetos' : 'All Projects' },
            { id: 'public', label: language === 'pt' ? 'Setor Público / Governamental' : 'Governmental' },
            { id: 'private', label: language === 'pt' ? 'Sector Petrolífero / Privado' : 'Oil & Private' },
            { id: 'legal', label: language === 'pt' ? 'Legislação & Diários' : 'Legislation' }
          ].map(btn => (
            <button
              key={btn.id}
              onClick={() => setFilter(btn.id)}
              className={`py-2.5 px-5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                filter === btn.id 
                  ? 'bg-brand-deep text-white shadow-md' 
                  : 'bg-white border border-gray-200 text-gray-600 hover:text-brand-deep hover:bg-gray-50'
              }`}
            >
              {btn.label}
            </button>
          ))}
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl border border-gray-150 overflow-hidden shadow-sm hover:shadow-xl transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="relative">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-3 left-3 bg-brand-deep/90 text-white font-mono text-[9px] uppercase tracking-wider font-bold py-1 px-3 rounded-full backdrop-blur-sm">
                      {project.stats}
                    </div>
                  </div>
                  
                  <div className="p-6 space-y-4">
                    <div className="space-y-1">
                      <p className="text-[10px] font-mono font-bold text-brand-blue uppercase tracking-widest">{project.client}</p>
                      <h4 className="font-extrabold text-gray-900 text-lg leading-tight">{project.title}</h4>
                    </div>
                    
                    <p className="text-gray-500 text-xs leading-relaxed">
                      {project.desc}
                    </p>

                    <div className="space-y-2.5 pt-2 border-t border-gray-100">
                      <h5 className="text-[10px] font-mono uppercase font-bold text-gray-400">Resultados & Funcionalidades:</h5>
                      <ul className="space-y-1.5">
                        {project.details.map((detail, idx) => (
                          <li key={idx} className="flex gap-2 text-xs text-gray-600 leading-normal items-start">
                            <CheckCircle className="w-3.5 h-3.5 text-brand-blue mt-0.5 shrink-0" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-4 mt-4 border-t border-gray-100 bg-gray-50/40">
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-sans font-bold text-gray-400 text-[10px] uppercase tracking-wider">
                      {project.category === 'private' ? 'Sector Privado' : project.category === 'public' ? 'Sector Público' : 'Legislação Oficial'}
                    </span>
                    <span className="text-brand-deep font-extrabold flex items-center gap-0.5 hover:text-brand-blue transition-colors cursor-pointer">
                      <span>Ver Caso de Estudo</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
}
