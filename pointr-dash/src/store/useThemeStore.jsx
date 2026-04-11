import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const useThemeStore = create(
    // Persist salva no LocalStorage

    persist(
        (set) => ({
            // Padrão
            theme: 'modern', 
            sidebarLayout: 'standard',
            sidebarExpand: true,

            // Atualizar o Tema
            setTheme: (newTheme) => set({ theme: newTheme }),

            // Atualizar a Sidebar
            setSidebarLayout: (layout) => set({ sidebarLayout: layout }),

            // Atualizar Sidebar Secundária
            toggleSidebar: () => set((state) => ({ sidebarExpand: !state.sidebarExpand }))
        }),
        {
            name: 'pointr-theme-storage' // Chave do LocalStorage
        }
    )
)