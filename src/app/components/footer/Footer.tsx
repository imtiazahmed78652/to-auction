import Image from 'next/image'
import React from 'react'
// import '../../src/app/globals.css'
function Footer() {
  const product = [
    {
      name:'Features',
      url:'',
    },
    {
      name:'Pricing',
      url:'',
    },
    {
      name:'Case Studies',
      url:'',
    },
    {
      name:'Reviews',
      url:'',
    },
    {
      name:'Updates',
      url:'',
    },
  ]
  const company = [
    {
      name:'About',
      url:'',
    },
    {
      name:'Contact Us',
      url:'',
    },
    {
      name:'Careers',
      url:'',
    },
    {
      name:'Culture',
      url:'',
    },
    {
      name:'Blog',
      url:'',
    },
  ]
  const support = [
    {
      name:'Getting Started',
      url:'',
    },
    {
      name:'Help Center',
      url:'',
    },
    {
      name:'Server Status',
      url:'',
    },
    {
      name:'Report A Bug',
      url:'',
    },
    {
      name:'Chat Support',
      url:'',
    },
  ]
  const downloads = [
    {
      name:'IOS',
      url:'',
    },
    {
      name:'Android',
      url:'',
    },
    {
      name:'Mac',
      url:'',
    },
    {
      name:'Windows',
      url:'',
    },
    {
      name:'Chrome',
      url:'',
    },
  ]
  return (
    <div className='h-[626px] bg-[#343434] px-[128px] pt-[94px] flex flex-col justify-between'>
    
    <div className='w-full    flex flex-row  gap-[214px]'>
      
      
        <div className='flex flex-col'>
          <Image src = '/tp-auction-logo.svg' alt = '' width = {295} height = {41}/>
          <p className='mt-[45px] font-normal text-lg leading-[30px] w-[408px] text-white'>Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam mauris sed ma</p>
          <div className='flex flex-row items-center gap-[16px] mt-[48px]'>
            <div  className='bg-white w-[36px] h-[36px] rounded-[8px] flex flex-row items-center justify-center'>
              <Image alt = "" src = "/Facebook.png" width = {9.82} height = {18}/>
              </div>
              <div className='bg-white w-[36px] h-[36px] rounded-[8px] flex flex-row items-center justify-center'>
              <Image alt = "" src = "/Twitter.png" width = {18} height = {14.6}/>
              </div>
              <div className='bg-white w-[36px] h-[36px] rounded-[8px] flex flex-row items-center justify-center'>
              <Image alt = "" src = "/Instagram.png" width = {18} height = {18}/>
              </div>
              <div className='bg-white w-[36px] h-[36px] rounded-[8px] flex flex-row items-center justify-center'>
              <Image alt = "" src = "/Linkedin.png" width = {18} height = {17.1}/>
              </div>
              <div className='bg-white w-[36px] h-[36px] rounded-[8px] flex flex-row items-center justify-center'>
              <Image alt = "" src = "/Youtube.png" width = {19.8} height = {14}/>
              </div>

          </div>

        </div>

        <div className='flex flex-row gap-[190px]'>
          <div className='flex flex-col'>
            <h1 className='text-[#3AAE2A] text-[20px] font-bold leading-[20px]'>Product</h1>
            
            <div className='flex flex-col gap-[25px] mt-[48px] text-white'>
              {
               product.map((element,idx)=> {
                    return <p className='font-normal text-[18px] leading-[18px]' key = {idx}>{element.name}</p>
               }) 
              }
            </div>
          </div>


          <div className='flex flex-col'>
            <h1 className='text-[#3AAE2A] text-[20px] font-bold leading-[20px]'>Company</h1>
            
            <div className='flex flex-col gap-[25px] mt-[48px] text-white'>
              {
               company.map((element,idx)=> {
                    return <p className='font-normal text-[18px] leading-[18px]' key = {idx}>{element.name}</p>
               }) 
              }
            </div>
          </div>


          <div className='flex flex-col'>
            <h1 className='text-[#3AAE2A] text-[20px] font-bold leading-[20px]'>Support</h1>
            
            <div className='flex flex-col gap-[25px] mt-[48px] text-white'>
              {
               company.map((element,idx)=> {
                    return <p className='font-normal text-[18px] leading-[18px]' key = {idx}>{element.name}</p>
               }) 
              }
            </div>
          </div>


          <div className='flex flex-col'>
            <h1 className='text-[#3AAE2A] text-[20px] font-bold leading-[20px]'>Support</h1>
            
            <div className='flex flex-col gap-[25px] mt-[48px] text-white'>
              {
               downloads.map((element,idx)=> {
                    return <p className='font-normal text-[18px] leading-[18px]' key = {idx}>{element.name}</p>
               }) 
              }
            </div>

            
          </div>

          
        </div>
        
    </div>
    <div className='border-t-[1px] py-[40px] border-white flex flex-row items-center justify-center '>
          Copyright © 2023 TPAuction | All Rights Reserved
          </div>
    </div>
  )
}

export default Footer