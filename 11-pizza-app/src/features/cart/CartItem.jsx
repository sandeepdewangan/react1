import DeleteButton from "./DeleteButton";
import UpdateButton from "./UpdateButton";

function CartItem({ item }) {
  const { pizzaId, name, qty, unitPrice } = item;

  return (
    <div>
      <h1>
        {pizzaId} - {name} - Qty- {qty} - Rs. {unitPrice}
        <UpdateButton pizzaId={pizzaId} />
        <DeleteButton pizzaId={pizzaId} />
      </h1>
    </div>
  );
}

export default CartItem;
