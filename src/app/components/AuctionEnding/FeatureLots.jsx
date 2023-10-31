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
// import swiperData from './data';
// import swiperData from './data'
import { mySwiperData } from "./AuctionEndingData";
import TrendingCarousel from "./TrendingCarousel";
import Button from "../Button/Button";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
function FeatureLots() {

  const router = useRouter();
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      partialVisibilityGutter: 40, // this is needed to tell the amount of px that should be visible.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      partialVisibilityGutter: 30, // this is needed to tell the amount of px that should be visible.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      partialVisibilityGutter: 30, // this is needed to tell the amount of px that should be visible.
    },
  };
  const handleSliderClick = (productId) => {
    // console.log(productId)
    const productJSON = JSON.stringify(productId);

    router.push(`/productDetails?=${encodeURIComponent(productJSON)}`);
    // router.push(`/productDetails?=${productId}`);
  };


  return (
    <>
      <div className="mt-[220px] flex justify-center items-center flex-col ">
        <div className="w-[1440px] px-[128px] ">
          {/* <TrendingCarousel/> */}
          <div className="flex flex-col items-center">
            {" "}
            <h1
              className={`text-[24px] font-satoshi font-normal leading-[46px] text-[#686868] ${monumentum.className}`}
            >
              {" "}
              Feature Lots
            </h1>
            <div className="bg-[#3AAE2A] w-[286px] h-[2px] mt-[32px] "></div>
          </div>
          <div className="mt-[84px] flex flex-row justify-center items-center">
            <div className="w-full">
              <Carousel responsive={responsive} centerMode={true}>
                {mySwiperData.map((element, idx) => {
                  return (

                    <div key = {idx} >
                    <ProductCard
                      productImg={element.img}
                      productName={element.name}
                      productPrice={element.price}
                      auctionEnd={element.ending}
                      onClick={()=> handleSliderClick(element)}
                    />
                    
                    </div>
                  );
                })}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FeatureLots;
