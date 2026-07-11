import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Lock, Mail, User, CheckCircle, ArrowRight, Building2, 
  ShieldCheck, HelpCircle, ArrowUpRight 
} from 'lucide-react';
import { Language } from '../types';

interface AuthPageProps {
  language: Language;
}

export default function AuthPage({ language }: AuthPageProps) {
  const [isLoginMode, setIsLoginMode] = useState(true); // true = Login, false = Criar
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [registerName, setRegisterName] = useState('');
  const [registerOrg, setRegisterOrg] = useState('');
  const [authSuccess, setAuthSuccess] = useState(false);
  const [authLoading, setAuthLoading] = useState(false);

  const handleAuthSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setAuthLoading(true);
    setTimeout(() => {
      setAuthLoading(false);
      setAuthSuccess(true);
      setTimeout(() => {
        setAuthSuccess(false);
        setLoginEmail('');
        setLoginPassword('');
        setRegisterName('');
        setRegisterOrg('');
      }, 3000);
    }, 1200);
  };

  return (
    <div className="bg-gray-50 text-left min-h-screen pb-16">
      {/* Banner Section with Background Image */}
      <div className="relative h-[240px] sm:h-[300px] bg-brand-deep flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1600&auto=format&fit=crop" 
            alt="Security Banner" 
            className="w-full h-full object-cover opacity-25" 
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-deep via-brand-deep/85 to-transparent" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full mt-8">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 bg-brand-blue transform rotate-45" />
            <span className="text-xs uppercase font-mono font-bold tracking-widest text-brand-blue">
              {language === 'pt' ? 'ÁREA SEGURA' : 'SECURE REGION'}
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            {language === 'pt' ? 'Sessão / Registo' : 'Login & Register'}
          </h1>
          <p className="text-gray-300 text-xs sm:text-sm mt-2 max-w-xl">
            {language === 'pt' 
              ? "Aceda ou crie a sua conta oficial para aceder aos portais CSP, SIPPO e JURISNET da LEXDATA." 
              : "Access or create your official account to utilize CSP, SIPPO, and JURISNET platforms."}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Info Side Column */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <span className="text-xs font-bold font-mono uppercase bg-brand-blue/10 text-brand-blue px-3 py-1 rounded-full">
                {language === 'pt' ? 'Autenticação Unificada' : 'Single Sign-On'}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-deep leading-tight">
                {language === 'pt' 
                  ? 'Um único login para todas as plataformas LEXDATA.' 
                  : 'A single account for all LEXDATA applications.'}
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed">
                {language === 'pt'
                  ? 'Como subsidiária oficial da Imprensa Nacional - E.P., a nossa infraestrutura segue os mais rígidos controlos estatais de segurança cibernética e soberania de dados nacionais.'
                  : 'As an official subsidiary of Imprensa Nacional - E.P., our secure infrastructure operates under rigid cyber-protection and national data regulations.'}
              </p>
            </div>

            {/* Feature Checkmarks */}
            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-brand-blue/10 text-brand-blue rounded-xl shrink-0 mt-0.5">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">
                    {language === 'pt' ? 'Segurança Certificada ISO 27001' : 'ISO 27001 Security Standard'}
                  </h4>
                  <p className="text-gray-500 text-xs mt-0.5">
                    {language === 'pt' 
                      ? 'Encriptação de dados em repouso e em trânsito com certificação militar.' 
                      : 'State-level data encryption in transit and rest.'}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 bg-brand-blue/10 text-brand-blue rounded-xl shrink-0 mt-0.5">
                  <HelpCircle className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">
                    {language === 'pt' ? 'Apoio ao Utilizador Dedicado' : 'Dedicated User Helpdesk'}
                  </h4>
                  <p className="text-gray-500 text-xs mt-0.5">
                    {language === 'pt' 
                      ? 'Suporte telefónico e presencial para esclarecimento e validação de permissões estatais.' 
                      : 'Immediate telephone support and training for government personnel.'}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-7 flex justify-center">
            <motion.div
              layout
              className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 max-w-lg w-full p-8 md:p-10 relative"
            >
              {/* Form Mode Selector */}
              <div className="flex border-b border-gray-100 mb-8">
                <button
                  type="button"
                  onClick={() => { setIsLoginMode(true); setAuthSuccess(false); }}
                  className={`flex-1 pb-4 text-sm font-bold text-center border-b-2 transition-all cursor-pointer ${
                    isLoginMode 
                      ? 'border-brand-blue text-brand-deep font-extrabold' 
                      : 'border-transparent text-gray-400 hover:text-gray-600'
                  }`}
                >
                  {language === 'pt' ? 'Iniciar Sessão' : 'Sign In'}
                </button>
                <button
                  type="button"
                  onClick={() => { setIsLoginMode(false); setAuthSuccess(false); }}
                  className={`flex-1 pb-4 text-sm font-bold text-center border-b-2 transition-all cursor-pointer ${
                    !isLoginMode 
                      ? 'border-brand-blue text-brand-deep font-extrabold' 
                      : 'border-transparent text-gray-400 hover:text-gray-600'
                  }`}
                >
                  {language === 'pt' ? 'Criar Nova Conta' : 'Register Account'}
                </button>
              </div>

              {authSuccess ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-8 text-center space-y-4 bg-emerald-50 border border-emerald-100 rounded-2xl"
                >
                  <CheckCircle className="w-12 h-12 text-emerald-500 mx-auto animate-bounce" />
                  <h4 className="font-bold text-emerald-900 text-lg">
                    {isLoginMode 
                      ? (language === 'pt' ? 'Sessão Iniciada com Sucesso!' : 'Successfully Logged In!') 
                      : (language === 'pt' ? 'Conta Criada com Sucesso!' : 'Account Created!')}
                  </h4>
                  <p className="text-emerald-700 text-xs leading-relaxed">
                    {language === 'pt' 
                      ? 'A sua autenticação foi processada de forma segura. Pode aceder aos seus projetos e sistemas oficiais LEXDATA.' 
                      : 'Your credentials have been securely validated. Access is now unlocked.'}
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleAuthSubmit} className="space-y-5">
                  {!isLoginMode && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="space-y-5"
                    >
                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-gray-700">
                          {language === 'pt' ? 'Nome Completo' : 'Full Name'}
                        </label>
                        <div className="relative">
                          <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                          <input 
                            type="text" 
                            required 
                            value={registerName}
                            onChange={(e) => setRegisterName(e.target.value)}
                            placeholder={language === 'pt' ? 'Ex: Dr. João Lourenço' : 'e.g. John Doe'} 
                            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/10 focus:outline-none text-xs text-gray-800"
                          />
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-gray-700">
                          {language === 'pt' ? 'Organização / Ministério / Empresa' : 'Organization / Ministry / Company'}
                        </label>
                        <div className="relative">
                          <Building2 className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                          <input 
                            type="text" 
                            required 
                            value={registerOrg}
                            onChange={(e) => setRegisterOrg(e.target.value)}
                            placeholder={language === 'pt' ? 'Ex: Ministério das Finanças' : 'e.g. Finance Ministry'} 
                            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/10 focus:outline-none text-xs text-gray-800"
                          />
                        </div>
                      </div>
                    </motion.div>
                  )}

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-gray-700">
                      {language === 'pt' ? 'Correio Eletrónico (E-mail)' : 'Email Address'}
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input 
                        type="email" 
                        required 
                        value={loginEmail}
                        onChange={(e) => setLoginEmail(e.target.value)}
                        placeholder="Ex: utilizador@instituicao.ao" 
                        className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/10 focus:outline-none text-xs text-gray-800"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-gray-700">
                      {language === 'pt' ? 'Palavra-passe (Password)' : 'Password'}
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input 
                        type="password" 
                        required 
                        value={loginPassword}
                        onChange={(e) => setLoginPassword(e.target.value)}
                        placeholder="••••••••" 
                        className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/10 focus:outline-none text-xs text-gray-800"
                      />
                    </div>
                  </div>

                  {isLoginMode && (
                    <div className="flex items-center justify-between pt-1">
                      <label className="flex items-center gap-1.5 cursor-pointer">
                        <input type="checkbox" className="rounded text-brand-blue focus:ring-brand-blue/15 w-3.5 h-3.5" />
                        <span className="text-[10px] text-gray-500 font-medium">
                          {language === 'pt' ? 'Lembrar de mim neste dispositivo' : 'Keep me logged in'}
                        </span>
                      </label>
                      <button type="button" className="text-[10px] text-brand-blue hover:underline font-semibold cursor-pointer">
                        {language === 'pt' ? 'Recuperar senha?' : 'Forgot password?'}
                      </button>
                    </div>
                  )}

                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={authLoading}
                      className="w-full bg-brand-deep hover:bg-brand-deep/90 text-white font-bold py-4 rounded-xl shadow-md transition-all text-xs flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {authLoading ? (
                        <span>{language === 'pt' ? 'A autenticar...' : 'Validating...'}</span>
                      ) : (
                        <>
                          <span>
                            {isLoginMode 
                              ? (language === 'pt' ? 'Iniciar Sessão Segura' : 'Register Secure Account') 
                              : (language === 'pt' ? 'Confirmar e Criar Conta' : 'Confirm Registration')}
                          </span>
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          </div>

        </div>
      </div>
    </div>
  );
}
