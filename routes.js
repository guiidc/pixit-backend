const routes = require('express').Router();

const userController = require('./src/controllers/userController');

routes.post('/users', userController.store);

module.exports = routes;
