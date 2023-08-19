import './App.css';
import React from "react";


function App() {


    const arr1 = 2
    const arr2 = 10
    const arr3 = 3
    // const arr4 = 1200
    // const arr5 = true


    const result = (a, b, c) => {
        return [...arguments].filter(elem => elem > 0).length === 2
    }
    console.log(result(arr1, arr2, arr3))


    return (
        <>
        </>
    );
}

export default App;
