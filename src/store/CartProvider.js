import React, { useEffect, useReducer, useContext, useState } from "react";
import { useResolvedPath } from "react-router-dom";
import CartContext from "./cart-context";
import axios from "axios";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};
let updatedItems;

let temp1 = [];
const getCartData = async () => {
  const response = await axios.get(
    "https://crudcrud.com/api/c9681725a1b84ba99e9e9377310eefc2/cart"
  );
  console.log(response.data);
  temp1 = response.data;

};

const addItemReducer = (state, action) => {
  if (action.type === "Add") {
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.quantity;

    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    const existingCartItem = state.items[existingCartItemIndex];


    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity + 1,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    return {
      items: temp1,
      totalAmount: updatedTotalAmount,
    };
  }
  if (action.type === "Remove") {
//     const existingCartItemIndex = state.items.findIndex(
//       (item) => item.id.toString() === action.id.toString()
//     ) ;
//      console.log(existingCartItemIndex)
//     const existingItem = state.items[existingCartItemIndex];

//     console.log(state)
// //  console.log(existingItem)
//     const updatedTotalAmount = parseInt(state.totalAmount) - parseInt(existingItem.price);

//     let updatedItems = [];
//     if (existingItem.quantity === 1) {
//       console.log("hello");
//       updatedItems = state.items.filter(
//         (item) => item.id.toString() !== action.id.toString()
//       );
//     } else {
//       state.items[existingCartItemIndex].quantity -= 1;
//       updatedItems = [...state.items];
//        }
//     console.log(updatedItems);

    return {
      items: temp1,
      // totalAmount: updatedTotalAmount,
    };
  }
  return defaultCartState;
};

const CartProvider = (props) => {
  const initialToken = localStorage.getItem("token");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [userEmail, setUserEmail] = useState("");

  const [token, setToken] = useState(initialToken);
  const [cartState, dispatchCartState] = useReducer(
    addItemReducer,
    {
      items: [],
      totalAmount: 0,
    }
  );
  // console.log(cartState.items)
  
  useEffect(() => {
    const loginToken = localStorage.getItem("token");
    const email = localStorage.getItem("email");
    if (loginToken && email) {
      setIsLoggedIn(true);
      setUserEmail(email);
    }
    getCartData();
  }, [isLoggedIn, userEmail]);

  const userEmailHandler = () => {
    const email = localStorage.getItem("email");
    const newUserEmail = email.replace("@", "").replace(".", "");
    setUserEmail(newUserEmail);
    localStorage.setItem(email, newUserEmail);
  };

  const addItemCartHandler = async (item) => {
    dispatchCartState({ type: "Add", item: item });
    getCartData();
    await axios.post(
      `https://crudcrud.com/api/c9681725a1b84ba99e9e9377310eefc2/cart`,
      item
    );
  };

  const removeItemFromCartHandler = async(id) => {
    dispatchCartState({ type: "Remove", id: id });
    await axios.delete(
      `https://crudcrud.com/api/c9681725a1b84ba99e9e9377310eefc2/cart/${id}`
    );
    getCartData()
   };

  const loginHandler = (token) => {
  
    setIsLoggedIn(true);
    setToken(token);
    localStorage.setItem("token", JSON.stringify(token));
  };

  const contextData = {
    token: token,
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemCartHandler,
    removeItem: removeItemFromCartHandler,
    login: loginHandler,
    isLoggedIn: isLoggedIn,
  };
  return (
    <CartContext.Provider value={contextData}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
