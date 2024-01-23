import { getInitials } from "@/utils"
import {
  Avatar,
  Box,
  Group,
  MantineColorScheme,
  Menu,
  SegmentedControl,
  Text,
  UnstyledButton,
  rem,
  useMantineColorScheme,
} from "@mantine/core"
import { IconChevronRight, IconLogout } from "@tabler/icons-react"
import { useAuth } from "oidc-react"
import classes from "./User.module.scss"

export const User = () => {
  const { colorScheme, setColorScheme } = useMantineColorScheme()
  const { userData, signOutRedirect } = useAuth()

  return (
    <Menu
      shadow="md"
      width={rem(270)}
      position="top"
      withArrow
      trigger="hover"
      openDelay={100}
      closeDelay={400}
    >
      <Menu.Target>
        <Box className={classes.container}>
          <UnstyledButton className={classes.button}>
            <Group style={{ flexWrap: "nowrap" }}>
              <Avatar radius="xl">{getInitials(userData?.profile.name || "")}</Avatar>
              <Box style={{ flex: 1 }}>
                <Text size="sm" fw={500}>
                  {userData?.profile.name}
                </Text>
                <Text c="dimmed" size="xs">
                  {userData?.profile.email}
                </Text>
              </Box>

              <IconChevronRight size="1.2rem" />
            </Group>
          </UnstyledButton>
        </Box>
      </Menu.Target>

      <Menu.Dropdown>
        <SegmentedControl
          mb="xs"
          value={colorScheme}
          onChange={(val) => setColorScheme(val as MantineColorScheme)}
          data={[
            { label: "Light", value: "light" },
            { label: "Dark", value: "dark" },
            { label: "Auto", value: "auto" },
          ]}
          fullWidth
        />
        <Menu.Label>Application</Menu.Label>

        <Menu.Divider />
        <Menu.Item
          color="red"
          leftSection={<IconLogout style={{ width: rem(14), height: rem(14) }} />}
          onClick={() => signOutRedirect()}
        >
          Logout
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  )
}
