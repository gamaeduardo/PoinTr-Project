import { create } from 'zustand';

const useCompanyStore = create((set) => ({
  // GESTOR logado
  gestor: null,
  setGestor: (gestor) => set({ gestor }),

  // EMPRESA selecionada no CompanySelector
  currentCompany: null,
  setCompany: (company) => set({ currentCompany: company }),

  // LISTA de empresas do gestor
  companies: [],
  setCompanies: (companies) => set({ companies }),

  // LOGOUT — limpa tudo
  clearAll: () => set({ gestor: null, currentCompany: null, companies: [] }),
}));

export default useCompanyStore;