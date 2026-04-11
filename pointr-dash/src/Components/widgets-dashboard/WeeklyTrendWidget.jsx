import React from "react";
import Widget from "./Widget";
import { FiTrendingUp } from 'react-icons/fi';

const WeeklyTrendWidget = ({ className }) => {

    return (
        <Widget title="Tendência Semanal" subtitle="Volume de Horas" icon={FiTrendingUp} className={className}>
            <div className="flex flex-col justify-center">
                <p className="text-xs text-gray-500 uppercase">Total: <span className="text-primary-text font-bold">1.240h</span></p>
                <div className="flex items-center gap-2 mt-1">
                    <div className="flex-1 h-1.5 bg-primary-text/5 rounded-full overflow-hidden">
                        <div className="bg-green-500 h-full w-[70%]" />
                    </div>
                    <span className="text-[10px] text-green-400">+14%</span>
                </div>
            </div>
        </Widget>
    );
};

export default WeeklyTrendWidget;