require("dotenv").config();
const bodyParser = require("body-parser"); // para peticiones post
const express = require("express");
const routes = require("./routes/index");
const cors = require("cors");
const { sequelize } = require("./database/models");
require('./database/asociations')
const app = express();

// para seeds
const PORT = process.env.PORT || 3000;

app.use(express.json()); // para leer peticiones json que esten en el body
app.use(cors()); // para peticiones de otros origenes

// mildware para peticiones post
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// importando rutas
app.use("/api", routes);

app.listen(PORT, () => {
    sequelize.sync({force  : false});
    console.log(`Servidor Iniciado en http://localhost:${PORT}`);
})
