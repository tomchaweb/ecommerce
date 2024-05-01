import { useContext, useState } from "react";
import { CartContext } from "../App";

export default function Checkout() {
  const { cart, setCart } = useContext(CartContext);

  return <div className="checkout">Checkout</div>;
}
