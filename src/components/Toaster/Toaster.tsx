import { useMantineColorScheme } from "@mantine/core"
import { Toaster as Sonner } from "sonner"

export const Toaster = () => {
  const { colorScheme } = useMantineColorScheme()
  return <Sonner richColors theme={colorScheme as any} />
}
