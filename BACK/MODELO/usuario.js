const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var UsuarioSchema = new Schema({
    nombre: String, 
    apellido: String,
    correo: String,
    contrasena: String, 
    rol: String, // USUARIO O ADMINISTRADOR 
    imagen: String // LO QUE GUARDAMOS ES LA CADE DE TEXTO DE LA RUTA DE LA IMAGEN 
});

// module.exports = mongoose.model('nombre de la coleccion de la BD',
// y Schema o sea la plantilla que se creo para esa colección que va dentro de un Modelo);  
module.exports = mongoose.model('Usuario', UsuarioSchema);


