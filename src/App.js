import './App.css';
import React from "react";



function App() {


    const arr1 = ["google", "twitter", "facebook"]
    // const arr2 = 5
    // const arr3 = 'Arizona'
    // const arr4 = 8
    // const arr5 = true


    const result = (a) => {
    }


    console.log(result(arr1))


    return (
        <>
            {arr1.map((elem, index)=> {
                return (
                    <li key={index}><a href={`https://${elem}.com`}>{`https://${elem}.com`}</a> </li>
                )
            })}
        </>
    );
}

export default App;