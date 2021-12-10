const routes = require('express').Router();

const userController = require('./src/controllers/userController');
const loginController = require('./src/controllers/loginController');

routes.post('/users', userController.store);
routes.post('/login', loginController.login);
module.exports = routes;
