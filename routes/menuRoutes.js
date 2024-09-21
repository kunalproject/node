const express = require ('express');
const route =express.Router();
const Menu =require('../models/menu');



route.get('/menu',async (req,res)=>{
    try{
    const menu_data = await Menu.find();
    console.log("menu ka data bej diya ")
    res.status(201).json(menu_data);
    }
    catch(error){
        res.status(501).json({error:" kuch eror agaya ji"});
    }

})
route.post('/menu',async (req,res)=>{
    try{
        const menu_item_data =req.body;
        const new_menu= new Menu(menu_item_data);
        const menu_saved =await new_menu.save();

        res.status(201).json(menu_saved);
    }
    catch(error){
        res.status(501).json({error:" kuch toh gadbad hai daya "});
    }

})
route.get('/menu/:dish_name',async (req,res)=>{
    try{
        const dish_type= req.params.dish_name;
        const menu_data = await Menu.find({name:dish_type});
        console.log(" menu data bej diya ")
        res.status(201).json(menu_data)

    }
    catch(error){
        console.log(" some error occued in storing menu data ");
        res.send(404).json({error:" nahi hua "})
    }
})
module.exports=route

// doing some thing random