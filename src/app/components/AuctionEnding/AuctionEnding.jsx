"use client";
import React, { useRef, useState } from "react";
import ProductCard from "../product_card/ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./auctionEnding.css";
import { Keyboard, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import CurrentAuction from "../current-auctions/CurrentAuction";
import CompletedAuctions from "../CompletedAuctions/CompletedAuctions";
import { monumentum } from "@/app/layout";
import { Manrope } from "next/font/google";
function FeatureLots() {
  const swiperData = [
    {
      img: "/watch-01.png",
      des: "Decorative Objects Auction (Modern)",
      price: "$200",
      ending: "End Today 17:00",
    },
    {
      img: "/watch-01.png",
      des: "Decorative Objects Auction (Modern)",
      price: "$200",
      ending: "End Today 17:00",
    },
    {
      img: "/watch-01.png",
      des: "Decorative Objects Auction (Modern)",
      price: "$200",
      ending: "End Today 17:00",
    },
    {
      img: "/watch-01.png",
      des: "Decorative Objects Auction (Modern)",
      price: "$200",
      ending: "End Today 17:00",
    },
    {
      img: "/watch-01.png",
      des: "Decorative Objects Auction (Modern)",
      price: "$200",
      ending: "End Today 17:00",
    },
    {
      img: "/watch-01.png",
      des: "Decorative Objects Auction (Modern)",
      price: "$200",
      ending: "End Today 17:00",
    },
    {
      img: "/watch-01.png",
      des: "Decorative Objects Auction (Modern)",
      price: "$200",
      ending: "End Today 17:00",
    },
    {
      img: "/watch-01.png",
      des: "Decorative Objects Auction (Modern)",
      price: "$200",
      ending: "End Today 17:00",
    },
  ];
  const howItWorks = [
    {
      img: "/Group 3972655.png",
      name: "Browse Items",
      des: "Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalar cons elementum tempus hac.",
    },
    {
      img: "/Layer_1 (2).png",
      name: "Bid on items",
      des: "Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalar cons elementum tempus hac.",
    },
    {
      img: "/Frame.png",
      name: "Max Bidder wins ",
      des: "Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalar cons elementum tempus hac.",
    },
  ];

  return (
    <>
      <div className="mt-[220px] flex justify-center items-center flex-col">
        <div className="w-[1440px] px-[128px]">
          <div className=" flex flex-col items-center ">
            <h1
              className={`text-[36px] font-normal leading-[46px] text-[#686868] ${monumentum.className}`}
            >
              {" "}
              Feature Lots
            </h1>
            <div className="bg-[#3AAE2A] w-[286px] h-[2px] mt-[32px] "></div>
          </div>

          <div className="mt-[84px] flex flex-row justify-center items-center">
            <Swiper
              slidesPerView={4}
              spaceBetween={30}
              keyboard={{
                enabled: true,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Keyboard, Pagination, Navigation]}
              className="mySwiper"
            >
              {swiperData.map((element, idx) => {
                return (
                  <SwiperSlide key={idx}>
                    <ProductCard />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
          <CurrentAuction />
          <CompletedAuctions />
          <div className="mt-[220px] flex flex-col justify-center items-center">
            <h1
              className={`${monumentum.className} text-[#686868] font-normal text-[24px] leading-[46px] `}
            >
              How It Works?
            </h1>
            <div className="bg-[#3AAE2A] w-[286px] h-[2px] mt-8"></div>
            <div className=" bg-[#283926] w-[1184px] h-[551px] py-[48px] px-[124px]  rounded-[16px] mt-[64px]">
              <div className="flex flex-row items-center justify-center text-center">
                <div className="border-b-[2px] border-[#787878] pb-4 hover:border-white  w-[143px] hover:text-white text-[#787878]">
                  For Seller
                </div>
                <div className="border-b-[2px] text-center pb-4 border-[#787878] hover:border-white  w-[143px] hover:text-white text-[#787878]">
                  For Buyer
                </div>
              </div>


              <div className="mt-28 flex flex-row justify-between">
                  <div className="flex flex-col">
                  <div className="w-[56px] h-[56px] bg-white rounded-[8px] flex flex-row items-center justify-center">01</div>
                  <h1 className="text-green mt-[32px] font-bold font-satoshi text-xl leading-[38px]">Browse Items</h1>
                  <p className="w-[203px] font-medium font-satoshi text-[16px] leading-[21.6px] text-[#FFFFFF]">Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalar cons elementum tempus hac.</p>
                  </div>
                  <div className="w-[172.5px] h-[43.33px]">
                  {/* <Image src = '/Vector 11.png' width={5} height={5} alt=""/> */}
                  <img src="/Vector 11.png" alt="" />
                  </div>
                  {/* <Image src = '/Vector 11.png' width = {172} height = {40.33} alt = ''/> */}
                  <div className="flex flex-col">
                  <div className="w-[56px] h-[56px] bg-white rounded-[8px] flex flex-row items-center justify-center">01</div>
                  <h1 className="text-green mt-[32px] font-bold font-satoshi text-xl leading-[38px]">Browse Items</h1>
                  <p className="w-[203px] font-medium font-satoshi text-[16px] leading-[21.6px] text-[#FFFFFF]">Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalar cons elementum tempus hac.</p>
                  </div>
                  <div className="w-[172.5px] h-[43.33px]">
                  {/* <Image src = '/Vector 12.png' width={5} height={5} alt=""/> */}
                  <img src="/Vector 12.png" alt="" />
                  </div>
                  <div className="flex flex-col">
                  <div className="w-[56px] h-[56px] bg-white rounded-[8px] flex flex-row items-center justify-center">01</div>
                  <h1 className="text-green mt-[32px] font-bold font-satoshi text-xl leading-[38px]">Browse Items</h1>
                  <p className="w-[203px] font-medium font-satoshi text-[16px] leading-[21.6px] text-[#FFFFFF]">Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalar cons elementum tempus hac.</p>
                  </div>
              </div>


            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FeatureLots;
