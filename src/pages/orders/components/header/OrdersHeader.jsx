import "./ordersHeader.css";
import backArrow from "../../../../assets/icons/whiteBackArrow.png";
import { useNavigate } from "react-router-dom";

export default function OrdersHeader(){

    const navigate = useNavigate();

    return (
        <div className="orders-header">
            <button onClick={() => {navigate("/")}}>
                <img src={backArrow} alt="" />
            </button>
        </div>
    )
}