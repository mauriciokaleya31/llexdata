import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Cpu, Database, Landmark, Laptop, CheckCircle, ShieldCheck, 
  Search, GitMerge, Lock, Network, Maximize, Server, HelpCircle,
  FileCheck, Sparkles, Terminal, Activity, ChevronRight
} from 'lucide-react';
import { Language } from '../types';

interface PlatformProps {
  language: Language;
}

export default function Platform({ language }: PlatformProps) {
  const [activePlatform, setActivePlatform] = useState<string>('csp');

  const platformsData = {
    csp: {
      name: "Content Services Platform (CSP)",
      subtitle: "A Solução Definitiva para a Transição Digital de Organizações Modernas",
      description: "A nossa Plataforma CSP é uma solução de gestão documental de última geração baseada numa arquitetura altamente robusta de Microserviços. Desenvolvida para capturar, estruturar, gerir e automatizar toda a informação não estruturada de grandes organizações (como correspondência, faturas, relatórios de engenharia e emails), a plataforma garante integridade de dados e total interoperabilidade.",
      benefits: [
        "Acesso imediato à informação a partir de qualquer dispositivo autorizado.",
        "Redução do tempo médio de processamento de tarefas em até 70%.",
        "Armazenamento híbrido seguro com criptografia AES de ponta a ponta.",
        "Facilidade de integração com ERPs e bases de dados legadas existentes."
      ],
      characteristics: [
        { name: "Captura Documental", desc: "Digitalização e importação inteligente integradas com motores OCR avançados para classificação inicial automática." },
        { name: "Gestão Documental", desc: "Organização centralizada de arquivos em pastas lógicas, catalogação sistemática de metadados e controlo estrito de versões." },
        { name: "Workflow Avançado", desc: "Desenho dinâmico de circuitos de circulação eletrónica, autorização e aprovação de minutas com alertas automáticos." },
        { name: "Pesquisa Inteligente", desc: "Motor de busca potente com suporte para pesquisa fonética, por palavras-chave, filtros cronológicos e metadados cruzados." },
        { name: "Indexação Sistemática", desc: "Uniformização e normalização de termos de classificação, garantindo a extração precisa de dados em cada carregamento." },
        { name: "Segurança de Informação", desc: "Perfis rígidos de permissões (Língua, Departamento, Grupo), cifra de dados em repouso e trilho completo de auditoria." },
        { name: "Microserviços & Cloud", desc: "Desenvolvida sobre contentores independentes que facilitam escalabilidade horizontal sem tempos de paragem." },
        { name: "Escalabilidade Máxima", desc: "Arquitetura dimensionada para suportar de dezenas a milhões de documentos e transações em simultâneo." },
        { name: "Total Flexibilidade", desc: "Interface web de alta usabilidade totalmente adaptada às necessidades operacionais de equipas ágeis." }
      ]
    },
    jurisnet: {
      name: "Portal JURISNET",
      subtitle: "A Maior Base de Dados de Legislação Angolana Online",
      description: "A LEXDATA é responsável pelo desenvolvimento, manutenção, atualização e indexação de toda a legislação de Angola disponibilizada no Portal JURISNET. Uma solução avançada de pesquisa semântica que indexa, cataloga e disponibiliza Diários da República das Séries I, II e III de forma oficial.",
      benefits: [
        "Consulta imediata de diplomas legais publicados desde o ano de 1845 até ao presente.",
        "Enquadramento jurídico temático rigoroso executado por juristas seniores especializados.",
        "Atualizações diárias em tempo real após cada publicação oficial no Diário da República."
      ],
      characteristics: [
        { name: "Diários de 1845 ao Presente", desc: "Digitalização de altíssima fidelidade de tomos históricos angolanos e legislação colonial/moderna." },
        { name: "Classificação Jurídica", desc: "Normalização terminológica sistemática, remissões de diplomas revogados ou alterados e sumários executivos." },
        { name: "Acesso Geral e Institucional", desc: "Subscrições personalizadas para ministérios, tribunais de comarca, advogados e cidadãos angolanos." },
        { name: "Motor de Pesquisa Semântico", desc: "Deteção inteligente de conceitos jurídicos semelhantes (Ex: 'Imposto de Selo' correlacionado com 'Finanças')." }
      ]
    },
    sippo: {
      name: "SIPPO",
      subtitle: "Sistema Integrado de Produção de Publicações Oficiais",
      description: "O SIPPO é a plataforma tecnológica proprietária desenvolvida para gerir o ciclo interno de edição, revisão normativa, paginação e publicação de jornais e boletins oficiais de Angola. Ele atua como o motor nos bastidores que alimenta a distribuição física e digital dos Diários da República.",
      benefits: [
        "Eliminação total de erros de inserção, revisão ou numeração na produção oficial.",
        "Integração nativa com os gabinetes de revisão da Imprensa Nacional E.P.",
        "Workflow de submissão digital à prova de falhas com assinatura eletrónica de diplomas."
      ],
      characteristics: [
        { name: "Tramitação Eletrónica", desc: "Submissão, enquadramento preliminar e paginação automatizada de decretos presidenciais e portarias." },
        { name: "Garantia de Confidencialidade", desc: "Proteção máxima de diplomas pendentes com chaves criptográficas exclusivas e servidores locais isolados." },
        { name: "Anotação de Alterações", desc: "Comparador eletrónico de alterações normativas para analistas jurídicos de redação oficial." }
      ]
    },
    portalIn: {
      name: "Portal IN",
      subtitle: "Interface de Serviços Digitais da Imprensa Nacional E.P.",
      description: "O Portal IN é o canal oficial de contacto eletrónico desenvolvido para a Imprensa Nacional E.P. Permite a cidadãos, empresas e ministérios a submissão online de anúncios legais, consulta rápida de orçamentos de publicações, subscrições digitais anuais e verificação de autenticidade de documentos estatais.",
      benefits: [
        "Desmaterialização de pedidos físicos de publicação no Diário da República.",
        "Atendimento disponível 24 horas por dia, 7 dias por semana, sem deslocações físicas.",
        "Redução do tempo médio de publicação de anúncios comerciais para menos de 48 horas."
      ],
      characteristics: [
        { name: "Submissão de Anúncios", desc: "Upload eletrónico de atas de constituição comercial e sentenças com cálculo imediato do custo de publicação." },
        { name: "Consulta de Orçamentos", desc: "Simulação transparente e automatizada de serviços gráficos e edições legislativas." },
        { name: "Arquivo Digital", desc: "Consulta a publicações pretéritas arquivadas de forma organizada e cronológica." }
      ]
    }
  };

  const currentPlatform = platformsData[activePlatform as keyof typeof platformsData] || platformsData.csp;

  return (
    <div className="bg-white text-left">
      {/* Banner Section with Background Image */}
      <div className="relative h-[240px] sm:h-[300px] bg-brand-deep flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop" 
            alt="Platform Banner" 
            className="w-full h-full object-cover opacity-30" 
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-deep via-brand-deep/85 to-transparent" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full mt-8">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 bg-brand-blue transform rotate-45" />
            <span className="text-xs uppercase font-mono font-bold tracking-widest text-brand-blue">
              {language === 'pt' ? 'TECNOLOGIA & PLATAFORMAS' : 'TECH PLATFORMS'}
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            {language === 'pt' ? "Produto" : "Product"}
          </h1>
          <p className="text-gray-300 text-xs sm:text-sm mt-2 max-w-xl">
            {language === 'pt' 
              ? "Plataformas digitais robustas desenvolvidas para desmaterialização de processos e publicação oficial." 
              : "Robust digital platforms developed for process dematerialization and official publication."}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        
        {/* Page Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-blue/10 text-brand-blue text-xs font-bold uppercase tracking-wider">
            <Cpu className="w-3.5 h-3.5" />
            <span>{language === 'pt' ? 'Inovação Tecnológica' : 'Tech Platforms'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-deep tracking-tight">
            {language === 'pt' ? "Plataformas Tecnológicas Oficiais" : "Official Technological Platforms"}
          </h2>
          <p className="text-gray-500 text-sm">
            Produtos digitais desenvolvidos e mantidos pela LEXDATA para o Estado e grandes empresas angolanas.
          </p>
          <div className="w-20 h-1.5 bg-brand-blue mx-auto mt-4 rounded-full" />
        </div>

        {/* Switch Buttons */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 bg-gray-50 p-3 rounded-2xl border border-gray-100 shadow-sm">
          {[
            { id: 'csp', name: 'Plataforma CSP', tag: 'CSP' },
            { id: 'jurisnet', name: 'Portal JURISNET', tag: 'JURISNET' },
            { id: 'sippo', name: 'SIPPO', tag: 'SIPPO' },
            { id: 'portalIn', name: 'Portal IN', tag: 'PORTAL IN' }
          ].map((btn) => (
            <button
              key={btn.id}
              onClick={() => setActivePlatform(btn.id)}
              className={`py-3 px-4 rounded-xl text-xs sm:text-sm font-bold tracking-tight transition-all cursor-pointer ${
                activePlatform === btn.id 
                  ? 'bg-brand-deep text-white shadow-md' 
                  : 'text-gray-600 hover:text-brand-deep hover:bg-white'
              }`}
            >
              {btn.name}
            </button>
          ))}
        </div>

        {/* Display Current Platform Details */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activePlatform}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start"
          >
            {/* Left Narrative Sub-Page */}
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-2">
                <span className="text-[10px] font-mono tracking-widest uppercase text-brand-blue bg-brand-blue/10 px-2.5 py-1 rounded-full font-bold">
                  {currentPlatform.name}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-brand-deep">
                  {currentPlatform.subtitle}
                </h3>
              </div>

              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                {currentPlatform.description}
              </p>

              {/* Benefits Box */}
              <div className="p-6 bg-brand-deep/5 border border-brand-deep/10 rounded-2xl space-y-4">
                <h4 className="font-extrabold text-brand-deep text-sm flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-brand-blue" />
                  Benefícios Operacionais e Financeiros
                </h4>
                <ul className="space-y-3">
                  {currentPlatform.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex gap-2.5 text-xs text-gray-600 leading-relaxed items-start">
                      <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Characteristics Grid */}
              <div className="space-y-4">
                <h4 className="font-extrabold text-gray-900 text-sm flex items-center gap-2">
                  <Network className="w-4.5 h-4.5 text-brand-blue" />
                  Características Técnicas Principais
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {currentPlatform.characteristics.map((char, idx) => (
                    <div key={idx} className="p-4 border border-gray-100 rounded-xl bg-white hover:shadow-md transition-shadow">
                      <h5 className="font-bold text-gray-800 text-xs flex items-center gap-1.5">
                        <CheckCircle className="w-3.5 h-3.5 text-brand-blue shrink-0" />
                        {char.name}
                      </h5>
                      <p className="text-[11px] text-gray-500 mt-1 leading-normal">{char.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Tech Screen Simulator / Mockup */}
            <div className="lg:col-span-5">
              <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-2xl relative overflow-hidden text-left text-white space-y-6">
                {/* Visual watermark */}
                <div className="absolute top-0 right-0 -mr-12 -mt-12 w-32 h-32 bg-brand-blue/15 rounded-full blur-xl pointer-events-none" />
                
                {/* Mockup Header */}
                <div className="flex justify-between items-center pb-4 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-brand-blue animate-pulse" />
                    <span className="font-sans text-xs font-bold text-slate-300 uppercase tracking-wider">
                      Painel de Gestão Digital
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/15 uppercase font-bold">
                    Ativo
                  </span>
                </div>

                {/* Dashboard Metrics based on active tab */}
                <div className="space-y-4">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Métricas em Tempo Real</h4>
                  
                  {activePlatform === 'csp' && (
                    <div className="space-y-3">
                      <div className="p-3 bg-slate-950/50 border border-slate-800 rounded-xl flex items-center justify-between">
                        <span className="text-xs text-slate-400">Total de Documentos</span>
                        <span className="text-sm font-extrabold text-brand-blue">7.500.000+</span>
                      </div>
                      <div className="p-3 bg-slate-950/50 border border-slate-800 rounded-xl flex items-center justify-between">
                        <span className="text-xs text-slate-400">Volume Armazenado</span>
                        <span className="text-sm font-extrabold text-white">4.5 TB</span>
                      </div>
                      <div className="p-3 bg-slate-950/50 border border-slate-800 rounded-xl flex items-center justify-between">
                        <span className="text-xs text-slate-400">Utilizadores do Estado</span>
                        <span className="text-sm font-extrabold text-white">1.200+</span>
                      </div>
                    </div>
                  )}

                  {activePlatform === 'jurisnet' && (
                    <div className="space-y-3">
                      <div className="p-3 bg-slate-950/50 border border-slate-800 rounded-xl flex items-center justify-between">
                        <span className="text-xs text-slate-400">Diplomas Indexados</span>
                        <span className="text-sm font-extrabold text-brand-blue">120.400+</span>
                      </div>
                      <div className="p-3 bg-slate-950/50 border border-slate-800 rounded-xl flex items-center justify-between">
                        <span className="text-xs text-slate-400">Pesquisas por Mês</span>
                        <span className="text-sm font-extrabold text-white">240.000+</span>
                      </div>
                      <div className="p-3 bg-slate-950/50 border border-slate-800 rounded-xl flex items-center justify-between">
                        <span className="text-xs text-slate-400">Profundidade de Pesquisa</span>
                        <span className="text-sm font-extrabold text-white">Desde 1845</span>
                      </div>
                    </div>
                  )}

                  {activePlatform === 'sippo' && (
                    <div className="space-y-3">
                      <div className="p-3 bg-slate-950/50 border border-slate-800 rounded-xl flex items-center justify-between">
                        <span className="text-xs text-slate-400">Diplomas Publicados</span>
                        <span className="text-sm font-extrabold text-brand-blue">18.400+</span>
                      </div>
                      <div className="p-3 bg-slate-950/50 border border-slate-800 rounded-xl flex items-center justify-between">
                        <span className="text-xs text-slate-400">Auditoria Automatizada</span>
                        <span className="text-sm font-extrabold text-white">100% Segura</span>
                      </div>
                      <div className="p-3 bg-slate-950/50 border border-slate-800 rounded-xl flex items-center justify-between">
                        <span className="text-xs text-slate-400">Taxa de Erro Humano</span>
                        <span className="text-sm font-extrabold text-emerald-400 font-mono">0.0%</span>
                      </div>
                    </div>
                  )}

                  {activePlatform === 'portalIn' && (
                    <div className="space-y-3">
                      <div className="p-3 bg-slate-950/50 border border-slate-800 rounded-xl flex items-center justify-between">
                        <span className="text-xs text-slate-400">Pedidos Submetidos</span>
                        <span className="text-sm font-extrabold text-brand-blue">45.000+</span>
                      </div>
                      <div className="p-3 bg-slate-950/50 border border-slate-800 rounded-xl flex items-center justify-between">
                        <span className="text-xs text-slate-400">Tempo de Resposta</span>
                        <span className="text-sm font-extrabold text-white">&lt; 48 Horas</span>
                      </div>
                      <div className="p-3 bg-slate-950/50 border border-slate-800 rounded-xl flex items-center justify-between">
                        <span className="text-xs text-slate-400">Anúncios Publicados</span>
                        <span className="text-sm font-extrabold text-white">Atas e Balanços</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Info Card Footer */}
                <div className="p-4 bg-slate-950 rounded-2xl border border-slate-800 flex items-center gap-3">
                  <div className="p-2 bg-brand-blue/10 rounded-lg text-brand-blue">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-white">Segurança Certificada</h5>
                    <p className="text-[10px] text-slate-500">Criptografia AES-256 e redundância na nuvem.</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800 flex justify-between items-center text-[10px] text-slate-500 font-mono">
                  <span>SSL ATIVO</span>
                  <span>PRESERVAÇÃO DO ESTADO</span>
                </div>
              </div>
            </div>

          </motion.div>
        </AnimatePresence>

      </div>
    </div>
  );
}
