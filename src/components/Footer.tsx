import React from 'react';
import { 
  Building2, ShieldCheck, ArrowUpRight, 
  MapPin, Phone, Mail, Laptop, Cpu, Database, Network 
} from 'lucide-react';
import { Language } from '../types';
import { translations } from '../translations';
import { motion } from 'motion/react';

interface FooterProps {
  language: Language;
  setActiveTab: (tab: string) => void;
}

export default function Footer({ language, setActiveTab }: FooterProps) {
  const t = translations[language];

  const quickLinks = [
    { id: 'home', label: t.nav.home },
    { id: 'about', label: t.nav.about },
    { id: 'services', label: t.nav.services },
    { id: 'platform', label: t.nav.platform },
    { id: 'projects', label: t.nav.projects },
    { id: 'contact', label: t.nav.contact },
  ];

  const featuredServices = [
    t.services.servicesList[0]?.title || "Gestão de Diários",
    t.services.servicesList[2]?.title || "Digitalização em Massa",
    t.services.servicesList[3]?.title || "Organização de Arquivos",
    language === 'pt' ? "Plataforma de Gestão CSP" : "CSP Content Platform"
  ];

  const handleLinkClick = (id: string) => {
    setActiveTab(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Pre-defined background technology particles for floating animation
  const techParticles = [
    { text: '010101', top: '12%', left: '6%', delay: 0, duration: 18, size: 'text-[9px]' },
    { text: 'CSP_CORE', top: '28%', right: '10%', delay: 2, duration: 22, size: 'text-[10px]' },
    { text: 'JURISNET_SYS', top: '68%', left: '12%', delay: 1, duration: 20, size: 'text-[10px]' },
    { text: 'SIPPO_API', top: '42%', right: '25%', delay: 3, duration: 16, size: 'text-[9px]' },
    { text: '11001011', top: '78%', right: '12%', delay: 4, duration: 14, size: 'text-[9px]' },
    { text: 'DATABASE_SQL', top: '18%', left: '42%', delay: 5, duration: 24, size: 'text-[10px]' },
    { text: 'OCR_METADATA', top: '62%', right: '40%', delay: 1.5, duration: 19, size: 'text-[9px]' },
    { type: 'node', top: '22%', left: '22%', delay: 0.5, duration: 17 },
    { type: 'node', top: '58%', right: '18%', delay: 2.5, duration: 21 },
    { type: 'node', top: '82%', left: '38%', delay: 1.2, duration: 15 },
    { type: 'node', top: '15%', right: '32%', delay: 3.2, duration: 23 },
  ];

  return (
    <footer className="relative bg-gray-950 text-white border-t border-gray-900 pt-16 pb-8 overflow-hidden text-left">
      
      {/* Tech Floating Background Overlay */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 select-none">
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(22,170,223,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(22,170,223,0.015)_1px,transparent_1px)] bg-[size:40px_40px]" />
        
        {/* Soft glowing spheres in the background */}
        <div className="absolute -top-1/4 -left-1/4 w-[400px] h-[400px] rounded-full bg-[#004278]/15 blur-[120px]" />
        <div className="absolute -bottom-1/4 -right-1/4 w-[500px] h-[500px] rounded-full bg-[#16AADF]/10 blur-[150px]" />

        {/* Floating elements */}
        {techParticles.map((pt, idx) => {
          const isNode = pt.type === 'node';
          return (
            <motion.div
              key={`footer-tech-pt-${idx}`}
              initial={{ y: 0, x: 0, opacity: isNode ? 0.1 : 0.05 }}
              animate={{ 
                y: [0, -30, 0], 
                x: [0, 10, 0],
                opacity: isNode ? [0.08, 0.22, 0.08] : [0.03, 0.12, 0.03]
              }}
              transition={{ 
                duration: pt.duration, 
                repeat: Infinity, 
                delay: pt.delay,
                ease: "easeInOut" 
              }}
              style={{
                position: 'absolute',
                top: pt.top,
                left: pt.left,
                right: pt.right,
              }}
            >
              {isNode ? (
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-blue/30 shadow-[0_0_8px_#16AADF]" />
                  <div className="w-6 h-[1px] bg-brand-blue/10" />
                </div>
              ) : (
                <span className={`${pt.size} font-mono font-bold tracking-wider text-brand-blue/40`}>
                  {pt.text}
                </span>
              )}
            </motion.div>
          );
        })}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Content Grid with 4-Column Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 mb-12">
          
          {/* Brand Column (lg:col-span-4) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center">
              <img 
                src="https://visa.onlyvibes.online/wp-content/uploads/2026/07/logo-7.png" 
                alt="LEXDATA Logo Light" 
                className="h-16 w-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </div>

            <p className="text-gray-400 text-xs md:text-sm leading-relaxed max-w-sm">
              {t.footer.desc}
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/5 border border-white/10">
              <Building2 className="w-4 h-4 text-brand-blue shrink-0" />
              <span className="text-[11px] font-semibold text-gray-300">
                {t.footer.ownershipBadge}
              </span>
            </div>
          </div>

          {/* Quick Links (lg:col-span-2) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 border-l-2 border-brand-blue pl-2.5">
              {t.footer.linksTitle}
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    key={`foot-link-${link.id}`}
                    id={`foot-link-${link.id}`}
                    onClick={() => handleLinkClick(link.id)}
                    className="text-gray-400 hover:text-brand-blue text-xs md:text-sm font-medium transition-colors flex items-center gap-1.5 group cursor-pointer"
                  >
                    <span className="h-1 w-0 group-hover:w-1.5 bg-brand-blue transition-all duration-200 rounded-full" />
                    <span>{link.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Featured Services (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 border-l-2 border-brand-blue pl-2.5">
              {t.footer.servicesTitle}
            </h4>
            <ul className="space-y-3">
              {featuredServices.map((srv, idx) => (
                <li key={idx} className="text-gray-400 text-xs md:text-sm font-medium flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-blue/30 border border-brand-blue" />
                  <span>{srv}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Official Contacts - Fully Revamped (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 border-l-2 border-brand-blue pl-2.5">
              {language === 'pt' ? 'Contactos Oficiais' : 'Official Contacts'}
            </h4>
            
            <div className="space-y-3.5 text-xs text-gray-400">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  Rua Henrique de Assis, Edifício Imprensa Nacional, Luanda, Angola
                </span>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-brand-blue shrink-0" />
                <span>+244 923 456 789 / +244 222 123 456</span>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-brand-blue shrink-0" />
                <a href="mailto:contacto@lexdata.co.ao" className="hover:text-brand-blue transition-colors">
                  contacto@lexdata.co.ao
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Dynamic Glowing Divider */}
        <div className="relative w-full h-[1px] bg-gray-900 my-8 overflow-hidden">
          <motion.div 
            initial={{ left: '-50%' }}
            animate={{ left: '100%' }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 w-1/3 h-[1px] bg-gradient-to-r from-transparent via-brand-blue/60 to-transparent"
          />
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[11px] text-gray-500 font-medium text-center sm:text-left">
            {t.footer.rights}
          </p>

          <div className="flex items-center gap-6 text-xs text-gray-500">
            <a href="#" className="hover:text-white transition-colors">
              {language === 'pt' ? 'Termos de Serviço' : 'Terms of Service'}
            </a>
            <a href="#" className="hover:text-white transition-colors">
              {language === 'pt' ? 'Privacidade' : 'Privacy Policy'}
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
