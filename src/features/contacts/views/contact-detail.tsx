import { Shell } from "@/components"
import { SimpleGrid } from "@mantine/core"
import { ContactCard } from "../components"
import { useContacts } from "../data"

export default function Contacts() {
  const { contactId } = useParams<{ contactId: string }>()
  const { contactQuery } = useContacts()
  const {
    data: contact,
    isPending,
    isError,
    error,
  } = contactQuery({ contactId: contactId as string })

  if (isPending) return <div>Loading...</div>

  if (isError) return <div>{error.message}</div>

  return (
    <Shell title={contact.firstname} subtitle={contact.email} logo={contact.avatar} showBackButton>
      <SimpleGrid cols={2}>
        <ContactCard contact={contact} />
      </SimpleGrid>
    </Shell>
  )
}
