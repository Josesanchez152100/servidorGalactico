//Importar de express las variables request y response
const { request,response }=require('express');

//Importar el modelo de datos de la API
const ReservaModelo=require('../models/ReservaModelo.js')

//Se crean funciones para cada uno de los servicios que prestará la api(El menú del restaurante)

async function consultarReserva(peticion=request,respuesta=response){
    
    let id=peticion.params.id;
    let datosconsultados=await ReservaModelo.findById(id);
    
    respuesta.json({
        estado:true,
        mensaje: datosconsultados
      });
}

async function crearReserva(peticion=request,respuesta=response){

    let datosReserva=peticion.body;

    let reserva=new ReservaModelo(datosReserva);
    await reserva.save();

    respuesta.json({
        estado:true,
        mensaje:'Reserva agregada con exito',
        datos:reserva
      });
}

async function editarReserva(peticion=request,respuesta=response){

    let id=peticion.params.id;
    let datosReserva=peticion.body;

    await ReservaModelo.findByIdAndUpdate(id,datosReserva);

    respuesta.json({
        estado:true,
        mensaje:'Reserva actualizada con exito'
      });
}

async function eliminarReserva(peticion=request,respuesta=response){

    let id=peticion.params.id;
    await ReservaModelo.findByIdAndDelete(id);

    respuesta.json({
        estado:true,
        mensaje:'Reserva eliminada con exito'
      });
}

//Exporto todas las funciones hacia el archivo de rutas
module.exports={
    consultarReserva,
    crearReserva,
    editarReserva,
    eliminarReserva
}