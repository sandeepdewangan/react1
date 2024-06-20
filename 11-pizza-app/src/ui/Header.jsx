import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";

function Header() {
  return (
    <div className="flex items-center justify-between px-8 uppercase bg-orange-400 border-b">
      <Link to="/" className="text-xl font-medium tracking-widest">
        SKD Pizza Co.
      </Link>
      <SearchOrder />
      <Username />
    </div>
  );
}

export default Header;
