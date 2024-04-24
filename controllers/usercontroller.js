const _ = require('lodash');
const Joi = require('joi');
const bcrypt = require('bcrypt');
const { Song, Artist, Genre, User } = require('../models');



const userController = {
    getAllUsers: async (req, res) => {
        try {
            const users = await User.find().sort('name');
            res.send(users);
        }
        catch (error) {
            res.status(500).send({ error: error.message });
        }
    },
    getUserById: async (req, res) => {
        try {
            const user = await User.findById(req.params.id)
            if (!user) return res.status(404).send('The user with the given ID was not found.');
            res.send(user);
        }
        catch (error) {
            res.status(500).send({ error: error.message });
        }

    },
    createUser: async (req, res) => {
        try {
         let user = await User.findOne({email:req.body.email});
         if(user) return res.status(400).send('User already registered');

         user = new User(_.pick(req.body, ['name','email','password']));
       
         const salt = await bcrypt.genSalt(10);
         user.password = await bcrypt.hash(user.password,salt);
         await user.save();

          
             
const token = jwt.sign({_id:user._id}, process.env.PRIVATE_KEY);

         res.header('x-auth-token',token ).send(_.pick(user, ['id','name','email']));

        }
        catch
        (error) {
            res.status(500).send({ error: error.message });
        }

    },
    updateUser: async (req, res) => {
        try {
            const user = await User.findByIdAndUpdate(req.params.id, { name: req.body.name }, { new: true });

            if (!user) return res.status(404).send('the user with the given id was not found');

            res.send(user);
        }
        catch (error) {
            res.status(500).send({ error: error.message });
        }
    }, 
    deleteUser: async (req, res) => {
        try {

            const user =  await User.findByIdAndRemove(req.params.id);

            if (!user) return res.status(404).send('The genre with the given ID was not found.');
            res.send(user)


        }
        catch(error){
            res.status(500).send({ error: error.message });
        }
        }
}
function validateUser(user){
    const schema = {
        name:Joi.string().min(5).max(50).required(),
        email:Joi.string().min(5).max(255).required().email(),
        password:Joi.string().min(5).max(255).required(),
    }
    return Joi.validate(user,schema);
}

module.exports = userController;
exports.validate = validateUser;
