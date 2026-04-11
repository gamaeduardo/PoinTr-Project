import React from "react";
import { FiClock, FiUsers, FiCalendar } from 'react-icons/fi';


const EmployeeProfileCard = ({ employee }) => {

    const roleModel = employee.totalAttendance > 200 ? 'Ótimo' : 'Consistente';

    return (
        <div className="bg-linear-to-t from-[#06062285] to-[#0606228a] p-6 rounded-lg shadow-xl mb-6">

            <div className="flex items-center space-x-6 border-b border-slate-700 pb-4 mb-4">
                <div className="w-20 h-20 rounded-full overflow-hidden bg-indigo-500 flex items-center justify-center text-3xl font-bold text-white">
                    {employee.name.charAt(0)}
                </div>

                <div className="flex flex-col">
                    <h2 className="text-2xl font-bold text-white">{employee.name}</h2>
                    <p className="text-sm text-gray-400 mt-1">{employee.job}</p>
                </div>
            </div>

            <div className="grid grid-cols-3 gap-6 text-sm">
                <div>
                    <p className="text-gray-400">Cargo</p>
                    <p className="text-white font-medium">{employee.job}</p>
                </div>
                <div>
                    <p className="text-gray-400">Telefone</p>
                    <p className="text-white font-medium">{employee.phone}</p>
                </div>
                <div>
                    <p className="text-gray-400">Email</p>
                    <p className="text-white font-medium">{employee.email}</p>
                </div>
            </div>

            <div className="grid grid-cols-4 gap-4 mt-6">
                <StatMetric title="Dias Trabalhados" value={employee.totalAttendance} icon={FiUsers} color="text-indigo-400" />
                <StatMetric title="Horário Médio de Entrada" value={employee.avgCheckIn} icon={FiClock} color="text-green-400" />
                <StatMetric title="Horário Médio de Saída" value={employee.avgCheckOut} icon={FiClock} color="text-yellow-400" />
                <StatMetric title="Rendimento" value={roleModel} icon={FiCalendar} color="text-pink-400" />
            </div>
        </div>
    );
};

const StatMetric = ({ title, value, icon: Icon, color }) => (
    <div className="bg-[#18183d] p-4 rounded-lg flex items-center space-x-3">
        <Icon size={24} className={color} />
        <div className="flex flex-col">
            <p className="text-xs text-gray-400">{title}</p>
            <p className="text-xl font-bold text-white">{value}</p>
        </div>
    </div>
);

export default EmployeeProfileCard;