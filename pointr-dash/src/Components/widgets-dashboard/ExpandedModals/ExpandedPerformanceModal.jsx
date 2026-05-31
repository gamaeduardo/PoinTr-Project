import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiTrendingUp, FiClock, FiUsers, FiBarChart2, FiDownload, FiCalendar, FiArrowUpRight, FiZap } from "react-icons/fi";
import { useToast } from "../../ToastContext";

const ExpandedPerformanceModal = ({ isOpen, onClose }) => {
    const { addToast } = useToast();

    if (!isOpen) return null;

    // Dados de mentira
    const performanceDiaria = [
        { dia: "Seg", progresso: 92, status: "Alta" },
        { dia: "Ter", progresso: 88, status: "Estável" },
        { dia: "Qua", progresso: 95, status: "Pico" },
        { dia: "Qui", progresso: 91, status: "Alta" },
        { dia: "Sex", progresso: 84, status: "Estável" },
        { dia: "Sáb", progresso: 62, status: "Reduzida" },
        { dia: "Dom", progresso: 45, status: "Mínima" },
    ];

    const setoresPerformance = [
        { nome: "Tecnologia", efic: "98%", cor: "bg-accent" },
        { nome: "Operações", efic: "91%", cor: "bg-indigo-500" },
        { nome: "Financeiro", efic: "94%", cor: "bg-purple-500" },
        { nome: "RH", efic: "87%", cor: "bg-slate-700" },
    ];

    const handleExport = () => {
        addToast("Compilando dados analíticos para exportação...", "info");
        setTimeout(() => {
            addToast("Relatório de desempenho baixado com sucesso!", "sucesso");
        }, 1500);
    };

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-60 flex items-center justify-center p-4 md:p-8">
                
                {/* Blur */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="absolute inset-0 bg-black/60 backdrop-blur-xl"
                />

                <motion.div 
                    initial={{ opacity: 0, scale: 0.9, y: 30 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 30 }}
                    className="bg-sidebar-primary border border-white/5 rounded-3xl shadow-2xl w-full max-w-6xl h-full max-h-[90vh] relative z-10 flex flex-col overflow-hidden"
                >
                    
                    
                    <div className="p-8 border-b border-main-border/10 flex justify-between items-start bg-main-bg">
                        <div className="space-y-1">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-accent/10 border border-accent/20 rounded-2xl flex items-center justify-center text-accent">
                                    <FiTrendingUp size={22} />
                                </div>
                                <h2 className="text-2xl font-bold text-primary-text tracking-tighter">Progresso de Trabalho</h2>
                            </div>
                            <p className="text-xs text-secondary-text font-medium ml-1">Análise detalhada de performance operacional e produtividade semanal.</p>
                        </div>

                        <div className="flex items-center gap-3">
                            <button 
                                onClick={handleExport}
                                className="h-11 px-5 bg-slate-900 border border-main-border/40 hover:border-accent text-primary-text text-xs font-bold rounded-2xl transition-all flex items-center gap-2 cursor-pointer group"
                            >
                                <FiDownload className="group-hover:translate-y-0.5 transition-transform" /> Exportar BI
                            </button>
                            <button 
                                onClick={onClose}
                                className="w-11 h-11 bg-slate-900 border border-main-border/40 hover:border-red-500/50 rounded-2xl flex items-center justify-center text-secondary-text hover:text-primary-text transition-all cursor-pointer"
                            >
                                <FiX size={20} />
                            </button>
                        </div>
                    </div>


                    <div className="flex-1 p-8 overflow-y-auto no-scrollbar space-y-8">
                        
                        
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                            {[
                                { lab: "Horas Ativas", val: "1.420h", sub: "+12% vs ontem", ic: FiClock },
                                { lab: "Colaboradores", val: "342", sub: "98% de presença", ic: FiUsers },
                                { lab: "Eficiência", val: "94.2%", sub: "Acima da meta", ic: FiZap },
                                { lab: "Inconsistências", val: "04", sub: "Tratadas hoje", ic: FiBarChart2 },
                            ].map((kpi, i) => (
                                <div key={i} className="bg-card-primary border border-white/5 rounded-3xl p-6 shadow-2xl">
                                    <div className="flex justify-between items-center text-slate-500 mb-3">
                                        <span className="text-[10px] font-black uppercase tracking-widest">{kpi.lab}</span>
                                        <kpi.ic size={14} />
                                    </div>
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-2xl font-bold text-primary-text">{kpi.val}</span>
                                        <span className="text-[10px] text-emerald-400 font-bold">{kpi.sub}</span>
                                    </div>
                                </div>
                            ))}
                        </div>


                        <div className="bg-card-primary border border-white/5 rounded-3xl p-6 shadow-2xl">
                            <div className="flex justify-between items-center mb-10">
                                <h3 className="text-sm font-bold text-primary-text flex items-center gap-2">
                                    <FiBarChart2 className="text-accent" /> Evolução de Produtividade Diária
                                </h3>
                                <div className="flex gap-2">
                                    <span className="flex items-center gap-1.5 text-[10px] font-bold text-secondary-text bg-slate-900 px-3 py-1 rounded-full border border-main-border/20">
                                        <FiCalendar size={12}/> Semana Atual
                                    </span>
                                </div>
                            </div>

                            <div className="flex items-end justify-between gap-4 h-64 px-4">
                                {performanceDiaria.map((d, i) => (
                                    <div key={i} className="flex-1 flex flex-col items-center gap-4 group">
                                        <div className="w-full relative flex flex-col justify-end h-48">
                                            {/* Tooltip */}
                                            <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white text-[#01011a] text-[10px] font-black px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                                                {d.progresso}%
                                            </div>
                                            {/* Barra */}
                                            <motion.div 
                                                initial={{ height: 0 }}
                                                animate={{ height: `${d.progresso}%` }}
                                                className={`w-full max-w-10 mx-auto rounded-t-xl transition-all duration-500 ${
                                                    d.dia === "Qua" ? "bg-accent shadow-[0_0_20px_rgba(32,48,190,0.4)]" : "bg-slate-800 group-hover:bg-slate-700"
                                                }`}
                                            />
                                        </div>
                                        <span className={`text-[10px] font-black uppercase tracking-widest ${d.dia === "Qua" ? "text-primary-text" : "text-slate-500"}`}>
                                            {d.dia}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>


                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            
                            
                            <div className="space-y-4">
                                <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-accent ml-1">Ranking de Setores</h4>
                                <div className="space-y-3">
                                    {setoresPerformance.map((setor, i) => (
                                        <div key={i} className="bg-card-primary border border-white/5 rounded-3xl p-6 shadow-2xl flex items-center justify-between group hover:border-accent/30 transition-colors">
                                            <div className="flex items-center gap-3">
                                                <div className={`w-1.5 h-6 rounded-full ${setor.cor}`} />
                                                <span className="text-xs font-bold text-primary-text">{setor.nome}</span>
                                            </div>
                                            <div className="flex items-center gap-4">
                                                <span className="text-xs font-black text-primary-text">{setor.efic}</span>
                                                <div className="w-24 h-1.5 bg-slate-900 rounded-full overflow-hidden">
                                                    <div className={`h-full ${setor.cor}`} style={{ width: setor.efic }} />
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="space-y-4 text-xs">
                                <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-accent ml-1">Observações do Algoritmo</h4>
                                <div className="bg-card-primary border border-white/5 rounded-3xl p-6 shadow-2xl space-y-4 leading-relaxed">
                                    <div className="flex gap-3">
                                        <FiZap className="text-amber-400 shrink-0 mt-1" size={16} />
                                        <p className="text-slate-300">Detectado aumento de 15% na produtividade do setor de <strong>Tecnologia</strong> após a implementação das novas escalas de folga.</p>
                                    </div>
                                    <div className="flex gap-3">
                                        <FiArrowUpRight className="text-emerald-400 shrink-0 mt-1" size={16} />
                                        <p className="text-slate-300">O índice de <strong>Absenteísmo</strong> caiu para níveis históricos (1.8%) nesta janela de 7 dias analisada.</p>
                                    </div>
                                    <button className="text-[10px] font-black uppercase text-accent hover:underline cursor-pointer pt-2">
                                        Ver Auditoria Completa
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>

                </motion.div>
            </div>
        </AnimatePresence>
    );
};

export default ExpandedPerformanceModal;