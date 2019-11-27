/*  
    va a contener toda la logica de express: Declaración de rutas, uso de la libreía body parser 
    Permisos de acceso a cualquier cliente (Permisos a Angular)
*/
 
const express = require('express');// Importamos Express
const bodyParser = require('body-parser'); //Permite analizar datos de la URL 
const app= express(); // Aplication Express 

//Configurar las rutas de acceso acada función de la aplicación 
const UsuarioRutas= require('./RUTAS/usuarioRutas')

// Analizar los datos  que se estan enviando por la URL con body- parser
app.use(bodyParser.json());
// Configurar permisos de aceso a cualquier cliente 

// Consumo de las rutas
app.use('/api', UsuarioRutas)
//aca estamos usando todas las rutas del usuario que activan las funciones 
//api/resgistro

module.exports= app; // Exportamos todo el archivo app