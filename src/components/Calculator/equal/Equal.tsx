import cls from './Equal.module.scss';
import {useAppDispatch} from "../../../store/typedHooks/typedHooks";
import {calculatorActions} from "../../../store/calculatorSlice/calculatorSlice";
export const Equal = () => {
    const dispatch = useAppDispatch();

    const onClickHandle = () => {
        dispatch(calculatorActions.setResult());
    }

    return (
        <div className={cls.Equal}>
            <button
                className={cls.btn}
                onClick={onClickHandle}
            >
                =
            </button>
        </div>
    );
};