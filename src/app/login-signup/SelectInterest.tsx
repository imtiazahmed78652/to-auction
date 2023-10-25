"use client";
import React, { useContext } from "react";
import { Pagination } from "swiper/modules";
import Paginations from "./Paginations";
import Image from "next/image";
import Button from "../components/Button/Button";

import {
  MYPagination,
  UserAuth,
  HandleInterest,
} from "../ContextApi/contextProvide";

const SelectInterest = () => {
  const { myHeadingText, setMyHeadingText } = useContext(MYPagination);
  const { interest, setInterest } = useContext(HandleInterest);
  const { phoneNumber } = useContext(UserAuth);

  const data = [
    {
      img: "/hand-bag.png",
      name: "Jewellery",
    },
    {
      img: "/watch.png",
      name: "Watches",
    },
    {
      img: "/ring.png",
      name: "Ring",
    },
  ];
  const handleSubmit = () => {
    console.log(interest, "on Click");
    if (interest.length === 0) {
      return false;
    } else {
      setMyHeadingText("Choose Payment Method");
    }
  };
  const handleAddMyInterests = (e: string) => {
    setInterest((prevInterests) => [...prevInterests, e]);
  };
  const handleRemoveMyInterest = (e: string) => {
    setInterest((prevInterest) => prevInterest.filter((item) => item !== e));
  };
  console.log(interest, "my interest");
  return (
    <div className="mt-[50px] grid place-items-center">
      <div className="w-[400px]">
        <Paginations />
      </div>
      <div className="grid place-items-center mt-12">
        <div className="w-[400px] grid grid-cols-2 gap-6 place-items-center">
          {data.map((element, idx) => {
            const selectedInterest = interest.includes(element.name);
            return (
              <div
                onClick={() => {
                  if (interest.includes(element.name)) {
                    handleRemoveMyInterest(element.name);
                  } else {
                    handleAddMyInterests(element.name);
                  }
                }}
                key={idx}
                className={` ${
                  selectedInterest ? "border-green" : "border-dark-border"
                } cursor-pointer hover:shadow-xl w-[188px] h-[50px] border-[2px] rounded-[38px] flex flex-row items-center justify-center gap-4`}
              >
                <Image src={element.img} width={25} height={28} alt="" />
                <h1>{element.name}</h1>
              </div>
            );
          })}
        </div>
      </div>
      <Button
        className="w-[400px] h-[56px]  rounded-[8px] mt-[62px] text-white"
        btnText="Create"
        onClick={handleSubmit}
      />
    </div>
  );
};

export default SelectInterest;
