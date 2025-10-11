import React, { useContext, useEffect, useState } from "react";
import CartContext from "../Utils/Context/CartContext";
import { FaPlus, FaMinus } from "react-icons/fa";
// import { FaMinus } from "react-icons/fa";

const Cart = () => {
  const { cart, clearCart, removeProduct, increaseQty, decreaseQty, totalPrice } = useContext(CartContext);
  console.log(cart);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    setTotal(totalPrice);
  }, [cart]);
  return (
    <div className="main-card">
      {cart.length === 0 ? (
        <h1>Cart is Empty</h1>
      ) : (
        cart?.map((item) => {
          return (
            <div className="card" key={item?.id}>
              <img
                src={item?.thumbnail}
                alt={item?.title}
                className="cardImg"
              />
              <h3 className="resturentName">{item?.title}</h3>
              <h3 className="have">{item?.category}</h3>
              <h3>$ {item?.price}</h3>
              <button
                onClick={() => {
                  removeProduct(item);
                }}
              >
                Remove
              </button>
              <div>
                <button onClick={() => increaseQty(item)}><FaPlus /></button>
                <span>{item.qty}</span>
                <button onClick={() => decreaseQty(item)}><FaMinus /></button>
              </div>
            </div>
          );
        })
      )}
      {cart.length > 0 && (
        <div className="rightBar">
          <h3>Total Items</h3>
          <h6>total:{cart.length}</h6>
          <h4>Total Price : {total}</h4>
          <button onClick={() => clearCart()}>Remove All</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
