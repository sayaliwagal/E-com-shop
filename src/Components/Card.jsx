import { useContext } from "react";
import { Link } from "react-router";
import CartContext from "../Utils/Context/CartContext";
import { FaRegHeart } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../Features/cart/cartSlice";
import { addToWishList } from "../Features/wishlist/wishlistSlice.js";

export const Card = (props) => {
  const dispatch = useDispatch();
  const wishListItems = useSelector((state) => state.wishList.items);
 

  const handleAdd = (products)=>{
    dispatch(addToCart(products));

  };

  const handleAddWishList = (products)=>{
    dispatch(addToWishList(products));
  };
 
  // console.log(props);
  const {products} = props;
  const {thumbnail, title, category, price, rating, id} = products;
  // const { addWishList} = useContext(CartContext);
   const isLiked = wishListItems.some((item)=> item.id === products.id);
      return(
        <>
          <div className="card">
              <Link
                to={`/products/${title.split(" ").join("-")}/${id}`}
              >
            <img src={thumbnail} alt={title} className="cardImg" />
            <h3 className="resturentName">{title}</h3>
            <h3 className="have">{category}</h3>
            <h3>$ {price}</h3>
            <p className="rating">{rating.rate}</p>
          </Link>
          <p>{props.children}</p>
          <button onClick={() => handleAdd(products)}>Add To Cart</button>
          <button onClick={() => handleAddWishList(products)}
             className={`p-4 rounded-full font-semibold shadow transition-all duration-300
                      ${isLiked ? "bg-red-100" : "bg-gray-200 hover:bg-gray-300"}`}> <FaRegHeart size={30}
                      className={`transition-all duration-300 ${
                                    isLiked
                                      ? "text-red-500 animate-pingOnce"
                                      : "text-gray-400"
                                  }`}/></button>
        
          </div>
        </>
      )
};


