import Widget from "./Widget";
import { FiUserX } from 'react-icons/fi';

const AbsentWidget = ({ rate, className }) => {

    return (
        <Widget title="Taxa de Faltas" subtitle="Mês Corrente" icon={FiUserX} className={className}>
            <div className="flex items-center space-x-6 h-full">
                <div className="relative flex items-center justify-center">
                    <svg className="w-20 h-20 transform -rotate-90">
                        <circle cx="40" cy="40" r="35" stroke="currentColor" strokeWidth="6" fill="transparent" className="text-white/5" />
                        <circle cx="40" cy="40" r="35" stroke="currentColor" strokeWidth="6" fill="transparent" 
                            strokeDasharray={220}
                            strokeDashoffset={220 - (220 * rate) / 100}
                            className="text-red-500 transition-all duration-1000"
                        />
                    </svg>
                    <span className="absolute text-sm font-bold text-white">{rate}%</span>
                </div>
                <div className="flex-1 space-y-2">
                    <div className="flex justify-between items-center">
                        <span className="text-[10px] text-gray-500 uppercase">Atestados</span>
                        <span className="text-xs text-white font-bold">4</span>
                    </div>
                    <p className="text-[9px] text-red-400/80 mt-2 font-medium">+2% v.s mês passado</p>
                </div>
            </div>
        </Widget>
    )
};

export default AbsentWidget;