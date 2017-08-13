const express = require('express');
const bodyParser =require('body-parser');
const xmlparser = require('express-xml-bodyparser');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(xmlparser());
app.set('json spaces', 2);
app.locals.pretty = true;

require('./routes')(app);

module.exports = app;
