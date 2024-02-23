import './style.scss';
import React from 'react';

interface KeyConfig {
    val: string;
    order: string
}

const Key: React.FC<KeyConfig> = ({val, order}) => {
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        // update current state
        console.log('value', e.currentTarget.textContent);
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