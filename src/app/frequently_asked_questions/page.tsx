'use client'
import Image from 'next/image';
import React,{useState} from 'react'
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import { monumentum } from '../layout';

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
    <>
    <Navbar/>
    <div className='mt-[32px] flex flex-col items-center justify-center  text-[#686868]'>
        <div className='w-[1440px] px-[128px]'>
        <div className='flex flex-row items-center gap-4'>
            <p className='font-semibold text-xs text-[#BCBCBC] leading-[18px]'>Home</p>
            <Image src = '/dropdown.png' alt = '' width = {4} height = {7}/>
            <p>Categories</p>
            <Image src = '/dropdown.png' alt = '' width = {4} height = {7}/>
            <p>Jewellery</p>
        </div>
        <h1 className={`font-normal text-[24px] leading-[25px] mt-16 text-black ${monumentum.className} `}>FAQs</h1>
        {/* <p className='font-normal text-[18px] leading-[30px] text-[#8F8F8F] w-[596px]  mt-[31px]'>Cras tincidunt lobortis feugiat vivamus at morbi leo urna molestie atole elementum eu facilisis faucibus interdum posuere.</p> */}

        <div className='mt-[123px] w-[1164px] flex flex-col '>
               
            {
                faqs.map((element,idx)=> {
                   
                    return  <div className='flex flex-row items-center justify-between'>
                    <div key={idx} className={`w-[1059px]  ${idx === 3 ? 'border-b-[2px] border-[#D4D2E3] mb-[93px]' : ''} cursor-pointer border-t-[1px] border-[#D4D2E3] py-[56px] flex flex-row items-center justify-between w-full`} onClick = {()=> setState(idx)}>
                    <div>
                    <h1 className='font-semobild text-[20px] leading-[27px] max-h-'>{element.question}</h1>
                   {
                    state === idx && <p className='w-[753px] mt-[16px] '>{element.answer}</p>
                   } 
                    </div>
                    
                </div>
                <div className='w-[38px] h-[38px]  cursor-pointer'>
                        <Image src = '/plus.png' alt = '' width = {28} height={28}/>
                    </div>
                </div>
                })
            }    

                
        </div>
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default Faqs