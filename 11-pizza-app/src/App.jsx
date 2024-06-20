// 3rd party packages
import { RouterProvider } from "react-router-dom";
// own package
import routes from "./Routes";

function App() {
  return <RouterProvider router={routes} />;
}

export default App;
