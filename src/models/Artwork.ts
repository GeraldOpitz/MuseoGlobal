import { Document, model, Schema } from 'mongoose';

const artworkSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  creationDate: {
    type: Date,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
});

export interface IArtwork extends Document {
  name: string;
  author: string;
  creationDate: Date;
  country: string;
  category: string;
  description: string;
  imageUrl: string;
}

const Artwork = model<IArtwork>('Artwork', artworkSchema);

export default Artwork;
