import React from "react";

const historyData = [
    { date: "Novembro 08, 2025", checkIn: "08:53", checkOut: "17:15", status: "No Horário" },
    { date: "Novembro 07, 2025", checkIn: "08:27", checkOut: "17:09", status: "Atrasado" },
    { date: "Novembro 06, 2025", checkIn: "-", checkOut: "-", status: "Ausente" },
    { date: "Novembro 05, 2025", checkIn: "08:55", checkOut: "17:10", status: "No Horário" },
    { date: "Novembro 04, 2025", checkIn: "08:58", checkOut: "17:06", status: "No Horário" },
    { date: "Novembro 03, 2025", checkIn: "08:40", checkOut: "17:02", status: "Atrasado" },
];

const AttendanceHistory = ({ employeeId }) => {

    return (
        <div className="bg-linear-to-t from-[#06062285] to-[#0606228a] p-6 rounded-lg shadow-xl">
            <h2 className="text-xl font-bold text-white mb-6 border-b border-slate-700 pb-3">Histórico de Ponto</h2>

            <div className="flex justify-end items-center space-x-4 mb-4">
                <button className="px-3 py-1 bg-[#18183d] rounded-lg text-gray-400 cursor-pointer font-medium hover:text-white transition">Organizar</button>
                <button className="px-3 py-1 bg-[#18183d] rounded-lg text-gray-400 cursor-pointer font-medium hover:text-white transition">Filtrar</button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {historyData.map((entry, index) => (
                    <div key={index} className="p-4 bg-[#18183d] rounded-lg border-slate-600">
                        <div className="flex justify-between items-center pb-2 border-b border-slate-600 mb-2">
                            <p className="text-sm font-medium text-white">{entry.date}</p>
                            <span className={`px-2 py-0.5 text-xs rounded-full ${
                                entry.status === 'No Horário' ? 'bg-green-600/20 text-green-400' :
                                entry.status === 'Atrasado' ? 'bg-yellow-600/20 text-yellow-400' :
                                'bg-red-600/20 text-red-400'
                            }`}>
                                {entry.status}
                            </span>
                        </div>
                        <div className="text-xs text-gray-400">
                            <p>Entrada: <span className="text-white">{entry.checkIn}</span></p>
                            <p>Saída: <span className="text-white">{entry.checkOut}</span></p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex justify-center mt-6 space-x-2">
                {[1, 2, 3, 4].map(page => (
                    <button key={page} className={`w-8 h-8 rounded-full cursor-pointer ${page === 1 ? 'bg-[#042b80] text-white' : 'bg-slate-700 text-gray-400 hover:bg-slate-600'}`}>
                        {page}
                    </button>
                ))}
            </div>
        </div>
    )
};

export default AttendanceHistory;