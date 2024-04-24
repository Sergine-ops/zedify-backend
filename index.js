const express = require('express');
const mongoose = require('mongoose');
const { type } = require('os');
const config = require('config');

const songsRoute  =  require("./routes/songroute")
const artistRoute  =  require("./routes/artistroute")
const genreRoute  =  require("./routes/genreroute")
const userRoute = require("./routes/userroute")
const authRoute = require("./routes/authroute")
require('dotenv').config();

if(!process.env.PRIVATE_KEY){
  console.error('FATAL ERROR: myprivate key is not defined');
  process.exit(1);
}
const app = express();
app.use(express.json())

app.use("/", songsRoute)
app.use("/", genreRoute)
app.use("/", artistRoute)
app.use("/", userRoute)
app.use("/", authRoute)

mongoose.connect('mongodb://localhost/zedfiy')
  .then(() => console.log('Connected to MongoDB successfully'))
  .catch(err => console.error('Could not connect to MongoDB:', err.message));



app.listen(3000, () => {
  console.log("server started on port 3000")
})