import { create } from "zustand"

type State = {
  isSidebarOpen: boolean
}

type Action = {
  setSidebarOpen: (sideBarOpen: boolean) => void
}

export const useAppStore = create<State & Action>((set) => ({
  isSidebarOpen: false,
  setSidebarOpen: (isSidebarOpen) => set({ isSidebarOpen }),
}))
