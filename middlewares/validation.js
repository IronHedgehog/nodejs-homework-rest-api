const { createError } = require("../helpers");

const validation = (schema) => {
  const func = (req, res, next) => {
    try {
      const { error } = schema.validate(req.body);
      if (error) {
        throw createError(400, "missing required name field");
      }
      next();
    } catch (error) {
      next(error);
    }
  };

  return func;
};

module.exports = validation;
