'use client'
import React, { createContext, useState, ReactNode } from "react";

export const MYPagination = createContext({
  myHeadingText: "Login",
  setMyHeadingText: (newText: string) => {},
});
export const HandleModal = createContext({
  isModalOpen:false,
  setIsModalOpen:(newText:boolean) => {}
})
export const UserAuth = createContext({
  email:'',
  setEmail:(newEmail:string) => {},
  password:'',
  setPassword:(newPassword:string) => {},
  fullName:'',
  setFullName:(fullName:string) => {},
  confirmPassword:'',
  setConfirmPassword:(confirmPassword:string) => {},
})
interface ContextProviderProps {
  children: ReactNode; // Specify the type for the 'children' prop
}
function ContextProvider({ children }: ContextProviderProps) {
  const [myHeadingText, setMyHeadingText] = useState("Login");
  const [isModalOpen,setIsModalOpen] = useState(false);
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [fullName,setFullName] = useState('');
const [confirmPassword,setConfirmPassword] = useState('');
  return (
    <MYPagination.Provider value={{ myHeadingText, setMyHeadingText }}>
      <UserAuth.Provider value = {{email,setEmail,password,setPassword,fullName,setFullName,confirmPassword,setConfirmPassword}}>
      <HandleModal.Provider value = {{
        isModalOpen,
        setIsModalOpen
      }}>
      {children}
      </HandleModal.Provider>
      </UserAuth.Provider>
    </MYPagination.Provider>
  );
}

export default ContextProvider;
