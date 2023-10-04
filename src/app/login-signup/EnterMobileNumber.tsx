import Image from "next/image";
import React from "react";
import { Pagination } from "swiper/modules";
import Paginations from "./Paginations";
type Props = {
  headingText: string;
  onNext: () => void;
};
const EnterMobileNumber: React.FC<Props> = ({ headingText, onNext }) => {
  return (
    <div className="flex flex-col items-center justify-center mt-[49px]">
      <Paginations />
      <div className="flex flex-row items-center w-[400px] h-[48px] rounded-[6px] border-[1px] border-[#DDDDDD] mt-[64px]">
        <div className="w-[94px] h-[48px] flex flex-row items-center justify-center gap-[7px] border-[1px] rounded-[6px]">
          <div className="rounded-full w-[20px] h-[20px]">
            <Image src="/flag.png" width={20} height={20} alt="American Flag" />
          </div>
          <p>+92</p>
          <div>
            <Image src="/dropdown.png" width={6} height={3} alt="Dropdown" />
          </div>
        </div>
        <input
          type="text"
          className="outline-none w-ful h-full px-2"
          placeholder="xxxxx"
        />
      </div>
      <div className="mt-16 w-[400px]">
        <button className="w-[188px] h-[56px] text-[#3AAE2A] hover:text-[#457540]">
          I'll do it later
        </button>
        <button
          className="w-[188px] h-[56px] text-white bg-[#3AAE2A] hover:bg-[#386832] rounded-[8px]"
          onClick={() => onNext("Select interest")}
        >
          Verify
        </button>
      </div>
    </div>
  );
};

export default EnterMobileNumber;
