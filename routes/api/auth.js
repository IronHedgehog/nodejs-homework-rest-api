const express = require("express");

const { ctrlWrapper } = require("../../helpers");

const { auth: ctrl } = require("../../controllers");

const { validation, auth } = require("../../middlewares");

const { schemas } = require("../../models/user");

const router = express.Router();

router.post(
  "/signup",
  validation(schemas.joiRegisterSchema),
  ctrlWrapper(ctrl.signup)
);

router.post(
  "/login",
  validation(schemas.joiLoginSchema),
  ctrlWrapper(ctrl.login)
);

router.get("/logout", auth, ctrlWrapper(ctrl.logout));

router.get("/current", auth, ctrlWrapper(ctrl.current));

module.exports = router;
