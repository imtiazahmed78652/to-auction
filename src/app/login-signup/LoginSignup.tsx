import Image from "next/image";
import React, { useState } from "react";
import EnterMobileNumber from "./EnterMobileNumber";
import SelectInterest from "./SelectInterest";
import SelectPaymentMethod from "./SelectPaymentMethod";
import EnterCardDetails from "./EnterCardDetails";
import CreditCardAuthorization from "./CreditCardAuthorization";
import FloatingInput from "../components/input/Input";
import { monumentum } from "../layout";
import Button from "../components/Button/Button";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../hooks";
import { updateHeadingText } from "../GlobalRedux/Features/counterSlice";
import InputField from "../components/InputField/InputField";
import { RootState } from "../GlobalRedux/store";
import { setEmail, setInputValue, setPassword,setFormData, resetForm,setFullName,setConfirmPassword } from "../GlobalRedux/Features/inputSlice";


const LoginSignup: React.FC<{ isOpen: boolean; onClose: () => void }> = ({
  isOpen,
  onClose,
}) => {
  const [emailErr,setEmailErr] = useState('');
  const [passwordErr,setPasswordErr] = useState('');
  const [fullNameErr, setFullNameErr] = useState('');
  const [confirmPasswordErr,setConfirmPasswordErr] = useState('');
  const paginationText = useAppSelector((state)=> state.counter.pagination);
  const dispatch = useDispatch();
  
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
  const [headingText, setHeadingText] = useState("Login");

  const [isEnterMobileNumber, setIsEnterMobileNumber] = useState(0);
  const nextModal = (text: string) => {
    setHeadingText(text);
  };
  React.useEffect(() => {
    if (isEnterMobileNumber === 1) {
      setHeadingText("Enter Mobile Number");
    }
  }, [isEnterMobileNumber]);

  const validateEmail = (email:string) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!email) {
      setEmailErr('Email is required');
      console.log('nothing happend')
      return false;
    }
    if(email) {
      setEmailErr('');
    }
    if (!emailRegex.test(email)) {
      setEmailErr('Invalid email format');
      return false;
    }
    return true;
  };
  function validatePassword(password:string) {
    // At least 8 characters
    if (password.length < 8) {
      setPasswordErr('Password Must be 8 letters long')
      return false;
    }
  
    // At least one uppercase letter
    if (!/[A-Z]/.test(password)) {
      setPasswordErr('At least one uppercase letter')
      return false;
    }
  
    // At least one lowercase letter
    if (!/[a-z]/.test(password)) {
      setPasswordErr('At least one lowercase letter')
      return false;
    }
  
    // At least one digit
    if (!/\d/.test(password)) {
      setPasswordErr('At least one digit')
      return false;
    }
  
    // At least one special character (e.g., !, @, #, $, etc.)
    if (!/[!@#$%^&*]/.test(password)) {
      setPasswordErr('At least one special character (e.g., !, @, #, $, etc.)')
      return false;
    }
    if(password) {
      setPasswordErr('');
    }
  
    // All checks passed, the password is valid
    return true;
  }
  


  const inputValue = useAppSelector((state: RootState) => state.input.inputValue);
  const email = useAppSelector((state:RootState)=> state.input.email);
  const password= useAppSelector((state:RootState)=> state.input.password)
  const fullName = useAppSelector((state:RootState)=> state.input.fullName);
  const confirmPassword= useAppSelector((state:RootState)=> state.input.confirmPassword);
  
const handleLogin = (e:any) => {
  e.preventDefault();
  console.log(email,password);
  
  if(validateEmail(email) && validatePassword(password)) {
    dispatch(setFormData({email,password,})) 
    dispatch(resetForm());
  }
  
}
  const handleCreateAccount = (e:React.FormEvent) => {
    e.preventDefault();
    if(fullName === '') {
      setFullNameErr('Name is required')
      return false; // dispatch(updateHeadingText('Enter Mobile Number'))}
    }
    if(!validateEmail(email) && !validatePassword(password)){
      setEmailErr('Email Is Required');
      setPassword('Password is Required');
      return false; 
    } 
    if(confirmPassword === '') {
      setConfirmPasswordErr('Password Required')
      return false;
    }
    if(password === '') {
      setPasswordErr('Password is Required');
      return false;
    }
    return  dispatch(setFormData({email,password,fullName,confirmPassword})),dispatch(resetForm()),dispatch(updateHeadingText('Enter Mobile Number'));

  }

const handleInputChange = (value: string,name:string) => {
  if(name === 'Password'){
    dispatch(setPassword(value))
  } 
  if(name === 'Email') {
    
    dispatch(setEmail(value))
  }
  if(name === 'fullName') {
    dispatch(setFullName(value));
  }
  if(name === 'confirmPassword') {
    dispatch(setConfirmPassword(value))
  }
  
  console.log('Input value:', value);
};
console.log(email,'my email');
console.log('password',password)
  return (
    <div
      className={`fixed inset-0 flex items-center justify-center z-50 ${
        isOpen ? "" : "hidden"
      }`}
    >
      <div className="modal-content bg-black bg-opacity-[25%] flex flex-row justify-center items-center w-full h-full p-4 overflow-auto">
        <div className="bg-white rounded-[20px] w-[529px] pb-[43px]">
          <div className="h-[61px] w-full  px-[26.19px] py-[25px] flex flex-row items-center justify-between">
            <div></div>
            <div
              className={`${monumentum.className} font-normal text-lg leading-[18px] text-[#9C9C9C]`}
            >
              {/* {headingText} */}
              {paginationText}
            </div>

            <button onClick={onClose}>
              <Image src="/cross.png" alt="" width={9.26} height={9.26} />
            </button>
          </div>
          {/* <InputField value = {inputValue} onChange={()=> handleInputChange(inputValue,'input-')} /> */}
          {paginationText === "Enter Mobile Number" && (
            <EnterMobileNumber headingText={headingText} onNext={nextModal} />
          )}

          {paginationText === "Select Interest" && (
            <SelectInterest headingText={headingText} onNext={nextModal} />
          )}
          {paginationText === "Choose Payment Method" && (
            <SelectPaymentMethod headingText={headingText} onNext={nextModal} />
          )}
          {paginationText === "Enter Card Details" && (
            <EnterCardDetails headingText={headingText} onNext={nextModal} />
          )}
          {paginationText === "Credit Card Authorization" && (
            <CreditCardAuthorization
              headingText={headingText}
              onNext={nextModal}
              onClose={onClose}
            />
          )}

          {paginationText === "Login" || paginationText === "Register an Account" ? (
            <div className="flex flex-row items-center justify-center mt-[53px]  ">
              <div className="flex flex-row items-center w-[400px] border-b-[1px]">
                <button
                  className={`w-[200px] h-[50px] hover:bg-green hover:bg-opacity-[15%] hover:border-b-[3px] border-green cursor-pointer ${
                    headingText === "Login"
                      ? "bg-green bg-opacity-[15%] border-b-[3px] border-green"
                      : ""
                  }`}
                  onClick={() => {setHeadingText("Login");dispatch(updateHeadingText('Login'));}}
                >
                  Login
                </button>
                <button
                  className={`w-[200px] h-[50px] hover:bg-green hover:bg-opacity-[15%] hover:border-b-[3px] border-green cursor-pointer ${
                    headingText === "Register an Account"
                      ? "bg-green bg-opacity-[15%] border-b-[3px] border-green"
                      : ""
                  }`}
                  onClick={() => {setHeadingText("Register an Account");dispatch(updateHeadingText('Register an Account'))}}
                >
                  Register
                </button>
              </div>
            </div>
          ) : (
            ""
          )}

          <div className="flex flex-col items-center gap-[8px]">
            <div className="flex flex-col items-center gap-[16px] mt-8 w-[400px]">
              {paginationText === "Register an Account" && (
                <div className="flex flex-col items-end ">
                <div className="w-[400px] h-[46px] border-[1px]  rounded-[6px] flex flex-row items-center justify-between pr-4 text-[#878787] p-1 border-[#DDDDDD] ">
                  <FloatingInput
                    label="Full Name"
                    value= {fullName}
                    className="outline-none bg-transparent rounded-[6px] pl-[24px]  w-[100%] h-[46px]"
                    onChange={(value)=> handleInputChange(value,'fullName')}
                  />

                  <Image alt="" src="/email-box.png" width={18} height={14} />
                </div>
                <p className="text-error-text font-bold text-xs mt-[8px]">{fullNameErr}</p>
                </div>
              )}

              

              {paginationText === "Login" || paginationText === "Register an Account" ? (
                <>
                <div className="flex flex-col items-end">
                  <div className="w-[400px] h-[46px] border-[1px] rounded-[6px] flex flex-row items-center pr-4 justify-between  text-[#878787]  border-[#DDDDDD] ">
                    <FloatingInput
                      label="Email"
                      className="outline-none bg-transparent rounded-[6px] pl-[24px]  w-full h-[46px]"
                    
                    value={email}
                      
                      onChange={(value)=> handleInputChange(value,'Email')}
                    />
                    <Image alt="" src="/email-box.png" width={18} height={14} />
                  </div>
                  <p className="font-bold text-error-text text-xs mt-[8px]">{emailErr}</p>
                  </div>
                  <div className="flex flex-col items-end">
                  <div className="w-[400px] h-[46px] border-[1px] rounded-[6px] flex flex-row items-center justify-between pr-4 text-[#878787]  border-[#DDDDDD] ">
                    <FloatingInput
                      label="Password"
                      value = {password}
                      
                      onChange={(value)=> handleInputChange(value,'Password')}
                      className="outline-none bg-transparent rounded-[6px] pl-[24px]  w-full h-[46px]"
                    />
                    <Image alt="" src="/Lock.svg" width={18} height={14} />
                  </div>
                  <p className="font-bold text-xs text-error-text mt-[8px]">{passwordErr}</p>
                  </div>
                </>
              ) : (
                ""
              )}
              {paginationText === "Register an Account" && (
                <div className="flex flex-col items-end"> 
                <div className="w-[400px] h-[46px] border-[1px] rounded-[6px] flex flex-row items-center justify-between pr-4 text-[#878787] p-1 border-[#DDDDDD] ">
                  <FloatingInput
                    label="Confirm Password"
                    value = {confirmPassword}
                    onChange={(value)=> handleInputChange(value,'confirmPassword')}
                    className="outline-none bg-transparent rounded-[6px] pl-[24px]  w-full h-[46px]"
                  />
                  <Image alt="" src="/Lock.svg" width={18} height={14} />
                </div>
                <p className="text-error-text font-bold text-xs">{confirmPasswordErr}</p>
                </div>
                
              )}
            </div>
            {paginationText === "Login" ? (
              <div className="text-green font-semibold text-sm leading-[18px] text-right  w-[400px]">
                Reset Password
              </div>
            ) : (
              ""
            )}
          </div>

          {paginationText === "Login" || paginationText === "Register an Account" ? (
            <div className="flex flex-col items-center justify-center mt-[32px] ">
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
                    <Image
                      src="/Apple logo.png"
                      width={27}
                      height={26}
                      alt=""
                    />
                  </div>
                </div>
                {paginationText === "Register an Account" && (
                  <div className="w-[400px] mt-8 font-normal text-[11px] leading-[18px]">
                    By creating an account, you agree to our{" "}
                    <span className="text-green underline">
                      {" "}
                      Terms of Use
                    </span>{" "}
                    and acknowledge our{" "}
                    <span className="text-green underline">
                      {" "}
                      Privacy Policy
                    </span>
                    . Depending on how you use TPAuction.
                  </div>
                )}
                {
                paginationText === "Register an Account" && (
                  <Button className="w-[400px] h-[56px] mt-[30px] bg-green rounded-[8px] text-white" btnText="Create" onClick={(e)=> handleCreateAccount(e)}/>)
                }

                {paginationText === "Login" && (
                  <Button className="w-[400px] h-[56px] mt-[30px] bg-green hover:bg-hover-green rounded-[8px] text-white" btnText="Login" onClick={(e)=> handleLogin(e)}/>
                )}
                {paginationText === "Login" && (
                  <div className="mt-4 font-normal text-sm leading-[18px]">
                    Don&apos;t have account?{" "}
                    <span className="text-green"> Register </span>
                  </div>
                )}
                {paginationText === "Register an Account" && (
                  <div className="mt-4 font-normal text-sm leading-[18px]">
                    Already have an account??{" "}
                    <span className="text-green"> Login </span>
                  </div>
                )}
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
