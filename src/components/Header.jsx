import { NavLink, Outlet } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import Cart from "./Cart";
import Overlay from "./Overlay";
import { CartContext, WishlistContext } from "../App";
import EmptyBagIcon from "./svg/EmptyBagIcon";
import FullBagIcon from "./svg/FullBagIcon";
import HeartIcon from "./svg/HeartIcon";
import UserIcon from "./svg/UserIcon";
import HeartFillIcon from "./svg/HeartFillIcon";
import BurgerMenuIcon from "./svg/BurgerMenuIcon";

export default function Header() {
  const [cartVisiblity, setCartVisibility] = useState(false);
  const [overlayVisibility, setOverlayVisibility] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  const { cart, setCart } = useContext(CartContext);
  const { wishlist, setWishlist } = useContext(WishlistContext);

  const [totalCartItems, setTotalCartItems] = useState(0);

  useEffect(() => {
    let totalQuantity = cart.reduce((total, item) => {
      return total + item.quantity;
    }, 0);
    setTotalCartItems(totalQuantity);
  }, [cart]);

  function handleResize() {
    if (window.innerWidth > 750) {
      setIsMobile(false);
    } else {
      setIsMobile(true);
    }
  }

  useEffect(() => {
    if (window.innerWidth < 750) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });

  function toggleCartVisibility() {
    if (cartVisiblity === false) {
      setCartVisibility(true);
      setOverlayVisibility(true);
    } else {
      setCartVisibility(false);
      setOverlayVisibility(false);
    }
  }

  return (
    <>
      <header>
        <div className="header-left">
          <NavLink to="/">
            <h1>Modal</h1>
          </NavLink>
          {!isMobile && (
            <>
              <NavLink to="/about">About Us</NavLink>
              <NavLink to="/products">Products</NavLink>
            </>
          )}
          {isMobile && <BurgerMenuIcon size={24} color={"currentColor"} />}
        </div>
        <ul>
          <div className="cart-icon-container">
            <button onClick={toggleCartVisibility}>
              {cart.length === 0 ? (
                <EmptyBagIcon size={24} color={"currentColor"} />
              ) : (
                <FullBagIcon size={24} color={"currentColor"} />
              )}
            </button>
            {<span>{cart.length > 0 ? `(${totalCartItems})` : null}</span>}
          </div>
          <div className="wishlist-icon-container">
            <NavLink to="/wishlist">
              {wishlist.length === 0 ? (
                <HeartIcon size={24} color={"currentColor"} />
              ) : (
                <HeartFillIcon size={24} color={"currentColor"} />
              )}
            </NavLink>
            {<span>{wishlist.length > 0 ? `(${wishlist.length})` : null}</span>}
          </div>
          <NavLink to="/profile">
            <UserIcon size={24} color={"currentColor"} />
          </NavLink>
        </ul>
      </header>
      {cartVisiblity && <Cart closeSidebar={toggleCartVisibility} />}
      {overlayVisibility && <Overlay />}
      <main>
        <Outlet />
      </main>
    </>
  );
}
