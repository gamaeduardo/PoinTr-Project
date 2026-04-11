import React from "react";
import Widget from "./Widget";
import { FiCalendar } from 'react-icons/fi';

const ContractEndWidget = ({ className }) => {

    return (
        <Widget title="Vencimento de Contratos" subtitle="Próximos 60 dias" icon={FiCalendar} className={className} >
            <div className="flex flex-col gap-2 mt-1">
                <div className="flex justify-between text-xs text-primary-text font-medium">
                    <span>Expêriencia (2)</span>
                    <span className="text-indigo-400">Renovar?</span>
                </div>
                <div className="w-full bg-white/5 h-1 rounded-full overflow-hidden">
                    <div className="bg-indigo-500 h-full w-[30%]" />
                </div>
            </div>
        </Widget>
    );
};

export default ContractEndWidget;