import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ItemList from './ItemList';
import { Link } from 'react-router-dom';
import { useCart } from './CartContext';


const tituloEstilo = {
  marginLeft: '100px'
};

const ItemListContainerTodo = (props) => {
  const { products } = useCart();

  useEffect(() => {
    // Puedes agregar lógica adicional aquí si es necesario
  }, []);
  console.log(products)


  return (
    <div className="container col-md-12">

      <h2 style={tituloEstilo}>{props.MensajeUsuario}</h2>

      <div className="product-list  col-md-12">
        <div className='row'>
          {products.map((product) => (
            <div key={product.id} className='col-md-4'>
              <div className="card" style={{ marginBottom: '20px' }}>
                <img src={product.imagen} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{product.nombre}</h5>
                  <p className="card-text">{product.descripcion}</p>
                  <p className="card-text">Precio: ${product.precio}</p>
                  <Link className='nav-link' to={`/productos/${product.id}`} >
                    <button className="btn btn-primary">Añadir al carrito</button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}



export default ItemListContainerTodo;