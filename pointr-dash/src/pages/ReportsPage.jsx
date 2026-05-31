import React, { useState } from "react";
import Header from "../Components/Header";
import PageFilters from "../Components/PageFilters";
import { motion, AnimatePresence } from "framer-motion";

// Abas
import OverviewTab from "../Components/tabs/Reports/OverviewTab";
import HistoryTab from "../Components/tabs/Reports/HistoryTab";
import GeneratorTab from "../Components/tabs/Reports/GeneratorTab";

const ReportsPage = ({ onSearchClick }) => {
    
    const [activeTab, setActiveTab] = useState('general');

    const filters = [
        { id: 'general', label: 'Geral & Métricas' },
        { id: 'history', label: 'Relatórios Criados' },
        { id: 'generate', label: 'Gerar Relatório' },
    ];

    const renderReportsContent = () => {
        switch (activeTab) {
            case 'general':
                return <OverviewTab />;
            case 'history':
                return <HistoryTab />;
            case 'generate':
                return <GeneratorTab aoSucesso={() => setActiveTab('history')} />;
            default:
                return null;
        }
    };

    return (
        <main className="w-full min-h-screen p-8 border border-main-border rounded-2xl shadow-2xl my-4">
            <Header title="Auditoria & Relatórios" onSearchClick={onSearchClick}/>

            <PageFilters 
                options={filters} 
                activeOption={activeTab} 
                onOptionSelect={(id) => setActiveTab(id)} 
            />

            {/* Transição Suaaaaave com o Framer Motion */}
            <div className="mt-4 w-full">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                    >
                        {renderReportsContent()}
                    </motion.div>
                </AnimatePresence>
            </div>
        </main>
    );
};

export default ReportsPage;