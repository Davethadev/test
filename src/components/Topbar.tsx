import { useLocation } from "react-router-dom";

const Topbar = () => {
  const location = useLocation();

  return (
    <div className="h-16 w-full pl-8 bg-white shadow-md flex items-center justify-between">
      <div className="flex items-center gap-2">
        <span className="text-xl text-grey">
          <img
            src={
              location.pathname === "/" || location.pathname === "/dashboard"
                ? "../layout-dashboard.svg"
                : location.pathname === "/business/me"
                ? "../business.svg"
                : location.pathname === "/disbursement"
                ? "../exchange.svg"
                : location.pathname === "/collections"
                ? "../collections.svg"
                : location.pathname === "/e-commerce"
                ? "../commerce.svg"
                : location.pathname === "/loan"
                ? "../loan.svg"
                : location.pathname === "/settings"
                ? "../settings.svg"
                : ""
            }
            alt=""
          />
        </span>
        <h1 className="open-sans-bolder text-lg text-primary">
          {location.pathname === "/" || location.pathname === "/dashboard"
            ? "Dashboard"
            : location.pathname === "/business/me"
            ? "Your Business"
            : location.pathname === "/disbursement"
            ? "Disbursement"
            : location.pathname === "/collections"
            ? "Collections"
            : location.pathname === "/e-commerce"
            ? "E-Commerce"
            : location.pathname === "/loan"
            ? "Loan"
            : location.pathname === "/settings"
            ? "Settings"
            : ""}
        </h1>
      </div>
      <div className="flex items-center gap-8 pr-12">
        <span className="relative h-8 w-8 bg-primary text-white rounded-full flex justify-center items-center">
          <img src="../bell.svg" alt="" className="w-4" />
          <span className="h-3 w-3 rounded-full bg-red-500 border-2 border-white absolute -top-[3px] -right-[3px]"></span>
        </span>
        <div className="flex items-center gap-2">
          <span>
            <img src="../profile-photo.png" alt="" className="w-10" />
          </span>
          <span>Tlag Entertainment</span>
          <span>
            <img src="./arrow-down.svg" alt="" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
