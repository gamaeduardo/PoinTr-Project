import React from "react";
import { FiCalendar, FiClock, FiMapPin, FiTag } from "react-icons/fi";
import { motion } from "framer-motion";

const EventsListTab = () => {

    const listaMock = [
        { id: 1, titulo: "Treinamento Interno: Segurança e CIPA", data: "02 Jun 2026", hora: "14:00 - 16:00", local: "Auditório Principal", cat: "Treinamento", cor: "border-emerald-500/30 text-emerald-400" },
        { id: 2, titulo: "Auditoria de Ponto e Homologação de Folha", data: "05 Jun 2026", hora: "09:00 - 12:00", local: "Sala de Reunião 03", cat: "Compliance", cor: "border-[#2030be]/30 text-[#2030be]" },
        { id: 3, titulo: "Planejamento Estratégico Q3", data: "12 Jun 2026", hora: "10:00 - 17:00", local: "Espaço Integrado", cat: "Diretoria", cor: "border-purple-500/30 text-purple-400" },
    ];

    return (
        <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 gap-4 mt-6"
        >
            {listaMock.map(evento => (
                <div key={evento.id} className="bg-card-primary border border-white/5 rounded-3xl p-6 flex flex-col md:flex-row justify-between md:items-center gap-4 hover:border-[#2030be]/30 transition-all duration-300 group">
                    <div className="space-y-2">
                        <div className="flex items-center gap-3">
                            <span className={`text-[9px] font-black uppercase tracking-widest px-2 py-0.5 rounded border ${evento.cor}`}>
                                {evento.cat}
                            </span>
                            <h3 className="text-primary-text font-bold text-base leading-tight group-hover:text-accent transition-colors">{evento.titulo}</h3>
                        </div>
                        <div className="flex items-center gap-4 text-secondary-text text-[11px] font-medium flex-wrap">
                            <span className="flex items-center gap-1"><FiCalendar size={12}/> {evento.data}</span>
                            <span className="flex items-center gap-1"><FiClock size={12}/> {evento.hora}</span>
                            <span className="flex items-center gap-1"><FiMapPin size={12}/> {evento.local}</span>
                        </div>
                    </div>
                    <button type="button" className="h-9 px-4 bg-accent/20 border border-main-border/40 hover:bg-accent-hover text-white text-xs font-bold rounded-xl transition-all cursor-pointer">
                        Detalhes do Cronograma
                    </button>
                </div>
            ))}
        </motion.div>
    );
};

export default EventsListTab;