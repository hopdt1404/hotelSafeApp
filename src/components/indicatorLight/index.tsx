
import { useBoxState } from '../../redux/hooks/bookReducerState';
import './style.scss';

const IndicatorLight = () => {
    const boxState = useBoxState();
    return (
        <div className={"depositBox__indicator"}>
            <div className={ boxState.isBoxLocked ? "depositBox__indicator__light red" : "depositBox__indicator__light green"}></div>
        </div>
    )
};

export default IndicatorLight;