const mongoose =require('mongoose');
const mongo_url="mongodb://localhost:27017/hotel";

mongoose.connect(mongo_url,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
const db =mongoose.connection
db.on('connected',()=>{
    console.log(" data base se connection stapith ho chuka hai")
})
db.on('disconnected',()=>{
    console.log("connection ki maiya chud gayi")
})
module.exports={
    db
}