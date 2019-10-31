const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const routes = require('./routes');

require('dotenv').config();

const app = express();

app.use(cors());

var port = process.env.PORT || 8080;
uri = process.env.ATLAS_URI;
teste = process.env.TESTE || 'nao funfou';
console.log(teste)
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });

app.use(express.json());
app.use(routes);

app.listen(port);
