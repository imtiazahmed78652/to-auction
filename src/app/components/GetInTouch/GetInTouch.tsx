import Image from 'next/image'
import React from 'react'

function GetInTouch() {

    const getInTouch = [
        {
            img:'/message.png',
            name:'Our location',
            des:'58 Middle Point Rd San Francisco, 94124',
        },
        {
            img:'/call.png',
            name:'Call us',
            des:'(123) 456 - 789',
        },
        {
            img:'/sms.png',
            name:'Email us',
            des:'contact@company.com',
        },
    ]
  return (
    <div className='bg-[#F5F5F5] mt-[166px] px-[216px] py-[98px] text-[#8F8F8F]'>
        <div className='flex flex-col items-center justify-center'>
           <h1 className='font-normal text-4xl leading-[46px] text-center'>Get in touch today</h1> 
           <p className='max-w-[804px] text-center mt-[52px] font-normal text-[18px] leading-[30px]'>Lorem ipsum dolor sit amet consectetur adipiscing elit semper dalar elementum tempus hac tellus libero accumsan. </p>
           </div>
           <div className='mt-[100px]'>
            <div className='flex flex-col items-center gap-[32px]'>
            <div className='flex flex-row items-center gap-[32px] w-full'>
                <input type="text" className='w-full h-[72px] rounded-[10px] outline-none border-[1px] border-[#ADADAD] px-[34px]' placeholder='Name'/>
                <input type="text" className='w-full h-[72px] rounded-[10px] outline-none border-[1px] border-[#ADADAD] px-[34px]' placeholder='Email'/>
            </div>
            <div className='flex flex-row items-center gap-[32px] w-full'>
                <input type="text" className='w-full h-[72px] rounded-[10px] outline-none border-[1px] border-[#ADADAD] px-[34px]' placeholder='Phone Number'/>
                <input type="text" className='w-full h-[72px] rounded-[10px] outline-none border-[1px] border-[#ADADAD] px-[34px]' placeholder='Company'/>
            </div>
            <div className='w-full'>
            {/* <input type="text" className='w-full h-[150px] px-[35px] rounded-[10px] outline-none border-[1px] border-[#ADADAD] py-[29px]'/> */}
            <textarea name="" id="" cols={30} rows={10} className='w-full h-[150px] px-[35px] rounded-[10px] outline-none border-[1px] border-[#ADADAD] py-[29px]' placeholder='Write In Details'></textarea>
            </div>
            </div>

            <div className='mt-[42px] flex flex-row items-end justify-end'>
                    <button className='bg-[#3AAE2A] rounded-[10px] w-[204px] h-[72px] text-white font-medium text-base leading-[18px]'>Send Message</button>
            </div>
            <div className='mt-[120px] flex flex-row items-center justify-between w-full'>
               
            {
                getInTouch.map((element,idx)=> {
                    return <div className='flex flex-row items-center gap-[16px]' key={idx}>
                    <div className='w-[65.53px] h-[65.53px] border-[2px] border-[#3AAE2A] flex flex-row items-center justify-center rounded-full'>
                        <Image alt = '' src = {element.img} width={25} height={25}/>
                    </div>
                    <div className='flex flex-col'>
                        <h1 className='font-bold text-lg leading-[20px]'>{element.name}</h1>
                        <p className='font-medium text-xl leading-[46px] text-black'>{element.des}</p>
                    </div>
                    </div>
                })
            }   
                


            </div>
           </div>
    </div>
  )
}

export default GetInTouch