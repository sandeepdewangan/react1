import { useSelector } from "react-redux";
import { getCartTotal, getTotalQty } from "./cartSlice";
import { Link } from "react-router-dom";

function CartSummary() {
  const totalQty = useSelector(getTotalQty);
  const cartTotal = useSelector(getCartTotal);

  return (
    <div className="flex items-center justify-between px-8 py-1 text-sm uppercase bg-stone-800 text-stone-50 md:text-base">
      <p> {`Total Qty in Cart: ${totalQty}`} </p>
      <p> {`Total Price: ${cartTotal}`} </p>
      <Link to="/cart">Go to Cart</Link>
    </div>
  );
}

export default CartSummary;
