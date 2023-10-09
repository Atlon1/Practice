import React from 'react';

const Cars = ({data, remove, setData}) => {



    return (
        <div>
            <div>{data.name}</div>
            <button onClick={() => remove(data.id)}>Sprzedaj</button>
        </div>
    );
};

export default Cars;