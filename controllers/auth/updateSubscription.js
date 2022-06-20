const { User } = require("../../models/user");

const { createError } = require("../../helpers");

const updateSubscription = async (req, res) => {
  const { id } = req.params;
  const updatedSubscription = await User.findByIdAndUpdate(id, req.body, {
    new: true,
  });
  if (!updatedSubscription) {
    throw createError(400, "missing field Subscription");
  }
  res.json({
    email: updatedSubscription.email,
    subscription: updatedSubscription.subscription,
  });
};

module.exports = updateSubscription;
