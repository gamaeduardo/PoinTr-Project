import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const useThemeStore = create(
    // Persist serve para salvar no LocalStorage

    persist(
        (set) => ({
            // Padrão
            theme: 'modern', 
            sidebarLayout: 'standard',

            // Atualizar o Tema
            setTheme: (newTheme) => set({ theme: newTheme }),

            // Atualizar a Sidebar
            setSidebarLayout: (layout) => set({ sidebarLayout: layout }),

        }),
        {
            name: 'pointr-theme-storage' // Chave do LocalStorage
        }
    )
)