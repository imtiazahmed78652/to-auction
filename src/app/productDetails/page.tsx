"use client";
import React from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

import { manrope, monumentum } from "../layout";
import { useRouter } from "next/router";
// import { Image } from 'next/image'
import Image from "next/image";
import Button from "../components/Button/Button";
import dropDownNoti from ".././assets/dropDownNoti.png";
import eyeGreen from ".././assets/eyegreen.png";
import { data, biddingHistory, conditionScore, logos } from "./data";
import whatsapp from '../assets/whatsapp.png'
import calenderWhite from '../assets/calender-white.png'
import heartWhite from '../assets/heartWhite.png'
import share from '../assets/share.png'
import Link from "next/link";

function ProductDetails() {
  return (
    <>
      <Navbar />
      <div className="flex justify-center font-satoshi">
        <div className="w-[1440px] px-[128px] bg-white relative flex justify-center">
          <div className="px-[128px] py-[22px] flex flex-row items-center justify-between border-b-[1px] bg-white border-[#C9C9C9]  fixed z-50 w-[1440px]">
            <div className="flex flex-row items-center bg-white justify-between w-full">

                <div className="flex flex-row items-center gap-[125px]">
                  <div className="flex flex-col ">
                    <h1 className="text-black font-medium font-satoshi text-base leading-[18px]">
                      $200
                    </h1>
                    <p className="font-normal text-dark-text-two font-satoshi text-sm leading-[18px] mt-[11px]">
                      Highest Bid
                    </p>
                  </div>
                  <div className="flex flex-col ">
                    <h1 className="text-black font-medium font-satoshi text-base leading-[18px]">
                      19h 27m 55s
                    </h1>
                    <p className="font-normal text-dark-text-two font-satoshi text-sm leading-[18px] mt-[11px]">
                      TIME
                    </p>
                  </div>
                  <div className="flex flex-col ">
                    <h1 className="text-black font-medium font-satoshi text-base leading-[18px]">
                      31
                    </h1>
                    <p className="font-normal text-dark-text-two font-satoshi text-sm leading-[18px] mt-[11px]">
                      BIDS
                    </p>
                  </div>
                </div>


              <div className="flex flex-row items-center gap-[32.73px]">
                <div className="flex flex-row items-center gap-6">
                  <button className="w-[143px] h-[48px] rounded-[4px] bg-[#F2F2F2] font-bold text-[14px] leading-[18px] text-[#6D6D6D] flex flex-row items-center justify-center gap-[16px]">
                    <span className="text-green">$250</span>
                    <Image
                      src="/drop-down-green.png"
                      width={16}
                      height={12}
                      alt=""
                    />{" "}
                  </button>
                  <Button
                    btnText="Set Max Bid"
                    className="w-[144px] h-[48px] text-white rounded-[4px]"
                  />
                  <Button
                    btnText="Place Bid"
                    className="w-[177px] h-[48px] border-[1px] border-[#6D6D6D] bg-white hover:bg-white hover:shadow text-[#6D6D6D] rounded-[4px] "
                  />
                </div>
              </div>
<div className="fixed bottom-10 right-[15%] w-[62px] h-[62px] rounded-full bg-white shadow-2xl flex flex-row items-center justify-center">
  <Link href='https://web.whatsapp.com/' target="_blank">
  <Image src = {whatsapp} width={38} height={38} alt="Whatsapp"/> 
  </Link>
</div> 

            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-28">
        <div className="w-[1440px]">
          <div className="flex flex-row w-full  gap-[100px]">
            <div className="w-[732px]">
              <div className="pl-[128px] bg-[#F5F5F5] pt-6 pb-[6px]">
                <div className="flex flex-row items-center justify-center gap-[37px]">
                  <button className="bg-white shadow-lg w-[47.74px] h-[48px] rounded-full border-[1px] border-[#7E7E7E80] flex flex-row items-center justify-center">
                    <Image
                      src="/design-arrow.png"
                      alt=""
                      width={27}
                      height={16}
                    />
                  </button>
                  <div className="w-[433px] h-[638px]">
                    <Image src="/image-2.png" width={380} height={563} alt="" />
                  </div>
                  <button className="w-[47.74px] shadow-lg bg-white mr-[38px] h-[48px] rounded-full border-[1px] flex flex-row border-[#7E7E7E80] items-center justify-center">
                    <Image
                      src="/design-arrow-1.png"
                      alt=""
                      width={27}
                      height={16}
                    />
                  </button>
                </div>

                <div className="flex flex-row items-center justify-center mt-9 gap-[32px]">
                  <div className="w-[91px] h-[92px]">
                    <Image src="/image2-1.png" width={91} height={92} alt="" />
                  </div>
                  <div className="w-[91px] h-[92px]">
                    <Image src="/image-2-2.png" width={91} height={92} alt="" />
                  </div>
                  <div className="w-[91px] h-[92px]">
                    <Image src="/image-2-3.png" width={91} height={92} alt="" />
                  </div>
                  <div className="w-[91px] h-[92px]">
                    <Image src="/image-2-4.png" width={91} height={92} alt="" />
                  </div>
                  <div className="w-[91px] h-[92px]">
                    <Image src="/image-2-5.png" width={91} height={92} alt="" />
                  </div>
                </div>
              </div>
              <div className="pl-[128px] flex flex-col">

                <div className="py-8 flex flex-row items-center gap-6">
                  <button className="flex flex-row items-center justify-center gap-[8px] w-[177px] h-[48px] rounded-[4px] bg-[#4B4B4B]">
                  <Image src = {calenderWhite} width = {14.22} height = {8} alt = ''/>
                  <span className="text-white font-bold text-[12px] leading-[18px]">Add to Calendar</span>
                  </button>
                  <button className="flex flex-row items-center justify-center gap-[8px] w-[177px] h-[48px] rounded-[4px] bg-[#4B4B4B]">
                  <Image src = {heartWhite} width = {14.22} height = {8} alt = ''/>
                  <span className="text-white font-bold text-[12px] leading-[18px]">Add to Calendar</span>
                  </button>
                  <button className="flex flex-row items-center justify-center gap-[8px] w-[177px] h-[48px] rounded-[4px] bg-[#4B4B4B]">
                  <Image src = {share} width = {14.22} height = {8} alt = ''/>
                  <span className="text-white font-bold text-[12px] leading-[18px]">Add to Calendar</span>
                  </button>
                </div>
                <div className=" mt-8 font-semibold text-xs leading-[18px] text-dark-border gap-[16px] flex flex-row items-center">
                  <span>Home</span>{" "}
                  <span>
                    {" "}
                    <Image
                      src="/arrow-small.png"
                      width={3.52}
                      height={7.06}
                      alt="arrow"
                    />{" "}
                  </span>{" "}
                  <span> Category</span>{" "}
                  <span>
                    {" "}
                    <Image
                      src="/arrow-small.png"
                      width={3.52}
                      height={7.06}
                      alt="arrow"
                    />{" "}
                  </span>{" "}
                  <span className="text-light">Jewellery</span>
                </div>

                <div className="mt-12 font-normal font-satoshi text-dark-border text-sm leading-[18px]">
                  Lorem ipsum dolor sit amet consectetur. Magna elementum risus
                  eu tellus id viverra. Purus commodo augue nibh odio cursus
                  nunc facilisis. Rhoncus enim et faucibus nunc. Ornare proin
                  fames platea senectus convallis netus. Eu ipsum natoque
                  tristique sagittis viverra. Aliquam nibh condimentum massa
                  commodo. Tristique augue in tincidunt eleifend cras. Sem cras
                  sit habitant lectus est.
                </div>
                <div
                  className={`text-green font-semibold text-base leading-[25px] flex flex-row items-center gap-[8px]   ${manrope.className}`}
                >
                  {" "}
                  <span> See More</span>{" "}
                  <Image
                    src="/drop-down-green.png"
                    width={14}
                    height={7}
                    alt=""
                  />{" "}
                </div>
              </div>

              <div className="pl-[128px] mt-[64px] font-satoshi">
                <div className="grid grid-cols-2 place-content-between gap-4 ">
                  {data.map((item, index) => (
                    <div key={index} className="flex flex-col ">
                      <div className="text-sm leading-[25px] text-[#878787] font-semibold ">
                        {item.name}
                      </div>
                      <div className="text-lg font-semibold leading-[25px] text-black">
                        {item.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="w-[479px] font-normal text-[30px] leading-[25px]">
             
             
              <div className="mt-[48px] flex flex-row justify-between">
                <div className="flex flex-row items-center gap-4">
                  <Image
                    src="/arrow-back.png"
                    alt=""
                    width={22.5}
                    height={12.5}
                  />
                  <div className="font-satoshi text-sm leading-[25px] text-dark-text-two">
                    Previous Lot
                  </div>
                </div>

                <div className="flex items-center text-[16px] gap-[8p x] leading-[25px] font-normal">
                  <span className="text-[#6D6D6D] ">Lot:</span>
                  <span className="text-green font-bold">12</span>
                </div>
                <div className="flex flex-row items-center gap-4">
                  <p className="font-satoshi text-sm leading-[25px] text-dark-text-two">
                    Next lot
                  </p>
                  <Image
                    src="/right-arrow.png"
                    width={22.5}
                    height={12.5}
                    alt=""
                  />
                </div>
              </div>
              <div className="flex flex-row items-center justify-between">
                <div>
                  <h1
                    className={`font-satoshi  mt-[33px] font-normal  text-2xl leading-[25px]`}
                  >
                    Centrix Automate Open Heart
                  </h1>
                  <p className="font-semibold text-base leading-[18px] mt-6 text-[#878787]">
                    Product ID: <span className="text-[#878787]">116519</span>
                  </p>
                </div>
                <div className="bg-[#F4F4F4] w-[77px] h-[32px] flex flex-row items-center justify-center rounded-[2px] gap-[9.67px]">
                  <Image src={eyeGreen} alt="" width={16.67} height={11.67} />
                  <span className="text-green font-medium text-[12px] leading-[18px]">
                    198
                  </span>
                </div>
              </div>



              <div className="mt-[34px] w-full border-[1px] border-[#D9D9D9]  pt-[40px]">
                <div className="pb-[30px] border-b-[1px] border-[#D9D9D9]">
                  <div className="flex flex-row items-center justify-center  gap-[35px]">
                    {logos.map((element, idx) => {
                      return (
                        <Image
                          key={idx}
                          src={element}
                          width={75.38}
                          height={75.38}
                          alt=""
                        />
                      );
                    })}
                  </div>
                </div>
                <div className="flex flex-col items-start  ">
                  <h1 className="font-medium text-[14px] ml-[31px] leading-[18px] mt-6 text-green">
                    Condition Score:
                  </h1>

                  <div className="py-[37px] flex flex-row relative  items-center border-b-[1px] border-[#D9D9D9] justify-center gap-[1px] w-full mt-[68px] ">
                    <div className="w-[419px] flex flex-row relative items-center justify-between">
                      <div className="w-[28px] h-[28px] border-[2px] border-[#D9D9D9] rounded-full bg-[#0E6D00] flex flex-row justify-center items-center"></div>
                      <div className="h-[10px] bg-[#0E6D00] absolute border-b-[2px] border-t-[2px] left-[25.5px] w-[74.8px] z-20 border-[#D9D9D9]"></div>
                      <div className="w-[28px] h-[28px] border-[2px] border-[#D9D9D9] rounded-full bg-[#0E6D00]"></div>
                      <div className="h-[10px] bg-[#0E6D00] absolute border-b-[2px] border-t-[2px] left-[123px] w-[75px] z-20 border-[#D9D9D9]"></div>
                      <div className="w-[28px] h-[28px] border-[2px] border-[#D9D9D9] rounded-full bg-[#0E6D00]"></div>
                      <div className="h-[10px] bg-[#0E6D00] absolute border-b-[2px] border-t-[2px] left-[221.3px] w-[74.5px] z-20 border-[#D9D9D9]"></div>

                      <div className="w-[28px] h-[28px] border-[2px] border-[#D9D9D9] rounded-full bg-[#0E6D00]"></div>

                      <div className="h-[10px] bg-[#D9D9D9] absolute border-b-[2px] border-t-[2px] left-[318.5px] w-[75.4px] z-20 border-[#D9D9D9]"></div>

                      <div className="w-[28px] h-[28px] border-[2px] border-[#D9D9D9] rounded-full bg-[#0E6D00]"></div>
                      <div className="w-[28px] absolute right-0 h-[28px] border-[2px] border-[#D9D9D9] rounded-full bg-[#D9D9D9] z-20"></div>

                      <div className="w-[410px]  h-[9px] left-1 right-1 absolute z-10 bg-[#0E6D00]"></div>

                      <div className="absolute w-[40px] h-[40px] left-[285px] rounded-full bg-white flex flex-row items-center justify-center z-30">
                        <div className="w-[32px] h-[32px] bg-[#D9D9D9] rounded-full flex flex-row items-center justify-center">
                          <div className="w-[16px] h-[16px] bg-[#0E6D00] rounded-full"></div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-center left-[64%] absolute -top-[30px]">
                      <div className="w-[54px] h-[38px] bg-[#0E6D00] rounded-[10px] flex flex-row items-center justify-center text-white font-bold text-[18px] leading-[18px]">
                        4
                      </div>
                      <div className=" h-0 w-0 border-x-[10px]  border-x-transparent border-b-[12px] border-b-[#0E6D00]  rotate-180"></div>
                    </div>
                  </div>

                  <div className="flex flex-row justify-center items-center w-full mt-4 pb-[22px]">
                    <h1 className="bg-[#F0F0F0] p-6 font-medium text-[14px] leading-[25px] w-[434px] rounded-[8px] text-[#868686]">
                      The Buyer’s Premium is charged in addition to the sale
                      price and is payable directly to Watch Collecting. The fee
                      and whether you are charged sales tax is based on your
                      location.Buyer’s premium is 15%
                      <br />
                      <br />
                      For more information, please check our fees
                    </h1>
                  </div>
                </div>
              </div>

              <div className="w-[479px]  rounded-[4px] border-[1px] border-[#D9D9D9] mt-[48px] pb-[21px]">
                <h1 className="font-semibold text-xl leading-[18px] border-b-[1px] border-[#D9D9D9]  px-[48px] mt-[48px] pb-[24px]">
                  Bidding History
                </h1>
                <div className="flex flex-col items-center gap-[32px] mt-6 w-full">
                  {biddingHistory.map((element, idx) => {
                    return (
                      <div
                        key={idx}
                        className="flex flex-row items-center justify-between w-full px-[48px]"
                      >
                        <h1 className="font-bold text-xs leading-[18px] text-[#737373]  ">
                          {element.name}
                        </h1>
                        <p className="font-semibold text-base leading-[18px] text-[#737373]  ">
                          {element.time}
                        </p>
                        <div className="font-bold text-base leading-[18px] text-[#1D1D1D] ">
                          {element.price}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="w-[479px]  rounded-[4px] border-[1px] border-[#D9D9D9] mt-12 px-[48px] py-[48px] font-satoshi ">
                <div className="flex flex-col">
                  <h1 className="font-satoshi font-bold text-sm leading-[25px]">
                    Payment Methods
                  </h1>
                  <div className="flex flex-row items-center mt-6 gap-4">
                    <div className="relative w-[60px] h-[40px]">
                      <Image
                        src="/master-card-2.png"
                        alt=""
                        layout="fill"
                        objectFit="cover"
                        objectPosition="center"
                      />
                    </div>
                    <div className="relative w-[60px] h-[40px]">
                      <Image
                        src="/visa-two.png"
                        alt=""
                        layout="fill"
                        objectFit="cover"
                        objectPosition="center"
                      />
                    </div>
                    <div className="relative w-[32px] h-[32px]">
                      <Image
                        src="/Paypal-two.png"
                        alt=""
                        layout="fill"
                        objectFit="cover"
                        objectPosition="center"
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-16  flex flex-row  gap-[32px] font-satoshi">
                  <div className="flex flex-col">
                    <h1 className="font-bold text-sm text-black  leading-[25px]">
                      Share on Social media
                    </h1>
                    <div className="flex flex-row items-center gap-4 mt-[24px]">
                      {[
                        "/twitter-2.png",
                        "/instagram-two.png",
                        "/facebook-two.png",
                      ].map((element, idx) => {
                        return (
                          <div
                            key={idx}
                            className="w-[60px] h-[60px] border-[1px] flex flex-row items-center justify-center border-[#D9D9D9]"
                          >
                            <Image
                              width={30}
                              height={30}
                              src={element}
                              alt=""
                            />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <div className="flex flex-col justify-between">
                    <h1 className="font-bold text-sm leading-[25px] font-satoshi w-[145px]">
                      Still have a question?
                    </h1>
                    <div className="flex flex-row items-center justify-center w-[138px] h-[60px] border-[1px] border-[#D9D9D9] gap-[10px] mt-[24px]">
                      <h1 className="font-normal text-xs text-[#434343] leading-[18px]">
                        Message Us
                      </h1>
                      <Image
                        src="/whatsapp.png"
                        width={36}
                        height={36}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div></div> */}
      <div className="mt-[91px]">
        <Footer />
      </div>
    </>
  );
}

export default ProductDetails;
