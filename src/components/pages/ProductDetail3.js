import { useParams } from "react-router-dom";
import Yellow from '../../assets/YellowandBlack.png'
const ProductDetail3 = () => {
    const params = useParams();
  
    
    return (
      <div className="text-center mx-auto" style={{marginTop:'1rem'}}>
        <h1>Product Detail</h1>
        <ul>
          <li >
            <img 
              src={Yellow}
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
  
  export default ProductDetail3;