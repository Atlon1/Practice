import './App.css';
import React from "react";


function App() {


    const arr1 = 12
    const arr2 = 5
    // const arr3 = 0.18
    // const arr4 = 1200
    // const arr5 = true


    const result = (a, b) => {
        const res = (b + 1)
        const res2 = a / res

        return `${res2}x^${res}`
    }

    console.log(result(arr1, arr2))


    return (
        <>
        </>
    );
}

export default App;
