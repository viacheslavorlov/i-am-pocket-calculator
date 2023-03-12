import cls from './UpperPanel.module.scss';
import eye from '../../assets/eye.svg';
import selector from '../../assets/selector.svg';
import classNames from "classnames";

export const UpperPanel = () => {
    return (
        <div className={cls.UpperPanel}>
            <button className={classNames(cls.btn, cls.btnRuntime)}>
                <img className={cls.eye} src={eye} alt=""/>
                <div>Runtime</div>
            </button>
            <button className={classNames(cls.btn, cls.btnConstructor, cls.inactive)}>
                <img className={cls.eye} src={selector} alt=""/>
                <div className={cls.btnText}>Constructor</div>
            </button>
        </div>
    );
};

export default UpperPanel;
