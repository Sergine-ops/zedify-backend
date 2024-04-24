const _ = require('lodash');
const config = require('config');
const Joi = require('joi');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
require('dotenv').config();

const { Song, Artist, Genre, User , Auth } = require('../models');
// const { authController } = require('.');

//crud for genre

const authController = {

    createUser: async (req, res) => {
        
        const {error} = validate(req.body);
        if(error) return res.status(400).send(error.details[0].message);
     let user = await User.findOne({email:req.body.email});
     if(!user) return res.status(400).send('invalid email or password.');

     const validpassword = await bcrypt.compare(req.body.password, user.password);
     if(!validpassword) return res.status(400).send('invalid email or password.');

     
const token = jwt.sign({_id:user._id}, process.env.PRIVATE_KEY);

     res.send(token);


    }
    
   



}
    
function validate(req){
    const schema = Joi.object( {
       
        email:Joi.string().min(5).max(255).required().email(),
        password:Joi.string().min(5).max(255).required(),
    });
    return schema.validate(req);
}

  




module.exports = authController
