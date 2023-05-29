import './App.css';
import React from "react";


function App() {


    const arr1 = 75
    const arr2 = 25
    // const arr3 = 0
    // const arr4 = 1200
    // const arr5 = true


    const result = (a,b) => {
            return Math.round(b/(1-a/100)* 100)/ 100
    }


    console.log(result(arr1,arr2))

    return (
        <>
        </>
    );
}

export default App;
