"use client";
import React from "react";
import Image from "next/image";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Button from "../components/Button/Button";

function Category() {
  const [grid, setGrid] = React.useState(false);
  const [isFilter, setIsFilter] = React.useState(false);
  const [heading, setHeading] = React.useState("Filters");
  const [selectedFilter, setSelectedFilter] = React.useState<number | null>(
    null
  );
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
      img: "/watch-01.png",
      name: "Decorative Objects Auction (Modern)",
      condition: "3/5 Pre-Owned",
      price: "200",
      end: "End Today 17:00",
    },
    {
      img: "/watch-01.png",
      name: "Decorative Objects Auction (Modern)",
      condition: "3/5 Pre-Owned",
      price: "200",
      end: "End Today 17:00",
    },
    {
      img: "/watch-01.png",
      name: "Decorative Objects Auction (Modern)",
      condition: "3/5 Pre-Owned",
      price: "200",
      end: "End Today 17:00",
    },
    {
      img: "/watch-01.png",
      name: "Decorative Objects Auction (Modern)",
      condition: "3/5 Pre-Owned",
      price: "200",
      end: "End Today 17:00",
    },
    {
      img: "/watch-01.png",
      name: "Decorative Objects Auction (Modern)",
      condition: "3/5 Pre-Owned",
      price: "200",
      end: "End Today 17:00",
    },
    {
      img: "/watch-01.png",
      name: "Decorative Objects Auction (Modern)",
      condition: "3/5 Pre-Owned",
      price: "200",
      end: "End Today 17:00",
    },
  ];

  const filters = [
    {
      name: "Category",
    },
    {
      name: "Condition",
      subArray: [1, 0o2, 0o3, 0o4, 0o5],
    },
    {
      name: "Price Range",
    },
    {
      name: "Brand",
      subArray: [
        "Breitling",
        "Officine Panerai",
        "Omega",
        "Rolex",
        "Tudor",
        "Other",
      ],
    },
    {
      name: "Closing Date",
      subArray: [
        "15-Oct-2023",
        "10-Oct-2023",
        "21-Oct-2023",
        "29-Oct-2023",
        "06-Nov-2023",
        "17-Nov-2023",
      ],
    },
  ];
  
//   const filterName = "Brand";


const filter = filters.find((filter) => filter.name === 'Brand');
const subArray = filter?.subArray || [];
const mappedSubArray = subArray.map((item, index) => {
  return <div key={index}>{item}</div>;
});




console.log(heading)

  return (
    <div className="relative">
      <Navbar />
      <div className="grid place-items-center  ">
        {isFilter && (
          <div className="absolute z-50 w-[406px] bg-white top-0  flex flex-col justify-between h-[100vh] right-0  ">
            <div className="w-full px-[32px] py-[32px] h-full">
              <div className="flex flex-row gap-[122px]">
                {heading === "Filters" ? (
                  <div
                    className="cursor-pointer"
                    onClick={() => setIsFilter(false)}
                  >
                    <Image src="/cross-2.png" width={20} height={20} alt="" />
                  </div>
                ) : (
                  <div
                    className="cursor-pointer"
                    onClick={() => {setHeading("Filters");setSelectedFilter(null)}}
                  >
                    <Image
                      src="/arrow-back.png"
                      width={20}
                      height={20}
                      alt=""
                    />
                  </div>
                )}
                <p className="font-normal text-lg leading-[25px]">{heading}</p>
              </div>

                  <div className="">
              {
                heading === 'Category' && <div className="">
                        Category 
                </div> 
              }
              </div>
              {
                heading === 'Condition' && <div>
                  {
                    [1, 2, 3, 4, 5].map((element,idx)=> {
                      return <div key = {idx} className="mt-[65px] flex flex-row items-center gap-6">
                            <div className="w-[24px] h-[24px] border-[1.5px] border-[#4D4D4D] rounded-[4px]"></div>
                            <p>{ '0' + element}</p>
                      </div>
                    })
                  }
                </div> 
              }

              <div className="mt-[65px]">
              {
                heading === "Price Range" && <div className="flex flex-col">
                        <div className="flex flex-col ">
                          <label htmlFor="" className="font-bold text-[14px] font-satoshi">Min Price</label>
                          <input type="text" placeholder="00" className="w-[343px] h-[48px] border-[1px] rounded-[6px] outline-none pl-3 border-[#DDDDDD]"/>
                        </div>
                        <div className="flex flex-col mt-[32px]">
                        <label htmlFor="" className="font-bold text-[14px] font-satoshi">Max Price</label>
                          <input type="text" placeholder="00" className="w-[343px] h-[48px] border-[1px] rounded-[6px] outline-none pl-3 border-[#DDDDDD]"/>
                        </div>
                </div>
              }

</div>





              <div className="flex flex-col mt-[65px] gap-12">
              {
                heading === "Brand" && ['Breitling','Officine Panerai','Omega','Rolex','Tudor','Other'].map((element,idx)=> {
                  return <div key = {idx}>
                  <div className=" flex flex-row items-center gap-6 ">
                            <div className="w-[24px] h-[24px] border-[1.5px] border-[#4D4D4D] rounded-[4px]"></div>
                            <p>{element}</p>
                      </div>
                </div>
                })
              }
              </div>
              <div className="flex flex-col gap-[48px]">
              {
                heading === "Closing Date" && ['05-Oct-2023','10-Oct-2023','21-Oct-2023','21-Oct-2023','10-Oct-2023'].map((element,idx)=> {
                  return <div className="flex flex-row items-center gap-6">

                    <div className="w-[24px] h-[24px] border-[1.5px] border-[#4D4D4D] rounded-[4px]"></div>
                    <p>{element}</p>
                  </div> 
                }) 
              }
              </div>
              <div className="flex flex-col gap-8">
                {
                  heading === 'Filters' && filters.map((element, idx) => {
                    return (
                      <>
                    { heading === 'Filters' && <div
                      key = {idx}
                        className="flex flex-row justify-between cursor-pointer"
                        onClick={() => {
                          setHeading(element.name);
                          // setSelectedFilter(idx);
                        }}
                      >
                        <h1> {element.name}</h1>

                        <Image
                          src="/Chevron_Right_MD.png"
                          width={22}
                          height={22}
                          alt=""
                        />
                      </div>
                      }
                      {/* {
                        heading === element.name && element.subArray ? element?.subArray.map((item,idx)=> {
                          console.log(item)
                          return <div key = {idx} className="text-black">{item}fadsfdas</div>
                        }) : <></> 

                      } */}
                      </>
                    );
                  })}

                {/* {
                 selectedFilter && <div className="flex flex-col gap-9">
                    
                    {filters
                      .find((filter) => filter.name === selectedFilter)
                      ?.subArray?.map((item, index) => (
                        <div key={index} className="flex flex-row gap-[24px]">
                          <div className="border-[1px] w-[24px] h-[24px] rounded-[4px]"></div>
                          <p>{item}</p>
                        </div>
                      ))}
                  </div>
                } */}
              </div>
              
            </div>
            <div className="flex flex-col justify-center items-center gap-4 mb-8">
              <Button
                btnText="Clear All"
                className="w-[342px] h-[60px] text-green rounded-[4px] hover:bg-white bg-white border-[1px] border-green"
              />
              <Button
                btnText="Clear All"
                className="w-[342px] h-[60px] bg-green rounded-[4px]"
              />
            </div>
          </div>
        )}

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
              <div
                className="flex flex-row items-center gap-[10px] border-[1px] border-[#D9D9D9] group hover:border-green cursor-pointer rounded-[4px] px-4 py-3"
                onClick={() => setIsFilter(true)}
              >
                {/* <p className="w-[20px] h-[20px] rounded-full bg-[#3AAE2A] text-white flex flex-row items-center justify-center text-[12px]">
                  4
                </p> */}
                <p className="group-hover:text-green">Filter</p>
                <Image src="/filter.png" alt="" width={24} height={24} />
              </div>

              <div className="flex flex-row items-center gap-4">
                <div
                  className="border-[1px] border-[#D9D9D9] w-[48px] h-[48px] rounded-[4px]  gap-[2px]  flex flex-col items-center justify-center cursor-pointer"
                  onClick={() => setGrid(true)}
                >
                  <div className="flex flex-row items-center gap-[2px]">
                    <div className="w-[11px] h-[11px]  rounded-[1px] border-[2px] border-[#3AAE2A]"></div>
                    <div className="w-[11px] h-[11px]  rounded-[1px] border-[2px] border-[#3AAE2A]"></div>
                  </div>

                  <div className="flex flex-row items-center gap-[2px]">
                    <div className="w-[11px] h-[11px] rounded-[1px] border-[2px] border-[#3AAE2A]"></div>
                    <div className="w-[11px] h-[11px]  rounded-[1px] border-[2px] border-[#3AAE2A]"></div>
                  </div>
                </div>

                <div
                  className="border-[1px] border-[#D9D9D9] w-[48px] h-[48px] rounded-[4px] flex flex-col items-center justify-center gap-[2px] cursor-pointer"
                  onClick={() => setGrid(false)}
                >
                  <div className="w-6 h-[11px] border-[2px] border-[#3AAE2A]"></div>
                  <div className="w-6 h-[11px] border-[2px] border-[#3AAE2A]"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full flex flex-row justify-end gap-[12px] mt-[26px]">
            {data.map((element, idx) => {
              return (
                <div
                  key={idx}
                  className="w-[135px] h-[36px] bg-[#F2F2F2] rounded-[30px] flex flex-row items-center justify-center gap-4"
                >
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

          <div
            className={`grid  gap-6 mt-8 ${
              grid ? "grid-cols-4" : "grid-cols-2"
            }`}
          >
            {watches.map((element, idx) => {
              return (
                <div
                  key={idx}
                  className={`flex items-center gap-6  ${
                    grid ? "flex-col w-[278px]" : "flex-row w-[580px]"
                  }`}
                >
                  <div className="flex flex-col">
                    <div
                      className={`relative  ${
                        grid ? "w-[278px] h-[274px]" : "h-[254px] w-[257px]"
                      } flex flex-row justify-center items-center rounded-[4px]`}
                    >
                      {grid ? (
                        <Image
                          src={element.img}
                          width={278}
                          height={274}
                          alt=""
                        />
                      ) : (
                        <Image
                          src={element.img}
                          width={257}
                          height={254}
                          alt=""
                        />
                      )}
                      <div
                        className={`absolute right-[8px] top-[8px] w-8 h-8 rounded-full border-[1px] border-[#3AAE2A] flex flex-row items-center justify-center  cursor-pointer bg-white`}
                      >
                        <Image
                          src="/Heart_01.png"
                          width={20}
                          height={20}
                          alt=""
                        />
                      </div>
                    </div>
                  </div>

                  <div className="w-[278px] h-full flex flex-col justify-between">
                    <div>
                      <p className="font-medium text-[14px] leading-[18px] text-black">
                        Decorative Objects Auction (Modern)
                      </p>
                      <div className="flex flex-col gap-[12px] mt-[24px]">
                        <h1 className="font-normal text-[14px] leading-[18px] text-[#878787] ">
                          Condition Score:
                        </h1>
                        <p className="font-medium text-base leading-[18px]">
                          3/5 Pre-Owned
                        </p>
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
                        {!grid && (
                          <button className="w-[101px] text-white h-[38px] rounded-[4px] bg-[#3AAE2A]">
                            Place Bid
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="mt-[103px]  ">
        <Footer />
      </div>
    </div>
  );
}

export default Category;
