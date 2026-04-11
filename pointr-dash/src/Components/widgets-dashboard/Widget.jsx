import React from "react";
import { FiMoreVertical, FiMaximize2, FiRefreshCw } from 'react-icons/fi';
import { motion } from 'framer-motion';

const Widget = ({ title, subtitle, children, className = "", icon: Icon, isLoading = false, onRefresh }) => {

    return (
        <motion.div
            layout // Animação para ajustar quando mudar a posição no Grid
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className={`
                bg-card-primary border border-white/5 rounded-3xl p-6 
                flex flex-col shadow-2xl relative group
                ${className}
            `}
        >
            
            {(title || Icon) && (
                <div className="flex justify-between items-start mb-6">
                    <div className="flex items-center space-x-4">
                        {Icon && (
                            <div className="p-3 bg-accent/20 rounded-2xl text-accent group-hover:scale-110 transition-transform">
                                <Icon size={22} />
                            </div>
                        )}
                        <div>
                            <h3 className="text-primary-text font-bold text-base leading-tight">
                                {title}
                            </h3>
                            {subtitle && (
                                <p className="text-gray-500 text-[11px] uppercase tracking-widest mt-1 font-medium">
                                    {subtitle}
                                </p>
                            )}
                        </div>
                    </div>


                    <div className="flex items-center space-x-1 opacity-0 group-hover:opacity-100 transition-opacity text-gray-500">
                        {onRefresh && (
                            <button onClick={onRefresh} className="p-1.5 hover:text-indigo-400 transition">
                                <FiRefreshCw size={14} />
                            </button>
                        )}
                        <button className="p-1.5 hover:text-white transition cursor-pointer">
                            <FiMaximize2 size={14} />
                        </button>
                        <button className="p-1.5 hover:text-white transition cursor-pointer">
                            <FiMoreVertical size={14} />
                        </button>
                    </div>
                </div>
            )}

            {/* CONTEÚDO */}
            <div className={`flex-1 w-full ${isLoading ? 'blur-sm pointer-events-none' : ''} transition-all`}>
                {children}
            </div>

            {/* LOADING OVERLAY */}
            {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-[#0b0e29]/20 rounded-3xl">
                    <div className="w-8 h-8 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
                </div>
            )}
        </motion.div>
    );
};

export default Widget;