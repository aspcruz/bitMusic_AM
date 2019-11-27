/* Funcion para guardar el usuario */ 

// importamos el modelo de usuario para interactuar con el 
const Usuario = require('../modelo/usuario');

function crearUsuario(req, res){ //req=peticion y res=respuesta
    // instanciar -usar el objeto modelo usuario 
    var usuario = new Usuario();
    //guardar el cuerpo de la peticion en una variable
    //para mejorar acceso a los datos que el usuario esta enviando
    
    var parametros = req.body;

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

function login (req, res){
    var parametros=req.body
    var correoUsuario= parametros.correo;
    var contraUsuario = parametros.contrasena;

    //buscamos al usuario a traves del correo. Usamos tolowercase() para evitar problemas de datos
    usuario.findOne({correo: correoUsuario.tolowerCase()}, (err,usuariologueado)=>{
        if(err){
            res.status(500).send({
                message:"error en el servidor!"
            });
        } else {
            if(!usuarioLogueado){
                res.status(404).send({
                message: "No has podido iniciar sesión. Verifica que tus datos sean correctos"
            });
            }else{
                if(usuariologueado.contrasena != contraUsuario){
                    res.status(404).send({
                        message:"contraseña incorrecta"
                    });
            }else{
                res.status(200).send({
                    usuario:usuariologueado
                 });
                }
            }
        }
    });
}

function actualizarUsuario(req, res){
    var usuarioId = req.params.id;
    var datosUsuarioActualizar= req.body;

    //db.coleccion.finByAndUpdate('aquien quiero actualizar', 'que campos voy actualizar') 
    Usuario.findByIdAndUpdate(usuarioId, datosUsuarioActualizar, (err, usuarioActualizado)=>{
        if(err){
            res.status(500).send({
                message: "error del servidor"
            });
        }else{
            if(!usuarioActualizado){
            res.status(400).send({
                message: "no se puede actualizar"
            });
        }else{
            res.status(200).send({
                message: "datos actualizados"
            });
        }

        }
    });
}

module.exports = {
    crearUsuario,
    login,
    actualizarUsuario
};