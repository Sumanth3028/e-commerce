import { useContext,useEffect, useState} from "react";
import { Container, Navbar, Button, Badge} from "react-bootstrap";
import classes from "./Header.module.css";
import CartContext from "../../store/cart-context";
 import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";

const Header = (props) => {

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


  const ctx = useContext(CartContext);
  console.log(ctx.items.length)
  const numberOfCartItems =  ctx.items.reduce((curNumber, item) => {
    
    return curNumber ;
  }, cartData.length);


  
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
          <NavLink  className={({isActive}) =>isActive?classes.active:undefined} to="/login" >
            login
          </NavLink>
          <NavLink  className={({isActive}) =>isActive?classes.active:undefined} to="/contact" >
            Contact Us
          </NavLink>
          <Button onClick={props.onOpenCart}>
            Cart
            {/* Cart<Badge>{numberOfCartItems}</Badge> */}
          </Button>
        </Container>
      </Navbar>
      
    </div>
  );
};

export default Header;