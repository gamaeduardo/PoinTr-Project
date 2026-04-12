import React, { useState } from "react";
import { motion, AnimatePresence } from 'framer-motion'
import { FiX, FiMoon, FiSun, FiMonitor, FiCheck} from 'react-icons/fi'
import FooterSettings from "./settings/FooterSettings";
import AppearanceSettings from "./settings/AppearanceSettings";
import AcessibilitySettings from "./settings/AcessibilitySettings";
import NotificationsSettings from "./settings/NotificationsSettings";
import SecuritySettings from "./settings/SecuritySettings";

const SettingsModal = ({ isOpen, onClose }) => {

    const [activeTab, setActiveTab] = useState('appearance');

    if (!isOpen) return null

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-100 flex items-center justify-center p-4">
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                    />

                    <motion.div 
                        initial={{ scale: 0.9, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 20 }}
                        className="relative w-full h-full flex max-w-8/10 bg-[#0b0e29] border border-slate-700 rounded-2xl shadow-2xl overflow-hidden"
                    >

                        <aside className="w-64 border-r border-main-border bg-sidebar-primary p-6 flex flex-col">
                            <div className="mb-8">
                                <h2 className="text-xl font-bold text-primary-text">Configurações</h2>
                            </div>
                            
                            <nav className="space-y-2 grow">
                                <TabButton 
                                    label="Aparência" 
                                    active={activeTab === 'appearance'} 
                                    onClick={() => setActiveTab('appearance')} 
                                />
                                <TabButton 
                                    label="Acessibilidade" 
                                    active={activeTab === 'accessibility'} 
                                    onClick={() => setActiveTab('accessibility')} 
                                />
                                <TabButton 
                                    label="Notificações" 
                                    active={activeTab === 'notifications'} 
                                    onClick={() => setActiveTab('notifications')} 
                                />
                                <TabButton 
                                    label="Segurança" 
                                    active={activeTab === 'security'} 
                                    onClick={() => setActiveTab('security')} 
                                />
                            </nav>

                            <button onClick={onClose} className="mt-auto text-sm text-gray-500 hover:text-white transition text-left">
                                Versão v0.0.49
                            </button>
                        </aside>

                        <main className="grow flex flex-col h-full justify-between bg-main-bg">

                            <div className="max-h-[70%] 2xl:max-h-[81%] custom-scrollbar">
                                <div className="flex justify-between items-center p-6 border-b border-main-border">
                                    <h2 className="text-xl font-bold text-primary-text">Configurações de {activeTab}</h2>
                                    <button onClick={onClose} className="p-2 cursor-pointer text-gray-400 hover:text-white transition">
                                        <FiX size={24} />
                                    </button>
                                </div>

                                {activeTab === 'appearance' && <AppearanceSettings />}
                                {activeTab === 'accessibility' && <AcessibilitySettings/>}
                                {activeTab === 'notifications' && <NotificationsSettings/>}
                                {activeTab === 'security' && <SecuritySettings/>}
                            </div>

                            <FooterSettings onClose={onClose}/>
                        </main>

                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    )
}

const TabButton = ({ label, active, onClick }) => (
    <button
        onClick={onClick}
        className={`w-full text-left px-4 py-2.5 rounded-xl text-sm cursor-pointer font-medium transition-all ${
            active 
            ? 'bg-accent/20 text-primary-text border border-accent/20' 
            : 'text-secondary-text/80 hover:bg-accent/10 hover:text-secundary-text'
        }`}
    >
        {label}
    </button>
);

export default SettingsModal;
