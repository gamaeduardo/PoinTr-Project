import Widget from "./Widget";
import { FiDollarSign } from 'react-icons/fi';

const LaborCostWidget = ({ cost, className}) => {
    
    return (
        <Widget title="Custo Operacional" subtitle="Folha acumulada / Mês" icon={FiDollarSign} className={className}>
            <div className="mt-2">
                <p className="text-[10px] text-gray-500 mb-1 uppercase tracking-widest">Investimento Atual</p>
                <h2 className="text-2xl font-bold text-white tracking-tight">
                    { new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(cost)}
                </h2>

                <div className="mt-4 flex gap-2">
                    <div className="flex-1 bg-white/5 p-2 rounded-xl border border-white/5">
                        <p className="text-[9px] text-gray-500 uppercase">Horas Extras</p>
                        <p className="text-xs font-bold text-blue-400">R$ 1.240</p>
                    </div>
                    <div className="flex-1 bg-white/5 p-2 rounded-xl border border-white/5">
                        <p className="text-[9px] text-gray-500 uppercase">Adicionais</p>
                        <p className="text-xs font-bold text-indigo-400">R$ 850</p>
                    </div>
                </div>
            </div>
        </Widget>
    )
};

export default LaborCostWidget;