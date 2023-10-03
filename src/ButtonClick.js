import React from 'react';


const ButtonClick = ({title, onDone}) => {


const handleBuyClick = () => {
    if (typeof onDone === 'function') {
        onDone(title);
    }
}


    return (
        <div>
            <h1>{title}</h1>
            <button onClick={handleBuyClick}>kup</button>
        </div>
    );
};

export default ButtonClick;