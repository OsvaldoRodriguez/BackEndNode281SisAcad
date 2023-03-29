# Documentación Proyecto

```Bash
npx sequelize-cli model:generate --name Persona --attributes nombre:string,paterno:string,materno:string,fecha_nac:date,sexo:string

npx sequelize-cli model:generate --name Usuario --attributes nom_usuario:string,contrasenia:string,correo:string,foto:string,tipoFoto:string



```

## Relations 1:1

## Relations 1:N
Paciente -> Tiene <- Medico
       1             1 (1 Paciente tiene 1 Medico)
       N             1 (1 Medico tiene N Paciente)
Car:   N      :      1

Medico.hasMany(models.Paciente, {
       foreignKey: 'id_medico'
})
Paciente.belongsTo(models.Medico, {
       foreignKey: 'id'
});

## Relations N:M