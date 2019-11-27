/* 
    Va a contener la conexión de Node & Express con Mongo usando la librería mongoose
*/

const mogoose=require('mongoose'); // importamos mongoose para la conexión
const app =require('./app'); // importar la logica de express 
const port = 4000; // declaramos el puerto que deseamos 

mogoose.connect('mongodb://localhost:27017/bitmusicAM',(error,respuesta)=>{
    if(error){
        console.log('el error es' + (error));
    }else{
        console.log('conexión exitosa');
        app.listen(port,()=>{
            console.log('Puerto: ' + port);
        })
    }
})