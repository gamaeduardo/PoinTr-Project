import React from "react";
import Widget from "./Widget";
import { FiStar, FiAward } from 'react-icons/fi';

const TopPerformerWidget = ({ performer, className }) => {

    return (
        <Widget title="Top Performer" subtitle="Colaborador do Mês" icon={FiStar} className={className}>
            <div className="flex flex-col items-center justify-center space-y-3">
                <div className="relative">
                    <div className="w-16 h-16 rounded-full bg-slate-800 border-2 border-indigo-500 p-1">
                        <img src={performer?.avatar} alt="Foto de Perfil" className="w-full h-full rounded-full object-cover" />
                    </div>
                    <div className="absolute -bottom-1 -right-1 bg-indigo-500 p-1 rounded-full text-white">
                        <FiAward size={12} />
                    </div>
                </div>
                <div className="text-center">
                    <p className="text-sm font-bold text-primary-text">{performer?.name}</p>
                    <p className="text-[10px] text-indigo-400 font-black uppercase tracking-widest">{performer?.hours} Horas Ativas</p>
                </div>
            </div>
        </Widget>
    );
};

export default TopPerformerWidget;