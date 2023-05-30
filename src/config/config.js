const mongoose = require('mongoose');

const connection = async() => {
    try {
        const DB_URI = process.env.DB_URI;
        if(!DB_URI) return "No se encontro variable de conexión con mongo";

        await mongoose.connect(DB_URI);

        console.log('Conexión con MongoDB llevada cabo con exito');
    } catch (error) {
        console.error('Conexión con MongoDB fallida', error);
    }
}
module.exports = connection;