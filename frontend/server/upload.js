const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();
const upload = multer({ dest: 'public/images' });

// Ruta para gestionar la subida de archivos
app.post('/upload', upload.single('file'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No se ha seleccionado ningún archivo' });
  }

  // Obtener información del archivo subido
  const { originalname, filename } = req.file;
  const filePath = path.join('images', filename);

  // Realizar acciones adicionales, como guardar información en la base de datos

  return res.json({ originalname, filename, filePath });
});

module.exports = app;
