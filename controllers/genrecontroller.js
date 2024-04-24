const { Song, Artist, Genre } = require('../models');

//crud for genre

const genreController = {
    getAllGenres: async (req, res) => {
        try {
            const genres = await Genre.find().sort('name');
            res.send(genres);
        }
        catch (error) {
            res.status(500).send({ error: error.message });
        }
    },
    getGenreById: async (req, res) => {
        try {
            const genre = await Genre.findById(req.params.id)
            if (!genre) return res.status(404).send('The genre with the given ID was not found.');
            res.send(genre);
        }
        catch (error) {
            res.status(500).send({ error: error.message });
        }

    },
    createGenre: async (req, res) => {
        try {
            let genre = new Genre({ name: req.body.name , description: req.body.description});
            genre = await Genre.save();
            res.send(genre);
        }
        catch
        (error) {
            res.status(500).send({ error: error.message });
        }

    },
    updateGenre: async (req, res) => {
        try {
            const genre = await Genre.findByIdAndUpdate(req.params.id, { name: req.body.name }, { new: true });

            if (!genre) return res.status(404).send('the genre with the given id was not found');

            res.send(genre);
        }
        catch (error) {
            res.status(500).send({ error: error.message });
        }
    },
    deleteGenre: async (req, res) => {
        try {

            const genre = Genre.findByIdAndRemove(req.params.id);

            if (!genre) return res.status(404).send('The genre with the given ID was not found.');
            res.send(genre)


        }
        catch(error){
            res.status(500).send({ error: error.message });
        }
        }
}


module.exports = genreController
