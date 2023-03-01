import {useEffect, useState} from "react";
import "./App.css";
import Header from "./components/Layout/Header";
import Products from "./components/Products/Products";
import { Route,useNavigate, Routes} from "react-router-dom";
import Cart from "./components/Cart/Cart";
import Footer from "./components/Layout/Footer";
import About from "./components/pages/About";
import Home from "./components/pages/Home";
import ContactUs from "./components/pages/ContactUs";



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
       <Routes>
       <Route path="/home" element={<Home />} />
       <Route path="/about" element={<About />} />
      <Route path="/" element={<Products openCart={openCart} onOpenCart={showCartHandler} onCloseCart={hideCartHandler} />}/>
      <Route path="/store" element={<Products openCart={openCart} onOpenCart={showCartHandler} onCloseCart={hideCartHandler} />}/>
      <Route path="/contact" element={<ContactUs  />} />
        
        
       
     
      </Routes>
      
      
      
     
      
     </div>
     
  );
};

export default App;
