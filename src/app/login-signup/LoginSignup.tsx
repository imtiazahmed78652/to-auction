import Image from "next/image";
import React, { useState, useContext } from "react";
import EnterMobileNumber from "./EnterMobileNumber";
import SelectInterest from "./SelectInterest";
import SelectPaymentMethod from "./SelectPaymentMethod";
import EnterCardDetails from "./EnterCardDetails";
import CreditCardAuthorization from "./CreditCardAuthorization";
import FloatingInput from "../components/input/Input";
import { monumentum, satoshiVariable } from "../layout";
import Button from "../components/Button/Button";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../hooks";
import { updateHeadingText } from "../GlobalRedux/Features/counterSlice";
import InputField from "../components/InputField/InputField";
import { RootState } from "../GlobalRedux/store";
import {
  // setEmail,
  setInputValue,
  // setPassword,
  setFormData,
  resetForm,
  // setFullName,
  // setConfirmPassword,
} from "../GlobalRedux/Features/inputSlice";
import { HeadingTextContext } from "../GlobalRedux/provider";
import { MYPagination, HandleModal, UserAuth } from "../ContextApi/contextProvide";

const LoginSignup: React.FC<{}> = () => {
  const [emailErr, setEmailErr] = useState("");
  const [passwordErr, setPasswordErr] = useState("");
  const [fullNameErr, setFullNameErr] = useState("");
  const [confirmPasswordErr, setConfirmPasswordErr] = useState("");
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

  const [isEnterMobileNumber, setIsEnterMobileNumber] = useState(0);
  const { myHeadingText, setMyHeadingText } = useContext(MYPagination);
  const { isModalOpen, setIsModalOpen } = useContext(HandleModal);
  const {email,setEmail,password,setPassword,fullName,setFullName,confirmPassword,setConfirmPassword} = useContext(UserAuth);

  React.useEffect(() => {
    if (isEnterMobileNumber === 1) {
    }
  }, [isEnterMobileNumber]);

  const validateEmail = (email: string) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!email) {
      setEmailErr("Email is required");
      return false;
    }
    if (email) {
      setEmailErr("");
    }
    if (!emailRegex.test(email)) {
      setEmailErr("Invalid email format");
      return false;
    }
    return true;
  };

  function validatePassword(password: string) {
    // At least 8 characters
    if (password.length < 8) {
      setPasswordErr("Password Must be 8 letters long");
      return false;
    }

    // At least one uppercase letter
    if (!/[A-Z]/.test(password)) {
      setPasswordErr("At least one uppercase letter");
      return false;
    }

    // At least one lowercase letter
    if (!/[a-z]/.test(password)) {
      setPasswordErr("At least one lowercase letter");
      return false;
    }

    // At least one digit
    if (!/\d/.test(password)) {
      setPasswordErr("At least one digit");
      return false;
    }

    // At least one special character (e.g., !, @, #, $, etc.)
    if (!/[!@#$%^&*]/.test(password)) {
      setPasswordErr("At least one special character (e.g., !, @, #, $, etc.)");
      return false;
    }
    if (password) {
      setPasswordErr("");
    }

    // All checks passed, the password is valid
    return true;
  }

  const inputValue = useAppSelector(
    (state: RootState) => state.input.inputValue
  );
  // const { confirmPassword } = useAppSelector(
  //   (state: RootState) => state.input
  // );

  const handleLogin = (e: any) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      return;
    }
    if (!validatePassword(password)) {
      return;
    }
    // dispatch(setEmail(email));
    setEmail(email)
    // dispatch(setPassword(password));
    setIsModalOpen(false);
  };

  const handleCreateAccount = (e: React.FormEvent) => {
    e.preventDefault();

    // Reset any existing error messages
    setFullNameErr("");
    setEmailErr("");
    setPasswordErr("");
    setConfirmPasswordErr("");

    let isValid = true; // Flag to track overall validation status

    if (!fullName) {
      setFullNameErr("Full name is required");
      isValid = false;
    }

    if (!validateEmail(email)) {
      // setEmailErr('Invalid email');
      isValid = false;
    }

    const passwordValidationResult = validatePassword(password);
    if (validatePassword(password)) {
      // setPasswordErr(passwordValidationResult);
      if(passwordValidationResult) {
        setPassword(password)
      } else {
        setPasswordErr('Password require')
      }
      
      isValid = false;
    }

    if (password !== confirmPassword) {
      setPasswordErr("Passwords do not match");
      setConfirmPasswordErr("Passwords do not match");
      isValid = false;
    }
    console.log(isValid);
    if (isValid) {
      
      setEmail(email);
      // dispatch(setPassword(password));
      // dispatch(setFullName(fullName));
      // dispatch(setConfirmPassword(confirmPassword));
      setMyHeadingText("Enter Mobile Number"); 
    }
  };

  const handleInputChange = (value: string, name: string) => {
    
    
    
    if (name === "confirmPassword") {
      // dispatch(setConfirmPassword(value));
    }
  };

  
  const handleEmailChange = (value:string, name:string) => {
    if(name === 'Email') {
      setEmail(value);
    }
    if(name === 'Password'){
      setPassword(value);
    }
    if(name === 'FullName'){
      setFullName(value);
    }
    if(name === 'confirmPassword') {
      setConfirmPassword(value);
    }

  };
  console.log(confirmPassword);
  
  return (
    <div
      className={`fixed inset-0 ${
        satoshiVariable.className
      } flex items-center justify-center z-50 ${isModalOpen ? "" : "hidden"}`}
    >
      <div className="modal-content bg-black bg-opacity-[25%] flex flex-row justify-center items-center w-full h-full p-4 overflow-auto">
        <div className="bg-white rounded-[20px] w-[529px] pb-[43px]">
          <div className="h-[61px] w-full  px-[26.19px] py-[25px] flex flex-row items-center justify-between">
            <div></div>
            <div
              className={`${satoshiVariable.className} font-normal text-base leading-[18px] text-satoshi-dark `}
            >
              {myHeadingText}
            </div>

            <button onClick={() => setIsModalOpen(false)}>
              <Image src="/cross.png" alt="" width={9.26} height={9.26} />
            </button>
          </div>
          {myHeadingText === "Enter Mobile Number" && <EnterMobileNumber />}

          {myHeadingText === "Select Interest" && <SelectInterest />}
          {myHeadingText === "Choose Payment Method" && <SelectPaymentMethod />}
          {myHeadingText === "Enter Card Details" && <EnterCardDetails />}
          {myHeadingText === "Credit Card Authorization" && (
            <CreditCardAuthorization />
          )}

          {myHeadingText === "Login" ||
          myHeadingText === "Register an Account" ? (
            <div className="flex flex-row items-center justify-center mt-[53px]  ">
              <div className="flex flex-row items-center w-[400px] border-b-[1px]">
                <button
                  className={`w-[200px] h-[50px] ${
                    satoshiVariable.className
                  } text-sm font-medium  leading-[18px] hover:bg-green hover:bg-opacity-[15%] hover:border-b-[3px] border-green cursor-pointer ${
                    myHeadingText === "Login"
                      ? "bg-green bg-opacity-[15%] border-b-[3px] border-green text-green"
                      : "text-dark-border"
                  }`}
                  onClick={() => setMyHeadingText("Login")}
                >
                  Login
                </button>
                <button
                  className={`w-[200px] h-[50px] ${
                    satoshiVariable.className
                  } text-sm font-medium  leading-[18px] hover:bg-green hover:bg-opacity-[15%] hover:border-b-[3px] border-green cursor-pointer ${
                    myHeadingText === "Register an Account"
                      ? "bg-green bg-opacity-[15%] border-b-[3px] border-green text-green"
                      : "text-dark-border"
                  }`}
                  onClick={() => {
                    setMyHeadingText("Register an Account");
                  }}
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
              {myHeadingText === "Register an Account" && (
                <div className="flex flex-col items-end ">
                  <div className="w-[400px] h-[46px] border-[1px]  rounded-[6px] flex flex-row items-center justify-between pr-4 text-[#878787] p-1 border-[#DDDDDD] ">
                    <FloatingInput
                      label="Full Name"
                      type="text"
                      value={fullName}
                      className="outline-none bg-transparent border-light-border text-light w-[350px] rounded-[6px] pl-[24px]   h-[46px]"
                      onChange={(value) => handleEmailChange(value, "FullName")}
                    />

                    <Image alt="" src="/email-box.png" width={18} height={14} />
                  </div>
                  <p className="text-error-text font-bold text-xs mt-[8px]">
                    {fullNameErr}
                  </p>
                </div>
              )}

              {myHeadingText === "Login" ||
              myHeadingText === "Register an Account" ? (
                <>
                  <div className="flex flex-col items-end">
                    <div className="w-[400px] h-[46px] border-[1px] rounded-[6px] flex flex-row items-center pr-4 justify-between  text-[#878787]  border-[#DDDDDD] ">
                      <FloatingInput
                        label="Email"
                        type="email"
                        className="outline-none bg-transparent border-light-border text-light rounded-[6px] pl-[24px]  w-[350px] h-[46px]"
                        value={email}
                        onChange={(value)=> handleEmailChange(value,'Email')}
                      />
                      <Image
                        alt=""
                        src="/email-box.png"
                        width={18}
                        height={14}
                      />
                    </div>
                    <p className="font-bold text-error-text text-xs mt-[8px]">
                      {emailErr}
                    </p>
                  </div>
                  <div className="flex flex-col items-end">
                    <div className="w-[400px] h-[46px] border-[1px] rounded-[6px] flex flex-row items-center justify-between pr-4 text-[#878787]  border-[#DDDDDD] ">
                      <FloatingInput
                        label="Password"
                        value={password}
                        type="password"
                        onChange={(value) =>
                          handleEmailChange(value, "Password")
                        }
                        className="outline-none bg-transparent border-light-border text-light w-[350px] rounded-[6px] pl-[24px] h-[46px]"
                      />
                      <Image alt="" src="/Lock.svg" width={18} height={14} />
                    </div>
                    <p className="font-bold text-xs text-error-text mt-[8px]">
                      {passwordErr}
                    </p>
                  </div>
                </>
              ) : (
                ""
              )}
              {myHeadingText === "Register an Account" && (
                <div className="flex flex-col items-end">
                  <div className="w-[400px] h-[46px] border-[1px] rounded-[6px] flex flex-row items-center justify-between pr-4 text-[#878787] p-1 border-[#DDDDDD] ">
                    <FloatingInput
                      label="Confirm Password"
                      type="password"
                      value={confirmPassword}
                      onChange={(value) =>
                        handleEmailChange(value, "confirmPassword")
                      }
                      className="outline-none bg-transparent border-light-border w-[350px] text-light rounded-[6px] pl-[24px] h-[46px]"
                    />
                    <Image alt="" src="/Lock.svg" width={18} height={14} />
                  </div>
                  <p className="text-error-text font-bold text-xs">
                    {confirmPasswordErr}
                  </p>
                </div>
              )}
            </div>
            {myHeadingText === "Login" ? (
              <div className="text-green font-semibold text-sm leading-[18px] text-right  w-[400px]">
                Reset Password
              </div>
            ) : (
              ""
            )}
          </div>

          {myHeadingText === "Login" ||
          myHeadingText === "Register an Account" ? (
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
                {myHeadingText === "Register an Account" && (
                  <div className="w-[400px] mt-8 font-normal text-[11px] leading-[18px]">
                    By creating an account, you agree to our{" "}
                    <span className="text-green underline"> Terms of Use</span>{" "}
                    and acknowledge our{" "}
                    <span className="text-green underline">
                      {" "}
                      Privacy Policy
                    </span>
                    . Depending on how you use TPAuction.
                  </div>
                )}
                {myHeadingText === "Register an Account" && (
                  <Button
                    className="w-[400px] h-[56px] mt-[30px] bg-green rounded-[8px] text-white"
                    btnText="Create"
                    onClick={(e) => handleCreateAccount(e)}
                  />
                )}

                {myHeadingText === "Login" && (
                  <Button
                    className="w-[400px] h-[56px] mt-[30px] bg-green hover:bg-hover-green rounded-[8px] text-white"
                    btnText="Login"
                    onClick={(e) => handleLogin(e)}
                  />
                )}
                {myHeadingText === "Login" && (
                  <div className="mt-4 font-normal text-sm leading-[18px]">
                    Don&apos;t have account?{" "}
                    <span className="text-green"> Register </span>
                  </div>
                )}
                {myHeadingText === "Register an Account" && (
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
