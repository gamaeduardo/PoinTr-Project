import React from "react";
import { FiFileText, FiDownload, FiCheckCircle, FiClock, FiSearch, FiCloudLightning } from "react-icons/fi";
import { motion } from "framer-motion";

const DocumentsTab = () => {

    const documentosMock = [
        { 
            id: 1, 
            titulo: "Contrato de Trabalho Padronizado (CLT)", 
            tipo: "PDF", 
            tamanho: "1.8 MB", 
            atualizacao: "Há 2 dias",
            status: "Homologado",
            corStatus: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20"
        },
        { 
            // Mostrando conformidade com legislação, ponto forte para o TCC/PI3
            id: 2, 
            titulo: "Termo de Consentimento e Tratamento de Dados (LGPD)", 
            tipo: "PDF", 
            tamanho: "940 KB", 
            atualizacao: "15 Abr 2026",
            status: "Homologado",
            corStatus: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20"
        },
        { 
            id: 3, 
            titulo: "Acordo de Confidencialidade Geral (NDA)", 
            tipo: "DOCX", 
            tamanho: "1.2 MB", 
            atualizacao: "02 Abr 2026",
            status: "Revisão Necessária",
            corStatus: "text-amber-400 bg-amber-500/10 border-amber-500/20"
        },
        { 
            id: 4, 
            titulo: "Manual de Conduta e Cultura Organizacional", 
            tipo: "PDF", 
            tamanho: "4.5 MB", 
            atualizacao: "01 Mar 2026",
            status: "Homologado",
            corStatus: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20"
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.06 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, scale: 0.95 },
        show: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 100 } }
    };

    return (
        <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="w-full space-y-6"
        >
            {/* Bloco Informativo Superior (Uso e Status do Sistema) */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 bg-card-primary border border-white/5 rounded-3xl p-6 shadow-2xl">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-accent/10 border border-accent/20 text-accent rounded-xl flex items-center justify-center">
                        <FiCloudLightning size={18} />
                    </div>
                    <div>
                        <h3 className="text-sm font-bold text-white tracking-tight">Repositório de Documentos Homologados</h3>
                        <p className="text-[11px] text-secondary-text font-medium mt-0.5">Gestão centralizada de arquivos legais e contratuais da equipe.</p>
                    </div>
                </div>
                
                {/* Indicador de Saúde do Repositório */}
                <div className="text-[10px] font-black uppercase tracking-widest bg-slate-900 border border-main-border/20 px-3 py-1.5 rounded-xl text-slate-400 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    <span>94% em Conformidade</span>
                </div>
            </div>

            {/* Grid de Arquivos Digitais */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {documentosMock.map((doc) => (
                    <motion.div 
                        key={doc.id} 
                        variants={itemVariants}
                        className="bg-card-primary border border-white/5 rounded-3xl p-6 shadow-2xl flex items-center justify-between group hover:border-accent/40 transition-all duration-300 relative overflow-hidden"
                    >
                        {/* Detalhes do Arquivo */}
                        <div className="flex items-center gap-4 flex-1 min-w-0">
                            <div className="w-11 h-11 bg-slate-900 border border-main-border/40 rounded-xl flex items-center justify-center text-secondary-text group-hover:text-accent group-hover:border-accent/30 transition-all duration-300 shrink-0">
                                <FiFileText size={18} />
                            </div>
                            <div className="min-w-0">
                                <h4 className="text-xs font-bold text-white mb-1 tracking-tight truncate group-hover:text-accent transition-colors duration-200">
                                    {doc.titulo}
                                </h4>
                                <div className="flex items-center gap-2 text-[10px] text-secondary-text font-medium flex-wrap">
                                    <span className="bg-slate-900 px-1.5 py-0.5 rounded border border-main-border/10 font-bold text-white text-[9px]">{doc.tipo}</span>
                                    <span>•</span>
                                    <span>{doc.tamanho}</span>
                                    <span>•</span>
                                    <span className="flex items-center gap-1"><FiClock size={10} /> {doc.atualizacao}</span>
                                </div>
                            </div>
                        </div>

                        {/* Status e Ação Lateral */}
                        <div className="flex items-center gap-3 ml-4 shrink-0">
                            <span className={`hidden sm:inline-block text-[8px] font-black uppercase tracking-widest px-2 py-0.5 rounded border ${doc.corStatus}`}>
                                {doc.status}
                            </span>
                            
                            <button 
                                type="button" 
                                onClick={() => alert(`Iniciando download seguro de: ${doc.documento || "arquivo.pdf"}`)}
                                className="w-9 h-9 bg-main-bg border border-main-border/40 rounded-xl flex items-center justify-center text-secondary-text hover:text-white hover:border-accent hover:bg-accent/10 transition-all duration-200 cursor-pointer"
                                title="Download do arquivo"
                            >
                                <FiDownload size={14} />
                            </button>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

export default DocumentsTab;