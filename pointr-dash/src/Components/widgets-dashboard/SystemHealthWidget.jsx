import React from "react";
import Widget from "./Widget";
import { FiCpu } from 'react-icons/fi';

const SystemHealthWidget = ({ className }) => {

    return (
        <Widget title="Status Hardware" subtitle="Integração REP/Relógio" icon={FiCpu} className={className} >
            <div className="flex items-center gap-3 py-2">
                <div className="w-3 h-3 bg-green-500 rounded-full shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
                <span className="text-xs text-primary-text font-bold">Dispositivos Online (12/12)</span>
            </div>
            <p className="text-[9px] text-gray-500 uppercase tracking-widest italic">Latência: 14ms</p>
        </Widget>
    );
};

export default SystemHealthWidget;