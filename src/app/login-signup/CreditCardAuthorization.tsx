import Image from "next/image";
import React, { useContext } from "react";
import Button from "../components/Button/Button";
import { useAppSelector } from "../hooks";
import { useDispatch } from "react-redux";
import { updateHeadingText } from "../GlobalRedux/Features/counterSlice";
import { MYPagination } from "../ContextApi/contextProvide";
const CreditCardAuthorization: React.FC<{}> = ({}) => {
  const { myHeadingText, setMyHeadingText } = useContext(MYPagination);
  const fullName = useAppSelector((state)=> state.input.fullName);
  console.log(fullName,'email');
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col items-center justify-center mt-[83px]">
      {myHeadingText === "Payment Verified" ? (
        <div className="flex flex-col items-center text-center">
          <Image src="/tick-second.png" width={58} height={58} alt="Tick" />
          <div className="font-semibold text-[18px] leading-[24.59px] mt-[16px] text-[#ACACAC]">
            Payment Verified
            <br />
            Thank You
          </div>
        </div>
      ) : (
        <h1 className="w-[400px] text-[18px] text-[#ACACAC] font-semibold leading-[24px] text-center">
          TpAuction will make a transaction of $1 to authorise the payment card.
          This will be refunded within 24 hours
        </h1>
      )}
      <Button
        className="mt-16 w-[400px] h-[56px] text-white rounded-[8px]"
        onClick={() => setMyHeadingText("Payment Verified")}
        btnText={myHeadingText === "Payment Verified" ? "Close" : "Continue"}
      />
    </div>
  );
};

export default CreditCardAuthorization;
