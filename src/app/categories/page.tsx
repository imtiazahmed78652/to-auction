import React from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import { monumentum } from "../layout";
import Image from "next/image";
import Link from "next/link";

function page() {
  const data = [
    {
      img: "/category-1.png",
      text: "Watches",
    },
    {
      img: "/category-2.png",
      text: "Jewellery",
    },
    {
      img: "/category-3.png",
      text: "Hand bags",
    },
  ];
  return (
    <>
      <Navbar />
      <div className="px-[128px] mb-[166px] flex justify-center">
        <div className="w-[1440px] px-[128px]">
          <div className="flex flex-col mt-8">
            <div className="flex flex-row items-center gap-[16px] ">
              <h1 className="font-medium text-base leading-[18px] text-[#BCBCBC]">
                Home
              </h1>
              <Image
                src="/dropdown.png"
                width={10}
                height={10}
                alt=""
                className="transform -rotate-90"
              />
              <h1 className="font-medium text-base leading-[18px] text-[#BCBCBC]">
                Categories
              </h1>
              <Image
                src="/dropdown.png"
                width={10}
                height={10}
                alt=""
                className="transform -rotate-90"
              />
              <h1 className="font-medium text-base leading-[18px] text-[#BCBCBC]">
                Jewellery
              </h1>
            </div>
            <h1
              className={` font-satoshi font-normal text-[24px] leading-[25px] mt-[48px]`}
            >
              Category
            </h1>
          </div>

          <div className="mt-[64px] flex flex-row items-center gap-[24px] justify-center ">
            {data.map((element, idx) => {
              return (
                <Link key={idx} href={`/productDetails`}>
                  <div
                    className="relative transition-transform  transform scale-100 hover:scale-105 delay-100 ease-in-out w-[379px] h-[608px] rounded-[12px] flex flex-row bg-cover items-center gap-[16px]"
                    style={{ backgroundImage: `url(${element.img})` }}
                  >
                    <div className="flex flex-row items-center gap-[16px] absolute bottom-5 left-[37px] text-white">
                      <div
                        className={` ${monumentum.className} hover:shadow-2xl shadow-white text-[30px] font-normal leading-[25px]`}
                      >
                        {element.text}
                      </div>
                      <Image
                        src="/Vector.png"
                        width={22.5}
                        height={12.5}
                        alt=""
                      />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default page;
