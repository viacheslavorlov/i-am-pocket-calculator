import cls from './Display.module.scss';
import {memo} from "react";

interface DisplayProps {
    value: number | string;
}
export const Display = memo(({value}: DisplayProps) => {
    let result = value;
    if (!Number.isFinite(result)) {
        result = 'Не определено';
    }
    if (result.toString().length > 9 && typeof result === 'number') {
        result = result.toString().slice(0, 9)
    }
    return (
        <div draggable className={cls.Display}>
            <div className={cls.displayText}>
                {result || 0}
            </div>
        </div>
    );
});