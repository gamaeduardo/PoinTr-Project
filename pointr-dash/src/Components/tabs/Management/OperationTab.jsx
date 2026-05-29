import React from "react";
import { FiCpu, FiCheckCircle } from "react-icons/fi";

const OperationTab = () => {

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-card-primary border border-white/5 rounded-3xl p-6 shadow-2xl flex items-center justify-between">
                <div className="space-y-1">
                    <span className="text-[9px] font-black uppercase tracking-widest text-secondary-text">Eficiência de Cobertura</span>
                    <h4 className="text-xl font-bold text-white">98.6% das Escalas</h4>
                    <p className="text-[11px] text-slate-500">Postos operacionais devidamente preenchidos hoje.</p>
                </div>
                <div className="text-accent bg-accent/10 p-3 rounded-xl border border-accent/20"><FiCpu size={20} /></div>
            </div>
            <div className="bg-card-primary border border-white/5 rounded-3xl p-6 shadow-2xl flex items-center justify-between">
                <div className="space-y-1">
                    <span className="text-[9px] font-black uppercase tracking-widest text-secondary-text">Auditorias de Dispositivos</span>
                    <h4 className="text-xl font-bold text-white">Terminais Sincronizados</h4>
                    <p className="text-[11px] text-accent flex items-center gap-1 mt-0.5"><FiCheckCircle size={12}/> Comunicação com App Mobile está estável.</p>
                </div>
            </div>
        </div>
    )
}

export default OperationTab;