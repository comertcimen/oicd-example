import { ActionIcon, Flex, Group, Image, LoadingOverlay, Stack, Text, Title } from "@mantine/core"
import { IconArrowLeft } from "@tabler/icons-react"
import React, { PropsWithChildren } from "react"

interface Props {
  title: React.ReactNode
  subtitle?: React.ReactNode
  logo?: string
  loading?: boolean
  showBackButton?: boolean
  backTo?: string
  onClickBack?: () => void
  rightSection?: React.ReactNode
  middleSection?: React.ReactNode
}

export const Shell = ({
  title,
  subtitle,
  logo,
  showBackButton,
  backTo,
  onClickBack,
  loading,
  children,
  middleSection,
  rightSection,
}: PropsWithChildren<Props>) => {
  const navigate = useNavigate()
  const { key: locationKey } = useLocation()

  const goBack = () => {
    onClickBack?.()
    if (locationKey === "default") {
      navigate(backTo || "..")
      return
    }

    if (backTo) {
      navigate(backTo)
      return
    }

    navigate(-1)
  }

  if (!!loading) return <LoadingOverlay visible={loading} zIndex={1000} />

  return (
    <div>
      <Flex
        direction={{ lg: "row", sm: "column" }}
        gap="lg"
        justify="space-between"
        wrap="nowrap"
        mb="md"
        py="sm"
      >
        <Group align="center">
          {showBackButton && (
            <ActionIcon color="var(--mantine-primary-color-filled)" onClick={goBack}>
              <IconArrowLeft size="1.625rem" />
            </ActionIcon>
          )}
          {logo && <Image src={logo} w={50} h={50} fit="contain" radius="md" />}
          <Stack gap={0}>
            {typeof title === "string" ? <Title order={2}>{title}</Title> : title}
            {subtitle && typeof subtitle === "string" ? (
              <Text c="dimmed" size="sm">
                {subtitle}
              </Text>
            ) : (
              subtitle
            )}
          </Stack>
        </Group>

        {middleSection}

        {rightSection}
      </Flex>

      {children}
    </div>
  )
}
