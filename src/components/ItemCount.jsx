import React, { useState } from 'react';

const ItemCount = ({ initial, stock, onAddToCart, setCantidad }) => {
  const [count, setCount] = useState(initial);

  const incremento = () => {
    if (count < stock) {
      setCount(count + 1);
      setCantidad(count + 1); // Actualiza la cantidad en el componente padre
    }
  };

  const decremento = () => {
    if (count > 1) {
      setCount(count - 1);
      setCantidad(count - 1); // Actualiza la cantidad en el componente padre
    }
  };

  const addToCart = () => {
    if (onAddToCart) {
      onAddToCart(count);
    }
  };

  return (
    <div>
      <p>Cantidad: {count} </p>
      <button className='btn btn-danger' onClick={decremento}>-</button>
      <button className='btn btn-success' onClick={incremento}>+</button>
      <button className='btn btn-primary' onClick={addToCart}>Agregar al carrito</button>
    </div>
  );
};

export default ItemCount;
