import React from "react";
import { FiDownloadCloud, FiPieChart, FiTrendingUp, FiLayers, FiFileText } from "react-icons/fi";

const OverviewTab = () => {

    const estatisticas = [
        { titulo: "Total de Downloads", valor: "1,248", desc: "Arquivos gerados este mês", icone: FiDownloadCloud },
        { titulo: "Tempo de Processamento", valor: "1.4s", desc: "Média de resposta do servidor", icone: FiTrendingUp },
        { titulo: "Armazenamento em Nuvem", valor: "45.2 GB", desc: "Logs fiscais e backups criptografados", icone: FiLayers }
    ];

    return (
        <div className="space-y-8 mt-4">
            {/* Grid de Cards Grandes */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {estatisticas.map((stat, idx) => {
                    const Icon = stat.icone;
                    return (
                        <div key={idx} className="bg-card-primary border border-white/5 rounded-3xl p-6 shadow-2xl">
                            <div className="flex justify-between items-center text-secondary-text mb-3">
                                <span className="text-[10px] font-black uppercase tracking-widest">{stat.titulo}</span>
                                <div className="text-accent bg-accent/10 p-2 rounded-lg"><Icon size={14} /></div>
                            </div>
                            <h3 className="text-2xl font-bold text-white tracking-tight">{stat.valor}</h3>
                            <p className="text-[11px] text-slate-400 mt-1 font-medium">{stat.desc}</p>
                        </div>
                    );
                })}
            </div>

            {/* Seção Informativa de Logs Rápidos */}
            <div className="bg-card-primary border border-white/5 rounded-3xl p-6 shadow-2xl">
                <h4 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-4 flex items-center gap-2">
                    <FiPieChart className="text-accent" /> Distribuição por Tipo de Arquivo Gerado
                </h4>
                <div className="space-y-4">
                    <div>
                        <div className="flex justify-between text-xs font-semibold mb-1">
                            <span className="text-white">Espelho de Ponto (Arquivos fiscais AFD / Portaria 671)</span>
                            <span className="text-secondary-text">64% das requisições</span>
                        </div>
                        <div className="w-full h-2 bg-slate-900 rounded-full"><div className="h-full bg-accent w-[64%] rounded-full" /></div>
                    </div>
                    <div>
                        <div className="flex justify-between text-xs font-semibold mb-1">
                            <span className="text-white">Planilhas Operacionais (Inconsistências e Faltas)</span>
                            <span className="text-secondary-text">26% das requisições</span>
                        </div>
                        <div className="w-full h-2 bg-slate-900 rounded-full"><div className="h-full bg-indigo-500 w-[26%] rounded-full" /></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OverviewTab;