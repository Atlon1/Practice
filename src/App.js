import './App.css';
import React from "react";


function App() {


    const arr1 = [5,4,2,3]
    // const arr2 = 2
    // const arr3 = 1.5
    // const arr4 = 8
    // const arr5 = true


    const result = (a) => {
       return  a.sort((a, b) => a - b).reduce((pre, val) => pre + val * a.pop(), 0)
    }


    console.log(result(arr1))


    return (
        <>
        </>
    );
}

export default App;
