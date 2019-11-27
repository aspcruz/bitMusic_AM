const Dato cullo valor nunca cambia = require('../modelo/usuario');

function nombredeFuncion(req, res){ //req=peticion y res=respuesta
    //SEGUN EL TIPO DE FUNCION VA REQUIERE PARAMETROS QUE SE DEFINEN DENTRO DE LOS PARENTECIS QUE
    //TAN BN DEPENDEN DEL TIPO DE FUNCION 
    // instanciar -usar el objeto modelo usuario 
    var funcion = new llamamoselmodeloquenecesitalafuncion(); //Y ESTO SERIA UN OBJETO NO LITERAL
    //guardar el cuerpo de la peticion en una variable
    //para mejorar acceso a los datos que el usuario esta enviando
    
    var elnombrequedefinamosparalapeticionOreq = req.body;

    //para mayor organización de código vamos a guardar cada propiedad 
    //del body de la petición en la variable usuario
    usuario.nombre= parametros.nombre;
    usuario.apellido= parametros.apellido;
    usuario.correo=parametros.correo;
    usuario.contrasena=parametros.contrasena;
    usuario.rol= 'usuario';
    usuario.imagen=null;

    usuario.save((err, usuarioCreado)=>{
        if (err){
            //estado de la respuesta del servidor
            // 500-> errores propios del servidor
            res.status(500).send({
                message:"Error en el servidor"
            });}
        else {
            if(!usuarioCreado){
                //404 -> Página no encontrada o no existe
                res.status(404).send({
                    message:"No se pudo crear el usuario"
                });
            } else {
                    //200 -> OK
                    res.status(200).send({
                        usuario: usuarioCreado
                    });
                }
            }
    });
}

module.exports = {
    crearUsuario  
};


//MVW -> Modelo Vista Cualquiera o Modelo Vista Rutas / Model View Whatever se usa  
//para proyectos no tan robustos! 
//Modelo: BD
//Ruta con el control 
//Vista


//MVC -> Modelo Vista Controlador / Se usa para proyectos robustos
//Modelo Son los datos que van a mi BD y creo por medio de colecciones)
//Vista FROND: LO QUE VE EL USUARIO
//Controlador Es quien ejecuta funciones entre las BD y la vista y se hace por medio de Funciones
//Ruta Le dice al CONTROL que función ejecutar según lo que valide en las BD 
//independiente del MODELO que use para validar los datos 