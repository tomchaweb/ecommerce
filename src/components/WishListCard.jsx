import TrashIcon from "./svg/TrashIcon";

export default function WishlistCard({
  id,
  img,
  name,
  price,
  handleDelete,
  handleAddToCart,
}) {
  return (
    <div className="wishlist-card">
      <div className="wishlist-card-main">
        <button
          className="remove-from-wishlist-btn"
          onClick={() => {
            handleDelete(id);
          }}
        >
          <TrashIcon size={24} color={"currentColor"} />
        </button>
        <img src={img}></img>
        <h1>{name}</h1>
      </div>
      <h2>£{price}.00</h2>
      <button
        className="wishlist-add-to-cart-btn"
        onClick={() => {
          handleAddToCart(id);
        }}
      >
        Add to cart
      </button>
    </div>
  );
}
