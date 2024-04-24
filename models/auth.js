const Joi = require("joi");
const mongoose = require("mongoose");
const {User}= require('../models/user');

const authSchema = new mongoose.Schema({
  
    email:{
        type:String,
        
    },
    password:{
        type:String,
      
        
    }
});
function validate(req){
    const schema = {
       
        email:Joi.string().min(5).max(255).required().email(),
        password:Joi.string().min(5).max(255).required(),
    }
    return Joi.validate(req,schema);
}

    const Auth = mongoose.model('Auth', authSchema);

    exports.authSchema = authSchema;
    exports.Auth = Auth;
    exports.validate = validate;

   module.exports = Auth



 