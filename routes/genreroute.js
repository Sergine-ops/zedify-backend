const express = require('express');
const router = express.Router();
const { songController, singerController, genreController } = require('../controllers');


router.get('/genres', genreController.getAllGenres);
router.get('/genres/:id', genreController.getGenreById);
router.post('/genres', genreController.createGenre);
router.put('/genres/:id', genreController.updateGenre);
router.delete('/genres/:id', genreController.deleteGenre);

module.exports = router;

//sgqKDg91SmTFYFrn