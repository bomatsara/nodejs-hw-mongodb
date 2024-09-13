import { ContactsCollection } from '../db/models/contact.js';

export const getAllContacts = async () => {
    return ContactsCollection.find();
}

export const getContactById = async (contactId) => {
    return ContactsCollection.findById(contactId);
}
