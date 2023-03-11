import cls from './Digits.module.scss';
import {memo, useCallback} from "react";
import {useAppDispatch} from "../../../store/typedHooks/typedHooks";
import {calculatorActions} from "../../../store/calculatorSlice/calculatorSlice";

export const AllDigits: string[]= [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '0',
    ','
]

interface DigitsProps {
    isFirst: boolean;
}


export const Digits = memo(({isFirst}: DigitsProps) => {
    const dispatch = useAppDispatch();
    const onClickHandle = (num: string) => {
        if (isFirst) {
            dispatch(calculatorActions.setFirstValue(num));
        } else {
            dispatch(calculatorActions.setSecondValue(num))
        }
    }

    return (
        <div className={cls.Digits}>
            {AllDigits.map(digit => {
                return (
                    <button
                        onClick={() => onClickHandle(digit)}
                        key={digit}
                        className={
                        digit === '0' ? cls.digit + ' ' + cls.zero : cls.digit
                    }>
                        {digit}
                    </button>
                )
            })}

        </div>
    );
});
