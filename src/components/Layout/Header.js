import { useContext } from "react";
import { Container, Navbar, Button,NavLink} from "react-bootstrap";
import classes from "./Header.module.css";
import CartContext from "../../store/cart-context";
// import { NavLink } from "react-router-dom";

const Header = (props) => {
  const ctx = useContext(CartContext);
  return (
    <div>
      <div className={classes.heading}>
        <h1>The Generics</h1>
      </div>
      <Navbar expand="lg" className={classes.header} fixed="top">
        <Container>
          <NavLink to="/home">
            Home
          </NavLink>
          <NavLink to="/store">
            Store
          </NavLink>
          <NavLink  to="/about">
            About
          </NavLink>
          <Button onClick={props.onOpenCart}>
            Cart<sup>{ctx.items.length > 0?ctx.items.length:''}</sup>
          </Button>
        </Container>
      </Navbar>
      
    </div>
  );
};

export default Header;