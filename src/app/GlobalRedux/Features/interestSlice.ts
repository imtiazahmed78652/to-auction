'use client'
import { createSlice,PayloadAction } from "@reduxjs/toolkit";

interface InterestState {
    interest:string[]
}
const initialState:InterestState = {
    interest: [], // Your initial state is an empty array for interests.
  };


const interestSlice = createSlice({
name:'interest',
initialState,
reducers:{
    addInterest: (state,action) => {
        state.interest.push(action.payload);
    },
    removeInterest:(state,action) => {
        state.interest = state.interest.filter((item)=> item != action.payload);
    }
}   
});

export const  {addInterest, removeInterest} = interestSlice.actions;
export default interestSlice.reducer;