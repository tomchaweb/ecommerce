import { useContext, useEffect, useState } from "react";
import { CartContext } from "../App";
import data from "../data";
import CheckoutItem from "../components/CheckoutItem";
import Footer from "../components/Footer";

export default function Checkout() {
  const { cart, setCart } = useContext(CartContext);
  const [cartItems, setCartItems] = useState([]);

  let tempCartItems = [];

  cart.forEach((cartItem) => {
    let currentProduct = data.find((item) => item.id === cartItem.id);
    tempCartItems.push({
      id: currentProduct.id,
      name: currentProduct.name,
      price: currentProduct.price,
      quantity: cartItem.quantity,
      images: currentProduct.images,
    });
  });

  useEffect(() => {
    setCartItems(tempCartItems);
  }, [cart]);

  let totalCheckoutPrice = cartItems.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  return (
    <>
      <div className="checkout">
        <div className="checkout-items">
          <h1>Cart</h1>
          {cartItems.map((item) => {
            return (
              <CheckoutItem
                key={item.id}
                id={item.id}
                name={item.name}
                price={item.price}
                img={item.images[0]}
                quantity={item.quantity}
              />
            );
          })}
          <div className="checkout-total">
            <span>Total: {totalCheckoutPrice}</span>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
