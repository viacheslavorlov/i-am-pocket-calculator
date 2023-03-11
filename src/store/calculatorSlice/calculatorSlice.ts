import {createSlice} from "@reduxjs/toolkit";

interface CalculatorShema {
    isFirstValue: boolean;
    isOperand: boolean;
    firstValue: string | number | null;
    secondValue: string | number | null;
    operand: string | null;
    result: number | string | null;
    displayed: number | string;
}

const initialState: CalculatorShema = {
    firstValue: null,
    secondValue: null,
    operand: null,
    result: null,
    isFirstValue: true,
    isOperand: false,
    displayed: 0,
}


const calculatorSlice = createSlice({
    name: 'calculator',
    initialState,
    reducers: {
        setFirstValue: (state, action) => {
            if (state.isFirstValue) {
                if (state.firstValue === null) {
                    state.firstValue = action.payload;
                } else {
                    // @ts-ignore
                    state.firstValue += Number(action.payload);
                }
                state.displayed = state.firstValue ? state.firstValue : 0;
            }
        },
        setSecondValue: (state, action) => {
            if (state.operand) {
                if (state.secondValue === null) {
                    state.secondValue = action.payload;
                } else {
                    // @ts-ignore
                    state.secondValue += Number(action.payload);
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
            if (state.result) {
                state.firstValue = state.result;
                state.secondValue = null;
            }

        },
        setResult: (state) => {
            let result: number | string | null;
            const first = Number(state.firstValue);
            const second = Number(state.secondValue);
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
                    if (second === 0) {
                        result = 'Не определено';
                    } else {
                        result = first / second;
                    }
                    break;
                default:
                    result = 0;
                    break;
            }

            state.result = result;
            state.firstValue = result;
            state.displayed = result;
        }
    }
});

export const {actions: calculatorActions} = calculatorSlice;
export const {reducer: calculatorReducer} = calculatorSlice;