const getAll = require("./getAll");
const getById = require("./getById");
const add = require("./add");
const removeById = require("./removeById");
const updateByID = require("./updateById");
const updateFavorite = require("./updateFavorite");
const onlyFavorite = require("./onlyFavorite");

module.exports = {
  getAll,
  getById,
  add,
  removeById,
  updateByID,
  updateFavorite,
  onlyFavorite,
};
