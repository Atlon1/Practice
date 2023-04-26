import './App.css';
import React from "react";


function App() {


    const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 9, 9, 9, 8]
    // const arr2 = '\C'
    // const arr3 = 0.18
    // const arr4 = 1200
    // const arr5 = true


    const result = (a) => {
        let arr = Array.from(new Set(a))
        return parseInt(arr.sort().join(''))
    }


    console.log(result(arr1))


    return (
        <>
        </>
    );
}

export default App;
