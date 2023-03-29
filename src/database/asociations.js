const Usuario = require('../database/models').Usuario
const Persona = require('../database/models').Persona; // debe ser de esa forma
const Rol = require('../database/models').Rol;

// para eliminar en cascada
// si elimino a una persona deberia desaparecer el usuario

// 1:1
// esta migrando a Usario la clave primaria de Persona como llave foranea
// Persona.hasOne(Usuario, {
//     onDelete: 'CASCADE'
// });
// Usuario.belongsTo(Persona);
// 1:N
// 1 Persona puede tener N usuario
// 1 Usuario pertenece a 1 Persona

//######################################################################################3
// en realidad lo unico qeu cambia es como muestra el resultado con el Join (1:1) o (1:N)
// esta migrando a Usuario la clave primaria de Persona como llave foranea
Persona.hasMany(Usuario, {
    onDelete : 'CASCADE'
});

// añadir una clave de Persona a la tabla Usuario (pero ya tieen)
Usuario.belongsTo(Persona);
//######################################################################################3


// N:M
// crea una nueva tabla en la base de datos
// tiene funciones especificar
// Usuario.addRol, Usuario.getRol, etc
Usuario.belongsToMany(Rol, { through: "usuario_tiene_rol" });
Rol.belongsToMany(Usuario, { through: "usuario_tiene_rol" });

