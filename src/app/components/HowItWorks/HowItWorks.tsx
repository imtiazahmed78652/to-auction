import React from 'react'
import { monumentum } from '@/app/layout'

function HowItWorks() {
  return (
    <>
    <div className="mt-[220px] flex flex-col justify-center items-center">
            <h1
              className={` ${monumentum.className} text-[#686868] font-normal text-[24px] leading-[46px] `}
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
                  {/* <img src="/Vector 11.png" alt="" /> */}
                  </div>
                  {/* <Image src = '/Vector 11.png' width = {172} height = {40.33} alt = ''/> */}
                  <div className="flex flex-col mt-10">
                  <div className="w-[56px] h-[56px] bg-white rounded-[8px] flex flex-row items-center justify-center">01</div>
                  <h1 className="text-green mt-[32px] font-bold font-satoshi text-xl leading-[38px]">Browse Items</h1>
                  <p className="w-[203px] font-medium font-satoshi text-[16px] leading-[21.6px] text-[#FFFFFF]">Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalar cons elementum tempus hac.</p>
                  </div>
                  <div className="w-[172.5px] h-[43.33px]">
                  {/* <Image src = '/Vector 12.png' width={5} height={5} alt=""/> */}
                  {/* <img src="/Vector 12.png" alt="" /> */}
                  </div>
                  <div className="flex flex-col">
                  <div className="w-[56px] h-[56px] bg-white rounded-[8px] flex flex-row items-center justify-center">01</div>
                  <h1 className="text-green mt-[32px] font-bold font-satoshi text-xl leading-[38px]">Browse Items</h1>
                  <p className="w-[203px] font-medium font-satoshi text-[16px] leading-[21.6px] text-[#FFFFFF]">Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalar cons elementum tempus hac.</p>
                  </div>
              </div>




            </div>




          </div>
    
    </>
  )
}

export default HowItWorks