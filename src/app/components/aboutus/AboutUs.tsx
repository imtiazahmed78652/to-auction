import React from 'react'
import Image from 'next/image'
import { monumentum } from '@/app/layout'
function AboutUs() {
    const data = [
        {
            name:'Passion For Luxury',
            des:'were driven by a deep passion for luxury. We curate and showcase the finest items, from exquisite watches to stunning jewelry, connecting discerning buyers with their dream pieces.',
        },
        {
            name:'A World of Auctions',
            des:'Our online platform opens the doors to a world of auctions, where the thrill of bidding meets the allure of luxury. With a global reach, we bring together buyers and sellers from around the world.',
        },
        {
            name:'Trust & Transparency',
            des:'We prioritize trust and transparency in every transaction. Our commitment to secure payments, fair bidding, and accurate item descriptions ensures a reliable and enjoyable auction experience.',
        },
        {
            name:'Your Luxury Destination:',
            des:'TPAuctions.global is your ultimate luxury destination. Whether youre a seasoned collector or a first-time bidder, join us in celebrating the world of luxury with every auction.',
        },
    ]
  return (
    <div className='mt-[141px]'>
<div className='flex flex-col items-center justify-center'>
        <h1 className={`${monumentum.className} text-[#686868] font-normal text-4xl leading-[46px] text-[#686868]"`}>
          About Us
        </h1>
        <div className="bg-[#3AAE2A] w-[286px] h-[2px] mt-8"></div>
        </div>
    <div className='flex flex-row items-center justify-center bg-blue-100 mt-[66px] '>
        
        
    <div className='px-[128px] w-full py-[98px] '>
        <div className='w-[100%] flex flex-row items-center justify-center h-[606px] bg-cover  ' style = {{backgroundImage:'url(/Rectangle-5413555.png)'}}>
            <div className='w-[128px] cursor-pointer h-[128px] rounded-full bg-white flex flex-row items-center justify-center '>
                <Image src = "/Play.png" width = {56} height = {56} alt = "Play Button"/>
            </div>
        </div>


    </div>
    </div>
    </div>
  )
}

export default AboutUs