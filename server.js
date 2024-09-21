const express=require('express')
const app=express();
const database= require('./db.js');
 const bodyParser = require('body-parser');
 app.use(bodyParser.json());
const personRoute= require('./routes/personRotes.js')
const menuRoute=require('./routes/menuRoutes.js')
app.use('/',personRoute);
app.use('/',menuRoute);
app.get('/',(req,res)=>{
    res.send(" apka hardik suhagat hai hamare page pe")
})
app.listen(3000,()=>{
    console.log("server initiated")
});