import React from "react";
import { motion } from 'framer-motion';
import { FiMoreVertical, FiCalendar, FiClock, FiChevronRight } from 'react-icons/fi';
import { format, isSameDay } from 'date-fns';
import { ptBR } from 'date-fns/locale';

// Eventos Injetados
const upcomingEvents = [
    { 
      title: "Solicitação de Férias", 
      start: new Date(2026, 3, 10, 8, 0),
      end: new Date(2026, 3, 20, 17, 0),
      color: '#818cf8',
      category: "RH"
    },
    { 
      title: "Reunião Geral (TI)", 
      start: new Date(2026, 3, 12, 14, 30),
      end: new Date(2026, 3, 12, 16, 0), 
      color: '#34d399',
      category: "Operacional"
    },
    { 
      title: "Treinamento de Segurança", 
      start: new Date(2026, 3, 15, 9, 0), 
      end: new Date(2026, 3, 15, 11, 30), 
      color: '#fbbf24',
      category: "Compliance"
    },
];

const EventList = () => {
    return (
        <div className="flex flex-col h-full bg-card-primary border border-main-border rounded-[2.5rem] p-8 shadow-2xl overflow-hidden">
            
            <div className="mb-8">
                <h3 className="text-xl font-black text-primary-text italic uppercase tracking-tighter">Agenda</h3>
                <p className="text-[10px] text-secondary-text uppercase tracking-[0.2em] font-bold mt-1">Próximos Compromissos</p>
            </div>

            <div className="flex-1 overflow-y-auto space-y-2 pr-2 custom-scrollbar">
                {upcomingEvents.map((event, index) => {
                    const isSingleDay = isSameDay(event.start, event.end);
                    const dayNumber = format(event.start, 'dd');
                    const monthName = format(event.start, 'MMM', { locale: ptBR });

                    return (
                        <motion.div 
                            key={index}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative flex items-start gap-4 p-4 rounded-2xl hover:bg-white/3 border border-transparent hover:border-main-border transition-all cursor-pointer"
                        >
                            
                            <div className="flex flex-col items-center justify-center min-w-12.5 h-15 bg-main-bg border border-main-border rounded-2xl group-hover:border-accent transition-colors">
                                <span className="text-lg font-black text-primary-text leading-none">{dayNumber}</span>
                                <span className="text-[9px] font-bold text-secondary-text uppercase">{monthName}</span>
                            </div>

                            <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2 mb-1">
                                    <span 
                                        className="w-1.5 h-1.5 rounded-full" 
                                        style={{ backgroundColor: event.color }}
                                    />
                                    <p className="text-[10px] font-black text-secondary-text uppercase tracking-widest leading-none">
                                        {event.category}
                                    </p>
                                </div>
                                
                                <p className="text-sm font-bold text-primary-text truncate group-hover:text-accent transition-colors">
                                    {event.title}
                                </p>

                                <div className="flex flex-col gap-0.5 mt-2 text-[10px] text-secondary-text font-medium">
                                    <div className="flex items-center gap-1">
                                        <FiClock className="opacity-50" />
                                        <span>
                                            {format(event.start, 'HH:mm')} - {format(event.end, 'HH:mm')}
                                        </span>
                                    </div>
                                    {!isSingleDay && (
                                        <div className="flex items-center gap-1">
                                            <FiCalendar className="opacity-50" />
                                            <span>Até {format(event.end, 'dd MMM', { locale: ptBR })}</span>
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="flex flex-col items-end self-stretch justify-between py-1">
                                <button className="p-1 text-secondary-text hover:text-white transition-colors">
                                    <FiMoreVertical size={16} />
                                </button>
                                <FiChevronRight className="text-secondary-text opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" size={14}/>
                            </div>

                            <div 
                                className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 rounded-r-full opacity-0 group-hover:opacity-100 transition-opacity"
                                style={{ backgroundColor: event.color }}
                            />
                        </motion.div>
                    );
                })}

                {upcomingEvents.length === 0 && (
                    <div className="flex flex-col items-center justify-center py-20 text-center">
                        <div className="p-4 bg-main-bg border border-main-border rounded-full text-secondary-text mb-4">
                            <FiCalendar size={24} />
                        </div>
                        <p className="text-xs text-secondary-text font-bold uppercase tracking-widest">Nenhum evento</p>
                    </div>
                )}
            </div>

            <div className="mt-6 pt-6 border-t border-main-border">
                <button className="w-full cursor-pointer py-3 bg-main-bg border border-main-border rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] text-secondary-text hover:text-accent hover:border-accent transition-all">
                    Ver Agenda Completa
                </button>
            </div>
        </div>
    );
};

export default EventList;