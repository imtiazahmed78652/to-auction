import React from 'react';
import Image from 'next/image';

interface CardProps {
  title?: string;
  productId?: number;
  bidAmount?: number;
  date?: string;
  time?: string;
  winner?:string;
  bids?:string;
  
}

function SettingsInfoCard({
  title,
  productId,
  bidAmount,
  date,
  time,
  winner,
  bids,
  
}: CardProps) {
  return (
    <div className={`flex flex-row   gap-[24px] text-[#6C6C6C] w-[378px] border-[1px] border-[#D9D9D9] rounded-[8px] px-[8px] py-[8px] `}>
      <div className="w-[169px] relative h-[197px] bg-[#F9F9F9] ">
        <Image src="/watch-01.png" width={117} height={197} alt="" className='w-full h-full' />
       {
        bids && <div className='absolute top-2 right-2 w-[32px] h-[32px] rounded-full bg-[#3AAE2A] flex flex-row items-center justify-center'>
        <Image src = '/white-heart.png' alt = '' width={15} height={13}/>
      </div>
       } 
      </div>
      <div className="flex flex-col ">
        <div className="flex flex-col gap-[8px]">
          {title && <h1 className="font-bold text-sm leading-[18.9px]">{title}</h1>}
          {productId && (
            <p className="text-[#CCCCCC] font-medium text-xs leading-[18px]">
              Product ID: <span className="">{productId}</span>
            </p>
          )}
        </div>
        {bidAmount && (
          <p className="font-medium text-xs leading-[18px] text-[#CCCCCC] mt-6">
            Bid For: <span className="font-bold text-[#6C6C6C]">{bidAmount}</span>
          </p>
        )}
        {date && (
          <div>
            <h1 className="font-semibold text-xs leading-[18px] flex flex-col text-[#CCCCCC] mt-6">
              Date & Time
              <span className="font-normal text-xs leading-[18px] text-[#6C6C6C]">{date}</span>
            </h1>
            {time && (
              <div className="flex flex-col font-medium text-xs leading-[18px] mt-4">
                {
                  winner ? 'Winner' : 'Ends Today'
                }
                <span className={` font-normal ${winner && winner === 'Winner' ?  'text-[#00BC13]' : 'text-[#6C6C6C]'} ${winner === 'Closed' && 'text-red-500'}`}>{ winner ? winner : time}</span>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default SettingsInfoCard;
