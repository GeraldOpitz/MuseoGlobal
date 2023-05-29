const mongoose = require('mongoose');

const artworkSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  creationDate: {
    type: Date,
    required: true
  },
  country: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  picture: {
    type: String,
    required: true
  }
});

const Artwork = mongoose.model('Artwork', artworkSchema);

module.exports = Artwork;
