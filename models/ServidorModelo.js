//se trae el paquete express
const express = require('express');

//Se trae cors (paquete que habilita accesos a mi API)
const cors = require('cors');

//Se traen las rutas
const rutas=require('../routes/rutasReservas.js')

//Se trae la coneccion a BD
const { conectarBD }=require('../database/conexion.js');

class ServidorModelo{

    constructor(){

        //Atributo global para configurar el servidor
        this.app=express();
        this.despertarBaseDatos();
        this.crearMiddlewares();
        this.llamarRutasAPI();

    }

    //Metodos (Que acciones hace mi servidor)
    despertarServidor(){

        //levantamiento del servidor(abrimos el restaurante)
        this.app.listen(process.env.PORT,function(){
        console.log(`estoy conectado al puerto ${process.env.PORT}`);
        });

    }

    llamarRutasAPI(){
       this.app.use('/',rutas);
    }

    despertarBaseDatos(){
        conectarBD();
    }

    crearMiddlewares(){

        this.app.use(cors()); //Accesos a Heroku
        this.app.use(express.json()); //ayudante que coloca todo en JSON
        this.app.use(express.urlencoded({extended:true})); //ayudante que recibe los datos

    }

}

module.exports=ServidorModelo;