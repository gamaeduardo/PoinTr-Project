import React, { useState, useEffect } from "react";
import Sidebar from "../Components/Sidebar";
import Header from "../Components/Header";
import GeralContent from "./GeralContent";
import EventsPage from "./EventsPage";
import SupportMenu from "../Components/SupportMenu";
import NotificationSystem from "../Components/NotificationSystem";
import GlobalSearchModal from "../Components/GlobalSearchModal";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import EmployeesPage from "./EmployeesPage";
import ManagementPage from "./ManagementPage";
import ShiftManagementPage from "./ShiftManagementPage";
import ReportsPage from "./ReportsPage";
import AnalyticsPage from "./AnalyticsPage";
import { useThemeStore } from "../store/useThemeStore";


const MainDashboard = () => {
  const mainCompesationMargin = 'ml-24';

  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const openSearch = () => setIsSearchOpen(true);
  const closeSearch = () => setIsSearchOpen(false);

  // Estado do Tema
  const theme = useThemeStore((state) => state.theme)

  // Aplicação do Tema no HTML
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

    return (
      <div className={`flex min-h-screen bg-main-bg overflow-x-hidden`}>
          <Sidebar/>

          <NotificationSystem />

          <SupportMenu/>

          <GlobalSearchModal isOpen={isSearchOpen} onClose={closeSearch} />

        {/* Arrumar as Rotas - Bug: Conflito CompanySelector e rotas do MainDashboard */}
          <div className={`${mainCompesationMargin} mr-5 flex-1 w-full text-white min-w-0`}>
            <Routes>
              <Route path="/" element={<GeralContent onSearchClick={openSearch} />} />
              <Route path="/events" element={<EventsPage onSearchClick={openSearch} />} />
              <Route path="/employees" element={<EmployeesPage onSearchClick={openSearch} />} />
              <Route path="/employees/:id" element={<ManagementPage onSearchClick={openSearch} />} />
              <Route path="/shifts" element={<ShiftManagementPage onSearchClick={openSearch} />} />
              <Route path="/analytics" element={<AnalyticsPage onSearchClick={openSearch} />} />
              <Route path="/reports" element={<ReportsPage onSearchClick={openSearch} />} />
            </Routes>
          </div>
      </div>
    )
};

export default MainDashboard;

