import './style.scss';


const Screen = () => {
    return (
        <div className={'depositBox__screen active'}>
            <div>{'Locked or Unlocked'}</div>
            <div style={{ textAlign: 'right', fontSize: '32px' }}>
                Screen Display data
            </div>
        </div>
    )
};

export default Screen;