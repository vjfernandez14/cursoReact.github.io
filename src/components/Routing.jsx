import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './Home';
import Productos from './Productos';
import ItemListDetail from './ItemListDetail';
import Error404 from './Error404';
import Cart from './Cart';


const Routing = () => {
  return (
    
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/productos" element={<Productos />} />
      <Route path="/productos/:id" element={<ItemListDetail />} />
      <Route path="*" element={<Error404 />} />
      <Route path='/cartWidget' element={<Cart />}/>
    </Routes>
   
  );
};

export default Routing;