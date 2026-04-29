import React from "react";
import Header from "../Components/Header";
import StatCard from "../Components/StatCard";
import EmployeeTable from "../Components/EmployeeTable";
import PageFilters from "../Components/PageFilters";
import { FiUsers, FiUserCheck, FiClock, FiAlertCircle } from 'react-icons/fi';

const EmployeesPage = ({ onSearchClick }) => {
    const filters = [
        { id: 'general', label: 'Geral' },
        { id: 'departments', label: 'Setores' },
        { id: 'vacation', label: 'Férias' },
        { id: 'absences', label: 'Ausências' },
        { id: 'documents', label: 'Documentos' },
        { id: 'register', label: 'Registrar' },
    ];

    return (
        <main className="w-full p-8 animate-in fade-in duration-700">
            <Header title="Gestão de Colaboradores" onSearchClick={onSearchClick}/>

            <div className="mt-8">
                <PageFilters options={filters} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
                <StatCard title="Ativos" value="154" icon={FiUsers} />
                <StatCard title="Em Campo" value="42" icon={FiUserCheck} />
                <StatCard title="Horas Extras" value="12h" icon={FiClock} />
                <StatCard title="Pendências" value="03" icon={FiAlertCircle} />
            </div>
                
            <div className="mt-12">
                <EmployeeTable />
            </div>
        </main>
    );
};

export default EmployeesPage;