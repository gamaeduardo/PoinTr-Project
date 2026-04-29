import React, { useState } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import { FiMail, FiLock, FiUser, FiArrowRight } from 'react-icons/fi';
import { FaGoogle, FaApple, FaMicrosoft } from 'react-icons/fa';

const AuthPage = ({ onLogin }) => {
    const [isLogin, setIsLogin] = useState(true);

    return (
        <div className="min-h-screen bg-[#01011a] flex items-center justify-center p-4 md:p-8 font-sans overflow-hidden">
      <div className="w-full max-w-350 h-full min-h-[85vh] grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        <div className="relative hidden lg:flex items-center justify-center p-4">
          <div className="relative w-full h-full rounded-[40px] overflow-hidden border border-main-border/30 group">
            <div className="absolute inset-0 bg-linear-to-r from-[#050510]/60 to-transparent z-10" />
            
            <img 
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
              alt="Corporate Tech" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Texto Flutuante na Imagem */}
            <div className="absolute bottom-12 left-12 z-20 max-w-md">
              <h2 className="text-5xl font-bold italic tracking-tighter text-white mb-4">
                Domine a gestão do <span className="text-[#2030be]">Tempo</span>
              </h2>
              <p className="text-secondary-text text-sm font-medium leading-relaxed">
                A plataforma definitiva para controle de ponto, auditoria e performance empresarial. 
                Seja bem-vindo ao futuro do RH.
              </p>
            </div>
          </div>
        </div>

        {/* LADO DIREITO: FORMULÁRIO */}
        <div className="flex flex-col justify-center px-4 md:px-12 lg:px-20 relative">
          <div className="mb-10 text-xl font-bold tracking-tighter italic text-white">
            PoinTr
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={isLogin ? 'login' : 'register'}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <h1 className="text-5xl font-bold tracking-normal text-white mb-3 leading-none">
                {isLogin ? 'Conectar' : 'Registrar'}
              </h1>
              <p className="text-[15px] font-medium text-secondary-text mb-10">
                {isLogin ? 'Novo aqui?' : 'Já tem conta?'} {' '}
                <button 
                  onClick={() => setIsLogin(!isLogin)}
                  className="text-[#2030be] hover:underline cursor-pointer"
                >
                  {isLogin ? 'Criar minha conta' : 'Fazer login'}
                </button>
              </p>


              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                {!isLogin && (
                  <div className="grid grid-cols-2 gap-4">
                    <InputField label="Nome" placeholder="John" icon={FiUser} />
                    <InputField label="Sobrenome" placeholder="Wick" icon={FiUser} />
                  </div>
                )}
                
                <InputField label="E-mail Corporativo" placeholder="seu@email.com" icon={FiMail} type="email" />
                
                <div className="relative">
                  <InputField label="Sua Senha" placeholder="••••••••" icon={FiLock} type="password" />
                  {isLogin && (
                    <button className="absolute cursor-pointer right-0 top-0 text-[10px] font-black uppercase text-secondary-text hover:text-white transition-colors">
                      Esqueceu a senha?
                    </button>
                  )}
                </div>

                <button onClick={onLogin} className="w-full bg-[#2030be] cursor-pointer hover:bg-[#2030be]/90 text-white h-14 rounded-2xl text-sm font-bold shadow-[0_10px_30px_rgba(99,102,241,0.2)] transition-all transform hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-2">
                  {isLogin ? 'Entrar no Dashboard' : 'Criar Conta'}
                  <FiArrowRight size={16} />
                </button>
              </form>

              <div className="flex items-center gap-4 my-10">
                <div className="h-px bg-main-border/30 flex-1" />
                <span className="text-[10px] font-black uppercase text-secondary-text tracking-widest">Ou continue com</span>
                <div className="h-px bg-main-border/30 flex-1" />
              </div>

              {/* Acesso Alternativo (A definir, Google OK) */}
              <div className="flex justify-center gap-4">
                <SocialButton icon={FaGoogle} />
                <SocialButton icon={FaMicrosoft} />
                <SocialButton icon={FaApple} />
              </div>
            </motion.div>
          </AnimatePresence>
          
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-[#2030be]/5 rounded-full blur-[120px] pointer-events-none" />
        </div>
      </div>
    </div>
  );
};

// Sub-componentes (inputs)
const InputField = ({ label, placeholder, icon: Icon, type = "text" }) => (
  <div className="flex flex-col gap-2">
    <label className="text-[10px] font-black uppercase tracking-widest text-secondary-text pl-1">
      {label}
    </label>
    <div className="relative">
      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-secondary-text">
        <Icon size={18} />
      </div>
      <input 
        type={type}
        placeholder={placeholder}
        className="w-full h-14 bg-[#090928] border border-main-border/50 rounded-2xl pl-12 pr-4 text-sm text-white placeholder:text-secondary-text/30 focus:outline-none focus:border-[#2030be] transition-all focus:shadow-[0_0_20px_rgba(99,102,241,0.1)]"
      />
    </div>
  </div>
);

const SocialButton = ({ icon: Icon }) => (
  <button className="w-14 h-14 cursor-pointer bg-[#090928] border border-main-border/50 rounded-2xl flex items-center justify-center text-secondary-text hover:text-white hover:border-[#2030be] transition-all transform hover:scale-110">
    <Icon size={20} />
  </button>
);

export default AuthPage;