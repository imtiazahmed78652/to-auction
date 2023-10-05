// components/FullWidthOverlay.tsx

import Image from 'next/image';
import React, { useState } from 'react';

interface Props {
    isSearchInputOpen: boolean;
    onButtonClick:()=> void;
  }
  
const SearchInput: React.FC<Props> = ({isSearchInputOpen,onButtonClick}) => {
//   const [isOpen, setIsOpen] = useState(false);

//   const handleButtonClick = () => {
//     setIsOpen(!isOpen);
//   };

  return (
    <div>
     
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-gray-700 bg-opacity-50 transform transition-transform ease-in-out duration-300 ${
          isSearchInputOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="bg-white p-8 w-full  h-full flex flex-row justify-center">
          <div className='mt-[199px] shadow-xl border-b-[4px] border-[#57595E] w-[589px] h-[60px] flex flex-row gap-[10px] px-[24px] items-center '>
            <Image src = '/Search-icon.png' width={20} height={20} alt = 'Search Icon'/>
            <input type="text" className='w-full h-full outline-none' placeholder='Search with any keywords or items name'/>
            <div onClick={onButtonClick} className='cursor-pointer'>
            <Image src = '/cross-2.png' width = {20} height={20} alt = 'cross'/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchInput;
