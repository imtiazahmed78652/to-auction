import React,{useState,useContext} from 'react'
import Image from 'next/image'
import Button from '../components/Button/Button'
import { HandleModal } from '../ContextApi/contextProvide';

function PaymentVerified() {
    const {isModalOpen,setIsModalOpen} = useContext(HandleModal);
    
  return (
    <div className='flex flex-col justify-center items-center'>
        <div className="flex flex-col items-center text-center">
        <Image src="/tick-second.png" width={58} height={58} alt="Tick" />
        <div className="font-semibold text-[18px] leading-[24.59px] mt-[16px] text-[#ACACAC]">
          Payment Verified
          <br />
          Thank You
        </div>
      </div>

      <Button
        className="mt-16 w-[400px] h-[56px] text-white rounded-[8px]"
        onClick={() => setIsModalOpen(false)}
        btnText='Close'
      />
    </div>
  )
}

export default PaymentVerified