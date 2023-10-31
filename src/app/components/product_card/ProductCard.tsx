'use client'
import React,{useState} from 'react'
import Image from 'next/image'
import heartFilled from '../../assets/heartFilled.png'
import heartFilledGreen from '../../assets/heartFilledGreen.png'
const ProductCard: React.FC<{
  productImg?: string;
  productName?: string;
  productPrice?:string;
  auctionEnd?:string;
  onClick?:()=> void;
}> = ({ productImg, productName,productPrice,auctionEnd,onClick }) => {
  const [color,setColor] = useState('')
  return (
    <div className=''>
    <div className='w-[257px] py-2  overflow-hidden hover:shadow-2xl shadow-black ' >
        <div className='flex flex-col items-start'>
            <div className='w-[257px] relative h-[254px] flex flex-row justify-center items-center rounded-[4px]'>
                <Image src = {productImg ? productImg : ''} width = {257} height = {254} alt = ""/>
            <div className={`absolute right-[8px] top-[8px] w-8 h-8 rounded-full border-[1px] ${color ? 'border-transparent' : 'border-[#B5DCB0]'}  flex flex-row items-center justify-center  cursor-pointer `} onClick={ color === '' ? ()=>  setColor('#3AAE2A') :  ()=> setColor('')}>
               {
                color ? <Image src = {heartFilledGreen} width = {20} height = {20} alt = "" /> : <Image src = '/Heart_01.png' width = {20} height = {20} alt = "" className={`bg-[${color ? '' : ''}]`}/>
               } 
            </div>
            </div>
        </div>

        <div className='mt-6 cursor-pointer px-1' onClick={onClick}>
                <p className='font-medium text-[14px]  leading-[18px] text-black'>{productName}</p>
                <p className='mt-[16px] font-normal text-[14px] leading-[18px] flex flex-col text-[#B9B9B9]'>Price: <span className='text-[#111821] font-bold text-base leading-[18px]'>${productPrice}</span></p><div className=' mt-2 text-[#B1B1B1] font-medium text-sm leading-[18px] '>{auctionEnd}</div>
        </div>
    </div>
    </div>
  )
}

export default ProductCard