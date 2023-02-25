import {useState} from "react";
import "./App.css";
import Header from "./components/Layout/Header";
import Products from "./components/Products/Products";

import Cart from "./components/Cart/Cart";
import Footer from "./components/Layout/Footer";

const App = () => {
   const [openCart, setShowCart] = useState(false);
   const showCartHandler=()=>{
    setShowCart(true)
   }
   const hideCartHandler=()=>{
    setShowCart(false)
   }
  return (
    <div>
      <Products />
     {openCart && <Cart onCloseCart={hideCartHandler} />} 
      <Header onOpenCart={showCartHandler} />
      <Footer />
    </div>
  );
};

export default App;
