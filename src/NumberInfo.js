import React from 'react';

const NumberInfo = (props) => {
    return (
        <ul>
            {props.data.map((item, index) => (
                item === Number && item % 2 === 1 && item === Math.pow(2) ?
                    <li key={index}> {item} </li> : 0
            ))}
        </ul>
    );
};

export default NumberInfo;