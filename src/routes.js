const express = require('express');

const UserController = require('./controllers/UserController');

const PaymentController = require('./controllers/PaymentController');

const MoneyController = require('./controllers/MoneyController');

const routes = express.Router();

routes.post('/add', UserController.create);

routes.post('/addPayment/', PaymentController.createPayment);

routes.get('/serchPayment', PaymentController.serchPayment);

routes.post('/addMoney', MoneyController.createMoney);

routes.get('/searchMoney', MoneyController.searchMoney);

module.exports = routes;
