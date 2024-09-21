const mongoose=require('mongoose');


const menuschema= new mongoose.Schema({
    name:{
        type:String,
        require: true,

    },
    price:{
        type:Number,
        default:100

    },
    ingredients:{
        type:[String],
        default :["aata ","dal","sabji"]
    }


})
const Menu= mongoose.model('Menu',menuschema);
module.exports=Menu