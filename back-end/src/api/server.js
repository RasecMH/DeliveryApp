require('dotenv/config');

const port = process.env.API_PORT;
const app = require('./app');

app.listen(port);
console.log(`Api rodando na porta ${port}`);
