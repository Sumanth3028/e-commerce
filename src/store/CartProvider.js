import React, { useEffect, useState,useContext } from "react";
import CartContext from "./cart-context";


const CartProvider = (props) => {
  const [cartItem, setCartItem] = useState([]);
  const ctx=useContext(CartContext)
  
  const addToCartHandler = (item) => {
    console.log(item, item.id)
    
    const existingCartItemIndex = cartItem.findIndex(
      (element) => element.title === item.title
    );

    if(existingCartItemIndex >=0) {
      const existingCartItem = cartItem[existingCartItemIndex]
      const id = existingCartItem._id
      const updatedCart = {...item, quantity: existingCartItem.quantity+1}
     
    }
    // else
    // {
    //   setCartItem(item)
    //  }
    
  }
  const removeItemHandler = (id) => {
    setCartItem(cartItem.filter((item) => id !== item._id));
   
  };
 
  const total = cartItem.reduce(
    (total, item) => total + item.price *item.quantity,
    0
  );

  const contextData = {
    items: cartItem,
    totalAmount: total,
    addItem: addToCartHandler,
    removeItem: removeItemHandler,
    
  };
  return (
    <CartContext.Provider value={contextData}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;