import React from "react";
import Widget from "./Widget";
import { FiSmartphone } from 'react-icons/fi';

const DeviceTypeWidget = ({ className }) => {
    
    return (
        <Widget title="Origem do Ponto" subtitle="Dispositivos Ativos" icon={FiSmartphone} className={className} >
            <div className="flex justify-around items-end h-full pb-2">
                <div className="flex flex-col items-center gap-2">
                    <div className="w-4 bg-indigo-500 h-16 rounded-t-sm" />
                    <span className="text-[9px] text-gray-500 uppercase">App</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                    <div className="w-4 bg-indigo-400 h-10 rounded-t-sm" />
                    <span className="text-[9px] text-gray-500 uppercase">Web</span>
                </div>
            </div>

        </Widget>
    );
};

export default DeviceTypeWidget;