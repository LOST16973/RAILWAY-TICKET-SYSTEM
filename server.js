const express = require('express');
const app = express();

const dbConfig = require('./db')
const trainsRoute = require('./routes/trainRoutes')

app.use('/api/trains', trainsRoute)

const port = process.env.PORT || 5003;

app.listen(port, () =>console.log(`Node server started using nodemon`));




