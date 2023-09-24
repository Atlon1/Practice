import React from 'react';
import Item from "./Item";

const UserDetails = ({data}) => {
    return (
        <>
            {data.map((elem, idx)=> {
                return (
                    <h2 key={idx}>Product {elem.name}</h2>
                )
            })}
            <ul>
                {data.map((elem, idx)=>{
                    return (
                      <Item product={elem}/>
                    )
                })}
            </ul>
        </>
    );
};

export default UserDetails;