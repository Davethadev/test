import { useState } from "react";
import { useLocation } from "react-router-dom";
import { SquareMenu } from "lucide-react";
import { useSheet } from "@/hooks/useSheet";
import { useAlertDialog } from "@/hooks/useAlertDialog";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Topbar = () => {
  const location = useLocation();
  const { onOpen } = useAlertDialog();
  const { onSheetOpen } = useSheet();
  const [isNotification, setIsNotification] = useState(true);

  const handleLogout = () => {
    onOpen();
  };

  return (
    <div className="h-16 w-full px-4 sm:px-6 bg-white shadow-md flex items-center justify-between sticky top-0 z-50">
      <div className="flex items-center gap-6">
        <button className="xl:hidden" onClick={onSheetOpen}>
          <SquareMenu />
        </button>
        <div className="hidden sm:flex items-center gap-2">
          <span className="text-xl text-grey">
            <img
              src={
                location.pathname === "/" || location.pathname === "/dashboard"
                  ? "../dashboard-layout.png"
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
      </div>
      <div className="flex items-center gap-8 lg:pr-12">
        <Popover>
          <PopoverTrigger onClick={() => setIsNotification(false)}>
            <span className="relative h-8 w-8 bg-primary text-white rounded-full flex justify-center items-center">
              <img src="../bell.svg" alt="" className="w-4" />
              {isNotification && (
                <span className="h-3 w-3 rounded-full bg-red-500 border-2 border-white absolute -top-[3px] -right-[3px]"></span>
              )}
            </span>
          </PopoverTrigger>
          <PopoverContent>
            <h3 className="poppins-medium text-base">Your Notifications</h3>
            <div className="w-full h-[1px] bg-gray my-2"></div>
            <p className="poppins-regular text-sm">This is a notification</p>
          </PopoverContent>
        </Popover>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="flex items-center gap-2">
              <span>
                <img src="../profile-photo.png" alt="" className="w-10" />
              </span>
              <div className="hidden sm:flex items-center gap-2">
                <p className="open-sans-normal">Tlag Entertainment</p>
                <span>
                  <img src="./arrow-down.svg" alt="" />
                </span>
              </div>
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel className="open-sans-bold text-base">
              My Account
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem className="raleway-regular text-sm">
                Profile
                <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem className="raleway-regular text-sm">
                Settings
                <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              className="raleway-regular text-sm text-red-500"
              onClick={handleLogout}
            >
              Log out
              <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default Topbar;
