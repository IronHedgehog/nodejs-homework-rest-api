const express = require("express");

const { ctrlWrapper } = require("../../helpers");

const { contacts: ctrl } = require("../../controllers");

const { validation } = require("../../middlewares");

const { addContact } = require("../../schemas/contacts");

const router = express.Router();

router.get("/", ctrlWrapper(ctrl.getAll));

router.get("/:contactId", ctrlWrapper(ctrl.getById));

router.post("/", validation(addContact), ctrlWrapper(ctrl.add));

router.delete("/:contactId", ctrlWrapper(ctrl.removeById));

router.put("/:contactId", validation(addContact), ctrlWrapper(ctrl.updateByID));

module.exports = router;
