const { Contact } = require("../../models/contact");

const add = async (req, res) => {
  const { _id: owner } = req.user;
  const addedContact = await Contact.create({ ...req.body, owner });
  res.status(201).json(addedContact);
};

module.exports = add;
