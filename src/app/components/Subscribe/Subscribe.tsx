import React from 'react'

function Subscribe() {
  return (
    <div className='mt-[250px] h-[608px] flex flex-col items-center justify-center text-white' style= {{backgroundImage:'url(/fashion-woman-s-stuff-1.png)'}}>
        <div>
        <p className='font-bold text-[20px] leading-[22px] text-center'>GET THE LATEST UPDATES</p>

        <h1 className='font-normal text-[36px] leading-[46px] text-center'>Subscribe to our Newsletter</h1>
        <div className='flex flex-row items-center justify-between w-[814px] h-[72px] rounded-[8px] mt-[85px] bg-white '>
            <input type="text" className='outline-none w-full h-full px-[25px] rounded-[8px] text-[#9795B5]' placeholder='Email'/>
            <button className='w-[184px] h-[72px] bg-[#3AAE2A] rounded-[8px] text-lg font-normal leading-[30px]'>Singup</button>
        </div>
        <div className='w-full flex flex-row '>
        <p className=''>You can unsubscribe at any time</p>
        </div>
        </div>
    </div>
  )
}

export default Subscribe