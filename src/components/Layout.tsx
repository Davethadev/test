import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import { Outlet } from "react-router-dom";
import { LogoutAlertDialog } from "./LogoutAlertDialog";

const Layout = () => {
  return (
    <>
      <LogoutAlertDialog />
      <main className="flex h-screen">
        <Sidebar />
        <div className="w-5/6 h-screen overflow-hidden overflow-y-auto">
          <Topbar />
          <Outlet />
        </div>
      </main>
    </>
  );
};

export default Layout;
