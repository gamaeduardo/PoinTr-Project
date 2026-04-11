import React from "react";
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import employeesRawData from '../datasets/employeesRawData';
import format from 'date-fns/format';

const mockEmployees = employeesRawData.map(emp => ({
    ...emp,
    id: parseInt(emp.id)
}));

const mockShifts = {
    1: [{ dayIndex: 1, start: '09:00', end: '17:00', type: 'Manhã' }, { dayIndex: 4, start: '13:00', end: '21:00', type: 'Tarde' }],
    3: [{ dayIndex: 2, start: '08:00', end: '16:00', type: 'Normal' }],
};

const ShiftGrid = ({ days }) => {

    const dayHeaders = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'];

    return (
        <div className="mt-4 bg-slate-800 rounded-lg shadow-xl overflow-hidden border border-slate-700">
            <div className="grid grid-cols-[150px_repeat(7,1fr)]">

                <div className="bg-linear-to-t from-[#06062285] to-[#0606228a] p-3 border-r border-slate-700 text-sm font-semibold text-white">Funcionário</div>

                {days.map((day, index) => (
                    <div key={index} className="bg-linear-to-t from-[#06062285] to-[#0606228a] p-3 text-center border-r border-slate-700 text-sm font-semibold text-white">
                        {dayHeaders[index]}
                        <p className="text-xs text-indigo-400 font-normal">{format(day, 'dd/MM')}</p>
                    </div>
                ))}

                {mockEmployees.map((employee) => (
                    <React.Fragment key={employee.id}>
                        <div className="p-3 border-r border-slate-700 text-sm font-medium text-white flex flex-col justify-center bg-[#0b0c1f] hover:bg-[#252a55] transition">
                            {employee.name}
                            <span className="text-xs text-gray-400 font-normal">{employee.job}</span>
                        </div>

                        {days.map((day, dayIndex) => {
                            const shift = mockShifts[employee.id]?.find(s => s.dayIndex === dayIndex + 1);

                            return (
                                <div key={dayIndex} className="p-2 border-r border-slate-700 border-b bg-[#060c18] flex items-center justify-center cursor-pointer hover:bg-slate-700/50 transition">
                                    {shift ? (
                                        <div className={`text-xs font-semibold px-2 py-1 rounded-md text-white ${
                                            shift.type === 'Manhã' ? 'bg-blue-600' :
                                            shift.type === 'Tarde' ? 'bg-purple-600' :
                                            'bg-green-600'
                                        }`}>
                                            {shift.start} - {shift.end}
                                        </div>
                                    ) : (
                                        <span className="text-gray-500 text-2xl">+</span>
                                    )}
                                </div>
                            )
                        })}
                    </React.Fragment>
                ))}
            </div>
        </div>
    )
};

export default ShiftGrid;