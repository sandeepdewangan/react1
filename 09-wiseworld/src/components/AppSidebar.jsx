import { Outlet } from "react-router-dom";
import AppNav from "./AppNav";

function AppSidebar() {
  return (
    <div>
      SideBar
      <hr />
      <AppNav />
      {/* Through Outlet the nested routes are displayed */}
      <Outlet />
    </div>
  );
}

export default AppSidebar;
