import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import { Outlet } from "react-router-dom";
import { LogoutAlertDialog } from "./LogoutAlertDialog";
import { MobileSidebar } from "./SidebarMobile";

const Layout = () => {
  return (
    <>
      <MobileSidebar />
      <LogoutAlertDialog />
      <main className="flex h-screen overflow-hidden">
        <Sidebar />
        <div className="w-full xl:w-5/6">
          <Topbar />
          <Outlet />
        </div>
      </main>
    </>
  );
};

export default Layout;
