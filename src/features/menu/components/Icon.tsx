import {
  IconAddressBook,
  IconFolder,
  IconHome,
  IconUser,
  TablerIconsProps,
} from "@tabler/icons-react"

interface Props {
  icon: string
  color?: string
  size?: number
  stroke?: string
  active?: boolean
}

export const Icon = ({ icon, color, size = 6, stroke = "1.6", active }: Props) => {
  const IconComponent: (props: TablerIconsProps) => JSX.Element = icons[icon]
  return <IconComponent width={size} color={active ? undefined : color} stroke={stroke} />
}

const icons: Record<string, (props: TablerIconsProps) => JSX.Element> = {
  IconHome,
  IconUser,
  IconFolder,
  IconAddressBook,
}
