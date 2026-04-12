import React, { useState } from "react";
import Header from "../Components/Header";
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import startOfWeek from "date-fns/startOfWeek";
import addDays from "date-fns/addDays";
import subDays from "date-fns/subDays";
import format from "date-fns/format";
import ptBR from 'date-fns/locale/pt-BR';
import ShiftGrid from "../Components/ShiftGrid";
import PageFilters from "../Components/PageFilters";

const today = new Date();
const initialWeekStart = startOfWeek(today, { weekStartsOn: 1 });

const getDaysOfWeek = (startDate) => {
    return Array.from({ length: 7 }).map((_, i) => addDays(startDate, i));
};

const ShiftManagementPage = ({ onSearchClick }) => {

    const [weekStart, setWeekStart] = useState(initialWeekStart);
    const daysOfWeek = getDaysOfWeek(weekStart);

    const goToNextWeek = () => {
        setWeekStart(addDays(weekStart, 7));
    };

    const goToPrevWeek = () => {
        setWeekStart(subDays(weekStart, 7));
    };

    const filters = [
        { id: 'today', label: 'Hoje' },
        { id: 'weekly', label: 'Semanal' },
        { id: 'holiday', label: 'Feriados' },
        { id: 'shifts', label: 'Turnos' },
        { id: 'pending', label: 'Pendentes' },
    ];

    return (
        <main className="w-full p-8 border border-main-border rounded-2xl shadow-2xl my-4">
            <Header title="Gestão de Turnos" onSearchClick={onSearchClick} />

            <PageFilters options={filters} />

            <div className="mt-8 flex justify-between items-center bg-linear-to-t from-[#06062285] to-[#0606228a] p-4 rounded-lg shadow-md">

                <h2 className="text-xl font-semibold text-white">
                    {format(weekStart, 'dd/MM/yyyy', { locale: ptBR })} - {format(daysOfWeek[6], 'dd/MM/yyyy', { locale: ptBR })}
                </h2>

                <div className="flex items-center space-x-2">
                    <button onClick={goToPrevWeek} className="p-2 rounded-full bg-[#060c18] hover:bg-[#042b80] transition cursor-pointer text-white">
                        <FiChevronLeft size={20} />
                    </button>
                    <button onClick={goToNextWeek} className="p-2 rounded-full bg-[#060c18] hover:bg-[#042b80] transition cursor-pointer text-white">
                        <FiChevronRight size={20} />
                    </button>
                    <button className="flex items-center space-x-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg transition cursor-pointer">
                        + Novo Turno
                    </button>
                </div>
            </div>

            <ShiftGrid days={daysOfWeek} />

        </main>
    )
};

export default ShiftManagementPage;