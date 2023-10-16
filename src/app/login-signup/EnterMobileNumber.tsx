import Image from "next/image";
import React from "react";
import { Pagination } from "swiper/modules";
import Paginations from "./Paginations";
import Button from "../components/Button/Button";

import { useDispatch,useSelector } from "react-redux/es/exports";
import {updateHeadingText} from '../GlobalRedux/Features/counterSlice'
import { useAppSelector } from "../hooks";



type Props = {
  headingText: string;
  onNext: (text:string) => void;
};
const EnterMobileNumber: React.FC<Props> = ({ headingText, onNext }) => {
  const pagination = useAppSelector((state) => state.counter.pagination);
  const dispatch = useDispatch();
  console.log(pagination,'pagination');

  
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
        <button className="w-[188px] h-[56px] text-green hover:text-hover-green">
          I&apos;ll do it later
        </button>
        <Button className="w-[188px] h-[56px] rounded-[8px] text-white" btnText="Verify" onClick={() => {onNext("Select interest");dispatch(updateHeadingText('Select Interest'))}}/>
      </div>
    </div>
  );
};

export default EnterMobileNumber;
