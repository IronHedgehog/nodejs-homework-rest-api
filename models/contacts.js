const fs = require("fs/promises");
const path = require("path");
const { nanoid } = require("nanoid");

const filePath = path.join(__dirname, "contacts.json");

const listContacts = async () => {
  const contacts = await fs.readFile(filePath);
  return JSON.parse(contacts);
};

const getContactById = async (contactId) => {
  const contacts = await listContacts();
  const neededContact = contacts.find(
    ({ id }) => String(id) === String(contactId)
  );
  if (!neededContact) {
    return null;
  }
  return neededContact;
};

const removeContact = async (contactId) => {
  const contacts = await listContacts();
  const deletedContact = contacts.findIndex(
    ({ id }) => String(id) === String(contactId)
  );
  if (deletedContact === -1) {
    return null;
  }
  const [result] = contacts.splice(deletedContact, 1);
  fs.writeFile(filePath, JSON.stringify(contacts, null, 2));
  return result;
};

const addContact = async (body) => {
  const contacts = await listContacts();
  const newContact = {
    ...body,
    id: nanoid(),
  };
  console.log("newContact", newContact);
  contacts.push(newContact);
  fs.writeFile(filePath, JSON.stringify(contacts, null, 2));
  return newContact;
};

const updateContact = async (contactId, body) => {
  const contacts = await listContacts();
  const updatedContact = contacts.findIndex(
    ({ id }) => String(id) === String(contactId)
  );
  if (updatedContact === -1) {
    return null;
  }
  contacts[updatedContact] = { ...body, contactId };
  fs.writeFile(filePath, JSON.stringify(contacts, null, 2));
  return contacts[updatedContact];
};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
};
