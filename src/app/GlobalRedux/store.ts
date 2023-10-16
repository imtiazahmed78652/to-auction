'use client'

import { combineReducers,configureStore } from "@reduxjs/toolkit"
import counterReducer from './Features/counterSlice'
// import inputReducer from './Features/counterSlice';
// import InputField from "../components/InputField/InputField"
import inputReducer from './Features/inputSlice'


const rootReducer = combineReducers({
    counter:counterReducer,
    input:inputReducer
    // input:,
})

export const store = configureStore({
    reducer:rootReducer
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch