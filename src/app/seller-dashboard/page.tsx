'use client'
import React from 'react'
import Image from 'next/image'
import Navbar from '../components/navbar/Navbar'
import ProgressBar from '../components/ProgressBar/ProgressBar'

function SellerDashboard() {
  const [value, setValue] = React.useState<number>(50); // Example value
  const maxValue = 100; 

  const data = [
    {
      name:'Total Revenue',
      price:'$199.99',
    },
    {
      name:'Avg. Selling Price',
      price:'$49.99',
    },
    {
      name:'Total Items',
      price:'$14',
    },
    {
      name:'Sold Items',
      price:'$03',
    },
  ]

  const earnings = [
    {
      date:'23/04/2021',
      activity:'Withdrawal',
      amount:'$200',
    },
    {
      date:'23/04/2021',
      activity:'Withdrawal',
      amount:'$200',
    },
    {
      date:'23/04/2021',
      activity:'Withdrawal',
      amount:'$200',
    },
    {
      date:'23/04/2021',
      activity:'Withdrawal',
      amount:'$200',
    },
    {
      date:'23/04/2021',
      activity:'Withdrawal',
      amount:'$200',
    },
    {
      date:'23/04/2021',
      activity:'Withdrawal',
      amount:'$200',
    },
    {
      date:'23/04/2021',
      activity:'Withdrawal',
      amount:'$200',
    },
    {
      date:'23/04/2021',
      activity:'Withdrawal',
      amount:'$200',
    },
    {
      date:'23/04/2021',
      activity:'Withdrawal',
      amount:'$200',
    },
    {
      date:'23/04/2021',
      activity:'Withdrawal',
      amount:'$200',
    },
  ]

  const activeItems = [
    {
      bidOn:'Decorative Objects Auction (Modern)',
      dateAndTime:'29-09-2023',
      status:'Delivered', 
      price:'240'
    },
    {
      bidOn:'Decorative Objects Auction (Modern)',
      dateAndTime:'29-09-2023',
      status:'Delivered', 
      price:'240'
    },
    {
      bidOn:'Decorative Objects Auction (Modern)',
      dateAndTime:'29-09-2023',
      status:'Delivered', 
      price:'240'
    },
    {
      bidOn:'Decorative Objects Auction (Modern)',
      dateAndTime:'29-09-2023',
      status:'Delivered', 
      price:'240'
    },
    {
      bidOn:'Decorative Objects Auction (Modern)',
      dateAndTime:'29-09-2023',
      status:'Delivered', 
      price:'240'
    },
    {
      bidOn:'Decorative Objects Auction (Modern)',
      dateAndTime:'29-09-2023',
      status:'Delivered', 
      price:'240'
    },
  ]
  return (
    <>
        <Navbar/>
        <div className='mt-8 w-full grid place-items-center'>
          <div className='max-w-[1440px] px-[128px]'>
          <h1 className='text-start w-[100%]'>Seller Dashboard</h1>
            <div className='flex flex-row  gap-6 mt-8'>



            <div className='flex flex-col gap-8'>
            
            <div className='w-[379px] h-[77px] border-[1px] border-[#E2E2E2] rounded-[4px] py-3 px-3 flex flex-row items-center gap-4'>
              <div className='w-[53px] h-[53px] rounded-full bg-[#EEEEEE]'></div>
              <p className='font-medium text-base leading-[18px]'>User name</p>
            </div>

              <div className='flex flex-col px-8 border-[1px] border-[#E2E2E2] rounded-[4px] pt-[32px]'>
                <div className='flex flex-row justify-between'>
                  <h1 className='font-normal text-xl leading-[18px]'>Earnings</h1>
                  <div className='flex flex-col items-end'>
                    <h1 className='text-[#808080]'>Available Funds</h1>
                    <p className='text-[#3AAE2A] font-bold text-lg leading-[18px] mt-[16px]'>$300</p>
                  </div>
                </div>


                <div className='flex flex-col mt-[87px]'>
                <div className="w-full flex flex-row justify-between pb-[16px]">
                    <div className='text-[#828282] text-[14px] font-normal leading-[18px]'>Date</div>
                    <div className='text-[#828282] text-[14px] font-normal leading-[18px]'>Activity</div>
                    <div className='text-[#828282] text-[14px] font-normal leading-[18px]'>Amount</div>
                </div>
                <div className='flex flex-col'>

                {
                  earnings.map((element,idx)=> {
                    return <div key = {idx} className='border-t-[1px] border-b-[1px] border-[#DDDDDDDD] py-[30px] flex flex-row items-center justify-between'>
                    <div className='font-normal text-[12px] leading-[18px] text-black'>23/04/2021</div>
                    <div className='font-normal text-[12px] leading-[18px] text-black'>Withdrawal</div>
                    <div className='font-normal text-[12px] leading-[18px] text-black'>$200</div>
                  </div>
                  })
                }
                


                </div>
                </div>
              </div>

            </div>



            <div className='flex flex-col gap-8'>
              <div className='h-[78px] flex flex-row items-center '>
               {
                data.map((element,idx)=> {
                  return  <div key = {idx} className={`w-[195px]  h-full border-[1px] border-[#E2E2E2] flex flex-col items-center justify-center ${idx === 0 ? 'rounded-l-[4px]' : ''} ${idx === 3 ? 'rounded-r-[4px]' : ''}`}>
                  <h1 className={`font-medium text-[14px] leading-[18px] text-[#A3A3A3]  `}>{element.name}</h1>
                  <p className='font-medium text-sm leading-[18px] text-black'>{element.price}</p>
                </div>
                })
               } 
              </div>
              <div className='flex flex-row items-center gap-6'>
                  <div className='flex flex-col w-[378px] h-[241px] justify-between rounded-[4px] border-[1px] border-[#E2E2E2] px-[25px] py-[22px]'>
                    <div className='flex flex-row items-center  justify-between w-full'>
                    <div className='font-normal text-[18px] leading-[18px] flex flex-row items-center gap-[6px]'> <span> Total Sales </span> <div className='w-[90px] h-[32px] border-[1px] border-[#D9D9D9] rounded-[6px] text-[#D9D9D9] font-normal text-[12px] leading-[18px] flex flex-row items-center justify-between px-[8px]'>This Month <Image src = '/dropdown.png' alt = '' width = {6} height = {3}/></div></div>
                    
                    

                    <div className='flex flex-row items-center gap-[12px]'>
                      <div className='w-[32px] h-[32px] bg-[#C5FFBD]  flex flex-row items-center justify-center rounded-[6px]'>
                        <Image src = '/trade-line.png' alt = '' width = {17} height = {6}/>
                      </div>
                      <p className='font-medium text-[14px] leading-[18px] text-blac  k'>$12,399</p>
                    </div>
                    </div>



                    <div className='w-[329px] h-[130px] relative'>
                  <img src="/trade-chart-bg.png" alt="" className='w-full h-full'/>
                  <Image src = '/trade-chart.png' alt = '' width = {305} height = {135} className='absolute top-0 z-10'/>
                    </div>
                    </div>
                    
                    <div className='w-[378px] h-[241px] rounded-[4px] border-[1px] border-[#E2E2E2] pt-[22px] px-[32px] pb-8 flex flex-col justify-between'>
                      <div className='flex flex-row items-center justify-between'>
                    <div className='font-normal text-[18px] leading-[18px] flex flex-row items-center gap-[6px]'> <span> Total Sales </span> <div className='w-[90px] h-[32px] border-[1px] border-[#D9D9D9] rounded-[6px] text-[#D9D9D9] font-normal text-[12px] leading-[18px] flex flex-row items-center justify-between px-[8px]'>This Month <Image src = '/dropdown.png' alt = '' width = {6} height = {3}/></div></div>   
                    <div className='flex flex-row items-center gap-[12px]'>
                      <div className='w-[32px] h-[32px] bg-[#FFBDBD]  flex flex-row items-center justify-center rounded-[6px]'>
                        <Image src = '/trade-line-purple.png' alt = '' width = {17} height = {6}/>
                      </div>
                      <p className='font-medium text-[14px] leading-[18px] text-blac  k'>$12,399</p>
                    </div>
                    </div>

                    <div className='flex flex-row items-center gap-[49px]'>

                      <div className='flex flex-col items-center  gap-[24px]'>
                          <div className='w-[10px] h-[70px] bg-[#E4EAF0] rounded-[10px] flex flex-col justify-end'>
                              <div className='w-[10px] h-[29px] bg-[#3AAE2A] rounded-[10px]'></div>
                          </div>
                          <div className='font-medium text-[12px] leading-[18px]'>0</div>
                      </div>

                      <div className='flex flex-col items-center gap-[24px]'>
                    <div className='w-[10px] h-[70px] bg-[#E4EAF0] rounded-[10px] flex flex-col justify-end'>
                      <div className='w-[10px] h-[35px] bg-[#3AAE2A] rounded-[10px]'></div>
                    </div>
                    <div className='font-medium text-[12px] leading-[18px]'>10</div>
                    </div>


                  <div className='flex flex-col items-center gap-[24px]'>
                    <div className='w-[10px] h-[70px] bg-[#E4EAF0] rounded-[10px] flex flex-col justify-end'>
                      <div className='w-[10px] h-[60px] bg-[#3AAE2A] rounded-[10px]'></div>
                    </div>
                    <div className='font-medium text-[12px] leading-[18px]'>0</div>
                    </div>


                    <div className='flex flex-col items-center gap-[24px]'>
                    <div className='w-[10px] h-[70px] bg-[#E4EAF0] rounded-[10px] flex flex-col justify-end'>
                      <div className='w-[10px] h-[80px] bg-[#3AAE2A] rounded-[10px]'></div>
                    </div>
                    <div className='font-medium text-[12px] leading-[18px]'>0</div>
                    </div>

                   
                   
                    <div className='flex flex-col items-center gap-[24px]'>
                    <div className='w-[10px] h-[70px] bg-[#E4EAF0] rounded-[10px] flex flex-col justify-end'>
                      <div className='w-[10px] h-[20px] bg-[#3AAE2A] rounded-[10px]'></div>
                    </div>
                    <div className='font-medium text-[12px] leading-[18px]'>0</div> 
                    </div>
                   
                   
                   
                    <div className='flex flex-col items-center gap-[24px]'>
                    <div className='w-[10px] h-[70px] bg-[#E4EAF0] rounded-[10px] flex flex-col justify-end'>
                      <div className='w-[10px] h-[95px] bg-[#3AAE2A] rounded-[10px]'></div>  
                    </div>
                    <div className='font-medium text-[12px] leading-[18px]'>0</div>
                    </div>



                    </div>
                      
                      
                      </div>  
                  </div>

                  <div className='flex flex-row items-center justify-between'>
                    <h1 className=  'font-bold text-[20px] leading-[18px] text-black'>Active Items</h1>
                    <button className='text-[#3AAE2A] font-bold text-[14px] leading-[18px] hover:underline hover:text-[#42723b]'>View All</button>
                  </div>

                  
                  <div className='flex flex-col items-center gap-4'>
                  {
                    activeItems.map((element,idx)=> {
                      return  <div key={idx} className='w-full  py-6 pr-8 pl-6 border-[1px] flex flex-row items-center justify-between border-[#E2E2E2] rounded-[4px]'>
                      <div className='flex flex-col gap-4'>
                        <p className='flex flex-row items-center gap-[8px] text-[#CCCCCC]'>Bid on: <span className='text-[#6C6C6C] font-bold text-sm leading-[18.9px]'>Decorative Objects Auction (Modern)</span></p>
                        <div className='flex flex-row items-center gap-6 '>
                          <div className='flex flex-row items-center'>
                           <span className='font-medium text-[12px] text-[#CCCCCC]'> Date & Time:</span> 
                          <span className='text-[#6C6C6C] font-bold text-sm leading-[18.9px]'>Decorative Objects Auction (Modern)</span> 
                          </div>
                          <div className='flex flex-row items-center gap-2 text-[#CCCCCC] font-medium text-xs leading-[18px]'>
                            status <span className='text-[#00BC13]'>Delivered</span>
                          </div>
                          
                          </div>
                      </div>
                      <div className='flex flex-row items-center gap-6'>
                        <div className='text-[#CF2D2D] font-bold text-2xl leading-[34px]'>$240</div>
                        <div className='font-medium text-[16px] leading-[34px] underline'>View Item</div>
                      </div>


                      
                    </div>
                    })
                  } 
                  </div>    
              </div>
              
            </div>  

              


            </div>
        </div>
        
        
    
    </>
  )
}

export default SellerDashboard;