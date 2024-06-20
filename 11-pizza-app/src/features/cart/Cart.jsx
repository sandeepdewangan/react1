import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCart } from "./cartSlice";
import CartItem from "./CartItem";

function Cart() {
  const cart = useSelector(getCart);
  return (
    <div>
      {cart.map((item) => (
        <CartItem item={item} key={item.pizzaId} />
      ))}
      <br />
      <Link to="/menu">Go to Menu</Link>
    </div>
  );
}

export default Cart;
