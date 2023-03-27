import React, { useEffect, useReducer,useContext ,useState} from "react";
import CartContext from "./cart-context";


const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const addItemReducer = (state, action) => {
  if (action.type === "Add") {
    
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.quantity;

    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    const existingCartItem = state.items[existingCartItemIndex];
  
    let updatedItems;

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity +1,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  if (action.type === "Remove") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
     console.log(existingCartItemIndex)
    const existingItem = state.items[existingCartItemIndex+1];

    console.log(existingItem)
      
    const updatedTotalAmount = state.totalAmount - existingItem.price;
    
    let updatedItems;
    if (existingItem.quantity === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } 

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  return defaultCartState;
};

const CartProvider = (props) => {
  const initialToken=localStorage.getItem('token')
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token,setToken]=useState(initialToken)
const [cartState, dispatchCartState] = useReducer(
  addItemReducer,
  defaultCartState
);

const addItemCartHandler = (item) => {
  dispatchCartState({ type: "Add", item: item });
};

const removeItemFromCartHandler = (id) => {
  dispatchCartState({ type: "Remove", id: id });
};

const loginHandler=(token)=>{
  setIsLoggedIn(true)
  setToken(token)
  localStorage.setItem('token',JSON.stringify(token))
}

  const contextData = {
    token:token,
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