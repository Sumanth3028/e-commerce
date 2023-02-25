import React from "react";

import CartContext from "./cart-context";

const CartProvider = (props) => {
  const items=[]
  const totalAmount=0
  const addItem=(item)=>{}
  const removeItem=(id)=>{}
  const cartContext = {
    items,
    totalAmount ,
    addItem,
    removeItem
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
