import { NavLink } from "react-router-dom";
import { sidebarLinks } from "@/constants/sidebarLinks";

import { useAlertDialog } from "@/hooks/useAlertDialog";

const Sidebar = () => {
  const { onOpen } = useAlertDialog();

  const handleLogout = () => {
    onOpen();
  };

  return (
    <aside className="w-1/6 bg-primary py-6 sidebar hidden xl:block">
      <div className="px-6">
        <img src="../logo.svg" alt="" />
      </div>
      <div className="grid grid-cols-1 gap-8 pt-10">
        {sidebarLinks.map((link, index) => {
          const { icon, name } = link;
          return (
            <NavLink
              to={
                index === 0
                  ? "/dashboard"
                  : index === 1
                  ? "/business/me"
                  : index === 2
                  ? "/disbursement"
                  : index === 3
                  ? "/collections"
                  : index === 4
                  ? "/e-commerce"
                  : index === 5
                  ? "/loan"
                  : index === 6
                  ? "/settings"
                  : "/"
              }
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
              key={index}
            >
              <div className="flex items-center gap-4 hover:bg-white text-grey hover:text-primary px-4 py-2 rounded-lg w-[80%] mx-auto">
                <span className="text-xl text-grey">
                  <img src={icon} alt="" />
                </span>
                <span className="open-sans-normal text-sm">{name}</span>
              </div>
            </NavLink>
          );
        })}
      </div>
      <div
        onClick={handleLogout}
        className="flex items-center gap-4 hover:bg-white text-grey hover:text-primary hover:cursor-pointer px-4 py-2 rounded-lg w-[80%] mx-auto mt-12"
      >
        <span className="text-xl text-grey">
          <img src="../power-off.svg" alt="" />
        </span>
        <span className="open-sans-normal text-sm">Logout</span>
      </div>
    </aside>
  );
};

export default Sidebar;
