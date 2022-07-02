const express = require("express");

const { ctrlWrapper } = require("../../helpers");

const { auth: ctrl } = require("../../controllers");

const { validation, auth, isValidId, upload } = require("../../middlewares");

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

router.patch(
  "/:id/subscription",
  isValidId,
  validation(schemas.joiPatchSchema),
  ctrlWrapper(ctrl.updateSubscription)
);

router.patch(
  "/avatar",
  auth,
  upload.single("avatar"),
  ctrlWrapper(ctrl.patchAvatar)
);

module.exports = router;
