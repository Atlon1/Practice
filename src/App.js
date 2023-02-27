import './App.css';
import React, {useState} from "react";


function App() {


    const arr1 = [-3, -2, -1]
    // const arr2 = 3


    const result = (a) => {
        const res = a.sort((a,b) => {
            return a - b
        }).reverse()
        return (res[0] - res[1])+ (res[1] - res[2])
    }

    console.log(result(arr1))

    return (
        <>
        </>
    );
}

export default App;
