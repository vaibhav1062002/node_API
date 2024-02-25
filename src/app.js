// creating server using nodejs and express

const express =require('express');
const app= express();
               require("./db/conn");
const student=require('./moduls/students');
const studentRouter =require('./routers/student')

const  port = process.env.PORT || 800;

app.use(express.json());
//routing stp 3:--register a router-----
app.use(studentRouter);

// lestning server on por 8000
app.listen(port,()=>{
    console.log("erver is succesfull running on 8000");
})