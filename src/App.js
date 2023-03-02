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
import ProductDetail from "./components/pages/ProductDetail";
import ProductDetail2 from "./components/pages/ProductDetail2";
import ProductDetail3 from "./components/pages/ProductDetail3";
import ProductDetail4 from "./components/pages/ProductDetail4";



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
      <Header onOpenCart={showCartHandler} />
       <Routes>
       <Route path="/home" element={<Home />} />
       <Route path="/about" element={<About />} />
      <Route path="/store" element={<Products openCart={openCart} onOpenCart={showCartHandler} onCloseCart={hideCartHandler} />}/>
      <Route path="/store/1" element={<ProductDetail/>} />
      <Route path="/store/0" element={<ProductDetail2/>} />
      <Route path="/store/2" element={<ProductDetail3/>} />
      <Route path="/store/3" element={<ProductDetail4/>} />
      <Route path="/contact" element={<ContactUs  />} />
        
        
       
     
      </Routes>
      
      
      
     <Footer />
      
     </div>
     
  );
};

export default App;
