/*
    Vamos a crear el MANEJADOR DE RUTAS de express para nuestra aplicación (API)
*/

// INVESTIGAR QUE SON LAS RUTAS Y MANEJADORES 
//NO ENTIENDO BN QUE HACEN LAS RUTAS 

const express = require('express');
const UsuarioControl = require('../CONTROL/usuarioControl');
 
//Por convención se define siempre la variable api en la que cargamos el manejador de rutas de Express
var api = express.Router(); // cargamos el manejador de rutas de Express 

//api.post('una ruta, la const  en la que requerimos el archivo .js de la funcion
//y se llaman varias por medio de . FuncionUno.FuncioDos');

api.post('/registro', UsuarioControl.crearUsuario);
//En el caso del login, en una API es un proceso especial y que no guarda los datos BD
// sino que realiaza un paeno o scan del modelo para la coincidencia 
api.post('/loginUsuario', UsuarioControl.login);

//debo cambiar el metodo por que vamos a ACTUALIZAR un dato y se hace con (PUT) 
//Los metodos PUT y DELETE necesitan tener especificados el id en la ruta 
api.put('/actualizarDatosUsuarios/id', UsuarioControl.actualizarUsuario);

module.exports = api;