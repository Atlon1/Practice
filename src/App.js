import './App.css';
import React from "react";


function App() {


    const arr1 = [65,60,75,55,60,63,64,45]
    // const arr2 = [1, 2, 5]
    // const arr3 = 0.18
    // const arr4 = 1200
    // const arr5 = true


    const result = (a) => {
       return  Math.floor((Math.sqrt(a.map((elem) => elem * elem).reduce((a,b) => a + b))) / 2)

    }

    // const predictAge = (...ages) => Math.hypot(...ages) / 2 | 0;

    console.log(result(arr1))


    return (
        <>
        </>
    );
}

export default App;
