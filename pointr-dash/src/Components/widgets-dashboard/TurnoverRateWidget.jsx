import React from "react";
import Widget from "./Widget";
import { FiUsers } from 'react-icons/fi';

const TurnoverRateWidget = ({ rate, className }) => {

    return (
        <Widget title="Contratações" subtitle="Taxa de Rotatividade" icon={FiUsers} className={className} >
            <div className="flex flex-col justify-center h-full">
                <div className="flex items-center space-x-3">
                    <span className="text-3xl font-black text-primary-text italic">{rate}%</span>
                    <div className="px-2 py-0.5 bg-green-500/10 text-green-400 rounded text-[9px] font-bold">-0.8% est.</div>
                </div>
                <p className="text-[10px] text-gray-500 mt-2">Média do setor: 5.2%</p>
            </div>
        </Widget>
    );
};

export default TurnoverRateWidget;