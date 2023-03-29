const {Router} = require("express");
const usuarioController = require("../controllers/usuario.controller")
const personaController = require("../controllers/persona.controller")
const rolController = require("../controllers/rol.controller")
const Route = Router();


// creando los endpoints (rutas)
Route.get('/persona', personaController.mostrar);
Route.post('/persona', personaController.guardar);
Route.get('/persona/:id', personaController.mostrarId);
Route.put('/persona/:id', personaController.actualizar);
Route.delete('/persona/:id', personaController.eliminar);


// para usuario
Route.get('/usuario', usuarioController.mostrar);
Route.post('/usuario', usuarioController.guardar);
Route.get('/usuario/:id', usuarioController.mostrarId);
Route.put('/usuario/:id', usuarioController.actualizar);
Route.delete('/usuario/:id', usuarioController.eliminar);


// para rol
Route.get('/rol', rolController.mostrar);
Route.post('/rol', rolController.guardar);
Route.get('/rol/:id', rolController.mostrarId);
Route.put('/rol/:id', rolController.actualizar);
Route.delete('/rol/:id', rolController.eliminar);

module.exports = Route;