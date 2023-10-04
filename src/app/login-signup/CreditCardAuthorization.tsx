import Image from 'next/image';
import React from 'react'
const CreditCardAuthorization: React.FC<{
    headingText: string;
    onNext: (text:string) => void;
    onClose:() => void;
  }> = ({ headingText, onNext,onClose }) => {
    const [state, setState] = React.useState(false)
  return (
    <div className='flex flex-col items-center justify-center mt-[83px]'>
               {
                state ? <div className='flex flex-col items-center text-center'>
                    <Image src = '/tick-second.png' width={58} height={58} alt = 'Tick'/>
                    <div className='font-semibold text-[18px] leading-[24.59px] mt-[16px] text-[#ACACAC]'>
                        Payment Verified
                        <br />
                        Thank You
                    </div>
                </div> : <h1 className='w-[400px] text-[18px] text-[#ACACAC] font-semibold leading-[24px] text-center'>TpAuction will make a transaction of $1 to authorise the payment card. This will be refunded within 24 hours</h1>
               } 
                <button className='mt-16 w-[400px] h-[56px] bg-[#3AAE2A] text-white rounded-[8px]' onClick={state ? ()=> onClose() :  ()=> setState(true)}> {state ? 'Close' : 'Continue'}</button>
    </div>
  )
}

export default CreditCardAuthorization