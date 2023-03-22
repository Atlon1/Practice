import './App.css';
import React from "react";


function App() {


    const arr1 = "alligator"
    // const arr2 = "z"
    // const arr3 = 1.5
    // const arr4 = 8
    // const arr5 = true


    const result = (a) => {
        if (a.toLowerCase() === "alligator"){
            return "small"
        } else {
            return "wide"
        }
    }


    console.log(result(arr1))


    return (
        <>
        </>
    );
}

export default App;
