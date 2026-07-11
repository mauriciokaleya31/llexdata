/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Language } from './types';
import Header from './components/Header';
import Home from './components/Home';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Platform from './components/Platform';
import Projects from './components/Projects';
import Contact from './components/Contact';
import AuthPage from './components/AuthPage';
import Footer from './components/Footer';
import TechFloatingBackground from './components/TechFloatingBackground';
import { translations } from './translations';
import { ArrowRight, CheckCircle, Database, Cpu, ShieldAlert, Award, ArrowUp, MessageCircle } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [language, setLanguage] = useState<Language>('pt');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 1800; // 1.8 seconds loading progress
    const intervalTime = 15;
    const step = 100 / (duration / intervalTime);
    
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return Math.min(prev + step, 100);
      });
    }, intervalTime);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, duration + 400); // Give small breathing room for 100% and fade out

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isLoading]);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const t = translations[language];

  // Quick page dispatcher
  const renderActivePage = () => {
    switch (activeTab) {
      case 'home':
        return <Home language={language} setActiveTab={setActiveTab} />;
      case 'about':
        return <About language={language} />;
      case 'services':
        return <Services language={language} />;
      case 'platform':
        return <Platform language={language} />;
      case 'projects':
        return <Projects language={language} />;
      case 'contact':
        return <Contact language={language} />;
      case 'auth':
        return <AuthPage language={language} />;
      default:
        return <Hero language={language} setActiveTab={setActiveTab} />;
    }
  };

  return (
    <>
      {/* Animated Entry Splash Screen with Logo */}
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ 
              opacity: 0,
              scale: 1.05,
              filter: "blur(8px)",
              transition: { duration: 0.65, ease: [0.43, 0.13, 0.23, 0.96] } 
            }}
            className="fixed inset-0 z-[9999] bg-slate-950 flex flex-col items-center justify-center p-6 text-white overflow-hidden select-none"
          >
            {/* Elegant radial mesh gradient */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.12)_0%,transparent_70%)]" />
            
            {/* Ambient framing lines or overlays */}
            <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-slate-950 to-transparent opacity-60" />
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-950 to-transparent opacity-60" />

            <div className="relative z-10 flex flex-col items-center max-w-sm w-full text-center">
              {/* Logo Container with core background pulse */}
              <motion.div
                initial={{ scale: 0.82, opacity: 0, y: 15 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.85, 
                  ease: [0.16, 1, 0.3, 1] 
                }}
                className="relative mb-6"
              >
                {/* Glowing aura behind logo */}
                <motion.div 
                  animate={{ 
                    scale: [1, 1.12, 1],
                    opacity: [0.15, 0.35, 0.15]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute inset-0 -m-6 bg-blue-500/10 blur-3xl rounded-full"
                />
                <img 
                  src="https://visa.onlyvibes.online/wp-content/uploads/2026/07/logo-7.png" 
                  alt="LEXDATA Logo" 
                  className="h-20 md:h-24 w-auto object-contain relative z-10 drop-shadow-[0_4px_25px_rgba(59,130,246,0.15)]"
                  referrerPolicy="no-referrer"
                />
              </motion.div>

              {/* Tagline */}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.65 }}
                className="space-y-2 mb-8"
              >
                <h2 className="text-xl md:text-2xl font-bold tracking-[0.25em] text-white">
                  LEXDATA
                </h2>
                <p className="text-[10px] md:text-xs font-semibold tracking-widest text-slate-400 max-w-xs uppercase leading-relaxed">
                  {language === 'pt' 
                    ? 'Inteligência Jurídica & Desmaterialização' 
                    : 'Legal Intelligence & Dematerialization'}
                </p>
              </motion.div>

              {/* Progress Bar & Percent Counter */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.55, duration: 0.5 }}
                className="w-full space-y-3 px-4"
              >
                <div className="h-[2px] w-full bg-white/10 rounded-full overflow-hidden relative">
                  <motion.div 
                    className="h-full bg-gradient-to-r from-blue-500 via-sky-400 to-indigo-500 rounded-full"
                    style={{ width: `${progress}%` }}
                    transition={{ ease: "easeOut" }}
                  />
                </div>

                <div className="flex justify-between items-center text-[9px] font-mono tracking-[0.18em] text-slate-500 uppercase">
                  <span>{language === 'pt' ? 'A inicializar...' : 'Initializing...'}</span>
                  <span className="font-bold text-slate-300">{Math.round(progress)}%</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="min-h-screen bg-white flex flex-col font-sans select-none antialiased relative overflow-hidden">
        {/* Global tech floating background animation */}
        <TechFloatingBackground />

        {/* Header component */}
        <Header 
          activeTab={activeTab} 
          setActiveTab={setActiveTab} 
          language={language} 
          setLanguage={setLanguage} 
        />

        {/* Main content viewport with fade-in and sliding animations */}
        <main className="flex-grow">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
            >
              {renderActivePage()}
            </motion.div>
          </AnimatePresence>
        </main>

        {/* Footer component */}
        <Footer 
          language={language} 
          setActiveTab={setActiveTab} 
        />

        {/* Floating Widgets */}
        <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
          {/* WhatsApp Button */}
          <a
            href="https://wa.me/244923456789"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#25D366] hover:bg-[#20ba5a] text-white p-3.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center relative group cursor-pointer"
            title={language === 'pt' ? 'Fale Connosco no WhatsApp' : 'Chat with us on WhatsApp'}
          >
            <span className="absolute right-full mr-3 bg-slate-900 text-white text-xs font-semibold py-1.5 px-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap shadow-md">
              {language === 'pt' ? 'Suporte WhatsApp' : 'WhatsApp Support'}
            </span>
            <MessageCircle className="w-6 h-6" />
          </a>

          {/* Scroll To Top Button */}
          <AnimatePresence>
            {showScrollTop && (
              <motion.button
                initial={{ opacity: 0, scale: 0.8, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 10 }}
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="bg-brand-blue hover:bg-brand-blue/90 text-white p-3.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center cursor-pointer group"
                title={language === 'pt' ? 'Voltar ao Topo' : 'Scroll to Top'}
              >
                <span className="absolute right-full mr-3 bg-slate-900 text-white text-xs font-semibold py-1.5 px-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap shadow-md">
                  {language === 'pt' ? 'Voltar ao Topo' : 'Scroll to Top'}
                </span>
                <ArrowUp className="w-5 h-5" />
              </motion.button>
            )}
          </AnimatePresence>
        </div>
      </div>
    </>
  );
}

