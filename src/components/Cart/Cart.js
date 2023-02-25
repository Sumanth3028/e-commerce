import {useContext} from "react";
import { Button, ListGroup, Modal } from "react-bootstrap";
import CartContext from "../../store/cart-context";
import CartItems from "./CartItems";

const Cart=(props)=>{
  const cartCtx=useContext(CartContext)
  const cartItems=(
    <ListGroup>
      {cartCtx.items.map((item)=>
       (<CartItems
          key={item.id}
          id={item.id}
          name={item.name}
          //img={item.img}
          price={item.price}
          quantity={item.quantity}
          amount={item.amount}>

          </CartItems>
       )
      )}
    </ListGroup>
  )
  return(
    <Modal>
      <Modal.Header closeButton>
         <Modal.Title style={{alignContent:'center'}}>Cart</Modal.Title>
      </Modal.Header>
      <Modal.Body>{cartItems}</Modal.Body>
      <Modal.Footer style={{alignItems:'center'}}>
        <Button variant="primary">Purchase</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default Cart