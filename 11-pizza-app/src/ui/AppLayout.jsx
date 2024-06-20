import { Outlet, useNavigation } from "react-router-dom";
import Header from "./Header";
import Loader from "./Loader";
import CartSummary from "../features/cart/CartSummary";

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  return (
    <div className="grid grid-rows-[auto-2fr-auto] h-screen">
      {isLoading && <Loader />}
      <Header />
      <main className="overflow-scroll">
        <Outlet />
      </main>
      <CartSummary />
    </div>
  );
}

export default AppLayout;
