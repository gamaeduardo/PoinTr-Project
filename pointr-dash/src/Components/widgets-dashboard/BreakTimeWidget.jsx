import React from "react";
import Widget from "./Widget";
import { FiCoffee } from 'react-icons/fi';

const BreakTimeWidget = ({ className }) => {

    return (
        <Widget title="Em Intervalo" subtitle="Pausa para Almoço/Descanso" icon={FiCoffee} className={className} >
            <div className="text-center py-2">
                <span className="text-4xl font-black text-primary-text italic">04</span>
                <p className="text-[10px] text-gray-500 mt-1 uppercase tracking-tighter italic font-bold">Retorno previsto em 20min</p>
            </div>
        </Widget>
    );
};

export default BreakTimeWidget;