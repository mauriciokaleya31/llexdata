import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  FileText, Cpu, Database, Landmark, Globe, GraduationCap, Laptop, 
  BookOpen, Layout, CheckCircle, ArrowLeft, ArrowRight, ShieldCheck, 
  Layers, Hammer, Award, Sparkles, Image as ImageIcon
} from 'lucide-react';
import { Language } from '../types';

interface ServicesProps {
  language: Language;
}

export default function Services({ language }: ServicesProps) {
  const [selectedServiceId, setSelectedServiceId] = useState<string>('gd');

  // Comprehensive Services List as per requested structure
  const servicesList = [
    {
      id: 'gd',
      icon: <FileText className="w-5 h-5" />,
      title: "Gestão Documental",
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
      shortDesc: "Criação visual e produção gráfica profissional: Flyers, Brochuras, Roll-ups e Logótipos.",
      desc: "Gama completa de serviços de design e produção gráfica para apoiar a imagem institucional e corporativa das organizações angolanas.",
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

                {/* Narrative */}
                <div className="space-y-4">
                  <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                    {selectedService.desc}
                  </p>
                </div>

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

                {/* Process Workflow Steps */}
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
