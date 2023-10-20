"use client";
import { createContext, useState, useContext } from "react";

import { Provider } from "react-redux";
import { store } from "./store";

export const HeadingTextContext = createContext(null);
export function Providers({ children }) {
  const [myHeadingText, setMyHeadingText] = useState("Login");
  return (
    
      <Provider store={store}>
    <HeadingTextContext.Provider
      value={{
        myHeadingText,
        setMyHeadingText,
      }}
    ></HeadingTextContext.Provider>    
        {children}
      
      </Provider>
    
  );
}
