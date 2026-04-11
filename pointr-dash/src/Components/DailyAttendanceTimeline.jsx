import React, { useState } from "react";
import { FiChevronLeft, FiChevronRight, FiMoon, FiSun, FiActivity, FiBriefcase, FiClock, FiAlertCircle, FiCoffee } from 'react-icons/fi';

const timelineData = {
    "2025-11-20": [
        { time: "08:30", icon: FiClock, title: "Entrada", status: "ok", duration: null },
        { time: "08:45", icon: FiBriefcase, title: "Início do Expediente", status: "ok", duration: null },
        { time: "12:30", icon: FiCoffee, title: "Início do Almoço", status: "ok", duration: "1h 00m" },
        { time: "13:30", icon: FiCoffee, title: "Fim do Almoço", status: "ok", duration: null },
        { time: "17:30", icon: FiActivity, title: "Saída", status: "ok", duration: null },
    ],
    "2025-11-19": [
        { time: "09:15", icon: FiAlertCircle, title: "Entrada (Atrasado)", status: "late", duration: null },
        { time: "09:30", icon: FiBriefcase, title: "Início do Expediente", status: "ok", duration: null },
        { time: "13:00", icon: FiCoffee, title: "Início do Almoço", status: "ok", duration: "1h 15m" },
        { time: "14:15", icon: FiCoffee, title: "Fim do Almoço", status: "ok", duration: null },
        { time: "18:30", icon: FiActivity, title: "Saída", status: "ok", duration: null },
    ]
    
};

const DailyAttendanceTimeline = ({ employeeId }) => {

    const [selectedDate, setSelectedDate] = useState("2025-11-20");

    const availableDates = Object.keys(timelineData).sort();
    const currentDayIndex = availableDates.indexOf(selectedDate);

    const goToNextDay = () => {
        if (currentDayIndex < availableDates.length - 1) {
            setSelectedDate(availableDates[currentDayIndex + 1]);
        }
    };

    const goToPrevDay = () => {
        if (currentDayIndex > 0) {
            setSelectedDate(availableDates[currentDayIndex - 1]);
        }
    };

    const currentDayTimeline = timelineData[selectedDate] || [];

    return (
        <div className="bg-linear-to-t from-[#06062285] to-[#0606228a] p-6 rounded-lg shadow-xl h-full flex flex-col">

            <div className="flex justify-between items-center mb-6 border-b border-slate-700 pb-3">
                <button onClick={goToPrevDay} disabled={currentDayIndex === 0} className="p-2 rounded-full bg-[#1c3058] hover:bg-[#042b80] cursor-pointer text-gray-400 disabled:opacity-50 transition">
                    <FiChevronLeft size={20} />
                </button>
                <h3 className="text-xl font-bold text-white">{selectedDate}</h3>
                <button onClick={goToNextDay} disabled={currentDayIndex === availableDates.length - 1} className="p-2 rounded-full bg-[#1c3058] hover:bg-[#042b80] cursor-pointer text-gray-400 disabled:opacity-50 transition">
                    <FiChevronRight size={20} />
                </button>
            </div>

            <div className="grow overflow-y-auto space-y-4">
                {currentDayTimeline.length === 0 ? (
                    <p className="text-gray-400 text-center py-8">Nenhum registro de ponto para este dia.</p>
                ) : (
                    <div className="relative pl-6">
                        <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-[#18183d]"></div>

                        {currentDayTimeline.map((entry, index) => {
                            const IconComponent = entry.icon;

                            return (
                                <div key={index} className="relative flex items-center mb-6">
                                    <div className={`absolute -left-3 w-6 h-6 rounded-full flex items-center justify-center z-10
                                        ${entry.status === 'late' ? 'bg-red-500' : 'bg-indigo-500'}`}>
                                            <IconComponent size={14} className="text-white" />
                                    </div>

                                    <div className="bg-[#18183d] p-4 rounded-lg shadow-md ml-6 grow">
                                        <div className="flex justify-between items-center mb-1">
                                            <p className="text-sm font-medium text-white">{entry.time} - {entry.title}</p>
                                            {entry.duration && <span className="text-xs text-gray-400">{entry.duration}</span>}
                                        </div>
                                        {entry.status === 'late' && <p className="text-xs text-red-400">Atraso detectado.</p>}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>
        </div>
    )
};

export default DailyAttendanceTimeline;