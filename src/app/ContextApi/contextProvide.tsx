"use client";
import React, { createContext, useState, ReactNode } from "react";
type CardContextType = {
  cardHolderName: string | '';
  setCardHolderName: (cardHolderName: string) => void;
  cardNumber: number | null;
  setCardNumber: (cardNumber: number | null) => void;
  expiryDate: number | null;
  setExpiryDate: (expiryDate: number | null) => void;
  cvv: number | null;
  setCvv: (cvv: number | null) => void;
};
export const HandleCardDetails = createContext<CardContextType | undefined>(
  undefined
);

export const MYPagination = createContext({
  myHeadingText: "Login",
  setMyHeadingText: (newText: string) => {},
});
export const HandleModal = createContext({
  isModalOpen: false,
  setIsModalOpen: (newText: boolean) => {},
});
export const HandleInterest = createContext<{
  interest: string[];
  setInterest: React.Dispatch<React.SetStateAction<string[]>>;
}>({
  interest: [],
  setInterest: () => {},
});

export const UserAuth = createContext({
  email: "",
  setEmail: (newEmail: string) => {},
  password: "",
  setPassword: (newPassword: string) => {},
  fullName: "",
  setFullName: (fullName: string) => {},
  confirmPassword: "",
  setConfirmPassword: (confirmPassword: string) => {},
  phoneNumber: "",
  setPhoneNumber: (phoneNumber: string) => {},
  paymentMethod: "",
  setPaymentMethod: (paymentMethod: string) => {},
});

interface ContextProviderProps {
  children: ReactNode; // Specify the type for the 'children' prop
}

function ContextProvider({ children }: ContextProviderProps) {
  const [myHeadingText, setMyHeadingText] = useState("Login");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [interest, setInterest] = React.useState<string[]>([]);
  const [paymentMethod, setPaymentMethod] = React.useState("");
  const [cardHolderName, setCardHolderName] = React.useState("");
  const [cardNumber, setCardNumber] = React.useState<number | null>(null);
  const [expiryDate, setExpiryDate] = React.useState<number | null>(null);
  const [cvv, setCvv] = React.useState<number | null>(null);
  return (
    <MYPagination.Provider value={{ myHeadingText, setMyHeadingText }}>
      <UserAuth.Provider
        value={{
          phoneNumber,
          setPhoneNumber,
          email,
          setEmail,
          password,
          setPassword,
          fullName,
          setFullName,
          confirmPassword,
          setConfirmPassword,
          paymentMethod,
          setPaymentMethod,
        }}
      >
        <HandleCardDetails.Provider
          value={{
            cardHolderName,
            setCardHolderName,
            cardNumber,
            setCardNumber,
            expiryDate,
            setExpiryDate,
            cvv,
            setCvv,
          }}
        >
          <HandleInterest.Provider value={{ interest, setInterest }}>
            <HandleModal.Provider
              value={{
                isModalOpen,
                setIsModalOpen,
              }}
            >
              {children}
            </HandleModal.Provider>
          </HandleInterest.Provider>
        </HandleCardDetails.Provider>
      </UserAuth.Provider>
    </MYPagination.Provider>
  );
}

export default ContextProvider;
