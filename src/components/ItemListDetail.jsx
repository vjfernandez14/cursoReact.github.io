import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ItemCount from './ItemCount.jsx';
import { useCart } from './CartContext';

const Detail = {
  marginLeft: '50px',
  marginTop: '50px'
};

const ItemListDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addItem, products } = useCart();
  const [selecProducto, setSelecProducto] = useState(null);
  const [stockActual, setStockActual] = useState(0);
  const [showItemCount, setShowItemCount] = useState(true);
  const [cantidadSeleccionada, setCantidadSeleccionada] = useState(1);

  useEffect(() => {
    const selecProducto = products.find((product) => product.id === id);
    if (selecProducto) {
      setSelecProducto(selecProducto);
      setStockActual(selecProducto.stock || 0);
      console.log('Producto seleccionado:', selecProducto);
    }
  }, [id, products]);

  const handleAddToCart = () => {
    console.log('Añadiendo al carrito:', selecProducto, 'Cantidad:', cantidadSeleccionada);

    const itemCount = parseInt(cantidadSeleccionada, 10) || 1;

    if (itemCount <= stockActual) {
      setStockActual((prevStock) => prevStock - itemCount);

      addItem(selecProducto, itemCount);

      setShowItemCount(false);
    } else {
      console.warn('La cantidad seleccionada es mayor que el stock disponible');
    }
  };

  const handleTerminarCompra = () => {
    navigate.push('/cart');
  };

  const precioUnitario = selecProducto ? selecProducto.precio || 0 : 0;
  const precioTotal = precioUnitario * cantidadSeleccionada;

  return (
    <div>
      {selecProducto ? (
        <div className='row col-md-6' style={Detail}>
          <div className="card" style={{ marginBottom: '20px' }}>
            <img src={selecProducto.imagen} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{selecProducto.nombre}</h5>
              <p className="card-text">{selecProducto.descripcion}</p>
              <p className="card-text">Precio unitario: ${precioUnitario.toFixed(2)}</p>

              {showItemCount && (
                <ItemCount
                  initial={1}
                  stock={stockActual}
                  onAddToCart={handleAddToCart}
                  setCantidad={setCantidadSeleccionada}
                />
              )}

              <p className='card-text'>Stock: {stockActual} unidades</p>

              {showItemCount && (
                <button className='btn btn-primary' onClick={handleTerminarCompra}>
                  Terminar mi compra
                </button>
              )}

              {showItemCount && (
                <div>
                  <p>Precio Total: ${precioTotal.toFixed(2)}</p>
                </div>
              )}
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
