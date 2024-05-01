import { useState, createContext, useEffect } from "react";

import {
  RouterProvider,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import "./styles.css";

import ProductPage from "./pages/ProductPage";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Wishlist from "./pages/Wishlist";
import Profile from "./pages/Profile";
import PageNotFound from "./pages/PageNotFound";

import Header from "./components/Header";
import Checkout from "./pages/Checkout";

export const CartContext = createContext();
export const WishlistContext = createContext();

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Header />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />

      <Route path="products">
        <Route index element={<Products />} />
        <Route path=":id" element={<ProductPage />}></Route>
      </Route>

      <Route path="wishlist" element={<Wishlist />}></Route>
      <Route path="profile" element={<Profile />}></Route>

      <Route path="checkout" element={<Checkout />}></Route>

      <Route path="*" element={<PageNotFound />} />
    </Route>
  )
);

function App() {
  const [cart, setCart] = useState(getInitialCart);
  function getInitialCart() {
    const cart = localStorage.getItem("cart");
    return cart ? JSON.parse(cart) : [];
  }
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const [wishlist, setWishlist] = useState(getInitialWishlist);
  function getInitialWishlist() {
    const wishlist = localStorage.getItem("wishlist");
    return wishlist ? JSON.parse(wishlist) : [];
  }
  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      <WishlistContext.Provider value={{ wishlist, setWishlist }}>
        <RouterProvider router={router} />
      </WishlistContext.Provider>
    </CartContext.Provider>
  );
}

export default App;
