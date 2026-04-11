import React from "react";
import Header from "../Components/Header";
import StatCard from "../Components/StatCard";
import EmployeeTable from "../Components/EmployeeTable";


const EmployeesPage = ({ onSearchClick }) => {

    return (
        <main className="w-full p-8">
            <Header title="Listagem de Colaboradores" onSearchClick={onSearchClick}/>

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