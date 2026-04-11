import React from "react";
import Widget from "./Widget";
import { FiLayout } from 'react-icons/fi';

const ShiftCoverageWidget = ({ className }) => {
    const shifts = [
        { name: 'Manhã', status: 'Completo', color: 'text-green-400' },
        { name: 'Tarde', status: '2 Faltas', color: 'text-orange-400' },
        { name: 'Noite', status: 'Completo', color: 'text-green-400' },
    ];

    return (
        <Widget title="Cobertura de Turnos" subtitle="Status das Escalas Hoje" icon={FiLayout} className={className} >
            <div className="space-y-4 mt-2">
                {shifts.map((s, i) => (
                    <div key={i} className="flex justify-between items-center border-b border-white/5 pb-2">
                        <span className="text-sm text-primary-text">{s.name}</span>
                        <span className={`text-[10px] font-bold uppercase ${s.color}`}>{s.status}</span>
                    </div>
                ))}
            </div>
        </Widget>
    );
};

export default ShiftCoverageWidget;