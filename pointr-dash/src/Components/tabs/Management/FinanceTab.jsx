import React from "react";
import { FiDollarSign, FiPieChart } from "react-icons/fi";

const FinanceTab = () => {

    return (
        <div className="bg-card-primary border border-white/5 rounded-3xl p-6 shadow-2xl space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h4 className="text-sm font-bold text-white">Previsão de Impacto Financeiro</h4>
                    <p className="text-[11px] text-secondary-text mt-0.5">Auditoria preditiva baseada em horas extras e adicionais noturnos.</p>
                </div>
                <span className="text-[9px] font-black uppercase tracking-widest px-2.5 py-1 rounded border border-emerald-500/20 bg-emerald-500/10 text-emerald-400">
                    Folha Fechada
                </span>
            </div>
            
            
            <div className="space-y-3">
                <div>
                    <div className="flex justify-between text-[11px] font-medium mb-1">
                        <span className="text-slate-400">Salários Base Regulamentados</span>
                        <span className="text-white font-bold">R$ 142.500,00</span>
                    </div>
                    <div className="w-full h-2 bg-slate-900 rounded-full overflow-hidden">
                        <div className="h-full bg-accent w-[85%]" />
                    </div>
                </div>
                <div>
                    <div className="flex justify-between text-[11px] font-medium mb-1">
                        <span className="text-slate-400">Provisionamento de Horas Extras</span>
                        <span className="text-white font-bold">R$ 18.240,00</span>
                    </div>
                    <div className="w-full h-2 bg-slate-900 rounded-full overflow-hidden">
                        <div className="h-full bg-amber-500 w-[15%]" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FinanceTab;