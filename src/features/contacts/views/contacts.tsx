import { Shell } from "@/components"
import { ROUTE_KEYS } from "@/constants"
import { Button, Text } from "@mantine/core"
import { IconPlus } from "@tabler/icons-react"
import { ContactsTable } from "../components"
import { useContacts } from "../data"
import { Contact } from "../models"

export default function Contacts() {
  const navigate = useNavigate()
  const { contactsQuery, deleteContactMutation } = useContacts()
  const { data, isPending, isError, error } = contactsQuery()

  const { openPanel } = usePanelStore()

  const handleEdit = async (contact: Contact) => {
    const { CreateContactPanel } = await import("../components")
    openPanel({ component: <CreateContactPanel contact={contact} /> })
  }

  const handleDelete = (contact: Contact) => {
    openConfirmModal({
      title: "Delete contact??",
      children: <Text size="sm">{`Do you want to delete contact "${contact.fullName}"?`}</Text>,
      labels: { confirm: "Delete", cancel: "Cancel" },
      confirmProps: { color: "red" },
      onConfirm: () => deleteContactMutation.mutate(contact.id),
    })
  }

  const navigateToDetails = (contact: Contact) => {
    navigate(ROUTE_KEYS.CONTACT.resolve(contact.id))
  }

  const openCreateContactPanel = async () => {
    const { CreateContactPanel } = await import("../components")
    openPanel({ component: <CreateContactPanel /> })
  }

  const actionButton = (
    <Button leftSection={<IconPlus size="1.2rem" />} onClick={openCreateContactPanel}>
      Create Contact
    </Button>
  )

  if (isPending) return <div>Loading...</div>

  if (isError) return <div>{error.message}</div>

  return (
    <Shell title="Contacts" rightSection={actionButton}>
      <ContactsTable
        contacts={data}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onClickContact={navigateToDetails}
      />
    </Shell>
  )
}
