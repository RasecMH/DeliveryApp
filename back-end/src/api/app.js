const express = require('express');
const loginRouter = require('../api/routes/loginRouter')
const handleError = require('./middlewares/handleError')

const app = express();
app.use(express.json());

app.get('/coffee', (_req, res) => res.status(418).end());
app.use(loginRouter);


app.use(handleError);

module.exports = app;
