import React, { useEffect } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router";
import { removeFromCart, clearCart, increaseQty, decreaseQty, selectTotalPrice, totalItems } from "../Features/cart/cartSlice";


const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const handlRemove  = (id) =>{
    dispatch(removeFromCart(id));
  }
  const handleClearAll = () => {
    dispatch(clearCart());
  }

  const handleIncreaseQty = (id) => {
    dispatch(increaseQty(id))
  }
  const handleDecreaseQty = (id) => {
    dispatch(decreaseQty(id));
  }
  
  const total = useSelector(selectTotalPrice);

  console.log("Total Price:", total); 
  const totalItem = useSelector(totalItems)
  return (
    <>
      <div className="flex justify-center items-center flex-wrap gap-6">
        {cartItems.length === 0 ? (
          <h1>Cart is Empty</h1>
        ) : (
          cartItems?.map((item) => {
            return (
              <div className="card" key={item?.id}>
                <img
                  src={item?.thumbnail}
                  alt={item?.title}
                  className="cardImg"
                />
                <h3 className="resturentName">{item?.title}</h3>
                <h3 className="have">{item?.category}</h3>
                <h3>$ {item?.price * item?.qty}</h3>
                <button
                  onClick={() => {
                    handlRemove(item.id);
                  }}
                >
                  Remove
                </button>
                <div className="flex items-center gap-3">
                  <button onClick={() => handleIncreaseQty(item.id)}>
                    <FaPlus />
                  </button>
                  <span>{item.qty}</span>
                  <button onClick={() => handleDecreaseQty(item.id)}>
                    <FaMinus />
                  </button>
                </div>
              </div>
            );
          })
        )}
      </div>
      {cartItems.length > 0 && (
        <div className="rightBar">
          <h3>Total Items</h3>
          <h6>total: {totalItem}</h6>
          <h4>Total Price: ${total}</h4>
          <button onClick={handleClearAll}>Remove All</button>
          <button>
            <Link to = {"/checkout"}>Prceed to Buy</Link>
            </button>
            
        </div>
      )}
    </>
  );
};

export default Cart;
