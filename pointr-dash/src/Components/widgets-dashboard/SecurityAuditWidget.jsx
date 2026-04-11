import Widget from "./Widget";
import { FiShield, FiAlertTriangle, FiInfo } from 'react-icons/fi';

const SecurityAuditWidget = ({ logs, className }) => {

    return (
        <Widget title="Auditoria de Segurança" subtitle="Eventos Recentes" icon={FiShield} className={className}>
            <div className="space-y-3 mt-1">
                {logs?.map((log, i) => (
                    <div key={i} className="flex items-start space-x-3 p-2 rounded-lg hover:bg-white/2 transition">
                        <div className={`mt-0.5 ${log.type === 'warning' ? 'text-orange-500' : 'text-blue-400'}`}>
                            {log.type === 'warning' ? <FiAlertTriangle size={14} /> : <FiInfo size={14} />}
                        </div>
                        <div className="flex-1">
                            <p className="text-xs text-primary-text font-medium leading-tight">{log.event}</p>
                            <p className="text-[9px] text-gray-500 mt-1">{log.time} • {log.user}</p>
                        </div>
                    </div>
                ))}
                <button className="w-full py-2 mt-2 border border-white/5 rounded-xl text-[10px] text-gray-500 hover:text-white hover:bg-white/5 transition uppercase font-bold tracking-widest">
                    Ver Log Completo
                </button>
            </div>
        </Widget>
    )
};

export default SecurityAuditWidget;