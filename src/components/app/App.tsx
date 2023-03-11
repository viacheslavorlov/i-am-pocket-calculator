import './App.module.scss'
import {Display} from "../Calculator/display/Display";
import cls from './App.module.scss';
import {Operations} from "../Calculator/operations/Operations";
import {Digits} from "../Calculator/digits/Digits";
import {Equal} from "../Calculator/equal/Equal";
import {FieldArea} from "../Field/FieldArea/FieldArea";
import {useAppSelector} from "../../store/typedHooks/typedHooks";
import {getDisplayed, getIsFirstValue} from "../../store/calculatorSlice/selectors/selectors";

function App() {
    const displayd = useAppSelector(getDisplayed);
    const isFirst = useAppSelector(getIsFirstValue);

    return (
        <div className={cls.App}>
            <div className={cls.mainContainer}>
                <div className={cls.container}>
                    <Display value={displayd}/>
                    <Operations/>
                    <Digits isFirst={isFirst}/>
                    <Equal/>
                </div>
                <div className={cls.field}>
                    <FieldArea/>
                </div>
            </div>


        </div>
    )
}

export default App
