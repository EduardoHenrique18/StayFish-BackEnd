const express = require('express');

const UserController = require('./controllers/UserController');

const PaymentController = require('./controllers/PaymentController');

const routes = express.Router();

routes.post('/add', UserController.create);

routes.post('/login', UserController.login);

routes.post('/addPayment/', PaymentController.createPayment);

routes.get('/serachPayment', PaymentController.serchPayment);

module.exports = routes;
