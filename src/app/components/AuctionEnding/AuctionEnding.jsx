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
    <div className="px-[128px] mt-[175px] ">
      <div className=" flex flex-col items-center ">
        <h1 className={`text-[36px] font-normal leading-[46px] text-[#686868] ${monumentum.className}`}>
          {" "}
          Feature Lots
        </h1>
        <div className="bg-[#3AAE2A] w-[286px] h-[2px] mt-[32px] "></div>
      </div>

      <div className="mt-[84px] flex flex-row justify-center items-center">
        <Swiper
          slidesPerView={5}
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
        {/* <ProductCard/> */}
      </div>
          <CurrentAuction/>
          <CompletedAuctions/>
      <div className="mt-[299px] flex flex-col justify-center items-center">
        <h1 className={`${monumentum.className} text-[#686868] font-normal text-4xl leading-[46px] text-[#686868]"`}>
          How It Works?
        </h1>
        <div className="bg-[#3AAE2A] w-[286px] h-[2px] mt-8"></div>
        <div className="flex flex-row items-center justify-between bg-[#283926] w-[1664px] h-[775px] px-[200px] py-[180px] rounded-[64px] mt-[64px]">
          {howItWorks.map((element, idx) => {
            return (
              <div key={idx} className="flex flex-col items-center">
                {idx === 0 && (
                  <Image src={element.img} width={282} height={261} alt="" />
                )}
                {idx === 1 && (
                  <Image src={element.img} width={252} height={256} alt="" />
                )}
                {idx === 2 && (
                  <Image src={element.img} width={221} height={256} alt="" />
                )}
                <h1 className="font-bold text-2xl leading-[38px] text-[#5AE842] mt-[66px]">
                  {element.name}
                </h1>
                <p className="font-medium text-base leading-[21.86px] max-w-[286px] text-center mt-[27px] text-white">
                  {element.des}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
    </>
  );
}

export default FeatureLots;
