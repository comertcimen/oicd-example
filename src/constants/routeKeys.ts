export const ROUTE_KEYS = {
  // DASHBOARD
  DASHBOARD: {
    path: "/",
    resolve: () => "/",
  },
  // CONTACTS
  CONTACTS: {
    path: "contacts",
    resolve: () => "contacts",
  },
  CONTACT: {
    path: ":contactId",
    resolve: (contactId: string) => `/contacts/${contactId}`,
  },
}
