import React ,{useContext}from "react";
import { Col, Row } from "react-bootstrap";
import CartContext from "../../store/cart-context";
import "./CartItem.css";

const CartItem = (props) => {
  const ctx=useContext(CartContext)
  const price = props.item.price.toFixed(2);
  
    const onRemoveCartHandler=(event)=>{
         event.preventDefault()
         const id=event.target.parentElement.parentElement.lastElementChild.textContent
         ctx.removeItem(id)
    }
  return (
    <Row className="justify-content-between">
      <Col className="cartItem cartColumn">
        <img className="cartImg" src={props.item.imageUrl} alt="cartimage" />
      </Col>
      <Col className="cartPrice cartColumn">
        {price}
        <button className="button">{props.item.quantity}</button>
      </Col>
      <Col className="cartQuantity cartColumn">
        <button className="cartQuantityButton" onClick={onRemoveCartHandler}>remove</button>
      </Col>
      <p>{props.id}</p>
    </Row>
  );
};

export default CartItem;