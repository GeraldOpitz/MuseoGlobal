import { RequestHandler } from 'express';
import Artwork, { IArtwork } from '../models/Artwork';


export const createArtwork: RequestHandler = async (req, res) => {
  try {
    console.log(req.body);

    // Obtener la URL de la imagen cargada en Cloudinary
    const imageUrl = req.body.imageUrl;

    const artwork: IArtwork = await Artwork.create({ ...req.body, imageUrl });
    await artwork.save();
    res.json(artwork);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Error al crear la obra' });
  }
};

// Traer todas las obras
export const getAllArtworks: RequestHandler = async (req, res) => {
  try {
    const artworks: IArtwork[] = await Artwork.find();
    res.json(artworks);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Error al obtener las obras" });
  }
};

// Traer obra de arte específica
export const getArtwork: RequestHandler = async (req, res) => {
  const artworkId = req.params.id;
  try {
    const artwork: IArtwork | null = await Artwork.findById(artworkId);
    if (artwork) {
      res.json(artwork);
    } else {
      res.status(404).json({ error: "Obra no encontrada" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Error al obtener la obra" });
  }
};

// Actualizar obra
export const updateArtwork: RequestHandler = async (req, res) => {
  const artworkId = req.params.id;
  try {
    const artwork: IArtwork | null = await Artwork.findByIdAndUpdate(artworkId, req.body, {
      new: true,
    });
    if (artwork) {
      res.json(artwork);
    } else {
      res.status(404).json({ error: "Obra no encontrada" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Error al actualizar la obra" });
  }
};

// Borrar obra
export const deleteArtwork: RequestHandler = async (req, res) => {
  const artworkId = req.params.id;
  try {
    const artwork: IArtwork | null = await Artwork.findByIdAndDelete(artworkId);
    if (artwork) {
      res.json({ message: "Obra eliminada correctamente" });
    } else {
      res.status(404).json({ error: "Obra no encontrada" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Error al eliminar la obra" });
  }
};
