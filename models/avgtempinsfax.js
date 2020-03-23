const mongoose = require('mongoose');


const avgtempinsfaxSchema = mongoose.Schema({
    Average_temperature_June:{type: Number, required:true},
   });

module.exports = mongoose.model('avgtempinsfax',avgtempinsfaxSchema);
