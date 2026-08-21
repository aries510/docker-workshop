const express = require('express');
const app = express();
const port = 8080;
const cors = require('cors');
const knex = require('knex')(require('../database/knexfile.js')['development'])

app.use(express.json());
app.use(cors());

app.get('/', (request, response) => {
    response.send('Welcome to the Home Page.')
});

app.listen(port, () => console.log(`App listening on port ${port}`));