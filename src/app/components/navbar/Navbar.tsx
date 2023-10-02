import Image from 'next/image'
import React from 'react'
// import '../../src/app/globals.css'
function Navbar() {
  
  return (
    <div className=''>
        
        
        <div className='flex justify-end items-end bg-black w-full'>
            <div className='flex flex-row gap-2 py-[11px]'>
                <Image src='/call.svg' width={24} height={24} alt='phone-number'/>
                <div className='text-white'>800 (846374323)</div>
            </div>
        </div>


    </div>
  )
}

export default Navbar