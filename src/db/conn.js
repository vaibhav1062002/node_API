const mongoose =require('mongoose');

mongoose.set('strictQuery', false);
mongoose.set('strictQuery', true);

//mongoose.connect("mongodb://127.0.0.1:27017/students-api",
//{useNewUrlParser:true,
    //useUnifiedTopology:true
//}).then(()=>{
   // console.log("congratulation connection successfull");
//}).catch((err)=>{
   // console.log("ooo somthing wrong here :"+err);
//})


//connect using async await
 
  const conectDB = async ()=>{
    try{
        await mongoose.connect("mongodb://127.0.0.1:27017/students-api",
        {useNewUrlParser:true, useUnifiedTopology:true} )
        console.log("connection successfull...!");
       }
       catch(err){console.log(err);}
     }
     
conectDB();