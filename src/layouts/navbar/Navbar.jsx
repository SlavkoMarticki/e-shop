import "../../assets/navbar.css";
import menu from "../../assets/icons/menu.png";
import cart from "../../assets/icons/cart.png";
import search from "../../assets/icons/search.png";
import logo from "../../assets/icons/logo.png";

export default function Navbar(){
    return (
        <div className="navbar-container">
            <div className="menu-search-chart">
                <div className="left-side">
                    <button>
                        <img src={menu} alt="" />
                    </button>
                </div>
                <div className="right-side">
                    <button>
                        <img src={search} alt="" />
                    </button>
                    <button>
                        <img src={cart} alt="" />
                    </button>
                </div>
            </div>
            <div className="navbar">
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                <h4>navbar</h4>
                <h4>navbar</h4>
                <h4>navbar</h4>
            </div>
        </div>
    );
}