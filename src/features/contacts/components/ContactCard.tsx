import { Avatar, Button, Paper, Text } from "@mantine/core"
import { Contact } from "../models"

export function ContactCard({ contact }: { contact: Contact }) {
  return (
    <Paper radius="md" shadow="xs" p="lg" bg="var(--mantine-color-body)">
      <Avatar src={contact.avatar} size={120} radius={120} mx="auto" />
      <Text ta="center" fz="lg" fw={500} mt="md">
        {contact.fullName}
      </Text>
      <Text ta="center" c="dimmed" fz="sm">
        {`${contact.email} • ${contact.jobTitle}`}
      </Text>

      <Button variant="default" fullWidth mt="md">
        Send message
      </Button>
    </Paper>
  )
}
