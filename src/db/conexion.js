const { Sequelize } = require("sequelize");
const seq = new Sequelize("mydbPrueba", "root", null, {
  host: "localhost",
  dialect: "mysql",
});

async function testBD() {
  // hay que esperar la conexion
  try {
    await seq.sync(); // para cerificar tablas
    await seq.authenticate();
    console.log("\n**********************************************");
    console.log("*Conexion establecida con base de datos      *");
    console.log("**********************************************\n");
  } catch (error) {
    console.log("error de conexion de base de datos\nEl error es: ");
    console.log(error);
  }
}


testBD();
module.exports = seq;