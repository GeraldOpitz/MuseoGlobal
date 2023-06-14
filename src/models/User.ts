import { Document, model, Schema } from 'mongoose';

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  isAdmin: {
     type: Boolean,
     required: true,
  }
});

export interface IUser extends Document {
    username: string;
    password: string;
    isAdmin: Boolean;
  }

const User = model<IUser>('User', userSchema);

export default User;
