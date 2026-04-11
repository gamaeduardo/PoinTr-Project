import React from "react";
import Widget from "./Widget";
import { FiCoffee } from 'react-icons/fi';

const IdleAlertWidget = ({ count, className }) => {

    return (
        <Widget title="Ociosidade" subtitle="Inativos em Turno" icon={FiCoffee} className={className} >
            <div className="flex flex-col items-center justify-center py-4">
                <div className="text-5xl font-black text-orange-500 italic drop-shadow-[0_0_15px_rgba(259,115,22,0.3)]">
                    {count}
                </div>
                <p className="text-[10px] text-gray-500 font-bold uppercase mt-2 tracking-tighter text-center">Colaboradores aguardando check-in</p>
            </div>

        </Widget>
    );
};

export default IdleAlertWidget;