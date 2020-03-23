const mongoose = require('mongoose');


const currenttempincovilhaSchema = mongoose.Schema({
    temperature:{type: Number, required:true},
    timestamp:{type: String, required:true}
    
});

module.exports = mongoose.model('currenttempincovilha',currenttempincovilhaSchema);
