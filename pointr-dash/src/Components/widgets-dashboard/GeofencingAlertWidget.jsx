import React from "react";
import Widget from "./Widget";
import { FiMapPin } from 'react-icons/fi';

const GeofecingAlertWidget = ({ className }) => {

    return (
        <Widget title="Geolocalização" subtitle="Pontos Fora do Raio" icon={FiMapPin} className={className} >
            <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-2xl flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
                <p className="text-xs text-primary-text">1 Ocorrência hoje</p>
            </div>
            <p className="text-[9px] text-gray-500 mt-3 italic text-center">Rua das Flores, 123 (3.5km fora)</p>
        </Widget>
    );
};

export default GeofecingAlertWidget;