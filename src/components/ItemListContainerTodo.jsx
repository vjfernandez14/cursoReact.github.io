import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ItemList from './ItemList';

const tituloEstilo = {
  marginLeft: '100px'
};

const ItemListContainerTodo = (props) => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const fetchProductos = () => {
      setTimeout(() => {
        const data = [
          {
            id: 1,
            nombre: 'Producto 1',
            descripcion: 'Descripción del Producto 1',
            precio: 10.99,
            categoria: 'Almacen'
          },
          {
            id: 2,
            nombre: 'Producto 2',
            descripcion: 'Descripción del Producto 2',
            precio: 19.99,
            categoria: 'Almacen'
          },
          {
            id: 3,
            nombre: 'Producto 3',
            descripcion: 'Descripción del Producto 3',
            precio: 94.99,
            categoria: 'Bebidas'
          },
          {
            id: 4,
            nombre: 'Producto 4',
            descripcion: 'Descripción del Producto 4',
            precio: 77.99,
            categoria: 'Especies'
          },
        ];
        setProductos(data);
      }, 2000);
    };

    fetchProductos();
  }, []);



  return (
    <div className="container col-md-12">

      <h2 style={tituloEstilo}>{props.MensajeUsuario}</h2>

      <div className="product-list  col-md-12">
        <div className='row'>
          {productos.map((producto) => (
            <div key={producto.id} className='col-md-4'>
              <div className="card" style={{ marginBottom: '20px' }}>
                <img src="src\imagenes\tienda.png" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{producto.nombre}</h5>
                  <p className="card-text">{producto.descripcion}</p>
                  <p className="card-text">Precio: ${producto.precio}</p>
                  <a href="#" className="btn btn-primary">Añadir al carrito</a>
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