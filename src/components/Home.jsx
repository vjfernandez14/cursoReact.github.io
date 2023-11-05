import React, { useState } from 'react';
import ItemListContainer from './ItemListContainer';

const inputEstilo = {
    marginLeft: '40px',
    marginTop: '20px'
  };

const Home = () => {
    
    const [categoria, setCategoria] = useState('Todo'); 

    const handleCategoriaChange = (event) => {
      setCategoria(event.target.value);
    };  

  return (
    <>
    <div className="row col-md-4">
    <select  className="form-select" aria-label="Default select example" defaultValue='Todo' onChange={handleCategoriaChange} style={inputEstilo}>
        <option value='Todo'>Selecciona la categoria buscada</option>
        <option value="Almacen">Almacen</option>
        <option value="Bebidas">Bebidas</option>
        <option value="Especies">Especies</option>
    </select>
    </div>

        <div>
            <ItemListContainer MensajeUsuario={categoria} categoriaFiltrada={categoria} />
        </div>
  </>
  );
};

export default Home; 
