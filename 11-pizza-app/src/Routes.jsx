import { createBrowserRouter } from "react-router-dom";

import Home from "./ui/Home";
import Menu from "./features/menu/Menu";
import Order from "./features/order/Order";
import CreateOrder, {
  action as createOrderAction,
} from "./features/order/CreateOrder";
import Cart from "./features/cart/Cart";
import AppLayout from "./ui/AppLayout";
import menuLoader from "./services/loaders/menuLoader";
import orderLoader from "./services/loaders/orderLoader";
import Error from "./ui/Error";

const routes = createBrowserRouter([
  {
    // Master Page
    element: <AppLayout />,
    // Global Error Page
    errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/menu",
        element: <Menu />,
        loader: menuLoader,
        // error msg displaed inside master page
        errorElement: <Error />,
      },
      { path: "/cart", element: <Cart /> },
      {
        path: "/order/new",
        element: <CreateOrder />,
        action: createOrderAction,
      },
      {
        path: "/order/:orderId",
        element: <Order />,
        loader: orderLoader,
        errorElement: <Error />,
      },
    ],
  },
]);

export default routes;
