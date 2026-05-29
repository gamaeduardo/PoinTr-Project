import React, { useState } from "react";
import Header from "../Components/Header";
import PageFilters from "../Components/PageFilters";
import { motion, AnimatePresence } from "framer-motion";

// Abas
import JourneyTab from "../Components/tabs/Analytics/JourneyTab.jsx";
import FrequencyTab from "../Components/tabs/Analytics/FrequencyTab.jsx";
import AuditTab from "../Components/tabs/Analytics/AuditTab.jsx";

const AnalyticsPage = ({ onSearchClick }) => {
    const [activeTab, setActiveTab] = useState('journey');

    const filters = [
        { id: 'journey', label: 'Métricas de Jornada' },
        { id: 'frequency', label: 'Mapa de Frequência' },
        { id: 'audit', label: 'Auditoria Operacional' },
    ];

    const renderAnalyticsContent = () => {
        switch (activeTab) {
            case 'journey':
                return <JourneyTab />;
            case 'frequency':
                return <FrequencyTab />;
            case 'audit':
                return <AuditTab />;
            default:
                return null;
        }
    };

    return (
        <main className="w-full min-h-screen p-8 border border-main-border rounded-2xl shadow-2xl my-4">
            <Header title="Análises" onSearchClick={onSearchClick}/>

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
                        {renderAnalyticsContent()}
                    </motion.div>
                </AnimatePresence>
            </div>
        </main>
    );
};

export default AnalyticsPage;