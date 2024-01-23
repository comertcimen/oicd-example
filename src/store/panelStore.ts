import { MantineSize } from "@mantine/core"
import { create } from "zustand"

interface Panel {
  onClose?: () => void
  component?: React.ReactNode
  size?: MantineSize | number | string
  hideOverlay?: boolean
}

type State = {
  panel: Panel | null
}

type Action = {
  openPanel: (panel: Panel) => void
  closePanel: () => void
}

export const usePanelStore = create<State & Action>((set) => ({
  panel: null,
  openPanel: (panel) => set({ panel }),
  closePanel: () =>
    set((state) => {
      const { onClose } = state.panel || {}
      onClose?.()

      return { panel: null }
    }),
}))
