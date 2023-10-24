'use client'
import Image from 'next/image'
import React,{useState,useEffect} from 'react'
import { manrope, monumentum } from '@/app/layout'
// import { Manrope } from 'next/font/google'
import { Manrope } from 'next/font/google'
function Hero() {
  const initialTime = 24 * 60 * 60; // 24 minutes in seconds
  const [time, setTime] = useState(initialTime);
  
  useEffect(() => {
    const timer = setInterval(() => {
      if (time > 0) {
        setTime((prevTime) => prevTime - 1);
      }
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [time]);

  const hours = Math.floor(time / 3600);
  const minutes = Math.floor((time % 3600) / 60);
  const seconds = time % 60;
        
  return (
    <div className='flex justify-center font-satoshi bg-contained bg-no-repeat' style= {{backgroundImage:'url(/hero-bg.png)',height:'944px'}}>
      
    <div className='h-[944px] w-[1440px] relative px-[128px]'  >
        <div className='w-[479px] flex flex-col absolute top-[236px] bottom-[267px] right-32 z-10 '>
            <h1 className={`font-normal text-[24px] text-black leading-[18px]`}>Cartier Santos Medium</h1>
            <p className=' mt-6 font-normal text-sm leading-[18px] w-[479px] text-[#7C7C7C]'>Lorem ipsum dolor sit amet consectetur. Amet venenatis sed ac scelerisque hac lectus rhoncus quisque. Ante justo lacus consequat hendrerit ullamcorper quis. Adipiscing volutpa</p>
            <p className={`font-semibold text-[20px] leading-[18px] mt-[24px] ${manrope.className}`}>Price: <span className='font-bold'> $200</span></p>
               <div className='flex flex-col   mt-[32px]'>
                      <p className='font-medium text-[16px] leading-[25px] '>Closes in</p>
                      <div className='flex flex-row items-center bg-[#F4F4F4] rounded-[8px] h-[73px]'>
                        <div className='px-[24px] py-[10px] text-[36px] font-bold leading-[36px] border-r-[1px] border-[#838383] text-[#838383]'>{hours.toString().padStart(2, "0")}</div> 
                        <div className='px-[24px] py-[10px] text-[36px] font-bold leading-[36px] border-r-[1px] border-[#838383] text-[#838383]'>{minutes.toString().padStart(2, "0")}</div> 
                        <div className='px-[24px] py-[10px] text-[36px] font-bold leading-[36px]  text-[#838383]'>{seconds.toString().padStart(2, "0")}</div> 
                      </div>
                 </div>
                 <button className=' mt-[55px] w-[187px] h-[76px] bg-[#3AAE2A] rounded-[4px] text-white hover:bg-[#3a6834] flex flex-row items-center justify-center gap-[25px]'>Shop Now <Image src = '/Vector.png' width={18} height={10} alt='arrow icon'/></button>
        </div>
    </div>
    </div>
  )
}

export default Hero