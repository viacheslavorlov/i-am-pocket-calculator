import cls from './Operations.module.scss';
import {memo, useCallback} from "react";
import {useAppDispatch} from "../../../store/typedHooks/typedHooks";
import {calculatorActions} from "../../../store/calculatorSlice/calculatorSlice";

const optionList = [
    '/', 'x', '-', '+'
]

export const Operations = memo(() => {
    const dispatch = useAppDispatch();
    const onClickHandle = useCallback((operand: string) => {
        dispatch(calculatorActions.setOperand(operand));
    }, [dispatch]);

    return (
        <div className={cls.Operations} draggable={true}>
            {optionList.map(operation => {
                return (
                    <button
                        key={operation}
                        onClick={() => onClickHandle(operation)}
                        className={cls.operand}
                    >
                        {operation}
                    </button>
                )
            })}
        </div>
    );
});

