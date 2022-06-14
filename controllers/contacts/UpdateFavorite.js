const { Contact } = require("../../models/contact");

const { createError } = require("../../helpers");

const updateFavorite = async (req, res) => {
  const { id } = req.params;
  const newFavorite = await Contact.findByIdAndUpdate(id, req.body, {
    new: true,
  });
  if (!newFavorite) {
    throw createError(400, "missing field favorite");
  }
  res.json(newFavorite);
};

module.exports = updateFavorite;
