import "@mantine/charts/styles.css"
import { MantineProvider } from "@mantine/core"
import "@mantine/core/styles.css"
import { ModalsProvider } from "@mantine/modals"
import { QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { Toaster } from "./components"
import { Router } from "./router"
import { queryClient } from "./services/api"
import { useAppearanceStore } from "./store/appearanceStore"

export default function App() {
  const { theme } = useAppearanceStore()

  return (
    <QueryClientProvider client={queryClient}>
      <MantineProvider theme={theme}>
        <ModalsProvider modalProps={{ centered: true }}>
          <Toaster />
          <Router />
          <ReactQueryDevtools initialIsOpen={false} />
        </ModalsProvider>
      </MantineProvider>
    </QueryClientProvider>
  )
}
