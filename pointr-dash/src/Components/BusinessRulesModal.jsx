import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiBriefcase, FiClock, FiDollarSign, FiCheckCircle, FiCopy, FiCheck } from "react-icons/fi";
import { useToast } from "./ToastContext";

const BusinessRulesModal = ({ isOpen, onClose }) => {
    const { addToast } = useToast();
    
    // Valores base
    const [abaAtiva, setAbaAtiva] = useState("empresa");
    const [processando, setProcessando] = useState(false);
    const [copiado, setCopiado] = useState(false);

    const [nomeEmpresa, setNomeEmpresa] = useState("PoinTr Corp S.A.");
    const [emailEmpresa, setEmailEmpresa] = useState("rh@pointr.com.br");
    const [telefoneEmpresa, setTelefoneEmpresa] = useState("(11) 99999-1234");
    const [gastoEstimado, setGastoEstimado] = useState("15400");
    const linkAcesso = "https://app.pointr.com.br/invite/auth-token-7730w";

    const [toleranciaHorario, setToleranciaHorario] = useState("10");
    const [inicioMesTrabalho, setInicioMesTrabalho] = useState("1");
    const [toleranciaAlmoco, setToleranciaAlmoco] = useState("15");
    const [valorHoraExtra, setValorHoraExtra] = useState("45.50");
    const [maxExtraFuncionario, setMaxExtraFuncionario] = useState("60");

    // abas
    const abas = [
        { id: "empresa", titulo: "Dados da Empresa", icone: FiBriefcase },
        { id: "jornadas", titulo: "Controle de Jornada", icone: FiClock },
        { id: "extras", titulo: "Horas Extras & Valores", icone: FiDollarSign },
    ];

    const handleCopyLink = () => {
        navigator.clipboard.writeText(linkAcesso);
        setCopiado(true);
        addToast("Link de acesso copiado para a área de transferência!", "sucesso");
        setTimeout(() => setCopiado(false), 2000);
    };

    const handleSalvarRegras = (e) => {
        e.preventDefault();
        setProcessando(true);

        setTimeout(() => {
            setProcessando(false);
            addToast("Diretrizes de operação atualizadas com sucesso!", "sucesso");
            if (onClose) onClose();
        }, 1200);
    };

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-10 font-sans">
                
                {/* Fundo Desfocado com bluuuur */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="absolute inset-0 bg-black/60 backdrop-blur-md"
                />

                <motion.div 
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 20 }}
                    transition={{ type: "spring", duration: 0.5 }}
                    className="bg-sidebar-primary border border-white/5 rounded-3xl shadow-2xl w-full max-w-5xl h-full max-h-[85vh]relative z-10 flex flex-col overflow-hidden"
                >
                    
                    <div className="p-6 md:p-8 border-b border-main-border/10 flex justify-between items-center bg-main-bg">
                        <div>
                            <h2 className="text-xl font-bold tracking-tight text-primary-text">Painel Organizacional</h2>
                            <p className="text-xs text-secondary-text mt-0.5 font-medium">Gerencie livremente os parâmetros operacionais e financeiros da sua organização.</p>
                        </div>
                        <button 
                            type="button"
                            onClick={onClose}
                            className="w-10 h-10 rounded-xl bg-slate-900 border border-main-border/40 flex items-center justify-center text-secondary-text hover:text-primary-text transition-all cursor-pointer"
                        >
                            <FiX size={18} />
                        </button>
                    </div>

                    <div className="px-8 py-2 bg-main-bg border-b border-main-border/10 flex items-center justify-start gap-2 overflow-x-auto no-scrollbar">
                        {abas.map((aba) => {
                            const IconeAba = aba.icone;
                            const isAtiva = aba.id === abaAtiva;

                            return (
                                <button
                                    key={aba.id}
                                    type="button"
                                    onClick={() => setAbaAtiva(aba.id)}
                                    className={`flex items-center gap-2 px-5 h-12 text-[11px] font-black uppercase tracking-wider transition-all relative border-b-2 cursor-pointer ${
                                        isAtiva 
                                        ? "border-accent text-primary-text bg-accent/5" 
                                        : "border-transparent text-secondary-text/60 hover:text-slate-300"
                                    }`}
                                >
                                    <IconeAba size={14} className={isAtiva ? "text-accent" : ""} />
                                    {aba.titulo}
                                </button>
                            );
                        })}
                    </div>

                    <div className="flex-1 p-8 overflow-y-auto no-scrollbar bg-main-bg/40">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={abaAtiva}
                                initial={{ opacity: 0, y: 5 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -5 }}
                                transition={{ duration: 0.15 }}
                                className="space-y-6 max-w-3xl mx-auto"
                            >
                                {/* Infos basicas */}
                                {abaAtiva === "empresa" && (
                                    <div className="space-y-5">
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                            <div className="flex flex-col gap-2">
                                                <label className="text-[10px] font-black uppercase tracking-widest text-secondary-text">Nome</label>
                                                <input type="text" value={nomeEmpresa} onChange={(e) => setNomeEmpresa(e.target.value)} className="w-full h-12 bg-card-primary border border-main-border/50 rounded-xl px-4 text-xs text-primary-text focus:outline-none focus:border-accent" />
                                            </div>
                                            <div className="flex flex-col gap-2">
                                                <label className="text-[10px] font-black uppercase tracking-widest text-secondary-text">E-mail Corporativo</label>
                                                <input type="email" value={emailEmpresa} onChange={(e) => setEmailEmpresa(e.target.value)} className="w-full h-12 bg-card-primary border border-main-border/50 rounded-xl px-4 text-xs text-primary-text focus:outline-none focus:border-accent" />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                            <div className="flex flex-col gap-2">
                                                <label className="text-[10px] font-black uppercase tracking-widest text-secondary-text">Telefone Empresarial</label>
                                                <input type="text" value={telefoneEmpresa} onChange={(e) => setTelefoneEmpresa(e.target.value)} className="w-full h-12 bg-card-primary border border-main-border/50 rounded-xl px-4 text-xs text-primary-text focus:outline-none focus:border-accent" />
                                            </div>
                                            <div className="flex flex-col gap-2">
                                                <label className="text-[10px] font-black uppercase tracking-widest text-secondary-text">Gasto Estimado Mensal de Operação (R$)</label>
                                                <input type="number" value={gastoEstimado} onChange={(e) => setGastoEstimado(e.target.value)} className="w-full h-12 bg-card-primary border border-main-border/50 rounded-xl px-4 text-xs text-primary-text focus:outline-none focus:border-accent" />
                                            </div>
                                        </div>

                                        <div className="bg-card-primary border border-main-border/20 rounded-2xl p-5 space-y-2">
                                            <label className="text-[10px] font-black uppercase tracking-widest text-accent block">Link de Integração Externa (Token de Acesso)</label>
                                            <p className="text-[11px] text-slate-400 font-medium">Use este link para integrar novos funcionários diretamente ao ecossistema do aplicativo mobile PoinTr.</p>
                                            <div className="flex gap-2 pt-2">
                                                <input type="text" readOnly value={linkAcesso} className="flex-1 h-12 bg-sidebar-primary border border-main-border/50 rounded-xl px-4 text-xs text-slate-400 focus:outline-none select-all" />
                                                <button type="button" onClick={handleCopyLink} className="w-12 h-12 bg-accent hover:bg-accent/90 text-primary-text rounded-xl flex items-center justify-center transition-all cursor-pointer">
                                                    {copiado ? <FiCheck size={16} /> : <FiCopy size={16} />}
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* Horários e data do incio do mes de trabalho eu acho */}
                                {abaAtiva === "jornadas" && (
                                    <div className="space-y-5">
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                            <div className="flex flex-col gap-2">
                                                <label className="text-[10px] font-black uppercase tracking-widest text-secondary-text">Tolerância Geral de Horário (Minutos)</label>
                                                <input type="number" value={toleranciaHorario} onChange={(e) => setToleranciaHorario(e.target.value)} className="w-full h-12 bg-card-primary border border-main-border/50 rounded-xl px-4 text-xs text-primary-text focus:outline-none focus:border-accent" />
                                            </div>
                                            <div className="flex flex-col gap-2">
                                                <label className="text-[10px] font-black uppercase tracking-widest text-secondary-text">Tolerância Específica para Almoço/Intervalo</label>
                                                <input type="number" value={toleranciaAlmoco} onChange={(e) => setToleranciaAlmoco(e.target.value)} className="w-full h-12 bg-card-primary border border-main-border/50 rounded-xl px-4 text-xs text-primary-text focus:outline-none focus:border-accent" />
                                            </div>
                                        </div>

                                        <div className="flex flex-col gap-2">
                                            <label className="text-[10px] font-black uppercase tracking-widest text-secondary-text">Dia de Início do Mês de Trabalho (Fechamento da Folha)</label>
                                            <select value={inicioMesTrabalho} onChange={(e) => setInicioMesTrabalho(e.target.value)} className="w-full h-12 bg-card-primary border border-main-border/50 rounded-xl px-4 text-xs text-primary-text focus:outline-none focus:border-accent cursor-pointer appearance-none">
                                                <option value="1">Dia 01 (Ciclo Civil Padrão)</option>
                                                <option value="16">Dia 16 (Ciclo Corporativo Quebrado)</option>
                                                <option value="21">Dia 21 (Fechamento Técnico Adiantado)</option>
                                            </select>
                                        </div>
                                    </div>
                                )}

                                {/* Horas extras */}
                                {abaAtiva === "extras" && (
                                    <div className="space-y-5">
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                            <div className="flex flex-col gap-2">
                                                <label className="text-[10px] font-black uppercase tracking-widest text-secondary-text">Valor Base da Hora Extra Praticada (R$)</label>
                                                <input type="number" step="0.01" value={valorHoraExtra} onChange={(e) => setValorHoraExtra(e.target.value)} className="w-full h-12 bg-card-primary border border-main-border/50 rounded-xl px-4 text-xs text-primary-text focus:outline-none focus:border-accent" />
                                            </div>
                                            <div className="flex flex-col gap-2">
                                                <label className="text-[10px] font-black uppercase tracking-widest text-secondary-text">Máximo de Horas Extras Permitidas por Funcionário (Mensal)</label>
                                                <select value={maxExtraFuncionario} onChange={(e) => setMaxExtraFuncionario(e.target.value)} className="w-full h-12 bg-card-primary border border-main-border/50 rounded-xl px-4 text-xs text-primary-text focus:outline-none focus:border-accent cursor-pointer appearance-none">
                                                    <option value="30">30 Horas / Mês</option>
                                                    <option value="60">60 Horas / Mês (Recomendado CLT)</option>
                                                    <option value="90">90 Horas / Mês (Limite Crítico)</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    <div className="p-6 border-t border-main-border/10 bg-bg-main-bg flex items-center justify-end">
                        <button
                            type="button"
                            onClick={handleSalvarRegras}
                            disabled={processando}
                            className="h-12 px-8 bg-accent hover:bg-accent-hover text-primary-text text-xs font-bold rounded-xl transition-all flex items-center gap-2 cursor-pointer shadow-[0_4px_15px_rgba(16,185,129,0.15)] disabled:opacity-50"
                        >
                            {processando ? (
                                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            ) : (
                                <>Salvar Alterações <FiCheckCircle size={14} /></>
                            )}
                        </button>
                    </div>

                </motion.div>
            </div>
        </AnimatePresence>
    );
};

export default BusinessRulesModal;