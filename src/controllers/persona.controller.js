const seq = require("../db/conexion"); // conectar ba
// declarar al modelo a usar
const Persona = require("../database/models").Persona;
const Usuario = require("../database/models").Usuario;
async function mostrar(req, res) {
  try {
    const data = await Persona.findAll({
      include: [
        {
          model : Usuario
        }
      ],
      // primaryKey: 'idPersona'

    }
    );
    res.status(200).json({ mensaje: "Todo Okey", body: data });
  } catch (error) {
    console.log(error);
    res.status(500).json({ mensaje: "Error al listar" });
  }
}

async function guardar(req, res) {
  try {
    // cuando es peticion post es body se guarda los datos
    const data = await Persona.create(req.body);
    res.status(200).json({ mensaje: "Todo Okey", body: data });
  } catch (error) {
    console.log(error);
    res.status(500).json({ mensaje: "Error al Crear dato" });
  }
}

async function mostrarId(req, res) {
  // cuando es por parametros -> el valor esta en params
  let ID = req.params.id;
  console.log(ID);
  try {
    const data = await Persona.findAll({
      where: {
        id: ID,
      },
    });
    res.status(200).json({ mensaje: "Todo Okey", body: data });
  } catch (error) {
    res.status(500).json({ mensaje: "Error al listar por iD" });
  }
}

async function actualizar(req, res) {
  let ID = req.params.id; // cuando es por parametros en params esta
  try {
    const data = await Persona.update(req.body, {
      where: {
        id: ID,
      },
    });
    res.status(200).json({ mensaje: "Actualizado Correctamente", body: data });
  } catch (error) {
    res.status(500).json({ mensaje: "Error  al Actualizar" });
  }
}

async function eliminar(req, res) {
  let ID = req.params.id; // cuando es /persona/1 (con parametros) el parametro  esta en params
  try {
    const data = await Persona.destroy({
      where: {
        id: ID,
      },
    });

    res.status(200).json({ mensaje: "Eliminado Correctamente", body: data });
  } catch (error) {
    res.status(500).json({ mensaje: "Error al eliminar" });
  }
}

module.exports = {
  mostrar,
  guardar,
  mostrarId,
  actualizar,
  eliminar,
};
