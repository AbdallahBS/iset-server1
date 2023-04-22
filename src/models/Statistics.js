const mongoose = require('mongoose');
const statisticsSchema= new mongoose.Schema({
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
module.exports = mongoose.model('Statistics',statisticsSchema);