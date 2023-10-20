import { monumentum } from '@/app/layout'
import React from 'react'
import Button from '../Button/Button'

function Subscribe() {
  return (
    <div className='mt-[250px] h-[608px] flex flex-col items-center justify-center text-white' style= {{backgroundImage:'url(/fashion-woman-s-stuff-1.png)'}}>
        <div className='w-[1440px] flex flex-col justify-center items-center px-[128px]'>
        <p className='font-medium font-satoshi text-[16px] leading-[22px] text-center'>GET THE LATEST UPDATES</p>

        <h1 className={`font-normal text-[20px] leading-[46px] text-center font-satoshi`}>Subscribe to our Newsletter</h1>
        <div className='flex flex-col '>
        <div className='flex flex-row items-center justify-between w-[781px] h-[72px] rounded-[8px] mt-[67px] bg-white '>
            <input type="text" className='outline-none w-full h-full px-[25px] rounded-[8px] text-[#9795B5]' placeholder='Email'/>
            <Button btnText='Signup' className='w-[176px] h-[72px] rounded-[8px] text-lg font-normal leading-[30px]'/>
        </div>
        
        <p className='ml-5 mt-4'>You can unsubscribe at any time</p>
        
        </div>
        
        </div>
    </div>
  )
}

export default Subscribe