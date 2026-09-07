import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router";
import { FaRegHeart } from "react-icons/fa6";
import {Card} from "../../Components/Card.jsx";
import { removeFromWishList, moveToCart } from "./wishlistSlice.js";

const WishList = () => {
  const wishListItems = useSelector((state) => state.wishList.items);
  const dispatch = useDispatch();
const handleRemoveFromWishList = (item) => {
  dispatch(removeFromWishList(item)); 
}; 
const handleMoveToCart = (items) => {
  dispatch(moveToCart(items));
};

//Empty state

  if (wishListItems.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 flex flex-col item-center text-center">
        <FaRegHeart size={76} className="mx-auto text-gray-300 dark:text-gray-600" />
        <h1 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
          Your Wish List is Empty
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
        Save items you love by tapping the heart icon. You can view them here later.
        </p>
        <Link
          to="/"
          className="px-5 py-2 rounded-md bg-[#F3A847] hover:bg-[#F3A847]/90 text-[#131A22] text-sm font-semibold transition-colors duration-200">
          Continue Shopping
          </Link>
      </div>
    )
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
                  handleRemoveFromWishList(item);
               }} >
                Remove
              </button>
               <button onClick={() => {
                  handleMoveToCart(item);
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
