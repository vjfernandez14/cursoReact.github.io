import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useCart } from './CartContext';

const tituloEstilo = {
  marginLeft: '100px'
};

const ItemListContainer = (props) => {
  const { products, addItem } = useCart();

  useEffect(() => {
    // Puedes agregar lógica adicional aquí si es necesario
  }, []);

  // Filtrar productos por categoría
  const productosFiltrados = products.filter(
    (producto) => producto.categoria === props.categoriaFiltrada
  );

  return (
    <div className="container col-md-12">
      <h2 style={tituloEstilo}>{props.MensajeUsuario}</h2>

      <div className="product-list  col-md-12">
        <div className='row'>
          {productosFiltrados.map((producto) => (
            <div key={producto.id} className='col-md-4'>
              <div className="card" style={{ marginBottom: '20px' }}>
                <img src={producto.imagen} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{producto.nombre}</h5>
                  <p className="card-text">{producto.descripcion}</p>
                  <p className="card-text">Precio: ${producto.precio}</p>
                  <button
                    className="btn btn-primary"
                    onClick={() => addItem(producto, 1)}
                  >
                    Añadir al carrito
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

ItemListContainer.propTypes = {
  categoriaFiltrada: PropTypes.string.isRequired
};

export default ItemListContainer;

