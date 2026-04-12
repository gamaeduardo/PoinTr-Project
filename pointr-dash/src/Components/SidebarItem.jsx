import React from "react";
import { Link, useMatch } from 'react-router-dom';
import { motion } from 'framer-motion';

const SidebarItem = ({ icon: Icon, text, to }) => {
    // Verifica se a rota atual condiz com item do menu
    const active = useMatch(to);

    return (
        <li className="relative group flex flex-col items-center">
            <Link 
                to={to} 
                className={`
                    relative flex items-center justify-center h-10 w-10 2xl:h-12 2xl:w-12 
                    2xl:rounded-2xl rounded-xl transition-all duration-300 cursor-pointer
                    ${active 
                        ? 'bg-accent shadow-[0_0_20px_rgba(99,102,241,0.4)] text-white' 
                        : 'bg-transparent text-secondary-text hover:bg-white/5 hover:text-primary-text'
                    }
                `}
            >
                <Icon 
                    size={20} 
                    className={`transition-all duration-300 ${active ? 'scale-110' : 'opacity-60 group-hover:opacity-100 group-hover:scale-110'}`} 
                />

                {active && (
                    <motion.div 
                        layoutId="sidebar-active-indicator"
                        className="absolute -left-2 w-1 h-6 bg-accent rounded-r-full shadow-[0_0_10px_rgba(99,102,241,0.8)]"
                    />
                )}

                <span className="
                    absolute left-16 px-3 py-2 rounded-xl
                    bg-card-primary border border-main-border
                    text-primary-text text-[10px] font-black uppercase tracking-widest
                    whitespace-nowrap z-200
                    invisible opacity-0 -translate-x-3
                    transition-all duration-200 ease-out
                    group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
                    shadow-2xl shadow-black/50 backdrop-blur-md
                ">
                    {text}
                    <div className="absolute top-1/2 -left-1 -translate-y-1/2 w-2 h-2 bg-card-primary border-l border-b border-main-border rotate-45" />
                </span>
            </Link>
        </li>
    );
};

export default SidebarItem;