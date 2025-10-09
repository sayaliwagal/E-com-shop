import React from "react";

const Cart = ({ cart }) => {
  console.log(cart);
  return (
    <div className="main-card">
      {cart.length === 0 ? 
        <h1>Cart is Empty</h1>
       : 
        cart?.map((cart) => {
          return (
            <div className="card" key={cart?.id}>
            <img src={cart?.thumbnail} alt={cart?.title} className="cardImg" />
            <h3 className="resturentName">{cart?.title}</h3>
            <h3 className="have">{cart?.category}</h3>
            <h3>$ {cart?.price}</h3>
          </div>
          ) 
        })
      }
    </div>
  );
};

export default Cart;
