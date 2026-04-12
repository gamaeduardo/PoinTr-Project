import React from "react";
import { FiCheck } from "react-icons/fi";

const NotificationsSettings = () => {

    return (
        <div className="p-8 space-y-8 h-full overflow-y-auto">
            <div className="space-y-3">
                <h4 className="text-[10px] font-black uppercase text-accent tracking-[0.2em]">Canais de Alerta</h4>
                {['Push no Navegador', 'E-mail Diário', 'Relatórios por WhatsApp'].map(item => (
                    <div key={item} className="flex items-center gap-3 p-3 hover:bg-white/2 rounded-xl transition-colors">
                        <div className="w-5 h-5 border-2 border-main-border rounded-md flex items-center justify-center text-accent">
                            <FiCheck size={14} />
                        </div>
                        <span className="text-xs text-primary-text">{item}</span>
                    </div>
                ))}
            </div>

            <div className="p-4 border-t border-main-border mt-6">
                <p className="text-xs font-bold text-primary-text mb-2 italic">Horário de Silêncio</p>
                <p className="text-[10px] text-secondary-text mb-4">Suspender notificações automáticas fora do expediente</p>
                <div className="flex gap-2">
                    <input type="time" className="bg-main-bg border border-main-border p-2 rounded-lg text-xs text-primary-text outline-none" defaultValue="20:00" />
                    <span className="text-secondary-text self-center">até</span>
                    <input type="time" className="bg-main-bg border border-main-border p-2 rounded-lg text-xs text-primary-text outline-none" defaultValue="08:00" />
                </div>
            </div>
        </div>
    );
};

export default NotificationsSettings;