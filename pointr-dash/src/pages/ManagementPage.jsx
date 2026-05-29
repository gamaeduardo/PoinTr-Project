import React, { useState } from "react";
import Header from "../Components/Header";
import PageFilters from "../Components/PageFilters";
import { motion, AnimatePresence } from "framer-motion";

// Abas
import OverviewTab from "../Components/tabs/Management/OverviewTab";
import FinanceTab from "../Components/tabs/Management/FinanceTab";
import OperationTab from "../Components/tabs/Management/OperationTab";
import HRTab from "../Components/tabs/Management/HRTab";
import SecurityTab from "../Components/tabs/Management/SecurityTab";
import ComplianceTab from "../Components/tabs/Management/ComplianceTab";

const ManagementPage = ({ onSearchClick }) => {
    
    const [activeTab, setActiveTab] = useState('all');

    const filters = [
        { id: 'all', label: 'Visão Geral' },
        { id: 'finance', label: 'Financeiro' },
        { id: 'operation', label: 'Operacional' },
        { id: 'hr', label: 'Recursos Humanos' },
        { id: 'security', label: 'Segurança' },
        { id: 'compliance', label: 'Compliance' },
    ];

    // Selecionar as abas
    const renderManagementContent = () => {
        switch (activeTab) {
            case 'all':
                return <OverviewTab />;
            case 'finance':
                return <FinanceTab />;
            case 'operation':
                return <OperationTab />;
            case 'hr':
                return <HRTab />;
            case 'security':
                return <SecurityTab />;
            case 'compliance':
                return <ComplianceTab />;
            default:
                return null;
        }
    };

    return (
        <main className="w-full min-h-screen p-8 border border-main-border rounded-2xl shadow-2xl my-4">

            <Header title="Gestão Estratégica" onSearchClick={onSearchClick}/>

            <PageFilters 
                options={filters} 
                activeOption={activeTab} 
                onOptionSelect={(id) => setActiveTab(id)} 
            />


            <div className="mt-4 w-full">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                    >
                        {renderManagementContent()}
                    </motion.div>
                </AnimatePresence>
            </div>
        </main>
    );
};

export default ManagementPage;