import './style.scss';

import { useBoxState } from '../../redux/hooks/bookReducerState';
import IndicatorLight from '../indicatorLight';

const Screen = () => {
    const boxState = useBoxState();

    const outputDisplay = boxState.passcode.replace(/./g, '*');
    return (
        <div>
            <div className={'depositBox__screen'}>
                <div className='depositBox__screen__message'>
                    {boxState.message}
                </div>
                <div className='depositBox__screen__display'>
                    {outputDisplay}
                </div>
            </div>
            <IndicatorLight />
        </div>
        
    )
};

export default Screen;