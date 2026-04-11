import React from "react";
import SidebarItem from "./SidebarItem";
import PointrLogo from "../assets/png/pointr_logo.png";
import GeralIcon from "../assets/png/geral.png";
import AlertaIcon from "../assets/png/alertas.png";
import AnaliseIcon from "../assets/png/analise.png";
import AusenciasIcon from "../assets/png/ausencias.png";
import GestaoIcon from "../assets/png/gestao.png";
import RelatorioIcon from "../assets/png/relatorio.png";
import TurnosIcon from "../assets/png/turnos.png";
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
                <div className="mt-5 bg-linear-to-tl p-1 from-[#0a0d71] to-[#2835ee] rounded-2xl">
                    <img src={PointrLogo} alt="Logo da PoinTr" className="w-10 h-10 object-contain"/>
                </div>

                <div className=" mt-4 mb-4 w-7/10 h-[0.1px] bg-slate-700/20"></div>

                <ul className="flex flex-col items-center">
                    <div className="bg-linear-to-tl p-4 rounded-full border-2 border-slate-900 cursor-pointer">
                        <img src={MaisIcon} alt="Atalho" className="w-3 h-3 object-contain invert-100"/>
                    </div>
                </ul>

                <div className=" mt-4 mb-4 w-7/10 h-[0.1px] bg-slate-700/20"></div>
                
                <ul className="flex flex-col items-center space-y-1">
                    <SidebarItem iconSrc={GeralIcon} text="Geral" to="/" />
                    <SidebarItem iconSrc={GestaoIcon} text="Gestão" to="/events"/>
                    <SidebarItem iconSrc={AusenciasIcon} text="Ausências" to="/employees" />
                    <SidebarItem iconSrc={AlertaIcon} text="Alertas" to="/employees/1" />
                    <SidebarItem iconSrc={TurnosIcon} text="Turnos" to="/shifts" />
                    <SidebarItem iconSrc={AnaliseIcon} text="Análises" to="/testes" />
                </ul>
                
                <div className=" mt-4 mb-4 w-7/10 h-[0.1px] bg-slate-700/20"></div>

                <ul className="flex flex-col items-center space-y-2">
                    <SidebarItem iconSrc={RelatorioIcon} text="Relatórios" to="/testes" />
                </ul>

                 <ul className="absolute bottom-4 space-y-2">
                    <button className="mt-auto text-sm text-gray-500 hover:text-white transition text-left">
                        v0.0.1
                    </button>
                </ul>

            </nav>
        </aside>
    )
};

export default Sidebar;