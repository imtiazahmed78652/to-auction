'use client'
import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'

import { manrope, monumentum } from '../layout'
import  useRouter  from 'next/router'
// import { Image } from 'next/image'
import Image from 'next/image'

function ProductDetails() {
    // const router = useRouter();
    // console.log(router)
    const data = [
           {
                name:'Year',
                value:'2017'
           },
           {
            name:'Condition',
            value:'Good'
       },
       {
        name:'Model',
        value:'GMT Master II'
   },
   {
    name:'manufacturerWarranty',
    value:'Yes'
},
{
    name:'modelNumber',
    value:'116710BLNR'
},
{
    name:'vatIncluded',
    value:'40mm'
},
{
    name:'Year',
    value:'2017'
},
{
    name:'Include Papers',
    value:'Yes'
},
{
    name:'Case Dimension',
    value:'No'
},
{
    name:'Bezel Material',
    value:'Oystersteel',
},
{
    name:'Service Recomended',
    value:'Yes'
},
{
    name:'Bracelet Material',
    value:'4/5'
},
{
    name:'Includes',
    value:'4/5'
},

  
    ]
const biddingHistory = [ 
        {
            name:'Joseph Martinez',
            time:'12 Minutes ago',
            price:'$123',
        },
        {
            name:'Daniel Hall',
            time:'23 Minutes ago',
            price:'$120',
        },
        {
            name:'William Davis',
            time:'59 Minutes ago',
            price:'$115',
        },
        {
            name:'Michal Jones',
            time:'23 hours ago',
            price:'$110',
        },
        {
            name:'James Rodriguez',
            time:'23 hours ago',
            price:'$105',
        },
        {
            name:'William Davis',
            time:'23 hours ago',
            price:'$105',
        },
        {
            name:'Mia Taylor',
            time:'23 hours ago',
            price:'$98',
        },
        {
            name:'Isabella Anderson',
            time:'23 hours ago',
            price:'$95',
        },
        
    ]
    

  return (
    <>
    <Navbar/>
    <div className='flex justify-center font-satoshi'>
        <div className='w-[1440px] px-[128px]'>
        <div className='py-[22px] flex flex-row items-center justify-between border-b-[1px] border-[#C9C9C9]'>
       
       
       
        <div className='flex flex-row items-center gap-[65px]'>
            <div className='flex flex-row items-center gap-4'>
                <Image src = '/arrow-back.png' alt = '' width={22.5} height={12.5} />
                <div className='font-satoshi text-sm leading-[25px] text-dark-text-two'>Previous Lot</div>
            </div>
            <div className='flex flex-row items-center gap-12'>
                    <div className='flex flex-col '>
                        <h1 className='text-black font-medium font-satoshi text-base leading-[18px]'>$200</h1>
                        <p className='font-normal text-dark-text-two font-satoshi text-sm leading-[18px] mt-[11px]'>Highest Bid</p>
                    </div>
                    <div className='flex flex-col '>
                        <h1 className='text-black font-medium font-satoshi text-base leading-[18px]'>19h 27m 55s</h1>
                        <p className='font-normal text-dark-text-two font-satoshi text-sm leading-[18px] mt-[11px]'>TIME</p>
                    </div>
                    <div className='flex flex-col '>
                        <h1 className='text-black font-medium font-satoshi text-base leading-[18px]'>31</h1>
                        <p className='font-normal text-dark-text-two font-satoshi text-sm leading-[18px] mt-[11px]'>BIDS</p>
                    </div>
            </div>
        </div>

        <div className='flex flex-row items-center gap-[32.73px]'>
            
            <div className='flex flex-row items-center gap-6'>
                <div className='w-[143.22px] h-[48px] gap-2 flex flex-row items-center justify-center border-[1px] border-[#707070] rounded-[4px] '>
                    <Image src = '/cart.png' alt = '' width={14.22} height={16}/>
                    <h1 className='font-medium text-xs text-two-text leading-[18px]'>Add to Calendar</h1>
                </div>
                <div className='w-[143.22px] h-[48px] gap-2 flex flex-row items-center justify-center border-[1px] border-[#707070] rounded-[4px] '>
                <Image src = '/like-heart.png' alt = '' width={18.05} height={16}/>
                    <h1 className='font-medium text-xs text-two-text leading-[18px]'>Add to Calendar</h1>
                </div>
            </div>

            <div className='flex flex-row items-center gap-4'>
                <p className='font-satoshi text-sm leading-[25px] text-dark-text-two'>Next lot</p>
                <Image src = '/right-arrow.png' width={22.5} height={12.5} alt=''/>
            </div>


        </div>



    </div>
        </div>
    </div>
    






    <div className='flex justify-center'>
    <div className='w-[1440px]'>
<div className='flex flex-row w-full  gap-[100px]'>
        <div className='w-[732px]'>

            <div className='pl-[128px] bg-[#F5F5F5] pt-6 pb-[6px]'>
               
               
                <div className='flex flex-row items-center justify-center gap-[37px]'>
                    <button className='bg-white shadow-lg w-[47.74px] h-[48px] rounded-full border-[1px] border-[#7E7E7E80] flex flex-row items-center justify-center'><Image src='/design-arrow.png' alt = '' width = {27} height = {16}/></button>
                    <div className='w-[433px] h-[638px]'>
                            <Image src='/image-2.png' width={380} height={563} alt=''/>
                    </div>
                    <button className='w-[47.74px] shadow-lg bg-white mr-[38px] h-[48px] rounded-full border-[1px] flex flex-row border-[#7E7E7E80] items-center justify-center'><Image src='/design-arrow-1.png' alt = '' width = {27} height = {16}/></button>
                </div>
                
                
                <div className='flex flex-row items-center justify-center mt-9 gap-[32px]'>
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
        <div className='pl-[128px] flex flex-col'>
            <div className=' mt-8 font-semibold text-xs leading-[18px] text-dark-border gap-[16px] flex flex-row items-center'>
                <span>Home</span> <span> <Image src = '/arrow-small.png' width={3.52} height={7.06} alt='arrow'/> </span> <span > Category</span> <span> <Image src = '/arrow-small.png' width={3.52} height={7.06} alt='arrow'/> </span> <span className='text-light'>Jewellery</span>
            </div>
            <div className='mt-12 font-normal font-satoshi text-dark-border text-sm leading-[18px]'>
            Lorem ipsum dolor sit amet consectetur. Magna elementum risus eu tellus id viverra. Purus commodo augue nibh odio cursus nunc facilisis. Rhoncus enim et faucibus nunc. Ornare proin fames platea senectus convallis netus. Eu ipsum natoque tristique sagittis viverra. Aliquam nibh condimentum massa commodo. Tristique augue in tincidunt eleifend cras. Sem cras sit habitant lectus est.
            </div>
            <div className={`text-green font-semibold text-base leading-[25px] flex flex-row items-center gap-[8px]   ${manrope.className}`}> <span> See More</span> <Image src = '/drop-down-green.png' width={14} height={7} alt = ""/> </div>
        </div>
            
           
            {/* <div className="pl-[128px] mt-[64px]">
      <div className="grid grid-cols-2 gap-4 w-[605px]">
        {data.map((item, index) => (
          <div
            key={index}
            className="   "
          >
            <div className="text-sm font-semibold text-gray-500">
              {item.name}
            </div>
            <div className="text-lg font-semibold text-gray-900">
              {item.value}
            </div>
          </div>
        ))}
      </div>
    </div> */}
            
        </div>


        {/* <div className='w-[479px] font-normal text-[30px] leading-[25px]'>
            <h1 className={` ${monumentum.className} mt-[96px] font-normal  text-3xl leading-[25px]'`}>Centrix Automate Open Heart</h1>
            <p className='font-semibold text-base leading-[18px] mt-6 text-[#878787]'>Product ID: <span className='text-[#878787]'>116519</span></p>
            <div className='mt-[34px] w-full border-[1px] border-[#D9D9D9] px-[47px] py-[40px]'>
                    <input type="text" className='px-[27px] w-[583px] h-[60px] rounded-[4px] bg-[#E7E7E7] outline-none text-base font-medium leading-[18px] ' placeholder='$200' />

                    <div className='mt-6 flex flex-row items-center justify-between'>
                    <button className='bg-[#3AAE2A] w-[279px] h-[60px] rounded-[4px] font-semibold text-xl text-white leading-[18px] hover:bg-[#345d2f] hover:shadow-xl'>Place Bid</button>
                    <button className='w-[279px] h-[60px] rounded-[4px] border-[1px] border-[#E7E7E7] font-semibold text-[20px] text-[#AAAAAA] hover:text-black leading-[18px]'>Set Max Bid</button>
            </div>



            <div className='flex flex-row items-end gap-[34px] mt-[91px]'>
                    <div className='flex flex-col'>
                        <h1 className='font-normal text-[18px] leading-[18px] text-[#878787]'>Condition Score:</h1>
                        <p className='font-normal mt-[22px] text-[24px] leading-[18px]'>
                            3/5 {'  '}
                        <span className='font-semibold text-[20px] leading-[18px] text-[#505050]'> {'  '}Pre-Owned</span>
                        </p>
                    </div>
                    <div className='w-[234px] h-[124px]'>
                        <Image src = '/Group 39730.png' width={234} height={124} alt = ''/>
                    </div>
            </div>

            <div className='mt-[86px] pt-[45px] border-t-[1px] border-[#D9D9D9]'>
                <div className='flex flex-row items-center justify-between gap-[42px]'>
                            <Image src = '/logo-one.png' width={75.38} height={75.38} alt = ''/>
                            <Image src = '/logo-two.png' width={75.38} height={75.38} alt = ''/>
                            <Image src = '/logo-three.png' width={75.38} height={75.38} alt = ''/>
                            <Image src = '/logo-four.png' width={75.38} height={75.38} alt = ''/>
                            <Image src = '/logo-five.png' width={75.38} height={75.38} alt = ''/>
                </div>
            </div>


            </div>

            <div className='w-[679px]  rounded-[4px] border-[1px] border-[#D9D9D9] mt-[48px] p-12'>
                <h1 className='font-semibold text-xl leading-[18px] border-b-[1px] border-[#D9D9D9] pb-6'>Bidding History</h1>
                <div className='flex flex-col items-center gap-[32px] mt-6'>
                  {
                    biddingHistory.map((element,idx)=> {
                        return <div key={idx} className='flex flex-row items-center justify-between w-full'>
                        <h1 className='font-bold text-base leading-[18px] text-[#737373] basis-1/4 '>{element.name}</h1>
                        <p className='font-semibold text-base leading-[18px] text-[#737373] basis-1/4'>{element.time}</p>
                        <div className='font-bold text-base leading-[18px] text-[#1D1D1D] basis-1/4' >{element.price}</div>
                    </div>
                    })
                  }
                </div>
            </div>


            <div className='w-[679px]  rounded-[4px] border-[1px] border-[#D9D9D9] mt-12 p-12'>
                <div className='flex flex-col'>
                    <h1 className=''>Payment Methods</h1>
                    <div className='flex flex-row items-center mt-6 gap-8'>
                        <div className='relative w-[60px] h-[40px]'>
                        <Image
                            src='/master-card-2.png'
                            alt=''
                            layout="fill"
                            objectFit="cover"
                            objectPosition="center"
                            />
                        </div>
                        <div className='relative w-[60px] h-[40px]'>
                        <Image
                            src='/visa-two.png'
                            alt=''
                            layout="fill"
                            objectFit="cover"
                            objectPosition="center"
                            />
                        </div>
                        <div className='relative w-[32px] h-[32px]'>
                        <Image
                            src='/Paypal-two.png'
                            alt=''
                            layout="fill"
                            objectFit="cover"
                            objectPosition="center"
                            />
                        </div>
                        </div>

                    </div>
                


                    <div className='mt-16  flex flex-row  gap-[101px]'>
                        <div className='flex flex-col'>
                        <h1 className='font-bold text-base leading-[25px]'>Share on Social media</h1>
                        <div className='flex flex-row items-center gap-8'>
                         {
                            ['/twitter-2.png','/instagram-two.png','/facebook-two.png'].map((element,idx)=> {
                                return <div key={idx} className='w-[72px] h-[72px] border-[1px] flex flex-row items-center justify-center border-[#D9D9D9]'>
                                <Image width = {36} height = {36}  src = {element} alt = ''/>
                            </div>
                            })
                         }   
                        </div>
                        </div>
                        <div className='flex flex-col justify-between'>
                            <h1 className='font-bold text-base leading-[25px]'>Still have a question?</h1>
                            <div className='flex flex-row items-center justify-center w-[202px] h-[60px] border-[1px] border-[#D9D9D9]'>
                                <h1 className='font-normal text-base leading-[18px]'>Message Us</h1>
                                <Image src='/whatsapp.png' width={38} height={38} alt=''/>
                            </div>
                        </div>
                    </div>
                </div>
            
            
            

            
        </div> */}
    </div>
    </div>
    </div>
    
    <Footer/>
    </>
  )
}

export default ProductDetails