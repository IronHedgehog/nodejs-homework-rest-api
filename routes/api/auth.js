const express = require("express");

const { ctrlWrapper } = require("../../helpers");

const { auth: ctrl } = require("../../controllers");

const { validation } = require("../../middlewares");

const { schemas } = require("../../models/user");

const router = express.Router();

router.post(
  "/signup",
  validation(schemas.joiRegisterSchema),
  ctrlWrapper(ctrl.register)
);

module.exports = router;
