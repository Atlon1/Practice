import React from 'react';

const Cart = ({cart}) => {
    return (
        <div>
            <h1>Koszyk:</h1>
            <ul>
                {cart.map((item) => {
                    return (
                        <li key={item}>{item}</li>
                    )
                })}
            </ul>
        </div>
    );
};

export default Cart;