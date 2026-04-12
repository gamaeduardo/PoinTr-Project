import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { useCompanyStore } from './store/useCompanyStore';
import CompanySelector from './pages/CompanySelector';
import MainDashboard from './pages/MainDashboard';
import LoadingScreen from './Components/LoadingScreen';

const App = () => {
  const { currentCompany } = useCompanyStore();
  const [isLoading, setIsLoading] = useState(false);

  // Efeito do Loading
  useEffect(() => {
    if (currentCompany) {
      setIsLoading(true);
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 1500);
      return () => clearTimeout(timer)
    }
  }, [currentCompany]);

  return (
    // Verificar se está na Página de Seleção ou em um Projeto Específico
    // Lembrar de Arrumar as Rotas do MainDashboard
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <LoadingScreen key="loader" companyName={currentCompany?.name} />
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {!currentCompany ? (
          <CompanySelector key="selector" />
        ) : (
          !isLoading && <MainDashboard key="dashboard" />
        )}
      </AnimatePresence>
    </>
  );
};

export default App;