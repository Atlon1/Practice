import './App.css';
import React from "react";


function App() {


    const arr1 = 267
    const arr2 = 2
    // const arr3 = 0.18
    // const arr4 = 1200
    // const arr5 = true


    const result = (a,b) => {
        let binary = a.toString(2)
       return parseInt(binary.split("").reverse().join(''), 2)
    }

    console.log(result(arr1,arr2))



    return (
       <>
       </>
    );
}

export default App;
