const { Song: Artist, Genre} = require('../models');

//crud for genre

const artistController = {
    getAllArtists: async (req, res) => {
        try {
            const artists = await Artist.find().sort('name');
            res.send(artists);
        }
        catch (error) {
            res.status(500).send({ error: error.message });
        }
    },
    getArtistById: async (req, res) => {
        try {
            const artist = await Artist.findById(req.params.id)
            if (!artist) return res.status(404).send('The artist with the given ID was not found.');
            res.send(artist);
        }
        catch (error) {
            res.status(500).send({ error: error.message });
        }

    },
    createArtist: async (req, res) => {
        try {
            let artist = new Artist({ name: req.body.name , country:req.body.country });
            artist = await artist.save();
            res.send(artist);
        }
        catch
        (error) {
            res.status(500).send({ error: error.message });
        }

    },
    updateArtist: async (req, res) => {
        try {
            const artist = await Artist.findByIdAndUpdate(req.params.id, { name: req.body.name }, { new: true });

            if (!artist) return res.status(404).send('the artist with the given id was not found');

            res.send(artist);
        }
        catch (error) {
            res.status(500).send({ error: error.message });
        }
    },
    deleteArtist: async (req, res) => {
        try {

            const artist = Artist.findByIdAndRemove(req.params.id);

            if (!artist) return res.status(404).send('The artist with the given ID was not found.');
            res.send(artist)


        }
        catch(error){
            res.status(500).send({ error: error.message });
        }
        }
}


module.exports = artistController
