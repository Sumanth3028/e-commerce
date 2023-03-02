import { useContext } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import CartContext from "../../store/cart-context";
import Header from "../Layout/Header";
import Cart from "../Cart/Cart";
import Footer from "../Layout/Footer";
import classes from "./Products.module.css";

const Products = (props) => {
  const productsArr = [
    {
      title: "Colors",

      price: 100,

      id: 1,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },

    {
      title: "Black and white Colors",

      price: 50,

      id: 2,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },

    {
      title: "Yellow and Black Colors",

      price: 70,

      id: 3,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },

    {
      title: "Blue Color",

      price: 100,

      id: 4,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
  ];

  const ctx = useContext(CartContext);

  return (
    <div>
      <div>
      
      {props.openCart && <Cart onCloseCart={props.onCloseCart} /> }
      </div>
      
    <div className={classes.product}>
      {productsArr.map((item, index) => {
        return (
          <div className={classes.item} key={index}>
            <p>Album {index + 1}</p>
            <Link to={`/store/${index}`} >
              <img src={item.imageUrl}  alt="productImage" />
            </Link>

            <p>{`₹${item.price}`}</p>
            <Button onClick={() => ctx.addItem({ ...item, quantity: 1 })}>
              Add To Cart
            </Button>
          </div>
        );
      })}
    </div>
    <div>
     
    </div>
    </div>
  );
};

export default Products;
