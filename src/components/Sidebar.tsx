import { sidebarLinks } from "@/constants/sidebarLinks";

const Sidebar = () => {
  return (
    <aside className="w-1/6 bg-primary p-6">
      <div>
        <img src="./logo.svg" alt="" />
      </div>
      <div className="space-y-8 pt-10">
        {sidebarLinks.map((link) => {
          const { icon, name } = link;
          return (
            <div className="flex items-center gap-4">
              <span className="text-xl text-grey">
                <img src={icon} alt="" />
              </span>
              <span className="open-sans-normal text-grey text-sm">{name}</span>
            </div>
          );
        })}
      </div>
      <div className="flex items-center gap-4 pt-16">
        <span className="text-xl text-grey">
          <img src="./power-off.svg" alt="" />
        </span>
        <span className="open-sans-normal text-grey text-sm">Logout</span>
      </div>
    </aside>
  );
};

export default Sidebar;
