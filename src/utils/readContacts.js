import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const readContacts = async () => {
  // читаю файл
  const data = await fs.readFile(PATH_DB, 'utf-8');

  // повертаю файл
  return JSON.parse(data);
};
