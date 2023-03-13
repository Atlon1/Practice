import './App.css';
import React from "react";


function App() {


    const arr1 = ["1", "2", "3"]
    // const arr2 = 850
    // const arr3 = 70
    // const arr4 = 8
    // const arr5 = true


    const result = (a) => {

    return a.map(Number)


    }


    console.log(result(arr1))


    return (
        <>
        </>
    );
}

export default App;
