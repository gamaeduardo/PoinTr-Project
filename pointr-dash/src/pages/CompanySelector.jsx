import PointrLogo from "../assets/png/pointr_logo.png";
import AddCompanyModal from '../Components/AddCompanyModal';
import { FiPlus, FiBriefcase, FiUsers, FiSearch, FiBell, FiHelpCircle, FiUser } from 'react-icons/fi';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import useCompanyStore from '../store/useCompanyStore';
import api from '../services/api';

const CompanySelector = ({ onLogout }) => {
  const { gestor, companies, setCompanies, setCompany } = useCompanyStore();
  const [searchTerm, setSearchTerm] = useState("");
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const planos = {
    0: "Gratuito",
    1: "Básico",
    2: "Premium",
};

  // Busca empresas do gestor ao carregar
  useEffect(() => {
    const fetchEmpresas = async () => {
      try {
        const response = await api.get(`/empresas/${gestor.id_gestor}`);
        setCompanies(response.data);
      } catch (e) {
        console.error('erro ao buscar empresas', e);
      } finally {
        setLoading(false);
      }
    };

    if (gestor) fetchEmpresas();
  }, [gestor]);

  const handleSelectCompany = (company) => {
    localStorage.setItem('currentCompany', JSON.stringify(company));
    setCompany(company);
    navigate('/dashboard');
  };

  const filteredCompanies = companies.filter(c =>
    (c.nome_empresa || '').toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-main-bg text-primary-text font-sans selection:bg-accent/30">
      
      {/* HEADER - Mantido igual ao original */}
      <header className="fixed top-0 left-0 right-0 h-20 border-b border-main-border bg-main-bg/50 backdrop-blur-xl z-100 px-8">
        <div className="max-w-7xl mx-auto h-full flex items-center justify-between">
          
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-linear-to-tl p-1 from-[#1e2180] to-[#192085] rounded-xl flex items-center justify-center shadow-[0_0_15px_rgba(30,33,128,0.4)]">
                <img src={PointrLogo} alt="Logo" className="w-8 h-8 object-contain"/>
            </div>
            <span className="text-xl font-bold tracking-tighter italic">PoinTr</span>
          </div>

          <div className="flex items-center space-x-6">
            <button className="relative p-2 text-secondary-text cursor-pointer hover:text-primary-text transition-colors">
              <FiBell size={20} />
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-main-bg"></span>
            </button>
            <button className="p-2 text-secondary-text cursor-pointer hover:text-primary-text transition-colors">
              <FiHelpCircle size={20} />
            </button>

            <div className="w-px h-6 bg-main-border"></div>

            {/* PERFIL DO GESTOR LOGADO */}
            <div className="flex items-center space-x-3 cursor-pointer group">
              <div className="text-right hidden sm:block">
                <p className="text-xs font-bold text-primary-text leading-none">
                  {gestor?.nome_completo || "Gestor"}
                </p>
                <p className="text-[10px] text-secondary-text leading-tight mt-1">Administrador</p>
              </div>
              <div className="w-10 h-10 rounded-full border border-main-border group-hover:border-accent transition-all p-0.5 overflow-hidden bg-slate-800">
                <img 
                  src={`https://ui-avatars.com/api/?name=${gestor?.nome_completo || "Gestor"}&background=6366f1&color=fff`}
                  alt="Perfil" 
                  className="rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* CONTEÚDO PRINCIPAL */}
      <main className="pt-2 pb-2 px-6">
        <div className="max-w-6xl mx-auto mt-30 2xl:mt-0 ">
          <div className="min-h-screen bg-main-bg flex flex-col items-center justify-center p-6">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-12"
            >
                <h1 className="text-4xl font-black text-primary-text mb-2">
                  Bem-vindo, {gestor?.nome_completo || "Gestor"}
                </h1>
                <p className="text-secondary-text">Selecione uma organização para gerenciar os dados</p>
            </motion.div>

            <div className="mb-10 flex items-center bg-card-primary border border-main-border px-4 py-3 rounded-2xl w-xl focus-within:border-accent transition-all group">
                <FiSearch className="text-secondary-text group-focus-within:text-accent transition-colors" />
                <input 
                  type="text" 
                  placeholder="Buscar organização..." 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="bg-transparent border-none outline-none ml-3 text-sm w-full placeholder:text-gray-600"
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
                <motion.div
                    onClick={() => setIsAddModalOpen(true)}
                    whileHover={{ scale: 1.02 }}
                    className="cursor-pointer border-2 border-dashed border-main-border rounded-[2.5rem] p-8 flex flex-col items-center justify-center text-secondary-text hover:border-accent hover:text-accent transition-all group"
                >
                    <div className="w-12 h-12 rounded-full border-2 border-dashed border-main-border flex items-center justify-center mb-4 group-hover:border-accent group-hover:rotate-90 transition-all duration-500">
                        <FiPlus size={24} />
                    </div>
                    <span className="font-bold text-sm uppercase tracking-widest">Cadastrar Empresa</span>
                </motion.div>
               
                {filteredCompanies.map((company, i) => (
                    <motion.div
                        key={company.id || i}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                        whileHover={{ y: -5, transition: { duration: 0.2 } }}
                        onClick={() => handleSelectCompany(company)}
                        className="group cursor-pointer relative bg-card-primary border border-main-border rounded-[2.5rem] p-8 overflow-hidden"
                    >
                        <div 
                            className="absolute -right-10 -top-10 w-32 h-32 rounded-full opacity-10 group-hover:opacity-20 transition-opacity"
                            style={{ backgroundColor: company.color || '#6366f1' }}
                        />

                        <div className="flex flex-col h-full justify-between relative z-10">
                            <div className="flex items-start justify-between mb-8">
                                <div
                                    className="p-4 rounded-2xl shadow-lg shadow-black/20"
                                    style={{ backgroundColor: `${company.color || '#6366f1'}20`, color: company.color || '#6366f1' }}
                                >
                                    <FiBriefcase size={24} />
                                </div>
                                <span className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 bg-main-bg border border-main-border rounded-full text-secondary-text">
                                    {planos[company.nivel_assinatura] || "Plano desconhecido"} 
                                </span>
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold text-primary-text group-hover:text-accent transition-colors">
                                    {company.nome_empresa || company.name}
                                </h3>
                                <div className="flex items-center text-secondary-text mt-2 space-x-4">
                                    <span className="flex items-center text-xs">
                                        <FiUsers className="mr-1.5" /> 
                                        {company.qtd_funcionarios || company.workers || 0} colaboradores
                                    </span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
          </div>
        </div>
      </main>

      <AddCompanyModal 
         isOpen={isAddModalOpen}
         onClose={() => setIsAddModalOpen(false)}
      />
    </div>
  );
};

export default CompanySelector;