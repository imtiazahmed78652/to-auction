'use client'
import React from 'react'
import { Virtual, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

function PopularCategories() {
    const [swiperRef, setSwiperRef] = React.useState(null);
    const appendNumber = React.useRef(500);
  const prependNumber = React.useRef(1);
  // Create array with 500 slides
  const [slides, setSlides] = React.useState(
    Array.from({ length: 500 }).map((_, index) => `Slide ${index + 1}`)
  );
const categories = [
    {
        name:'Jewellery',
        img:'/lady.png',
    },
    {
        name:'Handbag',
        img:'/woman-with-phone-1.png',
    },
    {
        name:'Watches',
        img:'/watches.png',
    },
    
]
  return (
    <div className='mt-[315px] flex flex-col items-center justify-center overflow-hidden'>
        <h1 className='font-normal text-[36px] leading-[46px] text-[#686868]'>Popular Categories</h1>
        <div className='mt-[64px] w-full'>
        <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
       {
        categories.map((element,idx)=> {
            return <SwiperSlide key = {idx}>
            <div className='h-[375px] bg-black flex flex-row bg-no-repeat bg-cover justify-start items-end p-12' style= {{backgroundImage:`url(${element.img})`}}>
                    <h1 className='text-[48px] font-normal leading-[46px] text-white bottom-0 '>{element.name}</h1>    
            </div>   
            </SwiperSlide>
        })
       } 
        
        
      </Swiper>
        </div>
    </div>
  )
}

export default PopularCategories