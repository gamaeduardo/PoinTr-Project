import React from "react";
import { FiFileText, FiDownload, FiUser, FiCalendar, FiTrash2 } from "react-icons/fi";

const HistoryTab = () => {

    const historicoMock = [
        { id: 1, nome: "Relatorio_Faturamento_Horas_Extras_Maio.xlsx", tamanho: "4.2 MB", autor: "Eduardo Admin", data: "28/05/2026", tipo: "XLSX" },
        { id: 2, nome: "Espelho_Ponto_Fiscal_Geral_Abril.pdf", tamanho: "18.5 MB", autor: "Sistema (Automático)", data: "01/05/2026", tipo: "PDF" },
        { id: 3, nome: "Auditoria_Geolocalizacao_Logistica.csv", tamanho: "840 KB", autor: "Ana Paula Silva", data: "24/04/2026", tipo: "CSV" }
    ];

    return (
        <div className="bg-card-primary border border-white/5 rounded-3xl shadow-2xl overflow-hidden mt-4">
            <div className="overflow-x-auto no-scrollbar">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-accent/10 border-b border-accent/5 w-full p-6 text-[9px] font-black uppercase tracking-[0.15em] text-secondary-text">
                            <th className="p-4 pl-6">Nome do Arquivo</th>
                            <th className="p-4">Gerado Por</th>
                            <th className="p-4">Data de Emissão</th>
                            <th className="p-4 pr-6 text-right">Ações</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-main-border/10 text-xs p-6 text-primary-text font-medium">
                        {historicoMock.map((arq) => (
                            <tr key={arq.id} className="hover:bg-slate-800/10 transition-colors group">
                                <td className="p-4 pl-6">
                                    <div className="flex items-center gap-3">
                                        <div className="w-9 h-9 bg-slate-900 border border-main-border/30 rounded-xl flex items-center justify-center text-slate-400 group-hover:text-accent transition-colors"><FiFileText size={15} /></div>
                                        <div>
                                            <span className="font-bold text-white block group-hover:text-accent transition-colors">{arq.nome}</span>
                                            <span className="text-[10px] text-secondary-text font-normal">{arq.tamanho} • Tipo: {arq.tipo}</span>
                                        </div>
                                    </div>
                                </td>
                                <td className="p-4 text-slate-400">
                                    <div className="flex items-center gap-1.5"><FiUser size={12}/> {arq.autor}</div>
                                </td>
                                <td className="p-4 text-slate-400">
                                    <div className="flex items-center gap-1.5"><FiCalendar size={12}/> {arq.data}</div>
                                </td>
                                <td className="p-4 pr-6 text-right">
                                    <div className="inline-flex gap-2">
                                        <button onClick={() => alert(`Baixando ${arq.nome}`)} className="w-8 h-8 bg-[#01011a] border border-main-border/40 rounded-lg flex items-center justify-center text-secondary-text hover:text-white hover:border-accent transition-all cursor-pointer"><FiDownload size={13}/></button>
                                        <button onClick={() => alert("Removendo arquivo do servidor")} className="w-8 h-8 bg-[#01011a] border border-main-border/40 rounded-lg flex items-center justify-center text-secondary-text hover:text-red-400 hover:border-red-500/40 transition-all cursor-pointer"><FiTrash2 size={13}/></button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default HistoryTab;