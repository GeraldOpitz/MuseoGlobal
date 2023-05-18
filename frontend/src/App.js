import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import axios from 'axios';
import Formulario from './components/Formulario';
import ObraCard from './components/ObraCard';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [obras, setObras] = useState([]);
  const [obraSeleccionada, setObraSeleccionada] = useState(null); // Nuevo estado para almacenar la obra seleccionada para editar

  useEffect(() => {
    // Función para obtener las obras desde el servidor
    const obtenerObras = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/obras');
        setObras(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    obtenerObras(); // Llamada a la función de obtención de obras al cargar el componente
  }, []);

  const eliminarObra = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/obras/${id}`);
      setObras((obrasActuales) => obrasActuales.filter((obra) => obra.id !== id)); // Filtra y elimina la obra de la lista actual
    } catch (error) {
      console.log(error);
    }
  };

  const editarObra = (obra) => {
    setObraSeleccionada(obra);
  };

  return (
    <Router>
      <div className="App">
        <Formulario
          modo={obraSeleccionada ? 'actualizar' : 'crear'}
          setObras={setObras}
          obraSeleccionada={obraSeleccionada}
          setObraSeleccionada={setObraSeleccionada}
        />

        <div className="container">
          <h2>Obras</h2>
          <div className="row">
            {obras.map((obra) => (
              <ObraCard
                key={obra.id}
                obra={obra}
                eliminarObra={eliminarObra}
                editarObra={editarObra}
              />
            ))}
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
