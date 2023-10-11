import React from 'react'
import Image from 'next/image';

interface PaymentsProps {
  title?: string;
  productId?: number;
  wonFor?: number;
  dateTime?: string;
  time?: string;
  winner?:string;
  bids?:string;
  
}
function Payments({
  title,
  productId,
  wonFor,
  dateTime,
  
  
}: PaymentsProps) {
  const paymentHistory = [
    {
      bidOn:'Decorative Objects Auction (Modern)',
      dateTime:'29-09-2023',
      price:'240',
    },
    {
      bidOn:'Decorative Objects Auction (Modern)',
      dateTime:'29-09-2023',
      price:'240',
    },
    {
      bidOn:'Decorative Objects Auction (Modern)',
      dateTime:'29-09-2023',
      price:'240',
    },
    {
      bidOn:'Decorative Objects Auction (Modern)',
      dateTime:'29-09-2023',
      price:'240',
    },
  ]
  const cardDetails = [
    {
      name:'John De',
      img:'/mastercardlogo.png',
      accountHolder:'John De',
      cardNumber:'5282 3456 7890 1289',
      expiryDate:'09/05',
      cvv:'123',
      color:'purple-500'
    },
    {
      name:'John De',
      img:'/payPal.png',
      accountHolder:'John De',
      cardNumber:'5282 3456 7890 1289',
      expiryDate:'09/05',
      cvv:'123',
      color:'blue-500'
    },
    
  ]
  return (
    <div className=''>
      <div className='w-[781px] relative   flex flex-col items-end'>
        <h1 className=' flex flex-row items-center gap-[16px] font-bold text-sm leading-4 text-[#3AAE2A]'>
        <Image src = '/add-circle-plus.png' width = {24} height = {24} alt = 'Plus'/>
        Add Payment Method
        </h1>
        <div className="mt-6 relative flex flex-row items-center gap-6">
        {
          cardDetails.map((element,idx)=> {
            return <div className={` bg-${element.color}  w-[378px] h-[245px] rounded-[12px] p-8 flex flex-col justify-between`}>
            <div className='flex flex-row items-center justify-between'>
              <div className=''>
                <Image src = '/three-dot-button.png' width = {24} height={24} alt = ''/>
              </div>
              <div className='w-[45px]'>
              <Image src = {element.img} width={45} height={45} alt = ''/>
              </div>
            </div>
            <div className='flex flex-row justify-between w-full text-white'>
              <div className='flex flex-col gap-1'>
                <p className='font-normal text-sm leading-[18px]'>Account Holder</p>
                <p className='font-medium text-sm leading-[18.9px]'>{element.accountHolder}</p>
              </div>
              <div className='flex flex-col gap-1'>
              <p className='font-normal text-sm leading-[18px]'>Card Number</p>
                <p className='font-medium text-[14px] leading-[18.9px]'>{element.cardNumber}</p>
              </div>
            </div>



            <div className='flex flex-row justify-between w-[197px] text-white'>
            <div className='flex flex-col gap-1'>
                <p className='font-normal text-sm leading-[18px]'>Expiry Date</p>
                <p className='font-medium text-sm leading-[18px]'>{element.expiryDate}</p>
              </div>
              <div className='flex flex-col gap-1'>
              <p className='font-normal text-sm leading-[18px]'>CVV</p>
                <p className='font-medium text-sm leading-[18px]'>{element.cvv}</p>
              </div>
            </div>
        </div> 
          })
        }  
           
          <div className='absolute right-0 translate-x-20 w-12 h-12 flex flex-row items-center justify-center rounded-full border-[1.5px] border-[#7E7E7E80] border-opacity-[50%] shadow-xl'>
          <Image src = '/design-arrow-1.png' width={27} height={16} alt = ''/>
          </div>
    </div>
    <div className='mt-[39px] w-full'>
      <h1 className='text-left w-full font-bold text-base leading-4'>Payments History</h1>
      <div className='flex flex-col items-center gap-6 mt-5'>
      {
        paymentHistory.map((element,idx)=> {
            return <div key = {idx} className='w-full flex flex-row px-6 py-6 items-center justify-between rounded-[8px] border-[1.5px] border-[#D9D9D9]'>
            <div className='flex flex-col '>
            <h1 className='flex flex-row items-center gap-[8px] font-bold text-sm leading-[18.9px] text-[#CCCCCC]'>Bid on: <span className='text-[#6C6C6C]'>Decorative Objects Auction (Modern)</span></h1>
            <p className='flex flex-row items-center gap-[8px] text-[#CCCCCC] text-[12px]'>Date & Time: <span className='font-normal  leading-[18px] text-[#6C6C6C]'>29-09-2023</span></p>
            </div>
            <div className='flex flex-row items-center gap-[24px]'>
            <h1 className='text-[#CF2D2D] font-bold text-2xl leading-[34px]'>$240</h1>
            <p className='font-medium text-base leading-[34px] text-[#6C6C6C] underline'>View Item</p>
            </div>
          </div>
        })
      }  
      </div>
    </div>
        </div>
    </div>
  )
}

export default Payments;