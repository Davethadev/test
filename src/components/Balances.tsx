import { useState } from "react";
import { balancesData } from "@/constants/balances";
import { Skeleton } from "./ui/skeleton";

const Balances = () => {
  const [isShowBalance, setIsShowBalance] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const onRefresh = async () => {
    try {
      setIsRefreshing(true);
      await new Promise((resolve) => setTimeout(resolve, 2000));
    } catch (error) {
    } finally {
      setIsRefreshing(false);
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-5">
      <div className="relative">
        <div className="absolute flex items-center justify-between w-full top-[-36px]">
          <div className="flex items-center gap-1">
            <small className="raleway-regular">My Balances</small>
            <span
              onClick={() => setIsShowBalance(!isShowBalance)}
              className="hover:cursor-pointer"
            >
              <img src={isShowBalance ? "./eye.svg" : "./eye-off.svg"} alt="" />
            </span>
          </div>
          <span
            onClick={onRefresh}
            className="bg-lightGray h-6 w-6 rounded-full flex justify-center items-center hover:cursor-pointer"
          >
            <img src="./refresh.svg" alt="" />
          </span>
        </div>
        <div className="relative overflow-hidden rounded-xl h-44 bg-primary">
          <div className="arrow-one"></div>
          <div className="arrow-two"></div>
          <div className="arrow-three"></div>
          <article className="p-4 space-y-6">
            <div className="flex items-center justify-between">
              <small className="open-sans-normal text-white">
                Available Balance
              </small>
              <span>
                <img src="./nigeria.svg" alt="" />
              </span>
            </div>
            <p className="text-2xl text-white open-sans-bold">
              {isRefreshing ? (
                <Skeleton className="w-1/2 h-9" />
              ) : isShowBalance ? (
                "₦9,846.18"
              ) : (
                "*****"
              )}
            </p>
            <div className="w-3/4 flex items-center justify-between">
              <small className="open-sans-bold text-white flex items-center gap-1 w-1/2">
                <span className="text-grey open-sans-normal">Ledger:</span>{" "}
                {isRefreshing ? (
                  <Skeleton className="w-full h-2" />
                ) : isShowBalance ? (
                  "₦9,846.18"
                ) : (
                  "*****"
                )}
              </small>
              <small className="open-sans-bold text-white">
                <span className="text-grey open-sans-normal">Locked:</span> ₦
              </small>
            </div>
          </article>
        </div>
      </div>
      {balancesData.map((balance, index) => {
        const { icon, name, amount, percentage } = balance;
        return (
          <article
            key={index}
            className="rounded-xl h-44 bg-white p-4 space-y-4"
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
            <p className="text-2xl open-sans-bold">
              {isRefreshing ? (
                <Skeleton className="w-1/2 h-9" />
              ) : isShowBalance ? (
                `₦${amount}`
              ) : (
                "*****"
              )}
            </p>
            <span
              className={`open-sans-normal ${
                index === 0 ? "bg-pink" : "bg-lighterGreen"
              } w-16 h-5 flex justify-center items-center px-2 ${
                index === 0 ? "text-red-500" : "text-greenShade"
              } text-xs rounded-md block`}
            >
              {percentage}
            </span>
          </article>
        );
      })}
    </div>
  );
};

export default Balances;
