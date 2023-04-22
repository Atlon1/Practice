import './App.css';
import React from "react";


function App() {


    const arr1 = [3, 4, 4, 3, 6, 3]
    // const arr2 = 2
    // const arr3 = 0.18
    // const arr4 = 1200
    // const arr5 = true


    const result = (a) => {
        return a.filter((val,i) => a.lastIndexOf(val) == i)
    }


    console.log(result(arr1))


    return (
        <>
        </>
    );
}

export default App;
