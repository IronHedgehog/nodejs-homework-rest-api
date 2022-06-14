const { Contact } = require("../../models/contact");

const { createError } = require("../../helpers");

const removeById = async (req, res) => {
  const { contactId } = req.params;
  const deletedContact = await Contact.findByIdAndDelete(contactId);
  if (!deletedContact) {
    throw createError(404);
  }
  res.json({ message: "contact deleted" });
};

module.exports = removeById;
