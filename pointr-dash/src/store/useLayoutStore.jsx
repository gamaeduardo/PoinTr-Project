import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const useLayoutStore = create(persist((set) => ({
    // Array que vai guardar as posições na malha (15x~)
    layout: [
        { id: 'work-progress', x: 0, y: 0, w: 9, h: 6 },
        { id: 'team-members', x: 0, y: 0, w: 9, h: 6 }
    ],
    setLayout: (newLayout) => set({ layout: newLayout }),
}), { name: 'pointr-layout' }));