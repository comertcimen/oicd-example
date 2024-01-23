import { BREAKPOINTS } from "@/constants"
import { CloseButton, Flex, Image } from "@mantine/core"
import { useMediaQuery } from "@mantine/hooks"

export const Brand = () => {
  const navigate = useNavigate()
  const { setSidebarOpen } = useAppStore()
  const matches = useMediaQuery(`(max-width: ${BREAKPOINTS.lg})`)

  const navigateToHome = () => {
    navigate("/")
  }

  const handleCloseNavbar = () => {
    setSidebarOpen(false)
  }

  return (
    <Flex w="100%" justify={matches ? "space-between" : "center"} align="center" mih={24}>
      <Image
        src="/logo.svg"
        alt="Logo"
        fit="contain"
        h={30}
        mah={100}
        w="auto"
        onClick={navigateToHome}
      />

      <CloseButton size="lg" iconSize={24} onClick={handleCloseNavbar} hiddenFrom="md" />
    </Flex>
  )
}
