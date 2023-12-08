
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyAJOm6vQb_YDDaOYIEwI4o7zntNZZJnso0",
  authDomain: "ecommerce-item.firebaseapp.com",
  projectId: "ecommerce-item",
  storageBucket: "ecommerce-item.appspot.com",
  messagingSenderId: "967606652648",
  appId: "1:967606652648:web:68a848178216d66275835d"
};

const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;

  