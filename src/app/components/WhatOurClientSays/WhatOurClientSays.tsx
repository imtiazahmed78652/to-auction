import React from 'react'
import Image from 'next/image'
function WhatOurClientSays() {
    const clients = [
        {
            img:'/client.png',
            des:'“Lorem ipsum dolor sit ametolil col consectetur adipiscing lectus a nunc mauris scelerisque  egestas.”',
            name:'John Carter',
            designation:'Head of Marketing at Facebook',
        },
        {
            img:'/client2.png',
            des:'“Lorem ipsum dolor sit ametolil col consectetur adipiscing lectus a nunc mauris scelerisque  egestas.”',
            name:'John Carter',
            designation:'Head of Marketing at Facebook',
        },
        {
            img:'/client3.png',
            des:'“Lorem ipsum dolor sit ametolil col consectetur adipiscing lectus a nunc mauris scelerisque  egestas.”',
            name:'John Carter',
            designation:'Head of Marketing at Facebook',
        },
    ]
  return (
    <div className='mt-[301px] flex flex-col items-center justify-center px-[128px]'>
        <div className='max-w-[804px] text-center'>
            <h1 className='font-normal text-[36px] leading-[46px] text-[#686868]'>What our clients say</h1>
            <p className='font-normal text-[20px] leading-[30px] text-[#8F8F8F]'>Lorem ipsum dolor sit amet consectetur adipiscing elit semper dalar elementum tempus hac tellus libero accumsan. </p>
        </div>
        <div className='mt-[64px] flex flex-row items-center gap-[24px] '>
        {
            clients.map((element,idx)=> {
                return <div className='w-[539px] h-[546px]'>
                <div className='w-full h-[388px] relative'>
                    <div className='absolute right-2 top-2 w-[64px] h-[64px] bg-white rounded-full flex flex-row items-center justify-center'>
                            <Image src = '/Play.png' width={28} height={28} alt='Play button'/>
                    </div>
                    <Image src = {element.img} width = {5390} height = {388} alt = ""/>
                </div>
                <div className='flex flex-col mt-[48px] '>
                    <p className='text-[#646464] text-xl leading-[30px]'>{element.des}</p>
                    <h1 className='font-bold text-lg leading-[18px] mt-4 text-black'>{element.name}</h1>
                    <p className='text-[#A6A6A6] text-lg leading-[18px] mt-4'>{element.designation}</p>
                </div>
            </div>
            })
        } 

        </div>
    </div>
  )
}

export default WhatOurClientSays