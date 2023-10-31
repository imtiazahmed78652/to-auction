import Image from "next/image";
import Link from "next/link";
import React from "react";
import { product, company, support, downloads } from "./data";
function Footer() {
  return (
    <div className="h-[626px] bg-[#343434] text-[#FFFFFF]  pt-[94px] flex flex-col justify-center font-sans items-center">
      <div className="flex flex-row gap-[173px] w-[1440px] px-[128px]">
        <div className="flex flex-col">
          <Image src="/tp-auction-logo.svg" alt="" width={295} height={41} />
          <p className="mt-[45px] font-normal text-lg leading-[30px] w-[408px] text-white">
            Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam
            mauris sed ma
          </p>
          <div className="flex flex-row items-center gap-[16px] mt-[48px]">
            <div className="bg-white w-[36px] h-[36px] rounded-[8px] flex flex-row items-center justify-center">
              <Image alt="" src="/Facebook.png" width={9.82} height={18} />
            </div>
            <div className="bg-white w-[36px] h-[36px] rounded-[8px] flex flex-row items-center justify-center">
              <Image alt="" src="/Twitter.png" width={18} height={14.6} />
            </div>
            <div className="bg-white w-[36px] h-[36px] rounded-[8px] flex flex-row items-center justify-center">
              <Image alt="" src="/Instagram.png" width={18} height={18} />
            </div>
            <div className="bg-white w-[36px] h-[36px] rounded-[8px] flex flex-row items-center justify-center">
              <Image alt="" src="/Linkedin.png" width={18} height={17.1} />
            </div>
            <div className="bg-white w-[36px] h-[36px] rounded-[8px] flex flex-row items-center justify-center">
              <Image alt="" src="/Youtube.png" width={19.8} height={14} />
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-[72px]">
          <div className="flex flex-col">
            <h1 className="text-green text-[20px] font-bold leading-[20px] font-sans">
              Product
            </h1>
            <div className="flex flex-col gap-[25px] mt-[48px] text-white">
              {product.map((element, idx) => {
                return (
                  <Link href={element.url} key={idx}>
                    {" "}
                    <p className="font-normal text-[18px] leading-[18px] hover:underline">
                      {element.name}
                    </p>
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="flex flex-col">
            <h1 className="text-green text-[20px] font-bold leading-[20px] font-sans">
              Company
            </h1>

            <div className="flex flex-col gap-[25px] mt-[48px] text-white">
              {company.map((element, idx) => {
                return (
                  <Link href={element.url} key={idx}>
                    {" "}
                    <p className="font-normal text-[18px] leading-[18px] hover:underline">
                      {element.name}
                    </p>
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="flex flex-col">
            <h1 className="text-green text-[20px] font-bold leading-[20px] font-sans">
              Support
            </h1>

            <div className="flex flex-col gap-[25px] mt-[48px] text-white">
              {support.map((element, idx) => {
                return (
                  <Link href={element.url} key={idx}>
                    {" "}
                    <p className="font-normal text-[18px] leading-[18px] hover:underline">
                      {element.name}
                    </p>
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="flex flex-col">
            <h1 className="text-green text-[20px] font-bold leading-[20px] font-sans">
              Support
            </h1>

            <div className="flex flex-col gap-[25px] mt-[48px] text-white">
              {downloads.map((element, idx) => {
                return (
                  <Link href={element.url} key={idx}>
                    {" "}
                    <p className="font-normal text-[18px] leading-[18px] hover:underline">
                      {element.name}
                    </p>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className=" flex flex-row justify-center   mt-[162px] ">
        <div className="w-[1184px] border-white border-t-[1px] py-[40px] flex flex-row items-center justify-center">
          Copyright © 2023 TPAuction | All Rights Reserved
        </div>
      </div>
    </div>
  );
}

export default Footer;
