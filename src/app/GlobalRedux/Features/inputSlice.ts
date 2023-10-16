import { createSlice,PayloadAction } from "@reduxjs/toolkit";
interface InputState {
    inputValue:string;
    email:string,
    password:string,
}

const initialState: InputState = {
    inputValue: "",
    email:'',
    password:''
  };
  const inputSlice = createSlice({
    name: "input",
    initialState,
    reducers: {
        setFormData:(state,action) => {
        const { email, password } = action.payload;
        state.email = email;
        state.password = password;
        },
        resetForm: (state) => {
            // Reset the form values to their initial state
            state.email = initialState.email;
            state.password = initialState.password;
          },
      setInputValue: (state, action: PayloadAction<string>) => {
        state.inputValue = action.payload;
      },
      setEmail:(state,action:PayloadAction<string>) => {
        state.email = action.payload;
      },
      setPassword: (state,action:PayloadAction<string>) => {
            state.password=action.payload;
      }
    },
  });  

export const { setInputValue,setEmail,setPassword,setFormData,resetForm } = inputSlice.actions;
export default inputSlice.reducer;