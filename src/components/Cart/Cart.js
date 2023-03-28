import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import { CloseButton, Button } from "react-bootstrap";
import { useContext, useEffect, useState } from "react";
import CartContext from "../../store/cart-context";
import "./Cart.css";
import axios from "axios";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  // const itemRemoveHandler=(id)=>cartCtx.removeItem(id)
  const [cartData, setCartData] =useState([])
  const getCartData = async () => {
    const response = await axios.get(
      "https://crudcrud.com/api/c9681725a1b84ba99e9e9377310eefc2/cart"
    );

    console.log(response)
    setCartData(response.data);
    // console.log('calling cartdata', cartData)
  
  };

  useEffect( ()=> {
    getCartData()
  }, [])

  return (
    <Modal>
      <CloseButton onClick={props.onCloseCart} />
      <h5 className="heading">CART</h5>
      <div className="cartRow">
        <span className="cartItem cartHeader cartColumn">ITEM</span>
        <span className="cartPrice cartHeader cartColumn">PRICE</span>
        <span className="cartQuantity cartHeader cartColumn">QUANTITY</span>
      </div>
      <div>
        {cartData.map((item) => (
          <CartItem
            key={item._id}
            id={item._id}
            item={item} 
            price={item.price}
            quantity={item.quantity}
            imageUrl={item.imageUrl}
            // onRemoveCart={itemRemoveHandler}
          />
        ))}
      </div>
      <div className="cartTotal">
        <span>
          <span className="totalTitle">
            <strong>Total</strong>
          </span>
          ₹<span>{cartCtx.totalAmount}</span>
        </span>
      </div>
      <Button>Purchase</Button>
    </Modal>
  );
};

export default Cart;