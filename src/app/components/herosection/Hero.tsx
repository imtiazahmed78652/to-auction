import Image from 'next/image'
import React from 'react'

function Hero() {
  return (
    <div className='h-[944px] bg-contained bg-no-repeat relative '  style= {{backgroundImage:'url(/hero-bg.png)',height:'944px'}}>
        <div className='w-[687px] flex flex-col absolute top-[252px] bottom-[267px] right-0 z-10 '>
            <h1 className='font-normal text-[42px] text-black leading-[18px]'>Cartier Santos Medium</h1>
            <p className='text-black mt-12 '>Lorem ipsum dolor sit amet consectetur. Amet venenatis sed ac scelerisque hac lectus rhoncus quisque. Ante justo lacus consequat hendrerit ullamcorper quis. Adipiscing volutpa</p>
            <p className='font-normal text-[36px] leading-[18px] mt-[24px] '>Price:$200</p>
            <div className='flex flex-row items-center gap-[17px] mt-[48px]'>
               <p className='font-medium text-[24px] leading-[25px]'>Closes in</p>
               <div className='flex flex-row items-center bg-[#F4F4F4] rounded-[8px] h-[73px]'>
                   <div className='px-[24px] py-[10px] text-[36px] font-bold leading-[36px] border-r-[1px] border-[#838383] text-[#838383]'>19h</div> 
                   <div className='px-[24px] py-[10px] text-[36px] font-bold leading-[36px] border-r-[1px] border-[#838383] text-[#838383]'>27m</div> 
                   <div className='px-[24px] py-[10px] text-[36px] font-bold leading-[36px]  text-[#838383]'>55s</div> 
               </div>
                 </div>
                 <button className=' mt-[55px] w-[187px] h-[76px] bg-[#3AAE2A] rounded-[4px] text-white hover:bg-[#3a6834] flex flex-row items-center justify-center gap-[25px]'>Shop Now <Image src = '/Vector.png' width={18} height={10} alt='arrow icon'/></button>
        </div>
    </div>
  )
}

export default Hero