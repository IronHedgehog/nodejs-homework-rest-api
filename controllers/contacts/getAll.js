const { listContacts } = require("../../models/contacts");

const getAll = async (req, res) => {
  const contacts = await listContacts();
  res.json(contacts);
};

module.exports = getAll;
