import cls from './Digits.module.scss';
import {memo, useCallback} from "react";
import {useAppDispatch, useAppSelector} from "../../../store/typedHooks/typedHooks";
import {calculatorActions} from "../../../store/calculatorSlice/calculatorSlice";
import {getDotDisabled, getIsFirstValue} from "../../../store/calculatorSlice/selectors/selectors";
import classNames from "classnames";

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

export const Digits = memo(() => {
    const dispatch = useAppDispatch();
    const isFirst = useAppSelector(getIsFirstValue);
    const dotDisabled = useAppSelector(getDotDisabled);
    const onClickHandle = (num: string) => {
        let result = num;
        if (num === ',') {
            result = '.'
        }
        if (isFirst) {
            dispatch(calculatorActions.setFirstValue(result));
        } else {
            dispatch(calculatorActions.setSecondValue(result))
        }
    }

    return (
        <div className={cls.Digits} draggable={true} >
            {AllDigits.map(digit => {
                return (
                    <button
                        onClick={() => onClickHandle(digit)}
                        key={digit}
                        disabled={digit === ',' && dotDisabled}
                        className={classNames(cls.digit, {[cls.zero]: digit === '0'})
                    }>
                        {digit}
                    </button>
                )
            })}
        </div>
    );
});
