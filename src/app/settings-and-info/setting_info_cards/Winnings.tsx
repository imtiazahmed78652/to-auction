import React,{useState} from "react";
import Image from "next/image";

interface WinningsProps {
  title: string;
  productId: number;
  wonFor: number;
  dateTime: string;
  status: string;
  time: string;
  togglePayment: (value:boolean) => void;
  payment:boolean
}
function Winnings({
  title,
  productId,
  wonFor,
  dateTime,
  status,
  time,
  togglePayment,
  payment,
}: WinningsProps) {
  // const [payment,setPayment] = useState(false);
  return (
    <>
    
      <div className="flex flex-row gap-[24px] text-[#6C6C6C] w-[781px] h-[115px] border-[1px] border-[#D9D9D9] rounded-[8px] pl-[8px] pr-6 py-[8px]">
      <div className="w-[169px] flex flex-row items-center justify-center h-[99px] bg-[#F9F9F9]">
        <Image
          src="/Mask group.png"
          width={58}
          height={98}
          alt=""
          className=""
        />
      </div>

      <div className="flex flex-row justify-between w-full">
        <div className="flex flex-col justify-between">
          <div>
            <h1 className="font-bold text-sm leading-[18.9px]">{title}</h1>
            <p className="text-[#CCCCCC] font-medium text-xs leading-[18px]">
              Product ID: <span className="">{productId}</span>
            </p>
          </div>
          <p className="font-medium text-xs leading-[18px] text-[#CCCCCC] mt-6">
            Won for:{" "}
            <span className="font-bold text-[#6C6C6C]">{wonFor} AED</span>
          </p>
        </div>

        <div className="flex flex-col justify-between items-stretch h-full">
          <h1 className="font-semibold text-xs leading-[18px] flex flex-col text-[#CCCCCC] ">
            Date & Time
            <span className="font-normal text-xs leading-[18px] text-[#6C6C6C]">
              {dateTime} &nbsp; <span>{time}</span>
            </span>
          </h1>
          {status ? (
            <div className="">
              <h1 className="font-medium text-xs leading-[18px]">Status</h1>
              <div
                className={`font-medium text-xs leading-[18px] ${
                  status === "Delivered" ? "text-[#3AAE2A]" : "text-[#BCA900]"
                }`}
              >
                {status}
              </div>{" "}
            </div>
          ) : (
            <button className="w-[109px] h-[38px] bg-[#3AAE2A] rounded-[4px] font-medium  text-xs leading-[18px] text-[#FFFFFF]" onClick={()=> togglePayment(true)}>
              Pay Now
            </button>
          )}
        </div>

      </div>
    </div>

    
    </>
  );
}

export default Winnings;
