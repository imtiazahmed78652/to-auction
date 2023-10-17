'use client'
import { createSlice,PayloadAction } from "@reduxjs/toolkit";

interface InputState {
    inputValue:string;
    email:string,
    password:string,
    fullName:string,
    confirmPassword:string
}

const initialState: InputState = {
    inputValue: "",
    email:'',
    password:'',
    fullName:'',
    confirmPassword:'',
  };

  const inputSlice = createSlice({
    name: "input",
    initialState,
    reducers: {
        setFormData:(state,action) => {
        const { email, password,fullName,confirmPassword } = action.payload;
        state.email = email;
        state.password = password;
        state.fullName = fullName;
        state.confirmPassword = confirmPassword
        },
        resetForm: (state) => {
            // Reset the form values to their initial state
            state.email = initialState.email;
            state.password = initialState.password;
            state.fullName = initialState.fullName;
            state.confirmPassword = initialState.fullName;
          },
      setInputValue: (state, action: PayloadAction<string>) => {
        state.inputValue = action.payload;
      },
      setEmail:(state,action:PayloadAction<string>) => {
        state.email = action.payload;
      },
      setFullName :(state,action:PayloadAction<string>) => {
            state.fullName = action.payload;
      },
      setConfirmPassword:(state,action:PayloadAction<string>)=> {
        state.confirmPassword = action.payload;
      },
      setPassword: (state,action:PayloadAction<string>) => {
            state.password=action.payload;
      }
    },
  });  

export const { setInputValue,setEmail,setPassword,setFormData,resetForm,setFullName,setConfirmPassword } = inputSlice.actions;
export default inputSlice.reducer;