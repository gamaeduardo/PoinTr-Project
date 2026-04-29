import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { useCompanyStore } from './store/useCompanyStore';
import LandingPage from './pages/LandingPage/LandingPage';
import AuthPage from './pages/AuthPage';
import CompanySelector from './pages/CompanySelector';
import MainDashboard from './pages/MainDashboard';
import LoadingScreen from './Components/LoadingScreen';

const App = () => {
  const { currentCompany } = useCompanyStore();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Economizar recurso, ativa o loading o minimo possivel
    if (currentCompany && !isLoading) { 
      setIsLoading(true);
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [currentCompany?.id]);

  return (
    <BrowserRouter>
      <AnimatePresence mode="wait">
        {/* Loading escondendo as mudanças enquanto elas carregam */}
        {isLoading && (
          <LoadingScreen key="loader" companyName={currentCompany?.name} />
        )}
      </AnimatePresence>

      <Routes>
        <Route path="/" element={<LandingPage />} />

        <Route 
          path="/login" 
          element={!isAuthenticated ? <AuthPage onLogin={() => setIsAuthenticated(true)} /> : <Navigate to="/select-company" replace />} 
        />

        <Route 
          path="/select-company" 
          element={
            isAuthenticated ? (
              !currentCompany ? <CompanySelector /> : <Navigate to="/dashboard" replace />
            ) : (
              <Navigate to="/login" replace />
            )
          } 
        />

        <Route 
          path="/dashboard/*" 
          element={
            isAuthenticated ? (
              currentCompany ? (
                <MainDashboard />
              ) : (
                <Navigate to="/select-company" replace />
              )
            ) : (
              <Navigate to="/login" replace />
            )
          } 
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;