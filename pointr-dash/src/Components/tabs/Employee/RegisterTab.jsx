import React, { useState } from "react";
import { FiUser, FiMail, FiBriefcase, FiCheckSquare, FiAlertCircle, FiTrendingUp } from "react-icons/fi";
import { motion } from "framer-motion";

const RegisterTab = () => {

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [cargo, setCargo] = useState("");
    const [setor, setSetor] = useState("");
    
    // Estados para feedbacks visuais e heurísticos
    const [erro, setErro] = useState("");
    const [carregando, setCarregando] = useState(false);

    const handleCadastro = (e) => {
        e.preventDefault();

        // 🧠 Heurística de Prevenção de Erros: Validação explícita antes do envio
        if (!nome.trim() || !email.trim() || !cargo || !setor) {
            setErro("Todos os campos operacionais são de preenchimento obrigatório para a auditoria de RH.");
            return;
        }

        // Simulação de estado de processamento (Usabilidade: Feedback de desempenho)
        setErro("");
        setCarregando(true);

        setTimeout(() => {
            setCarregando(false);
            alert("Colaborador registrado com sucesso de forma inquestionável no banco do PoinTr!");
            
            // Limpa os estados locais
            setNome("");
            setEmail("");
            setCargo("");
            setSetor("");

            // Executa a prop para jogar o usuário de volta para a listagem geral no palco da apresentação
            if (aoSucesso) aoSucesso();
        }, 1200);
    };

    return (
        <div className="max-w-xl bg-[#090928] border border-main-border/30 rounded-[32px] p-8 shadow-2xl relative overflow-hidden mt-2">
            
            {/* Cabeçalho do Formulário */}
            <div className="mb-6">
                <h3 className="text-lg font-bold tracking-tight text-white mb-1.5 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#2030be]" />
                    Admitir Novo Colaborador
                </h3>
                <p className="text-xs text-secondary-text font-medium leading-relaxed">
                    Preencha o cadastro operacional. O colaborador receberá automaticamente as credenciais criptografadas para acessar o aplicativo móvel do PoinTr.
                </p>
            </div>

            <form onSubmit={handleCadastro} className="space-y-5 relative z-10">
                
                {/* 🚨 FEEDBACK DE ERRO VISÍVEL (Heurística de Status do Sistema) */}
                {erro && (
                    <motion.div 
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-xs font-semibold text-red-400 flex items-center gap-2.5"
                    >
                        <FiAlertCircle size={14} className="flex-shrink-0" />
                        <span>{erro}</span>
                    </motion.div>
                )}

                {/* INPUT: Nome */}
                <div className="flex flex-col gap-1.5">
                    <label htmlFor="nome" className="text-[9px] font-black uppercase tracking-widest text-secondary-text pl-1">
                        Nome Completo
                    </label>
                    <div className="relative">
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-600"><FiUser size={16} /></div>
                        <input 
                            id="nome"
                            type="text" 
                            placeholder="Ex: John Wick"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                            className="w-full h-12 bg-[#01011a] border border-main-border/50 rounded-xl pl-12 pr-4 text-xs text-white placeholder:text-slate-700 focus:outline-none focus:border-[#2030be] transition-all focus:shadow-[0_0_15px_rgba(99,102,241,0.05)]"
                        />
                    </div>
                </div>

                {/* INPUT: E-mail */}
                <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="text-[9px] font-black uppercase tracking-widest text-secondary-text pl-1">
                        E-mail Corporativo
                    </label>
                    <div className="relative">
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-600"><FiMail size={16} /></div>
                        <input 
                            id="email"
                            type="email" 
                            placeholder="john.wick@empresa.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full h-12 bg-[#01011a] border border-main-border/50 rounded-xl pl-12 pr-4 text-xs text-white placeholder:text-slate-700 focus:outline-none focus:border-[#2030be] transition-all focus:shadow-[0_0_15px_rgba(99,102,241,0.05)]"
                        />
                    </div>
                </div>

                {/* GRID DUPLO: Cargo e Setor */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                        <label htmlFor="cargo" className="text-[9px] font-black uppercase tracking-widest text-secondary-text pl-1">
                            Cargo / Função
                        </label>
                        <div className="relative">
                            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-600"><FiBriefcase size={16} /></div>
                            <input 
                                id="cargo"
                                type="text" 
                                placeholder="Ex: Engenheiro de Software"
                                value={cargo}
                                onChange={(e) => setCargo(e.target.value)}
                                className="w-full h-12 bg-[#01011a] border border-main-border/50 rounded-xl pl-12 pr-4 text-xs text-white placeholder:text-slate-700 focus:outline-none focus:border-[#2030be] transition-all"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col gap-1.5">
                        <label htmlFor="setor" className="text-[9px] font-black uppercase tracking-widest text-secondary-text pl-1">
                            Setor Alocado
                        </label>
                        <div className="relative">
                            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-600"><FiTrendingUp size={16} /></div>
                            <select 
                                id="setor"
                                value={setor}
                                onChange={(e) => setSetor(e.target.value)}
                                className="w-full h-12 bg-[#01011a] border border-main-border/50 rounded-xl pl-12 pr-4 text-xs text-white focus:outline-none focus:border-[#2030be] transition-all appearance-none cursor-pointer"
                            >
                                <option value="" disabled className="text-slate-700">Selecione...</option>
                                <option value="tech" className="bg-[#090928]">Tecnologia & Engenharia</option>
                                <option value="rh" className="bg-[#090928]">Recursos Humanos</option>
                                <option value="fin" className="bg-[#090928]">Financeiro</option>
                                <option value="op" className="bg-[#090928]">Operações</option>
                            </select>
                            {/* Setinha customizada do select para manter o design premium */}
                            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500 text-[10px]">▼</div>
                        </div>
                    </div>
                </div>

                {/* BOTÃO SUBMIT COM FEEDBACK DE PROGRESSO */}
                <button 
                    type="submit" 
                    disabled={carregando}
                    className="w-full h-12 bg-[#2030be] hover:bg-[#2030be]/90 disabled:bg-[#2030be]/50 text-white font-bold text-xs rounded-xl mt-4 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-[0_4px_20px_rgba(32,48,190,0.15)] disabled:cursor-not-allowed"
                >
                    {carregando ? (
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                        <>
                            Finalizar Matrícula <FiCheckSquare size={14} />
                        </>
                    )}
                </button>
            </form>

            {/* Detalhe de fundo sutil */}
            <div className="absolute -left-10 -bottom-10 w-32 h-32 bg-[#2030be]/2 rounded-full blur-2xl pointer-events-none" />
        </div>
    );
};

export default RegisterTab;