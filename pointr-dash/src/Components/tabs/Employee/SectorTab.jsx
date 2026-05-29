import React from "react";
import { FiLayers, FiUsers, FiUser, FiArrowRight, FiSliders } from "react-icons/fi";
import { motion } from "framer-motion";

const SectorTab = () => {

    const setoresMock = [
        { 
            id: 1, 
            nome: "Tecnologia & Engenharia", 
            gestor: "Eduardo Admin", 
            funcionarios: 12, 
            status: "Operando",
            corStatus: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
        },
        { 
            id: 2, 
            nome: "Recursos Humanos & DP", 
            gestor: "Ana Paula Silva", 
            funcionarios: 4, 
            status: "Operando",
            corStatus: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
        },
        { 
            id: 3, 
            nome: "Financeiro & Compliance", 
            gestor: "Roberto Costa", 
            funcionarios: 3, 
            status: "Auditoria",
            corStatus: "bg-amber-500/10 text-amber-400 border-amber-500/20"
        },
        { 
            id: 4, 
            nome: "Operações & Logística", 
            gestor: "Marcos Souza", 
            funcionarios: 25, 
            status: "Sobrecarga",
            corStatus: "bg-red-500/10 text-red-400 border-red-500/20"
        },
    ];

    // Variantes do Framer Motion para uma entrada suaaaaaave
    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.08 }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 15 },
        show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
    };

    return (
        <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6"
        >
            {setoresMock.map((setor) => (
                <motion.div
                    key={setor.id}
                    variants={cardVariants}
                    className="bg-card-primary border border-white/5 rounded-3xl p-6 flex flex-col justify-between shadow-2xl hover:border-accent/40 transition-all duration-300 group relative overflow-hidden"
                >
                    
                    <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3.5">
                            <div className="w-11 h-11 bg-accent/10 border border-accent/20 rounded-xl flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300">
                                <FiLayers size={18} />
                            </div>
                            <div>
                                <h3 className="font-bold text-sm tracking-tight text-white group-hover:text-accent transition-colors duration-300">
                                    {setor.nome}
                                </h3>
                                <div className="flex items-center gap-1.5 text-secondary-text text-[11px] font-medium mt-0.5">
                                    <FiUsers size={12} className="text-secondary-text/60" /> 
                                    <span>{setor.funcionarios} colaboradores</span>
                                </div>
                            </div>
                        </div>

                        <span className={`text-[9px] font-black uppercase tracking-widest px-2.5 py-1 rounded-md border ${setor.corStatus}`}>
                            {setor.status}
                        </span>
                    </div>


                    <div className="h-px bg-main-border/20 my-2 w-full" />


                    <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center gap-2 text-secondary-text text-xs">
                            <FiUser size={13} className="text-accent/70" />
                            <span className="font-medium text-[11px]">
                                Gestor: <strong className="text-white font-semibold">{setor.gestor}</strong>
                            </span>
                        </div>


                        <button 
                            type="button" 
                            className="flex items-center gap-1 text-[10px] font-black uppercase tracking-wider text-secondary-text hover:text-white transition-colors duration-200 cursor-pointer"
                        >
                            <span>Gerenciar</span>
                            <FiArrowRight size={12} className="transform group-hover:translate-x-1 transition-transform duration-300" />
                        </button>
                    </div>


                    <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-accent/2 rounded-full blur-xl group-hover:bg-accent/5 transition-all duration-500 pointer-events-none" />
                </motion.div>
            ))}

            {/* Card de Atalho para Criar Setor */}
            <motion.button
                variants={cardVariants}
                type="button"
                className="border border-dashed border-main-border/40 hover:border-accent/60 rounded-2xl p-6 flex flex-col items-center justify-center gap-2 group transition-all duration-300 cursor-pointer bg-transparent min-h-36.5"
            >
                <div className="w-10 h-10 rounded-full bg-slate-900 border border-main-border/40 flex items-center justify-center text-secondary-text group-hover:text-accent group-hover:border-accent/40 transition-all duration-300">
                    <FiSliders size={16} />
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest text-secondary-text group-hover:text-white transition-colors">
                    Configurar Estrutura Organizacional
                </span>
            </motion.button>
        </motion.div>
    );
};

export default SectorTab;