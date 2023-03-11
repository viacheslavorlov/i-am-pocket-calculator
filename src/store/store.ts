import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {calculatorReducer} from "./calculatorSlice/calculatorSlice";

export const store = configureStore({
    reducer: combineReducers({
        calculator: calculatorReducer
    }),
    devTools: true
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;