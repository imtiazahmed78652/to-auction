"use client";
import React, { useContext } from "react";
import Paginations from "./Paginations";
import FloatingInput from "../components/input/Input";
import Button from "../components/Button/Button";
import { MYPagination, HandleCardDetails } from "../ContextApi/contextProvide";

const EnterCardDetails: React.FC<{}> = ({}) => {
  const [dates, setDates] = React.useState("Expiry Date");
  const [cardHolderNameErr, setCardHolderNameErr] = React.useState("");
  const [cardNumberErr, setCardNumberErr] = React.useState("");
  const [selectExpiryDateErr, setSelectExpiryDateErr] = React.useState("");
  const [cvvErr, setCvvErr] = React.useState("");

  const { myHeadingText, setMyHeadingText } = useContext(MYPagination);

  const {
    cardHolderName,
    setCardHolderName,
    setCardNumber,
    cardNumber,
    expiryDate,
    setExpiryDate,
    cvv,
    setCvv,
  } = useContext(HandleCardDetails);

  const handleCardDetails = () => {
    setCardHolderNameErr("");
    setCardNumberErr("");
    setSelectExpiryDateErr("");
    setCvvErr("");
    let isValid = true;
    if (!cardHolderName) {
      setCardHolderNameErr("Enter card holder name");
      isValid = false;
    }
    if (!cardNumber) {
      setCardNumberErr("Enter your card number");
      isValid = false;
    } else {
      const stringValue = cardNumber;
      const numberValue = Number(stringValue);
      if (isNaN(numberValue)) {
        setCardNumberErr("Invalid card number");
        isValid = false;
      } else {
        setCardNumber(numberValue);
      }
    }
    if (!expiryDate) {
      setSelectExpiryDateErr("Select expiry date");
      isValid = false;
    } else {
      setExpiryDate(expiryDate);
    }

    if (!cvv) {
      setCvvErr("Enter CVV");
      isValid = false;
    } else {
      const stringValue = cvv;
      const numberValue = Number(stringValue);
      if (isNaN(numberValue)) {
        setCvvErr("Invalid CVV");
        isValid = false;
      } else {
        setCvv(cvv);
      }
    }
    if (isValid) {
      setMyHeadingText("Credit Card Authorization");
    }
  };

  const handleInputChange = (value: string | number | Date, name: string) => {
    if (name === "cardHolderName") {
      setCardHolderName(value.toString());
    }
    if (name === "cardNumber") {
      const stringValue = value;
      const numberValue = Number(stringValue);

      setCardNumber(numberValue);
    }
    if (name === "date") {
      const dateValue = new Date(value);

      if (!isNaN(dateValue.getTime())) {
        setExpiryDate(dateValue);
      }
    }

    if (name === "cvv") {
      const stringValue = value;
      const numberValue = Number(stringValue);
      setCvv(numberValue);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center mt-[50px]">
      <div className="w-[400px]">
        <Paginations />
      </div>
      <div className="flex flex-col items-center gap-6 mt-12">
        <div className="flex flex-col items-end">
          <div className="w-[400px] h-[46px] border-[1px] rounded-[6px] flex flex-row items-center justify-between pr-4 text-[#878787] p-1 border-[#DDDDDD] ">
            <FloatingInput
              value={cardHolderName}
              onChange={(value) => handleInputChange(value, "cardHolderName")}
              type="text"
              label="Card Holder Name"
              className="w-[380px] outline-none bg-transparent rounded-[6px] pl-[24px]  h-[46px]"
            />
          </div>
          <p className="font-bold text-xs text-error-text mt-2">
            {cardHolderNameErr}
          </p>
        </div>
        <div className="flex flex-col items-end">
          <div className="w-[400px] h-[46px] border-[1px] rounded-[6px] flex flex-row items-center justify-between pr-4 text-[#878787] p-1 border-[#DDDDDD] ">
            <FloatingInput
              type="number"
              value={cardNumber || ""}
              onChange={(value) => handleInputChange(value, "cardNumber")}
              label="Card Number"
              className="w-[380px] outline-none bg-transparent rounded-[6px] pl-[24px]  h-[46px]"
            />
          </div>
          <p className="font-bold text-xs text-error-text mt-2">
            {cardNumberErr}
          </p>
        </div>
        <div className="flex flex-row items-center gap-[18px]">
          <div className="flex flex-col items-end">
            <div className="w-[191px] h-[46px] border-[1px] rounded-[6px] flex flex-row items-center justify-between pr-4 text-[#878787] p-1 border-[#DDDDDD] ">
              {dates === "date" && (
                <input
                  type="date"
                  value={expiryDate || ""}
                  onChange={(e) => handleInputChange(e.target.value, "date")}
                  className="outline-none bg-transparent rounded-[6px] pl-[24px] w-full h-[46px]"
                />
              )}

              {dates === "Expiry Date" && (
                <input
                  placeholder={dates}
                  className="outline-none bg-transparent rounded-[6px] pl-[24px] w-full h-[46px] text-xs text-[#878787]"
                  onClick={() => setDates("date")}
                />
              )}
            </div>
            <p className="font-bold text-xs text-error-text mt-2">
              {selectExpiryDateErr}
            </p>
          </div>

          <div className="flex flex-col items-end">
            <div className="w-[191px] h-[46px] border-[1px] rounded-[6px] flex flex-row items-center justify-between pr-4 text-[#878787] p-1 border-[#DDDDDD] ">
              <FloatingInput
                type="number"
                value={cvv || ""}
                label="CVV"
                onChange={(value) => handleInputChange(value, "cvv")}
                className="outline-none bg-transparent rounded-[6px] pl-[24px] w-full h-[46px]"
              />
            </div>
            <p className="font-bold text-xs text-error-text mt-2">{cvvErr}</p>
          </div>
        </div>
        <Button
          className="w-[400px] h-[56px] rounded-[8px] text-white mt-6"
          onClick={handleCardDetails}
          btnText="Save"
        />
      </div>
    </div>
  );
};

export default EnterCardDetails;
