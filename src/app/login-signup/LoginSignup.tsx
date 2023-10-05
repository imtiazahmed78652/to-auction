import Image from "next/image";
import React, { useState } from "react";
import EnterMobileNumber from "./EnterMobileNumber";
import SelectInterest from "./SelectInterest";
import SelectPaymentMethod from "./SelectPaymentMethod";
import EnterCardDetails from "./EnterCardDetails";
import CreditCardAuthorization from "./CreditCardAuthorization";
import FloatingInput from "../components/input/Input";

const LoginSignup: React.FC<{ isOpen: boolean; onClose: () => void }> = ({
  isOpen,
  onClose,
}) => {
  const socialIcons = [
    {
      img: "",
    },
    {
      img: "",
    },
    {
      img: "",
    },
  ];
  const [headingText,setHeadingText] = useState('Login');
  const [isEnterMobileNumber, setIsEnterMobileNumber] = useState(0) 
  const nextModal = (text:string) => {
    setHeadingText(text);
  }
React.useEffect(()=> {
    if(isEnterMobileNumber === 1) {
        setHeadingText('Enter Mobile Number')
    }
    
},[isEnterMobileNumber])
  return (
    <div
      className={`fixed inset-0 flex items-center justify-center z-50 ${
        isOpen ? "" : "hidden"
      }`}
    >
      
      <div className="modal-content bg-white bg-opacity-20 flex flex-row justify-center items-center w-full h-full p-4 overflow-auto">
        {/* Modal content goes here */}

        <div className="bg-white rounded-[20px] w-[529px] pb-[43px]">
        
            
          <div className="h-[61px] w-full  px-[26.19px] py-[25px] flex flex-row items-center justify-between">
            <div>
              
            </div>
            <div className="font-normal text-lg leading-[18px] text-[#9C9C9C]">
              {headingText}
            </div>
            {/* <div ></div> */}
            <button onClick={onClose}>
              <Image src="/cross.png" alt="" width={9.26} height={9.26} />
            </button>
          </div>

{
    headingText === "Enter a mobile number" && <EnterMobileNumber headingText = {headingText} onNext={nextModal} />
}

{
    headingText === 'Select interest' && <SelectInterest headingText={headingText} onNext = {nextModal}/>
}
{
    headingText === 'choose payment method' && <SelectPaymentMethod headingText= {headingText} onNext = {nextModal}/>
}
{
    headingText === 'Enter Card Details' && <EnterCardDetails headingText= {headingText} onNext = {nextModal}/>
}
{
    headingText === 'credit card authorization' && <CreditCardAuthorization headingText= {headingText} onNext = {nextModal} onClose = {onClose}/>
}

{
    headingText === 'Login' || headingText === 'Register an Account' ? <div className="flex flex-row items-center justify-center mt-[53px]  ">
    <div className="flex flex-row items-center w-[400px] border-b-[1px]">
      <button className={`w-[200px] h-[50px] hover:bg-[#3AAE2A] hover:bg-opacity-20 hover:border-b-[3px] border-[#3AAE2A] cursor-pointer ${headingText === 'Login' ? 'bg-[#3AAE2A] bg-opacity-20 border-b-[3px] border-[#3AAE2A]' : ''}`} onClick={()=> setHeadingText('Login')}>
        Login
      </button>
      <button className={`w-[200px] h-[50px] hover:bg-[#3AAE2A] hover:bg-opacity-20 hover:border-b-[3px] border-[#3AAE2A] cursor-pointer ${headingText === 'Register an Account' ? 'bg-[#3AAE2A] bg-opacity-20 border-b-[3px] border-[#3AAE2A]' : ''}`} onClick={()=> setHeadingText('Register an Account')}>
        Register
      </button>
    </div>
  </div> : ''
}          



          <div className="flex flex-col items-center gap-[8px]">
            <div className="flex flex-col items-center gap-[16px] mt-8 w-[400px]">

           {
            headingText=== 'Register an Account' && <div className="w-[400px] h-[46px] border-[1px] rounded-[6px] flex flex-row items-center justify-between pr-4 text-[#878787] p-1 border-[#878787] ">
            {/* <input
              type="text"
              className=" outline-none  pl-[24px] pr-4 w-full h-full"
              placeholder="Full Name"
            /> */}
            <FloatingInput  label = 'Full Name' className = 'outline-none bg-transparent rounded-[6px] pl-[24px]  w-full h-[46px]'/>

            <Image alt="" src="/email-box.png" width={18} height={14} />
        </div> 
           } 

{
    headingText === 'Login' || headingText === 'Register an Account' ? 
    <>
    <div className="w-[400px] h-[46px] border-[1px] rounded-[6px] flex flex-row items-center pr-4 justify-between  text-[#878787]  border-[#878787] ">
                
                <FloatingInput  label = 'Email' className = 'outline-none bg-transparent rounded-[6px] pl-[24px]  w-full h-[46px]'/>
                <Image alt="" src="/email-box.png" width={18} height={14} />
              </div>

              <div className="w-[400px] h-[46px] border-[1px] rounded-[6px] flex flex-row items-center justify-between pr-4 text-[#878787]  border-[#878787] ">
                {/* <input
                  type="text"
                  className=" outline-none  pl-[24px] pr-4 w-full h-full"
                  placeholder="Password"
                /> */}
                <FloatingInput label = 'Password' className = 'outline-none bg-transparent rounded-[6px] pl-[24px]  w-full h-[46px]'/>
                <Image alt="" src="/Lock.svg" width={18} height={14} />
              </div>
    
    </> : ""
}              



              {
                headingText ==='Register an Account' && <div className="w-[400px] h-[46px] border-[1px] rounded-[6px] flex flex-row items-center justify-between pr-4 text-[#878787] p-1 border-[#878787] ">
                {/* <input
                  type="text"
                  className=" outline-none  pl-[24px] pr-4 w-full h-full"
                  placeholder="Confirm Password"
                /> */}
                <FloatingInput  label = 'Full Name' className = 'outline-none bg-transparent rounded-[6px] pl-[24px]  w-full h-[46px]'/>
                <Image alt="" src="/Lock.svg" width={18} height={14} />
              </div>
              }
            </div>
          {
            headingText === 'Login' || headingText === 'Register an Account' ? <div className="text-[#3AAE2A] font-semibold text-sm leading-[18px] text-right  w-[400px]">
            Reset Password
          </div> : ''
          }  
          </div>



      {
       headingText === 'Login' || headingText === 'Register an Account' ?  <div className="flex flex-col items-center justify-center mt-[32px] ">
       <div className="w-[400px] flex flex-row items-center justify-center gap-[9px]">
         <div className="w-full h-[2px] bg-[#DBDBDB]"></div>
         <p>Or</p>
         <div className="w-full h-[2px] bg-[#DBDBDB]"></div>
       </div>
       <div className=" flex flex-col items-center justify-center">
         <div className="font-normal text-base leading-[18px] mt-[24px]">
           Continue With
         </div>
         <div className="w-[400px] flex flex-row items-center gap-6 mt-6">
           <div className="flex flex-row items-center justify-center w-[117px] h-[48px] border-[1px] border-[#D8D8D8] rounded-[6px]">
             <Image src="/google.png" width={27} height={26} alt="" />
           </div>
           <div className="flex flex-row items-center justify-center w-[117px] h-[48px] border-[1px] border-[#D8D8D8] rounded-[6px]">
             <Image src="/Facebook2.png" width={27} height={26} alt="" />
           </div>
           <div className="flex flex-row items-center justify-center w-[117px] h-[48px] border-[1px] border-[#D8D8D8] rounded-[6px]">
             <Image src="/Apple logo.png" width={27} height={26} alt="" />
           </div>
         </div>
        {
           headingText === 'Register an Account' && <div className="w-[400px] mt-8 font-normal text-[11px] leading-[18px]">By creating an account, you agree to our <span className="text-[#3AAE2A] underline"> Terms of Use</span> and acknowledge our <span className="text-[#3AAE2A] underline"> Privacy Policy</span>. Depending on how you use TPAuction.</div>
        }
        {
         headingText === 'Register an Account' && <button className="w-[400px] h-[56px] mt-[30px] bg-[#3AAE2A] rounded-[8px] text-white" onClick = {()=> setHeadingText('Enter a mobile number')}>
         Create
       </button>  
        } 
        {
           headingText === 'Login' && <button className="w-[400px] h-[56px] mt-[30px] bg-[#3AAE2A] rounded-[8px] text-white">
           Login
         </button>
        } 
        {
           headingText === 'Login' && <div className="mt-4 font-normal text-sm leading-[18px]">
           Don&apos;t have account?{" "}
           <span className="text-[#3AAE2A]"> Register </span>
         </div>
        } 
        {
           headingText === 'Register an Account' && <div className="mt-4 font-normal text-sm leading-[18px]">
           Already have an account??{" "}
           <span className="text-[#3AAE2A]"> Login </span>
         </div>
        } 
       </div>
     </div> : ''  
      } 
        




        
        
        </div>

      </div>
    </div>
  );
};

export default LoginSignup;
