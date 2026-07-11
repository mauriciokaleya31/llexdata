import React, { useState, useEffect } from 'react';
import { Menu, X, Languages, ArrowUpRight, ChevronDown, Building2, Globe, Mail, Clock, Facebook, Linkedin, Instagram } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { Language } from '../types';
import { translations } from '../translations';

export const LANGUAGES_LIST = [
  { code: 'pt', name: 'Português', flag: '🇵🇹', label: 'Português' },
  { code: 'en', name: 'English', flag: '🇬🇧', label: 'English' },
  { code: 'es', name: 'Español', flag: '🇪🇸', label: 'Español' },
  { code: 'fr', name: 'Français', flag: '🇫🇷', label: 'Français' },
  { code: 'zh', name: '中文', flag: '🇨🇳', label: '中文' },
  { code: 'hi', name: 'हिन्दी', flag: '🇮🇳', label: 'हिन्दी' },
  { code: 'ar', name: 'العربية', flag: '🇸🇦', label: 'العربية' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪', label: 'Deutsch' },
  { code: 'ru', name: 'Русский', flag: '🇷🇺', label: 'Русский' },
  { code: 'it', name: 'Italiano', flag: '🇮🇹', label: 'Italiano' }
];

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  language: Language;
  setLanguage: (lang: Language) => void;
}

export default function Header({ activeTab, setActiveTab, language, setLanguage }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [showLangDropdown, setShowLangDropdown] = useState(false);
  const [showLangDropdownMobile, setShowLangDropdownMobile] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 15) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const t = translations[language];

  const menuItems = [
    { id: 'home', label: t.nav.home },
    { id: 'about', label: t.nav.about },
    { id: 'services', label: t.nav.services },
    { id: 'platform', label: t.nav.platform },
    { id: 'projects', label: t.nav.projects },
    { id: 'contact', label: t.nav.contact }
  ];

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    setIsOpen(false);
    setShowLangDropdown(false);
    setShowLangDropdownMobile(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLanguageSelect = (code: Language) => {
    setLanguage(code);
    setShowLangDropdown(false);
    setShowLangDropdownMobile(false);
  };

  return (
    <header className={`fixed left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
      isScrolled 
        ? 'top-2 md:top-4 px-4 sm:px-6 lg:px-8' 
        : 'top-0 px-0'
    }`}>
      <div className={`mx-auto max-w-7xl transition-all duration-500 ease-in-out ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-xl border border-slate-200/50 shadow-[0_12px_40px_rgba(0,0,0,0.06)] rounded-3xl px-5 md:px-8' 
          : 'bg-slate-950/20 backdrop-blur-md border-b border-white/10 px-4 sm:px-6 lg:px-8'
      }`}>
        {/* Top Utility Bar (collapses smoothly on scroll) */}
        <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isScrolled 
            ? 'max-h-0 opacity-0 pointer-events-none border-b-0 py-0 border-transparent' 
            : 'max-h-12 opacity-100 border-b border-white/10 py-2'
        }`}>
          <div className={`flex justify-between items-center text-[11px] font-semibold font-sans transition-colors duration-500 ${
            isScrolled ? 'text-slate-500' : 'text-slate-300'
          }`}>
            {/* Left side: Support Email & Business Hours */}
            <div className="flex items-center gap-5">
              <a 
                href="mailto:suporte@lexdata.ao" 
                className="flex items-center gap-1.5 hover:text-brand-blue transition-colors duration-200"
              >
                <Mail className="w-3.5 h-3.5 text-brand-blue" />
                <span>suporte@lexdata.ao</span>
              </a>
              <div className={`hidden sm:flex items-center gap-1.5 border-l pl-5 transition-colors duration-500 ${
                isScrolled ? 'border-slate-200' : 'border-white/10'
              }`}>
                <Clock className="w-3.5 h-3.5 text-brand-blue" />
                <span>
                  {language === 'pt' ? 'Seg - Sex: 8h - 17h' : 'Mon - Fri: 8 AM - 5 PM'}
                </span>
              </div>
            </div>

            {/* Right side: Social Media Icons */}
            <div className="flex items-center gap-3">
              <span className={`hidden md:inline text-[9px] uppercase tracking-widest font-bold transition-colors duration-500 ${
                isScrolled ? 'text-slate-400' : 'text-slate-400'
              }`}>
                {language === 'pt' ? 'Siga-nos:' : 'Follow Us:'}
              </span>
              <div className="flex items-center gap-1.5">
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={`p-1.5 rounded-lg transition-all duration-200 ${
                    isScrolled 
                      ? 'text-slate-400 hover:text-brand-blue hover:bg-slate-50' 
                      : 'text-slate-300 hover:text-brand-blue hover:bg-white/10'
                  }`}
                  aria-label="Facebook"
                >
                  <Facebook className="w-3.5 h-3.5" />
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={`p-1.5 rounded-lg transition-all duration-200 ${
                    isScrolled 
                      ? 'text-slate-400 hover:text-brand-blue hover:bg-slate-50' 
                      : 'text-slate-300 hover:text-brand-blue hover:bg-white/10'
                  }`}
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                </a>
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={`p-1.5 rounded-lg transition-all duration-200 ${
                    isScrolled 
                      ? 'text-slate-400 hover:text-brand-blue hover:bg-slate-50' 
                      : 'text-slate-300 hover:text-brand-blue hover:bg-white/10'
                  }`}
                  aria-label="Instagram"
                >
                  <Instagram className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className={`flex justify-between items-center transition-all duration-500 ${
          isScrolled ? 'h-16' : 'h-22'
        }`}>
          
          {/* Logo Section */}
          <div 
            className="flex-shrink-0 flex items-center cursor-pointer transition-transform duration-300 hover:scale-[1.03]" 
            onClick={() => handleNavClick('home')}
          >
            <img 
              src="https://visa.onlyvibes.online/wp-content/uploads/2026/07/logo-7.png" 
              alt="LEXDATA Logo" 
              className={`object-contain transition-all duration-500 ${
                isScrolled ? 'h-11' : 'h-15'
              }`}
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-1.5">
            {menuItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-btn-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold tracking-wider uppercase transition-all duration-300 relative font-sans ${
                    isActive 
                      ? (isScrolled ? 'text-brand-deep bg-slate-100/60' : 'text-white bg-white/10') 
                      : (isScrolled ? 'text-slate-600 hover:text-brand-deep hover:bg-slate-50/75' : 'text-slate-200 hover:text-white hover:bg-white/5')
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.span 
                      layoutId="activeHeaderTab"
                      className="absolute bottom-1.5 left-4 right-4 h-[2px] bg-brand-blue rounded-full" 
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Utility Buttons */}
          <div className="hidden md:flex items-center gap-3 lg:gap-4">
            {/* Language Dropdown Desktop */}
            <div className="relative">
              <button
                id="lang-selector-desktop"
                onClick={() => setShowLangDropdown(!showLangDropdown)}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  isScrolled 
                    ? 'border-gray-200/80 text-gray-700 bg-white/90 hover:border-brand-blue hover:text-brand-blue hover:shadow-sm' 
                    : 'border-white/20 text-slate-200 bg-white/5 hover:bg-white/10 hover:border-white/40 hover:text-white'
                }`}
              >
                <Globe className="w-3.5 h-3.5 text-brand-blue animate-pulse" />
                <span>
                  {LANGUAGES_LIST.find(l => l.code === language)?.flag}{' '}
                  {LANGUAGES_LIST.find(l => l.code === language)?.code}
                </span>
                <ChevronDown className="w-3 h-3 text-gray-400 transition-transform duration-300 group-hover:rotate-180" />
              </button>

              <AnimatePresence>
                {showLangDropdown && (
                  <>
                    <div 
                      className="fixed inset-0 z-10" 
                      onClick={() => setShowLangDropdown(false)} 
                    />
                    <motion.div
                      initial={{ opacity: 0, y: 15, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 15, scale: 0.95 }}
                      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                      className="absolute right-0 mt-3 w-64 bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl py-2.5 z-20 grid grid-cols-2 gap-1 p-2 border border-slate-100"
                    >
                      {LANGUAGES_LIST.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => handleLanguageSelect(lang.code as Language)}
                          className={`flex items-center gap-2 px-3 py-2 text-xs font-bold rounded-xl transition-all cursor-pointer ${
                            language === lang.code
                              ? 'bg-brand-blue/10 text-brand-deep'
                              : 'text-gray-600 hover:bg-slate-50 hover:text-brand-deep'
                          }`}
                        >
                          <span className="text-sm">{lang.flag}</span>
                          <span className="truncate">{lang.name}</span>
                        </button>
                      ))}
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>

            {/* Quick Contact Link (Teal Button) */}
            <button
              id="header-cta-desktop"
              onClick={() => handleNavClick('auth')}
              className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 shadow-md hover:shadow-lg flex items-center gap-1.5 cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0 ${
                activeTab === 'auth' 
                  ? 'bg-brand-deep text-white border-brand-blue border' 
                  : 'bg-gradient-to-r from-brand-deep to-brand-blue hover:from-brand-deep/95 hover:to-brand-blue/95 text-white'
              }`}
            >
              <span>{language === 'pt' ? 'Aceder' : 'Access'}</span>
              <ArrowUpRight className="w-4 h-4 text-sky-200" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-3">
            {/* Language Selector Mobile */}
            <div className="relative">
              <button
                id="lang-toggle-mobile"
                onClick={() => setShowLangDropdownMobile(!showLangDropdownMobile)}
                className={`p-2.5 rounded-xl border flex items-center gap-1 cursor-pointer transition-all ${
                  isScrolled 
                    ? 'border-gray-200 text-gray-700 bg-white hover:text-brand-blue hover:shadow-sm' 
                    : 'border-white/20 text-slate-200 bg-white/5 hover:bg-white/10 hover:border-white/40 hover:text-white'
                }`}
                aria-label="Toggle Language"
              >
                <span className="text-base leading-none">
                  {LANGUAGES_LIST.find(l => l.code === language)?.flag}
                </span>
                <ChevronDown className="w-3.5 h-3.5 text-gray-400" />
              </button>

              <AnimatePresence>
                {showLangDropdownMobile && (
                  <>
                    <div 
                      className="fixed inset-0 z-40" 
                      onClick={() => setShowLangDropdownMobile(false)} 
                    />
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-2xl shadow-xl py-2 z-50 grid grid-cols-1 gap-1 p-1 max-h-[300px] overflow-y-auto"
                    >
                      {LANGUAGES_LIST.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => handleLanguageSelect(lang.code as Language)}
                          className={`flex items-center gap-2.5 px-3 py-2 text-xs font-bold rounded-xl transition-all cursor-pointer ${
                            language === lang.code
                              ? 'bg-brand-blue/15 text-brand-deep'
                              : 'text-gray-600 hover:bg-gray-50'
                          }`}
                        >
                          <span className="text-base">{lang.flag}</span>
                          <span>{lang.name}</span>
                        </button>
                      ))}
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>

            <button
              id="mobile-menu-btn"
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2.5 rounded-xl transition-all border ${
                isScrolled 
                  ? 'text-gray-600 hover:text-brand-deep hover:bg-gray-50 border-transparent hover:border-slate-100' 
                  : 'text-slate-200 hover:text-white hover:bg-white/5 border-transparent hover:border-white/10'
              }`}
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0, y: -10 }}
            animate={{ opacity: 1, height: 'auto', y: 0 }}
            exit={{ opacity: 0, height: 0, y: -10 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden bg-white/95 backdrop-blur-xl border-b border-gray-200 shadow-xl overflow-hidden rounded-b-3xl"
          >
            <div className="px-4 pt-2 pb-6 space-y-2 sm:px-6">
              {menuItems.map((item) => {
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    id={`nav-mob-btn-${item.id}`}
                    onClick={() => handleNavClick(item.id)}
                    className={`w-full text-left block px-4 py-3 rounded-xl text-sm font-bold uppercase tracking-wider transition-colors ${
                      isActive 
                        ? 'bg-gradient-to-r from-slate-50 to-white text-brand-deep border-l-4 border-brand-blue' 
                        : 'text-gray-600 hover:bg-gray-50 hover:text-brand-deep'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
              
              {/* Mobile Language Grid inside Menu */}
              <div className="pt-4 border-t border-gray-100 space-y-2">
                <label className="block text-[10px] font-mono font-bold uppercase tracking-wider text-gray-400">
                  {language === 'pt' ? 'Selecionar Idioma' : 'Select Language'}
                </label>
                <div className="grid grid-cols-2 gap-1.5">
                  {LANGUAGES_LIST.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => handleLanguageSelect(lang.code as Language)}
                      className={`flex items-center gap-2 px-3 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                        language === lang.code
                          ? 'bg-brand-blue text-white shadow-sm'
                          : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      <span className="text-sm">{lang.flag}</span>
                      <span className="truncate">{lang.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                <span className="text-xs text-gray-400 font-mono flex items-center gap-1.5">
                  <Building2 className="w-3.5 h-3.5 text-brand-blue animate-pulse" />
                  {language === 'pt' ? 'Capitais Públicos' : 'State Owned Company'}
                </span>
                <button
                  id="header-cta-mobile"
                  onClick={() => handleNavClick('auth')}
                  className={`px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider cursor-pointer transition-all ${
                    activeTab === 'auth' ? 'bg-brand-deep text-white shadow' : 'bg-brand-blue text-white shadow hover:bg-brand-blue/95'
                  }`}
                >
                  {language === 'pt' ? 'Aceder' : 'Access'}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </header>
  );
}
