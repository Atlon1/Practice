import './App.css';
import React from "react";


function App() {


    const arr1 = ["apple","banana","rottenKiwi","melone","orange"]
    // const arr2 = '\C'
    // const arr3 = 0.18
    // const arr4 = 1200
    // const arr5 = true


    const result = (a) => {
       const res = a.map((elem) => elem.replace('rotten', '').toLowerCase())

        return res
    }


    console.log(result(arr1))


    return (
        <>
        </>
    );
}

export default App;
