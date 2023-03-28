import {useEffect, useState,useContext} from "react";
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
import Login from "./components/pages/Auth/Login";
import CartContext from "./store/cart-context";
import { Navigate } from "react-router-dom";


const App = () => {
   
   const [openCart, setShowCart] = useState(false);
   const ctx=useContext(CartContext)
   const isLoggedIn=ctx.isLoggedIn
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
       <Route path="/" element={<Home />} />
       <Route path="/home" element={<Home />} />
       <Route path="/about" element={<About />} />
       {isLoggedIn &&<Route path="/store" element={<Products openCart={openCart} onOpenCart={showCartHandler} onCloseCart={hideCartHandler} />}/>}
       {!isLoggedIn && <Route path='/store'  element={<Login/>}/>}
      <Route path="/store/0" element={<ProductDetail/>} />
      <Route path="/store/1" element={<ProductDetail2/>} />
      <Route path="/store/2" element={<ProductDetail3/>} />
      <Route path="/store/3" element={<ProductDetail4/>} />
     
          {!isLoggedIn && <Route path="/login" element={<Login />} /> }

      <Route path="/contact" element={<ContactUs  />} />
        
        
       
     
      </Routes>
      
      
      
     <Footer />
      
     </div>
     
  );
};

export default App;
