import React from "react";
import { FiClock, FiCheck, FiX, FiUser } from "react-icons/fi";
import { motion } from "framer-motion";
import { useToast } from "../../ToastContext";

const PendingsEvents = () => {

    const { addToast } = useToast();

    const pendentesMock = [
        { id: 1, titulo: "Palestra: Boas Práticas no Git de Equipe", solicitante: "Marcos Souza (Dev)", data: "10 Jun 2026", hora: "15:00" },
    ];

    return (
        <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full mt-6"
        >
            {pendentesMock.length > 0 ? (
                pendentesMock.map(item => (
                    <div key={item.id} className="bg-card-primary border border-white/5 rounded-3xl p-6 flex flex-col md:flex-row justify-between md:items-center gap-6">
                        <div className="space-y-2">
                            <div className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                                <h3 className="font-bold text-sm text-white tracking-tight">{item.titulo}</h3>
                            </div>
                            <p className="text-xs text-slate-400 flex items-center gap-1">
                                <FiUser size={12} className="text-accent" /> Solicitado por: <span className="text-white font-medium">{item.solicitante}</span>
                            </p>
                            <p className="text-[11px] text-secondary-text font-medium">Sugerido para: {item.data} às {item.hora}</p>
                        </div>
                        <div className="flex items-center gap-2 w-full md:w-auto">
                            <button onClick={() => addToast("Evento homologado e adicionado ao calendário!")} className="flex-1 md:flex-none h-9 px-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl transition-all cursor-pointer flex items-center justify-center gap-1"><FiCheck/> Aprovar</button>
                            <button onClick={() => addToast("Solicitação de evento descartada.", "info")} className="flex-1 md:flex-none h-9 px-4 bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-xs rounded-xl transition-all cursor-pointer flex items-center justify-center gap-1"><FiX/> Recusar</button>
                        </div>
                    </div>
                ))
            ) : (
                <div className="text-center p-12 text-secondary-text text-xs font-medium">Nenhuma solicitação de evento pendente de análise.</div>
            )}
        </motion.div>
    );
};

export default PendingsEvents;