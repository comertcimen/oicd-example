import { AppShell, ScrollArea } from "@mantine/core"
import cx from "clsx"
import { Brand } from "./Brand"
import { MainLinks } from "./MainLinks"
import classes from "./Navbar.module.scss"
import { User } from "./User"

export const Navbar = () => {
  const { isSidebarOpen } = useAppStore()

  return (
    <AppShell.Navbar p="md" hidden={!isSidebarOpen} className={classes.navbar}>
      <AppShell.Section className={cx(classes.section, classes.logo)}>
        <Brand />
      </AppShell.Section>

      <AppShell.Section grow component={ScrollArea} mt="md">
        <MainLinks />
      </AppShell.Section>

      <AppShell.Section>
        <User />
      </AppShell.Section>
    </AppShell.Navbar>
  )
}
