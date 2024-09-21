


const mongoose = require('mongoose');

const personschema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    age:{
        type:Number,
        default:0

    },
    work:{
        required: true,
        type: String,
        enum:['student','professor','admin','staff'],
        required:true
    },
    email:{
        required: true,
        type:String,
        unique:true
    }
});
const Person =mongoose.model('Person',personschema);
module.exports=Person;