import './App.css';
import React from "react";


function App() {


    const arr1 = [-40, -20, 320, 350, 500]
    const arr2 = 'value'
    // const arr3 = 0.18
    // const arr4 = 1200
    // const arr5 = true


    const result = (a, b) => {
        if (b === "value") {
            a.sort((a, b) => a - b)
            return a[0]
        } else if (b === "index") {
            a.sort((a, b) => a - b)
            return a.indexOf(1)
        }
    }


    console.log(result(arr1, arr2))

    return (
        <>
        </>
    );
}

export default App;
