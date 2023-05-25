import './App.css';
import React from "react";


function App() {


    const arr1 = "ababc"
    const arr2 = 'c'
    // const arr3 = 0.18
    // const arr4 = 1200
    // const arr5 = true


    const result = (a,b) => {
        a = a.toLowerCase()
        return a.includes(b) ? a.lastIndexOf(b) - a.indexOf(b) : -1
    }


    console.log(result(arr1,arr2))

    return (
        <>
        </>
    );
}

export default App;
