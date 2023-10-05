import React from 'react'
import Image from 'next/image'

function CompletedAuctions() {
  return (
    <div className=" mt-[175px] flex flex-col items-center justify-center">
      <h1 className="font-normal text-[36px] leading-[46px] text-[#686868]">
        Completed Auctions
      </h1>
      <div className="bg-[#3AAE2A] w-[286px] h-[2px] mt-[32px]"></div>
      <div className="flex flex-row items-center mt-[64px] gap-6">
        <div className="flex flex-col">
        <div className="w-[820px] h-[452px] bg-[#DB7135] p-4 flex flex-row gap-4 ">
          <div className="flex flex-col gap-4">
            <div className="w-[252px] h-[267px] overflow-hidden">
              <Image
                src="/Rectangle 5431.png"
                width={252}
                height={267}
                alt="Ready to be auctioned image"
              />
            </div>
            <div className="w-[252px] h-[138px] overflow-hidden">
              <Image
                src="/Rectangle 54302.png"
                width={252}
                height={138}
                alt="Ready to be auctioned image"
              />
            </div>
          </div>

          <div className="flex flex-col-reverse gap-4">
            <div className="w-[252px] h-[267px] overflow-hidden">
              <Image
                src="/Rectangle 5424.png"
                width={252}
                height={267}
                alt="Ready to be auctioned image"
              />
            </div>
            <div className="w-[252px] h-[137px] overflow-hidden">
              <Image
                src="/Rectangle 5429.png"
                width={252}
                height={137}
                alt="Ready to be auctioned image"
              />
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="w-[252px] h-[267px] overflow-hidden">
              <Image
                src="/Rectangle 5428.png"
                width={252}
                height={267}
                alt="Ready to be auctioned image"
              />
            </div>
            {/* <Image src='/Rectangle 5429.png' width= {252} height={210} alt='Ready to be auctioned image'/> */}
            <div className="w-[252px] font-normal text-lg  leading-[25px] h-[137px] bg-[#D3D3D3] flex flex-col items-center justify-center">
              +33 more
            </div>
          </div>
        </div>
        <div className="flex flex-row items-start  justify-between mt-6">
        <div className="flex flex-col">
          <h1 className="font-bold text-xl leading-[25px]">DXB 034 2023 | Luxury Watches Auction</h1>
          <p className="mt-4 font-medium text-base leading-[25px]">Started: 05 September, 19:58 UTC+4</p>
          <div className="mt-8 flex flex-row items-center gap-4 text-[#3AAE2A] text-lg font-normal">Enter Live Auctions <Image src = '/arrow-green.png' width = {22.5} height={12.5} alt = ''/> </div>
        </div>
        

          <div className="flex flex-row items-center gap-[8px]">
            <div className="bg-[#FF0000] w-2 h-2 rounded-full"></div>
            <h1 className="text-[#FF0000] font-bold text-xl leading-[25px]">Live Auction</h1>
          </div>

          
        </div>
        </div>
{/* <FloatingInput label = 'Items'/> */}
        <div className="flex flex-col">
        <div className='h-[452px]  bg-[#4A78F3] p-4 flex flex-row gap-4'>
                <div className='flex flex-col gap-4 '>
                    <Image  src='/Rectangle 54311.png' width= {252} height={267} alt='Ready to be auctioned image ' className="overflow-hidden" /> 
                    <Image src='/Rectangle 5430.png' width= {252} height={136} alt='Ready to be auctioned image' className="overflow-hidden"/>
               </div>
               <div className='flex flex-col-reverse gap-4 '>
                    <Image  src='/Rectangle 54243.png' width= {252} height={420} alt='Ready to be auctioned image' className="overflow-hidden"/> 
                    <Image src='/Rectangle 54294.png' width= {252} height={210} alt='Ready to be auctioned image' className="overflow-hidden"/>
               </div>
               <div className='flex flex-col gap-4'>
                    <Image  src='/Rectangle 54285.png' width= {252} height={420} alt='Ready to be auctioned image' className="overflow-hidden"/> 
                    <div className='w-[252px] font-normal text-lg  leading-[25px] h-[420px] bg-[#D3D3D3] flex flex-col items-center justify-center'>+33 more</div>
               </div>
            </div>
            <div className="flex flex-row items-start justify-between mt-6">
        <div className="flex flex-col">
          <h1 className="font-bold text-xl leading-[25px]">DXB 034 2023 | Luxury Watches Auction</h1>
          <p className="mt-4 font-medium text-base leading-[25px]">Started: 05 September, 19:58 UTC+4</p>
          <div className="mt-8 flex flex-row items-center  text-[#3AAE2A] gap-[16px]">Enter Live Auctions <Image src = '/arrow-green.png' width = {22.5} height={12.5} alt = ''/> </div>
        </div>
        

          <div className="flex flex-row items-center gap-[8px]">
            <div className="bg-[#FF0000] w-2 h-2 rounded-full"></div>
            <h1 className="text-[#FF0000] font-bold text-xl leading-[25px]">Live Auction</h1>
          </div>

          
        </div>
            </div>
      </div>
    </div>
  )
}

export default CompletedAuctions