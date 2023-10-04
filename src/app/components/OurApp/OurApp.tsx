import Image from 'next/image'
import React from 'react'

function OurApp() {
  return (
    <div className='flex flex-row items-center justify-center px-[128px] gap-[165px] mt-[168px] w-full'>
            <div className='text-[#838383] text-center flex flex-col items-center'>
                <p className='font-bold text-[20px] leading-[22px]'>OUR MOBILE APP</p>
                <h1 className='font-normal text-4xl leading-[46px] mt-6'>Bid On-the-Go!</h1>
                <p className='font-normal text-[18px] leading-[30px] w-[538px] mt-8'>Download the Invaluable app and never miss an auction from your iOS or Android device.</p>
                <div className='flex flex-row items-center gap-6 mt-20'>
                    <button className='font-medium text-base w-[257px] h-[72px] border-[2px] border-[#434343] rounded-[4px]'>Download on the play store</button>
                    <button className='font-medium text-base w-[257px] h-[72px] border-[2px] border-[#3AAE2A] bg-[#3AAE2A] rounded-[4px] text-white'>Download on the app store</button>
                </div>
            </div>
            <div className=''>
                <Image alt = "" src = "/Mask-group.png" width={818} height={703}/>
            </div>
    </div>
  )
}

export default OurApp