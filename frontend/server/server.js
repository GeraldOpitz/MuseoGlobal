const express = require('express');
const path = require('path');
const axios = require('axios');

const app = express();
const port = 3001;

// Middleware para servir archivos estáticos
app.use(express.static(path.join(__dirname, '..', 'build')));

// Ruta para servir el archivo JavaScript principal
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'build', 'index.html'));
});

app.use(express.json());

// Ruta para obtener todas las obras
app.get('/obras', (req, res) => {
  axios.get('http://localhost:8080/api/obras')
    .then(response => {
      res.json(response.data);
    })
    .catch(error => {
      console.error(error);
      res.status(500).json({ error: 'Error al obtener las obras' });
    });
});

// Ruta para obtener una obra por su ID
app.get('/obras/:id', (req, res) => {
  const obraId = req.params.id;
  axios.get(`http://localhost:8080/api/obras/${obraId}`)
    .then(response => {
      res.json(response.data);
    })
    .catch(error => {
      console.error(error);
      res.status(500).json({ error: 'Error al obtener la obra' });
    });
});

// Ruta para agregar una nueva obra
app.post('/obras', (req, res) => {
  const obraData = req.body;
  axios.post('http://localhost:8080/api/obras', obraData)
    .then(response => {
      res.status(201).json(response.data);
    })
    .catch(error => {
      console.error(error);
      res.status(500).json({ error: 'Error al agregar la obra' });
    });
});

// Ruta para actualizar una obra existente
app.put('/obras/:id', (req, res) => {
  const obraId = req.params.id;
  const obraData = req.body;
  axios.put(`http://localhost:8080/api/obras/${obraId}`, obraData)
    .then(response => {
      res.json(response.data);
    })
    .catch(error => {
      console.error(error);
      res.status(500).json({ error: 'Error al actualizar la obra' });
    });
});

// Ruta para borrar una obra
app.delete('/obras/:id', (req, res) => {
  const obraId = req.params.id;
  axios.delete(`http://localhost:8080/api/obras/${obraId}`)
    .then(response => {
      res.sendStatus(200);
    })
    .catch(error => {
      console.error(error);
      res.status(500).json({ error: 'Error al borrar la obra' });
    });
});


// Manejo de errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Internal Server Error');
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto: ${port}`);
});
