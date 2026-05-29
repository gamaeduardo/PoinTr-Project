import React from "react";
import { FiHeart, FiSmile } from "react-icons/fi";

const HRTab = () => {

    return (
        <div className="bg-card-primary border border-white/5 rounded-3xl p-6 shadow-2xl space-y-4">
            <h4 className="text-sm font-bold text-white flex items-center gap-2"><FiSmile className="text-accent"/> Saúde Organizacional e Clima</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="bg-main-bg border border-main-border/20 p-4 rounded-xl">
                    <span className="text-[9px] font-black uppercase tracking-widest text-secondary-text">eNPS da Empresa</span>
                    <h5 className="text-2xl font-bold text-white tracking-tight mt-1">78 <span className="text-xs text-slate-500">Zona de Excelência</span></h5>
                </div>
                <div className="bg-main-bg border border-main-border/20 p-4 rounded-xl">
                    <span className="text-[9px] font-black uppercase tracking-widest text-secondary-text">Turnover Acumulado</span>
                    <h5 className="text-2xl font-bold text-white tracking-tight mt-1">1.2% <span className="text-xs text-accent">Sob Controle</span></h5>
                </div>
            </div>
        </div>
    )
}

export default HRTab;