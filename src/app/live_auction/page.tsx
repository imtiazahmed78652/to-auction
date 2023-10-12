import Image from 'next/image';
import React from 'react'

function LiveAuction() {
    const data = [
        {
            name:'',
            price:'Lot 192 is open for bidding',
        },
        {
            name:'',
            price:'Lot 192 is open for bidding',
        },
        {
            name:'',
            price:'Fair Warning',
        },
        {
            name:'',
            price:'Lot 192 is open for bidding',
        },
        {
            name:'',
            price:'Lot 192 is open for bidding',
        },
        {
            name:'',
            price:'Fair Warning',
        },
        {
            name:'',
            price:'',
        },
    ]
  return (
    <div className='flex flex-col items-center justify-center'>
        <div className='w-[1440px]'>
            <div className='flex flex-row items-center gap-9 h-[84px] border-b-[1px] border-[#0000001A]  border-opacity-[10%] px-[46px]'>
                <div className='border-r-[1px]  border-[#0000001A] border-opacity-[10%] pr-[28px]'>
                    <Image src = '/tp-auction-logo-black.svg' width={178} height={28} alt = ''/>
                </div>
                <div className='font-medium text-lg leading-[18px] text-[#838383]'>DAY 1 of Three-Day General Auction (Jewellery, Watches, Designer Items, Militaria, Art, Antique and Collectables)</div>
            </div>
            <div className='flex flex-row items-center gap-8 px-[128px]'>
                <div className='flex flex-col  '>
                    <div className='flex flex-col gap-6 mt-[47px]'>
                       {
                        data.map((element,idx)=> {
                            return <p className='font-normal text-sm leading-[18px]'>{element.price}</p>
                        })
                       } 
                       </div>
                       <div className='flex flex-col'>
                            <input type="text" className='w-[379px] h-[60px] bg-[#F2F2F2] px-[17px] rounded-[4px]' placeholder='$200 or up'/>
                            <div className='flex flex-row items-center gap-6 mt-6'>
                                <button className='bg-[#3AAE2A] hover:bg-[#487a42] w-[177px] h-[60px] rounded-[4px] text-white font-semibodl text-[14px] leading-[18px]' >Place Bid</button>
                                <button className='  w-[177px] h-[60px] rounded-[4px] border-[1px] text-[14px] hover:text-[#878787] font-medium text-[#AAAAAA]'>Set Max Bid</button>
                            </div>
                       </div>
                </div>
                <div className='h-[500px] w-[1px] bg-[#D6D6D6]'></div>
                <div className='flex flex-col '>
                        <h1 className='font-medium text-[16px] leading-[18px] mt-[32px]'>New Rolex Datejust 126200 on Jubilee Bracelet 36mm Come</h1>
                        <div className='flex flex-row gap-6 mt-6'>
                            <div className='w-[447px] h-[337px] border-[1px] border-[#D6D6D6] flex flex-row items-center justify-between px-[8px]'>
                                <div className='w-[48px] h-[48px] rounded-full border-[1px] border-[#3AAE2A] flex flex-row items-center justify-center'>
                                    <Image src = '/Group 395701.png' width = {27} height = {16} alt = ''/>
                                </div>
                                <div className='w-[293px] h-[221px]'>
                                    <Image src = "/ring2.png" width = {293} height = {221} alt=''/>
                                </div>
                                <div className='w-[48px] h-[48px] rounded-full border-[1px] border-[#3AAE2A] flex flex-row items-center justify-center'>
                                <Image src = '/Group 39570.png' width = {27} height = {16} alt = ''/>
                                </div>
                            </div>
                            <div className='flex flex-col gap-[19px]'>
                            <h1 className='font-medium text-base leading-[18px] text-[#515151]'>Description</h1>
                            <p className='font-medium text-[14px] leading-[18px] max-w-[278px] text-[#8F8F8F]'>New Rolex Datejust 126200 on Jubilee Bracelet 36mm Comes with Box & Papers. New Rolex Datejust 126200 on Jubilee Bracelet 36mm Comes with Box & Papers.
                            </p>
                            </div>
                        </div>
                        <div className='flex flex-row items-center gap-[208px] mt-[38px]'>
                            <div className='flex flex-col'>
                                <h1 className='font-normal text-[14px] leading-[18px]'>HIGHEST BID</h1>
                                <p className='font-medium text-[24px] leadin-[18px]'>$200</p>
                            </div>
                            <div className='flex flex-row items-center gap-[10px]'>
                                <div>Closes in</div>
                                <div className='w-[77px] h-[55px] bg-[#F4F4F4] rounded-[8px] flex flex-row items-center justify-center font-bold text-[24px] leading-[18px] text-[#878787]'> 55 <span>s</span></div>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LiveAuction;