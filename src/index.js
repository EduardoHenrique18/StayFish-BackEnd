const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const routes = require('./routes');

const app = express();

app.use(cors());

var port = process.env.PORT || 8080;
//uri = process.env.ATLAS_URI;

const teste = 'mongodb+srv://kvothe:1123581321@stayfish-kzjb2.mongodb.net/test?retryWrites=true&w=majority'

mongoose.connect(teste, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });

app.use(express.json());
app.use(routes);

app.listen(port);
