const mongoose = require('mongoose');
const validator = require('validator');

// creating a SCHEMA
const studentScema =new mongoose.Schema({
    name:{
        type:String,
      require:true,
      minlength:3,
    },
    email:{
        type:String,
        require:true,
        unique: true,
        validate(value){
            if(!validator.isEmail == (value)){
                throw new Error("invalid Email");
            }
        }
    },
    phone:
    {
        type: Number,
        min: [6, 'nin 6 no required'],
        max: 12,
        unique:true,
        require:true
    },
    address:{
    type:String,
    require:true
    }
})

//creating a  collection using model

const Student = new mongoose.model('Student',studentScema);
module.exports=Student;