import { useDispatch } from "react-redux";
import { addItem } from "../cart/cartSlice";

function MenuItem({ pizza }) {
  const dispatch = useDispatch();

  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  function handleAddToCart() {
    const newItem = {
      pizzaId: id,
      name,
      qty: 1,
      unitPrice,
      totalPrice: unitPrice * 1,
    };
    dispatch(addItem(newItem));
  }
  return (
    <>
      <li>
        <img src={imageUrl} />
        <div>
          <p>{name}</p>
          <p>{ingredients.join(", ")}</p>
          <div>
            {soldOut}, {unitPrice}, {id}
          </div>
          <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
      </li>
    </>
  );
}

export default MenuItem;
