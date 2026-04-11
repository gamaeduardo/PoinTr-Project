import React from "react";
import Widget from "./Widget";
import { FiLogOut } from 'react-icons/fi';

const MissingCheckOutWidget = ({ className }) => {

    return (
        <Widget title="Saídas Pendentes" subtitle="Esquecimento do Registro" icon={FiLogOut} className={className} >
            <div className="space-y-3 mt-1">
                <div className="p-3 bg-red-500/5 border border-red-500/10 rounded-2xl flex items-center justify-between">
                    <span className="text-xs text-primary-text">4 Colaboradores</span>
                    <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                </div>
                <p className="text-[9px] text-gray-500 text-center uppercase font-bold">Corrigir antes do fechamento</p>
            </div>
        </Widget>
    );
};

export default MissingCheckOutWidget;