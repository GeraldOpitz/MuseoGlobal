const express = require('express');
const conexion = require('./config/config');
const cors = require('cors');

//Llamado a la variable de entorno
require('dotenv').config();

const artworkRoutes = require('./routes/artworkRoutes');
const path = require('path');

const app = express();
app.use(express.json());
app.use(cors());

//Llamado a la conexión con la base de datos
conexion();
const port = 3001;

//Manejo de rutas
app.use('/api/artworks/', artworkRoutes);

app.use(express.static(path.join(__dirname, '..', 'build')));

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto: ${port}`);
});
