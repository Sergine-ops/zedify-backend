const _ = require('lodash');
const jwt = require('jsonwebtoken');
const config = require('config');
const mongoose = require("mongoose");
const songController =  require("./songcontroller");
const genreController =  require("./genrecontroller");
const artistController =  require("./artistcontroller");
const userController = require("./usercontroller");
const authController = require("./authcontroller");


// mongoose.connect('mongodb://localhost/zedfiy')
//   .then(() => console.log('Connected to MongoDB successfully'))
//   .catch(err => console.error('Could not connect to MongoDB:', err.message));



// app.listen(3000, () => {
//   console.log("server started on port 3000")
// })

module.exports =  { artistController, songController, genreController, userController , authController}