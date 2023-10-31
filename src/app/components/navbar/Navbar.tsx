"use client";

import LoginSignup from "@/app/login-signup/LoginSignup";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect, useContext } from "react";
import Sidebar from "../Sidebar/Sidebar";
import SearchInput from "../Search/SearchInput";
import { useAppSelector } from "@/app/hooks";
import {
  HandleModal,
  MYPagination,
  UserAuth,
} from "@/app/ContextApi/contextProvide";
import notification from "../../assets/notification.png";
import profilePic from "../../assets/profile-pic.png";
import profileDropDown from "../../assets/profile-dropdown.png";
import dropDownImage from "../../assets/Rectangle 5382.png";
import dropDownNoti from "../../assets/dropDownNoti.png";
import Button from "../Button/Button";

function Navbar() {
  const [index, setIndex] = useState<number | null>(null);
  const [isSearchInputOpen, setIsSearchInputOpen] = useState(false);
  const [color, setColor] = useState<number | null>(null);
  const { isModalOpen, setIsModalOpen } = useContext(HandleModal);
  const { myHeadingText, setMyHeadingText } = useContext(MYPagination);
  const { fullName } = useContext(UserAuth);
  const [showNotification, setShowNotification] = useState(false);
  const [profileDropDownState, setProfileDropDownState] = useState(false);

  const handleButtonClick = () => {
    setIsSearchInputOpen(!isSearchInputOpen);
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
  const data = [
    {
      color: "green",
      img: true,
      des: "Please add credit card to your billing information to avoid blockage of your account.",
      time: "4 days ago",
    },
    {
      color: "green",
      img: true,
      des: "Please add credit card to your billing information to avoid blockage of your account.",
      time: "4 days ago",
    },
    {
      color: "green",
      img: false,
      des: "Please add credit card to your billing information to avoid blockage of your account.",
      time: "4 days ago",
    },
  ];

  const nodeRef = React.useRef<HTMLDivElement | null>(null);
  const secondNodeRef = React.useRef<HTMLDivElement | null>(null);
  const handleClick = (
    state: boolean,
    setState: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    if (!state) {
      document.addEventListener("click", handleOutsideClick, true);
    } else {
      document.removeEventListener("click", handleOutsideClick, true);
    }
    setState(false);
    // setProfileDropDownState(false);
  };
  const handleOutsideClick = (e: MouseEvent) => {
    if (nodeRef.current && !nodeRef.current.contains(e.target as Node)) {
      handleClick(profileDropDownState, setProfileDropDownState);
    }
    if (
      secondNodeRef.current &&
      !secondNodeRef.current.contains(e.target as Node)
    ) {
      handleClick(showNotification, setShowNotification);
    }
  };

  React.useEffect(() => {
    const handleDocumentClick = (e: MouseEvent) => {
      handleOutsideClick(e);
    };
    document.addEventListener("mousedown", handleDocumentClick);
    return () => {
      document.removeEventListener("mousedown", handleDocumentClick);
    };
  }, []);

  return (
    <div className="w-full sticky max-w-full left-auto right-auto top-0 z-50 block">
      <div className="grid place-items-center relative bg-black  w-full  ">
        <div className="flex flex-row items-end justify-end gap-[38px] w-[1440px] px-[128px]">
          {navData.map((element, idx) => {
            return (
              <div key={idx}>
                <div
                  className="flex flex-row items-center gap-2 py-[11px]"
                  onClick={() =>
                      index === 1 && index === idx ? setIndex(null) : setIndex(idx)
                  }
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
                        className="w-[20px] cursor-pointer h-[20px]"
                        onClick={() => setIndex(null)}
                      >
                        <Image
                          src="/cross-2.png"
                          width={20}
                          height={20}
                          alt=""
                        />
                      </div>
                      <div className="font-normal text-xl leading-[25px]">
                        { element.des}
                      </div>
                      <div></div>
                    </div>

                    <div className="flex flex-col justify-between h-screen  mt-[67px]">
                      <div className="flex flex-col gap-9">
                        {element.elements?.map((item, idx) => {
                          return (
                            <div
                              key={idx}
                              className={`border-[#DDDDDD] flex flex-row items-center gap-6 }`}
                            >
                              <div
                                className={`w-[24px] cursor-pointer h-[24px] border-[1px] flex flex-row items-center justify-center rounded-full ${
                                  color === idx
                                    ? "border-green"
                                    : "border-[#4D4D4D]"
                                }`}
                                onClick={() => setColor(idx)}
                              >
                                {color === idx && (
                                  <div className="w-2 h-2 rounded-full bg-green"></div>
                                )}
                              </div>
                              <div
                                className={`font-semibold cursor-pointer text-base leading-[18px] ${
                                  color === idx
                                    ? "text-green"
                                    : "text-[#4D4D4D]"
                                }`}
                                onClick={() => setColor(idx)}
                              >
                                {item}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                      <Button btnText="Apply" className="w-[420px] h-[60px] bg-green text-white rounded-[4px]" onClick={() => setIndex(null)}/>
                    </div>
                  </div>
                )}
              </div>
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
            <div className="text-white font-normal text-xs leading-[18px] hover:text-green cursor-pointer">
              SELL WITH US
            </div>
            <div className="text-white font-normal text-xs leading-[18px] hover:text-green cursor-pointer">
              BUY WITH US
            </div>
            {myHeadingText === "Payment Verified" ? (
              <div className="flex flex-row items-center gap-4">
                <div ref={secondNodeRef}>
                  <div
                    className="w-[36px] relative h-[36px] bg-[#4E4E4E] flex flex-row items-center justify-center rounded-full  cursor-pointer"
                    onClick={() => setShowNotification(!showNotification)}
                  >
                    <Image src={notification} width={16} height={16} alt="" />
                    {showNotification && (
                      <div className="absolute w-[486px] px-[32px]  h-[390px] bg-white top-10 right-0 rounded-[20px] flex flex-col">
                        <div className="flex flex-row items-center justify-between py-[24px] border-b-[2px] border-[#D9D9D9] ">
                          <div className="font-normal text-[14px] leading-[46px] text-green">
                            Notification
                          </div>
                          <div className="flex flex-row items-center gap-[5px]  ">
                            <span> All </span>
                            <Image
                              src={dropDownNoti}
                              width={10}
                              height={5}
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="mt-[24px]">
                          <h1 className="text-[#686868] font-bold text-[14px] leading-[18.9px] font-satoshi">
                            Earlier
                          </h1>
                          {data.map((element, idx) => {
                            return (
                              <div
                                className="flex flex-row items-center gap-[10px] mt-[19px]"
                                key={idx}
                              >
                                {element.img ? (
                                  <div className="w-[6px] h-[6px] bg-green rounded-full" />
                                ) : (
                                  <div className="w-[6px] h-[6px] rounded-full" />
                                )}
                                <div className="w-[48px] h-[48px] rounded-full bg-[#D9D9D9]"></div>

                                <div className="flex flex-col max-w-[350px]">
                                  <p className="font-bold text-[12px] leading-[16.2px] font-satoshi">
                                    {element.des}
                                  </p>
                                  <p className="font-satoshi font-normal text-[12px]">
                                    {element.time}
                                  </p>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div ref={nodeRef} className="fads">
                  <div
                    className="w-[36px] h-[36px] rounded-full cursor-pointer relative hover:shadow-xl shadow-white"
                    onClick={() =>
                      setProfileDropDownState(!profileDropDownState)
                    }
                  >
                    {" "}
                    <Image
                      src={profilePic}
                      width={36}
                      height={36}
                      alt="Profile Picture"
                    />{" "}
                    <div className="absolute w-[12px] h-[12px] rounded-full bg-white flex flex-row  justify-center items-center right-0 bottom-0 z-6">
                      <Image
                        src={profileDropDown}
                        height={10}
                        width={8}
                        alt=""
                      />
                    </div>{" "}
                    {profileDropDownState && (
                      <div
                        className="absolute flex flex-col top-10 right-0 w-[227px] px-[18px] py-[16px]  bg-white rounded-[12px] shadow-xl"
                        style={{ backgroundImage: `url(${dropDownImage})` }}
                      >
                        <div className="flex flex-row items-center gap-[8px]">
                          <div className="w-[36px] h-[36px] rounded-full border-[1px] border-[#B9B9B9]">
                            <Image
                              src={profilePic}
                              width={36}
                              height={36}
                              alt=""
                            />
                          </div>
                          <h1 className="text-green font-medium text-[12px]">
                            abc@email.com
                          </h1>
                        </div>
                        <Link href="/seller-dashboard">
                          <div className="mt-[13px] py-[18px] border-t-[1px] border-b-[1px] border-[#DDDDDD]  text-xs leading-[18px] font-satoshi text-[#999999] hover:text-green">
                            Seller Dashboard
                          </div>
                        </Link>
                        <Link href="/settings-and-info">
                          <div className=" py-[18px] border-b-[1px] border-[#DDDDDD] text-xs leading-[18px] font-satoshi text-[#999999] hover:text-green">
                            Setting & Info
                          </div>
                        </Link>
                        <div className="flex flex-row items-center text-[#FF6666] gap-[8px] mt-[12px]">
                          {" "}
                          <Image
                            src="/logout.png"
                            width={20}
                            height={20}
                            alt="Logout button"
                          />{" "}
                          Logout
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ) : (
              <button
                className="bg-green w-[128px] h-[50px] rounded-[4px] hover:bg-transparent hover:border-[1px] hover:border-green hover:text-green "
                onClick={() => setIsModalOpen(true)}
              >
                Login
              </button>
            )}
          </div>
        </div>
      </div>

      {isModalOpen && <LoginSignup />}

      <Sidebar isOpen={isSidebarOpen} onClose={handleCloseSidebar} />

      <SearchInput
        onButtonClick={handleButtonClick}
        isSearchInputOpen={isSearchInputOpen}
      />
    </div>
  );
}

export default Navbar;
