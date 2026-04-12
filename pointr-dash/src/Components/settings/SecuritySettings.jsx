import React from "react";
import { FiShield } from "react-icons/fi";

const SecuritySettings = () => {

    return (
        <div className="p-8 space-y-8 h-full overflow-y-auto">
            <div className="p-6 bg-accent/5 border border-accent/20 rounded-4xl flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <div className="p-3 bg-accent rounded-2xl text-primary-text shadow-lg shadow-accent/20">
                        <FiShield size={24} />
                    </div>
                    <div>
                        <p className="text-sm font-bold text-primary-text">Autenticação 2FA</p>
                        <p className="text-[10px] text-green-400 font-black uppercase">Ativado via App</p>
                    </div>
                </div>
                <button className="text-[10px] font-black uppercase tracking-widest text-secondary-text hover:text-white transition-colors">Configurar</button>
            </div>

            <div>
                <h4 className="text-[10px] font-black uppercase text-secondary-text tracking-[0.2em] mb-4">Sessões Ativas</h4>
                <div className="space-y-2">
                    {[
                        { device: 'Linux (Arch) - São Paulo', ip: '191.12.4.2', current: true },
                        { device: 'iPhone 15 Pro - Rio de Janeiro', ip: '187.4.2.1', current: false },
                    ].map((session, i) => (
                        <div key={i} className="flex justify-between items-center p-3 bg-main-bg border border-main-border rounded-xl">
                            <div>
                                <p className="text-[11px] font-bold text-primary-text">{session.device} {session.current && <span className="text-accent ml-2">• ATUAL</span>}</p>
                                <p className="text-[9px] text-secondary-text font-mono mt-0.5">{session.ip}</p>
                            </div>
                            {!session.current && <button className="text-[9px] text-red-400 font-bold uppercase hover:underline">Deslogar</button>}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SecuritySettings;