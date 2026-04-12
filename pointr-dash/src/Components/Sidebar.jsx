import React from "react";
import SidebarItem from "./SidebarItem";
import PointrLogo from "../assets/png/pointr_logo.png";
import { FiGrid, FiCalendar, FiUsers, FiAlertCircle, FiPlus, FiLayers, FiPieChart, FiFileText } from 'react-icons/fi';;
import MaisIcon from "../assets/png/mais.png";
import { useThemeStore } from "../store/useThemeStore";

const Sidebar = () => {
    const sidebarLayout = useThemeStore((state) => state.sidebarLayout)

    // Variações de Estilo
    const layoutClasses = {
        standard: `fixed left-5 z-10 w-19 h-[95%] sidebar-primary-cor text-white rounded-2xl shadow-2xl top-1/2 -translate-y-1/2`,
        fixed: `fixed z-10 w-21 h-full  bg-sidebar-primary border border-main-border text-white shadow-2xl top-1/2 -translate-y-1/2`, 
    }

    return (
        <aside className={`transition-all duration-500 ${layoutClasses[sidebarLayout]}`}>
            <nav className="flex flex-col items-center h-full">
                <div className="mt-5 p-1 bg-accent rounded-2xl">
                    <img src={PointrLogo} alt="Logo da PoinTr" className="w-10 h-10 object-contain"/>
                </div>

                <div className=" mt-4 mb-4 w-7/10 h-[0.1px] bg-slate-700/20"></div>

                <ul className="flex flex-col items-center text-secondary-text hover:text-primary-text">
                    <div className="bg-linear-to-tl 2xl:p-2.5 p-2 rounded-full border-2 border-secondary-text transition-all duration-300 hover:border-primary-text cursor-pointer">
                        <FiPlus className="2xl:text-2xl text-xl object-contain"/>
                    </div>
                </ul>

                <div className=" mt-4 mb-4 w-7/10 h-[0.1px] bg-slate-700/20"></div>
                
                <ul className="flex flex-col items-center space-y-1">
                    <SidebarItem icon={FiGrid} text="Geral" to="/" />
                    <SidebarItem icon={FiCalendar} text="Gestão" to="/events"/>
                    <SidebarItem icon={FiUsers} text="Ausências" to="/employees" />
                    <SidebarItem icon={FiAlertCircle} text="Alertas" to="/employees/1" />
                    <SidebarItem icon={FiLayers} text="Turnos" to="/shifts" />
                    <SidebarItem icon={FiPieChart} text="Análises" to="/testes" />
                </ul>
                
                <div className=" mt-4 mb-4 w-7/10 h-[0.1px] bg-slate-700/20"></div>

                <ul className="flex flex-col items-center space-y-2">
                    <SidebarItem icon={FiFileText} text="Relatórios" to="/testes" />
                </ul>

                 <ul className="absolute bottom-4 space-y-2">
                    <button className="mt-auto 2xl:text-sm text-[12px] text-gray-500 hover:text-accent transition text-left">
                        v0.0.49
                    </button>
                </ul>

            </nav>
        </aside>
    )
};

export default Sidebar;