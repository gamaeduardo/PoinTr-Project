import React from "react";
import { FiClock, FiActivity, FiZap, FiArrowUpRight } from "react-icons/fi";

const JourneyTab = () => {

    return (
        <div className="space-y-6 mt-4">
            {/* Grid de Cards Macros */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-card-primary border border-white/5 rounded-3xl p-6 shadow-2xl relative overflow-hidden group">
                    <span className="text-[9px] font-black uppercase tracking-widest text-secondary-text block mb-2">Horas Computadas (Mês)</span>
                    <h3 className="text-3xl font-bold text-white tracking-tight">24.840h</h3>
                    <p className="text-[11px] text-emerald-400 font-medium mt-1 flex items-center gap-1"><FiArrowUpRight/> +4.2% de produtividade nominal</p>
                </div>
                <div className="bg-card-primary border border-white/5 rounded-3xl p-6 shadow-2xl relative overflow-hidden group">
                    <span className="text-[9px] font-black uppercase tracking-widest text-secondary-text block mb-2">Gargalo de Horas Extras</span>
                    <h3 className="text-3xl font-bold text-amber-400 tracking-tight">1.240h</h3>
                    <p className="text-[11px] text-amber-400 font-medium mt-1">Concentrado no setor de Tecnologia</p>
                </div>
                <div className="bg-card-primary border border-white/5 rounded-3xl p-6 shadow-2xl relative overflow-hidden group">
                    <span className="text-[9px] font-black uppercase tracking-widest text-secondary-text block mb-2">Eficiência Operacional</span>
                    <h3 className="text-3xl font-bold text-white tracking-tight">96.8%</h3>
                    <p className="text-[11px] text-slate-500 mt-1">Alinhamento estrito com as escalas base</p>
                </div>
            </div>


            <div className="bg-card-primary border border-white/5 rounded-3xl p-6 shadow-2xl">
                <h4 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-6 flex items-center gap-2">
                    <FiActivity className="text-accent" /> Volumetria de Horas Extras por Departamento
                </h4>
                
                <div className="flex flex-col gap-5">
                    
                    <div className="space-y-1.5">
                        <div className="flex justify-between text-xs font-bold">
                            <span className="text-white">Engenharia de Software & TI</span>
                            <span className="text-amber-400">420 horas acumuladas</span>
                        </div>
                        <div className="w-full h-3 bg-slate-900/80 border border-main-border/10 rounded-full overflow-hidden">
                            <div className="h-full bg-amber-500 rounded-full w-[85%] shadow-[0_0_15px_rgba(245,158,11,0.2)]" />
                        </div>
                    </div>


                    <div className="space-y-1.5">
                        <div className="flex justify-between text-xs font-bold">
                            <span className="text-white">Operações & Logística</span>
                            <span className="text-secondary-text">280 horas acumuladas</span>
                        </div>
                        <div className="w-full h-3 bg-slate-900/80 border border-main-border/10 rounded-full overflow-hidden">
                            <div className="h-full bg-accent rounded-full w-[55%]" />
                        </div>
                    </div>


                    <div className="space-y-1.5">
                        <div className="flex justify-between text-xs font-bold">
                            <span className="text-white">Recursos Humanos & DP</span>
                            <span className="text-secondary-text">45 horas acumuladas</span>
                        </div>
                        <div className="w-full h-3 bg-slate-900/80 border border-main-border/10 rounded-full overflow-hidden">
                            <div className="h-full bg-slate-700 rounded-full w-[12%]" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JourneyTab;