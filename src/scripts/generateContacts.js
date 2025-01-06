import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
  try {
    // тут я читаю існуючі контакти
    const contacts = await readContacts();

    // а тут я генерую нові
    const newContacts = Array.from({ length: number }, createFakeContact);

    // розсипаю все, тобто об'єдную і записую всі назад
    await writeContacts([...contacts, ...newContacts]);

    console.log(`Successfully generated ${number} new contacts.`);
  } catch (error) {
    console.error('Error generating contacts:', error.message);
  }
};

generateContacts(5);
