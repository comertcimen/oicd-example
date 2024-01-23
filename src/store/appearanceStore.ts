import { theme } from "@/theme"
import { MantineTheme, MantineThemeOverride, createTheme, mergeMantineTheme } from "@mantine/core"
import { create } from "zustand"

type State = {
  theme: MantineTheme
}

type Action = {
  updateTheme: (theme: MantineThemeOverride) => void
}

export const useAppearanceStore = create<State & Action>((set) => ({
  theme: theme,
  updateTheme: () =>
    set((state) => {
      const customTheme = createTheme(state.theme)
      return mergeMantineTheme(state.theme, customTheme) as any
    }),
}))
