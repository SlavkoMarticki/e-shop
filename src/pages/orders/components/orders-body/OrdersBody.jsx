import "./ordersBody.css";
export default function OrdersBody (){
    return (
        <div className="orders-body">
            <div className="product">
                <div className="header">
                    <p>Product</p>
                </div>
            </div>
            <div className="price">
                <div className="header">
                    <p>Price</p>
                </div>
            </div>
            <div className="quantity">
                <div className="header">
                    <p>Quanitity</p>
                </div>
            </div>
            <div className="total">
                <div className="header">
                    <p>Total</p>
                </div>
            </div>
            <div className="remove">
                <div className="header">
                    <p>Remove</p>
                </div>
            </div>
        </div>
    );
}