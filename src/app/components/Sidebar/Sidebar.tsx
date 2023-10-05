// components/Sidebar.tsx

import Image from 'next/image';
import React, { useState } from 'react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
    const sideBarData = [
        {
            name:'Home',
            url:'',   
        },
        {
            name:'Favourites',
            url:'',   
        },
        {
            name:'Categories',
            url:'',   
        },
        {
            name:'Testimonials',
            url:'',   
        },
        {
            name:'FAQs',
            url:'',   
        },
        {
            name:'Download Mobile App',
            url:'',   
        },
        {
            name:'Contact Us',
            url:'',   
        },
    ]
  return (
    <div
      className={`fixed  h-full pl-[128px] w-[484px] z-50 top-30 left-0 bg-white shadow-lg transform transition-transform ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
        <button
        onClick={onClose}
        className="mt-[87px]"
      >
        <Image src = '/cross-2.png' width={20} height={20} alt = 'close button'/>
      </button>
      <div className="flex flex-col mt-[157px] gap-[32px] ">
      {
sideBarData.map((element,idx)=> {
    return  <h1 key = {idx} className="text-base font-semibold text-[#4D4D4D] leading-[18px] cursor-pointer hover:text-[#3AAE2A]">{element.name}</h1>
})
      }  
        {/* Add your sidebar content here */}
      </div>
      
    </div>
  );
};

export default Sidebar;
