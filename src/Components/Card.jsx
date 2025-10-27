import { useContext } from "react";
import { Link } from "react-router";
import CartContext from "../Utils/Context/CartContext";
import { FaRegHeart } from "react-icons/fa6";


export const Card = (props) => {
  // console.log(props);
  const {products} = props;
  const {thumbnail, title, category, price, rating, id} = products;
  const {addCart, addWishList} = useContext(CartContext);
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
          <button onClick={() => addCart(products)}>Add To Cart</button>
          <button onClick={() => addWishList(products)}> <FaRegHeart size={30}/></button>
          
          </div>
        </>
      )
};


