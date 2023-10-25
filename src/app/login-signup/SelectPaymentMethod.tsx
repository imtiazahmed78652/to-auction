import React, { useContext } from "react";
import Paginations from "./Paginations";
import Image from "next/image";
import Button from "../components/Button/Button";
import {
  HandleInterest,
  MYPagination,
  UserAuth,
} from "../ContextApi/contextProvide";

const SelectPaymentMethod: React.FC<{}> = () => {

  const handlePaymentSelect = (value: string) => {
    if (paymentMethod === value) {
      setPaymentMethod(value);
    } else {
      setPaymentMethod(value);
    }
  };

  const paymentMethodData = [
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

  const { myHeadingText, setMyHeadingText } = useContext(MYPagination);
  const { paymentMethod, setPaymentMethod } = useContext(UserAuth);

  return (
    <div className="flex flex-col items-center">
      <div className="w-[400px] mt-[50px]">
        <Paginations />

        <div className="flex flex-col items-center mt-10">
          <div className="w-[400px] flex flex-col gap-6">
            {paymentMethodData.map((element, idx) => {
              return (
                <button
                  key={idx}
                  className="flex hover:shadow-lg flex-row items-center justify-between border-[1px] border-light-border cursor-pointer rounded-[6px] h-[48px] px-6"
                  onClick={() => handlePaymentSelect(element.name)}
                >
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
                  <div
                    className={` ${
                      paymentMethod === element.name
                        ? "border-green"
                        : "border-light-border"
                    }  w-[20px] h-[20px] border-[1px]  rounded-full flex flex-row  items-center justify-center`}
                  >
                    {paymentMethod === element.name && (
                      <div className="w-[10px] h-[10px] border-[1px] rounded-full bg-green border-green"></div>
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          <div className="flex flex-row items-center justify-between mt-10 gap-6">
            <button className="w-[188px] h-[56px] text-[#3AAE2A]">
              I&apos;ll do it later
            </button>

            <Button
              className="w-[188px] h-[56px] text-white rounded-[8px]"
              btnText="Verify"
              onClick={() => {
                if (paymentMethod !== "") {
                  setMyHeadingText("Enter Card Details");
                }
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectPaymentMethod;
