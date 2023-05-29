const {Router} = require('express') ;
const { createArtwork, getAllArtworks, getArtwork, updateArtwork, deleteArtwork } = require("../controllers/artworkController");


const route = Router();

route.post('/create', createArtwork);
route.get('/', getAllArtworks);
route.get('/:id', getArtwork);
route.put('/:id', updateArtwork);
route.delete('/:id', deleteArtwork);

module.exports = route;