import React from "react";
import Paginations from "./Paginations";
import Image from "next/image";
import Button from "../components/Button/Button";
import { useAppSelector } from "../hooks";
import { useDispatch } from "react-redux";
import { updateHeadingText } from "../GlobalRedux/Features/counterSlice";
const SelectPaymentMethod: React.FC<{
  headingText: string;
  onNext: (text:string) => void;
}> = ({ headingText, onNext }) => {

  const [selectedPaymentMethod,setSelectedPaymentMethod] = React.useState<string | null>(null)
  const paginationText = useAppSelector((state)=> state.counter.pagination)
  const dispatch = useDispatch();
  
  const paymentMethod = [

    {
      name: "MasterCard",
      img: "/master-card.png",
    },
    {
      name: "Paypal",
      img: "/paypal.png",
    },
    {
      name: "Visa",
      img: "/Visa.png",
    },
  ];
  return (
    <div className="flex flex-col items-center">
      <div className="w-[400px] mt-[50px]">
        <Paginations />


        
        <div className="flex flex-col items-center mt-10">
          <div className="w-[400px] flex flex-col gap-6">
            {paymentMethod.map((element, idx) => {
              return (
                <button key={idx} className="flex hover:shadow-lg flex-row items-center justify-between border-[1px] border-light-border cursor-pointer rounded-[6px] h-[48px] px-6" onClick={()=> setSelectedPaymentMethod(element.name)}>
                  <div className="flex flex-row items-center gap-4">
                    <Image
                      src={element.img}
                      width={24}
                      height={24}
                      alt="Mastercard"
                    />
                    <p className="text-xs  font-medium leading-[16.39px] text-[#6C7171]">
                      {element.name}
                    </p>
                  </div>
                  <div className={` ${selectedPaymentMethod === element.name ? 'border-green' : 'border-light-border'}  w-[20px] h-[20px] border-[1px]  rounded-full flex flex-row  items-center justify-center`}>
                     {
                      selectedPaymentMethod === element.name && <div className="w-[10px] h-[10px] border-[1px] rounded-full bg-green border-green">

                      </div>
                     } 
                  </div>  
                </button>
              );
            })}
          </div>

          <div className="flex flex-row items-center justify-between mt-10 gap-6">
          <button className="w-[188px] h-[56px] text-[#3AAE2A]">
            I&apos;ll do it later
          </button>
          
          <Button className="w-[188px] h-[56px] text-white rounded-[8px]" btnText="Verify" onClick={()=> {onNext('Enter Card Details');dispatch(updateHeadingText('Enter Card Details'))}}/>
        </div>

        </div>
        
    </div>
    </div>
  );
};

export default SelectPaymentMethod;
