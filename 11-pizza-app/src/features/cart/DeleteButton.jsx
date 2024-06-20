import { useDispatch } from "react-redux";
import { deleteItem } from "./cartSlice";

import "./Cart.css";

function DeleteButton({ pizzaId }) {
  const dispatch = useDispatch();
  return <button onClick={() => dispatch(deleteItem(pizzaId))}>DELETE</button>;
}

export default DeleteButton;
