const express=require('express')
const app=express();
const database= require('./db.js');
 const bodyParser = require('body-parser');
 app.use(bodyParser.json());
const personRoute= require('./routes/personRotes.js')
const menuRoute=require('./routes/menuRoutes.js')

 require('dotenv').config();

app.use('/',personRoute);
app.use('/',menuRoute);
app.get('/',(req,res)=>{
    res.send(" apka hardik suhagat hai hamare page pe")
})


const port = process.env.PORT || 3000; // Use 3000 as a default if PORT is not defined
console.log(" port is ",port)
app.listen(port,()=>{
    console.log("server initiated")
});