import React from 'react'
import Image from 'next/image'
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
    <div className='flex flex-row items-center justify-center bg-blue-100 mt-[264px]'>

    <div className='px-[115px] py-[141px] flex flex-row items-center justify-center gap-[141px]'>
        <div className='w-[704px] flex flex-col gap-[72px] h-[606px]'>
                <h1 className='font-normal text-4xl  leading-[46px] text-[#BCD7C9]'>The best part <span className='text-[#3AAE2A]'> about us?</span></h1>
                <div className='flex flex-col gap-[36px] '>
           {
            data.map((element,idx)=> {
                return <div className='flex flex-col ' key={idx}>
                <div className='flex flex-row items-center gap-4'>
                <Image src = "/tick.png" alt = '' width = {30} height = {30} className=''/>
                <h1 className='font-bold text-xl   text-[#3A3A3A]'>{element.name}</h1>
                </div>
                <div className='font-medium text-[16px] text-[#7D7D7D] leading-[21.86px]'>{element.des}</div>
            </div>
            })
           } 
            </div>
        </div>
        <div className='w-[827px] flex flex-row items-center justify-center h-[606px] bg-cover  border-2 border-red-500' style = {{backgroundImage:'url(/Rectangle-5413555.png)'}}>
            <div className='w-[128px] h-[128px] rounded-full bg-white flex flex-row items-center justify-center '>
                <Image src = "/Play.png" width = {56} height = {56} alt = "Play Button"/>
            </div>
        </div>
    </div>
    </div>
  )
}

export default AboutUs