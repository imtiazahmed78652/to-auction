import React from 'react';
import Image from 'next/image';

interface CardProps {
  title?: string;
  productId?: number;
  bidAmount?: string;
  date?: string;
  time?: string;
  showTime?: boolean;
}

function Card({
  title,
  productId,
  bidAmount,
  date,
  time,
  showTime = false,
}: CardProps) {
  return (
    <div className="flex flex-row items-center gap-[24px] text-[#6C6C6C] w-[378px] border-[1px] border-[#D9D9D9] rounded-[8px] px-[8px] py-[8px]">
      <div className="w-[169px] h-[197px] bg-[#F9F9F9]">
        <Image src="/watch-01.png" width={117} height={197} alt=""  />
        <div className='absolute'>fasdfas</div>
      </div>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-[8px]">
          {title && <h1 className="font-bold text-sm leading-[18.9px]">{title}</h1>}
          {productId && (
            <p className="text-[#CCCCCC] font-medium text-xs leading-[18px]">
              Product ID: <span className="">{productId}</span>
            </p>
          )}
        </div>
        {bidAmount && (
          <p className="font-medium text-xs leading-[18px] text-[#CCCCCC]">
            Bid For: <span className="font-bold text-[#6C6C6C]">{bidAmount}</span>
          </p>
        )}
        {date && (
          <div>
            <h1 className="font-semibold text-xs leading-[18px] flex flex-col text-[#CCCCCC]">
              Date & Time
              <span className="font-normal text-xs leading-[18px] text-[#6C6C6C]">{date}</span>
            </h1>
            {showTime && time && (
              <div className="flex flex-col font-medium text-xs leading-[18px]">
                Ends Today:
                <span className="text-[#6C6C6C] font-normal">{time}</span>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Card;
