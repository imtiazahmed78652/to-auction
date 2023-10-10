import React,{useState} from 'react'
import Image from 'next/image'


function ProductCard() {
  const [color,setColor] = useState('')
  return (
    <div className='w-[257px]'>
        <div className='flex flex-col'>
            <div className='w-[257px] relative h-[254px] flex flex-row justify-center items-center rounded-[4px]'>
                <Image src = '/watch-01.png' width = {257} height = {254} alt = ""/>
            <div className={`absolute right-[8px] top-[8px] w-8 h-8 rounded-full border-[1px] border-[#3AAE2A] flex flex-row items-center justify-center  cursor-pointer bg-[${color}]`} onClick={ color === '' ? ()=>  setColor('#3AAE2A') :  ()=> setColor('')}>
                <Image src = '/Heart_01.png' width = {20} height = {20} alt = ""/>
            </div>
            </div>
        </div>
        <div className='mt-6'>
                <p className='font-medium text-[14px]  leading-[18px] text-black'>Decorative Objects Auction (Modern)</p>
                <p className='mt-[16px] font-normal text-[14px] leading-[18px] flex flex-col text-[#B9B9B9]'>Price: <span className='text-[#111821] font-bold text-base leading-[18px]'>$200</span></p>        <div className=' mt-2 text-[#B1B1B1] font-medium text-sm leading-[18px] '>End Today 17:00</div>
        </div>
    </div>
  )
}

export default ProductCard