import './App.css';
import React from "react";


function App() {


    const arr1 = 'this is my string'
    const arr2 = 'value'
    // const arr3 = 0.18
    // const arr4 = 1200
    // const arr5 = true


    const result = (a) => {
     return a.replace(/[aeiou]/ig, (m,i) => i + 1)
    }


    console.log(result(arr1))

    return (
        <>
        </>
    );
}

export default App;
