import React from "react";

const AcessibilitySettings = () => {

    return (
        <div className="p-8 space-y-8 h-full overflow-y-auto">
            <div className="flex items-center justify-between p-4 bg-main-bg border border-main-border rounded-2xl">
                <div>
                    <p className="text-sm font-bold text-primary-text">Alto Contraste</p>
                    <p className="text-[10px] text-secondary-text uppercase">Otimiza a leitura para baixa visão</p>
                </div>
                <div className="w-12 h-6 bg-slate-700 rounded-full relative cursor-pointer p-1">
                    <div className="w-4 h-4 bg-gray-500 rounded-full" />
                </div>
            </div>

            <div>
                <label className="text-[10px] font-black uppercase text-secondary-text tracking-widest mb-4 block">Tamanho da Interface</label>
                <input type="range" className="w-full h-1.5 bg-main-border rounded-lg appearance-none cursor-pointer accent-accent" />
                <div className="flex justify-between mt-2 text-[9px] text-secondary-text font-bold">
                    <span>90%</span>
                    <span>100% (PADRÃO)</span>
                    <span>120%</span>
                </div>
            </div>
        </div>
    );
};

export default AcessibilitySettings;