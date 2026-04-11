import React, { useState, useRef } from "react";
import employeesRawData from '../datasets/employeesRawData.json'
import { FiMoreVertical } from 'react-icons/fi';
import EditableCell from "./EditableCell";
import ColumnVisibilityMenu from "./ColumnVisibilityMenu";


const employeesData = employeesRawData.map(emp => ({
    ...emp,
    id: parseInt(emp.id)
}));

const statusMap = {
    'Excelente': 'bg-green-400',
    'Boa': 'bg-indigo-400',
    'Ruim': 'bg-yellow-400',
    'Muito Ruim': 'bg-red-400',
};


const COLUMN_METADATA = [
    { key: 'name', label: 'Colaborador', visible: true, isEditable: false },
    { key: 'job', label: 'Cargo', visible: true, isEditable: true },
    { key: 'cidade', label: 'Cidade', visible: true, isEditable: true },
    { key: 'connection', label: 'Conexão', visible: true, isEditable: false },
    { key: 'filial_name', label: 'Filial', visible: false, isEditable: false },
    { key: 'phone', label: 'Telefone', visible: false, isEditable: true },
    { key: 'email', label: 'Email', visible: true, isEditable: false },
    { key: 'zona_de_atuacao', label: 'Zona', visible: false, isEditable: false },
];

const EmployeeTable = () => {

    const [employees, setEmployees] = useState(employeesData);

    const initialVisibility = COLUMN_METADATA.reduce((acc, col) => {
        acc[col.key] = col.key !== 'phone' && col.key !== 'timezone';
        return acc;
    }, {});

    const [columnVisibility, setColumVisibility] = useState(initialVisibility)


    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleColumn = (key) => {
        setColumVisibility(prev => ({
            ...prev,
            [key]: !prev[key]
        }));
    };


    const tableWrapperRef = useRef(null);

    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);


    const handleMouseDown = (e) => {
        if (!tableWrapperRef.current) return;
        setIsDragging(true);
        setStartX(e.pageX - tableWrapperRef.current.offsetLeft);
        setScrollLeft(tableWrapperRef.current.scrollLeft);

        document.body.style.cursor = 'grabbing';
    };

    const handleMouseLeave = () => {
        setIsDragging(false);
        document.body.style.cursor = 'default';
    };

    const handleMouseUp = () => {
        setIsDragging(false);
        document.body.style.cursor = 'default';
    };

    const handleMouseMove = (e) => {
        if (!isDragging || !tableWrapperRef.current) return;
        e.preventDefault();

        const x = e.pageX - tableWrapperRef.current.offsetLeft;
        const walk = (x - startX) * 1.5;

        tableWrapperRef.current.scrollLeft = scrollLeft - walk;
    };


    const handleSave = (id, field, newValue) => {
        const updatedEmployees = employees.map(emp => {
            if (emp.id === id) {
                console.log(`[Cade o BackEnd???]: Salvar ID ${id}, Campo ${field}: ${newValue}`);

                return {
                    ...emp,
                    [field]: newValue
                };
            }

            return emp;
        });

        setEmployees(updatedEmployees);
    };

    return (
        <div className="bg-linear-to-t from-[#06062285] to-[#0606228a] rounded-lg shadow-xl relative">
            <div className="flex justify-between items-center p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Colaboradores</h3>

                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className=" cursor-pointer flex items-center space-x-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg shadow-md transition-colors">
                    <span className="text-sm">Colunas</span>
                    <span className="bg-indigo-800 rounded-full w-5 h-5 flex items-center justify-center text-xs">
                        {Object.values(columnVisibility).filter(v => v).length}
                    </span>
                </button>
            </div>

            <ColumnVisibilityMenu 
                isOpen={isMenuOpen}
                visibility={columnVisibility}
                onToggle={toggleColumn}
                onClose={() => setIsMenuOpen(false)}
                metadata={COLUMN_METADATA}
            />

            <div className="overflow-x-auto w-full
                            scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-slate-800
                            [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-track]:bg-slate-800 [&::-webkit-scrollbar-thumb]:bg-slate-600"
                            ref={tableWrapperRef}
                            onMouseDown={handleMouseDown}
                            onMouseLeave={handleMouseLeave}
                            onMouseUp={handleMouseUp}
                            onMouseMove={handleMouseMove}
            >
                <table className="min-w-full divide-y divide-slate-700">

                    <thead className="bg-[#191e57]">
                        <tr>
                            {Object.keys(columnVisibility).map((key) => {
                                if (columnVisibility[key]) {
                                    const meta = COLUMN_METADATA.find(c => c.key === key);

                                    return (
                                        <th key={key} className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                                            {meta ? meta.label : key}
                                        </th>
                                    );
                                }
                                return null;
                            })}
                            <th className="px-6 py-3"></th>
                        </tr>
                    </thead>

                    <tbody className="bg-linear-to-t from-[#06062285] to-[#0606228a] divide-y divide-slate-700">
                        {employees.map((employee) => (
                            <tr key={employee.id} className="hover:bg-[#1a2141] transition duration-150">

                                {columnVisibility.name && (
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm font-medium text-white">
                                            {employee.name}
                                        </div>
                                        {employee.badge && (
                                            <span className="ml-1 px-1.5 py-0.5 text-xs font-semibold rounded bg-purple-600 text-white">
                                                {employee.badge}
                                            </span>
                                        )}
                                    </td>
                                )}

                                {columnVisibility.job && (
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">
                                        <EditableCell
                                            value={employee.job}
                                            onSave={(newValue) => handleSave(employee.id, 'job', newValue)}
                                        />
                                    </td>
                                )}

                                {columnVisibility.cidade && (
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">
                                        <EditableCell
                                            value={employee.cidade}
                                            onSave={(newValue) => handleSave(employee.id, 'cidade', newValue)}
                                        />
                                    </td>
                                )}

                                {columnVisibility.connection && (
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">
                                        <div className="flex items-center">
                                            <div className={`w-2.5 h-2.5 rounded-full mr-2 ${statusMap[employee.connection]}`}></div>
                                            {employee.connection}
                                        </div>
                                    </td>
                                )}

                                {columnVisibility.filial_name && (
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className="px-2 py-1 test-xs font-semibold rounded bg-gray-700 text-white">
                                            <EditableCell
                                                value={employee.filial_name}
                                                onSave={(newValue) => handleSave(employee.id, 'filial_name', newValue)}
                                            />
                                        </span>
                                    </td>
                                )}

                                {columnVisibility.phone && (
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">
                                        <EditableCell value={employee.phone} onSave={(newValue) => handleSave(employee.id, 'phone', newValue)} />
                                    </td>
                                )}

                                {columnVisibility.email && (
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">
                                        {employee.email}
                                    </td>
                                )}

                                {columnVisibility.zona_de_atuacao && (
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">
                                        {employee.zona_de_atuacao}
                                    </td>
                                )}

                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                    <FiMoreVertical size={18} className="text-gray-400 cursor-pointer hover:text-white" />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
};

export default EmployeeTable;