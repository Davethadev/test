import { useState } from "react";
import { cardsData } from "@/constants/cards";
import { Skeleton } from "./ui/skeleton";

const Cards = () => {
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
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-5">
      <div className="relative">
        <div className="absolute flex items-center justify-between w-full -top-9">
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
        <div className="relative overflow-hidden rounded-xl h-44 bg-primary hover:cursor-pointer hover:-translate-y-3 transition-all ease-in-out">
          <div className="triangle-one"></div>
          <div className="triangle-two"></div>
          <div className="triangle-three"></div>
          <article className="p-4 space-y-6 absolute z-40 w-full">
            <div className="flex items-center justify-between">
              <small className="open-sans-normal text-white">
                Available Balance
              </small>
              <span>
                <img src="./nigeria.svg" alt="" />
              </span>
            </div>
            <div className="text-2xl text-white open-sans-bold">
              {isRefreshing ? (
                <Skeleton className="w-1/2 h-9" />
              ) : isShowBalance ? (
                "₦9,846.18"
              ) : (
                "*****"
              )}
            </div>
            <div className="w-3/4 flex items-center justify-between">
              <div className="open-sans-bold text-white text-xs flex items-center gap-1 w-1/2">
                <span className="open-sans-normal">Ledger:</span>{" "}
                {isRefreshing ? (
                  <Skeleton className="w-full h-2" />
                ) : isShowBalance ? (
                  "₦9,846.18"
                ) : (
                  "*****"
                )}
              </div>
              <small className="open-sans-bold text-white text-xs">
                <span className="open-sans-normal">Locked:</span> ₦
              </small>
            </div>
          </article>
        </div>
      </div>
      {cardsData.map((card, index) => {
        const { icon, name, amount, percentage } = card;
        return (
          <article
            key={index}
            className="rounded-xl h-44 bg-white p-4 space-y-4 hover:cursor-pointer hover:-translate-y-3 transition-all ease-in-out"
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
            <div className="text-2xl open-sans-bold">
              {isRefreshing ? (
                <Skeleton className="w-1/2 h-9" />
              ) : isShowBalance ? (
                `₦${amount}`
              ) : (
                "*****"
              )}
            </div>
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

export default Cards;
