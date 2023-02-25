import React from "react";
import Black from "../../assets/BlackandWhite.png";
import Yellow from "../../assets/YellowandBlack.png";
import Blue from "../../assets/Blue.png";

import { Container, ListGroup, ListGroupItem ,Image} from "react-bootstrap";

const CartItems = (props) => {
    const price=`$${props.price.toFixed(2)}`
  return (
        <ListGroup >
      <ListGroupItem
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <h3>{props.name}</h3>
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
           <span>{price}</span> 
           {/* <img src={props.img}></img> */}
           <span>{props.amount}</span>
           <span>{props.quantity}</span>
            </div>

      </ListGroupItem>
      </ListGroup>
   
    
  );
};

export default CartItems