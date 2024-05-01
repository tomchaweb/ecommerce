import { useContext, useState, useEffect } from "react";
import { CartContext, WishlistContext } from "../App";
import { Link } from "react-router-dom";
import HeartBreakIcon from "../components/svg/HeartBreakIcon";
import WishlistCard from "../components/WishListCard";
import HeartFillIcon from "../components/svg/HeartFillIcon";
import Footer from "../components/Footer";

export default function Wishlist() {
  const { wishlist, setWishlist } = useContext(WishlistContext);
  const { cart, setCart } = useContext(CartContext);

  function deleteFromWishlist(id) {
    setWishlist((prevItems) => {
      return prevItems.filter((item) => {
        return item.id != id;
      });
    });
  }

  function addToCart(currentId) {
    setCart((prevItems) => {
      return [...prevItems, { id: currentId, quantity: 1 }];
    });
  }

  return (
    <>
      <div className="wishlist">
        {wishlist.length > 0 ? (
          <>
            <h1>
              My Wishlist <HeartFillIcon size={36} color={"currentcolor"} />
            </h1>
            <div className="wishlist-items">
              {wishlist.map((item) => {
                return (
                  <WishlistCard
                    key={item.id}
                    id={item.id}
                    img={item.images[0]}
                    name={item.name}
                    price={item.price}
                    handleDelete={deleteFromWishlist}
                    handleAddToCart={addToCart}
                  />
                );
              })}
            </div>
          </>
        ) : (
          <div className="empty-wishlist">
            <HeartBreakIcon size={64} color={"currentColor"} />
            <h1>You don't have anything in your wishlist.</h1>
            <Link to="/products">View our products</Link>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}
