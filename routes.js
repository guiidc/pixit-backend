const routes = require('express').Router();

const userController = require('./src/controllers/userController');
const loginController = require('./src/controllers/loginController');
const consumerController = require('./src/controllers/consumerController');
const passwordController = require('./src/controllers/passwordController');
const validateToken = require('./src/middlewares/validateToken');

routes.post('/users', userController.store);
routes.post('/login', loginController.login);
routes.post('/consumers', validateToken, consumerController.store);
routes.get('/consumers', validateToken, consumerController.index);
routes.get('/consumers/:id', validateToken, consumerController.show);
routes.put('/consumers/:id', validateToken, consumerController.update);
routes.delete('/consumers/:id', validateToken, consumerController.remove);
routes.post('/password-recover', passwordController.recover);
routes.post('/password-reset', passwordController.reset);
module.exports = routes;
