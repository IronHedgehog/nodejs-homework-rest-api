const express = require("express");

const { ctrlWrapper } = require("../../helpers");

const { contacts: ctrl } = require("../../controllers");

const { validation, isValidId, auth } = require("../../middlewares");

const { schemas } = require("../../models/contact");

const router = express.Router();

router.get("/", auth, ctrlWrapper(ctrl.getAll));

router.get("/favorite", auth, ctrlWrapper(ctrl.onlyFavorite));

router.get("/:contactId", auth, isValidId, ctrlWrapper(ctrl.getById));

router.post("/", auth, validation(schemas.addContact), ctrlWrapper(ctrl.add));

router.delete("/:contactId", auth, isValidId, ctrlWrapper(ctrl.removeById));

router.put(
  "/:contactId",
  auth,
  isValidId,
  validation(schemas.addContact),
  ctrlWrapper(ctrl.updateByID)
);

router.patch(
  "/:contactId/favorite",
  auth,
  isValidId,
  validation(schemas.updateFavorite),
  ctrlWrapper(ctrl.updateFavorite)
);

module.exports = router;
