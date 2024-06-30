import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";
import { LogoutAlertDialog } from "./LogoutAlertDialog";
import { MobileSidebar } from "./SidebarMobile";

const Layout = () => {
  return (
    <>
      <Toaster position="top-right" />
      <MobileSidebar />
      <LogoutAlertDialog />
      <main className="flex">
        <Sidebar />
        <div className="w-full xl:w-5/6 h-screen overflow-hidden overflow-y-auto">
          <Topbar />
          <Outlet />
        </div>
      </main>
    </>
  );
};

export default Layout;
