'use client'
import React,{useState} from 'react'

function Faqs() {
    const [state, setState] = useState(0);
    const faqs = [
        {
            question:'How do I register on TPAuctions.global?',
            answer:'To register, click the "Sign Up" button on the top-right corner of the homepage. Fill in the required information, including your name, email address, and a password. Once registered, you can start bidding on our luxury auctions.',
        },
        {
            question:'What payment methods are accepted?',
            answer:'To register, click the "Sign Up" button on the top-right corner of the homepage. Fill in the required information, including your name, email address, and a password. Once registered, you can start bidding on our luxury auctions.',
        },
        {
            question:'How does bidding work?',
            answer:'To register, click the "Sign Up" button on the top-right corner of the homepage. Fill in the required information, including your name, email address, and a password. Once registered, you can start bidding on our luxury auctions.',
        },
        {
            question:'What happens if I win an auction?',
            answer:'To register, click the "Sign Up" button on the top-right corner of the homepage. Fill in the required information, including your name, email address, and a password. Once registered, you can start bidding on our luxury auctions.',
        },
    ]
  return (
    <div className='mt-[250px] flex flex-col items-center justify-center text-[#686868]'>
        <h1 className='font-normal text-[36px] leading-[46px]'>Frequently Asked Questions</h1>
        <p className='font-normal text-[18px] leading-[30px] text-[#8F8F8F] w-[596px] text-center mt-[31px]'>Cras tincidunt lobortis feugiat vivamus at morbi leo urna molestie atole elementum eu facilisis faucibus interdum posuere.</p>

        <div className='mt-[87px] w-[1164px] flex flex-col '>
               
            {
                faqs.map((element,idx)=> {
                    return <div className={`${idx === 3 ? 'border-b-[2px] border-[#D4D2E3]' : ''} cursor-pointer border-t-[1px] border-[#D4D2E3] py-[56px] flex flex-row items-center justify-between w-full`} onClick = {()=> setState(idx)}>
                    <div>
                    <h1 className='font-normal text-[20px] leading-[38px]'>{element.question}</h1>
                   {
                    state === idx && <p className='w-[753px] mt-[16px] '>{element.answer}</p>
                   } 
                    </div>
                    <div className='w-[30px] h-[2px] bg-[#8D8BA7] cursor-pointer'></div>
                </div>
                })
            }    

                
        </div>
    </div>
  )
}

export default Faqs