const express =require('express');
const route=express.Router();
const Person =require('../models/person')

route.post('/person', async (req, res) => {


    try {
    const newPersonData = req.body;
    const newPerson = new Person(newPersonData);
    // Save the new person to the database using await
    const savedPerson = await newPerson.save();
    console.log('Saved person to database');
    res.status(201).json(savedPerson);
    }
     catch (error) {
    console.error('Error saving person:', error);
    res.status(500).json({ error: 'Internal server error' });
    }
 });
 route.get('/person', async (req, res) => {
 try {
 // Use the Mongoose model to fetch all persons from the  database
 const persons = await Person.find();
 // Send the list of persons as a JSON response
 res.json(persons);
 } catch (error) {
 console.error('Error fetching persons:', error);
 res.status(500).json({ error: 'Internal server error' });
 }
 });


 // parameterized api calls /person/:work
 route.get(('/person/:work'),async (req,res)=>{
    
    try{
    const work_type=req.params.work;
    const person_data =await Person.find({work:work_type});

    console.log("data bej chuka hai apun");
    res.status(201).json(person_data)
    }
    catch(error){
        console.log("kuch scene ho gela hai");
        res.status(404).json({error :" some error occured"})
    }
 })


 // updaing data using unique id provided by mongodb
 route.put('/person/:id', async (req,res)=>{
   try{
    const unique_id =req.params.id;
    const updated_data =req.body;
    const update_person =await Person.findByIdAndUpdate(unique_id,updated_data,{
        new:true,// use upaded document : true 
        runValidators:true
    })
    if(!update_person){
        // agar id hee nahi mili toh
        return res.status(404).json(" document not found ")
    }
    res.status(200).json(update_person);
   }
   catch(error){
    res.status(501).json({error:" some error occured while updating "})
   }
 })


 // deleting data 
 route.delete('/person/:id',async (req,res)=>{
    try{
    const unique_id= req.params.id;
    const delete_person_data =await Person.findByIdAndDelete(unique_id);
    if(!delete_person_data){
        return res.status(404).json({error:"data not found to delete "})
    }
    res.status(200).json(delete_person_data);
    }
    catch(error){
        res.status(500).json("kuch toh gadbad hai dobdi")
    }

 })
 module.exports=route;