import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronLeft, FiChevronRight, FiGrid, FiMoreVertical, FiFilter, FiFileText, FiDownload, FiSettings, FiLifeBuoy, FiBell, FiMessageCircle, FiHelpCircle, FiClock } from 'react-icons/fi';
import RecentEntry from './RecentEntry';
import ToolItem from './ToolItem';

const SupportMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    
    // Dados injetados
    const [recentEntries] = useState([
        { key: 1, name: "Lucas Tania", role: "Entrada", time: "08:02" },
        { key: 2, name: "Matteo Vistocco", role: "Intervalo", time: "12:15" },
    ]);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <>
            <AnimatePresence>
                {isOpen && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={toggleMenu}
                        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-140" 
                    />
                )}
            </AnimatePresence>

            <aside className={`
                fixed top-0 right-0 h-full bg-card-primary border-l border-main-border shadow-[-20px_0_50px_rgba(0,0,0,0.5)] z-150 
                w-96 transform transition-transform duration-500 ease-[cubic-bezier(0.33,1,0.68,1)]
                ${isOpen ? 'translate-x-0' : 'translate-x-full'}
            `}>
                <div className="flex flex-col h-full p-8 text-primary-text">
                    
                    <div className="flex justify-between items-center mb-10 border-b border-main-border pb-6">
                        <div>
                            <h2 className="text-2xl font-bold tracking-tighter">Apoio</h2>
                            <p className="text-[10px] text-secondary-text uppercase font-bold tracking-widest mt-1">Ferramentas de Gestão</p>
                        </div>
                        <button className="p-2 hover:bg-white/5 rounded-xl transition-colors text-secondary-text">
                            <FiMoreVertical size={20} />
                        </button>
                    </div>

                    <div className="mb-10">
                        <h3 className="text-[10px] font-black uppercase text-secondary-text tracking-[0.2em] mb-6">Ações Rápidas</h3>
                        <div className="grid grid-cols-4 gap-4">
                            <ToolItem icon={<FiFilter />} label="Filtros" />
                            <ToolItem icon={<FiFileText />} label="Relatórios" />
                            <ToolItem icon={<FiDownload />} label="Exportar" />
                            <ToolItem icon={<FiSettings />} label="Ajustes" />
                            <ToolItem icon={<FiLifeBuoy />} label="Chamados" />
                            <ToolItem icon={<FiBell />} label="Avisos" />
                            <ToolItem icon={<FiMessageCircle />} label="Chat" />
                            <ToolItem icon={<FiHelpCircle />} label="Ajuda" />
                        </div>
                    </div>

                    <div className="h-px bg-main-border/50 mb-10" />

                    <div className="flex-1 flex flex-col min-h-0">
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="text-[10px] font-black uppercase text-secondary-text tracking-[0.2em]">Fluxo Recente</h3>
                            <FiClock size={14} className="text-secondary-text" />
                        </div>

                        <div className="space-y-2 overflow-y-auto pr-2 custom-scrollbar"> 
                            {recentEntries.length > 0 ? (
                                recentEntries.map((entry) => (
                                    <RecentEntry
                                        key={entry.key}
                                        name={entry.name}
                                        role={entry.role}
                                        time={entry.time}
                                    />
                                ))
                            ) : (
                                <div className="py-10 text-center border-2 border-dashed border-main-border rounded-4xl">
                                    <p className='text-[10px] text-secondary-text font-bold uppercase tracking-widest'>Aguardando Atividade...</p>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="mt-auto pt-6 border-t border-main-border flex justify-between items-center">
                        <span className="text-[9px] font-bold text-secondary-text/50 uppercase italic">PoinTr v0.0.45</span>
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
                    </div>
                </div>
            </aside>

            <button
                onClick={toggleMenu} 
                className={`
                    fixed top-1/2 -translate-y-1/2 z-160 w-12 h-20 
                    bg-accent hover:bg-accent/90 text-white 
                    flex items-center justify-center cursor-pointer shadow-[-10px_0_30px_rgba(99,102,241,0.3)]
                    transition-all duration-500 ease-[cubic-bezier(0.33,1,0.68,1)]
                    ${isOpen ? 'right-96 rounded-l-3xl rounded-r-none' : 'right-0 rounded-l-3xl'}
                `}
            >
                {isOpen ? (
                    <motion.div initial={{ rotate: 180 }} animate={{ rotate: 0 }}><FiChevronRight size={24} /></motion.div>
                ) : (
                    <motion.div initial={{ rotate: -180 }} animate={{ rotate: 0 }}><FiChevronLeft size={24} /></motion.div>
                )}
            </button>
        </>
    )
};

export default SupportMenu;