import './App.css';
import React from "react";


function App() {


    const arr1 = "LEET"
    const arr2 = 'value'
    // const arr3 = 0.18
    // const arr4 = 1200
    // const arr5 = true


    const result = (a) => {

        return a.replace(/79(?=7)/g, '7');
    }


    console.log(result(arr1))

    return (
        <>
        </>
    );
}

export default App;
