const express = require("express");

const Joi = require("joi");

const {
  listContacts,
  getContactById,
  updateContact,
  addContact,
  removeContact,
} = require("../../models/contacts");

const { createError } = require("../../helpers");

const router = express.Router();

const joiSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  phone: Joi.number().required(),
});

router.get("/", async (req, res, next) => {
  try {
    const contacts = await listContacts();
    res.json(contacts);
  } catch (error) {
    next(error);
  }
});

router.get("/:contactId", async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const neededContact = await getContactById(contactId);
    if (!neededContact) {
      throw createError(404);
    }
    res.json(neededContact);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    console.log("req.body", req.body);
    const { error } = joiSchema.validate(req.body);
    if (error) {
      throw createError(400);
    }
    const addedContact = await addContact(req.body);
    res.status(201).json(addedContact);
  } catch (error) {
    next(error);
  }
});

router.delete("/:contactId", async (req, res, next) => {
  res.json({ message: "template message" });
});

router.put("/:contactId", async (req, res, next) => {
  res.json({ message: "template message" });
});

module.exports = router;
