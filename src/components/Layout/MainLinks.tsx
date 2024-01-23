import { BREAKPOINTS } from "@/constants"
import { Icon, Menu, menuItems } from "@/features/menu"
import { Image, NavLink as MantineNavLink } from "@mantine/core"
import { useDidUpdate, useMediaQuery } from "@mantine/hooks"
import { Link, useMatch } from "react-router-dom"
import classes from "./MainLinks.module.scss"

export const MainLinks = () => {
  const { setSidebarOpen } = useAppStore()
  const matches = useMediaQuery(`(max-width: ${BREAKPOINTS.lg})`)

  const closeNavigationMenuOnMobile = () => {
    if (!matches) return
    setSidebarOpen(false)
  }

  const { pathname } = useLocation()
  const { chamberId, locationId } = useParams<{ chamberId: string; locationId: string }>()

  const getDefaulOpened = () => {
    const paths = pathname
      .split("/")
      .filter(Boolean)
      .filter((p) => p !== chamberId)
      .filter((p) => p !== locationId)
    return paths[0] || null
  }

  const [openedMenu, setOpenedMenu] = useState<string | null>(getDefaulOpened())

  useDidUpdate(() => {
    const openedMenuId = getDefaulOpened()
    if (openedMenu !== openedMenuId) {
      setOpenedMenu(openedMenuId)
    }
  }, [pathname])

  return (
    <>
      {menuItems.map((item) => (
        <MenuItem item={item} openedMenu={openedMenu} setOpenedMenu={setOpenedMenu} key={item.id}>
          {item.children?.map((child: any) => (
            <MenuItemChild child={child} onClick={closeNavigationMenuOnMobile} key={child.id} />
          ))}
        </MenuItem>
      ))}
    </>
  )
}

interface MenuItemProps {
  item: Menu
  openedMenu: string | null
  setOpenedMenu: (value: string | null) => void
  children?: React.ReactNode
}

const MenuItem = (props: MenuItemProps) => {
  const { item, openedMenu, setOpenedMenu, children } = props
  const { setSidebarOpen } = useAppStore()

  const to = item.to === "/" ? "." : item.to
  const resolved = useResolvedPath(`./${to}`)
  const match = useMatch({ path: resolved.pathname, end: true })
  const matches = useMediaQuery(`(max-width: ${BREAKPOINTS.lg})`)

  const closeNavigationMenuOnMobile = () => {
    if (!matches) return

    if (item.children) return

    setSidebarOpen(false)
  }

  return (
    <MantineNavLink
      label={item.label}
      className={classes.navlink}
      leftSection={
        <Icon icon={item.icon as string} size={22} active={item.children ? false : !!match} />
      }
      onClick={closeNavigationMenuOnMobile}
      active={item.children ? false : !!match || openedMenu === item.id}
      onChange={(value) => setOpenedMenu(value ? item.id : null)}
      opened={openedMenu === item.id}
      component={item.children ? "button" : (Link as any)}
      to={item.children ? undefined : to}
    >
      {children}
    </MantineNavLink>
  )
}

interface MenuItemChildProps {
  child: Menu

  onClick?: () => void
}

const MenuItemChild = (props: MenuItemChildProps) => {
  const { child, onClick } = props
  const resolved = useResolvedPath(`./${child.to}`)
  const match = useMatch({ path: resolved.pathname, end: false })

  const logo = useMemo(() => {
    if (!child?.data) return undefined

    return <Image src={child?.data?.logo} h={20} w={20} fit="contain" radius="xs" />
  }, [child])

  return (
    <MantineNavLink
      label={child.label}
      className={classes.navlink}
      active={!!match}
      onClick={onClick}
      component={Link}
      to={child.to as string}
      leftSection={logo}
    />
  )
}
