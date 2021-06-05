//Importo el modelo del servidor
const ServidorModelo=require('./models/ServidorModelo.js')

//se trae el paquete de environment
require('dotenv').config()
 
//Instancio(saco una fotocopia de mi clase servidormodelo)
let servidor= new ServidorModelo();

//Levantando el servidor
servidor.despertarServidor();