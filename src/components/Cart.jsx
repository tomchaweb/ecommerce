import { useState, useContext, useEffect } from "react";
import { CartContext } from "../App";

import data from "../data";
import CartItem from "./CartItem";
import CloseIcon from "./svg/CloseIcon";
import { Link } from "react-router-dom";
import EmptyBagIcon from "./svg/EmptyBagIcon";
import ChevronRightIcon from "./svg/ChevronRightIcon";

export default function Cart({ closeSidebar }) {
  const { cart, setCart } = useContext(CartContext);
  const [totalCartItems, setTotalCartItems] = useState(0);

  useEffect(() => {
    if (cart.length > 0) {
      let totalQuantity = cart.reduce((total, item) => {
        return total + item.quantity;
      }, 0);
      setTotalCartItems(totalQuantity);
    }
  }, [cart]);

  let total = 0;
  const [totalValue, setTotalValue] = useState(total);

  function getTotal() {
    if (cart.length > 0) {
      cart.forEach((product) => {
        let currentProduct = data.find((item) => item.id === product.id);
        total += currentProduct.price * product.quantity;
      });
    }
  }

  getTotal();
  useEffect(() => {
    setTotalValue(total);
  }, [cart]);

  function deleteCartItem(id) {
    setCart((prevItems) => {
      return prevItems.filter((item) => {
        return item.id != id;
      });
    });
  }

  function lowerItemQuantity(productId) {
    if (cart.find((item) => item.id === productId)) {
      let currentItem = cart.find((item) => item.id === productId);
      let updatedCart = cart.map((item) => {
        if (item.id === productId && currentItem.quantity > 1) {
          return { id: item.id, quantity: item.quantity - 1 };
        } else {
          return { id: item.id, quantity: item.quantity };
        }
      });
      setCart(updatedCart);
    }
  }

  function addItemQuantity(productId) {
    if (cart.find((item) => item.id === productId)) {
      let updatedCart = cart.map((item) => {
        if (item.id === productId) {
          return { id: item.id, quantity: item.quantity + 1 };
        } else {
          return { id: item.id, quantity: item.quantity };
        }
      });
      setCart(updatedCart);
    }
  }

  return (
    <div className="cart">
      <div className="cart-header">
        <div className="cart-header-text">
          <h2>Cart</h2>
          <span>{totalCartItems}</span>
        </div>
        <button onClick={closeSidebar}>
          <CloseIcon size={16} color={"currentColor"} />
        </button>
      </div>
      <div className="cart-main">
        {cart.length > 0 ? (
          cart.map((product) => {
            let currentProduct = data.find((item) => item.id === product.id);
            return (
              <CartItem
                key={currentProduct.id}
                id={currentProduct.id}
                img={currentProduct.images[0]}
                name={currentProduct.name}
                quantity={product.quantity}
                price={currentProduct.price}
                handleLowerQuantity={lowerItemQuantity}
                handleAddQuantity={addItemQuantity}
                handleDelete={deleteCartItem}
              />
            );
          })
        ) : (
          <div className="empty-cart">
            <EmptyBagIcon size={24} color={"currentColor"} />
            <h2>Your cart is empty</h2>
            <Link to="products" onClick={closeSidebar}>
              Start shopping
              <ChevronRightIcon size={12} color={"currentColor"} />
            </Link>
          </div>
        )}
      </div>
      <div className="cart-footer">
        <span>Subtotal:</span>
        <span>£{totalValue}</span>
      </div>
      <div className="checkout-btn-container">
        <Link to="checkout" onClick={closeSidebar}>
          <button className="checkout-btn">Checkout</button>
        </Link>
      </div>
    </div>
  );
}
