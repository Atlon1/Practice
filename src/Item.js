import React from 'react';

const Item = ({product}) => {


    return (
       <li>{product.name} {product.price}</li>

    );
};

export default Item;