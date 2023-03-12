import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {calculatorReducer} from "./calculatorSlice/calculatorSlice";
import {constructorReducer} from "./constructorSlice/constructorSLice";

export const store = configureStore({
    reducer: combineReducers({
        calculator: calculatorReducer,
        constructorState: constructorReducer
    })
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;