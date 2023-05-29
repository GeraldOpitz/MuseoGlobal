const mongoose = require('mongoose');

const artworkSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true
  },
  autor: {
    type: String,
    required: true
  },
  fechaCreacion: {
    type: Date,
    required: true
  },
  paisProcedencia: {
    type: String,
    required: true
  },
  categoria: {
    type: String,
    required: true
  },
  descripcion: {
    type: String,
    required: true
  },
  foto: {
    type: String,
    required: true
  }
});

const Artwork = mongoose.model('Artwork', artworkSchema);

module.exports = Artwork;
