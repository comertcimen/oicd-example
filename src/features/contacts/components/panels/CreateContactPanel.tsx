import { SidePanel } from "@/components"
import { LoadingOverlay, Stack, TextInput } from "@mantine/core"
import { isEmail, isNotEmpty } from "@mantine/form"
import { useContacts } from "../../data"
import { Contact } from "../../models"

export const CreateContactPanel = ({ contact }: { contact?: Contact }) => {
  const editMode = !!contact
  const formId = useId()

  const { createContactMutation, updateContactMutation } = useContacts()

  const mutationFn = editMode ? updateContactMutation : createContactMutation

  const form = useForm<Contact>({
    initialValues: Contact.createEmpty(contact),

    validate: {
      firstname: isNotEmpty("First name is required"),
      lastname: isNotEmpty("Last name is required"),
      email: isEmail("Email is invalid"),
    },
  })

  const handleSubmitForm = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const validation = await form.validate()
    if (validation.hasErrors) return

    mutationFn.mutate(form.values)
  }

  return (
    <SidePanel
      ask={form.isDirty()}
      title={editMode ? "Modify contact" : "New contact"}
      actions={[{ label: "Speichern", formId: formId }]}
    >
      <LoadingOverlay visible={mutationFn.isPending} overlayProps={{ blur: 2 }} />

      <form onSubmit={handleSubmitForm} id={formId}>
        <Stack>
          <TextInput withAsterisk label="Firstname" {...form.getInputProps("firstname")} />
          <TextInput withAsterisk label="Lastname" {...form.getInputProps("lastname")} />
          <TextInput withAsterisk label="Email" {...form.getInputProps("email")} />
          <TextInput label="Job" {...form.getInputProps("jobTitle")} />
          <TextInput label="Phone no" {...form.getInputProps("phoneNo")} />
        </Stack>
      </form>
    </SidePanel>
  )
}
