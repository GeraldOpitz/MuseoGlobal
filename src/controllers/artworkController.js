const Artwork = require("../models/Artwork")

// Crear obra 
const createArtwork = async (req, res) => {
    try {
        console.log(req.body);
        const artwork = await Artwork.create(req.body);
        await artwork.save();
        res.json(artwork);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Error al crear la obra" });
    }
}

// Traer todas las obras
const getAllArtworks = async (req, res) => {
    try {
        const artworks = await Artwork.find();
        res.json(artworks);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Error al obtener las obras" });
    }
};

// Traer obra de arte especifica
const getArtwork = async (req, res) => {
    const artworkId = req.params.id;
    try {
        const artwork = await Artwork.findById(artworkId);
        if (artwork) {
            res.json(artwork);
        } else {
            res.status(404).json({ error: "Obra no encontrada" });
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Error al obtener la obra " });
    }
};

// Actualizar obra
const updateArtwork = async (req, res) => {
    const artworkId = req.params.id;
    try {
        const artwork = await Artwork.findByIdAndUpdate(artworkId, req.body, {
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
const deleteArtwork = async (req, res) => {
    const artworkId = req.params.id;
    try {
        const artwork = await Artwork.findByIdAndDelete(artworkId);
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

module.exports = { createArtwork, getAllArtworks, getArtwork, updateArtwork, deleteArtwork }