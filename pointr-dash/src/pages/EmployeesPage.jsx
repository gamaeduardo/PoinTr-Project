import React, { useState } from "react";
import Header from "../Components/Header";
import StatCard from "../Components/StatCard";
import EmployeeTable from "../Components/EmployeeTable";
import PageFilters from "../Components/PageFilters";
import { FiUsers, FiUserCheck, FiClock, FiAlertCircle } from 'react-icons/fi';
import { motion, AnimatePresence } from "framer-motion";

// Sub abas da página de colaboradores
import SectorTab from "../Components/tabs/Employee/SectorTab";
import HolidaysTab from "../Components/tabs/Employee/HolidaysTab";
import AbsencesTab from "../Components/tabs/Employee/AbsencesTab";
import DocumentsTab from "../Components/tabs/Employee/DocumentsTab";
import RegisterTab from "../Components/tabs/Employee/RegisterTab";

const EmployeesPage = ({ onSearchClick }) => {
    //  (Começa na Geral)
    const [activeTab, setActiveTab] = useState('general');

    const filters = [
        { id: 'general', label: 'Geral' },
        { id: 'departments', label: 'Setores' },
        { id: 'vacation', label: 'Férias' },
        { id: 'absences', label: 'Ausências' },
        { id: 'documents', label: 'Documentos' },
        { id: 'register', label: 'Registrar' },
    ];

    const renderContent = () => {
        switch (activeTab) {
            case 'general':
                return (
                    <motion.div
                        key="general"
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -15 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
                            <StatCard title="Ativos" value="154" icon={FiUsers} />
                            <StatCard title="Em Campo" value="42" icon={FiUserCheck} />
                            <StatCard title="Horas Extras" value="12h" icon={FiClock} />
                            <StatCard title="Pendências" value="03" icon={FiAlertCircle} />
                        </div>
                            
                        <div className="mt-12">
                            <EmployeeTable />
                        </div>
                    </motion.div>
                );
            case 'departments':
                return <SectorTab />;
            case 'vacation':
                return <HolidaysTab />;
            case 'absences':
                return <AbsencesTab />;
            case 'documents':
                return <DocumentsTab />;
            case 'register':
                // Ao registrar com sucesso volta para o geralzão da página
                return <RegisterTab aoSucesso={() => setActiveTab('general')} />;
            default:
                return null;
        }
    };

    return (
        <main className="w-full min-h-screen p-8 border border-main-border rounded-2xl shadow-2xl my-4 animate-in fade-in duration-700">
            <Header title="Gestão de Colaboradores" onSearchClick={onSearchClick}/>

            <PageFilters 
                options={filters} 
                activeOption={activeTab} 
                onOptionSelect={(id) => setActiveTab(id)} 
            />


            <div className="mt-8 w-full">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                    >
                        {renderContent()}
                    </motion.div>
                </AnimatePresence>
            </div>
        </main>
    );
};

export default EmployeesPage;