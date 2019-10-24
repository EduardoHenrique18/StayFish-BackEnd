const express = require('express');

const UserController = require('./controllers/UserController');

const routes = express.Router();

routes.post('/add', UserController.create);

routes.post('/login', UserController.login);

module.exports = routes;
