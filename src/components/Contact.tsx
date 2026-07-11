import { useState, FormEvent } from 'react';
import { motion } from 'motion/react';
import { 
  MapPin, Phone, Mail, Clock, Send, 
  CheckCircle, AlertCircle, Building2, Globe
} from 'lucide-react';
import { Language } from '../types';
import { translations } from '../translations';

interface ContactProps {
  language: Language;
}

export default function Contact({ language }: ContactProps) {
  const t = translations[language];

  // Form State
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'pending' | 'success' | 'error'>('idle');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name || !email || !subject || !message) {
      setStatus('error');
      return;
    }
    setStatus('pending');
    
    // Simulate sending
    setTimeout(() => {
      setStatus('success');
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
    }, 1500);
  };

  const contactInfo = [
    {
      id: 'addr',
      icon: <MapPin className="w-5 h-5 text-brand-blue" />,
      title: t.contact.addressTitle,
      value: t.contact.addressValue,
    },
    {
      id: 'ph',
      icon: <Phone className="w-5 h-5 text-brand-blue" />,
      title: t.contact.phoneTitle,
      value: t.contact.phoneValue,
    },
    {
      id: 'ml',
      icon: <Mail className="w-5 h-5 text-brand-blue" />,
      title: t.contact.emailTitle,
      value: t.contact.emailValue,
    },
    {
      id: 'hr',
      icon: <Clock className="w-5 h-5 text-brand-blue" />,
      title: t.contact.hoursTitle,
      value: t.contact.hoursValue,
    },
  ];

  return (
    <div className="bg-white">
      {/* Banner Section with Background Image */}
      <div className="relative h-[240px] sm:h-[300px] bg-brand-deep flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?q=80&w=1600&auto=format&fit=crop" 
            alt="Contact Banner" 
            className="w-full h-full object-cover opacity-30" 
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-deep via-brand-deep/85 to-transparent" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full mt-8 text-left">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 bg-brand-blue transform rotate-45" />
            <span className="text-xs uppercase font-mono font-bold tracking-widest text-brand-blue">
              {language === 'pt' ? 'FALE CONNOSCO' : 'GET IN TOUCH'}
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            {language === 'pt' ? "Contactos" : "Contact"}
          </h1>
          <p className="text-gray-300 text-xs sm:text-sm mt-2 max-w-xl">
            {language === 'pt' 
              ? "Estamos disponíveis para responder a todas as suas solicitações com o rigor institucional." 
              : "We are available to answer all your requests with institutional rigor."}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-blue/10 text-brand-blue text-xs font-bold uppercase tracking-wider mb-3"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>{t.nav.contact}</span>
          </motion.div>
          
          <h2 className="text-3xl sm:text-4xl font-sans font-bold text-gray-900 tracking-tight">
            {t.contact.title}
          </h2>
          <p className="text-gray-500 mt-3 text-sm md:text-base max-w-2xl mx-auto">
            {t.contact.subtitle}
          </p>
          <div className="w-20 h-1.5 bg-brand-blue mx-auto mt-4 rounded-full" />
        </div>

        {/* Contact Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Info Panels */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="hero-gradient p-8 rounded-3xl text-white shadow-lg space-y-4 text-left">
              <Building2 className="w-8 h-8 text-brand-blue" />
              <h3 className="text-lg font-bold">LEXDATA, LDA</h3>
              <p className="text-xs text-white/70 leading-relaxed">
                {language === 'pt' ? (
                  "Instituição oficial ligada à Imprensa Nacional - E.P., fornecendo serviços com garantias plenas de segurança informática, jurídica e arquivística."
                ) : (
                  "Official institution linked to Imprensa Nacional - E.P., providing services with full guarantees of computer, legal, and archivist security."
                )}
              </p>
              <div className="w-full h-[1px] bg-white/10" />
              <div className="flex items-center gap-2 text-xs text-brand-blue font-mono">
                <Globe className="w-4 h-4" />
                <span>WWW.LEXDATA.GOV.AO</span>
              </div>
            </div>

            {/* Simple Card List */}
            <div className="space-y-4">
              {contactInfo.map((info) => (
                <div key={info.id} className="bg-gray-50 p-5 rounded-2xl border border-gray-100 flex items-start gap-4 text-left">
                  <div className="p-2.5 bg-white border border-gray-100 text-brand-blue rounded-xl shadow-sm shrink-0">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 text-xs uppercase tracking-wider">{info.title}</h4>
                    <p className="text-gray-500 text-sm mt-1 leading-relaxed whitespace-pre-line">{info.value}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Contact Form Panel */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-gray-100 shadow-xl text-left">
            <h3 className="text-xl font-bold text-brand-deep mb-6">
              {language === 'pt' ? 'Envie uma Solicitação de Contacto' : 'Send a Contact Request'}
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label htmlFor="name-input" className="text-xs font-semibold text-gray-500 uppercase tracking-wider">{t.contact.formName}</label>
                  <input
                    id="name-input"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/10 text-sm transition-colors text-gray-800"
                  />
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="email-input" className="text-xs font-semibold text-gray-500 uppercase tracking-wider">{t.contact.formEmail}</label>
                  <input
                    id="email-input"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/10 text-sm transition-colors text-gray-800"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="subject-input" className="text-xs font-semibold text-gray-500 uppercase tracking-wider">{t.contact.formSubject}</label>
                <input
                  id="subject-input"
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/10 text-sm transition-colors text-gray-800"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="message-input" className="text-xs font-semibold text-gray-500 uppercase tracking-wider">{t.contact.formMessage}</label>
                <textarea
                  id="message-input"
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/10 text-sm transition-colors text-gray-800 resize-none"
                />
              </div>

              {/* Status messages */}
              {status === 'success' && (
                <div className="p-4 bg-emerald-50 border border-emerald-100 rounded-xl flex items-start gap-3 text-emerald-800 text-sm">
                  <CheckCircle className="w-5 h-5 shrink-0 text-emerald-500" />
                  <span>{t.contact.formSuccess}</span>
                </div>
              )}

              {status === 'error' && (
                <div className="p-4 bg-rose-50 border border-rose-100 rounded-xl flex items-start gap-3 text-rose-800 text-sm">
                  <AlertCircle className="w-5 h-5 shrink-0 text-rose-500" />
                  <span>
                    {language === 'pt' ? 'Por favor, preencha todos os campos corretamente.' : 'Please fill all fields correctly.'}
                  </span>
                </div>
              )}

              <button
                id="submit-contact-form"
                type="submit"
                disabled={status === 'pending'}
                className="w-full bg-brand-deep hover:bg-brand-deep/90 text-white font-medium py-3.5 px-6 rounded-xl transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>{status === 'pending' ? t.contact.formPending : t.contact.formSubmit}</span>
                <Send className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>

            </form>
          </div>

        </div>

      </div>
    </div>
  );
}
