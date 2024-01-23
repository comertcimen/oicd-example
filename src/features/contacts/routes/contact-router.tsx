import { ROUTE_KEYS } from "@/constants"

const Contacts = lazy(() => import("../views/contacts"))
const ContactDetail = lazy(() => import("../views/contact-detail"))

export const ContactRouter = {
  path: ROUTE_KEYS.CONTACTS.path,
  children: [
    {
      index: true,
      element: <Contacts />,
    },
    {
      path: ROUTE_KEYS.CONTACT.path,
      element: <ContactDetail />,
    },
  ],
}
