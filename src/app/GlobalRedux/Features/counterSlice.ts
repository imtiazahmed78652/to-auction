"use client";

import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import {PayloadAction} from '@reduxjs/toolkit'

const initialState = {
  value: 0,
  pagination: 'Login',
  loginSignUpInputFields : [
    {inputs:[]},
    {inputs:[]},
    {inputs:[]},
  ]
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,


  reducers: {
    updateHeadingText:(state,action:PayloadAction<string>) => {
      state.pagination = action.payload
    },
    
  },
});

export const selectCount = (state: RootState) => state.counter.value
export const  {updateHeadingText} = counterSlice.actions
export default counterSlice.reducer;