const { removeContact } = require("../../models/contacts");

const { createError } = require("../../helpers");

const removeById = async (req, res) => {
  const { contactId } = req.params;
  const deletedContact = await removeContact(contactId);
  if (!deletedContact) {
    throw createError(404);
  }
  res.json({ message: "contact deleted" });
};

module.exports = removeById;
