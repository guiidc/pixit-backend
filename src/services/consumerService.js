const validator = require('validator')
const { Consumer } = require('../models');

let errors = [];

function validateName(name) {
  if (!name) return errors.push({code: 400, error: 'O campo "nome" é obrigatório'});
  if (name.length < 3) return errors.push({code: 400, error: 'O campo "nome" deve conter no mínimo 3 caracteres'});
}
function validateEmail(email) {
  if (!email) return errors.push({code: 400, error: 'O campo "e-mail" é obrigatório'});
  if (!validator.isEmail(email)) return errors.push({code: 400, error: 'E-mail inválido'});
}
function validateSex(sex) {
  if (sex !== 'M' && sex !== 'F') return errors.push({code: 400, error: 'O campo "sexo" deve conter apenas uma letra (M, F)'});
}

function validateCity(city) {
  if (!city) return errors.push({code: 400, error: 'O campo "cidade" é obrigatório' })
}

function validateData({ name, email, sex, city}) {
  errors = [];
  validateName(name);
  validateEmail(email);
  validateSex(sex);
  validateCity(city);
}

async function store(consumerData) {
  validateData(consumerData);
  if (errors.length) return errors[0];
  const { name, email, sex, city } = consumerData;
  const consumer = await Consumer.create({ name, email, sex, city });
  return consumer;
}

async function index() {
  const consumers = await Consumer.findAll({where: {}, attributes: ['id', 'name', 'email', 'sex', 'city']});
  return consumers;
}

async function show(id) {
  const consumer = await Consumer.findByPk(id, { attributes: ['id', 'name', 'email', 'sex', 'city']});
  if (!consumer) return {code: 404, error: 'Cliente não encontrado'};
  return consumer;
}

async function update(id, consumerData) {
  const consumerExists = await Consumer.findByPk(id);
  if (!consumerExists) return {code: 404, error: 'Cliente não encontrado'};
  validateData(consumerData);
  if (errors.length) return errors[0];
  const { name, email, sex, city } = consumerData;
  const consumer = await Consumer.update({ name, email, sex, city }, { where: { id } });
  return consumer;
}

async function remove(id) {
  const consumer = await Consumer.destroy({ where: { id } });
  if (!consumer) return {code: 404, error: 'Cliente não encontrado'};
  return consumer;
}


module.exports = {
  store,
  index,
  show,
  update,
  remove,
}
