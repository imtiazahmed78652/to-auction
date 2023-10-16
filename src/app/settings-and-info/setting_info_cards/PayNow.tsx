import React from "react";
import Image from "next/image";

interface PayNowProps {
  togglePayment: (value: boolean) => void;
}
function PayNow({ togglePayment }: PayNowProps) {
  const data = [
    {
      name:'Item Price',
      value:'4100 AED',
    },
    {
      name:'Buyer Protection Fee',
      value:'300 AED',
    },
    {
      name:'Platform Fee',
      value:'150 AED',
    },
    {
      name:'General Sales Tax',
      value:'470 AED',
    },
    {
      name:'Total Price',
      value:'5200 AED',
    },
  ]
  return (
    <div className="" 
    
    >
      <div className="w-[781px] flex flex-col  ">
        <div className="flex flex-row items-center gap-[16px]">
            <div onClick={() => togglePayment(false)} className="cursor-pointer">
            <Image src = '/arrow-left.png' width= {24} height = {24} alt = ''/>
            </div>
            <p className="font-medium text-[#000000] text-[16px] leading-[18px]">Back</p>
        </div>
        <div className="w-[781px] border-[1px] px-[8px] py-[8px]   border-[#D9D9D9] rounded-[4px] mt-[19px]">
            <div className="flex flex-row items-center ">
                
                    <div className="h-[99px] w-[169px] bg-[#F9F9F9] flex flex-row items-center justify-center rounded-[4px]">
                        <Image src = '/Mask group.png' width = {58} height = {98} alt = ''/>
                    </div>
                    <div className=" flex flex-row justify-between w-full">
                        <div className="flex flex-col gap-[47px] h-full">
                          <div>
                        <h1 className="font-bold text-sm leading-[18px] text-[#6C6C6C]">Decorative Objects Auction (Modern)</h1>
                        <p className="flex flex-row gap-[8x] font-medium text-[12px] leading-[18px] text-[#CCCCCC]">ProductId: <span className="font-normal text-[12px] leading-[18px] text-[#6C6C6C]">116519</span> </p>
                        </div>
                        <div className="flex flex-row">
                        Won For: <span> 4100AED</span>
                        </div>

                        </div>
                        
                        <div className="flex flex-col gap-[47px]">
                    <div className="flex flex-col">
                            <h1 className="font-medium text-[12px] leading-[18px]">Date & Time:</h1>
                            <p className="flex flex-row items-center">29-09-2023 <span>23:00</span></p>
                    </div>
                    <div className="text-[#CCCCCC] flex flex-row items-center gap-[8px] font-medium text-[12px] leading-[18px]" >
                     Amout to pay: <span className="font-bold text-[#6C6C6C]">300AED</span>
                    </div>
            </div>
                    </div>
            </div>
        </div>
        <div className="mt-[33px] border-[1px] border-dashed border-dark rounded-[12px] px-4 py-[32px]">
       {
        data.map((item,idx)=> {
          
          
          return  <div key = {idx} className={` ${item.name === 'Total Price' ? "" : "border-b-[1px]"} flex flex-row items-center justify-between  border-light py-6"`}>
          <h1 className={`${item.name === 'Total Price' ? "text-[#979797] " : "text-light-text" } font-normal text-[14px] leading-[18px]`}>{item.name}</h1>
          <p>{item.value}</p>
          </div>
        }) 
       } 
        </div>
      </div>
    </div>
  );
}

export default PayNow;
