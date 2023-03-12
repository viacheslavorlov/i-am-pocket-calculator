import {RootState} from "../../store";

export const getResult = (state: RootState) => state.calculator.result;

export const getIsFirstValue = (state: RootState) => state.calculator.isFirstValue;

export const getIsOperand = (state: RootState) => state.calculator.isOperand;

export const getSecondValue = (state: RootState) => state.calculator.secondValue;

export const getDisplayed = (state: RootState) => state.calculator.displayed;

export const getDotDisabled = (state: RootState) => state.calculator.dotDisabled;
