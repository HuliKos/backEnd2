const express = require('express');
const cors = require('cors');
const {getHouses, deleteHouse, createHouse, updateHouse} = require('./controller')

const app = express();

app.use(express.json());
app.use(cors());

let baseUrl = '/api/houses'

app.get(baseUrl, getHouses);
app.delete('/api/houses/:id', deleteHouse);
app.post(baseUrl, createHouse);
app.put('/api/houses/:id', updateHouse)


const SERVER_PORT = 4004;
app.listen(SERVER_PORT, () => console.log(`server is running on ${SERVER_PORT}`))
