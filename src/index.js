
'use strict';
require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')
const path = require('path');
var cors = require('cors');
const app = express()
const port = 3000

app.set('port', process.env.port || port);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Headers
app.use(cors());


app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
})

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})

