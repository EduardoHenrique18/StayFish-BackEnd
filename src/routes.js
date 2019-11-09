const express = require('express');

const UserController = require('./controllers/UserController');

const MoneyController = require('./controllers/MoneyController');

const routes = express.Router();

routes.post('/add', UserController.create);

routes.post('/login', UserController.login);

routes.post('/addMoney', MoneyController.createMoney);

routes.get('/searchMoney', MoneyController.findMoney);

module.exports = routes;
