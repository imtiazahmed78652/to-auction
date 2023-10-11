'use client'
import React from "react";
import Image from "next/image";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

function Category() {
  const [grid,setGrid]  = React.useState(false);
  const data = [
    {
      brand: "Omega",
    },
    {
      brand: "Omega",
    },
    {
      brand: "Omega",
    },
  ];
  const watches = [
    {
      img:'/watch-01.png',
      name:'Decorative Objects Auction (Modern)',
      condition:'3/5 Pre-Owned',
      price:'200',
      end:'End Today 17:00'
    },
    {
      img:'/watch-01.png',
      name:'Decorative Objects Auction (Modern)',
      condition:'3/5 Pre-Owned',
      price:'200',
      end:'End Today 17:00'
    },
    {
      img:'/watch-01.png',
      name:'Decorative Objects Auction (Modern)',
      condition:'3/5 Pre-Owned',
      price:'200',
      end:'End Today 17:00'
    },
    {
      img:'/watch-01.png',
      name:'Decorative Objects Auction (Modern)',
      condition:'3/5 Pre-Owned',
      price:'200',
      end:'End Today 17:00'
    },
    {
      img:'/watch-01.png',
      name:'Decorative Objects Auction (Modern)',
      condition:'3/5 Pre-Owned',
      price:'200',
      end:'End Today 17:00'
    },
    {
      img:'/watch-01.png',
      name:'Decorative Objects Auction (Modern)',
      condition:'3/5 Pre-Owned',
      price:'200',
      end:'End Today 17:00'
    },
  ]
  return (
    <>
      <Navbar />
      <div className="grid place-items-center">
        <div className="w-[1440px] px-[128px]">
          <div className="flex flex-row items-center gap-[16px] mt-8">
            <h1 className="font-medium text-base leading-[18px] text-[#878787]">
              Home
            </h1>
            <Image
              src="/dropdown.png"
              width={10}
              height={10}
              alt=""
              className="transform -rotate-90"
            />
            <h1 className="font-medium text-base leading-[18px] text-[#878787]">
              Categories
            </h1>
            <Image
              src="/dropdown.png"
              width={10}
              height={10}
              alt=""
              className="transform -rotate-90"
            />
            <h1 className="font-medium text-base leading-[18px] text-[#BCBCBC]">
              Jewellery
            </h1>
          </div>
          <h1 className="mt-12 font-normal text-2xl leading-[25px] ">
            Jewellery
          </h1>

          <div className="flex flex-row items-center justify-between mt-8">
            <div className="w-[402px] h-[48px] rounded-[4px] border-[1px] border-[#D9D9D9] pl-6 flex flex-row items-center">
              <input
                type="text"
                placeholder="Search"
                className="w-full h-full outline-none font-medium text-[12px] leading-[25px]"
              />
              <button className="w-[100px] h-[46px] bg-[#EEEEEE] font-medium text-[12px] leading-[5px] flex flex-row items-center justify-center gap-[8px] text-[#878787]">
                Keyword{" "}
                <Image src="/dropdown.png" alt="" width={6} height={3} />{" "}
              </button>
            </div>
            <div className="flex flex-row items-center gap-8">
              <div className="flex flex-row items-center gap-[10px] border-[1px] border-[#D9D9D9] rounded-[4px] px-4 py-3">
                <p className="w-[20px] h-[20px] rounded-full bg-[#3AAE2A] text-white flex flex-row items-center justify-center text-[12px]">
                  4
                </p>
                <p>Filter</p>
                <Image src="/filter.png" alt="" width={24} height={24} />
                
              </div>

              <div className="flex flex-row items-center gap-4">
                <div className="border-[1px] border-[#D9D9D9] w-[48px] h-[48px] rounded-[4px]  gap-[2px]  flex flex-col items-center justify-center cursor-pointer" onClick={()=> setGrid(true)}>
                  <div className="flex flex-row items-center gap-[2px]">
                  <div className="w-[11px] h-[11px]  rounded-[1px] border-[2px] border-[#3AAE2A]"></div>
                  <div className="w-[11px] h-[11px]  rounded-[1px] border-[2px] border-[#3AAE2A]"></div>
                  </div>
                  
                  <div className="flex flex-row items-center gap-[2px]">
                  <div className="w-[11px] h-[11px] rounded-[1px] border-[2px] border-[#3AAE2A]"></div>
                  <div className="w-[11px] h-[11px]  rounded-[1px] border-[2px] border-[#3AAE2A]"></div>
                  </div>
                </div>

                <div className="border-[1px] border-[#D9D9D9] w-[48px] h-[48px] rounded-[4px] flex flex-col items-center justify-center gap-[2px] cursor-pointer" onClick={()=> setGrid(false)}>
                  <div className="w-6 h-[11px] border-[2px] border-[#3AAE2A]"></div>
                  <div className="w-6 h-[11px] border-[2px] border-[#3AAE2A]"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full flex flex-row justify-end gap-[12px] mt-[26px]">
            {data.map((element, idx) => {
              return (
                <div key={idx} className="w-[135px] h-[36px] bg-[#F2F2F2] rounded-[30px] flex flex-row items-center justify-center gap-4">
                  <p className="font-medium text-xs leading-[18px] text-[#939393]">
                    Brand: <span>{element.brand}</span>
                  </p>
                  <Image
                    src="/clear-filter.png"
                    alt=""
                    width={12}
                    height={12}
                  />
                </div>
              );
            })}
            <div className="w-[135px] h-[36px] bg-[#3AAE2A33] bg-opacity-[20%] cursor-pointer rounded-[30px] flex flex-row items-center justify-center gap-4">
              <p className="font-medium text-xs leading-[18px]  text-[#3AAE2A]">
                <span>Clear All</span>
              </p>
              <Image src="/clear-filter.png" alt="" width={12} height={12} />
            </div>
          </div>



          <div className={`grid  gap-6 mt-8 ${grid ? 'grid-cols-4' : 'grid-cols-2'}`}>
          {
            watches.map((element,idx)=> {
              return <div key = {idx} className={`flex items-center gap-6  ${grid ? 'flex-col w-[278px]' : 'flex-row w-[580px]'}`}>
              
              
              
              <div className="flex flex-col">
                <div className={`relative  ${grid ? 'w-[278px] h-[274px]' : 'h-[254px] w-[257px]'} flex flex-row justify-center items-center rounded-[4px]`}>
                 {
                    grid ? <Image src={element.img} width={278} height={274} alt="" /> : <Image src={element.img} width={257} height={254} alt="" /> 
                 } 
                  <div
                    className={`absolute right-[8px] top-[8px] w-8 h-8 rounded-full border-[1px] border-[#3AAE2A] flex flex-row items-center justify-center  cursor-pointer bg-white`}
                  >
                    <Image src="/Heart_01.png" width={20} height={20} alt="" />
                  </div>
                </div>
              </div>



              <div className="w-[278px] h-full flex flex-col justify-between">
                <div>
                <p className="font-medium text-[14px] leading-[18px] text-black">
                  Decorative Objects Auction (Modern)
                </p>
                <div className="flex flex-col gap-[12px] mt-[24px]">
                  <h1 className="font-normal text-[14px] leading-[18px] text-[#878787] ">Condition Score:</h1>
                  <p className="font-medium text-base leading-[18px]">3/5 Pre-Owned</p>
                </div>
                </div>

                <div>
                <p className="mt-[16px] font-normal text-[14px] leading-[18px] flex flex-col text-[#B9B9B9]">
                  Price:{" "}
                  <span className="text-[#111821] font-bold text-base leading-[18px]">
                    $200
                  </span>
                </p>{" "}
                <div className=" mt-2 text-[#B1B1B1] flex flex-row items-center justify-between  font-medium text-sm leading-[18px] ">
                 <div> End Today 17:00</div>
                {
                  !grid && <button className="w-[101px] text-white h-[38px] rounded-[4px] bg-[#3AAE2A]">Place Bid</button>
                } 
                </div>
                </div>
              </div>




            </div>
            })
          }  
          </div>





        </div>
      </div>
      <div className="mt-[103px]  ">
      <Footer/>
      </div>
    </>
  );
}

export default Category;
