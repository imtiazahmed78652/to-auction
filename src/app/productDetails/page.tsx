
import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import Image from 'next/image'

function ProductDetails() {
  return (
    <>
    <Navbar/>
    <div className='px-[128px] py-[22px] flex flex-row items-center justify-between border-b-[1px] border-[#C9C9C9]'>
        <div className='flex flex-row items-center gap-[112px]'>
            <div className='flex flex-row items-center gap-4'>
                <Image src = '/arrow-back.png' alt = '' width={22.5} height={12.5} />
                <div className='font-semibold text-sm leading-[25px] text-[#6D6D6D]'>Previous Lot</div>
            </div>
            <div className='flex flex-row items-center gap-16'>
                    <div className='flex flex-col gap-3'>
                        <h1 className='text-black font-semibold text-xl leading-[18px]'>$200</h1>
                        <p className='font-normal text-[#ADADAD] text-[18px] leading-[18px]'>Highest Bid</p>
                    </div>
                    <div className='flex flex-col gap-3'>
                        <h1 className='text-black font-semibold text-xl leading-[18px]'>19h 27m 55s</h1>
                        <p className='font-normal text-[#ADADAD] text-[18px] leading-[18px]'>TIME</p>
                    </div>
                    <div className='flex flex-col gap-3'>
                        <h1 className='text-black font-semibold text-xl leading-[18px]'>31</h1>
                        <p className='font-normal text-[#ADADAD] text-[18px] leading-[18px]'>BIDS</p>
                    </div>
            </div>
        </div>
        <div className='flex flex-row items-center gap-[112px]'>
            <div className='flex flex-row items-center gap-6'>
                <div className='w-[161px] h-[50px] gap-2 flex flex-row items-center justify-center border-[1px] border-[#707070] rounded-[4px] '>
                    <Image src = '/cart.png' alt = '' width={16} height={18}/>
                    <h1 className='font-medium text-sm leading-[18px]'>Add to Calendar</h1>
                </div>
                <div className='w-[161px] h-[50px] gap-2 flex flex-row items-center justify-center border-[1px] border-[#707070] rounded-[4px] '>
                <Image src = '/like-heart.png' alt = '' width={22} height={19}/>
                    <h1 className='font-medium text-sm leading-[18px]'>Add to Calendar</h1>
                </div>
            </div>
            <div className='flex flex-row items-center gap-4'>
                <p className='font-semibold text-sm leading-[25px] text-[#6D6D6D]'>Next lot</p>
                <Image src = '/right-arrow.png' width={22.5} height={12.5} alt=''/>
            </div>
        </div>
    </div>
    <div className='flex flex-row items-center justify-between'>
        <div className='w-[948px]'>

            <div className='pl-[128px] bg-[#F5F5F5] pt-6 pb-[52px]'>
                <div className='flex flex-row items-center justify-center gap-[117px]'>
                    <button className='w-[48px] h-[48px] rounded-full border-[1px] border-[#7E7E7E80] flex flex-row items-center justify-center'><Image src='/design-arrow.png' alt = '' width = {27} height = {16}/></button>
                    <div className='w-[433px] h-[638px]'>
                            <Image src='/image-2.png' width={433} height={638} alt=''/>
                    </div>
                    
                    <button className='w-[48px] h-[48px] rounded-full border-[1px] flex flex-row border-[#7E7E7E80] items-center justify-center'><Image src='/design-arrow-1.png' alt = '' width = {27} height = {16}/></button>
                </div>
                <div className='flex flex-row items-center justify-center mt-9 gap-[52px]'>
                <div className='w-[91px] h-[92px]'>
                    <Image src = '/image2-1.png' width = {91} height = {92} alt = ''/>
                </div>
                <div className='w-[91px] h-[92px]'>
                    <Image src = '/image-2-2.png' width = {91} height = {92} alt = ''/>
                </div>
                <div className='w-[91px] h-[92px]'>
                    <Image src = '/image-2-3.png' width = {91} height = {92} alt = ''/>
                </div>
                <div className='w-[91px] h-[92px]'>
                    <Image src = '/image-2-4.png' width = {91} height = {92} alt = ''/>
                </div> 
                <div className='w-[91px] h-[92px]'>
                    <Image src = '/image-2-5.png' width = {91} height = {92} alt = ''/>
                </div>  
            </div>
            </div>
        <div className='pl-[128px]'>
            <div className=' mt-8 font-semibold text-base leading-[18px] text-[#BCBCBC]'>
                Home {">"} <span > Products</span>
            </div>
            <div className='mt-16 font-semibold  text-[#878787] text-[16px] leading-[18px]'>
            Lorem ipsum dolor sit amet consectetur. Magna elementum risus eu tellus id viverra. Purus commodo augue nibh odio cursus nunc facilisis. Rhoncus enim et faucibus nunc. Ornare proin fames platea senectus convallis netus. Eu ipsum natoque tristique sagittis viverra. Aliquam nibh condimentum massa commodo. Tristique augue in tincidunt eleifend cras. Sem cras sit habitant lectus est.
            </div>
        </div>
            
        </div>
        <div className='w-[679px] border-2 border-green-500'></div>
    </div>
    <Footer/>
    </>
  )
}

export default ProductDetails