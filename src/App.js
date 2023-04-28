import './App.css';
import React from "react";


function App() {


    const arr1 ="Tuesday January 29, 10pm"
    // const arr2 = 1.23
    // const arr3 = 0.18
    // const arr4 = 1200
    // const arr5 = true


    const result = (a) => {
       const res = a.split(',')[0]
        return res
    }

    console.log(result(arr1))


    return (
        <>
        </>
    );
}

export default App;
