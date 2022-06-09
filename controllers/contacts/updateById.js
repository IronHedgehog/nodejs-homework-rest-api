const { updateContact } = require("../../models/contacts");

const { createError } = require("../../helpers");

const updateByID = async (req, res) => {
  const { contactId } = req.params;
  const updatedContact = await updateContact(contactId, req.body);
  if (!updatedContact) {
    throw createError(404);
  }
  res.json(updatedContact);
};

module.exports = updateByID;