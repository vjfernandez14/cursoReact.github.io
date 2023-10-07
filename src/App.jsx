import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // incluimos bootstrap

// Importamos componentes
import React from 'react';
import NavBar from './components/NavBar';
import Contenedor from './components/ItemListContainer';

// App principal
function App() {
  return (
    <div>
      <NavBar logoTienda="src/imagenes/logo1.png" />
      <Contenedor MensajeUsuario="Bienvenido, pronto podrás ver nuestros productos" />
    </div>
  );
}

export default App;

