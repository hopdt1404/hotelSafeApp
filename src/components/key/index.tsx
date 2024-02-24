import './style.scss';
import React from 'react';
import { useDispatch } from "react-redux";
import { setPasscode } from '../../redux/boxSlice';

interface KeyConfig {
    val: string;
    order: string
}

const Key: React.FC<KeyConfig> = ({val, order}) => {
    const dispatch = useDispatch();
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        dispatch(setPasscode(e.currentTarget.textContent));
    }
    
    return(
        <button
            onClick={ e => handleClick(e) }
            className="depositBox__key"
            type="button"
            style={{order: order}}
			>
            {val}
        </button>
    )
};

export default Key;