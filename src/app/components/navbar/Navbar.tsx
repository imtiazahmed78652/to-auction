import Image from 'next/image'
import React from 'react'
// import '../../src/app/globals.css'
function Navbar() {
  const navData = [
    {
      img:'/call.svg',
      des:'800 (846374323)',
    },
    {
      img:'/coin.svg',
      des:'USD',
    },
    {
      img:'/global.svg',
      des:'English',
    },
  ]
  return (
    <div className='w-full'>
        <div className='flex justify-end items-end bg-black w-full gap-[38px] px-[117px]'>
           {
            navData.map((element,idx)=> {
              return <div className='flex flex-row gap-2 py-[11px]' key = {idx}>
              <Image src={element.img} width={24} height={24} alt='phone-number' 
              className={`${idx === 1 ? '' : ''}  `}
              />
              <div className='text-white font-normal text-xs leading-[18px]'>{element.des}</div>
          </div> 
            })
           } 
        </div>
        <div className='px-[128px] flex flex-row items-center justify-between w-full py-5 bg-slate-800'>
          <div className='flex flex-row items-center gap-8'>
            <Image src = '/hamburger.svg' width = {27} height = {10} alt='Hamburger Menu' />
            <Image src = '/Search.svg' width = {24} height = {24} alt='Hamburger Menu'/>
          </div>
          <div >
            <Image src = "/tp-auction-logo.svg" width={295} height={41} alt = "Tp-Auction Logo"/>
          </div>
          <div className='flex flex-row items-center gap-12'>
            <div className='text-white font-normal text-xs leading-[18px]'>SELL WITH US</div>
            <div className='text-white font-normal text-xs leading-[18px]'>BUY WITH US</div>
            <button className='bg-[#3AAE2A] w-[128px] h-[50px] rounded-[4px] hover:bg-[#3a6834]'>Login</button>
          </div>
         </div>
    </div>
  )
}

export default Navbar