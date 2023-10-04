import React from "react";
import { Pagination } from "swiper/modules";
import Paginations from "./Paginations";
import Image from "next/image";
type Props = {
    headingText:string,
  onNext: (text: string) => void;
};
const SelectInterest: React.FC<Props> = ({ headingText, onNext }) => {
  const data = [
    {
      img: "/hand-bag.png",
      name: "Jewellery",
    },
    {
      img: "/watch.png",
      name: "Watches",
    },
    {
      img: "/ring.png",
      name: "Ring",
    },
  ];
  return (
    <div className="mt-[50px] grid place-items-center">
      <div className="w-[400px]">
        <Paginations />
      </div>
      <div className="grid place-items-center mt-12">
        <div className="w-[400px] grid grid-cols-2 gap-6 place-items-center">
          {data.map((element, idx) => {
            return (
              <div key={idx} className="w-[188px] h-[50px] border-[2px] rounded-[38px] flex flex-row items-center justify-center gap-4">
                <Image src={element.img} width={25} height={28} alt="" />
                <h1>{element.name}</h1>
              </div>
            );
          })}
        </div>
      </div>
      <button className="w-[400px] h-[56px] bg-[#3AAE2A] rounded-[8px] mt-[62px] text-white" onClick={()=> onNext('choose payment method')}>
        Create
      </button>
    </div>
  );
};

export default SelectInterest;
