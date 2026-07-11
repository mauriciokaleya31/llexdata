import React, { useState } from 'react';
import { Menu, X, Languages, Building2, ChevronRight, ArrowUpRight, Search, LayoutGrid, Lock, Mail, User, CheckCircle, ArrowRight } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { Language } from '../types';
import { translations } from '../translations';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  language: Language;
  setLanguage: (lang: Language) => void;
}

export default function Header({ activeTab, setActiveTab, language, setLanguage }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

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
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleLanguage = () => {
    setLanguage(language === 'pt' ? 'en' : 'pt');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => handleNavClick('home')}>
            <img 
              src="https://visa.onlyvibes.online/wp-content/uploads/2026/07/logo-7.png" 
              alt="LEXDATA Logo" 
              className="h-16 w-auto object-contain"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1 lg:space-x-2">
            {menuItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-btn-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 relative ${
                    isActive 
                      ? 'text-brand-deep bg-gray-50 font-semibold' 
                      : 'text-gray-600 hover:text-brand-deep hover:bg-gray-50'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-brand-blue rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Utility Buttons */}
          <div className="hidden md:flex items-center gap-3 lg:gap-4">
            {/* Language Switcher */}
            <button
              id="lang-toggle-desktop"
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-gray-200 text-gray-700 hover:border-brand-blue hover:text-brand-blue text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
            >
              <Languages className="w-3.5 h-3.5" />
              <span>{language === 'pt' ? 'English' : 'Português'}</span>
            </button>

            {/* Quick Contact Link (Teal Button) */}
            <button
              id="header-cta-desktop"
              onClick={() => handleNavClick('auth')}
              className={`px-5 py-2.5 rounded-full text-xs font-bold tracking-wide transition-all shadow-md hover:shadow-lg flex items-center gap-1.5 cursor-pointer ${
                activeTab === 'auth' 
                  ? 'bg-brand-deep text-white border-brand-blue border' 
                  : 'bg-brand-blue hover:bg-brand-blue/90 text-white'
              }`}
            >
              <span>{language === 'pt' ? 'Login/Criar' : 'Login/Create'}</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            {/* Decorative Search Button */}
            <button
              onClick={() => handleNavClick('contact')}
              className="p-2.5 text-gray-500 hover:text-brand-blue hover:bg-gray-50 rounded-full transition-colors cursor-pointer"
              aria-label="Search"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Decorative Grid Menu Button */}
            <button
              onClick={() => handleNavClick('services')}
              className="p-2.5 text-gray-500 hover:text-brand-blue hover:bg-gray-50 rounded-full transition-colors cursor-pointer"
              aria-label="Menu Grid"
            >
              <LayoutGrid className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-3">
            {/* Language Toggle Mobile */}
            <button
              id="lang-toggle-mobile"
              onClick={toggleLanguage}
              className="p-2 rounded-lg border border-gray-200 text-gray-700 hover:text-brand-blue"
              aria-label="Toggle Language"
            >
              <Languages className="w-5 h-5" />
            </button>

            <button
              id="mobile-menu-btn"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-gray-600 hover:text-brand-deep hover:bg-gray-50 transition-colors"
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 shadow-xl transition-all duration-300">
          <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
            {menuItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-mob-btn-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full text-left block px-4 py-3 rounded-lg text-base font-semibold transition-colors ${
                    isActive 
                      ? 'bg-gradient-to-r from-gray-50 to-white text-brand-deep border-l-4 border-brand-blue' 
                      : 'text-gray-600 hover:bg-gray-50 hover:text-brand-deep'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
            <div className="pt-4 pb-2 border-t border-gray-100 px-4 flex items-center justify-between">
              <span className="text-xs text-gray-400 font-mono flex items-center gap-1">
                <Building2 className="w-3 h-3 text-brand-blue" />
                {language === 'pt' ? 'Capitais Públicos' : 'State Owned Company'}
              </span>
              <button
                id="header-cta-mobile"
                onClick={() => handleNavClick('auth')}
                className={`px-4 py-2 rounded-lg text-xs font-semibold tracking-wide cursor-pointer ${
                  activeTab === 'auth' ? 'bg-brand-deep text-white' : 'bg-brand-blue text-white'
                }`}
              >
                {language === 'pt' ? 'Login/Criar' : 'Login/Create'}
              </button>
            </div>
          </div>
        </div>
      )}

    </header>
  );
}
