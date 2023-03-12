import cls from './Equal.module.scss';
import {useAppDispatch} from "../../../store/typedHooks/typedHooks";
import {calculatorActions} from "../../../store/calculatorSlice/calculatorSlice";
import {memo} from "react";
export const Equal = memo(() => {
    const dispatch = useAppDispatch();

    const onClickHandle = () => {
        dispatch(calculatorActions.setResult());
    }

    return (
        <div draggable={true} className={cls.Equal}>
            <button
                className={cls.btn}
                onClick={onClickHandle}
            >
                =
            </button>
        </div>
    );
});