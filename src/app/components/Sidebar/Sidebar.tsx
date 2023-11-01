// components/Sidebar.tsx

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const sideBarData = [
    {
      name: "Home",
      url: "/",
    },
    {
      name: "Wish List",
      url: "/settings-and-info",
    },
    {
      name: "Categories",
      url: "/categories",
    },
    {
      name: "FAQs",
      url: "/frequently_asked_questions",
    },
    {
      name: "Download Mobile App",
      url: "",
    },
    {
      name: "Contact Us",
      url: "/contact_us",
    },
  ];
  const pathName = usePathname();
  
  return (
    <div
      className={`fixed  h-full  w-full top-0 z-50  left-0  shadow-lg transform transition-transform ${
        isOpen ? "bg-black bg-opacity-[25%]" : "hidden"
      }`}
    >
      <div
        className={`w-[484px] pl-[128px] transition-transform duration-300 ease-in-out delay-500 h-full bg-white transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button onClick={onClose} className="mt-[87px]">
          <Image src="/cross-2.png" width={20} height={20} alt="close button" />
        </button>
        <div className="flex flex-col mt-[157px] gap-[32px] ">
          {sideBarData.map((element, idx) => {
            return (
              <Link href={element.url} key={idx}>
              <h1
                
                className={`text-base font-semibold text-[#4D4D4D] leading-[18px] cursor-pointer hover:text-hover-green ${pathName === element.url && 'text-green hover:text-hover-green'} `}
              >
                {element.name}
              </h1>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
