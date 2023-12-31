"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Navbar from "../components/navbar/Navbar";
import SettingsInfoCard from "./setting_info_cards/SettingsInfoCard";
import Winnings from "./setting_info_cards/Winnings";
import Footer from "../components/footer/Footer";
import { sideBar, winnings, cardData, detail } from "./setting_info_cards/data";
import Payments from "./setting_info_cards/Payments";
import PersonalInformation from "./setting_info_cards/PersonalInformation";
import Logout from "./setting_info_cards/Logout";
import PayNow from "./setting_info_cards/PayNow";

function SettingsAndInfo() {
  const [name, setName] = useState("My Bids");
  const [index, setIndex] = useState(-5);
  const [payment, setPayments] = useState(false);
  const togglePayment = (value: boolean) => {
    setPayments(value);
  };
  return (
    <div className="relative">
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
              {sideBar?.map((item, idx) => {
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
                  {detail?.map((element, idx) => {
                    return (
                      <div
                        key={idx}
                        className="px-[16px] h-[34px] rounded-[25px] border-[1px] border-[#E1E1E1] hover:border-[#3AAE2A]  flex flex-row items-center justify-center gap-[8px]"
                      >
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
                    bids={"bids"}
                    title="Omega"
                    productId={110066447}
                    bidAmount={5200}
                    date="01-08-1996"
                    time="5:20"
                    winner="MySelf"
                  />
                )}
                {name === "Winnings" && payment === true ? (
                  <PayNow togglePayment={togglePayment} />
                ) : (
                  name === "Winnings" &&
                  winnings?.map((element, idx) => {
                    return (
                      <div key={idx} className="">
                        <Winnings
                          payment={payment}
                          togglePayment={togglePayment}
                          time={element.time}
                          title={element.title}
                          productId={element.productId}
                          wonFor={element.wonFor}
                          dateTime={element.dateTime}
                          status={element.status}
                        />
                      </div>
                    );
                  })
                )}
                {name === "Payments" && <Payments />}
                {name === "Personal Information" && <PersonalInformation />}
              </div>
            </div>

            
          </div>
        </div>
      </div>
      {name === "Logout" && (
        <div className="absolute  top-0  w-full h-full bg-black bg-opacity-[50%] z-40 ">
          <div className="mt-[20%] ml-[35%] w-[528px]  rounded-[8px] bg-white pb-12">
            <Logout />
          </div>
        </div>
      )}
      <div className="mt-12">
        <Footer />
      </div>
    </div>
  );
}

export default SettingsAndInfo;
