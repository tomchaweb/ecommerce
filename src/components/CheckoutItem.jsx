export default function CheckoutItem({ id, name, price, img, quantity }) {
  return (
    <div className="checkout-item-card">
      <div className="checkout-item-left">
        <img src={img}></img>
        <h2>{name}</h2>
      </div>
      <div className="checkout-item-right">
        <h4>{quantity}</h4>
        <h3>{price}</h3>
      </div>
    </div>
  );
}
