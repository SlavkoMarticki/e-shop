import "./ordersBody.css";
import deleteIcon from "../../../../assets/icons/delete.png";

export default function OrdersBody() {
  return (
    <div className="orders-body">
        <div className="title">
            <p>Cart</p>
        </div>
      <div className="header">
        <div className="product">
          <p>Product</p>
        </div>
        <div className="price">
          <p>Price</p>
        </div>
        <div className="quantity">
          <p>Quanitity</p>
        </div>
        <div className="total">
          <p>Total</p>
        </div>
        <div className="remove">
          <p>Remove</p>
        </div>
      </div>
      <div className="chosen-product-holder">
        <div className="chosen-product">
          <div className="name">
            <p>Pliers A34</p>
          </div>
          <div className="price">
            <p>1.3$</p>
          </div>
          <div className="quantity-holder">
            <div className="quantity">
              <div className="minus-button">
                <button>-</button>
              </div>

              <div className="product-quantity">
                <p>1</p>
              </div>
              <div className="plus-button">
                <button>+</button>
              </div>
            </div>
          </div>
          <div className="total-price">
            <p>200$</p>
          </div>
          <div className="remove-button">
            <button>
              <img src={deleteIcon} alt="" />
            </button>
          </div>
        </div>
      </div>

      <div className="footer">
        <div className="total-price-value">
            <p>Total: 600$</p>
        </div>
        <div className="buy-button">
            <button>Buy</button>
        </div>
      </div>
    </div>
  );
}
