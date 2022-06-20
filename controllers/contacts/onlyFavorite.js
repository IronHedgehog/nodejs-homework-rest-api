const { Contact } = require("../../models/contact");

const { createError } = require("../../helpers");

const onlyFavorite = async (req, res) => {
  const { favorite } = req.params;
  console.log("favorite", favorite);
  const allFavorites = await Contact.find({ favorite });
  console.log("newFavorites", allFavorites);
  if (!allFavorites) {
    throw createError(400, "no favorite contacts");
  }
  res.json(allFavorites);
};

module.exports = onlyFavorite;
