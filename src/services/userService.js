const validator = require('validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { User } = require('../models');

let errors = [];

function validateName(name) {
  if (!name) return errors.push({ code: 400, error: 'field "name" is required' });
  if (name.length < 3) errors.push({ code: 400, error: 'field "name" must contain at least 3 characters long' });
}

async function validateEmail(email) {
  if (!email) return errors.push({ code: 400, error: 'field "email" is required' });
  if (!validator.isEmail(email)) errors.push({ code: 400, error: 'invalid email' });
  const alreadyExists = await User.findOne({ where: { email } });
  if (alreadyExists) errors.push({ code: 401, error: 'email already in use' })
}

function validatePassword(password) {
  if (!password) return errors.push({ code: 400, error: 'field "password" is rquired' });
  if (password.length < 6) errors.push({ code: 400, error: 'field "password" must contain at leasst 6 characters long' });
}

async function validateData(name, email, password) {
  errors = [];
  validateName(name);
  await validateEmail(email);
  validatePassword(password);
}

async function store(name, email, password) {
  await validateData(name, email, password);
  if (errors.length) {
    const [error] = errors;
    return error;
  }
  const salt = bcrypt.genSaltSync();
  const passwordHash = bcrypt.hashSync(password, salt);
  const user = await User.create({ name, email, password: passwordHash });
  const token = jwt.sign({ payload: { id: user.id } }, process.env.JWT_SECRET);
  return { token };
}

module.exports = {
  store,
}