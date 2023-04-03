import './App.css';
import React from "react";


function App() {


    const arr1 = 35231
    // const arr2 = 2
    // const arr3 = 1.5
    // const arr4 = 8
    // const arr5 = true


    const result = (a) => {
        return String(a).split('').map(Number).reverse()
    }


    console.log(result(arr1))


    return (
        <>
        </>
    );
}

export default App;
