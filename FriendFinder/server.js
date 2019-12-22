const express = require("express");
const bodyParser = require('body-parser');
const path = path = require('path');

const app = express();
const port = app.set('port', process.env.PORT || 8080);