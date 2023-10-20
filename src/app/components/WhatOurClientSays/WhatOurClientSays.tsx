import React from "react";
import Image from "next/image";
import { monumentum } from "@/app/layout";
function WhatOurClientSays() {
  const clients = [
    {
      img: "/client.png",
      des: "“Lorem ipsum dolor sit ametolil col consectetur adipiscing lectus a nunc mauris scelerisque  egestas.”",
      name: "John Carter",
      designation: "Head of Marketing at Facebook",
    },
    {
      img: "/client2.png",
      des: "“Lorem ipsum dolor sit ametolil col consectetur adipiscing lectus a nunc mauris scelerisque  egestas.”",
      name: "John Carter",
      designation: "Head of Marketing at Facebook",
    },
    {
      img: "/client3.png",
      des: "“Lorem ipsum dolor sit ametolil col consectetur adipiscing lectus a nunc mauris scelerisque  egestas.”",
      name: "John Carter",
      designation: "Head of Marketing at Facebook",
    },
  ];
  return (
    <div className="mt-[220px] flex flex-col items-center justify-center ">
      <div className="w-[1440px] px-[128px]">
        <div className="text-center flex flex-col items-center gap-[32px]">
          <h1
            className={`font-satoshi font-normal text-[20px] leading-[46px] text-[#686868]`}
          >
            What our clients say
          </h1>
          <div className="w-[286px] h-[4px] bg-[#3AAE2A] "></div>
          <p className=" w-[496px] font-normal text-[16px] leading-[30px] text-[#8F8F8F] ">
            Lorem ipsum dolor sit amet consectetur adipiscing elit semper dalar
            elementum tempus hac tellus libero accumsan.{" "}
          </p>
        </div>
        <div className="mt-[48px] flex flex-row items-center gap-[24px] ">
          {clients.map((element, idx) => {
            return (
              <div className="w-[379px] " key={idx}>
                <div className="w-[379px] h-[297px] relative ">
                  <div className="absolute right-2 top-2  w-[64px] h-[64px] bg-white rounded-full flex flex-row items-center justify-center">
                    <Image
                      src="/Play.png"
                      width={28}
                      height={28}
                      alt="Play button"
                    />
                  </div>
                  <div className="">
                    <Image
                      src={element.img}
                      className="rounded-[8px]"
                      width={379}
                      height={388}
                      alt=""
                    />
                  </div>
                </div>
                <div className="flex flex-col mt-[29px] ">
                  <p className="text-[#646464] text-xl font-satoshi font-medium text-[18px] leading-[24.3px]">
                    {element.des}
                  </p>
                  <h1 className="font-bold text-lg leading-[18px] mt-6 text-black">
                    {element.name}
                  </h1>
                  <p className="text-[#A6A6A6] text-lg leading-[18px] mt-4">
                    {element.designation}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default WhatOurClientSays;
