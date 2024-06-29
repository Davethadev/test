import Balances from "@/components/Balances";
import TotalActiveEmployees from "@/components/TotalActiveEmployees";

const Dashboard = () => {
  return (
    <div className="px-4 pt-6 bg-lightGrey">
      <p className="open-sans-normal text-2xl">
        Welcome back,{" "}
        <span className="text-4xl open-sans-bold text-primary">
          Tlag Entertainment
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
          className="w-full md:w-72 h-auto border-[1px] bg-white border-primary rounded-md text-sm poppins-regular placeholder:text-sm placeholder:poppins-regular text-black placeholder:text-gray focus:outline-none indent-7 py-1"
        />
        <span className="absolute left-4 top-2 md:top-2.5">
          <img src="./search.svg" alt="" />
        </span>
      </div>
      <TotalActiveEmployees />
    </div>
  );
};

export default Dashboard;
