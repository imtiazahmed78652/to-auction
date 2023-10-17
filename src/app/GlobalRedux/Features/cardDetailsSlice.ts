"use client";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { create } from "domain";

interface CardDetailsTypes {
    cardHolderName: string;
    cardNumber?: number;
    expiryDate?: string;
    cvv?: number;
}

const initialState: CardDetailsTypes = {
  cardHolderName: "",
};

const cardDetailsSlice = createSlice({
  name: "cardDetails",
  initialState,
  reducers: {
    setCardHolderName: (state,action:PayloadAction<string>) => {
           state.cardHolderName = action.payload; 
    },
    setCardNumber:(state,action:PayloadAction<number>)=>{
           state.cardNumber = action.payload 
    },
    setCardDate:(state,action)=> {
        state.expiryDate = action.payload
    },
    setCvv:(state,action:PayloadAction<number>)=> {
            state.cvv = action.payload;
    } 
  },
});
export const {setCardDate,setCardHolderName,setCvv,setCardNumber} = cardDetailsSlice.actions;
export default cardDetailsSlice.reducer;