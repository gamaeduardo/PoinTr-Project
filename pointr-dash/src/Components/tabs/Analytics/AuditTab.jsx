import React from "react";
import { FiShield, FiAlertTriangle, FiCheckCircle, FiUserCheck } from "react-icons/fi";

const AuditTab = () => {

    const logsAnomalias = [
        { id: 1, colab: "Arthur Pendragon", erro: "Esquecimento de Ponto", desc: "Ponto de saída não computado", severidade: "Leve", cor: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20" },
        { id: 2, colab: "Lancelot Silva", erro: "Conflito de Geolocalização", desc: "IP de marcação fora do perímetro da filial", severidade: "Crítica", cor: "bg-red-500/10 text-red-400 border-red-500/20" },
    ];

    return (
        <div className="space-y-6 mt-4">
            
            
            <div className="bg-card-primary border border-white/5 rounded-3xl p-6 shadow-2xl flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 rounded-xl flex items-center justify-center">
                        <FiShield size={18} />
                    </div>
                    <div>
                        <h3 className="text-sm font-bold text-white tracking-tight">Varredura Preventiva de Integridade</h3>
                        <p className="text-[11px] text-secondary-text font-medium mt-0.5">Mecanismo analítico que detecta marcações suspeitas ou inconsistências legais.</p>
                    </div>
                </div>

                <div className="text-[10px] font-black uppercase tracking-widest bg-slate-900 border border-main-border/20 px-3 py-1.5 rounded-xl text-emerald-400 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Nenhum vazamento detectado</span>
                </div>
            </div>


            <div className="bg-card-primary border border-white/5 rounded-3xl p-6 shadow-2xl">
                <h4 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-4 flex items-center gap-2">
                    <FiAlertTriangle className="text-amber-500" /> Inconsistências Identificadas pelo Algoritmo
                </h4>

                <div className="space-y-3">
                    {logsAnomalias.map(log => (
                        <div key={log.id} className="bg-main-bg border border-main-border/20 rounded-xl p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 hover:border-slate-800 transition-colors">
                            <div className="space-y-1">
                                <div className="flex items-center gap-2">
                                    <span className="text-xs font-bold text-white">{log.colab}</span>
                                    <span className={`text-[8px] font-black uppercase tracking-widest px-1.5 py-0.2 rounded border ${log.cor}`}>{log.severidade}</span>
                                </div>
                                <p className="text-[11px] font-semibold text-amber-400">{log.erro}</p>
                                <p className="text-[11px] text-slate-500 font-medium">{log.desc}</p>
                            </div>
                            <button onClick={() => alert("Notificação de inconsistência enviada ao gestor.")} className="h-8 px-3 border border-main-border/40 hover:border-accent text-slate-400 hover:text-white rounded-lg text-[10px] font-black uppercase tracking-wider transition-all cursor-pointer">
                                Tratar Log
                            </button>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default AuditTab;