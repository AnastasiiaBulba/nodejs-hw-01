import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const addOneContact = async () => {
  try {
    const contacts = await readContacts();
    if (!Array.isArray(contacts)) {
      throw new Error('Contacts is not an array');
    }
    const newContacts = createFakeContact();
    await writeContacts([...contacts, newContacts]);
    console.log('New contact added successfully!');
  } catch (error) {
    console.error('Error adding contact:', error.message);
  }
};

addOneContact();
