const express = require("express")
//routing stp 1: cerating a new router
const router =new express.Router()
const student = require('../moduls/students')

module.exports = router;

// routing stp 2:-------defining a router-----------------------

//creat a new student using promises
//app.post("/student",(req,res)=>{
    //console.log(req.body);
   // const user = new student(req.body)
   // user.save().then(()=>{
//res.status(201).send(user);
//}).catch((err)=>{
//res.status(400).send(err);
//})
  //})

//creat new data new student using async wait

  router.post("/student",async(req,res)=>{
    try{   console.log(req.body);
           const user  = new  student(req.body)
          const creatUser = await user.save();
          res.status(201).send(creatUser);
        }
    catch(err){res.status(404).send(err);}
})

//read data using get method
router.get("/student",async(req,res)=>{
    try{
     const studentsData= await student.find()
     res.send(studentsData);
    }
    catch(err) { res.send(err) }
 })

 //read individual data using name
 router.get("/student/e",async(req,res)=>{
  try {
    const  email = req.params.e;
    const dataByName=await  student.find({email:{$eq:Name}})
    console.log(dataByName);
    if(!dataByName){ req.status().send(); }
    else{res.send(dataByName);}
  }
  catch (error) {res.send(err)}
})

// update using put method 
router.patch("/student/:id",async(req,res)=>{
  try {
    const _id = req.params.id;
    const updateData= await student.findByIdAndUpdate(_id,req.body,{new:true});
    console.log(updateData);
    res.status(200).send(updateData)
  } catch (error){res.status(400).send(error)}
})


