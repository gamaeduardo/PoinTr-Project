import React from "react";
import { FiActivity, FiTrendingUp, FiAlertTriangle } from "react-icons/fi";

const OverviewTab = () => {

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-card-primary border border-white/5 rounded-3xl p-6 shadow-2xl">
                <div className="flex justify-between items-start text-secondary-text mb-4">
                    <span className="text-[10px] font-black uppercase tracking-widest">Score de Produtividade</span>
                    <FiActivity size={16} className="text-accent" />
                </div>
                <h3 className="text-3xl font-bold text-white tracking-tight">94.2%</h3>
                <p className="text-[11px] text-accent font-medium mt-1">+2.1% em relação ao mês anterior</p>
            </div>
            <div className="bg-card-primary border border-white/5 rounded-3xl p-6 shadow-2xl">
                <div className="flex justify-between items-start text-secondary-text mb-4">
                    <span className="text-[10px] font-black uppercase tracking-widest">Índice de Absenteísmo</span>
                    <FiTrendingUp size={16} className="text-accent" />
                </div>
                <h3 className="text-3xl font-bold text-white tracking-tight">1.8%</h3>
                <p className="text-[11px] text-accent font-medium mt-1">Abaixo da meta estipulada de 3%</p>
            </div>
            <div className="bg-card-primary border border-white/5 rounded-3xl p-6 shadow-2xl">
                <div className="flex justify-between items-start text-secondary-text mb-4">
                    <span className="text-[10px] font-black uppercase tracking-widest">Anomalias Críticas</span>
                    <FiAlertTriangle size={16} className="text-amber-400" />
                </div>
                <h3 className="text-3xl font-bold text-white tracking-tight">02</h3>
                <p className="text-[11px] text-amber-400 font-medium mt-1">Inconsistências de ponto pendentes</p>
            </div>
        </div>
    )
}

export default OverviewTab;