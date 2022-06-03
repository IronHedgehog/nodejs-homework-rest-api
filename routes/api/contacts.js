const express = require("express");

const Joi = require("joi");

const {
  listContacts,
  getContactById,
  updateContact,
  addContact,
  removeContact,
} = require("../../models/contacts");

const createError = require("../../helpers");

const router = express.Router();

const validationShema = Joi.object({
  name: Joi.string().required(),
  phone: Joi.string().required(),
  number: Joi.number().required(),
});

router.get("/", async (req, res, next) => {
  try {
    const contacts = await listContacts();
    res.json(contacts);
    if (!contacts) {
      return null;
    }
  } catch (error) {
    next(error);
  }
});

router.get("/:contactId", async (req, res, next) => {
  res.json({ message: "template message" });
});

router.post("/", async (req, res, next) => {
  res.json({ message: "template message" });
});

router.delete("/:contactId", async (req, res, next) => {
  res.json({ message: "template message" });
});

router.put("/:contactId", async (req, res, next) => {
  res.json({ message: "template message" });
});

module.exports = router;
