const Joi = require("joi");
const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength:5,
        maxlength:50,
    },
    email:{
        type:String,
        required:true,
        minlength:5,
        maxlength:255,
        unique:true
    },
    password:{
        type:String,
        required:true,
        minlength:5,
        maxlength:1024,
        
    }
});

    function validateUser(){
        const schema = {
            name:Joi.string().min(5).max(50).required(),
            email:Joi.string().min(5).max(255).required().email(),
            password:Joi.string().min(5).max(255).required(),
        };
        return Joi.validate(user, schema);
    }

    const User = mongoose.model('User', userSchema);

    exports.userSchema = userSchema;
    exports.User = User;
    exports.validate = validateUser;

   module.exports = User



 