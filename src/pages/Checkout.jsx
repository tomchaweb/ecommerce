import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../App";
import data from "../data";
import CheckoutItem from "../components/CheckoutItem";
import Footer from "../components/Footer";

import EmptyBagIcon from "../components/svg/EmptyBagIcon";
import ChevronRightIcon from "../components/svg/ChevronRightIcon";
import CreditCardIcon from "../components/svg/CreditCardIcon";
import PaypalIcon from "../components/svg/PaypalIcon";
import ScrollToTop from "../components/ScrollToTop";

export default function Checkout() {
  const { cart, setCart } = useContext(CartContext);
  const [cartItems, setCartItems] = useState([]);
  const [paymentChoice, setPaymentChoice] = useState();

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

  function deleteCartItem(currentId) {
    setCart((prevItems) => {
      return prevItems.filter((item) => {
        return item.id != currentId;
      });
    });
  }

  function checkPaymentType(e) {
    let { id } = e.target;
    if (id === "card") {
      setPaymentChoice("card");
    } else if (id === "paypal") {
      setPaymentChoice("paypal");
    }
  }

  return (
    <>
      <ScrollToTop />
      {cart.length > 0 ? (
        <div className="checkout">
          <div className="checkout-items">
            <h1>Shopping Cart</h1>
            <div className="checkout-items-main">
              {cartItems.map((item) => {
                return (
                  <CheckoutItem
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    price={item.price}
                    img={item.images[0]}
                    quantity={item.quantity}
                    handleDelete={deleteCartItem}
                  />
                );
              })}
            </div>
            <div className="checkout-total">
              <span>Total: £{totalCheckoutPrice}.00</span>
            </div>
          </div>
          <div className="checkout-payment">
            <h1>Payment Info</h1>
            <div className="payment-radio-container">
              <h2>Payment Method:</h2>
              <label className="radio-container">
                <span className="radio-container-label">
                  <CreditCardIcon size={24} color={"currentColor"} />
                  Credit Card
                </span>
                <input
                  type="radio"
                  onClick={checkPaymentType}
                  name="payment-choice"
                  id="card"
                ></input>
                <span className="checkmark"></span>
              </label>
              <label className="radio-container">
                <span className="radio-container-label">
                  <PaypalIcon size={24} color={"currentColor"} />
                  Paypal
                </span>
                <input
                  type="radio"
                  onClick={checkPaymentType}
                  name="payment-choice"
                  id="paypal"
                ></input>
                <span className="checkmark"></span>
              </label>
            </div>
            <button className="checkout-btn">Checkout</button>
          </div>
        </div>
      ) : (
        <div className="empty-checkout-cart">
          <EmptyBagIcon size={36} color={"currentColor"} />
          <h2>Your cart is empty</h2>
          <Link to="/products">
            Start shopping
            <ChevronRightIcon size={20} color={"currentColor"} />
          </Link>
        </div>
      )}

      <Footer />
    </>
  );
}
