import React from "react";
import Paginations from "./Paginations";
import Image from "next/image";
const SelectPaymentMethod: React.FC<{
  headingText: string;
  onNext: (text:string) => void;
}> = ({ headingText, onNext }) => {
  const paymentMethod = [
    {
      name: "MasterCard",
      img: "/master-card.png",
    },
    {
      name: "Paypal",
      img: "/paypal.png",
    },
    {
      name: "Visa",
      img: "/Visa.png",
    },
  ];
  return (
    <div className="flex flex-col items-center">
      <div className="w-[400px] mt-[50px]">
        <Paginations />


        
        <div className="flex flex-col items-center mt-10">
          <div className="w-[400px] flex flex-col gap-6">
            {paymentMethod.map((element, idx) => {
              return (
                <div key={idx} className="flex flex-row items-center justify-between border-[1px] rounded-[6px] h-[48px] px-6">
                  <div className="flex flex-row items-center gap-4">
                    <Image
                      src={element.img}
                      width={24}
                      height={24}
                      alt="Mastercard"
                    />
                    <p className="text-xs  font-medium leading-[16.39px] text-[#6C7171]">
                      {element.name}
                    </p>
                  </div>
                  <input type="radio" name="" id="" />
                </div>
              );
            })}
          </div>

          <div className="flex flex-row items-center justify-between mt-10 gap-6">
          <button className="w-[188px] h-[56px] text-[#3AAE2A]">
            I&apos;ll do it later
          </button>
          <button className="w-[188px] h-[56px] bg-[#3AAE2A] text-white rounded-[8px]" onClick={()=> onNext('Enter Card Details')}>
            Verify
          </button>
        </div>

        </div>
        
      </div>
    </div>
  );
};

export default SelectPaymentMethod;
