const { getContactById } = require("../../models/contacts");

const { createError } = require("../../helpers");

const getById = async (req, res) => {
  const { contactId } = req.params;
  const neededContact = await getContactById(contactId);
  if (!neededContact) {
    throw createError(404);
  }
  res.json(neededContact);
};

module.exports = getById;
