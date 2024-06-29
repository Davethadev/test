import Balances from "@/components/Balances";
import TotalActiveEmployees from "@/components/TotalActiveEmployees";
import { useState } from "react";

const Dashboard = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");

  return (
    <div className="px-4 pt-6 bg-lightGrey h-screen overflow-hidden overflow-y-auto">
      <p className="open-sans-normal text-2xl">
        Welcome back,{" "}
        <span className="text-4xl open-sans-bold text-primary">
          Tlag Entertainment{" "}
          <span className="inline-block">
            <img src="../wave.png" alt="" />
          </span>
        </span>
      </p>
      <p className="pt-3 pb-8 open-sans-normal">
        Here’s how your business is performing
      </p>
      <Balances />
      <div className="relative my-5">
        <input
          type="text"
          placeholder="Search"
          className="w-full md:w-72 h-auto border-[1px] bg-white border-primary rounded-md text-sm poppins-regular placeholder:text-sm placeholder:poppins-regular text-black placeholder:text-gray focus:outline-none indent-8 py-1"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <span className="absolute left-4 top-2 md:top-2.5">
          <img src="./search.svg" alt="" />
        </span>
      </div>
      <TotalActiveEmployees searchQuery={searchQuery} />
    </div>
  );
};

export default Dashboard;
