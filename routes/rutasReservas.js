//Traigo el metodo router de express para personalizar mis rutas
const { Router }= require('express');

//Importar(traer) los controladores
const {consultarReserva}=require('../controllers/controladorReserva.js');
const {crearReserva}=require('../controllers/controladorReserva.js');
const {editarReserva}=require('../controllers/controladorReserva.js');
const {eliminarReserva}=require('../controllers/controladorReserva.js');

//Importar las validaciones
const {validarPeticion}=require('../validations/validaciones.js');

//Importar el metodo check del express validator
const {check}=require('express-validator');

//Crear la lista de validaciones (arreglo)
let validaciones=Array(
    check('nombreCliente',"este campo es obligatorio").not().isEmpty(),
    check('apellidoCliente',"este campo es obligatorio").not().isEmpty(),
    check('telefonoCliente',"este campo es obligatorio").not().isEmpty(),
    check('fechaInicioReserva',"este campo es obligatorio").not().isEmpty(),
    check('fechaFinalReserva',"este campo es obligatorio").not().isEmpty(),
    check('numeroDePersonas',"este campo es obligatorio").not().isEmpty(),
    check('tipoPaquete',"este campo es obligatorio").not().isEmpty(),
    validarPeticion
);

//Personalizo mis rutas:
const rutas=Router();

//Listado de rutas
rutas.get('/reserva/:id',consultarReserva);
rutas.post('/reserva/nueva',validaciones,crearReserva);
rutas.put('/reserva/editar/:id',editarReserva);
rutas.delete('/reserva/eliminar/:id',eliminarReserva);

//Exporto las rutas
module.exports=rutas;
