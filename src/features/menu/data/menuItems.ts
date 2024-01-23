import { Menu } from "../models"

/**
 * @description icon must be imported in @/features/menu/components/Icon.tsx
 */
export const menuItems: Menu[] = [
  {
    id: "dashboard",
    label: "Dashboard",
    icon: "IconHome",
    to: "/",
  },
  {
    id: "contacts",
    label: "Contacts",
    icon: "IconAddressBook",
    to: "/contacts",
  },
]
