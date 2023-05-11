import './App.css';
import React from "react";


function App() {


    const arr1 = 11
    // const arr2 = 5
    // const arr3 = 0.18
    // const arr4 = 1200
    // const arr5 = true


    const result = (a) => {
        return /^[012345]+$/g.test(!a) ? "NOT!!" : "Special!!"

    }


    console.log(result(arr1))

    return (
        <>
        </>
    );
}

export default App;
