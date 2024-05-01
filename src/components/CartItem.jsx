import DashIcon from "./svg/DashIcon";
import PlusIcon from "./svg/PlusIcon";
import TrashIcon from "./svg/TrashIcon";

export default function CartItem({
  id,
  img,
  name,
  quantity,
  price,
  handleDelete,
  handleAddQuantity,
  handleLowerQuantity,
}) {
  return (
    <div className="cart-item">
      <img src={img} alt={name}></img>
      <div className="cart-item-text">
        <h2>{name}</h2>
        <h3>
          {quantity}x£{price}
        </h3>
      </div>
      <button
        onClick={() => {
          handleLowerQuantity(id);
        }}
      >
        <DashIcon size={16} color={"currentColor"} />
      </button>
      <button
        onClick={() => {
          handleAddQuantity(id);
        }}
      >
        <PlusIcon size={16} color={"currentColor"} />
      </button>
      <button
        onClick={() => {
          handleDelete(id);
        }}
      >
        <TrashIcon size={16} color={"currentColor"} />
      </button>
    </div>
  );
}
