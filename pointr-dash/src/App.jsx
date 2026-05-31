import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import  useCompanyStore  from './store/useCompanyStore';
import LandingPage from './pages/LandingPage/LandingPage';
import AuthPage from './pages/AuthPage';
import CompanySelector from './pages/CompanySelector';
import MainDashboard from './pages/MainDashboard';
import LoadingScreen from './Components/LoadingScreen';
import NotFoundPage from './pages/NotFoundPage';
import { ToastProvider } from './Components/ToastContext';

const App = () => {
  const { gestor, setGestor, currentCompany, setCompany, clearAll } = useCompanyStore();
  const [isLoading, setIsLoading] = useState(true);
  const isAuthenticated = !!gestor;

  useEffect(() => {
    try {
      const savedGestor = localStorage.getItem('gestor');
      const savedCompany = localStorage.getItem('currentCompany');
      if (savedGestor) setGestor(JSON.parse(savedGestor));
      if (savedCompany) setCompany(JSON.parse(savedCompany));
    } catch (e) {
      localStorage.clear();
    }
    setIsLoading(false);
  }, []);

  const handleLogin = (gestorData) => {
    localStorage.setItem('gestor', JSON.stringify(gestorData));
    setGestor(gestorData);
  };

  const handleLogout = () => {
    localStorage.removeItem('gestor');
    localStorage.removeItem('currentCompany');
    clearAll();
  };

  return (
    <ToastProvider>
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
              element={!isAuthenticated
                ? <AuthPage onLogin={handleLogin} />
                : <Navigate to="/select-company" replace />}
            />

            <Route
              path="/select-company"
              element={isAuthenticated
                ? <CompanySelector onLogout={handleLogout} />
                : <Navigate to="/login" replace />}
            />

            <Route
              path="/dashboard/*"
              element={isAuthenticated && currentCompany
                ? <MainDashboard onLogout={handleLogout} />
                : <Navigate to="/login" replace />}
            />

          <Route path="*" element={<NotFoundPage aoVoltarHome={() => window.location.href = '/dashboard'} />} />
        </Routes>
      </BrowserRouter>
    </ToastProvider>
  );
};

export default App;