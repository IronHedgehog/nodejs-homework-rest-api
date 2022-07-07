const signup = require("./signup");
const login = require("./login");
const logout = require("./logout");
const current = require("./current");
const updateSubscription = require("./updateSubscription");
const patchAvatar = require("./patchAvatar");
const verifyEmail = require("./verifyEmail");
const resendVerifyEmail = require("./resendVerifyEmail");

module.exports = {
  signup,
  login,
  logout,
  current,
  updateSubscription,
  patchAvatar,
  verifyEmail,
  resendVerifyEmail,
};
