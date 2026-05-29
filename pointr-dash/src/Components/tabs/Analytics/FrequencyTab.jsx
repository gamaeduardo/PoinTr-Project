import React from "react";
import { FiSmile, FiUserCheck, FiTarget, FiTrendingUp } from "react-icons/fi";

const FrequencyTab = () => {

    const diasSemana = [
        { dia: "Segunda", taxa: "98.2%", barra: "w-[98%]", status: "Excelente" },
        { dia: "Terça", taxa: "97.5%", barra: "w-[97%]", status: "Excelente" },
        { dia: "Quarta", taxa: "96.1%", barra: "w-[96%]", status: "Estável" },
        { dia: "Quinta", taxa: "94.8%", barra: "w-[94%]", status: "Estável" },
        { dia: "Sexta", taxa: "89.2%", barra: "w-[89%]", status: "Atenção (Queda)" },
    ];

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-4">
            
            
            <div className="lg:col-span-2 bg-card-primary border border-white/5 rounded-3xl p-6 shadow-2xl space-y-6">
                <div>
                    <h4 className="text-xs font-black uppercase tracking-widest text-slate-400 flex items-center gap-2">
                        <FiTarget className="text-accent" /> Taxa de Pontualidade por Dia da Semana
                    </h4>
                    <p className="text-[11px] text-secondary-text mt-1">Identificação analítica de padrões comportamentais de atraso.</p>
                </div>

                <div className="space-y-4 pt-2">
                    {diasSemana.map((item, idx) => (
                        <div key={idx} className="flex items-center justify-between gap-4 text-xs font-medium">
                            <span className="text-slate-400 w-16 text-left">{item.dia}</span>
                            <div className="flex-1 h-3 bg-slate-900 rounded-lg overflow-hidden border border-main-border/10">
                                <div className={`h-full rounded-lg ${item.dia === 'Sexta' ? 'bg-indigo-500/80' : 'bg-accent'} ${item.barra}`} />
                            </div>
                            <span className="text-white font-bold w-12 text-right">{item.taxa}</span>
                            <span className={`hidden sm:inline-block text-[9px] font-black uppercase tracking-widest px-1.5 py-0.5 rounded border text-center w-28 ${item.dia === 'Sexta' ? 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20' : 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'}`}>{item.status}</span>
                        </div>
                    ))}
                </div>
            </div>


            <div className="lg:col-span-1 flex flex-col gap-6">
                <div className="bg-card-primary border border-white/5 rounded-3xl p-6 shadow-2xl flex-1 flex flex-col justify-between">
                    <div>
                        <span className="text-[9px] font-black uppercase tracking-widest text-secondary-text block mb-1">Taxa de Turno Cumprida</span>
                        <h4 className="text-2xl font-bold text-white tracking-tight">99.1%</h4>
                        <p className="text-[11px] text-slate-500 mt-0.5 leading-relaxed">Apenas 0.9% de discrepância em postos de trabalho críticos mapeados.</p>
                    </div>
                    <div className="text-emerald-400 bg-emerald-500/5 p-4 rounded-xl border border-emerald-500/10 text-[11px] font-medium flex items-center gap-2 mt-4">
                        <FiUserCheck size={16} className="shrink-0" />
                        <span>Empresa operando na zona de segurança operacional corporativa.</span>
                    </div>
                </div>

                <div className="bg-card-primary border border-white/5 rounded-3xl p-6 shadow-2xl flex-1">
                    <span className="text-[9px] font-black uppercase tracking-widest text-secondary-text block mb-1">Média de Atrasos Líquida</span>
                    <h4 className="text-2xl font-bold text-indigo-400 tracking-tight">04 min / colab</h4>
                    <p className="text-[11px] text-emerald-400 font-medium mt-1 flex items-center gap-1"><FiTrendingUp className="transform scale-y-[-1]"/> -12% de redução com alertas automáticos</p>
                </div>
            </div>

        </div>
    );
};

export default FrequencyTab;