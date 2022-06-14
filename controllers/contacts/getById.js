const { Contact } = require("../../models/contact");

const { createError } = require("../../helpers");

const getById = async (req, res) => {
  const { contactId } = req.params;
  const neededContact = await Contact.findById(
    contactId,
    "-createdAt -updatedAt"
  );
  if (!neededContact) {
    throw createError(404);
  }
  res.json(neededContact);
};

module.exports = getById;
