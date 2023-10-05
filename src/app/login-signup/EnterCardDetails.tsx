import React from 'react'
import { Pagination } from 'swiper/modules';
import Paginations from './Paginations';
import FloatingInput from '../components/input/Input';



const EnterCardDetails: React.FC<{
    headingText: string;
    onNext: (text:string) => void;
  }> = ({ headingText, onNext }) => {
  return (
    <div className='flex flex-col items-center justify-center mt-[50px]'>
        
        
        <div className='w-[400px]'>
        <Paginations/>
        </div>
        <div className='flex flex-col items-center gap-6 mt-12'>
            {/* <input type="text" className='w-[400px] h-[48px] font-normal text-xs leading-[18px] text-[#878787] border-[1px] rounded-[6px] outline-none px-[18px]' placeholder='Card Holder Name'/> */}
            <div className='w-[400px] h-[46px] border-[1px] rounded-[6px] flex flex-row items-center justify-between pr-4 text-[#878787] p-1 border-[#878787] '>
            <FloatingInput  label = 'Card Holder Name' className = 'outline-none bg-transparent rounded-[6px] pl-[24px] w-full h-[46px]'/>
            </div>
            <div className='w-[400px] h-[46px] border-[1px] rounded-[6px] flex flex-row items-center justify-between pr-4 text-[#878787] p-1 border-[#878787] '>
            <FloatingInput  label = 'Card Number' className = 'outline-none bg-transparent rounded-[6px] pl-[24px] w-full h-[46px]'/>
            </div>
            {/* <input type="text" className='w-[400px] h-[48px] font-normal text-xs leading-[18px] text-[#878787] border-[1px] rounded-[6px] outline-none px-[18px]' placeholder='Card Number'/> */}

            <div className='flex flex-row items-center gap-[18px]'>
            <div className='w-[191px] h-[46px] border-[1px] rounded-[6px] flex flex-row items-center justify-between pr-4 text-[#878787] p-1 border-[#878787] '>
            <FloatingInput  label = 'Expiry Date' className = 'outline-none bg-transparent rounded-[6px] pl-[24px] w-full h-[46px]'/>
            </div>
            <div className='w-[191px] h-[46px] border-[1px] rounded-[6px] flex flex-row items-center justify-between pr-4 text-[#878787] p-1 border-[#878787] '>
            <FloatingInput  label = 'CVV' className = 'outline-none bg-transparent rounded-[6px] pl-[24px] w-full h-[46px]'/>
            </div>
            {/* <input type="text" className='w-[191px] h-[48px] border-[1px] rounded-[6px] outline-none px-[18px] font-normal text-xs leading-[18px] text-[#878787]' placeholder='Expiry Date'/>    
            <input type="text" className='w-[191px] h-[48px] border-[1px] rounded-[6px] outline-none px-[18px] font-normal text-xs leading-[18px] text-[#878787]' placeholder='CVV'/>     */}
            </div>

            <div className='w-[400px] h-[46px] border-[1px] rounded-[6px] flex flex-row items-center justify-between pr-4 text-[#878787] p-1 border-[#878787] '>
            <FloatingInput  label = 'Phone Number' className = 'outline-none bg-transparent rounded-[6px] pl-[24px] w-full h-[46px]'/>
            </div>
            {/* <input type="text" className='w-[400px] h-[48px] font-normal text-xs leading-[18px] text-[#878787] border-[1px] rounded-[6px] outline-none px-[18px]' placeholder='Phone Number'/> */}
            <div className='w-[400px] h-[46px] border-[1px] rounded-[6px] flex flex-row items-center justify-between pr-4 text-[#878787] p-1 border-[#878787] '>
            <FloatingInput  label = 'Email Address' className = 'outline-none bg-transparent rounded-[6px] pl-[24px] w-full h-[46px]'/>
            </div>
            {/* <input type="text" className='w-[400px] h-[48px] font-normal text-xs leading-[18px] text-[#878787] border-[1px] rounded-[6px] outline-none px-[18px]' placeholder='Email Address'/> */}
            <button className='bg-[#3AAE2A] w-[400px] h-[56px] rounded-[8px] text-white mt-[48px]' onClick = {()=> onNext('credit card authorization')}>Save</button>
        </div> 
    </div>
  )
}

export default EnterCardDetails