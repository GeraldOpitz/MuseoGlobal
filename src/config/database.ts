import mongoose from 'mongoose';

const connection = async () => {
  try {
    const DB_URI = process.env.DB_URI;
    const DB_NAME = process.env.DB_NAME;
    if (!DB_URI) return "No se encontró la variable de conexión con MongoDB";

    const db = await mongoose.connect(`${DB_URI}`);

    console.log('database is connected to:', db.connection.name);
  } catch (error) {
    console.error('Conexión con MongoDB fallida', error);
  }
};

export default connection;
