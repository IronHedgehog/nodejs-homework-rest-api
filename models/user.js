const { Schema, model } = require("mongoose");
const Joi = require("joi");

const subscriptionType = ["starter", "pro", "business"];

const userSchema = Schema(
  {
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    subscription: {
      type: String,
      enum: subscriptionType,
      default: "starter",
    },
    token: {
      type: String,
      default: "",
    },
    avatarURL: {
      type: String,
      required: true,
    },
    verify: {
      type: Boolean,
      default: false,
    },
    verificationToken: {
      type: String,
      required: [true, "Verify token is required"],
    },
  },
  { versionKey: false, timestamps: true }
);

const joiRegisterSchema = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().required(),
  subscription: Joi.string().valid(...subscriptionType),
});

const joiLoginSchema = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().required(),
});

const joiPatchSchema = Joi.object({
  subscription: Joi.string()
    .valid(...subscriptionType)
    .required(),
});

const verifyEmail = {
  email: Joi.string().required(),
};

const schemas = {
  joiRegisterSchema,
  joiLoginSchema,
  joiPatchSchema,
  verifyEmail,
};

const User = model("user", userSchema);

module.exports = {
  User,
  schemas,
};
