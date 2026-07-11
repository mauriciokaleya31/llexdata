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
import { translations } from './translations';
import { ArrowRight, CheckCircle, Database, Cpu, ShieldAlert, Award, ArrowUp, MessageCircle } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [language, setLanguage] = useState<Language>('pt');
  const [showScrollTop, setShowScrollTop] = useState(false);

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
    <div className="min-h-screen bg-white flex flex-col font-sans select-none antialiased">
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
          <span className="absolute inset-0 rounded-full bg-[#25D366]/40 animate-ping" />
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
  );
}

