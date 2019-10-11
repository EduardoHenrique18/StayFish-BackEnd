const express = require('express');

const UserController = require('./controllers/UserController');

const routes = express.Router();

routes.post('/add', UserController.create);

module.exports = routes;
