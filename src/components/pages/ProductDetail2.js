import { useParams } from "react-router-dom";
import Colors from '../../assets/colors.png'
const ProductDetail2 = () => {
    const params = useParams();
  
    console.log(params.productId);
    return (
      <div className="text-center mx-auto" style={{marginTop:'1rem'}}>
        <h1>Product Detail</h1>
        <ul>
          <li >
            <img 
              src={Colors}
              alt="product"
            />
  
            <p>Music</p>
          </li>
         
        </ul>
        <section>
          <h3>Product Review</h3>
          <p>**** Awesome Music</p>
        </section>
      </div>
    );
  };
  
  export default ProductDetail2;