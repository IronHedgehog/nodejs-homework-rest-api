const { User } = require("../../models/user");
const bcrypt = require("bcryptjs");
const { createError } = require("../../helpers");

// Взять из тела запроса данные(емейл и пароль)
// ищем пользователя по емейлу в базе, если находим кидаем конфликт,
// если не находим хешируем пароль и добавляем в базу нового пользователя

const signup = async (req, res) => {
  const { email, password } = req.body;
  console.log("email,password", email, password);
  const user = await User.findOne({ email });
  if (user) {
    throw createError(409, "Email in use");
  }
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(password, salt);
  const newUser = await User.create({ ...req.body, password: hashPassword });
  res.status(201).json({
    user: {
      email: newUser.email,
      subscription: newUser.subscription,
    },
  });
};

module.exports = signup;
