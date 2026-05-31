import React, { useState } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import { FiMail, FiLock, FiUser, FiArrowRight, FiAlertCircle } from 'react-icons/fi';
import api from '../services/api';

const AuthPage = ({ onLogin }) => {
    const [authMode, setAuthMode] = useState('login');
    
    // Campos do Gestor
    const [nome_completo, setNomeCompleto] = useState("");
    const [cpf, setCpf] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setLoading(true);

        try {
            if (authMode === 'login') {
                const response = await api.post('/login', { 
                    email, 
                    senha: password 
                });
                onLogin(response.data);
            } 
            else if (authMode === 'register') {
                const response = await api.post('/register', { 
                    nome_completo, 
                    cpf, 
                    email, 
                    senha: password 
                });
                onLogin(response.data);
            }
        } catch (err) {
            const mensagem = err.response?.data?.message || 
                           'Erro ao conectar com o servidor';
            setError(mensagem);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-[#01011a] flex items-center justify-center p-4 md:p-8 font-sans overflow-hidden">
            <div className="w-full max-w-350 h-full min-h-[85vh] grid grid-cols-1 lg:grid-cols-2 gap-8">
                
                {/* LADO ESQUERDO - Imagem */}
                <div className="relative hidden lg:flex items-center justify-center p-4">
                    <div className="relative w-full h-full rounded-[40px] overflow-hidden border border-main-border/30 group">
                        <div className="absolute inset-0 bg-linear-to-r from-[#050510]/60 to-transparent z-10" />
                        <img 
                            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
                            alt="Corporate Tech" 
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                    </div>
                </div>

                {/* LADO DIREITO - Formulário */}
                <div className="flex flex-col justify-center px-4 md:px-12 lg:px-20 relative">
                    <div className="mb-10 text-xl font-bold tracking-tighter italic text-white">PoinTr</div>

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={authMode}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.4 }}
                        >
                            <h1 className="text-5xl font-bold tracking-normal text-white mb-3 leading-none">
                                {authMode === 'login' && 'Conectar'}
                                {authMode === 'register' && 'Criar Conta de Gestor'}
                            </h1>

                            <p className="text-[15px] font-medium text-secondary-text mb-10">
                                {authMode === 'login' && (
                                    <>Novo aqui? <button type="button" onClick={() => setAuthMode('register')} className="text-[#2030be] hover:underline">Criar conta</button></>
                                )}
                                {authMode === 'register' && (
                                    <>Já tem conta? <button type="button" onClick={() => setAuthMode('login')} className="text-[#2030be] hover:underline">Fazer login</button></>
                                )}
                            </p>

                            <form className="space-y-6" onSubmit={handleSubmit}>
                                {error && (
                                    <div className="p-3.5 bg-red-500/10 border border-red-500/20 rounded-xl text-xs font-semibold text-red-400 flex items-center gap-2">
                                        <FiAlertCircle size={14}/> {error}
                                    </div>
                                )}

                                {authMode === 'register' && (
                                    <>
                                        <InputField 
                                            label="Nome Completo" 
                                            placeholder="João Silva" 
                                            icon={FiUser} 
                                            value={nome_completo} 
                                            onChange={(e) => setNomeCompleto(e.target.value)} 
                                        />
                                        <InputField 
                                            label="CPF" 
                                            placeholder="123.456.789-00" 
                                            icon={FiUser} 
                                            value={cpf} 
                                            onChange={(e) => setCpf(e.target.value)} 
                                        />
                                    </>
                                )}

                                <InputField 
                                    label="E-mail" 
                                    placeholder="seu@email.com" 
                                    icon={FiMail} 
                                    type="email" 
                                    value={email} 
                                    onChange={(e) => setEmail(e.target.value)} 
                                />

                                <InputField 
                                    label="Senha" 
                                    placeholder="••••••••" 
                                    icon={FiLock} 
                                    type="password" 
                                    value={password} 
                                    onChange={(e) => setPassword(e.target.value)} 
                                />

                                <button 
                                    type="submit" 
                                    disabled={loading}
                                    className="w-full bg-[#2030be] cursor-pointer hover:bg-[#2030be]/90 text-white h-14 rounded-2xl text-sm font-bold shadow-[0_10px_30px_rgba(99,102,241,0.2)] transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                                >
                                    {loading ? "Carregando..." : authMode === 'login' ? 'Entrar' : 'Criar Conta'}
                                    <FiArrowRight size={16} />
                                </button>
                            </form>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
};

const InputField = ({ label, placeholder, icon: Icon, type = "text", value, onChange }) => (
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
                value={value}
                onChange={onChange}
                required
                className="w-full h-14 bg-[#090928] border border-main-border/50 rounded-2xl pl-12 pr-4 text-sm text-white placeholder:text-secondary-text/30 focus:outline-none focus:border-[#2030be] transition-all"
            />
        </div>
    </div>
);

export default AuthPage;