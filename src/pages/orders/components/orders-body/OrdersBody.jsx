import "./ordersBody.css";
import deleteIcon from "../../../../assets/icons/delete.png";
import { useEffect, useState } from "react";

export default function OrdersBody() {
  const [products, setProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);


  useEffect(() => {
    
    const productsFromStorage = localStorage.getItem("orders");

    const parseProducts = JSON.parse(productsFromStorage);
    calcTotalPrice(parseProducts);
    setProducts(parseProducts);
    console.log(products);
    
    
    
  }, []);

  const calcTotalPrice = (arr) => {
   
    let price = 0;

    arr.forEach(a => {
      price += a.quantity * a.price
    });
    setTotalPrice(price);
  }
  const addProductQuantity = (product) => {
    const {name, price, quantity, id} = product

    const dataFromStorage = localStorage.getItem("orders");
    const parseData = JSON.parse(dataFromStorage);

    const filterData = parseData.filter((product) => {return product.id != id});
    const updatedOrder = {name: name, price: price, quantity: quantity+1, id: id}
    localStorage.setItem("orders", JSON.stringify([updatedOrder, ...filterData]));
    calcTotalPrice([updatedOrder,...filterData ]);
    setProducts([updatedOrder,...filterData ]);
    

  }
  const reduceProductQuantity = (product) => {
    const {name, price, quantity, id} = product

    if(quantity != 0){
      const dataFromStorage = localStorage.getItem("orders");
      const parseData = JSON.parse(dataFromStorage);
  
      const filterData = parseData.filter((product) => {return product.id != id});
      const updatedOrder = {name: name, price: price, quantity: quantity-1, id: id}
      localStorage.setItem("orders", JSON.stringify([updatedOrder, ...filterData]));
      calcTotalPrice([updatedOrder,...filterData ]);
      setProducts([updatedOrder,...filterData ]);
    }
   
    
    

  }

  const removeOrderFromList = (id) => {
    const dataFromStorage = localStorage.getItem("orders");
    const parseData = JSON.parse(dataFromStorage);
    const filterData = parseData.filter((product) => {return product.id != id});
    localStorage.setItem("orders", JSON.stringify(filterData));
    calcTotalPrice(filterData)
    setProducts(filterData);
  }

 
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
          <p>Quantity</p>
        </div>
        <div className="total">
          <p>Total</p>
        </div>
        <div className="remove">
          <p>Remove</p>
        </div>
      </div>
      <div className="chosen-product-holder">
        {products?.map((product) => {
          return (
            <div className="chosen-product">
              <div className="name">
                <p>{product.name}</p>
              </div>
              <div className="price">
                <p>{product.price}$</p>
              </div>
              <div className="quantity-holder">
                <div className="quantity">
                  <div className="minus-button">
                    <button onClick={() => { reduceProductQuantity(product)}} >-</button>
                  </div>

                  <div className="product-quantity">
                    <p>{product.quantity}</p>
                  </div>
                  <div className="plus-button">
                    <button onClick={() => { addProductQuantity(product)}}>+</button>
                  </div>
                </div>
              </div>
              <div className="total-price">
                <p>{product.price * product.quantity}$</p>
              </div>
              <div className="remove-button">
                <button onClick={() => {removeOrderFromList(product.id)}}>
                  <img src={deleteIcon} alt="" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <div className="footer">
        <div className="total-price-value">
          <p>Total: {totalPrice}$</p>
        </div>
        <div className="buy-button">
          <button>Buy</button>
        </div>
      </div>
    </div>
  );
}
