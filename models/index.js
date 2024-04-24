
const mongoose = require('mongoose');
const Song =  require("./song");
const Artist =  require("./artist");
const Genre =  require("./genre");
const User = require("./user");
const Auth = require("./auth");


// mongoose.connect('mongodb://localhost/zedfiy')
//   .then(() => console.log('Connected to MongoDB successfully'))
//   .catch(err => console.error('Could not connect to MongoDB:', err.message));



// app.listen(3000, () => {
//   console.log("server started on port 3000")
// })

module.exports =  {Artist, Genre, Song, User , Auth }