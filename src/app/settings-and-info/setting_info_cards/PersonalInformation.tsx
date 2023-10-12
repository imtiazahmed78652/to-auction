import React from 'react'
import Image from 'next/image'
import FloatingInput from '@/app/components/input/Input'

function PersonalInformation() {
  return (
    <div className=''>
            <div className='w-[781px]'>
                <div className='flex flex-col gap-4'>
                <div className='w-[76px] h-[76px] rounded-full flex flex-row items-center justify-center border-green-500 border-2'>
                        <p className='text-red-500'>Picture</p>
                </div>
                <div className='flex flex-row items-center'>
                    <Image src = '/export.png' width = {24} height = {24} alt = 'Profile picture upload button'/>
                    <h1 className='font-medium text-[14px] leading-[16px] text-[#585858]'>Upload Image</h1>
                </div>
                <div className='flex flex-col items-center gap-6 mt-12'>
                    <div className='flex flex-row items-center gap-[24px]'>


                    <div className="w-[378px] h-[46px] border-[1px] rounded-[6px] flex flex-row items-center pr-4 justify-between  text-[#878787]  border-[#DDDDDD] ">
                    <FloatingInput
                      label="First Name"
                      className="outline-none bg-transparent rounded-[6px] pl-[24px]  w-full h-[46px]"
                    />
                    {/* <Image alt="" src="/email-box.png" width={18} height={14} /> */}
                  </div>
                  <div className="w-[378px] h-[46px] border-[1px] rounded-[6px] flex flex-row items-center pr-4 justify-between  text-[#878787]  border-[#DDDDDD] ">
                    <FloatingInput
                      label="Last Name"
                      className="outline-none bg-transparent rounded-[6px] pl-[24px]  w-full h-[46px]"
                    />
                    {/* <Image alt="" src="/email-box.png" width={18} height={14} /> */}
                  </div>
                    </div>
                    


                    <div className='flex flex-row items-center gap-[24px]'>


                    <div className="w-[378px] h-[46px] border-[1px] rounded-[6px] flex flex-row items-center pr-4 justify-between  text-[#878787]  border-[#DDDDDD] ">
                    <FloatingInput
                      label="First Name"
                      className="outline-none bg-transparent rounded-[6px] pl-[24px]  w-full h-[46px]"
                    />
                    {/* <Image alt="" src="/email-box.png" width={18} height={14} /> */}
                    <div className='font-medium text-xs leading-[18px] text-[#3AAE2A] underline'>Change</div>
                  </div>
                  <div className="w-[378px] h-[46px] border-[1px] rounded-[6px] flex flex-row items-center pr-4 justify-between  text-[#878787]  border-[#DDDDDD] ">
                    <FloatingInput
                      label="Last Name"
                      className="outline-none bg-transparent rounded-[6px] pl-[24px]  w-full h-[46px]"
                    />
                    {/* <Image alt="" src="/email-box.png" width={18} height={14} /> */}
                    <div className='font-medium text-xs leading-[18px] text-[#3AAE2A] underline'>Change</div>
                  </div>
                    </div>

                    <div className='w-full h-[46px] border-[1px] rounded-[6px] flex flex-row items-center pr-4 justify-between  text-[#878787]  border-[#DDDDDD] '>
                    <FloatingInput
                      label="Last Name"
                      className="outline-none bg-transparent rounded-[6px] pl-[24px]  w-full h-[46px]"
                    />
                    </div>
                </div>

                <div className='mt-28'>
                <h1 className='font-bold text-2xl leading-[18px]'>Login</h1>
                <div className='flex flex-row items-end gap-[93px] mt-[63px]'>
                  <div className='flex flex-col gap-6'>
                    <h1 className='font-medium text-lg leading-[18px]'>Last Updated</h1>
                    <p className='font-normal text-[14px] leading-[18px]'>01 month ago</p>
                  </div>
                  <button className='w-[177px] h-[38px] rounded-[4px] bg-[#3AAE2A] text-white font-normal text-xs leading-[18px]'>Change Password</button>
                </div>
                </div>
                </div>

            </div>
    </div>
  )
}

export default PersonalInformation