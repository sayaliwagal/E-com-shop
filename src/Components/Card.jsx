import { Link } from "react-router";
import { FaRegHeart } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
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
 
  console.log(props);
  const {products} = props;
  const {thumbnail, title, category, price, rating, id} = products;
   const isLiked = wishListItems.some((item)=> item.id === products.id);
      return(
        <>
          <div className="group relative w-full bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300 overflow-hidden flex flex-col">
               {/* Wishlist — floating badge over the image, Amazon/Flipkart style */}
              <Link
                to={`/products/${title.split(" ").join("-")}/${id}`}
                className="flex flex-col flex-1"
              >
                <div className="aspect-square w-full bg-gray-50 dark:bg-gray-900 p-4 flex items-center justify-center">
                      <img src={thumbnail} alt={title} 
                      className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300" />
                </div>
                {/* Details */}
                <div className="flex flex-col gap-1 px-3 pt-2 pb-1 flex-1">
                    <p className="text-sm font-medium text-gray-800 dark:text-gray-100">{title}</p>
                    <h3 className="text-[11px] uppercase tracking-wide text-gray-400 dark:text-gray-500">{category}</h3>
                    <p className="text-lg font-bold text-gray-900 dark:white mt-1">
                      $ {price}
                      </p>
                         {/* Rating pill — Flipkart-style green badge */}
              {rating != null &&(
                <div className="flex items-center gap-2 mt-0.5">
                  <span className="flex items-center gap-1 bg-green-600 text-white text-xs font-semibold px-1.5 py-0.5 rounded">
                    {rating} <FaStar size={12} />
                  </span>
                </div>
              )}
                </div>
              
          </Link>
          {props.children && (
            <div className="text-sm text-gray-500 dark:text-gray-400">
              <p>{props.children}</p>
            </div>
          )}
          <div className="px-3 pb-3 pt-1">
          <button onClick={() => handleAdd(products)}
            className="w-full py-2 rounded-md bg-[#F3A847] hover:bg-[#e6982f] text-[#131A22] text-sm font-semibold transition-colors duration-200">
              Add To Cart
          </button>
          </div>
          <button onClick={() => handleAddWishList(products)}
             className={`absolute top-2 right-2 z-10 p-2 rounded-full shadow transition-all duration-300
                      ${isLiked ? "bg-red-100" : "bg-gray-200 hover:bg-gray-300"}`}> <FaRegHeart size={30}
                      className={`transition-all duration-300 ${
                                    isLiked
                                      ? "text-red-500 animate-pingOnce"
                                      : "text-gray-400 group-hover:text-gray-600"
                                  }`}/></button>
        
          </div>
        </>
      )
};


