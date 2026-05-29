import React from "react";
import { motion } from "framer-motion";

const PageFilters = ({ options, activeOption, onOptionSelect }) => {
    
    const currentActive = activeOption || options[0]?.id;

    return (
        <div className="relative flex items-center gap-1 mb-10 overflow-x-auto pb-4 no-scrollbar">

            {options.map((option) => {
                const isActive = currentActive === option.id;
                
                return (
                    <button
                        key={option.id}
                        onClick={() => onOptionSelect && onOptionSelect(option.id)}
                        className={`
                            relative px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-[0.15em] transition-all duration-300 whitespace-nowrap cursor-pointer
                            ${isActive ? 'text-white' : 'text-secondary-text hover:text-primary-text'}
                        `}
                    >
                        
                        {isActive && (
                            <motion.div
                                layoutId="activeDashboardTab"
                                className="absolute inset-0 bg-accent rounded-xl shadow-accent"
                                transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                            />
                        )}
                        
                        <span className="relative z-10 flex items-center gap-2">
                            {option.label}
                            {isActive && (
                                <motion.span 
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    className="w-1 h-1 bg-white rounded-full"
                                />
                            )}
                        </span>
                    </button>
                );
            })}
        </div>
    );
};

export default PageFilters;