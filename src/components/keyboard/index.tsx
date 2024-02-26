import Key from '../key';
import { keyboardData } from '../../enum/common';

import './style.scss';

const KeyBoard = () => {
    return (
        <div className="depositBox__keyboard">
            { keyboardData.map(key => (
                <Key val={key.val} 
                    order={key.order} 
                    key={key.val}/>
            )) }
        </div>
    )
};

export default KeyBoard;