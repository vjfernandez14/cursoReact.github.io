import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemCount from './ItemCount';

const Detail = {
    marginLeft: '50px',
    marginTop:'50px'
};

const detalleProductos = [
  {
    id: 1,
    nombre: 'Producto 1',
    descripcion: 'Descripción del Producto 1',
    precio: 10.99,
  },
  {
    id: 2,
    nombre: 'Producto 2',
    descripcion: 'Descripción del Producto 2',
    precio: 19.99,
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

const ItemListDetail = () => {
  const { id } = useParams();
  const selecProducto = detalleProductos.find((product) => product.id === parseInt(id));

  return (
    <div>
      {selecProducto ? (
        <div className='row col-md-3' style={Detail}>
                <div className="card" style={{ marginBottom: '20px' }}>
                     <img src="\src\imagenes\tienda.png" className="card-img-top" alt="..." />
                    <div className="card-body">
                       <h5 className="card-title">{selecProducto.nombre}</h5>
                       <p className="card-text">{selecProducto.descripcion}</p>
                       <p className="card-text">Precio: ${selecProducto.precio}</p>
                       <ItemCount initial={1} stock={10} />
                    </div>
                </div>  
          
        </div>
                   
                   
      ) : (
        <p>Producto no encontrado</p>
      )}
    </div>
  );
};

export default ItemListDetail;