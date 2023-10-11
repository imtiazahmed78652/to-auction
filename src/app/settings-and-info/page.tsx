'use client'
import React,{useState,useEffect} from "react";
import Image from "next/image";
import Navbar from "../components/navbar/Navbar";
import Card from "./card";
function SettingsAndInfo() {

    const [name, setName] = useState('My Bids');
  const elements = [
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
        name:'All',
        number:'14',
    },
    {
        name:'WON',
        number:'03',
    },
    {
        name:'Loose',
        number:'11',
    },
  ]
  const cardData = [
    {
        title:'Decorative Objects Auction (Modern)',
        productId:116519,
        bidFor:'4100 AED',
        dateTime:''
    }
  ]
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
          <div className="flex flex-row gap-[125px]">
            <div className="w-[278px] h-[709px] shadow-md mt-16 px-6 py-8 flex flex-col gap-4">
              {elements.map((item, idx) => {
                return (
                  <div
                    key={idx}
                    className={`w-full hover:text-[#3AAE2A] h-[48px] rounded-[8px] flex flex-row items-center px-6  gap-4 ${name === item.name ? 'bg-[#3AAE2A] hover:text-white text-white' : ''}`}
                    onClick = {()=> setName(item.name)}
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
            <div className="w-full">
                
                
              {
                name === 'My Bids' ? <div className="flex flex-row items-center gap-6">
                {
                 detail.map((element,idx)=>{
                             return <div className="px-[16px] h-[34px] rounded-[25px] border-[1px] border-[#E1E1E1] hover:border-[#3AAE2A]  flex flex-row items-center justify-center gap-[8px]">
                             <p className="font-normal text-sm leading-[18px]">{element.name}</p>
                             <p className="text-black font-normal text-[14px] leading-[18px]">{element.number}</p>
                         </div>  
                 })
                } 
                 
         </div> :  <div className="h-[34px]"></div>
              }   


                <div className="grid grid-cols-2 gap-6 w-full mt-8">
               {
                name === 'My Bids' && <Card/> 
               }   

                {
                        name === 'Wish List' && <Card/>
                }
                {
                        name === 'Winnings' && <Card/>
                }
                {
                        name === 'Payments' && <Card/>
                }
                {
                        name === 'Personal Information' && <Card/>
                }
                </div>
                




                

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SettingsAndInfo;
