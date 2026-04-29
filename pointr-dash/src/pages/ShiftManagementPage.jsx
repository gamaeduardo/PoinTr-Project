import React, { useState } from "react";
import Header from "../Components/Header";
import { FiChevronLeft, FiChevronRight, FiPlus } from 'react-icons/fi';
import { startOfWeek, addDays, subDays, format } from "date-fns";
import ptBR from 'date-fns/locale/pt-BR';
import ShiftGrid from "../Components/ShiftGrid";
import PageFilters from "../Components/PageFilters";

const ShiftManagementPage = ({ onSearchClick }) => {
    const [weekStart, setWeekStart] = useState(startOfWeek(new Date(), { weekStartsOn: 1 }));
    const daysOfWeek = Array.from({ length: 7 }).map((_, i) => addDays(weekStart, i));

    const filters = [
        { id: 'today', label: 'Hoje' },
        { id: 'weekly', label: 'Semanal' },
        { id: 'shifts', label: 'Turnos' },
        { id: 'pending', label: 'Pendentes' },
    ];

    return (
        <main className="w-full p-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <Header title="Escala de Operação" onSearchClick={onSearchClick} />

            <div className="mt-8">
                <PageFilters options={filters} />
            </div>

            <div className="mt-10 flex justify-between items-center bg-card-primary border border-main-border p-6 rounded-4xl backdrop-blur-md">
                <div className="flex items-center gap-6">
                    <h2 className="text-2xl font-bold capitalize tracking-wide text-primary-text">
                        {format(weekStart, "MMMM", { locale: ptBR })}
                        <span className="text-accent ml-2">/ {format(weekStart, 'yyyy')}</span>
                    </h2>
                    <div className="h-8 w-px bg-white/10" />
                    <p className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em]">
                        {format(weekStart, 'dd/MM')} — {format(daysOfWeek[6], 'dd/MM')}
                    </p>
                </div>

                <div className="flex items-center gap-3">
                    <div className="flex bbg-main-bg p-1 border border-main-border rounded-2xl">
                        <button onClick={() => setWeekStart(subDays(weekStart, 7))} className="p-2 rounded-lg transition-all cursor-pointer text-gray-400 hover:text-accent">
                            <FiChevronLeft size={20} />
                        </button>
                        <button onClick={() => setWeekStart(addDays(weekStart, 7))} className="p-2 rounded-lg transition-all cursor-pointer text-gray-400 hover:text-accent">
                            <FiChevronRight size={20} />
                        </button>
                    </div>
                    
                    <button className="flex items-center gap-2 px-6 py-3 bg-accent hover:bg-accent-hover text-white text-[10px] font-black uppercase tracking-widest rounded-xl transition-all shadow-lg shadow-accent/20 cursor-pointer">
                        <FiPlus size={16} /> Novo Turno
                    </button>
                </div>
            </div>

            <div className="mt-8">
                <ShiftGrid days={daysOfWeek} />
            </div>
        </main>
    );
};

export default ShiftManagementPage;