import React from "react";
import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import employeesRawdata from '../datasets/employeesRawData.json';
import Header from "../Components/Header";
import { FiArrowLeft, FiArrowRight, FiDownload, FiEdit, FiLayout } from 'react-icons/fi';
import AttendanceHistory from "../Components/AttendanceHistory";
import EmployeeProfileCard from "../Components/EmployeeProfileCard";
import EmployeeProfileCardVertical from "../Components/EmployeeProfileCardVertical";
import DailyAttendanceTimeline from "../Components/DailyAttendanceTimeline";
import PageFilters from "../Components/PageFilters";


const employeesData = employeesRawdata.map(emp => ({
    ...emp,
    id: parseInt(emp.id),
    totalAttendance: emp.dias_trabalhados,
    avgCheckIn: emp.horario_de_entrada,
    avgCheckOut: emp.horario_de_saida,
    job: emp.job,
}));

const EmployeeDetailPage = ({ onSearchClick }) => {

    const { id } = useParams();
    const currentId = parseInt(id);
    const navigate = useNavigate();

    const employeeIndex = employeesData.findIndex(emp => emp.id === currentId);
    const employee = employeesData[employeeIndex];

    const [viewMode, setViewMode] = useState('default');

    const toggleViewMode = () => {
        setViewMode(prevMode => (prevMode=== 'default' ? 'timeline' :'default'));
    };

    const goToNextEmployee = () => {
        const nextId = (employeeIndex < employeesData.length - 1) ? employeesData[employeeIndex + 1].id : employeesData[0].id;
        navigate(`/employees/${nextId}`);
    };

    const goToPrevEmployee = () => {
        const prevId = (employeeIndex > 0) ? employeesData[employeeIndex - 1].id : employeesData[employeesData.length - 1].id;
        navigate(`/employees/${prevId}`);
    };

    if (!employee) {
        return <div className="text-white mt-12">Funcionário não encontrado.</div>;
    }

    const filters = [
        { id: 'all', label: 'Visão Geral' },
        { id: 'finance', label: 'Financeiro' },
        { id: 'operation', label: 'Operacional' },
        { id: 'hr', label: 'Recursos Humanos' },
        { id: 'security', label: 'Segurança' },
        { id: 'compliance', label: 'Compliance' },
    ];

    return (
        <main className="w-full p-8 border border-main-border rounded-2xl shadow-2xl my-4">
            <Header title="Colaboradores" onSearchClick={onSearchClick}/>

            <PageFilters options={filters} />

            <div className="flex justify-between items-center mt-8 mb-6">

                <div className="flex items-center space-x-3 text-white">
                    <button onClick={goToPrevEmployee} className="p-2 rounded-full bg-[#060c18] hover:bg-[#042b80] text-white cursor-pointer">
                        <FiArrowLeft size={20}/>
                    </button>

                    <button onClick={goToNextEmployee} className="p-2 rounded-full bg-[#060c18] hover:bg-[#042b80] text-white cursor-pointer">
                        <FiArrowRight size={20}/>
                    </button>
                    <h1 className="text-xl font-bold ml-4">Detalhes do Funcionário</h1>
                </div>

                 <div className="flex items-center space-x-3 mr-1 text-white">
                    <button className="cursor-pointer flex items-center space-x-2 px-3 py-2 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition">
                        <FiDownload size={18} />
                    </button>

                    <button className="cursor-pointer p-2 rounded-lg bg-[#060c18] hover:bg-[#042b80] text-gray-400 hover:text-white transition">
                        <FiEdit size={20} />
                    </button>

                    <button onClick={toggleViewMode} className="cursor-pointer p-2 rounded-lg bg-[#060c18] hover:bg-[#042b80] text-gray-400 hover:text-white transition">
                        <FiLayout size={20} />
                    </button>
                </div>
            </div>

            {viewMode === 'default' ? (
                <>
                    <EmployeeProfileCard employee={employee} />

                    <AttendanceHistory employeeId={currentId} />
                </>
            ) : (
                <div className="flex space-x-6">
                    <div className="w-1/3">
                        <EmployeeProfileCardVertical employee={employee} />
                    </div>
                    <div className="w-2/3">
                        <DailyAttendanceTimeline employeeId={currentId} />
                    </div>
                </div>
            )}

        </main>
    )
};

export default EmployeeDetailPage;