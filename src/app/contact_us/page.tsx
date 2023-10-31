import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import Image from 'next/image'
import Button from '../components/Button/Button'

function ContactUs() {
  const data = [
    {
      img:'/location.png',
      name:'OUR LOCATION',
      des:'58 Middle Point Rd San Francisco, 94124',
    },
    {
      img:'/second-call.png',
      name:'CALL US',
      des:'(123) 456 - 789',
    },
    {
      img:'/email-.png',
      name:'EMAIL US',
      des:'contact@company.com',
    },
  ]
  return (
    <div>
        <Navbar/>
        
        <div className='grid place-items-center'>
          <div className='w-[1440px] px-[128px]'>
        <div className='flex flex-row items-center gap-4 mt-[32.97px]'>
            <p className='font-semibold text-xs leading-[18px]'>Home</p>
            <Image src = '/arrow-small.png' width={3.52} height={7.06} alt =''/>
            <p className='font-semibold text-xs leading-[18px]'>Categories</p>
            <Image src = '/arrow-small.png' width={3.52} height= {7.06  } alt = ''/>
            <p>Jewellery</p>
        </div>
        <h1 className='font-normal text-2xl leading-[25px] mt-12'>Get in touch today</h1>
        <p className='mt-[117px] text-base leading-[30px] text-[#8F8F8F] max-w-[579px]'>Lorem ipsum dolor sit amet consectetur adipiscing elit semper dalar elementum tempus hac tellus libero accumsan. </p>
        <div className='mt-8 flex flex-row items-center gap-6'>
         {
          data.map((element,idx)=> {
              return <div key={idx} className='w-[379px] h-[72px] border-[1px] border-[#3AAE2A] rounded-[4px] flex flex-row items-center justify-start pl-6 gap-4'>
              <Image src = {element.img} width={32} height={32} alt=''/>
              <div className='flex flex-col gap-3 text-[#3AAE2A]'>
              <h1 className='text-sm font-bold leading-[20px]'>{element.name}</h1>
              <p className='font-semibold text-xs '>{element.des}</p>
              </div>
            </div>
          })
         } 
          
        </div>

        
        <div className='flex flex-col items-end gap-8 mt-12'>
          <div className='w-full flex flex-col gap-8'>
          <div className='flex flex-row items-center gap-[25px]'>
          <input type="text" placeholder='Name' className='w-1/2  py-[27px] px-[28px] border-[1px] border-[#ADADAD]  rounded-[4px] outline-none'/>
          <input type="text" placeholder='Email' className='w-1/2  py-[27px] px-[28px] border-[1px] border-[#ADADAD]  rounded-[4px] outline-none'/>
          </div>
          <div className='flex flex-row items-center gap-[25px]'>
          <input type="text" placeholder='Phone Number' className='w-1/2  py-[27px] px-[28px] border-[1px] border-[#ADADAD]  rounded-[4px] outline-none'/>
          <input type="text" placeholder='Company' className='w-1/2  py-[27px] px-[28px] border-[1px] border-[#ADADAD]  rounded-[4px] outline-none'/>
          </div>
          </div>
 
            <textarea className='w-full h-[150px] border-[1px] border-[#ADADAD] rounded-[4px] outline-none py-[29px] px-[27px]' placeholder='Write in detail' name="" id="" cols={30} rows={6}></textarea>
            <Button btnText='Send Message' className='bg-[#3AAE2A] w-[162px] h-[72px] rounded-[4px] text-white font-medium text-[16px] leading-[18px]'/>
          
        </div>



        </div>
        </div>
        <div className='mt-[138px]'>
        <Footer/>
        </div>
    </div>
  )
}

export default ContactUs