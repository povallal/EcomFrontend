import "./Product.css";
import { Link } from "react-router-dom";


const Product = ({ imageUrl, description, price, name, productId,Nprice }) => {
  return (

<div class="container">
  <div class="card">
    <div class="imgBx">
      <img src={imageUrl} alt={name} />
    </div>
    <div class="contentBx">
      <h3 style={{color:"white"}}>{name}</h3>
      <div class="size" >
        {
          price != Nprice ? <div><del style={{color:"red" ,fontWeight:"" }} className=" font-weight-bold">LKR.{price}.00</del>
          <h3 style={{color:"white" ,fontWeight:"bold" }} className=" font-weight-bold">LKR.{Nprice}.00</h3></div> :<h3 style={{color:"white" ,fontWeight:"bold" }} className=" font-weight-bold">LKR.{price}.00</h3>
        }
 
      </div>
      <div class="color" style={{fontWeight:"bold"}} >
        <h3>{description.substring(0, 100)}</h3>

      </div>
              <Link to={`/product/${productId}`} className="btn " >
          View &nbsp;&nbsp;
          <i class="fa fa-eye" aria-hidden="true"></i>
        </Link>
    </div>
  </div>
</div>
      
  
    
  );
};

export default Product;
