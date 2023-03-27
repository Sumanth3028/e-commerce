import React from "react";

const CartContext=React.createContext({
    token:'',
    items:[],
    totalAmount:0 ,
    addItem:(item)=>{},
    removeItem:(id)=>{},
    login: () => {},
    isLoggedIn: false
})

export default CartContext