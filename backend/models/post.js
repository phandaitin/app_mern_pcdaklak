const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
mongoose.plugin(slug);

const schema = new mongoose.Schema({
    name    :   {type: String ,  trim :true },
    slug    :   { type: String, slug: 'name', unique: true },
    title   :   {type: String ,  trim :true },    
    content :   {type: String ,  trim :true ,  required:[true,'Post must have content'] },
    thumb   :   String,
	desc  	:   String,
    status  :   {type: String , default: 'active'},        
    view    :   {type: Number , default : 1},
    category:   {type: String ,  trim :true },    
    author  : {
        type: mongoose.Schema.Types.ObjectId ,
        ref : 'user'  // quan hệ với collection user
    } 
},{ timestamps: true} 
);    

module.exports = mongoose.model('post', schema );  