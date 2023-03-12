import {createSlice} from "@reduxjs/toolkit";
import {ComponentElement} from "../../components/app/App";
import {MemoExoticComponent} from "react";
import {Display} from "../../components/Calculator/display/Display";
import {Operations} from "../../components/Calculator/operations/Operations";
import {Digits} from "../../components/Calculator/digits/Digits";
import {Equal} from "../../components/Calculator/equal/Equal";



interface ConstructorSchema<T> {
    currentElement: T | null;
    constructorList: T[];
    readyElements: T[];
}

const initialState: ConstructorSchema<ComponentElement<MemoExoticComponent<() => JSX.Element>>> = {
    constructorList: [
    {id: 1, component: Display },
    {id: 2, component: Operations},
    {id: 3, component: Digits},
    {id: 4, component: Equal}
],
    currentElement: null,
    readyElements: []
}

const constructorSLice = createSlice({
    name: 'constructorState',
    initialState,
    reducers: {
        addToField: (state, action) => {
            state.readyElements.push(
                ...state.constructorList.filter(item => item.id === action.payload)
            )
        }
    }
});

export const {actions: constructorActions} = constructorSLice;
export const {reducer: constructorReducer} = constructorSLice