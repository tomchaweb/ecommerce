import StarFillIcon from "./svg/StarFillIcon";
import StarIcon from "./svg/StarIcon";

function ProductCard({ id, name, img, price, rating }) {
  let ratingStars = [];
  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      ratingStars.push(
        <StarFillIcon key={i} size={16} color={"currentColor"} />
      );
    } else {
      ratingStars.push(<StarIcon key={i} size={16} color={"currentColor"} />);
    }
  }
  return (
    <div className="product-card">
      <div className="product-card-img-container">
        <img src={img} alt={name}></img>
      </div>
      <div className="product-card-text">
        <h3>{name}</h3>
        <div className="stars">{ratingStars}</div>
        <h4>£{price}</h4>
      </div>
    </div>
  );
}

export default ProductCard;
