import React from 'react';
import PointrLogo from "../../assets/png/pointr_logo.png";
import { useNavigate } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';

const Navbar = () => {
    
    const navigate = useNavigate();
    return (
        <nav className="fixed top-0 w-full z-100 px-8 py-4 flex justify-between items-center bg-transparent backdrop-blur-md border-b border-white/5">
        <div className="text-xl font-bold italic flex items-center tracking-tighter text-white">
            <img src={PointrLogo} alt="Logo" className="w-12 h-12 object-contain"/>
            PoinTr
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-[10px] font-black uppercase tracking-widest text-secondary-text">
            <a href="#features" className="hover:text-white transition-colors">Funcionalidades</a>
            <a href="#pricing" className="hover:text-white transition-colors">Planos</a>
            <a href="#about" className="hover:text-white transition-colors">Empresa</a>
        </div>

        <button 
            onClick={() => navigate('/login')}
            className="px-6 py-3 bg-white text-black text-[10px] font-black uppercase tracking-widest rounded-full hover:bg-[#2030be] cursor-pointer hover:text-white transition-all flex items-center gap-2 group"
        >
            Acessar Plataforma
            <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
        </button>
        </nav>
    );
};

export default Navbar;