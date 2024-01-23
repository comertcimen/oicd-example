import { ActionIcon, Anchor, Avatar, Badge, Card, Group, Table, Text, rem } from "@mantine/core"
import { IconPencil, IconTrash } from "@tabler/icons-react"
import { Contact } from "../models"

interface Props {
  contacts: Contact[]
  onEdit: (contact: Contact) => void
  onDelete: (contact: Contact) => void
  onClickContact: (contact: Contact) => void
}

export const ContactsTable = ({ contacts, onEdit, onDelete, onClickContact }: Props) => {
  const rows = contacts.map((contact) => (
    <Table.Tr key={contact.id}>
      <Table.Td>
        <Group gap="sm" onClick={() => onClickContact(contact)}>
          <Avatar size={30} src={contact.avatar} radius={30} />
          <Anchor fz="sm" fw={500} c="dimmed">
            {contact.fullName}
          </Anchor>
        </Group>
      </Table.Td>

      <Table.Td>
        <Badge color="blue" variant="light">
          {contact.jobTitle}
        </Badge>
      </Table.Td>
      <Table.Td>
        <Anchor component="button" size="sm">
          {contact.email}
        </Anchor>
      </Table.Td>
      <Table.Td>
        <Text fz="sm">{contact.phoneNo}</Text>
      </Table.Td>
      <Table.Td>
        <Group gap={0} justify="flex-end">
          <ActionIcon variant="subtle" color="gray" onClick={() => onEdit(contact)}>
            <IconPencil style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
          </ActionIcon>
          <ActionIcon variant="subtle" color="red" onClick={() => onDelete(contact)}>
            <IconTrash style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
          </ActionIcon>
        </Group>
      </Table.Td>
    </Table.Tr>
  ))

  return (
    <Card shadow="xs" p="lg" radius="md">
      <Table.ScrollContainer minWidth={800}>
        <Table verticalSpacing="sm">
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Employee</Table.Th>
              <Table.Th>Job title</Table.Th>
              <Table.Th>Email</Table.Th>
              <Table.Th>Phone</Table.Th>
              <Table.Th />
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{rows}</Table.Tbody>
        </Table>
      </Table.ScrollContainer>
    </Card>
  )
}
