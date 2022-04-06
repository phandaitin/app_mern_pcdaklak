
const mongoose = require('mongoose');
const schema = new mongoose.Schema({
    name    :   {type: String ,  trim :true },    
    title   :   {type: String ,  trim :true },        
    image   :   String	
},{ timestamps: true} 
);    

module.exports = mongoose.model('slider', schema );  