import { balancesData } from "@/constants/balances";

const Balances = () => {
  return (
    <div className="grid grid-cols-3 gap-4 pt-5">
      <div className="relative">
        <div className="absolute flex items-center justify-between w-full top-[-20px]">
          <div className="flex items-center gap-1">
            <small className="raleway-regular">My Balances</small>
            <span>
              <img src="./eye.svg" alt="" />
            </span>
          </div>
          <span className="bg-grey h-6 w-6 rounded-full flex justify-center items-center">
            <img src="./refresh.svg" alt="" />
          </span>
        </div>
        <article className="rounded-xl h-44 bg-primary p-4 mt-4 space-y-6">
          <div className="flex items-center justify-between">
            <small className="open-sans-normal text-white">
              Available Balance
            </small>
            <span>
              <img src="./nigeria.svg" alt="" />
            </span>
          </div>
          <p className="text-2xl text-white open-sans-bold">₦9,846.18</p>
          <div className="w-3/4 flex items-center justify-between">
            <small className="open-sans-bold text-white">
              <span className="text-grey open-sans-normal">Ledger:</span>{" "}
              ₦9,846.18
            </small>
            <small className="open-sans-bold text-white">
              <span className="text-grey open-sans-normal">Locked:</span> ₦
            </small>
          </div>
        </article>
      </div>
      {balancesData.map((balance, index) => {
        const { icon, name, amount, percentage } = balance;
        return (
          <article
            key={index}
            className="rounded-xl h-44 bg-white p-4 mt-4 space-y-4"
          >
            <div className="flex justify-end w-full">
              <span
                className={`flex justify-center items-center h-8 w-8 ${
                  index === 0 ? "bg-pink" : "bg-lightGreen"
                } rounded-full`}
              >
                <img src={icon} alt="" />
              </span>
            </div>
            <small className="open-sans-normal">{name}</small>
            <p className="text-2xl open-sans-bold">₦{amount}</p>
            <span className="open-sans-normal bg-pink w-16 h-4 px-2 text-red-500 text-xs rounded-md block">
              {percentage}
            </span>
          </article>
        );
      })}
    </div>
  );
};

export default Balances;
