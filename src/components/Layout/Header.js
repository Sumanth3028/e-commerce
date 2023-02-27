import { useContext,useEffect} from "react";
import { Container, Navbar, Button, Badge} from "react-bootstrap";
import classes from "./Header.module.css";
import CartContext from "../../store/cart-context";
 import { NavLink, useNavigate } from "react-router-dom";

const Header = (props) => {
  const ctx = useContext(CartContext);
  const numberOfCartItems = ctx.items.reduce((curNumber, item) => {
    return curNumber + item.quantity;
  }, 0);
  return (
    <div>
      <div className={classes.heading}>
        <h1>The Generics</h1>
      </div>
      <Navbar expand="lg" className={classes.header} fixed="top">
        <Container>
          <NavLink className={({isActive}) =>isActive?classes.active:undefined} to="/home">
            Home
          </NavLink>
          <NavLink  className={({isActive}) =>isActive?classes.active:undefined} to="/store">
            Store
          </NavLink>
          <NavLink  className={({isActive}) =>isActive?classes.active:undefined} to="/about" >
            About
          </NavLink>
          <Button onClick={props.onOpenCart}>
            Cart<Badge>{numberOfCartItems}</Badge>
          </Button>
        </Container>
      </Navbar>
      
    </div>
  );
};

export default Header;