import Widget from "./Widget";
import { FiTarget } from 'react-icons/fi';

const ProjectDeadlineWidget = ({ projectName, percentage, className }) => {

    return (
        <Widget title="Prazo de Entrega" subtitle={projectName} icon={FiTarget} className={className}>
            <div className="flex flex-col justify-center h-full">
                <div className="flex justify-between items-end mb-2">
                    <span className="text-xs text-gray-400 uppercase font-medium">Status do Sprint</span>
                    <span className="text-xl font-bold text-primary-text">{percentage}%</span>
                </div>

                <div className="w-full h-3 bg-white/5 rounded-full overflow-hidden border border-white/5 p-0.5">
                    <div
                        className="h-full rounded-full bg-linear-to-r from-indigo-600 to-purple-500 transition-all duration-1000"
                        style={{ width: `${percentage}%` }}
                    />
                </div>

                <div className="flex justify-between mt-3">
                    <p className="text-[9px] text-gray-500 italic">Início: 01 Abr</p>
                    <p className="text-[9px] text-indigo-400 font-bold">Entrega: 30 Abr</p>
                </div>
            </div>
        </Widget>
    )
};

export default ProjectDeadlineWidget;