const { addContact } = require("../../models/contacts");

const add = async (req, res) => {
  const addedContact = await addContact(req.body);
  res.status(201).json(addedContact);
};

module.exports = add;
