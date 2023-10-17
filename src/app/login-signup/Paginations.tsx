import React, { useEffect } from "react";
import { useAppSelector } from "../hooks";
import SelectInterest from "./SelectInterest";
import Image from "next/image";
function Paginations() {
  const paginationText = useAppSelector((state) => state.counter.pagination);
  

  let textClasses = "text-base text-black"; // Default class for the text
  let dotClasses = '';
  let secondDotClasses = '';
  let thirdDotClasses = 'bg-transparent';
  let firstBorderClasses = '';
  let secondBorderClasses = ''
  let thirdBorderClasses = 'border-light-2'
  let width=0;
  let width2 = 0;
  let height = 0;
  let height2 = 0;
  let firstLine = 'bg-light-border';
  let secondLine = 'bg-light-border';
  

  if(paginationText === 'Enter Mobile Number'){
    firstBorderClasses = 'border-[2.25px] border-green ';
    secondBorderClasses = 'border-[2.25px] border-light-2'
    dotClasses = 'bg-green w-[11.75px] h-[11.75px]'
    secondDotClasses = 'bg-transparent'
    
  } else if(paginationText === 'Select Interest') {
    firstBorderClasses = 'border-0 border-green ';
    secondBorderClasses = 'border-[2.25px] border-green'
    secondDotClasses = 'bg-green w-[11.75px] h-[11.75px]';
    dotClasses = 'bg-green w-full h-full ';
    width = 23.5;
    height = 23.5;
    firstLine = 'bg-green'
  } else if(paginationText === 'Choose Payment Method'){
    firstBorderClasses = 'border-0 border-green';
    secondBorderClasses = 'border-0  border-green'
    thirdBorderClasses = 'border-green'
    dotClasses = 'bg-green w-full h-full'
    secondDotClasses = 'bg-green w-full h-full';
    thirdDotClasses = 'bg-green'
    width2 = 23.5;
    height2 = 23.5;
    width = 23.5;
    height = 23.5;
    firstLine = 'bg-green'
    secondLine = 'bg-green'
  } else if(paginationText === 'Enter Card Details'){
    firstBorderClasses = 'border-0 border-green';
    secondBorderClasses = 'border-0  border-green'
    thirdBorderClasses = 'border-green'
    dotClasses = 'bg-green w-full h-full'
    secondDotClasses = 'bg-green w-full h-full';
    thirdDotClasses = 'bg-green'
    width2 = 23.5;
    height2 = 23.5;
    width = 23.5;
    height = 23.5;
    firstLine = 'bg-green'
    secondLine = 'bg-green'
  }
  



  return (
    <div className="flex flex-col items-center justify-center ">
      <div className="flex flex-row items-center justify-between w-[441px]">
        <h1 className={`text-[12px] leading-[18px] text-green `}>Credentials</h1>
        <h1 className={`text-[12px] leading-[18px] ${paginationText === 'Select Interest' || 'Choose Payment' ? "text-green" : 'text-light-2'} `}>Interest</h1>
        <h1 className="text-[12px] leading-[18px]text-light-2">Payment</h1>
      </div>

      <div className="w-[441px] h-[71px] flex flex-row items-center justify-between">
        
        
        <div className="flex flex-col items-center">
          <div className={`w-[47px] h-[47px] flex flex-row rounded-full  items-center justify-center ${firstBorderClasses}`}>
            <div className={` ${dotClasses}  rounded-full flex flex-row items-center justify-center`}>

             <Image src = '/check.png' width = {width} height={height} alt = 'Check Tick' />  

            </div>
          </div>
        </div>
              

        <div className={`w-[119px] h-[3px]  bg-green ${firstLine}`}></div>
        <div className="flex flex-col items-center">
          <div className={`w-[47px] h-[47px] flex  flex-row  rounded-full items-center justify-center  ${secondBorderClasses}`}>
            <div className={`  rounded-full flex flex-row items-center  justify-center ${secondDotClasses}  `}>
                  {
                    <Image src = '/check.png' width = {width2} height={height2} alt = 'Check Tick' />
                  }
            </div>
          </div>
        </div>


        <div className={`w-[119px] h-[3px]  ${secondLine} `}></div>
        <div className="flex flex-col items-center">
          <div className={`w-[47px] h-[47px] flex flex-row border-[2.25px]   rounded-full items-center justify-center ${thirdBorderClasses} `}>
            <div className={`w-[11.75px] h-[11.75px]  rounded-full ${thirdDotClasses} `}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Paginations;
