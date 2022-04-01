
const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
mongoose.plugin(slug);

const schema = new mongoose.Schema({
    name    :   {type: String ,  trim :true , unique: true },
    slug    :   { type: String, slug: 'name', unique: true },
    status  :   {type: String , default: 'active'}    ,
    check  :    {type: Boolean , default: false }    
},{ timestamps: true} 
);    

module.exports = mongoose.model('category', schema );  