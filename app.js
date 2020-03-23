const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');

app.use(bodyParser.json());

// Routes which should handle requests
const currenttempincovilhaRoute = require('./routers/currenttempincovilha')

const avgtempinsfaxRoute = require('./routers/avgtempinsfax');

app.use('/currenttempincovilha',currenttempincovilhaRoute);
app.use('/avgtempinsfax',avgtempinsfaxRoute);

//Connection mongoose
mongoose.connect(process.env.DB_CONNECTION, {useNewUrlParser: true}, () => console.log('Connected to DB!')

);

//Listen on port 3000
app.listen(3000);
