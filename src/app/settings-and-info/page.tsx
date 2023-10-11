"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Navbar from "../components/navbar/Navbar";
import SettingsInfoCard from "./setting_info_cards/SettingsInfoCard";
import Winnings from "./setting_info_cards/Winnings";
import Footer from "../components/footer/Footer";

import Payments from "./setting_info_cards/payments";
function SettingsAndInfo() {
  const [name, setName] = useState("My Bids");
  const [index, setIndex] = useState(-5);
  console.log("This is Index", index);
  const sideBar = [
    {
      name: "My Bids",
      img: "/myBids.png",
    },
    {
      name: "Wish List",
      img: "/wish-list.png",
    },
    {
      name: "Winnings",
      img: "/badge.png",
    },
    {
      name: "Payments",
      img: "/payments.png",
    },
    {
      name: "Personal Information",
      img: "/personal-information.png",
    },
    {
      name: "Logout",
      img: "/logout.png",
    },
  ];
  const detail = [
    {
      name: "All",
      number: "14",
    },
    {
      name: "WON",
      number: "03",
    },
    {
      name: "Loose",
      number: "11",
    },
  ];
  const cardData = [
    {
      title: "Rolex",
      productId: 116519,
      bidFor: 4100,
      dateTime: "21-22-2022",
      time: "15:12",
      winner: "Closed",
    },
    {
      title: "Omega",
      productId: 116519,
      bidFor: 4100,
      dateTime: "21-22-2022",
      time: "15:12",
      winner: "Winner",
    },
    {
      title: "Patek Philipe",
      productId: 116519,
      bidFor: 4100,
      dateTime: "21-22-2022",
      time: "15:12",
      winner: "Closed",
    },
    {
      title: "TAG Heuer",
      productId: 116519,
      bidFor: 4100,
      dateTime: "21-22-2022",
      time: "15:12",
      winner: "Winner",
    },
    {
      title: "Seiko",
      productId: 116519,
      bidFor: 4100,
      dateTime: "21-22-2022",
      time: "15:12",
      winner: "Closed",
    },
    {
      title: "A. Lange  & Sohne",
      productId: 116519,
      bidFor: 4100,
      dateTime: "21-22-2022",
      time: "15:12",
      winner: "Winner",
    },
  ];

  const winnings = [
    {
      title: "A. Lange  & Sohne",
      productId: 116519,
      wonFor: 4100,
      dateTime: "21-22-2022",
      status:'Delivered',
      time:'23:25'
    },
    {
      title: "A. Lange  & Sohne",
      productId: 116519,
      wonFor: 4100,
      dateTime: "21-22-2022",
      status:'Not Delivered',
      time:'23:25'
    },
    {
      title: "A. Lange  & Sohne",
      productId: 116519,
      wonFor: 4100,
      dateTime: "21-22-2022",
      status:'',
      time:'23:25'
    },
    {
      title: "A. Lange  & Sohne",
      productId: 116519,
      wonFor: 4100,
      dateTime: "21-22-2022",
      status:"Delivered",
      time:'23:25'
    },
    {
      title: "A. Lange  & Sohne",
      productId: 116519,
      wonFor: 4100,
      dateTime: "21-22-2022",
      status:'Not Delivered',
      time:'23:25'
    },
    {
      title: "A. Lange  & Sohne",
      productId: 116519,
      wonFor: 4100,
      dateTime: "21-22-2022",
      status:'',
      time:'23:25'
    },
  ];
  return (
    <div>
      <Navbar />
      <div className="grid place-content-center">
        <div className="w-[1440px] px-[128px]">
          <div className="flex flex-row items-center gap-4 mt-[32.97px]">
            <p className="font-semibold text-xs leading-[18px]">Home</p>
            <Image src="/arrow-small.png" width={3.52} height={7.06} alt="" />
            <p className="font-semibold text-xs leading-[18px]">Categories</p>
            <Image src="/arrow-small.png" width={3.52} height={7.06} alt="" />
            <p>Jewellery</p>
          </div>
          <h1 className="font-normal text-2xl leading-[25px] mt-12">
            Settings & info
          </h1>
          <div className="flex flex-row justify-between gap-[125px]">
            <div className="w-[278px] h-[709px] shadow-md mt-16 px-6 py-8 flex flex-col gap-4">
              {sideBar.map((item, idx) => {
                return (
                  <div
                    key={idx}
                    className={`w-full hover:text-[#3AAE2A] cursor-pointer h-[48px] rounded-[8px] flex flex-row items-center px-6  gap-4 ${
                      name === item.name
                        ? "bg-[#3AAE2A] hover:text-white text-white"
                        : ""
                    }`}
                    onClick={() => {
                      setName(item.name);
                      setIndex(idx);
                    }}
                  >
                    <Image
                      src={item.img}
                      width={19}
                      height={16}
                      alt=""
                      className="invert hover:invert-0"
                    />
                    <p className="font-bold text-sm leading-[18.9px]">
                      {item.name}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="w-[781px]">
              {name === "My Bids" ? (
                <div className="flex flex-row items-center gap-6">
                  {detail.map((element, idx) => {
                    return (
                      <div className="px-[16px] h-[34px] rounded-[25px] border-[1px] border-[#E1E1E1] hover:border-[#3AAE2A]  flex flex-row items-center justify-center gap-[8px]">
                        <p className="font-normal text-sm leading-[18px]">
                          {element.name}
                        </p>
                        <p className="text-black font-normal text-[14px] leading-[18px]">
                          {element.number}
                        </p>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="h-[34px]"></div>
              )}

              <div
                className={`grid ${
                  name === "Winnings" ? "grid-cols-1" : "grid-cols-2"
                }  gap-6 w-full mt-8`}
              >
                {name === "My Bids" &&
                  cardData.map((element, idx) => {
                    return (
                      <div key={idx}>
                        {" "}
                        <SettingsInfoCard
                          bids=""
                          title={element.title}
                          productId={element.productId}
                          bidAmount={element.bidFor}
                          date={element.dateTime}
                          time={element.time}
                          winner={element.winner}
                        />
                      </div>
                    );
                  })}

                {name === "Wish List" && (
                  <SettingsInfoCard
                  bids = {'bids'}
                    title="Omega"
                    productId={110066447}
                    bidAmount={5200}
                    date="01-08-1996"
                    time="5:20"
                    winner="MySelf"
                  />
                )}
                {name === "Winnings" &&
                  winnings.map((element, idx) => {
                    return (
                      <div key={idx} className="">
                        <Winnings time = {element.time} title = {element.title} productId = {element.productId} wonFor = {element.wonFor} dateTime = {element.dateTime} status = {element.status}/>
                      </div>
                    );
                  })}
                {name === "Payments" && (
                 <Payments/> 
                )}
                {name === "Personal Information" && (
                  <SettingsInfoCard
                    title="Audemars Piguet"
                    productId={110066447}
                    bidAmount={5200}
                    date="01-08-1996"
                    time="5:20"
                    winner="MySelf"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-12">
        <Footer />
      </div>
    </div>
  );
}

export default SettingsAndInfo;
