import './App.css';
import React from "react";


function App() {


    const arr1 = [-5,-1,-6,-18]
    const arr2 = 3
    // const arr3 = 1.5
    // const arr4 = 8
    // const arr5 = true


    const result = (a,b) => {
        const res = a.sort((a,b)=>a - b)
        return res[b-1]
    }


    console.log(result(arr1,arr2))


    return (
        <>
        </>
    );
}

export default App;
