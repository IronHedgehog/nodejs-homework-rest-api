const { User } = require("../../models/user");
const bcrypt = require("bcryptjs");
const { createError, sendMail } = require("../../helpers");
const gravatar = require("gravatar");
const { v4: uuidv4 } = require("uuid");

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
  const avatarUrl = gravatar.url(email);
  const verificationToken = uuidv4();
  const newUser = await User.create({
    ...req.body,
    avatarUrl,
    password: hashPassword,
    verificationToken,
  });
  const mail = {
    to: email,
    subject: "Подтверждение регистрации на сайте",
    html: `<a target="_blank" href="http://localhost:3000/auth/verify/${verificationToken}">Нажмите для подтверждения регистрации</a>`,
  };
  await sendMail(mail);
  res.status(201).json({
    user: {
      email: newUser.email,
      subscription: newUser.subscription,
      avatarUrl,
    },
  });
};

module.exports = signup;
