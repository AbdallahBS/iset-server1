const mongoose = require('mongoose');
const mathSchema= new mongoose.Schema({
    name : {
        type :String,
        required : true
    },
    introduction :{ type :String},
   
    bg : [
        { img :  {type : String} }
    ],
    parentId: {
        type:String
    }
    

},{timestamps : true});
module.exports = mongoose.model('Math',mathSchema);