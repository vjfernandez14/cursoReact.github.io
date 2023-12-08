import React,  { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Cart from './Cart';
import CartContext from './CartContext';

const estiloCarro = {
    width: '50px',
    heigth: '50px'
};

const CarritoW = ( )=> {

  const { cartItems } = useContext(CartContext);
  console.log('Items en el carrito:', cartItems);

  // Calcula la cantidad total de ítems en el carrito
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);


  return (
    <div className='carrito'>
        <Link className="nav-link" to="/CartWidget"><img className='shop' src='\src\imagenes\iconShop.png' alt='carrito' style={estiloCarro}/> 
        ({totalItems})
        </Link> 
        
    </div>
  );
}

CarritoW.propTypes = {};

export default CarritoW;