import React, { useState } from 'react';
import { useCart } from './CartContext';
import Item from './Item';
import { addDoc } from 'firebase/firestore';

const Cart = () => {
  const { cartItems, removeItem, clear, confirmarCompra, compraId } = useCart();
  console.log(cartItems);

  const [compraExitosa, setCompraExitosa] = useState(false);
  

  const calculateTotal = () => {
    const total = cartItems.reduce((accumulator, item) => {
      const totalPrice = item.totalPrice || 0;
      return accumulator + totalPrice;
    }, 0);

    
    return total.toFixed(2);
  };

  const totalSum = cartItems.reduce((accumulator, item) => {
    const itemTotal = item.precio * item.quantity;
    return accumulator + itemTotal;
  }, 0);

  console.log(totalSum);

  console.log('Precios en el carrito:', cartItems.map((item) => item.precio * item.quantity));

  const handleConfirmarCompra = async () => {
    const detallesCompra = {
      items: cartItems,
      total: totalSum,
      
    };

    

    try {
      
       const idCompra = await confirmarCompra(detallesCompra);
  
      
      console.log("Compra confirmada con ID:", idCompra);
  
      
      setCompraExitosa(true); 
      console.log(idCompra)
    } catch (error) {
      
      console.error("Error al confirmar la compra:", error);
      setCompraExitosa(false); 
    }
  };

  return (
    <div className='ml-2'>
      {cartItems.length === 0 ? (
        <div>
          <p>No hay ítems en el carrito.</p>
        </div>
      ) : (
        <div className='col-md-12 text-center'>
          {cartItems.map((item) => (
            <div className='card ml-2' key={item.id}>
              <h2 className='card-header'>{item.nombre}</h2>
              <h4>Cantidad: {item.quantity}</h4>
              <p>Precio unitario: ${item.precio ? item.precio.toFixed(2) : 'N/A'}</p>
              <p>Precio total: ${item.precio ? item.precio * item.quantity : 'N/A'}</p>
              <button className='btn btn-danger' onClick={() => removeItem(item.id)}>Eliminar</button>
            </div>
          ))}
          <div className='card text-bg-secondary mb-3'>
            <h2>Precio Total: ${totalSum}</h2>
            {!compraExitosa && (
              <div>
                <button className='btn btn-danger' onClick={clear}>Limpiar Carrito</button>
                <button className='btn btn-success' onClick={handleConfirmarCompra}>Finalizar Compra</button>
              </div>
            )}
            {compraExitosa && <p>Compra Exitosa comprobante: {compraId} </p>}
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
