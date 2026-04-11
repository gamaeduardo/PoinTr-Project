import React from "react";
import Widget from "./Widget";
import { FiClock } from 'react-icons/fi';

const LateArrivalsWidget = ({ className }) => {

    return (
        <Widget title="Atrasos Detectados" subtitle="Entradas após tolerância" icon={FiClock} className={className} >
            <div className="space-y-3">
                {['Carlos Lima', 'Beatriz Silva'].map((name, i) => (
                    <div key={i} className="flex items-center justify-between p-2 bg-red-500/5 rounded-xl">
                        <span className="text-xs text-primary-text">{name}</span>
                        <span className="text-[10px] text-red-400 font-mono">+15 min</span>
                    </div>
                ))}
            </div>
        </Widget>
    );
};

export default LateArrivalsWidget;