export const Card = (props) => {
  const {products} = props;
  // console.log(products)
  const {image, title, category, price, rating} = products;
      return(
        <>
          <div className="card">
            <img src={image} alt={title} className="cardImg" />
            <h3 className="resturentName">{title}</h3>
            <h3 className="have">{category}</h3>
            <h3>$ {price}</h3>
            <p className="rating">{rating.rate}</p>
          </div>
        </>
      )
};


