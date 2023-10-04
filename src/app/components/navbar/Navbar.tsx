'use client'
import LoginSignup from '@/app/login-signup/LoginSignup';
import Image from 'next/image'
import React,{useState, useEffect} from 'react'
// import '../../src/app/globals.css'
function Navbar() {
  const [isModalOpen,setIsModalOpen] = useState(false);
  const [index,setIndex] = useState<number | null>(null);
  const toggleModal  = () => {
    setIsModalOpen (!isModalOpen);
  }

  const navData = [
    {
      img:'/call.svg',
      des:'800 (846374323)',

    },
    {
      img:'/coin.svg',
      des:'USD',
      elements:['Usd', 'Pounds','Euro','Rupee','Dirham','Riyal','Lira']

    },
    {
      img:'/global.svg',
      des:'English',
      elements:['English','Urdu','Arabic','French','German','Hebrew','Italian']
    },
  ]

  return (
    <div className='w-full'>
        <div className='flex justify-end items-end relative bg-black w-full gap-[38px] px-[117px]'>
           {
            navData.map((element,idx)=> {
              return <> <div className='flex flex-row items-center gap-2 py-[11px]' key = {idx} onMouseEnter = {()=> index === idx ? setIndex(null) : setIndex(idx)}>
              <Image src={element.img} width={24} height={24} alt='phone-number' 
              className={`${idx === 1 ? '' : ''}  cursor-pointer`}
              />
              <div className='text-white font-normal text-xs leading-[18px] cursor-pointer'>{element.des}</div>
          </div> 
          {
          index === idx && <div className='absolute  right-20 top-10 bg-white text-black w-[317px] px-[25px] py-[26px] text-center rounded-[8px] z-40'>
            {element.elements?.map((item,idx)=> {
              const isLastElement = idx === element.elements.length - 1;
              return <div className={` border-[#DDDDDD] py-[23px] ${isLastElement ? 'border-b-0' : 'border-b-[1px]'}`}>{item}</div>
            })}
          </div>
        }
          </>
            })
           }
        </div>
        <div className='px-[128px] flex flex-row items-center justify-between w-full py-5 bg-slate-800'>
          <div className='flex flex-row items-center gap-8'>
            <Image src = '/hamburger.svg' width = {27} height = {10} alt='Hamburger Menu' className='cursor-pointer'/>
            <Image src = '/Search.svg' width = {24} height = {24} alt='Hamburger Menu' className='cursor-pointer'/>
          </div>
          <div className=''>
            <Image src = "/tp-auction-logo.svg" width={295} height={41} alt = "Tp-Auction Logo" className='cursor-pointer'/>
          </div>
          <div className='flex flex-row items-center gap-12'>
            <div className='text-white font-normal text-xs leading-[18px] hover:text-[#3AAE2A] cursor-pointer'>SELL WITH US</div>
            <div className='text-white font-normal text-xs leading-[18px] hover:text-[#3AAE2A] cursor-pointer'>BUY WITH US</div>
            <button className='bg-[#3AAE2A] w-[128px] h-[50px] rounded-[4px] hover:bg-transparent hover:border-[1px] hover:border-[#3AAE2A] hover:text-[#3AAE2A] ' onClick = {toggleModal}>Login</button>
          </div>
         </div>
        {
          isModalOpen && <LoginSignup isOpen = {isModalOpen} onClose = {toggleModal}/>
        } 
    </div>
  )
}

export default Navbar