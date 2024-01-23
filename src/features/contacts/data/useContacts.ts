import {
  createContact,
  deleteContact,
  fetchContact,
  fetchContacts,
  updateContact,
} from "../services"

export const useContacts = () => {
  const queryClient = useQueryClient()
  const QUERY_KEYS = {
    CONTACTS: ["contacts"],
    CONTACT: (contactId: string) => ["contacts", contactId],
  }

  const contactsQuery = () =>
    useQuery({
      queryKey: QUERY_KEYS.CONTACTS,
      queryFn: fetchContacts,
    })

  const contactQuery = ({ contactId }: { contactId: string }) =>
    useQuery({
      queryKey: QUERY_KEYS.CONTACT(contactId),
      queryFn: () => fetchContact(contactId),
      enabled: !!contactId,
    })

  const createContactMutation = useMutation({
    mutationFn: createContact,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEYS.CONTACTS,
      })
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const updateContactMutation = useMutation({
    mutationFn: updateContact,
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEYS.CONTACTS,
      })

      queryClient.invalidateQueries({
        queryKey: QUERY_KEYS.CONTACT(data.id),
      })
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const deleteContactMutation = useMutation({
    mutationFn: deleteContact,
    onSuccess: (_data, contactId) => {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEYS.CONTACTS,
      })

      queryClient.invalidateQueries({
        queryKey: QUERY_KEYS.CONTACT(contactId),
      })
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  return {
    contactsQuery,
    contactQuery,
    createContactMutation,
    updateContactMutation,
    deleteContactMutation,
  }
}
