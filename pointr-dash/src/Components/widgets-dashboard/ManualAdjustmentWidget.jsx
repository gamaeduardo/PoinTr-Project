import React from "react";
import Widget from "./Widget";
import { FiEdit3 } from 'react-icons/fi';

const ManualAdjustmentWidget = ({ className }) => {

    return (
        <Widget title="Ajustes Manuais" subtitle="Correções Realizadas" icon={FiEdit3} className={className}>
            <div className="flex items-center justify-between mt-4">
                <span className="text-3xl font-black text-primary-text italic">14</span>
                <div className="px-2 py-1 bg-white/5 rounded-xl border border-white/5">
                    <p className="text-[8px] text-gray-500 font-black uppercase">Últimas 24 horas</p>
                </div>
            </div>
        </Widget>
    );
};

export default ManualAdjustmentWidget;