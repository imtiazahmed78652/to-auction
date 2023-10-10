import React from "react";
import Image from "next/image";
import Navbar from "../components/navbar/Navbar";

function page() {
    const data = [
    {
        brand:'Omega',
    },
    {
        brand:'Omega',
    },
    {
        brand:'Omega',
    },
    ]
  return (
    <>
      <Navbar />
      <div className="grid place-items-center">
        <div className="w-[1440px] px-[128px]">
          <div className="flex flex-row items-center gap-[16px] mt-8">
            <h1 className="font-medium text-base leading-[18px] text-[#878787]">
              Home
            </h1>
            <Image
              src="/dropdown.png"
              width={10}
              height={10}
              alt=""
              className="transform -rotate-90"
            />
            <h1 className="font-medium text-base leading-[18px] text-[#878787]">
              Categories
            </h1>
            <Image
              src="/dropdown.png"
              width={10}
              height={10}
              alt=""
              className="transform -rotate-90"
            />
            <h1 className="font-medium text-base leading-[18px] text-[#BCBCBC]">
              Jewellery
            </h1>
          </div>
          <h1 className="mt-12 font-normal text-2xl leading-[25px] ">
            Jewellery
          </h1>



          <div className="flex flex-row items-center justify-between mt-8">
            <div className="w-[402px] h-[48px] rounded-[4px] border-[1px] border-[#D9D9D9] pl-6 flex flex-row items-center">
              <input
                type="text"
                placeholder="Search"
                className="w-full h-full outline-none font-medium text-[12px] leading-[25px]"
              />
              <button className="w-[100px] h-[46px] bg-[#EEEEEE] font-medium text-[12px] leading-[5px] flex flex-row items-center justify-center gap-[8px] text-[#878787]">
                Keyword{" "}
                <Image src="/dropdown.png" alt="" width={6} height={3} />{" "}
              </button>
            </div>
            <div className="flex flex-row items-center gap-8">
              <div className="flex flex-row items-center gap-[10px] border-[1px] border-[#D9D9D9] rounded-[4px] px-4 py-3">
                <p className="w-[20px] h-[20px] rounded-full bg-[#3AAE2A] text-white flex flex-row items-center justify-center text-[12px]">
                  4
                </p>
                <p>Filter</p>
                <Image src="/filter.png" alt="" width={24} height={24} />
                <div className="w-6 h-6 grid grid-cols-2">
                  <div className="w-[11px] h-[11px] rounded-[1px] border-[2px] border-[]"></div>
                </div>
              </div>
              
              
              <div className="flex flex-row items-center gap-4">
                <div className="border-[1px] border-[#D9D9D9] w-[48px] h-[48px] rounded-[4px] grid grid-cols-2 gap-[2px] place-items-center place-content-center">
                  <div className="w-[11px] h-[11px]  rounded-[1px] border-[2px] border-[#3AAE2A]"></div>
                  <div className="w-[11px] h-[11px]  rounded-[1px] border-[2px] border-[#3AAE2A]"></div>
                  <div className="w-[11px] h-[11px] rounded-[1px] border-[2px] border-[#3AAE2A]"></div>
                  <div className="w-[11px] h-[11px]  rounded-[1px] border-[2px] border-[#3AAE2A]"></div>
                </div>

                <div className="border-[1px] border-[#D9D9D9] w-[48px] h-[48px] rounded-[4px] flex flex-col items-center justify-center gap-[2px]">
                  <div className="w-6 h-[11px] border-[2px] border-[#3AAE2A]"></div>
                  <div className="w-6 h-[11px] border-[2px] border-[#3AAE2A]"></div>
                </div> 
              </div>
            </div>
          </div>

            <div className="w-full flex flex-row justify-end gap-[12px] mt-[26px]">
              {
                    data.map((element,idx)=> {
                        return <div className="w-[135px] h-[36px] bg-[#F2F2F2] rounded-[30px] flex flex-row items-center justify-center gap-4">
                        <p className="font-medium text-xs leading-[18px] text-[#939393]">Brand: <span>{element.brand}</span></p>
                        <Image src = '/clear-filter.png' alt = '' width = {12} height = {12}/>
                    </div>
                    })
              }  
              <div className="w-[135px] h-[36px] bg-[#3AAE2A33] bg-opacity-[20%] cursor-pointer rounded-[30px] flex flex-row items-center justify-center gap-4">
                        <p className="font-medium text-xs leading-[18px]  text-[#3AAE2A]"><span>Clear All</span></p>
                        <Image src = '/clear-filter.png' alt = '' width = {12} height = {12}/>
                    </div>
            </div>

        </div>
      </div>
    </>
  );
}

export default page;
