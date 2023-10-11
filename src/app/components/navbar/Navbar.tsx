"use client";
import LoginSignup from "@/app/login-signup/LoginSignup";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import Sidebar from "../Sidebar/Sidebar";
import SearchInput from "../Search/SearchInput";
// import '../../src/app/globals.css'

function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [index, setIndex] = useState<number | null>(null);
  const [isSearchInputOpen, setIsSearchInputOpen] = useState(false);
  const [color, setColor] = useState<number | null>(null);
  const handleButtonClick = () => {
    setIsSearchInputOpen(!isSearchInputOpen);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleCloseSidebar = () => {
    setIsSidebarOpen(false);
  };
  const navData = [
    {
      img: "/call.svg",
      des: "800 (846374323)",
    },
    {
      img: "/coin.svg",
      des: "Currency",
      elements: ["Usd", "Pounds", "Euro", "Rupee", "Dirham", "Riyal", "Lira"],
    },
    {
      img: "/global.svg",
      des: "Language",
      elements: [
        "English",
        "Urdu",
        "Arabic",
        "French",
        "German",
        "Hebrew",
        "Italian",
      ],
    },
  ];

  return (
    <div className="w-full sticky max-w-full left-auto right-auto top-0 z-50 block">
      <div className="grid place-items-center relative bg-black  w-full  ">
        <div className="flex flex-row items-end justify-end gap-[38px] w-[1440px] px-[128px]">
        {navData.map((element, idx) => {
          return (
            < >
              {" "}
              <div
                className="flex flex-row items-center gap-2 py-[11px] "
                key={idx}
                onClick={() => (index === idx ? setIndex(null) : setIndex(idx))}
              >
                <Image
                  src={element.img}
                  width={24}
                  height={24}
                  alt="phone-number"
                  className={`${idx === 1 ? "" : ""}  cursor-pointer`}
                />
                <div className="text-white font-normal text-xs leading-[18px] cursor-pointer">
                  {element.des}
                </div>
              </div>
              {index === idx && (
                <div className="absolute right-0 top-0 h-[100vh] bg-white flex flex-col  text-black w-[484px] px-[25px] py-[36px] text-center  z-40">
              
              
                  <div className="flex flex-row items-center justify-between">
                    <div
                      className="w-[20px] h-[20px]"
                      onClick={() => setIndex(null)}
                    >
                      <Image src="/cross-2.png" width={20} height={20} alt="" />
                    </div>
                    <div className="font-normal text-xl leading-[25px]">
                      {element.des}
                    </div>
                    <div></div>
                  </div>


                  <div className="flex flex-col justify-between h-screen  mt-[67px]">
                    <div className="flex flex-col gap-9">
                    {element.elements?.map((item, idx) => {
                      // const isLastElement = idx === element.elements.length - 1;
                      return (
                        <div
                          key={idx}
                          className={` border-[#DDDDDD] flex flex-row items-center gap-6 }`}
                        >
                          <div
                            className={`w-[24px] h-[24px] border-[1px] flex flex-row items-center justify-center rounded-full ${
                              color === idx
                                ? "border-[#3AAE2A]"
                                : "border-[#4D4D4D]"
                            }`}
                            onClick={() => setColor(idx)}
                          >
                            {color === idx && (
                              <div className="w-2 h-2 rounded-full bg-[#3AAE2A]"></div>
                            )}
                          </div>
                          <div
                            className={`font-semibold text-base leading-[18px] ${
                              color === idx
                                ? "text-[#3AAE2A]"
                                : "text-[#4D4D4D]"
                            }`}
                          >
                            {item}
                          </div>
                        </div>
                      );
                    })}
                    </div>
                    <button className="w-[420px] h-[60px] bg-[#3AAE2A] text-white rounded-[4px]">Apply</button>
                  </div>   
                </div>
              )}
            </>
          );
        })}

</div>























      </div>




      <div className="bg-black bg-opacity-[90%] grid place-items-center">
      <div className="px-[128px] flex flex-row items-center justify-between w-[1440px] py-5 ">
        <div className="flex flex-row items-center gap-8">
          <div className="" onClick={handleSidebarToggle}>
            <Image
              src="/hamburger.svg"
              width={27}
              height={10}
              alt="Hamburger Menu"
              className="cursor-pointer"
            />
          </div>
          <div onClick={handleButtonClick}>
            <Image
              src="/Search.svg"
              width={24}
              height={24}
              alt="Hamburger Menu"
              className="cursor-pointer"
            />
          </div>
        </div>
        <div className="">
          <Link href="/">
            <Image
              src="/tp-auction-logo.svg"
              width={295}
              height={41}
              alt="Tp-Auction Logo"
              className="cursor-pointer"
            />
          </Link>
        </div>
        <div className="flex flex-row items-center gap-12">
          <div className="text-white font-normal text-xs leading-[18px] hover:text-[#3AAE2A] cursor-pointer">
            SELL WITH US
          </div>
          <div className="text-white font-normal text-xs leading-[18px] hover:text-[#3AAE2A] cursor-pointer">
            BUY WITH US
          </div>
          <button
            className="bg-[#3AAE2A] w-[128px] h-[50px] rounded-[4px] hover:bg-transparent hover:border-[1px] hover:border-[#3AAE2A] hover:text-[#3AAE2A] "
            onClick={toggleModal}
          >
            Login
          </button>
        </div>
      </div>
      </div>



      {isModalOpen && (
        <LoginSignup isOpen={isModalOpen} onClose={toggleModal} />
      )}

      <Sidebar isOpen={isSidebarOpen} onClose={handleCloseSidebar} />

      <SearchInput
        onButtonClick={handleButtonClick}
        isSearchInputOpen={isSearchInputOpen}
      />
    </div>
  );
}

export default Navbar;
