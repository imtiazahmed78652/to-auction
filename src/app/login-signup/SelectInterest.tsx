'use client'
import React from "react";
import { Pagination } from "swiper/modules";
import Paginations from "./Paginations";
import Image from "next/image";
import Button from "../components/Button/Button";
import { useAppSelector } from "../hooks";
import { useDispatch } from "react-redux";
import { updateHeadingText } from "../GlobalRedux/Features/counterSlice";
import { addInterest, removeInterest } from "../GlobalRedux/Features/interestSlice";


type Props = {
    headingText:string,
  onNext: (text: string) => void;
};


const SelectInterest: React.FC<Props> = ({ headingText, onNext }) => {

  const [interest, setInterest] = React.useState<string[]>([]);
  const dispatch = useDispatch();
  const interestState = useAppSelector((state)=> state.interest.interest);
  console.log(interestState,'interestState')
   
  // dispatch(addInterest(interestState))
  const data = [ 
    {
      img: "/hand-bag.png",
      name: "Jewellery",
    },
    {
      img: "/watch.png",
      name: "Watches",
    },
    {
      img: "/ring.png",
      name: "Ring",
    },
  ];

  const handleSubmit = () => {
    if(interestState.length === 0){
      return false;
    }else {
      dispatch(updateHeadingText('Choose Payment Method'))
    }
    
  }
  

  return (
    <div className="mt-[50px] grid place-items-center">
      <div className="w-[400px]">
        <Paginations />
      </div>
      <div className="grid place-items-center mt-12">
        <div className="w-[400px] grid grid-cols-2 gap-6 place-items-center">
          {data.map((element, idx) => {
            const selectedInterest = interestState.includes(element.name)
            return (
              <div 
              onClick={() => {
                if (interestState.includes(element.name)) {
                  dispatch(removeInterest(element.name));
                } else {
                  dispatch(addInterest(element.name));
                }
              }}
              // onClick={() => setInterest(prevInterest => (
              //   selectedInterest
              //     ? prevInterest.filter(item => item !== element.name)
              //     : [...prevInterest, element.name]
              // ))} 
              key={idx} className={` ${selectedInterest ? 'border-green' : 'border-dark-border'} cursor-pointer hover:shadow-xl w-[188px] h-[50px] border-[2px] rounded-[38px] flex flex-row items-center justify-center gap-4`}>
                <Image src={element.img} width={25} height={28} alt="" />
                <h1>{element.name}</h1>
              </div>
            );
          })}
        </div>
    </div>
      <Button className="w-[400px] h-[56px]  rounded-[8px] mt-[62px] text-white" btnText="Create" onClick={handleSubmit}/>
    </div>
  );
};

export default SelectInterest;
