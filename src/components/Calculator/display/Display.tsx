import cls from './Display.module.scss';
import {memo} from "react";
import {useAppSelector} from "../../../store/typedHooks/typedHooks";
import {getDisplayed} from "../../../store/calculatorSlice/selectors/selectors";
import classNames from "classnames";


export const Display = memo(() => {
    let result = useAppSelector(getDisplayed);
    // if (!Number.isFinite(Number(result))) {
    //     result = 'Не определено';
    // }
    result = result.toString().slice(0, 15)

    const mods = {
        [cls.textMedium]: result.toString().length > 9,
        [cls.textSmall]: result.toString().length > 14,
    }
    return (
        <div draggable={true} className={cls.Display}>
            <div className={classNames(cls.displayText, mods, 'item')}>
                {result || 0}
            </div>
        </div>
    );
});