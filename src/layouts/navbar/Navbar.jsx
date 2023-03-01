import "../../assets/navbar.css";
import menu from "../../assets/icons/menu.png";
import greenCart from "../../assets/icons/greenCart.svg";
import whiteCart from "../../assets/icons/whiteCart.png";
import search from "../../assets/icons/search.png";
import logo from "../../assets/icons/logo.png";
import { useNavigate } from "react-router-dom";

export default function Navbar(){

    const navigate = useNavigate();

    return ( 
        <div className="navbar-container">
            <div className="menu-search-chart">
                <div className="left-side">
                    <img src={menu} alt="" />   
                </div>
                <div className="right-side">
                    <button>
                        <img src={search} alt="" />
                    </button>
                    <button>
                        <img src={whiteCart} alt="" />
                    </button>
                </div>
            </div>
            <div className="navbar">
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                <div className="menu-links">
                    <a href="">Home</a>
                    <a href="">News</a>
                    <a href="">Gallery</a>
                    <a href="">About us</a>
                    <a href="">Contact</a>
                </div>
                <div className="cart-img">
                    <button onClick={() => {navigate("/orders")}}>
                        <img src={greenCart} alt="" />
                    </button>
                    
                </div>
            </div>
        </div>
    );
}