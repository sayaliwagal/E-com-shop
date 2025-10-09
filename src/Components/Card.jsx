import { Link } from "react-router";

export const Card = (props) => {
  const {products, addToCart} = props;
  // console.log(products)
  const {thumbnail, title, category, price, rating, id} = products;
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
          <button onClick={() => addToCart(products)}>Add To Cart</button>
          </div>
        </>
      )
};


