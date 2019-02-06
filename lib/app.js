const express = require('express');
const app = express();
const connection = require('../lib/middleware/connection');
const { bearerToken } = require('../lib/middleware/ensureAuth');
const { handler } = require('../lib/middleware/error');
const notFound = require('../lib/middleware/notFound');
const attendees = require('../lib/routes/attendee');


app.use(express.json());
app.use(bearerToken);
app.use('/auth', connection, require('../lib/routes/auth'));
app.use('/attendees', attendees);

app.use(notFound);
app.use(handler);


module.exports = app;
