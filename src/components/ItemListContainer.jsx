import React from 'react';
import PropTypes from 'prop-types';

const tituloEstilo = {
    marginLeft:'100px'
};

const Contenedor = props => {
  return (
    
    <div className="contenedor col-md-12">
        
        <h2 style={tituloEstilo}>{props.MensajeUsuario}</h2>
        
        <div className="product-list  col-md-12">
            <div className='row'>
                <div className='col-md-4'></div>
                <div className='col-md-4'></div>
                <div className='col-md-4'></div>
            </div>
        </div>
    </div>
    
  )
}

Contenedor.propTypes = {};

export default Contenedor;