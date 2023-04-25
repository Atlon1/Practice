import './App.css';
import React from "react";


function App() {


    const arr1 = 222
    const arr2 = '222'
    // const arr3 = 0.18
    // const arr4 = 1200
    // const arr5 = true


    const result = (a,b) => {
        return a === parseInt(b)
    }


    console.log(result(arr1,arr2))


    return (
        <>
        </>
    );
}

export default App;
