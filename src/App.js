import './App.css';
import React from "react";


function App() {


    const arr1 = "233"
    // const arr2 = 'Phoenix'
    // const arr3 = 'Arizona'
    // const arr4 = 8
    // const arr5 = true


    const result = (a) => {
       return  a.toString()
            .split("")
            .reverse()
            .map( (a, i) => a * Math.pow(10, i))
            .filter(a => a > 0)
            .reverse()
            .join(" + ");
    }


    console.log(result(arr1))


    return (
        <>
        </>
    );
}

export default App;
