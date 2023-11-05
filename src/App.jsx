import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; //incluimos bootstrap



//importamos componentes
import React from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import Pais from './components/Pais';
import Routing from './components/Routing';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

//app principal
function App() {
 
  return (
  <div> 
     <BrowserRouter>
        <NavBar logoTienda="\src\imagenes\logo1.png" />
        <Routing/>

      </BrowserRouter> 
  </div>
      
      
   
  );
  }

export default App;
