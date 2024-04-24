const express = require('express');
const router = express.Router();
const { songController, artistController, genreController } = require('../controllers');


router.get('/singers', artistController.getAllArtists);
router.get('/singers/:id', artistController.getArtistById);
router.post('/singers', artistController.createArtist);
router.put('/singers/:id', artistController.updateArtist);
router.delete('/singers/:id', artistController.deleteArtist);


module.exports = router;