import {
  Box,
  Button,
  ButtonProps,
  CloseButton,
  Flex,
  Group,
  Space,
  Stack,
  Text,
} from "@mantine/core"
import { useFocusTrap } from "@mantine/hooks"
import { openConfirmModal } from "@mantine/modals"
import classes from "./SidePanel.module.scss"

export interface SidePanelAction extends ButtonProps {
  label: string
  formId?: string
  onClick?: () => void | Promise<void>
}

interface SidePanelProps {
  children: React.ReactNode
  title: string
  onClose?: () => void
  ask?: boolean
  actions?: SidePanelAction[]
  actionSection?: React.ReactNode
}

export const handleCloseAside = ({
  ask = false,
  closeCallback,
}: {
  ask: boolean
  closeCallback: () => void
}) => {
  if (!ask) {
    closeCallback()
    return
  }

  openConfirmModal({
    title: "Abort changes?",
    centered: true,
    children: (
      <Text size="sm">
        Do you want to abort changes? <br />
        All unsaved changes will be lost.
      </Text>
    ),
    labels: { confirm: "Yes", cancel: "No" },
    confirmProps: { color: "red" },
    onConfirm: closeCallback,
  })
}

export const SidePanel = ({
  children,
  title,
  ask = false,
  onClose,
  actions = [],
  actionSection,
}: SidePanelProps) => {
  const focusTrapRef = useFocusTrap()
  const { closePanel } = usePanelStore()

  const close = () => {
    if (onClose) {
      onClose()
    }

    closePanel()
  }

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handleCloseAside({ ask, closeCallback: close })
      }
    }

    document.addEventListener("keydown", handleEscape)

    return () => {
      document.removeEventListener("keydown", handleEscape)
    }
  }, [ask])

  return (
    <Flex direction="column" h="100%" pt="md">
      <Group justify="space-between" align="center" px="md" className={classes.header}>
        <Text fw={500} size="lg">
          {title}
        </Text>
        <CloseButton
          size="xl"
          iconSize={28}
          onClick={() => handleCloseAside({ ask, closeCallback: close })}
        />
      </Group>

      <Space h="xl" />

      <Flex direction="column" ref={focusTrapRef} style={{ flex: 1 }}>
        <Box px="md" style={{ flex: 1 }}>
          {children}
        </Box>

        {actions.length > 0 ? (
          <Box className={classes.footer}>
            <Stack gap="sm">
              {actions.map(({ label, formId, onClick, ...rest }, index) => (
                <Button
                  key={`button-${index}-${formId}-${onClick}`}
                  {...rest}
                  fullWidth
                  type={formId ? "submit" : "button"}
                  form={formId}
                  onClick={onClick}
                >
                  {label}
                </Button>
              ))}
            </Stack>
          </Box>
        ) : actionSection ? (
          <Box className={classes.footer}>{actionSection}</Box>
        ) : null}
      </Flex>
    </Flex>
  )
}
