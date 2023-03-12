import cls from './FieldArea.module.scss';
import icon from '../../../assets/addNewItem.svg';
import {memo} from "react";
import classNames from "classnames";
export const FieldArea = memo(() => {

    return (
        <div
            onDragOver={event => console.log('dragged')}
            onDrop={e => e.dataTransfer}
            className={classNames(cls.FieldArea, 'field')}>
            <div className={cls.placeholder}>
                <img src={icon} alt="icon"/>
                <div className={cls.header}>Перетащите сюда</div>
                <div className={cls.text}>любой элемент из левой панели</div>
            </div>
        </div>
    );
});

