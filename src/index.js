const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const routes = require('./routes');

const app = express();

app.use(cors());

var port = process.env.PORT || 8080;
uri = process.env.ATLAS_URI || '';

const con = 'mongodb://kvothe:1123581321@stayfish-shard-00-00-kzjb2.mongodb.net:27017,stayfish-shard-00-01-kzjb2.mongodb.net:27017,stayfish-shard-00-02-kzjb2.mongodb.net:27017/test?ssl=true&replicaSet=StayFish-shard-0&authSource=admin&retryWrites=true&w=majority'

mongoose.connect(con, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true, useFindAndModify: false });

app.use(express.json());
app.use(routes);

app.listen(port);
