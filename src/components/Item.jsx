import React from 'react'

const Item = ({producto}) => {
  return (
    <div>
        <h3>{producto.nombre}</h3>
        <p>{producto.descripcion}</p>
        <p>${producto.precio}</p>
    </div> 
  );
};

export default Item