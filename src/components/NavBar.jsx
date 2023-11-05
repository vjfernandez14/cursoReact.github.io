
import React from 'react';
import PropTypes from 'prop-types';
import CarritoW from './CartWidget';
import Home from './Home';
import Routing from './Routing';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Productos from './Productos';
//import TaskList from './TaskList';
//import ProductDetail from './ProductDetail';


const logoEstilo = {
  width: '120px', 
  height: '70px' 
};



function NavBar(props) {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#"><img src={props.logoTienda} alt="Logo de la tienda.png" style={logoEstilo} /></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">


          <div className="navbar-nav">
            <Link className="nav-link active" aria-current="page" to="/">
              Home
            </Link>
            <Link className="nav-link" to="/productos">
              Productos
            </Link>
          
            <div className="navbar-nav ml-auto">
              <a className="nav-link carrito" href="#">
                <CarritoW contarArticulos={3} />
              </a>
              </div>
          </div>
       
          
          </div>
        </div>
      
    </nav>
  );
}

NavBar.propTypes = {
  logoTienda: PropTypes.string.isRequired, 
};


export default NavBar;
