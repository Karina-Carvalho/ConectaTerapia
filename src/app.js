require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const terapiaRoutes = require('./routes/terapiaRoutes');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use('/api/terapia', terapiaRoutes);

const mongoose = require("mongoose")
const MONGODB_URI = process.env.MONGODB_URI

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "Erro de conexão ao MongoDB:"))
db.once("open", function () {
  console.log("Conexão bem-sucedida com o MongoDB Atlas!")
});

const swaggerUi = require('swagger-ui-express');

const swaggerFile = require('../swagger/swagger_output.json');

app.use('/conectat', swaggerUi.serve, swaggerUi.setup(swaggerFile));

module.exports = app;