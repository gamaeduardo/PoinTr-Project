import Widget from "./Widget";
import { FiAlertCircle, FiClock } from 'react-icons/fi';

const OvertimeAlertWidget = ({ alerts, className }) => {

    return (
        <Widget title="Horas Extras" subtitle="Aprovações Pendentes" icon={FiAlertCircle} className={className} >
            <div className="space-y-3">
                {alerts?.map((alert) => (
                    <div key={alert.id} className="flex items-center justify-between p-3 bg-orange-500/5 border border-orange-500/10 rounded-2xl group hover:border-orange-500/30 transition-colors">
                        <div className="flex items-center space-x-3">
                            <FiClock className="text-orange-500" size={14} />
                            <span className="text-xs text-primary-text font-medium">{alert.userName}</span>
                        </div>
                        <span className="text-[10px] font-bold text-orange-400">{alert.amount}h</span>
                    </div>
                ))}
                <button className="w-full py-2 text-[10px] text-gray-500 uppercase font-bold tracking-tighter hover:text-white transition">Ver todas as solicitações</button>
            </div>
        </Widget>
    )
};

export default OvertimeAlertWidget;