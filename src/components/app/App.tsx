import './App.module.scss'
import cls from './App.module.scss';
import {FieldArea} from "../Field/FieldArea/FieldArea";
import UpperPanel from "../UpperPanel/UpperPanel";
import {getConstructorList} from "../../store/constructorSlice/selectors/selectors";
import {useSelector} from "react-redux";

export interface ComponentElement<T> {
    id: number;
    component: T;
}

interface ComponentProps {
    Component: ComponentElement<() => JSX.Element>
    draggable: boolean;
    onDragOver: (e: DragEvent) => void
    onDragLeave: (e: DragEvent) => void
    onDragStart: (e: DragEvent) => void
    onDragEnd: (e: DragEvent) => void
    onDrop: (e: DragEvent) => void
}


const draggableId = Date.now();

function App() {
    const componentList = useSelector(getConstructorList);
    console.log(componentList)


    return (
        <div className={cls.App}>
            <div className={cls.mainContainer}>
                <div className={cls.container}>
                    {componentList && componentList.map(block => (
                        <block.component
                            key={block.id}
                        />
                    ))}
                </div>
                <div className={cls.field}>
                    <div className={cls.upperPanel}>
                        <UpperPanel/>
                    </div>
                    <FieldArea/>
                </div>
            </div>

        </div>
    )
}

export default App




