import React from "react";
import { FiSun, FiCalendar, FiClock } from "react-icons/fi";
import { motion } from "framer-motion";

const HolidaysTab = () => {

    const feriasMock = [
        { 
            id: 1, 
            colaborador: "Arthur Pendragon", 
            cargo: "Dev Backend Sênior", 
            periodo: "01/06/2026 a 30/06/2026", 
            dias: 30,
            status: "Agendado",
            badgeStyle: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20"
        },
        { 
            id: 2, 
            colaborador: "Guinevere Costa", 
            cargo: "Analista de RH", 
            periodo: "15/05/2026 a 14/06/2026", 
            dias: 30,
            status: "Em Andamento",
            badgeStyle: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
        },
        { 
            id: 3, 
            colaborador: "Lancelot Silva", 
            cargo: "Designer UI/UX", 
            periodo: "10/07/2026 a 24/07/2026", 
            dias: 15,
            status: "Pendente",
            badgeStyle: "bg-amber-500/10 text-amber-400 border-amber-500/20"
        }
    ];

    return (
        <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="w-full space-y-6"
        >
            {/* Sub-Header interno da aba para dar contexto operacional */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-card-primary border border-white/5 rounded-3xl p-6 shadow-2xl">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-amber-500/10 border border-amber-500/20 text-amber-400 rounded-xl flex items-center justify-center">
                        <FiSun size={18} />
                    </div>
                    <div>
                        <h3 className="text-sm font-bold text-white tracking-tight">Escala Concedida de Férias</h3>
                        <p className="text-[11px] text-secondary-text font-medium mt-0.5">Planejamento anual e concessões ativas da organização.</p>
                    </div>
                </div>

                {/* Botão de ação maquiado (Uso e Eficiência) */}
                <button type="button" className="h-9 px-4 bg-accent hover:bg-accent/90 text-white font-bold text-[10px] uppercase tracking-wider rounded-xl transition-all cursor-pointer flex items-center gap-2 shadow-[0_4px_12px_rgba(32,48,190,0.15)]">
                    <FiCalendar size={12} /> Programar Férias
                </button>
            </div>

            {/* Container da Tabela */}
            <div className="bg-card-primary shadow-2xl border border-main-border/30 rounded-2xl overflow-hidden">
                <div className="overflow-x-auto no-scrollbar">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-accent/10 border-b border-accent/5 text-[9px] font-black uppercase tracking-[0.15em] text-secondary-text">
                                <th className="p-4 pl-6">Colaborador / Cargo</th>
                                <th className="p-4">Período de Afastamento</th>
                                <th className="p-4 text-center">Dias</th>
                                <th className="p-4 pr-6 text-right">Status</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-main-border/10 text-xs text-primary-text font-medium">
                            {feriasMock.map((item) => (
                                <tr key={item.id} className="hover:bg-slate-800/10 transition-colors duration-200 group">
                                    {/* Nome e Cargo */}
                                    <td className="p-4 pl-6">
                                        <div className="flex flex-col">
                                            <span className="font-bold text-white group-hover:text-accent transition-colors duration-200">
                                                {item.colaborador}
                                            </span>
                                            <span className="text-[11px] text-secondary-text font-normal mt-0.5">
                                                {item.cargo}
                                            </span>
                                        </div>
                                    </td>
                                    
                                    {/* Período */}
                                    <td className="p-4 text-secondary-text font-normal">
                                        <div className="flex items-center gap-2">
                                            <FiCalendar size={13} className="text-accent/60" />
                                            <span className="text-[11px] font-medium text-primary-text">{item.periodo}</span>
                                        </div>
                                    </td>
                                    
                                    {/* Quantidade de Dias */}
                                    <td className="p-4 text-center text-secondary-text">
                                        <div className="inline-flex items-center gap-1 bg-slate-900 px-2 py-0.5 rounded border border-main-border/20 text-[11px] font-bold text-white">
                                            <FiClock size={11} className="text-secondary-text/70" />
                                            {item.dias}d
                                        </div>
                                    </td>
                                    
                                    {/* Status Badge */}
                                    <td className="p-4 pr-6 text-right">
                                        <span className={`text-[9px] font-black uppercase tracking-widest px-2.5 py-1 rounded-md border ${item.badgeStyle}`}>
                                            {item.status}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </motion.div>
    );
};

export default HolidaysTab;