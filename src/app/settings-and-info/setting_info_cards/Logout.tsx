import Image from 'next/image'
import React from 'react'

function Logout() {
  return (
    <div className='flex flex-col '>
            <div className=' border-b-[1px] border-[#9C9C9C] py-[24px] '>
                <div className='flex flex-row items-center justify-between px-[24px]'>
                <div></div>
                <div>Logout</div>
                <div className='cursor-pointer'><Image src = '/cross.png' width={9.26} height={6.57} alt = ''/></div>
                </div>
            </div>
            <div className='flex flex-col items-center justify-center gap-6 mt-16'>
                <h1 className='font-normal text-[18px] leading-[18px]'>Are you sure you want to log out of this session.</h1>
                <div className='flex flex-row items-center gap-6 mt-16'>
                        <button className='w-[188px] h-[56px] bg-[#B9B9B9] rounded-[8px] text-white'>Cancel</button>
                        <button className='w-[188px] h-[56px]  rounded-[8px] bg-[#FF0000] text-white'>Logout</button>
                </div>
            </div>
    </div>
  )
}

export default Logout