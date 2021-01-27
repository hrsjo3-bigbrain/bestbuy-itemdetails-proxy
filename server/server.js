const express = require('express');
const path = require('path');
const cors = require('cors');
// const bodyParser = require('body-parser');

const PUBLIC_DIR = path.join(__dirname, '..', 'public');
const app = express();

// app.use(bodyParser.urlencoded({ extended: false }));
app.use('/products/:id', express.static(PUBLIC_DIR));
app.use(cors());

module.exports = app;
