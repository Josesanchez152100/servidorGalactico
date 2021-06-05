//Traigo de mongoose el modelo y el schema de datos
const{model, Schema}=require('mongoose');

//Creo el esqueleto de datos que va a tener cada documento(bolsa) de mi colección
const ReservaEsqueleto=Schema({

    nombreCliente:{
        type:String,
        required:true
    },
    apellidoCliente:{
        type:String,
        required:true
    },
    telefonoCliente:{
        type:Number,
        required:true
    },
    fechaInicioReserva:{
        type:String,
        required:true
    },
    fechaFinalReserva:{
        type:String,
        required:true
    },
    numeroDePersonas:{
        type:Number,
        required:true
    },
    tipoPaquete:{
        type:String,
        required:true
    }


});

module.exports=model('Reserva',ReservaEsqueleto);