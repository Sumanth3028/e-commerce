import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import { CloseButton, Button } from "react-bootstrap";
import { useContext } from "react";
import CartContext from "../../store/cart-context";
import "./Cart.css";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);


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
        {cartCtx.items.map((item) => (
          <CartItem
            key={item.id}
            id={item.id}
            item={item} 
            price={item.price}
            quantity={item.quantity}
            imageUrl={item.imageUrl}
            onRemoveCart={cartCtx.removeItem}
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