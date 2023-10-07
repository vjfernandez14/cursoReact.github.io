import React from 'react';
import PropTypes from 'prop-types';

const estiloCarro = {
    width: '50px',
    heigth: '50px'
};

const CarritoW = props => {
  return (
    <div className='carrito'>
        <span><img className='shop' src='src\imagenes\iconShop.png' alt='carrito' style={estiloCarro}/> ({props.contarArticulos})</span>
    </div>
  );
}

CarritoW.propTypes = {};

export default CarritoW;