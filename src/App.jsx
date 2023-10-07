import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; //incluimos bootstrap



//importamos componentes
import React from 'react';
import NavBar from './components/NavBar';
import Contenedor from './components/ItemListContainer';

//app principal
function App() {
 
  return (
  <div> 
      <NavBar logoTienda="src\imagenes\logo1.png" />;
      <Contenedor MensajeUsuario="Bienvenido, pronto podras ver nuestros productos" />;
  </div>
   
  );
  }

export default App;
