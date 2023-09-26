import React from 'react';

const Func = (props) => {

    const data = () =>{
        console.log(props.name, props.surname)
    }
    return (
        <div>
           <button onClick={data}>Dane Użytkoanika</button>
        </div>
    );
};

export default Func;