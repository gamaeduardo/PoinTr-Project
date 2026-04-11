import { create } from "zustand";

export const useCompanyStore = create((set) => ({
    currentCompany: null,

    //Apenas para exemplo (Projetos)
    companies: [
        { id: 1, name: 'PoinTr Tech', workers: 45, plan: 'Enterprise', color: '#6366f1' },
        { id: 2, name: 'Alpha Design', workers: 12, plan: 'Pro', color: '#ec4899' },
        { id: 3, name: 'Global Logistics', workers: 128, plan: 'Enterprise', color: '#10b981' },
    ],

    setCompany: (company) => set({ currentCompany: company }),
    logoutCompany: () => set({ currentCompany: null }),

    addCompany: (newCompany) => set((state) => ({
        companies: [...state.companies, {...newCompany, id: Date.now() }]
    }))
}))