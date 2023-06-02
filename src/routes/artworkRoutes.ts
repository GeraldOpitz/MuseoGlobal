import { Router } from 'express';
import { createArtwork, getAllArtworks, getArtwork, updateArtwork, deleteArtwork } from "../controllers/artworkController";

const route: Router = Router();

route.post('/create', createArtwork);
route.get('/', getAllArtworks);
route.get('/:id', getArtwork);
route.put('/:id', updateArtwork);
route.delete('/:id', deleteArtwork);

export default route;
