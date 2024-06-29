import "./index.css";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import YourBusiness from "./pages/YourBusiness";
import Disbursement from "./pages/Disbursement";
import Collections from "./pages/Collections";
import ECommerce from "./pages/E-commerce";
import Loan from "./pages/Loan";
import Settings from "./pages/Settings";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/business/me",
        element: <YourBusiness />,
      },
      {
        path: "/disbursement",
        element: <Disbursement />,
      },
      {
        path: "/collections",
        element: <Collections />,
      },
      {
        path: "/e-commerce",
        element: <ECommerce />,
      },
      {
        path: "/loan",
        element: <Loan />,
      },
      {
        path: "/settings",
        element: <Settings />,
      },
    ],
  },
]);

createRoot(document.getElementById("root") as HTMLElement).render(
  <RouterProvider router={router} />
);
