import CloseIcon from "./svg/CloseIcon";

export default function CheckoutItem({
  id,
  name,
  price,
  img,
  quantity,
  handleDelete,
}) {
  return (
    <div className="checkout-item-card">
      <div className="checkout-item-left">
        <img src={img}></img>
        <h2>{name}</h2>
      </div>
      <div className="checkout-item-right">
        <h4>QTY:{quantity}</h4>
        <h3>£{price}.00</h3>
        <button
          onClick={() => {
            handleDelete(id);
          }}
        >
          <CloseIcon size={16} color={"currentColor"} />
        </button>
      </div>
    </div>
  );
}
