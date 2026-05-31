import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiArrowLeft, FiHome, FiSearch, FiHelpCircle } from "react-icons/fi";

const NotFoundPage = ({ aoVoltarHome }) => {
    const [termoBusca, setTermoBusca] = useState("");

    const handleBuscaSimulada = (e) => {
        e.preventDefault();
        if (!termoBusca.trim()) return;
        
        
        alert(`Buscando localmente por: "${termoBusca}"...\nRedirecionando para o módulo correspondente.`);
        if (aoVoltarHome) aoVoltarHome(); // Força o retorno
    };

    return (
        <div className="min-h-screen bg-[#01011a] flex flex-col items-center justify-center p-6 font-sans relative overflow-hidden">
            

            <div className="text-center z-10 space-y-6">
                

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: "spring", stiffness: 100, delay: 0.1 }}
                    className="relative inline-block"
                >
                    <h1 className="text-[13rem] font-black tracking-tighter text-transparent bg-clip-text bg-linear-to-b from-indigo-600 to-indigo-800 select-none opacity-90 italic">
                        404
                    </h1>

                    <span className="absolute top-60 right-2 bg-red-500/10 border border-red-500/30 text-red-400 text-[9px] font-black uppercase tracking-widest px-2 py-0.5 rounded-md shadow-lg">
                        Rota Inexistente
                    </span>
                </motion.div>


                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="space-y-2"
                >
                    <h2 className="text-3xl font-bold text-white tracking-tight">
                        Página não encontrada
                    </h2>
                    <p className="text-md text-secondary-text leading-relaxed max-w-md mx-auto font-medium">
                        A página que você tentou acessar não existe, foi movida ou o link está quebrado. Não se preocupe, a PoinTr registrou esse log de forma segura.
                    </p>
                </motion.div>



                <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4 w-full"
                >
                    <button
                        type="button"
                        onClick={aoVoltarHome}
                        className="w-full sm:w-auto h-12 px-6 bg-[#2030be] hover:bg-[#2030be]/90 text-white text-xs font-bold rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2 shadow-[0_4px_20px_rgba(32,48,190,0.15)] active:scale-95"
                    >
                        <FiHome size={14} /> Voltar ao Painel Principal
                    </button>

                    <button
                        type="button"
                        onClick={() => alert("Abrindo chamado de suporte com a engenharia do PoinTr.")}
                        className="w-full sm:w-auto h-12 px-6 bg-transparent border border-main-border/60 hover:border-white text-slate-300 hover:text-white text-xs font-bold rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2"
                    >
                        <FiHelpCircle size={14} /> Reportar Bug
                    </button>
                </motion.div>

            </div>


            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-140 h-140 bg-[#2030be]/3 rounded-full blur-[130px] pointer-events-none" />
        </div>
    );
};

export default NotFoundPage;