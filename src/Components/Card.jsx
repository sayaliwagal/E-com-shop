import { useContext } from "react";
import { Link } from "react-router";
import CartContext from "../Utils/Context/CartContext";
import { FaRegHeart } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { addToCart } from "../Features/cart/cartSlice";

export const Card = (props) => {
  const dispatch = useDispatch();

  const handleAdd = (products)=>{
    dispatch(addToCart(products))
  }
  // console.log(props);
  const {products} = props;
  const {thumbnail, title, category, price, rating, id} = products;
  const { addWishList} = useContext(CartContext);
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
          <button onClick={() => addWishList(products)}> <FaRegHeart size={30}/></button>
          
          </div>
        </>
      )
};


