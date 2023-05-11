import './App.css';
import React from "react";


function App() {


    const arr1 = ["X", "X", "X", "O", "X", "X"]
    // const arr2 = 5
    // const arr3 = 0.18
    // const arr4 = 1200
    // const arr5 = true


    const result = (a) => {
        return !a.includes('O') ? "None available!" : a.indexOf('O')

    }


    console.log(result(arr1))

    return (
        <>
        </>
    );
}

export default App;
