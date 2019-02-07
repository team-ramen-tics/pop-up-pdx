const express = require('express');
const app = express();
const connection = require('../lib/middleware/connection');
const { handler } = require('../lib/middleware/error');
const notFound = require('../lib/middleware/notFound');
const { bearerToken } = require('../lib/middleware/ensureAuth');

app.use(express.json());
app.use(bearerToken);
//TESTING
app.use('/auth', connection, require('./routes/auth'));
app.use('/popups', connection, require('./routes/popUps'));
app.use('/attendees', connection, require('./routes/attendees'));

app.use(notFound);
app.use(handler);

module.exports = app;
