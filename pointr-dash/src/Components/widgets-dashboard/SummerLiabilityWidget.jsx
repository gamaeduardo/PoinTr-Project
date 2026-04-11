import React from "react";
import Widget from "./Widget";
import { FiShieldOff } from 'react-icons/fi';

const SummerLiabilityWidget = ({ className }) => {

    return (
        <Widget title="Passivo Trabalhista" subtitle="Risco de Férias Vencidas" icon={FiShieldOff} className={className} >
            <div className="flex items-center gap-4 mt-2">
                <div className="text-2xl font-black text-red-500 italic">03</div>
                <div className="flex-1">
                    <p className="text-[10px] text-primary-text font-bold">Funcionários Críticos</p>
                    <div className="w-full bg-white/5 h-1 mt-1 rounded-full overflow-hidden">
                        <div className="bg-red-500 h-full w-full" />
                    </div>
                </div>
            </div>
        </Widget>
    );
};

export default SummerLiabilityWidget;