import './App.css';
import React from "react";


function App() {


    const arr1 = 1.01
    // const arr2 = [1, 2, 5]
    // const arr3 = 0.18
    // const arr4 = 1200
    // const arr5 = true


    const result = (a) => {
        return a >= 1.01 ? "F" : a >= 0.9 ? "A" : a >= 0.8 ? "B" : a >= 0.7 ? "C" : a >= 0.6 ? "D" :  "F"
    }

    console.log(result(arr1))


    return (
        <>
        </>
    );
}

export default App;
