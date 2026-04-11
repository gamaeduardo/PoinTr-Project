import React, { useState } from "react";
import { motion, AnimatePresence } from 'framer-motion'
import { FiSearch, FiGrid, FiBarChart2, FiChevronDown, FiUser, FiSettings, FiLogOut, FiHome } from 'react-icons/fi'; 
import SettingsModal from "./SettingsModal";
import LayoutBuilderModal from "./LayoutBuilderModal";

const Header = ({ title, onSearchClick }) => {

    const [isSettingsOpen, setIsSettingsOpen] = useState(false)
    const [isProfileOpen, setIsProfileOpen] = useState(false)
    const [isLayoutOpen, setIsLayoutOpen] = useState(false)

    // ANIMAÇÃO
    const menuVariants = {
        hidden: {
            opacity: 0,
            y: -10,
            scale: 0.95
        },
        visible: {
            opacity: 1,
            y: 0,
            scalse: 1,
            transition: { duration: 0.2, ease: "easeOut" }
        },
        exit: {
            opacity: 0,
            y: -10,
            scale: 0.95,
            transition: { duration: 0.1, ease: "easeIn" }
        }
    }
    return (
        <header className="flex justify-between items-center w-full pb-3">
            <div className="flex gap-3">
                <h1 className="text-xl font-normal items-center text-slate-500 flex gap-2 cursor-pointer">
                    <FiHome size={18} />
                    {title}
                </h1>
                <h1 className="text-xl font-medium text-primary-text">/</h1>
                <h1 className="text-xl font-normal text-primary-text">Teste</h1>
            </div>

            <div className="flex items-center space-x-6">

                <button
                    onClick={onSearchClick}
                    className="flex items-center space-x-2 p-2 rounded-lg bg-[#010918] hover:bg-[#191e57] transition text-gray-400 cursor-pointer"
                >
                    <FiSearch size={20} />
                </button>

                <div className="flex items-center space-x-4">
                    <button 
                        onClick={() => setIsLayoutOpen(true)}
                        title="Customizar Painel"
                    >
                        <FiGrid size={20} className="text-gray-400 hover:text-[#2148b4] cursor-pointer" />
                    </button>
                    <FiBarChart2 size={20} className="text-gray-400 hover:text-[#2148b4] cursor-pointer" />
                </div>

                {/* CONTAINER PERFIL */}
                <div className="relative flex items-center space-x-3 w-24">
                    <button
                        onClick={() => setIsProfileOpen(!isProfileOpen)}
                        className="flex items-center space-x-2 focus:outline-none">
                            <div className="w-10 h-10 rounded-full cursor-pointer bg-indigo-600 border-2 border-slate-700 flex items-center justify-center text-white font-bold hover:border-indigo-500 transition">
                                JS
                            </div>
                    </button>

                    {/* MENU DROPDOWN */}
                    <AnimatePresence>
                        {isProfileOpen && (
                            <motion.div
                                variants={menuVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                className="absolute right-0 top-4 mt-3 p-1 w-48 bg-card-primary border border-main-border rounded-md shadow-2xl z-50 overflow-hidden"
                            >
                                <div className="p-3 border-b border-slate-700">
                                    <p className="text-xs text-gray-400">Logado como</p>
                                    <p className="text-sm font-semibold text-white">João Silva</p>
                                </div>

                                <ul className="py-2">
                                    <li>
                                        <MenuOption icon={FiUser} text="Meu Perfil" />
                                    </li>
                                    <li onClick={() => setIsSettingsOpen(true)}>
                                        <MenuOption icon={FiSettings} text="Configurações" />
                                    </li>
                                    <div className="h-px bg-slate-700 my-2" />
                                    <li>
                                        <MenuOption icon={FiLogOut} text="Sair" color="text-red-400" />
                                    </li>
                                </ul>


                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>

            <SettingsModal 
                isOpen={isSettingsOpen}
                onClose={() => setIsSettingsOpen(false)}
            />

            {isProfileOpen && (
                <div className="fixed inset-0 z-40" onClick={() => setIsProfileOpen(false)}></div>
            )}

            <LayoutBuilderModal 
                isOpen={isLayoutOpen}
                onClose={() => setIsLayoutOpen(false)}
            />
        </header>
    );
};

const MenuOption = ({ icon: Icon, text, color = "text-gray-300"}) => (
    <li>
        <button className={`w-full flex items center space-x-3 px-4 py-2 hover:bg-slate-700 transition ${color}`}>
            <Icon size={16} />
            <span className="text-sm font-medium">{text}</span>
        </button>
    </li>
)

export default Header;