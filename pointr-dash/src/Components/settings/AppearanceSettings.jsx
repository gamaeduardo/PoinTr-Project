import { useThemeStore } from "../../store/useThemeStore";
import React, { useState } from "react";
import { FiX, FiMoon, FiSun, FiMonitor, FiCheck, FiColumns, FiLayers } from 'react-icons/fi'
import Sidebar from "../Sidebar";

const AppearanceSettings = () => {


    const { sidebarLayout, setSidebarLayout } = useThemeStore()
    const { theme, setTheme } = useThemeStore()
    const [brandColor, setBrandColor] = useState('#2C68F6')

    return (

        <div className="p-8 space-y-8 h-full overflow-y-auto">

            <section>
                <h3 className="text-sm font0semibold text-gray-400 uppercase tracking-wider mb-4">Cor da Identidade</h3>
                <div className="flex items-center space-x-3">
                    {['#6C68F6', '#8B5CF6', '#EC4899', '#10B981', '#F59E0B'].map(color => (
                        <button
                            key={color}
                            onClick={() => setBrandColor(color)}
                            style={{ backgroundColor: color }}
                            className="w-10 h-10 rounded-full flex items-center justify-center transition-transform hover:scale-110 active:scale-95"
                        >
                            {brandColor === color && <FiCheck className="text-white" />}
                        </button>
                    ))}
                </div>
            </section>

            <section>
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Tema do Sistema</h3>
                <div className="grid grid-cols-3 gap-4">
                    <ThemeOption 
                        label="Modern"
                        active={theme === 'modern'}
                        onClick={() => setTheme('modern')}
                        icon={<FiMonitor size={20} />}
                    />

                    <ThemeOption 
                        label="Lampad"
                        active={theme === 'lampad'}
                        onClick={() => setTheme('lampad')}
                        icon={<FiSun size={20} />}
                    />

                    <ThemeOption 
                        label="Code"
                        active={theme === 'code'}
                        onClick={() => setTheme('code')}
                        icon={<FiMoon size={20} />}
                    />

                    <ThemeOption 
                        label="Emerald"
                        active={theme === 'emerald'}
                        onClick={() => setTheme('emerald')}
                        icon={<FiMoon size={20} />}
                    />
                </div>
            </section>

            <section>
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Visual das Tabelas</h3>
                <div className="flex space-x-4">
                    <div className="flex-1 p-4 rounded-xl border-2 border-indigo-600 bg-indigo-600/10 text-white text-center cursor-pointer">
                        Padrão
                    </div>

                    <div className="flex-1 p-4 rounded-xl border-2 border-slate-700 bg-transparent text-gray-400 text-center cursor-pointer hover:border-slate-500 transition">
                        Compacto
                    </div>
                </div>
            </section>

            <section>
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
                    Estilo da barra lateral
                </h3>
                <div className="grid grid-cols-2 gap-4">
                    <button
                        onClick={() => setSidebarLayout('standard')}
                        className={`flex items-center p-4 rounded-xl border-2 transition-all ${
                            sidebarLayout === 'standard'
                                ? 'border-indigo-600 bg-indigo-600/10 text-white'
                                : 'border-slate-800 text-gray-500 hover:border-slate-700'
                        }`}
                    >
                        <FiColumns className="mr-3" size={20} />
                        <div className="text-left">
                            <p className="text-sm font-bold">Padrão</p>
                            <p className="text-[10px] opacity-60">Colada na borda</p>
                        </div>
                    </button>

                    <button
                        onClick={() => setSidebarLayout('fixed')}
                        className={`flex items-center p-4 rounded-xl border-2 transition-all ${
                            sidebarLayout === 'fixed'
                                ? 'border-indigo-600 bg-indigo-600/10 text-white'
                                : 'border-slate-800 text-gray-500 hover:border-slate-700'
                        }`}
                    >
                        <FiLayers className="mr-3" size={20} />
                        <div className="text-left">
                            <p className="text-sm font-bold">Fixa</p>
                            <p className="text-[10px] opacity-60">Com margens e curvas</p>
                        </div>
                    </button>
                </div>
            </section>
        </div>
    )
};

const ThemeOption = ({ label, active, onClick, icon}) => (
    <button 
        onClick={onClick}
        className={`flex flex-col items-center justify-center cursor-pointer p-4 rounded-xl border-2 transition ${
            active ? 'border-indigo-600 bg-indigo-600/10 text-white' : 'border-slate-700 bg-slate-800/50 text-gray-400 hover:border-slate-500'
        }`}
    >
        <div className="w-full h-40 bg-indigo-400 mb-3 rounded-2xl"></div>
        <div className="mb-2">{icon}</div>
        <span className="text-xs font-medium">{label}</span>
    </button>
)

export default AppearanceSettings;