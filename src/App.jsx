import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // incluimos bootstrap

// Importamos componentes
import React, { useState, useEffect } from 'react';
import NavBar from './components/NavBar';
//import ItemListContainer from './components/ItemListContainer';
//import Pais from './components/Pais';
import Routing from './components/Routing';
import { BrowserRouter} from 'react-router-dom'
import Loader from './components/Loader';
import {collection, doc, getDoc, getDocs, getFirestore} from "firebase/firestore";
import firebaseApp from '../src/components/firebaseConfig.jsx';



// App principal
function App() {

  const [products, setProducts] = useState({});

  useEffect(()=>{
    const db = getFirestore(firebaseApp);
    const collectionRef = collection(db,"productos");

    getDocs(collectionRef).then((snapshot) =>{
      if(snapshot.size !== 0) {
        const productList = snapshot.docs.map((doc)=> ({
          id: doc.id,
          ...doc.data()
        })) 
        setProducts(productList);
        console.log(productList)
       
      } else {
        console.log("Item no encontrado")
      }
      
    })
  },[])

       const [loading, setLoading] = useState(true);

        
        useEffect(() => {
         const timeout = setTimeout(() => {
            setLoading(false);
          }, 2000);

          return () => clearTimeout(timeout);
        }, []);


  return (

  <div> 
     <BrowserRouter>
        <NavBar logoTienda="/src/imagenes/logo1.png" />
        <Routing />
       
        
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <Loader  loading={loading} />
        </div> 
      </ BrowserRouter> 
      
  </div>
      
      
  

  );
}

export default App;   


