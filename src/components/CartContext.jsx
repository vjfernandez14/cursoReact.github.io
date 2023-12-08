import React, {createContext,useContext, useState, useEffect} from 'react'
import {collection, getDocs, getFirestore, addDoc} from "firebase/firestore";
import firebaseApp from './firebaseConfig';
//import { preview } from 'vite';

const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [cartItems, setCartItems] = useState([]);
    const [products, setProducts] = useState([]);
    const [compraId, setCompraId] = useState(null);

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
    

    const addItem = (item, quantity) => {
        
      
        const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);
      
        if (existingItem) {
          setCartItems((prevItems) =>
            prevItems.map((prevItem) =>
              prevItem.id === item.id
                ? {
                    ...prevItem,
                    quantity: prevItem.quantity + quantity,
                    totalPrice: (prevItem.quantity + quantity) * (prevItem.price || 0),
                  }
                : prevItem
            )
          );
        } else {
          setCartItems((prevItems) => [
            ...prevItems,
            {
              ...item,
              quantity,
              totalPrice: quantity * (item.price || 0),
            },
          ]);
        }
      };

    const removeItem = (itemId) => {
       
        setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
    };

    const clear = () => {
        
        setCartItems([]);
    };

    const  isInCart = (id) => {
        return cartItems.some((item) => item.id === id );
    } 

    const confirmarCompra = async (detallesCompra) => {
        try {
          const db = getFirestore(firebaseApp);
          const compraRef = collection(db, 'compras');
          const docRef = await addDoc(compraRef, detallesCompra);
          console.log('Documento de compra añadido con ID: ', docRef.id);
          setCompraId(docRef.id);
          // Puedes hacer más cosas después de añadir el documento si es necesario
        } catch (error) {
          console.error('Error al añadir documento de compra: ', error);
        }
      };
    
      return (
        <CartContext.Provider
          value={{
            cartItems,
            products,
            addItem,
            removeItem,
            clear,
            isInCart,
            confirmarCompra,
            compraId,
          }}
     >
        {children}
     </CartContext.Provider>
     );
    };
    
export const useCart = () => {
    return useContext(CartContext);
}

export default CartContext

