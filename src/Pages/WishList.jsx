import React, { useContext } from "react";
import CartContext from "../Utils/Context/CartContext";
import { useSelector } from "react-redux";

const WishList = () => {
  const wishListItems = useSelector((state) => state.wishList.items);
  const { 
    // wishList,
     removeWishList, moveToCart } = useContext(CartContext);

  if (wishListItems.length === 0) {
    return <h1> WishList is Empty</h1>;
  }

  return (
    <div className="main-card">
      {wishListItems.length === 0 ? (
        <h1>Wish List is Empty</h1>
      ) : (
        wishListItems?.map((item) => {
          return (
            <div className="card" key={item?.id}>
              <img src={item?.thumbnail} alt={item?.title} className="cardImg" />
              <h3 className="resturentName">{item?.title}</h3>
              <h3 className="have">{item?.category}</h3>
              <h3>$ {item?.price}</h3>
              <button onClick={() => {
                  removeWishList(item);
               }} >
                Remove
              </button>
               <button onClick={() => {
                  moveToCart(item);
               }} >
                Move to Cart 
              </button>
            </div>
          );
        })
      )}

    </div>
  );
};

export default WishList;
