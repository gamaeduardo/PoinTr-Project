import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiHardHat, FiX } from 'react-icons/fi';

const ItemConstruction = ({ isVisible, onClose }) => {

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, x: 100, scale: 0.9 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: 100, scale: 0.9 }}
                    className="fixed bottom-8 right-8 z-300 flex items-center gap-4 bg-card-primary border border-accent/30 p-4 rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.4)] backdrop-blur-xl"
                >

                    <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center text-accent shadow-[0_0_15px_rgba(99,102,241,0.2)]">
                        <FiHardHat size={20} className="animate-puls" />
                    </div>

                    <div className="flex flex-col">
                        <span className="text-[11px] font-black uppercase tracking-widest text-primary-text">
                            Recurso em Desenvolvimento
                        </span>
                        <span className="text-[10px] text-secondary-text font-medium">
                            Estamos trabalhando ao máximo para trazer essa ferramenta para você.
                        </span>
                    </div>

                    <button
                        onClick={onClose}
                        className="ml-4 p-1 hover:bg-white/5 rounded-lg text-secondary-text transition-colors"
                    >
                        <FiX size={16} />
                    </button>

                    {/* Barrinha Estética (Falando em voz alta parece bem...) */}
                    <motion.div
                        initial={{ width: "100%" }}
                        animate={{ width: "0%" }}
                        transition={{ duration: 4 }}
                        className="absolute bottom-0 left-0 h-0.5 bg-accent rounded-full"
                    />

                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ItemConstruction;