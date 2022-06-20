const { Contact } = require("../../models/contact");

const getAll = async (req, res) => {
  const { _id: owner } = req.user;
  const contacts = await Contact.find(
    { owner },
    "-createdAt -updatedAt"
  ).populate("owner", "email");
  res.json(contacts);
};

module.exports = getAll;
