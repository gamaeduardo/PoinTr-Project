import React, { useState, useRef } from "react";
import employeesRawData from '../datasets/employeesRawData.json'
import { FiMoreVertical, FiLayout, FiUser } from 'react-icons/fi';
import EditableCell from "./EditableCell";
// Arrumar o Popup
import ColumnVisibilityMenu from "./ColumnVisibilityMenu";

const statusMap = {
    'Excelente': 'text-green-400 bg-green-400/10',
    'Boa': 'text-indigo-400 bg-indigo-400/10',
    'Ruim': 'text-yellow-400 bg-yellow-400/10',
    'Muito Ruim': 'text-red-400 bg-red-400/10',
};

const EmployeeTable = () => {
    const [employees, setEmployees] = useState(employeesRawData);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const tableWrapperRef = useRef(null);


    return (
        <div className="bg-card-primary border border-main-border rounded-4xl overflow-hidden shadow-2xl relative">
            <div className="flex justify-between items-center p-8 border-b border-white/5">
                <div>
                    <h3 className="text-2xl font-bold tracking-wide text-primary-text">Listagem</h3>
                    <p className="text-[10px] text-gray-500 uppercase tracking-widest mt-1">Dados em real-time</p>
                </div>

                <button 
                    onClick={() => setIsMenuOpen(!isMenuOpen)} 
                    className="cursor-pointer flex items-center gap-3 px-5 py-2.5 bg-white/5 hover:bg-accent/20 border border-white/10 rounded-xl transition-all group"
                >
                    <FiLayout className="text-gray-400 group-hover:text-accent" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-primary-text">Colunas</span>
                </button>
            </div>

            <div className="overflow-x-auto scrollbar-none" ref={tableWrapperRef}>
                <table className="w-full text-left border-collapse">
                    <thead className="bg-accent/10 border-b border-accent/5">
                        <tr>
                            <th className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-secondary-text">Colaborador</th>
                            <th className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-secondary-text">Cargo</th>
                            <th className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-secondary-text">Conexão</th>
                            <th className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-secondary-text">Email</th>
                            <th className="px-8 py-5"></th>
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-primary-text/5">
                        {employees.map((employee) => (
                            <tr key={employee.id} className="hover:bg-accent/10 transition-colors group">
                                <td className="px-8 py-6">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                                            <FiUser size={18} />
                                        </div>
                                        <div>
                                            <div className="text-sm font-bold text-primary-text group-hover:text-accent transition-colors">
                                                {employee.name}
                                            </div>
                                            <span className="text-[9px] font-black uppercase tracking-widest text-gray-600">ID: {employee.id}</span>
                                        </div>
                                    </div>
                                </td>
                                
                                <td className="px-8 py-6 text-sm text-gray-400">
                                    <EditableCell value={employee.job} onSave={(v) => console.log(v)} />
                                </td>

                                <td className="px-8 py-6">
                                    <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${statusMap[employee.connection]}`}>
                                        {employee.connection}
                                    </span>
                                </td>

                                <td className="px-8 py-6 text-sm text-gray-500 italic">
                                    {employee.email}
                                </td>

                                <td className="px-8 py-6 text-right">
                                    <button className="p-2 cursor-pointer hover:bg-white/5 rounded-lg transition-colors text-gray-600 hover:text-white">
                                        <FiMoreVertical />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default EmployeeTable;