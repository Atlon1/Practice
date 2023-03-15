import './App.css';
import React from "react";


function App() {


    const arr1 = [1, 3, 5, 7]
    // const arr2 = 2
    // const arr3 = 70
    // const arr4 = 8
    // const arr5 = true


    const result = (a) => {
        return a.reduce((a,b)=>  a + b)/a.length
    }


    console.log(result(arr1))


    return (
        <>
        </>
    );
}

export default App;
