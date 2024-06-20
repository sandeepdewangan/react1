import { useDispatch } from "react-redux";
import { decrItemQty, incrItemQty } from "./cartSlice";
import "./Cart.css";

function UpdateButton({ pizzaId }) {
  const dispatch = useDispatch();

  function handleInr() {
    dispatch(incrItemQty(pizzaId));
  }

  function handleDec() {
    dispatch(decrItemQty(pizzaId));
  }

  return (
    <>
      <button onClick={handleInr}>+</button>
      <button onClick={handleDec}>-</button>
    </>
  );
}

export default UpdateButton;
