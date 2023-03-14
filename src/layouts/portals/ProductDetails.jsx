import "./productDetails.css";
import { createPortal } from "react-dom";
import deleteIcon from "../../assets/icons/delete.png";

export default function ProductDetails(props){

    const {product, closePortal} = props;
    


    return createPortal(
       <div className="background">
            <div className="product-holder">
                <div className="header">
                    <div className="product-name">
                        <p>{product.title}</p>
                    </div>
                    <div className="close-portal">
                        <button onClick={() => {closePortal(false);}}>
                            <img src={deleteIcon} alt="" />
                        </button>
                    </div>
                </div>

                <div className="body">
                    <div className="images">
                        <img src={product.images[0]} alt="" />
                    </div>
                    <div className="information">
                        <div className="main-info">
                            <p>Brand: {product.brand}</p>
                            <p>Description: {product.description}</p>
                            <p>Rating: {product.rating}</p>
                            <p>Stock: {product.stock}</p>
                        </div>
                        
                        <div className="product-price">
                            <p>Price: {product.price}$</p>
                        </div>
                        
                    </div>
                </div>
            </div>
           
       </div>,document.getElementById("productDetails")
    );
  
}