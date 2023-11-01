import Image from "next/image";
import React, { useContext } from "react";

import Paginations from "./Paginations";
import Button from "../components/Button/Button";
import { useDispatch, useSelector } from "react-redux/es/exports";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "./mobileNumber.css";

import { MYPagination, UserAuth } from "../ContextApi/contextProvide";

type Props = {};

const EnterMobileNumber: React.FC<Props> = () => {
  const [phoneError, setPhoneError] = React.useState("");
  const { myHeadingText, setMyHeadingText } = useContext(MYPagination);
  const { phoneNumber, setPhoneNumber } = useContext(UserAuth);


  const handlePhoneNumber = () => {
    if (phoneNumber === "") {
      setPhoneError("Please enter your phone number");
      return false;
    }
    setPhoneNumber(phoneNumber);
    setMyHeadingText("Select Interest");
  };

  const handleChange = (e: string) => {
    setPhoneNumber(e);
  };

  return (
    <div className="flex flex-col items-center justify-center mt-[49px]">
      <Paginations />
      <div className="flex flex-col items-end">
        <div className="w-full flex flex-row justify-center mt-16">
          <PhoneInput
            value={phoneNumber}
            inputClass="w-[306px]"
            containerClass="w-[400px]"
            country={"us"}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <p className="font-bold text-error-text text-[12px] mt-[8px]">
          {phoneError}
        </p>
      </div>

      <div className="mt-16 w-[400px]">
        <button className="w-[188px] h-[56px] text-green hover:text-hover-green">
          I&apos;ll do it later
        </button>
        <Button
          className="w-[188px] h-[56px] rounded-[8px] text-white"
          btnText="Verify"
          onClick={handlePhoneNumber}
        />
      </div>
    </div>
  );
};

export default EnterMobileNumber;
