import React from 'react';


const ButtonClick = ({title, onBuy}) => {

    const handleClickButton = () => {
        if (typeof onBuy === 'function') {
            onBuy(title);
        }
    }

    return (
        <div>
            <h1>{title}</h1>
            <button onClick={handleClickButton}>Buy</button>

        </div>
    );
};

export default ButtonClick;