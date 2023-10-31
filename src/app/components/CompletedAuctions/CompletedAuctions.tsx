import React from 'react'
import Image from 'next/image'
import { monumentum } from '@/app/layout'
function CompletedAuctions() {
  return (
    <div className=" mt-[180px] flex flex-col items-center justify-center">
    <div className="w-[1440px] flex flex-col items-center justify-center px-[128px]">
      <h1
        className={`font-normal text-[24px] leading-[46px] text-[#686868] ${monumentum.className}`}
      >
        Completed Auctions
      </h1>
      <div className="bg-[#3AAE2A] w-[286px] h-[2px] mt-[32px]"></div>
      <div className="flex flex-row items-center mt-[64px] gap-6 w-full">
        <div className="flex flex-col w-[580px] ">
          <div className=" h-[320px] bg-[#434058] p-4 flex flex-row gap-4 ">
            <div className="flex flex-col gap-4">
              <div className="w-[174px] h-[179px] overflow-hidden">
                <Image
                  src="/Rectangle 5431.png"
                  width={174}
                  height={179}
                  alt="Ready to be auctioned image"
                />
              </div>
              <div className="w-[174px] h-[93px] overflow-hidden">
                <Image
                  src="/Rectangle 54302.png"
                  width={174}
                  height={93}
                  alt="Ready to be auctioned image"
                />
              </div>
            </div>
            <div className="flex flex-col-reverse gap-4">
              <div className="w-[174px] h-[179px] overflow-hidden">
                <Image
                  src="/Rectangle 5424.png"
                  width={252}
                  height={267}
                  alt="Ready to be auctioned image"
                />
              </div>
              <div className="w-[174px] h-[93px] overflow-hidden">
                <Image
                  src="/Rectangle 5429.png"
                  width={252}
                  height={137}
                  alt="Ready to be auctioned image"
                />
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="w-[168px] h-[179px] overflow-hidden">
                <Image
                  src="/Rectangle 5428.png"
                  width={252}
                  height={267}
                  alt="Ready to be auctioned image"
                />
              </div>
              <div className="w-[168px] font-normal text-lg  leading-[25px] h-[137px] bg-transparent flex flex-col items-center justify-center">
                +33 more
              </div>
            </div>
          </div>
          <div className="flex flex-row items-start font-satoshi justify-between mt-6 text-[#686868]">
            <div className="flex flex-col">
              <h1 className="font-medium text-xl leading-[25px]">
                DXB 034 2023 | Luxury Watches Auction
              </h1>
              <p className="mt-4 font-medium text-base leading-[25px] text-[#AAAAAA]">
                Started: 05 September, 19:58 UTC+4
              </p>
              {/* <div className="mt-8 flex flex-row items-center gap-4 text-[#3AAE2A] text-lg font-normal">
                Enter Live Auctions{" "}
                <Image
                  src="/arrow-green.png"
                  width={22.5}
                  height={12.5}
                  alt=""
                />{" "}
              </div> */}
            </div>
          </div>
        </div>

        <div className="flex flex-col w-[580px]  overflow-hidden">
          <div className="h-[320px] bg-[#A1E5B8] p-4 flex flex-row  justify-center gap-4">
            <div className="flex flex-col gap-4 ">
              <div className="w-[174px] h-[179px] overflow-hidden">
                <Image
                  src="/Rectangle 54311.png"
                  width={174}
                  height={179}
                  alt="Ready to be auctioned image "
                  className="overflow-hidden"
                />
              </div>
              <div className="w-[179px] h-[93px] overflow-hidden">
                <Image
                  src="/Rectangle 5430.png"
                  width={174}
                  height={93}
                  alt="Ready to be auctioned image"
                  className=""
                />
              </div>
            </div>
            <div className="flex flex-col-reverse gap-4 ">
              <div className="w-[174px] h-[179] overflow-hidden">
                <Image
                  src="/Rectangle 54243.png"
                  width={174}
                  height={179}
                  alt="Ready to be auctioned image"
                />
              </div>
              <div className="w-[174px] h-[93px] overflow-hidden">
                <Image
                  src="/Rectangle 54294.png"
                  width={174}
                  height={73}
                  alt="Ready to be auctioned image"
                />
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="w-[174px] h-[179px] overflow-hidden">
                <Image
                  src="/Rectangle 54285.png"
                  width={252}
                  height={420}
                  alt="Ready to be auctioned image"
                  className="overflow-hidden"
                />
              </div>
              <div className="w-[173px] font-normal text-lg  leading-[25px] h-[93px] bg-transparent flex flex-col items-center justify-center">
                +33 more
              </div>
            </div>
          </div>

          <div className="flex flex-row items-start justify-between mt-6 text-[#686868]">
            <div className="flex flex-col">
              <h1 className="font-medium text-xl leading-[25px] font-satoshi">
                DXB 034 2023 | Luxury Watches Auction
              </h1>
              <p className="mt-4 font-medium text-base leading-[25px] text-[#AAAAAA]">
                Started: 05 September, 19:58 UTC+4
              </p>
              {/* <div className="mt-8 flex flex-row items-center gap-4 text-[#3AAE2A] text-lg font-normal">
                Enter Live Auctions{" "}
                <Image
                  src="/arrow-green.png"
                  width={22.5}
                  height={12.5}
                  alt=""
                />{" "}
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default CompletedAuctions