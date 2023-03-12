import {createSlice} from "@reduxjs/toolkit";

interface CalculatorSchema {
    isFirstValue: boolean;
    isOperand: boolean;
    firstValue: number | string | null;
    secondValue: number | string | null;
    operand: string | null;
    result: number | string | null;
    displayed: number | string;
    dotDisabled: boolean;
}

const initialState: CalculatorSchema = {
    firstValue: null,
    secondValue: null,
    operand: null,
    result: null,
    isFirstValue: true,
    isOperand: false,
    displayed: 0,
    dotDisabled: false
}

const calculatorSlice = createSlice({
    name: 'calculator',
    initialState,
    reducers: {
        setFirstValue: (state, action) => {

                if (state.firstValue === null && action.payload === '.') {
                    state.dotDisabled = true;
                    state.firstValue = '0.';
                } else if (state.firstValue === null) {
                    state.firstValue = action.payload;
                    if (action.payload ==='.') {
                        state.dotDisabled = true;
                    }
                } else {
                    state.firstValue = state.firstValue + action.payload;
                    if (action.payload ==='.') {
                        state.dotDisabled = true;
                    }
                }
                state.displayed = state.firstValue ? state.firstValue : 0;

        },
        setSecondValue: (state, action) => {
            if (state.operand) {
                if (!state.secondValue) {
                    state.secondValue = action.payload;
                } else {
                    state.secondValue = state.secondValue + action.payload;
                    if (action.payload ==='.') {
                        state.dotDisabled = true;
                    }
                }
                state.displayed = state.secondValue!;
            } else {
                state.result = 0;
                state.displayed = state.secondValue ? state.secondValue : 0;
            }
        },
        setOperand: (state, action) => {
            state.isFirstValue = false;
            state.operand = action.payload;
            state.dotDisabled = false;
            if (state.result) {
                state.firstValue = state.result.toString();
                state.secondValue = null;
            }

        },
        setResult: (state) => {
            let result: number | string | null;
            const first = Number(state.firstValue);
            const second = Number(state.secondValue);
            if (Number.isFinite(first) && Number.isFinite(second) && first !==null && second !== null) {
                switch (state.operand) {
                    case '+':
                        result = first + second;
                        break;
                    case '-':
                        result = first - second;
                        break;
                    case 'x':
                        result = first * second;
                        break;
                    case '/':
                            result = first / second;
                        break;
                    default:
                        result = 0;
                        break;
                }
                state.result = result;
                state.firstValue = result.toString();
                state.displayed = result;
                state.dotDisabled = false;
            }
        },
        setDotDisabled: (state, action) => {
            state.dotDisabled = action.payload;
        }
    }
});

export const {actions: calculatorActions} = calculatorSlice;
export const {reducer: calculatorReducer} = calculatorSlice;