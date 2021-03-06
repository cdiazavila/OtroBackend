const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const reservaLocalSchema = new Schema({
    nombre: {
        type: String,
        trim: true,
    },
   
    fecha: {
        type: String,
        trim: true
    },
    telefono: {
        type: String,
        trim: true
    },
    hora: {
        type: String,
        trim: true
    },
     local: {
        type: String,
        trim: true
    }
});

module.exports  = mongoose.model('reservasLocal', reservaLocalSchema);