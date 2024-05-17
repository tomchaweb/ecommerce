import { useState, useEffect } from "react";

import TrashIcon from "./svg/TrashIcon";
import CartPlusIcon from "./svg/CartPlusIcon";

export default function WishlistCard({
  id,
  img,
  name,
  price,
  handleDelete,
  handleAddToCart,
}) {
  const [isMobile, setIsMobile] = useState(true);

  function handleResize() {
    if (window.innerWidth < 750) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }

  useEffect(() => {
    if (window.innerWidth > 750) {
      setIsMobile(false);
    } else {
      setIsMobile(true);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });
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
        {!isMobile ? (
          "Add to cart"
        ) : (
          <CartPlusIcon size={16} color={"currentColor"} />
        )}
      </button>
    </div>
  );
}
