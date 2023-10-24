import Image from "next/image";
import React, { useContext } from "react";
import Button from "../components/Button/Button";
import { useAppSelector } from "../hooks";
import { useDispatch } from "react-redux";
import { updateHeadingText } from "../GlobalRedux/Features/counterSlice";
import { MYPagination, HandleCardDetails } from "../ContextApi/contextProvide";
const CreditCardAuthorization: React.FC<{}> = ({}) => {
  const { myHeadingText, setMyHeadingText } = useContext(MYPagination);
  
  const { cardHolderName, setCardHolderName } = useContext(HandleCardDetails);
  const [oneDollar, setOneDollar] = React.useState(false);
  console.log(oneDollar);
  return (
    <div className="flex flex-col items-center justify-center mt-[83px]">
      <h1 className="w-[400px] text-[18px] text-[#ACACAC] font-semibold leading-[24px] text-center">
        TpAuction will make a transaction of $1 to authorise the payment card.
        This will be refunded within 24 hours
      </h1>
      <Button
        className="mt-16 w-[400px] h-[56px] text-white rounded-[8px]"
        onClick={() => setMyHeadingText("Payment Verified")}
        btnText={myHeadingText === "Payment Verified" ? "Close" : "Continue"}
      />
    </div>
  );
};

export default CreditCardAuthorization;
