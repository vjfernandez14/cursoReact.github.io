import React from 'react';
import ReactDOM from 'react-dom/client';
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import App from './App.jsx';
import './index.css'; 
import { CartProvider } from './components/CartContext.jsx';

const firebaseConfig = {
  apiKey: "AIzaSyAJOm6vQb_YDDaOYIEwI4o7zntNZZJnso0",
  authDomain: "ecommerce-item.firebaseapp.com",
  projectId: "ecommerce-item",
  storageBucket: "ecommerce-item.appspot.com",
  messagingSenderId: "967606652648",
  appId: "1:967606652648:web:68a848178216d66275835d"
};

const app = initializeApp(firebaseConfig);

const DB = getFirestore(app);

ReactDOM.createRoot(document.getElementById('root')).render(
  <CartProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </CartProvider>
);
