import React, { useState } from 'react';

const ItemCount = ({ inicial, stock }) => {
  const [count, setCount] = useState(inicial);

  const incremento = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const decremento = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div>
      <p>Cantidad: {count}</p>
      <button className='btn btn-danger' onClick={decremento}>-</button>
      <button className='btn btn-success' onClick={incremento}>+</button>
      <button className='btn btn-primary'>Agregar al carrito</button>
    </div>
  );
};

export default ItemCount;