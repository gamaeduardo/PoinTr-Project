import React from "react";
import Header from "../Components/Header";
import StatCard from "../Components/StatCard";
import EmployeeTable from "../Components/EmployeeTable";
import PageFilters from "../Components/PageFilters";


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
        <main className="w-full p-8 border border-main-border rounded-2xl shadow-2xl my-4">
            <Header title="Listagem de Colaboradores" onSearchClick={onSearchClick}/>

            <PageFilters options={filters} />

            <div className="flex gap-5 mt-8">
                <StatCard   
                    title="Funcionários Ativos" 
                    value="13" 
                    icon= "none"
                />

                <StatCard   
                    title="Funcionários Ativos" 
                    value="13" 
                    icon= "none"
                />

                <StatCard   
                    title="Funcionários Ativos" 
                    value="13" 
                    icon= "none"
                />

                <StatCard   
                    title="Funcionários Ativos" 
                    value="13" 
                    icon= "none"
                />
            </div>
                


            <div className="mt-8">
                <EmployeeTable/>
            </div>
        </main>
    )
};

export default EmployeesPage;