const mongoose = require("mongoose")

const songSchema = new mongoose.Schema({
 
    title:{
        type:String,
        required:true,
        minlength:5,
        maxlength:50,
        trim:true 
    },
    artist:{
        type:String,
        required:true
    },
    genre:{
        type: String,
        ref:'Genre',
        required:true
    },
    duration:{
        type:Number,
        required:true
    },
    audiourl:{
        type:String,
        required:true
    }
  });



  const Song = mongoose.model('Song', songSchema);

  module.exports =  Song