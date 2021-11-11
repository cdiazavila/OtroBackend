const Reservalocal= require('../models/resrvaLocal');

// metodo agg una nueva reserva para los locales 

exports.nuevaReservaLocal = async (req, res, next )  => {


    console.log(req.body)
     const reservalocal = new Reservalocal(req.body);
    
     try {
         await reservalocal.save();
         res.json({ mensaje : 'La reserva se agg correctamente '}); 
     } catch (error) {
         console.log(error);
         next();
     }
 }


 // obtener todas las reservas 
 
    exports.obtenerReservaLocal= async(req,res,next)=>{
        try {
        
           const reserva = await Reservalocal.find({})
           res.json(reserva);
           
        } catch (error) {
          console.log(error);
          next(); 
        }
        }