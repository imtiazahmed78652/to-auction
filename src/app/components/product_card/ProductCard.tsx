import React from 'react'
import Image from 'next/image'

function ProductCard() {
  return (
    <div className='w-[257px]'>
        <div className='flex flex-col'>
            <div className='w-[257px] relative h-[254px] flex flex-row justify-center items-center rounded-[4px]'>
            <Image src = '/watch-01.png' width = {257} height = {254} alt = ""/>
            <div className='absolute right-[8px] top-[8px] w-8 h-8 rounded-full border-[1px] border-[#3AAE2A] flex flex-row items-center justify-center bg-white cursor-pointer'>
                <Image src = '/Heart_01.png' width = {20} height = {20} alt = ""/>
            </div>
            </div>
        </div>
        <div className='mt-6 '>
                <p className='font-medium text-[14px] leading-[18px] text-[#969696]'>Decorative Objects Auction (Modern)</p>
                <p className='mt-[16px] font-normal text-[14px] leading-[18px]'>Price: $200</p>
                <div className='flex flex-row items-center gap-[24px] mt-[16px]'>
                    <button className='w-[117px] h-[45px] border-[#3AAE2A] text-[#3AAE2A] border-[1px] rounded-[4px] text-xs font-medium leading-[18px]'>Register to Bid</button>

                    <button className='w-[117px] h-[45px]  bg-[#3AAE2A] border-[1px] text-white rounded-[4px] text-xs font-medium leading-[18px]'>Live Auction</button>
                </div>
                <div className='w-[257px] h-[50px] bg-[#F6F6F6] rounded-[4px] flex flex-row items-center justify-center mt-2'>End Today 17:00</div>
        </div>
    </div>
  )
}

export default ProductCard