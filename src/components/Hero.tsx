import { motion } from 'motion/react';
import { ArrowRight, ChevronRight, FileCheck, Shield, Users, Database, Globe, Search } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../translations';

interface HeroProps {
  language: Language;
  setActiveTab: (tab: string) => void;
}

export default function Hero({ language, setActiveTab }: HeroProps) {
  const t = translations[language];

  const stats = [
    {
      id: 'stat1',
      icon: <Users className="w-6 h-6 text-brand-blue" />,
      value: "50+",
      label: t.hero.statEmployees,
    },
    {
      id: 'stat2',
      icon: <FileCheck className="w-6 h-6 text-brand-blue" />,
      value: "+7.5M",
      label: t.hero.statPages,
    },
    {
      id: 'stat3',
      icon: <Database className="w-6 h-6 text-brand-blue" />,
      value: "4.5 TB",
      label: t.hero.statData,
    },
    {
      id: 'stat4',
      icon: <Globe className="w-6 h-6 text-brand-blue" />,
      value: "1845",
      label: t.hero.statHistory,
    }
  ];

  return (
    <div className="relative bg-gradient-to-b from-brand-deep/5 via-white to-white pt-28 pb-16 md:py-32 overflow-hidden">
      
      {/* Absolute Decorative Elements */}
      <div className="absolute top-0 right-0 -mr-40 -mt-40 w-96 h-96 rounded-full bg-brand-blue/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-40 -mb-40 w-96 h-96 rounded-full bg-brand-deep/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Text */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6 text-left">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-deep/5 border border-brand-deep/10"
            >
              <Shield className="w-4 h-4 text-brand-deep" />
              <span className="text-xs font-semibold text-brand-deep uppercase tracking-wider">
                {t.hero.badge}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-sans font-bold text-gray-900 leading-tight tracking-tight"
            >
              {language === 'pt' ? (
                <>
                  Eficiência que <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-deep to-brand-blue">Desmaterializa</span> e Protege
                </>
              ) : (
                <>
                  Efficiency that <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-deep to-brand-blue">Dematerializes</span> and Protects
                </>
              )}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg text-gray-600 leading-relaxed max-w-2xl"
            >
              {t.hero.subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            >
              <button
                id="hero-cta-platform"
                onClick={() => setActiveTab('platform')}
                className="bg-brand-deep hover:bg-brand-deep/90 text-white font-medium px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 group"
              >
                <span>{t.hero.ctaPrimary}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                id="hero-cta-contact"
                onClick={() => setActiveTab('contact')}
                className="bg-white hover:bg-gray-50 border border-gray-200 text-gray-800 font-medium px-8 py-4 rounded-xl transition-all flex items-center justify-center gap-2 shadow-sm"
              >
                <span>{t.hero.ctaSecondary}</span>
                <ChevronRight className="w-4 h-4 text-gray-400" />
              </button>
            </motion.div>
          </div>
          {/* Interactive/Illustrated Visual Block */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="w-full max-w-[420px] bg-slate-900 rounded-3xl border border-slate-800 shadow-2xl overflow-hidden text-left"
            >
              {/* Browser Header Bar */}
              <div className="bg-slate-950 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
                <div className="flex gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-red-500/80" />
                  <span className="w-2 h-2 rounded-full bg-yellow-500/80" />
                  <span className="w-2 h-2 rounded-full bg-green-500/80" />
                </div>
                <div className="bg-slate-900 text-[9px] text-slate-400 font-mono px-3 py-0.5 rounded border border-slate-800 truncate max-w-[160px]">
                  jurisnet.lexdata.ao
                </div>
                <div className="w-6" />
              </div>

              {/* Browser Content */}
              <div className="p-5 space-y-3.5">
                {/* Search Bar Mock */}
                <div className="bg-slate-950 border border-slate-800 rounded-xl p-2 flex items-center justify-between text-slate-400 text-[11px]">
                  <div className="flex items-center gap-2">
                    <Search className="w-3 h-3 text-brand-blue" />
                    <span>Pesquisar Diários da República...</span>
                  </div>
                  <span className="text-[8px] font-mono bg-slate-900 border border-slate-800 px-1 py-0.5 rounded text-slate-500">
                    Ctrl+K
                  </span>
                </div>

                {/* Simulated Document Feed */}
                <div className="space-y-2">
                  <div className="p-3 bg-slate-950/40 border border-slate-800/50 rounded-xl flex items-start justify-between gap-3">
                    <div className="space-y-1">
                      <span className="text-[8px] font-mono font-bold text-brand-blue uppercase bg-brand-blue/10 px-1.5 py-0.5 rounded">
                        Decreto Presidencial
                      </span>
                      <h4 className="text-[11px] font-bold text-white leading-tight">Regulamento de Desmaterialização</h4>
                      <p className="text-[9px] text-slate-500">Diário da República I Série, n.º 42</p>
                    </div>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1" />
                  </div>

                  <div className="p-3 bg-slate-950/40 border border-slate-800/50 rounded-xl flex items-start justify-between gap-3">
                    <div className="space-y-1">
                      <span className="text-[8px] font-mono font-bold text-brand-blue uppercase bg-brand-blue/10 px-1.5 py-0.5 rounded">
                        Aviso Oficial
                      </span>
                      <h4 className="text-[11px] font-bold text-white leading-tight">Constituição de Sociedade Pública</h4>
                      <p className="text-[9px] text-slate-500">Diário da República III Série, n.º 12</p>
                    </div>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1" />
                  </div>
                </div>

                {/* Footer status bar */}
                <div className="border-t border-slate-800 pt-3 flex justify-between items-center text-[9px] text-slate-500">
                  <span className="flex items-center gap-1">
                    <Shield className="w-3 h-3 text-brand-blue" />
                    <span>Ligação Oficial Autenticada</span>
                  </span>
                  <span className="font-mono text-emerald-400 font-bold bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/10">
                    SECURE
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Absolute Badges */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute -right-4 bottom-12 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-3"
            >
              <div className="p-2 rounded-lg bg-emerald-50 text-emerald-500">
                <FileCheck className="w-5 h-5" />
              </div>
              <div className="text-left">
                <p className="text-[10px] text-gray-400 uppercase font-bold tracking-wider">ISO Compliant</p>
                <p className="text-xs font-bold text-gray-800">Normalização Total</p>
              </div>
            </motion.div>
          </div>

        </div>

        {/* Stats Grid */}
        <div className="mt-16 sm:mt-24 border-t border-gray-100 pt-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                className="flex flex-col items-center md:items-start text-center md:text-left space-y-2 p-4 rounded-2xl hover:bg-gray-50/50 transition-colors"
              >
                <div className="p-2 bg-brand-blue/10 rounded-xl mb-1">
                  {stat.icon}
                </div>
                <span className="text-3xl font-sans font-extrabold text-brand-deep">
                  {stat.value}
                </span>
                <span className="text-sm text-gray-500 font-medium">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
