import React from "react";
import Widget from "./Widget";
import { FiBarChart2 } from 'react-icons/fi';

const WorkloadbalanceWidget = ({ className }) => {

    return (
        <Widget title="Carga de Trabalho" subtitle="Equilíbrio da Equipe" icon={FiBarChart2} className={className} >
            <div className="space-y-3 mt-2">
                <div className="w-full bg-primary-text/5 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-indigo-500 h-full w-[85%]" />
                </div>
                <div className="flex justify-between text-[10px] text-gray-500">
                    <span>Sobrecarga (2)</span>
                    <span>Ideal (15)</span>
                    <span>Ocioso (1)</span>
                </div>
            </div>
        </Widget>
    );
};

export default WorkloadbalanceWidget;