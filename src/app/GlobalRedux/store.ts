'use client'

import { combineReducers,configureStore } from "@reduxjs/toolkit"
import counterReducer from './Features/counterSlice'
// import inputReducer from './Features/counterSlice';
// import InputField from "../components/InputField/InputField"
import inputReducer from './Features/inputSlice'

import phoneReducer from './Features/phoneNumberSlice'
import interestReducer from './Features/interestSlice'
import cardDetailsReducer from './Features/cardDetailsSlice'
const rootReducer = combineReducers({
    counter:counterReducer,
    input:inputReducer,
    phone:phoneReducer,
    interest:interestReducer,
    cardDetails:cardDetailsReducer
})

export const store = configureStore({
    reducer:rootReducer
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

