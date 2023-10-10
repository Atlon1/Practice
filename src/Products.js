import React from 'react';

const Products = ({data , setCart, cart}) => {

    const handleBuy = (name) => {
        if (!cart.includes(name)){
            setCart([...cart, name])
        }
    }

    console.log(cart)
    return (
        <div>
            <h2>Produkty:</h2>
            <ul>
                {data.products.map((product) =>{
                    return (
                        <div key={product.id}>
                            <li>{product.name}</li>
                            <button onClick={handleBuy.bind(this, product.name)}>Kup!</button>
                        </div>
                    )
                })}
            </ul>

        </div>
    );
};

export default Products;