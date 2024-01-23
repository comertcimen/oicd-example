import { ApiService } from "@/services/axios"
import { faker } from "@faker-js/faker"
import { range } from "@mantine/hooks"
import { instanceToPlain, plainToInstance } from "class-transformer"
import { Contact, instanceOptions } from "../models"

const ENDPOINTS = {
  CONTACTS: "/contacts",
  CONTACT: (contactId: string) => `/contacts/${contactId}`,
}

export const fetchContacts = async () => {
  // const data = await ApiService.get<Contact[]>(ENDPOINTS.CONTACTS)
  const rawData = range(1, 10).map(() => ({
    firstname: faker.person.firstName(),
    lastname: faker.person.lastName(),
    email: faker.internet.email(),
    id: faker.string.uuid(),
    avatar: faker.internet.avatar(),
    jobTitle: faker.person.jobTitle(),
    phoneNo: faker.phone.number(),
  }))
  const data = plainToInstance(Contact, rawData)
  return Promise.resolve(data)
}

export const fetchContact = async (contactId: string) => {
  // const data = await ApiService.get<Contact>(ENDPOINTS.CONTACT(contactId))
  const rawData = {
    firstname: faker.person.firstName(),
    lastname: faker.person.lastName(),
    email: faker.internet.email(),
    id: contactId,
    avatar: faker.internet.avatar(),
    jobTitle: faker.person.jobTitle(),
    phoneNo: faker.phone.number(),
  }
  const data = plainToInstance(Contact, rawData)
  return Promise.resolve(data)
}

export const createContact = async (contact: Contact) => {
  const data = instanceToPlain(contact, instanceOptions)

  return ApiService.post<Contact>(ENDPOINTS.CONTACTS, data)
}

export const updateContact = async (contact: Contact) => {
  const data = instanceToPlain(contact, instanceOptions)

  return ApiService.put<Contact>(ENDPOINTS.CONTACT(contact.id), data)
}

export const deleteContact = async (contactId: string) => {
  return ApiService.delete<boolean>(ENDPOINTS.CONTACT(contactId))
}
