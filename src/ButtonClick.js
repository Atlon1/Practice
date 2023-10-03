import React from 'react';


const ButtonClick = ({onDone}) => {

const hadleClikCount = () => {
    if(typeof onDone === "function"){
        onDone()
    }
}



    return (
        <div>
            <button onClick={hadleClikCount}>Count</button>
            <button onClick={hadleClikCount}>Count</button>
        </div>
    );
};

export default ButtonClick;