import React from 'react'

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
  return (
    <div className=''>
        <h1 className='font-bold text-sm leading-4 text-[#3AAE2A]'> fdasfadsfasdfdasfadsfdasBag Add Payment Method</h1>
    </div>
  )
}

export default Payments;