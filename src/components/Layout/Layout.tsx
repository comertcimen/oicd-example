import { NAVBAR_WIDTH } from "@/constants"
import { AppShell } from "@mantine/core"
import { Navbar } from "./Navbar"
import { PageWrapper } from "./PageWrapper"
import { SidePanelContainer } from "./SidePanelContainer"

export const Layout = () => {
  const { isSidebarOpen } = useAppStore()
  return (
    <AppShell
      padding="md"
      layout="alt"
      navbar={{ width: NAVBAR_WIDTH, breakpoint: "md", collapsed: { mobile: !isSidebarOpen } }}
    >
      <Navbar />
      <SidePanelContainer />
      <AppShell.Main>
        <PageWrapper />
      </AppShell.Main>
    </AppShell>
  )
}
