import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLayoutStore } from '../store/useLayoutStore';
import { FiX, FiCheck, FiLayers } from 'react-icons/fi';

const LayoutBuilderModal = ({ isOpen, onClose }) => {
    const { layout, setLayout } = useLayoutStore();
    
    const [tempLayout, setTempLayout] = useState(layout);

    const availableWidgets = [
        { id: 'chart-1', name: 'Gráfico de Horas', minW: 3, minH: 3},
        { id: 'stats-1', name: 'Métricas Rápidas', minW: 3, minH: 2},
    ];

    // Variantes para animação de entrada
    const modalVariants = {
        hidden: { opacity: 0, scale: 0.9, y: 20 },
        visible: { 
            opacity: 1, 
            scale: 1, 
            y: 0,
            transition: { type: 'spring', damping: 25, stiffness: 300 } 
        },
        exit: { opacity: 0, scale: 0.9, y: 20, transition: { duration: 0.2 } }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: i => ({
            opacity: 1,
            x: 0,
            transition: { delay: i * 0.1 }
        })
    };

    const handleSave = () => {
        setLayout(tempLayout); // Salva no Zustand
        onClose();
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-110 flex items-center justify-center p-4 md:p-10">
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/85 backdrop-blur-sm"
                    />

                    <motion.div 
                        variants={modalVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="relative bg-[#0b0e29] w-full max-w-7xl h-full rounded-[2.5rem] border border-white/10 flex flex-col overflow-hidden shadow-2xl"
                    >
                        
                        <div className="flex justify-between items-center p-6 border-b border-white/5 bg-[#080a1f]/50">
                            <div className="flex items-center space-x-4">
                                <div className="p-3 bg-indigo-500/20 rounded-2xl text-indigo-400">
                                    <FiLayers size={24} />
                                </div>
                                <div>
                                    <h2 className="text-white font-bold text-xl">Construtor de Dashboard</h2>
                                    <p className="text-gray-500 text-xs">Ajuste a grade de 15 colunas para seu fluxo de trabalho</p>
                                </div>
                            </div>
                            
                            <div className="flex items-center space-x-3">
                                <button 
                                    onClick={onClose}
                                    className="px-6 py-2.5 text-gray-400 hover:text-white transition font-medium text-sm"
                                >
                                    Cancelar
                                </button>
                                <button 
                                    onClick={handleSave}
                                    className="flex items-center space-x-2 bg-indigo-600 hover:bg-indigo-500 px-6 py-2.5 rounded-2xl text-white font-bold transition shadow-lg shadow-indigo-600/20 text-sm"
                                >
                                    <FiCheck />
                                    <span>Salvar Layout</span>
                                </button>
                            </div>
                        </div>

                        <div className="flex flex-1 overflow-hidden">
                            
                            <aside className="w-80 bg-[#080a1f] p-8 border-r border-white/5 overflow-y-auto">
                                <h3 className="text-gray-400 text-[10px] uppercase tracking-[0.2em] font-bold mb-6">Widgets Disponíveis</h3>
                                <div className="space-y-4">
                                    {availableWidgets.map((w, i) => (
                                        <motion.div 
                                            key={w.id}
                                            custom={i}
                                            variants={itemVariants}
                                            initial="hidden"
                                            animate="visible"
                                            whileHover={{ scale: 1.02, x: 5 }}
                                            whileTap={{ scale: 0.98 }}
                                            className="p-5 bg-slate-900/50 rounded-2xl cursor-grab border border-white/5 hover:border-indigo-500/50 transition-colors group"
                                        >
                                            <p className="text-white font-semibold text-sm mb-1 group-hover:text-indigo-300 transition-colors">{w.name}</p>
                                            <div className="flex items-center justify-between">
                                                <span className="text-[10px] text-gray-500 font-mono">ID: {w.id}</span>
                                                <span className="px-2 py-0.5 bg-slate-800 rounded-md text-[9px] text-indigo-400 font-bold uppercase">{w.minW}x{w.minH}</span>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </aside>

                            {/* ÁREA DO GRID */}
                            <main className="flex-1 p-10 relative overflow-auto bg-[#04051a]">
                                <div
                                    className='grid gap-1 border border-white/5 bg-white/1 rounded-xl p-1'
                                    style={{ 
                                        display: 'grid', 
                                        gridTemplateColumns: 'repeat(15, 1fr)', 
                                        gridAutoRows: '45px' 
                                    }}
                                >
                                    
                                    {Array.from({ length: 150 }).map((_, i) => (
                                        <div key={i} className="border border-white/3 rounded-sm pointer-events-none" />
                                    ))}

                                    {/* RENDERIZAÇÃO DOS WIDGETS NO MAPA */}
                                    {tempLayout.map(item => (
                                        <motion.div
                                            key={item.id}
                                            layout // 💡 Essencial: faz o widget deslizar para a nova posição
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            style={{
                                                gridColumn: `span ${item.w}`,
                                                gridRow: `span ${item.h}`,
                                            }}
                                            className="rounded-xl flex flex-col items-center justify-center text-[10px] font-bold text-indigo-300 border-2 border-indigo-600/50 bg-indigo-600/10 shadow-inner group relative"
                                        >
                                            <span className="uppercase tracking-widest">{item.id}</span>
                                            
                                            {/* Ícone de "Drag" simulado */}
                                            <div className="absolute top-2 right-2 flex space-x-0.5 opacity-30 group-hover:opacity-100 transition-opacity">
                                                <div className="w-1 h-1 bg-white rounded-full"></div>
                                                <div className="w-1 h-1 bg-white rounded-full"></div>
                                                <div className="w-1 h-1 bg-white rounded-full"></div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </main>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default LayoutBuilderModal;