const express = require('express');
const loginRouter = require('./routes/loginRouter');
const handleError = require('./middlewares/handleError');
const productRouter = require('./routes/productRouter');

const app = express();
app.use(express.json());

app.get('/coffee', (_req, res) => res.status(418).end());
app.use('/users', loginRouter);
app.use('/products', productRouter);

app.use(handleError);

module.exports = app;
