const Joi = require("joi");

const addContact = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  phone: Joi.number().required(),
});

module.exports = {
  addContact,
};
