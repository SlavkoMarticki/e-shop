import "./home.css";
import greenRightArrow from "../../../assets/icons/greenRightArrow.svg";
import ProductDetails from "../../../layouts/portals/ProductDetails";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
    const [products, setProducts] = useState([]);
    const [openPortal, setOpenPortal] = useState(false);
    const [productDetails, setProductDetails] = useState([])

    useEffect(() =>  {
        const fetchData = async () => {
            const res = await axios.get("https://dummyjson.com/products");
            
            setProducts(res.data.products);
        }
        fetchData();

    }, []);

    const addToCart = (product) => {
        
        const newProductToCart = {
            name: product.title,
            price: product.price,
            quantity: 1,
        }

        console.log(newProductToCart);
        const productsFromStorage = localStorage.getItem("orders");
        if(productsFromStorage != null){
            const parseProductFromStorage = JSON.parse(productsFromStorage);
            console.log(parseProductFromStorage);
            localStorage.setItem("orders", JSON.stringify([...parseProductFromStorage, {...newProductToCart, id:parseProductFromStorage.length}]));
        }else{
            localStorage.setItem("orders", JSON.stringify([{...newProductToCart, id:0}]));
        }

        
        
    }

    return  (
        <div className="home-container">
             {openPortal ? <ProductDetails product={productDetails}  closePortal={setOpenPortal} /> : <></>}
            <div className="categories-products-container">
                <div className="categories">
                    <div className="categories-title">
                        <p className="title" >CATEGORIES</p>
                    </div>
                    <div className="categories-elements">
                        <div className="element">
                            <img src={greenRightArrow} alt="" />
                            <p>Plires</p>
                        </div>
                        <div className="element">
                            <img src={greenRightArrow} alt="" />
                            <p>Screwdriver</p>
                        </div>
                        <div className="element">
                            <img src={greenRightArrow} alt="" />
                            <p>Wrenchers</p>
                        </div>
                        <div className="element">
                            <img src={greenRightArrow} alt="" />
                            <p>Plows</p>
                        </div>
                        <div className="element">
                            <img src={greenRightArrow} alt="" />
                            <p>Harrows</p>
                        </div>
                        
                    </div>
                </div>

                <div className="products">
                    {
                        products.map(product => {
                            return <div className="product" key={product.id}>
                                <div className="product-title">
                                    <p>{product.title}</p>
                                </div>
                                <div className="product-image">
                                    <img src={product.images[0]} alt="" />
                                </div>
                                <div className="product-info">
                                    <div className="product-price">
                                        <p>{product.price}$</p>
                                    </div>
                                    <div className="product-buttons">
                                        <button className="blue" onClick={() => {
                                            setOpenPortal(!openPortal);
                                            setProductDetails(product);
                                        }}>Details</button>
                                        <button onClick={() => {addToCart(product)}}>Cart</button>
                                    </div>
                                </div>
                            </div>
                        })
                    }
                            
                </div>

            </div>
        </div>
    );
}