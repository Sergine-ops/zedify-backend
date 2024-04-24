const { Song, Artist, Genre } = require('../models');



const songController = {
    getAllSongs: async (req, res) => {
        try {
            const songs = await Song.find().sort('name');
            res.send(songs);
        }
        catch (error) {
            res.status(500).send({ error: error.message });
        }
    },
    getSongById: async (req, res) => {
        try {
            const song = await Song.findById(req.params.id)
            if (!song) return res.status(404).send('The song with the given ID was not found.');
            res.send(song);
        }
        catch (error) {
            
            res.status(500).send({ error: error.message });
        }

    },
    createSong: async (req, res) => {
        try {
            let song = new Song({
                title: req.body.title,
                artist: req.body.artist,
                genre: req.body.genre,
                duration: req.body.duration,
                audiourl: req.body.audiourl
            });
            song = await song.save();
            res.send(song);
        } catch (error) {
            console.log(error);
            res.status(500).send({ success: false, message: "Internal server error" });
        }
    }
    
   ,
    updateSong: async (req, res) => {
        try {
            const song = await Song.findByIdAndUpdate(req.params.id, { title: req.body.title}, { new: true });

            if (!song) return res.status(404).send('the song with the given id was not found');

            res.send(song);
        }
        catch (error) {
            res.status(500).send({ error: error.message });
        }
    },
    deleteSong: async (req, res) => {
        try {

            const song = Song.findByIdAndRemove(req.params.id);

            if (!song) return res.status(404).send('The song with the given ID was not found.');
            res.send(song)


        }
        catch(error){
            res.status(500).send({ error: error.message });
        }
        }
}


module.exports = songController
