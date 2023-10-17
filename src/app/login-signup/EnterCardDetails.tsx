'use client'
import React from 'react'
import { Pagination } from 'swiper/modules';
import Paginations from './Paginations';
import FloatingInput from '../components/input/Input';
import Button from '../components/Button/Button';
import { useAppSelector } from '../hooks';
import { useDispatch } from 'react-redux';
import { updateHeadingText } from '../GlobalRedux/Features/counterSlice';
import { setCardHolderName, setCardNumber,setCardDate, setCvv } from '../GlobalRedux/Features/cardDetailsSlice';
import { resetForm } from '../GlobalRedux/Features/inputSlice';


const EnterCardDetails: React.FC<{
    headingText: string;
    onNext: (text:string) => void;
  }> = ({ headingText, onNext }) => {
    const [dates,setDates] = React.useState('Expiry Date')
    const paginationText = useAppSelector((state)=> state.counter.pagination);
    const {cardHolderName,cardNumber,cvv,expiryDate} = useAppSelector((state)=> state.cardDetails);
    console.log(cardHolderName,'Card Holder Name');
    console.log(cardNumber,'Card Number');
    console.log(cvv,'CVV');
    console.log(expiryDate,'Expiry Date');


    const dispatch = useDispatch();
    const handleCardDetails = () => {
      if(cardHolderName){
        dispatch(setCardHolderName(cardHolderName.toString()));
      } 
      if(cardNumber){
        const stringValue = cardNumber;
        const numberValue = Number(stringValue)
        dispatch(setCardNumber(numberValue))
      }
      if(expiryDate){
          dispatch(setCardDate(expiryDate));
      }
      if(cvv) {
        const stringValue = cvv;
        const numberValue = Number(stringValue);
        dispatch(setCvv(numberValue));
      }

      return dispatch(updateHeadingText('Credit Card Authorization')),dispatch(resetForm());

    }

    const handleInputChange = (value: string | number | Date,name:string) => {
      if(name === 'cardHolderName'){
        dispatch(setCardHolderName(value.toString()));
      } 
      if(name === 'cardNumber'){
        const stringValue = value;
        const numberValue = Number(stringValue)
        dispatch(setCardNumber(numberValue))
      }
      if(name === 'date'){
          dispatch(setCardDate(value));
      }
      if(name === 'cvv') {
        const stringValue = value;
        const numberValue = Number(stringValue);
        dispatch(setCvv(numberValue));
      }
      
      
      
    };
  return (
    <div className='flex flex-col items-center justify-center mt-[50px]'>
        
        
        <div className='w-[400px]'>
        <Paginations/>
        </div>
        <div className='flex flex-col items-center gap-6 mt-12'>
            
            <div className='w-[400px] h-[46px] border-[1px] rounded-[6px] flex flex-row items-center justify-between pr-4 text-[#878787] p-1 border-[#DDDDDD] '>
            <FloatingInput value = {cardHolderName} onChange={(value)=> handleInputChange(value,'cardHolderName')} type = 'text'  label = 'Card Holder Name' className = 'outline-none bg-transparent rounded-[6px] pl-[24px] w-full h-[46px]'/>
            </div>


            <div className='w-[400px] h-[46px] border-[1px] rounded-[6px] flex flex-row items-center justify-between pr-4 text-[#878787] p-1 border-[#DDDDDD] '>
            <FloatingInput  type = 'number' value = {cardNumber || ''} onChange={(value)=> handleInputChange(value,'cardNumber')} label = 'Card Number' className = 'outline-none bg-transparent rounded-[6px] pl-[24px] w-full h-[46px]'/>
            </div>


            <div className='flex flex-row items-center gap-[18px]'>

            <div className='w-[191px] h-[46px] border-[1px] rounded-[6px] flex flex-row items-center justify-between pr-4 text-[#878787] p-1 border-[#DDDDDD] ' >
           {
            dates === 'date' && <input type='date' value={expiryDate || ''} onChange={(e) => handleInputChange(e.target.value, 'date')}  className='outline-none bg-transparent rounded-[6px] pl-[24px] w-full h-[46px]'/> 
           } 
           { dates === 'Expiry Date' && <input placeholder={dates} className='outline-none bg-transparent rounded-[6px] pl-[24px] w-full h-[46px] text-xs text-[#878787]' onClick={()=>  setDates('date')}/>
            }
            </div>


            <div className='w-[191px] h-[46px] border-[1px] rounded-[6px] flex flex-row items-center justify-between pr-4 text-[#878787] p-1 border-[#DDDDDD] '>
            <FloatingInput  type = 'number' value = {cvv || ""}  label = 'CVV' onChange={(value)=> handleInputChange(value,'cvv')} className = 'outline-none bg-transparent rounded-[6px] pl-[24px] w-full h-[46px]'/>
            </div>


            </div>
            <Button className='w-[400px] h-[56px] rounded-[8px] text-white mt-6' onClick = {handleCardDetails} btnText='Save' />
            
        </div> 
    </div>
  )
}

export default EnterCardDetails