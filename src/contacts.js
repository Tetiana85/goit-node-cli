const fs = require("fs/promises");
const path = require("path");
const { nanoid } = require("nanoid");

console.log(__dirname);

// const contactsPath = path.join(__dirname, contacts.json);

// async function listContacts() {
//   const data = await fs.readFile(contactsPath);
//   return JSON.parse(contacts);
// }

// async function getContactById(contactId) {
//   const contacts = await listContacts();
//   const contact = contacts.find((element) => element.id === contactId);
//   return contact || null;
// }

// async function removeContact(contactId) {
//   const contacts = await listContacts();
//   const index = contacts.findIndex((element) => element.id === contactId);
//   if (index === -1) return null;

//   const deletedContact = contacts.splice(index, 1);
//   await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
//   return deletedContact[0];
// }

// async function addContact(name, email, phone) {
//   const contacts = await listContacts();
//   const newContact = {
//     id: nanoid(),
//     name,
//     email,
//     phone,
//   };

//   contacts.push(newContact);
//   await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
//   return newContact;
// }

module.exports = { listContacts, getContactById, removeContact, addContact };
