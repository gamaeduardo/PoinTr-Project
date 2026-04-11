import Widget from "./Widget";
import { FiUsers } from 'react-icons/fi';

const ActiveNowWidget = ({ members, className }) => {

    return (
         <Widget title="Ativos Agora" subtitle="Presença em Tempo Real" icon={FiUsers} className={className}>
            <div className="space-y-3 mt-2">
                {members?.slice(0, 4).map(m => (
                    <div key={m.id} className="flex items-center justify-between bg-main-bg/40 p-2 rounded-xl border border-white/5">
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                            <span className="text-xs font-medium text-primary-text">{m.name}</span>
                        </div>
                        <span className="text-[10px] text-secondary-text font-mono">{m.checkIn}</span>
                    </div>
                ))}
                <p className="text-[9px] text-center text-secondary-text pt-1">+{members?.length - 4} outros colaboradores</p>
            </div>
        </Widget>
    )
   
};

export default ActiveNowWidget;