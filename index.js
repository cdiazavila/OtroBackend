const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const bodyParser = require('body-parser');
const cors = require('cors');

 // crear el servidor
const app = express();

// Habilitar Cors
const whitelist = ['http://localhost:3000'];
const corsOptions = {
    origin: (origin, callback) =>  {
        // console.log(origin);
        const existe = whitelist.some( dominio => dominio === origin);
        if ( existe ) {
            callback(null, true)
        } else {
            callback(new Error('No Permitido por CORS'))
        }
    }
}
// habilitar cors
//  app.use( cors(corsOptions) );
 app.use(cors());
// conectar con mongo
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/veterinaria", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(
    () => {
      console.log("Database connectada");
    },
    (error) => {
      console.log("Database could't be connected to: " + error);
    }
  );

// habilitar el body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// habilitar routing
 app.use('/', routes());
    
    // puerto y arranco el servidor 
    app.listen(4000, () => {
        console.log('Servidor funcionando')
    })