import React from "react";
import { FiAlertCircle, FiCheck, FiX, FiFileText, FiCalendar, FiClock } from "react-icons/fi";
import { motion } from "framer-motion";

const AbsencesTab = () => {

    const ausenciasMock = [
        { 
            id: 1, 
            colaborador: "Lancelot Silva", 
            cargo: "Designer UI/UX",
            motivo: "Atestado Médico (CID M54.5)", 
            periodo: "Hoje (Período Integral)",
            documento: "atestado_medico_lancelot.pdf",
            tamanhoDoc: "420 KB",
            status: "Pendente",
            badgeStyle: "bg-amber-500/10 text-amber-400 border-amber-500/20"
        },
        { 
            // Exemplo de ausência já resolvida para povoar o histórico (Heurística de Status do Sistema)
            id: 2, 
            colaborador: "Morgana Le Fay", 
            cargo: "Product Manager",
            motivo: "Licença Maternidade / Consulta", 
            periodo: "25/05/2026 (Meio Período)",
            documento: "declaracao_comparecimento.pdf",
            tamanhoDoc: "180 KB",
            status: "Aprovado",
            badgeStyle: "bg-accent/10 text-accent border-accent/20"

        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { staggerChildren: 0.1 } }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 12 },
        show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 120 } }
    };

    return (
        <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="w-full space-y-4 mt-6"
        >
            {/* Iteração dos Cards de Justificativa */}
            {ausenciasMock.map((item) => {
                const isPendente = item.status === "Pendente";
                
                return (
                    <motion.div
                        key={item.id}
                        variants={cardVariants}
                        className={`bg-card-primary border border-white/5 rounded-3xl p-6 shadow-2xl flex flex-col lg:flex-row lg:items-center justify-between gap-6 transition-all duration-300 group relative overflow-hidden ${
                            isPendente ? 'border-main-border/30 hover:border-amber-500/30' : 'border-main-border/10 opacity-70'
                        }`}
                    >
                        {/* Lado Esquerdo: Info do Colaborador e Motivo */}
                        <div className="flex flex-col md:flex-row md:items-center gap-4 flex-1">
                            <div className={`w-10 h-10 rounded-xl border flex items-center justify-center transition-colors ${
                                isPendente 
                                ? 'bg-amber-500/10 border-amber-500/20 text-amber-400 group-hover:bg-amber-500 group-hover:text-black' 
                                : 'bg-slate-800/60 border-slate-700/50 text-slate-400'
                            }`}>
                                <FiAlertCircle size={18} />
                            </div>

                            <div className="space-y-1">
                                <div className="flex items-center gap-2.5 flex-wrap">
                                    <h4 className="font-bold text-sm text-white tracking-tight">{item.colaborador}</h4>
                                    <span className="text-[11px] text-secondary-text font-normal">({item.cargo})</span>
                                    <span className={`text-[8px] font-black uppercase tracking-widest px-2 py-0.5 rounded border ${item.badgeStyle}`}>
                                        {item.status}
                                    </span>
                                </div>
                                <p className="text-xs text-primary-text font-medium">
                                    Motivo: <span className={isPendente ? "text-amber-400 font-semibold" : "text-slate-400"}>{item.motivo}</span>
                                </p>
                                <div className="flex items-center gap-3 text-secondary-text text-[11px] font-medium pt-0.5">
                                    <span className="flex items-center gap-1"><FiCalendar size={12}/> {item.periodo}</span>
                                </div>
                            </div>
                        </div>

                        {/* Centro: Arquivo Anexado (Visual Clean e Corporativo) */}
                        <div className="bg-main-bg border border-main-border/20 rounded-xl p-3 flex items-center gap-3 min-w-60 md:max-w-xs group/doc hover:border-accent/40 transition-colors">
                            <div className="text-secondary-text group-hover/doc:text-accent transition-colors">
                                <FiFileText size={16} />
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-[11px] font-bold text-white truncate cursor-pointer hover:underline">{item.documento}</p>
                                <p className="text-[9px] text-secondary-text font-medium mt-0.5">{item.tamanhoDoc} • Visualizar Anexo</p>
                            </div>
                        </div>

                        {/* Lado Direito: Ações (Renderiza apenas se estiver Pendente) */}
                        <div className="flex items-center gap-2 w-full lg:w-auto justify-end">
                            {isPendente ? (
                                <>
                                    <button 
                                        type="button" 
                                        onClick={() => alert("Justificativa aceita. Banco de horas e folha atualizados de forma inquestionável.")}
                                        className="flex-1 lg:flex-none h-9 px-4 bg-accent hover:bg-accent-hover text-white rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-[0_4px_12px_rgba(16,185,129,0.15)]"
                                    >
                                        <FiCheck size={14} /> Aprovar
                                    </button>
                                    <button 
                                        type="button"
                                        onClick={() => alert("Ausência recusada. Desconto em folha ou compensação necessária.")}
                                        className="flex-1 lg:flex-none h-9 px-4 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                                    >
                                        <FiX size={14} /> Recusar
                                    </button>
                                </>
                            ) : (
                                <span className="text-[10px] font-black uppercase tracking-widest text-secondary-text/50 select-none pr-2">
                                    Auditado pelo RH
                                </span>
                            )}
                        </div>
                    </motion.div>
                );
            })}
        </motion.div>
    );
};

export default AbsencesTab;