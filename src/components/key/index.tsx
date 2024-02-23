import './style.scss';

const Key = () => {
    return(
        <button
            onClick={ e => console.log('ok chua')}
            className="depositBox__key"
            type="button"
			>
            1
        </button>
    )
};

export default Key;