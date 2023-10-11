import React from 'react'
import Image from 'next/image';
import Navbar from '../components/navbar/Navbar';
function SettingsAndInfo() {
    const elements = [
        {
            name:'My Bids',
            img:'',
        },
        {
            name:'Wish List',
            img:'',
        },
        {
            name:'Winnings',
            img:'',
        },
        {
            name:'Payments',
            img:'',
        },
        {
            name:'Personal Information',
            img:'',
        },
        {
            name:'Logout',
            img:'',
        },
    ]
  return (
    <div>
        <Navbar/>
        <div className='grid place-content-center'>
            <div className='w-[1440px] px-[128px]'>
        <div className='flex flex-row items-center gap-4 mt-[32.97px]'>
            <p className='font-semibold text-xs leading-[18px]'>Home</p>
            <Image src = '/arrow-small.png' width={3.52} height={7.06} alt =''/>
            <p className='font-semibold text-xs leading-[18px]'>Categories</p>
            <Image src = '/arrow-small.png' width={3.52} height= {7.06  } alt = ''/>
            <p>Jewellery</p>
        </div>
        <h1 className='font-normal text-2xl leading-[25px] mt-12'>Settings & info</h1>
        <div className='flex flex-row gap-[125px]'>
            <div className='w-[278px] h-[709px] shadow-md mt-16 px-6 py-8 flex flex-col gap-4'>
                <div className='w-full bg-[#3AAE2A] h-[48px] rounded-[8px] flex flex-row items-center px-6 hover:text-white'>
                        <Image src = '' width={} height={} alt=''/>
                </div>
            </div>
            <div></div>
        </div>
        </div>
        </div>

    </div>

  )
}

export default SettingsAndInfo;