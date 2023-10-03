import Image from 'next/image'
import React from 'react'

function CurrentAuction() {
  return (
    <div className='px-[128px] mt-[175px] flex flex-col items-center justify-center'>
        
        <h1 className='font-normal text-[36px] leading-[46px] text-[#686868]'>CurrentAuction</h1>
        <div className='bg-[#3AAE2A] w-[286px] h-[2px] mt-[32px]'></div>
        <div className='flex flex-row items-center mt-[64px] gap-6'>
            <div className='h-[678px] bg-[#DB7135] p-4 flex flex-row gap-4 '>
                <div className='flex flex-col gap-4'>
               <Image  src='/Rectangle 5431.png' width= {252} height={420} alt='Ready to be auctioned image' /> 
               <Image src='/Rectangle 54302.png' width= {252} height={210} alt='Ready to be auctioned image'/>
               </div>
               <div className='flex flex-col-reverse gap-4'>
               <Image  src='/Rectangle 5424.png' width= {252} height={420} alt='Ready to be auctioned image' /> 
               <Image src='/Rectangle 5429.png' width= {252} height={210} alt='Ready to be auctioned image'/>
               </div>
               <div className='flex flex-col gap-4'>
               <Image  src='/Rectangle 5428.png' width= {252} height={420} alt='Ready to be auctioned image' /> 
               {/* <Image src='/Rectangle 5429.png' width= {252} height={210} alt='Ready to be auctioned image'/> */}
               <div className='w-[252px] font-normal text-lg  leading-[25px] h-[420px] bg-[#D3D3D3] flex flex-col items-center justify-center'>+33 more</div>
               </div>
            </div>
            <div className='h-[678px] bg-[#4A78F3] p-4 flex flex-row gap-4'>
                <div className='flex flex-col gap-4'>
                    <Image  src='/Rectangle 54311.png' width= {252} height={420} alt='Ready to be auctioned image' /> 
                    <Image src='/Rectangle 5430.png' width= {252} height={210} alt='Ready to be auctioned image'/>
               </div>
               <div className='flex flex-col-reverse gap-4'>
                    <Image  src='/Rectangle 54243.png' width= {252} height={420} alt='Ready to be auctioned image' /> 
                    <Image src='/Rectangle 54294.png' width= {252} height={210} alt='Ready to be auctioned image'/>
               </div>
               <div className='flex flex-col gap-4'>
                    <Image  src='/Rectangle 54285.png' width= {252} height={420} alt='Ready to be auctioned image' /> 
                    <div className='w-[252px] font-normal text-lg  leading-[25px] h-[420px] bg-[#D3D3D3] flex flex-col items-center justify-center'>+33 more</div>
               </div>
            </div>
        </div>
        </div>
  )
}

export default CurrentAuction