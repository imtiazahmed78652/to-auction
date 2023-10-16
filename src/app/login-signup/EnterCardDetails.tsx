import React from 'react'
import { Pagination } from 'swiper/modules';
import Paginations from './Paginations';
import FloatingInput from '../components/input/Input';
import Button from '../components/Button/Button';
import { useAppSelector } from '../hooks';
import { useDispatch } from 'react-redux';
import { updateHeadingText } from '../GlobalRedux/Features/counterSlice';


const EnterCardDetails: React.FC<{
    headingText: string;
    onNext: (text:string) => void;
  }> = ({ headingText, onNext }) => {


    const paginationText = useAppSelector((state)=> state.counter.pagination);
    const dispatch = useDispatch();

  return (
    <div className='flex flex-col items-center justify-center mt-[50px]'>
        
        
        <div className='w-[400px]'>
        <Paginations/>
        </div>
        <div className='flex flex-col items-center gap-6 mt-12'>
            
            <div className='w-[400px] h-[46px] border-[1px] rounded-[6px] flex flex-row items-center justify-between pr-4 text-[#878787] p-1 border-[#DDDDDD] '>
            <FloatingInput  label = 'Card Holder Name' className = 'outline-none bg-transparent rounded-[6px] pl-[24px] w-full h-[46px]'/>
            </div>
            <div className='w-[400px] h-[46px] border-[1px] rounded-[6px] flex flex-row items-center justify-between pr-4 text-[#878787] p-1 border-[#DDDDDD] '>
            <FloatingInput  label = 'Card Number' className = 'outline-none bg-transparent rounded-[6px] pl-[24px] w-full h-[46px]'/>
            </div>
            <div className='flex flex-row items-center gap-[18px]'>
            <div className='w-[191px] h-[46px] border-[1px] rounded-[6px] flex flex-row items-center justify-between pr-4 text-[#878787] p-1 border-[#DDDDDD] '>
            <FloatingInput  label = 'Expiry Date' className = 'outline-none bg-transparent rounded-[6px] pl-[24px] w-full h-[46px]'/>
            </div>
            <div className='w-[191px] h-[46px] border-[1px] rounded-[6px] flex flex-row items-center justify-between pr-4 text-[#878787] p-1 border-[#DDDDDD] '>
            <FloatingInput  label = 'CVV' className = 'outline-none bg-transparent rounded-[6px] pl-[24px] w-full h-[46px]'/>
            </div>
            </div>
            <Button className='w-[400px] h-[56px] rounded-[8px] text-white mt-6' onClick = {()=> {onNext('credit card authorization');dispatch(updateHeadingText('Credit Card Authorization'))}} btnText='Save' />
            
        </div> 
    </div>
  )
}

export default EnterCardDetails