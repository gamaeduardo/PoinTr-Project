import React from "react";
import employeesRawData from '../datasets/employeesRawData.json';
import { FiPlus } from 'react-icons/fi';
import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

const ShiftGrid = ({ days }) => {
    const typeStyles = {
        'Manhã': 'bg-blue-500/10 text-blue-400 border-blue-500/20',
        'Tarde': 'bg-purple-500/10 text-purple-400 border-purple-500/20',
        'Normal': 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    };

    return (
        <div className="bg-card-primary border border-main-border rounded-[2.5rem] overflow-hidden">
            <div className="grid grid-cols-[220px_repeat(7,1fr)]">
                
                
                <div className="p-6 bg-white/2 flex justify-center items-center border-r border-accent/10 text-lg font-bold tracking-wide text-secondary-text">
                    Colaborador
                </div>
                {days.map((day, index) => (
                    <div key={index} className="p-6 bg-white/2 border-r border-accent/10 text-center">
                        <span className="block text-[10px] font-black uppercase tracking-widest text-secondary-text mb-1">
                            {format(day, 'eee', { locale: ptBR })}
                        </span>
                        <span className="text-sm font-bold italic text-primary-text">
                            {format(day, 'dd/MM')}
                        </span>
                    </div>
                ))}


                {employeesRawData.slice(0, 8).map((employee) => (
                    <React.Fragment key={employee.id}>
                        <div className="p-6 border-t border-r border-accent/10 flex flex-col justify-center bg-transparent group hover:bg-white/2 transition-colors">
                            <span className="text-sm font-bold text-primary-text group-hover:text-accent transition-colors">
                                {employee.name}
                            </span>
                            <span className="text-[9px] font-black uppercase tracking-widest text-secondary-text mt-1">
                                {employee.job}
                            </span>
                        </div>

                        {days.map((_, dayIndex) => {
                            // Simulando os turnos (Fazer tabela no back)
                            const hasShift = (employee.id + dayIndex) % 3 === 0;
                            const shiftType = dayIndex % 2 === 0 ? 'Manhã' : 'Tarde';

                            return (
                                <div key={dayIndex} className="p-3 border-t border-r border-accent/10 flex items-center justify-center relative group/cell cursor-pointer">
                                    {hasShift ? (
                                        <div className={`w-full py-2 rounded-xl border text-[10px] font-black text-center transition-all hover:scale-105 ${typeStyles[shiftType] || typeStyles['Normal']}`}>
                                            08:00 - 17:00
                                        </div>
                                    ) : (
                                        <div className="opacity-0 group-hover/cell:opacity-100 transition-opacity">
                                            <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-gray-500 hover:bg-accent hover:text-white transition-all">
                                                <FiPlus size={14} />
                                            </div>
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
};

export default ShiftGrid;