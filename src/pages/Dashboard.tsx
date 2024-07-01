import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Cards from "@/components/Cards";
import TotalActiveEmployees from "@/components/TotalActiveEmployees";

const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/dashboard");
  }, []);

  return (
    <div className="px-4 sm:px-6 pt-6 bg-lightGrey">
      <Header />
      <Cards />
      <TotalActiveEmployees />
    </div>
  );
};

export default Dashboard;
