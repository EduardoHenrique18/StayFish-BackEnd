const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const routes = require('./routes');

require('dotenv').config();

const app = express();

app.use(cors());

const uri = process.env.ATLAS_URI; 
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true}); 
const connection = mongoose.connection;  
connection.once('open', () => { 
    console.log('MongoDB database connection established sucessfuly'); 
})



app.listen(8080);