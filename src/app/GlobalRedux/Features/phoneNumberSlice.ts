'use client'
import { createSlice,PayloadAction } from "@reduxjs/toolkit";


interface PhoneNumberState {
    phoneNumber:string
}
const initialState: PhoneNumberState = {
    phoneNumber:'',
}

const phoneNumberSlice = createSlice({
    name: "phone",
    initialState,
    reducers: {
    getPhoneNumber:(state,action) => {
      state.phoneNumber = action.payload
    },
  },
})
export const {getPhoneNumber} = phoneNumberSlice.actions;
export default phoneNumberSlice.reducer;