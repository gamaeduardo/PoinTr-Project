import React from "react";
import { FiClock, FiUsers, FiCalendar } from 'react-icons/fi';

const EmployeeProfileCardVertical = ({ employee }) => {

    const roleModel = employee.totalAttendance > 200 ? 'Ótimo' : 'Consistente';

    return (
        <div className="bg-linear-to-t from-[#06062285] to-[#0606228a] p-6 rounded-lg shadow-xl h-full flex flex-col items-center text-center">

            <div className="w-24 h-24 rounded-full overflow-hidden bg-indigo-500 flex items-center justify-center text-4xl font-bold text-white mb-4">
                {employee.name.charAt(0)}
            </div>

            <h2 className="text-xl font-bold text-white">{employee.name}</h2>
            <p className="text-sm text-gray-400 mb-6">{employee.job}</p>

            <div className="flex flex-col space-y-4 w-full">
                <StatMetric title="Dias Trabalhados" value={employee.totalAttendance} icon={FiUsers} color="text-indigo-400" />
                <StatMetric title="Média - Entrada" value={employee.avgCheckIn} icon={FiClock} color="text-green-400" />
                <StatMetric title="Média - Saída" value={employee.avgCheckOut} icon={FiClock} color="text-yellow-400" />
                <StatMetric title="Rendimento" value={roleModel} icon={FiCalendar} color="text-pink-400" />
            </div>
        </div>
    );
};

const StatMetric = ({ title, value, icon: Icon, color }) => (
    <div className="bg-[#18183d] p-3 rounded-lg flex items-center space-x-3 w-full">
        <Icon size={24} className={color} />
        <div className="flex flex-col items-start">
            <p className="text-xs text-gray-400">{title}</p>
            <p className="text-xl font-bold text-white">{value}</p>
        </div>
    </div>
);

export default EmployeeProfileCardVertical;